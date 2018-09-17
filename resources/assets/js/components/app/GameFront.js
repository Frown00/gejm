import React, { Component } from 'react';

export default class GameFront extends Component {
    
    render() {
        return (
            <div className="game__data game__data--front">
                <img src={'/storage/upload/game-images/' + this.props.image_box.path} alt={'Image cover of ' + this.props.title}/>
            </div>
        )
    }
}