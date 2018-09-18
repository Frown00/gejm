import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';

export default class GameFront extends Component {
    
    render() {
        return (
            <div className="game__data game__data--front">
                <div>
                    <img src={'/storage/upload/game-images/' + this.props.image_box.path} alt={'Image cover of ' + this.props.title}/>
                </div>
                <TitleToDetails 
                    title={this.props.title}
                    id={this.props.id} 
                    slug={this.props.slug}
                    style={this.props.titleStyle}
                 />
            </div>
        )
    }
}