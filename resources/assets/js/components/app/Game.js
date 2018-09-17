import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameFront from './GameFront';
import GameBack from './GameBack';


export default class Game extends Component {
    constructor(props) {
        super(props);
        
        this.gameIsFlipped = this.gameIsFlipped.bind(this);
    }

    gameIsFlipped(event) {
        let game = document.querySelector(".game");
        game.classList.toggle('is-flipped');
    }
    
    render() {
        let game = this.props.game;
        console.log(game);
        return(
            <div className="container">
                <div className="scene scene--game">
                    <div className="game" onClick={this.gameIsFlipped}>
                        <GameFront title={game.title} image_box={game.image_box} />
                        <GameBack />     
                    </div>
                </div>
                <Link to={`/${game.slug}`} key={game.id} >
                    <div className="game game__title">{game.title}</div>
                </Link>
            </div>
        )
    }
}