import React, { Component } from 'react';
import GameFront from './GameFront';
import GameBack from './GameBack';

export default class Game extends Component {
    constructor(props) {
        super(props);
        
        this.gameIsFlipped = this.gameIsFlipped.bind(this);
        this.getGenreStyleClass = this.getGenreStyleClass.bind(this);
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
                            image_box={game.image_box} 
                            titleStyle={this.getGenreStyleClass()} />
                        
                        <GameBack 
                            id={game.id} 
                            slug={game.slug} 
                            title={game.title}
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