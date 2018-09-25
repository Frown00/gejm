import React, { Component } from 'react';
import GameFront from './GameFront';
import GameBack from './GameBack';
import RatingBadge from './RatingBadge';

export default class Game extends Component {
    constructor(props) {
        super(props);
        
        this.gameIsFlipped = this.gameIsFlipped.bind(this);
        this.getGenreStyleClass = this.getGenreStyleClass.bind(this);
        this.stopPropagation = this.stopPropagation.bind(this);
    }

    
    componentDidMount() {
        let marks = document.querySelectorAll('.image-mark');
        for(let i = 0; i < marks.length; i++) {
            marks[i].addEventListener('click', this.stopPropagation);
        };
        
        
    }

    componentWillUnmount() {
        let marks = document.querySelectorAll('.image-mark');
        for(let i = 0; i < marks.length; i++) {
            marks[i].removeEventListener('click', this.stopPropagation);
        };
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    gameIsFlipped(event) {
        let game = event.currentTarget;

        game.classList.toggle('is-flipped');
    }

    // TODO add more genres
    // Getting game genres and return class name with specific style for it
    getGenreStyleClass(event) {
        let mainGenre = this.props.game.main_genre.toLowerCase();
        let styleClasses = {
            "przygodowe": "adventure"
        }
        let styleClassName = styleClasses[mainGenre];
        return styleClassName;
    }
    
    render() {
        let game = this.props.game;
        return(
            <div className="container">
                <div className="scene scene--game">
                    <div className="game" onClick={this.gameIsFlipped}>
                        <GameFront 
                            id={game.id} 
                            slug={game.slug} 
                            title={game.title}
                            ratingAvg={game.rating_avg} 
                            image_box={game.image_box} 
                            titleStyle={this.getGenreStyleClass()} />
                        
                        <GameBack 
                            id={game.id} 
                            slug={game.slug} 
                            title={game.title}
                            mainGenre={game.main_genre}
                            genres={game.genres}
                            ratingAvg={game.rating_avg}
                            gameTime={game.game_time}
                            releaseYear={game.release_year}
                            popularity={game.popularity}
                            difficulty={game.difficulty}
                            requirements={game.requirements}
                            titleStyle={this.getGenreStyleClass()} />     
                    </div>
                </div>
            </div>
        )
    }
}