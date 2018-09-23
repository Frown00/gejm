import React, { Component } from 'react';
import GameFront from './GameFront';
import GameBack from './GameBack';

export default class Game extends Component {
    constructor(props) {
        super(props);
        
        this.gameIsFlipped = this.gameIsFlipped.bind(this);
        this.getGenreStyleClass = this.getGenreStyleClass.bind(this);
        this.stopPropagation = this.stopPropagation.bind(this);
    }

    
    componentDidMount() {
        let hearts = document.querySelectorAll('.image-heart');
        console.log(hearts);
        for(let i = 0; i < hearts.length; i++) {
            hearts[i].addEventListener('click', this.stopPropagation);
        };
        
        
    }

    componentWillUnmount() {
        let hearts = document.querySelectorAll('.image-heart');
        console.log('od');
        for(let i = 0; i < hearts.length; i++) {
            hearts[i].removeEventListener('click', this.stopPropagation);
        };
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    gameIsFlipped(event) {
        let game = event.currentTarget;

        game.classList.toggle('is-flipped');
    }

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
                        <span className="image-heart">❤</span>

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