import React, { Component } from 'react';
import GameFront from './GameFront';
import GameBack from './GameBack';
import RatingBadge from './RatingBadge';
import PropTypes from 'prop-types';

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
                            game={game} 
                            titleStyle={this.getGenreStyleClass()} />
                        
                        <GameBack 
                            game={game}
                            titleStyle={this.getGenreStyleClass()} />     
                    </div>
                </div>
            </div>
        )
    }
}

Game.propTypes = {
    game: PropTypes.object
}