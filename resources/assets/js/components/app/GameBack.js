import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';

export default class GameBack extends Component {
    
    render() {
        return (
            <div className="game__data game__data--back">
                <div className="game__info">
                    Dane
                </div>
                <TitleToDetails 
                    title={this.props.title} 
                    id={this.props.id} 
                    slug={this.props.slug}
                    style={this.props.titleStyle} />
            </div>
        )
    }
}