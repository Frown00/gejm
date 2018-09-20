import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBar from './RatingBar';

export default class GameBack extends Component {
    
    componentDidMount() {
        

        // popularity.pseudoStyle("after", "color", "#ffff00");
    }
    render() {
        return (
            <div className="game__data game__data--back">
                <div className="game__info">
                    <div>
                        <span className="rating-avg"></span>
                    </div>
                    <div className="icon-ratings">
                        <RatingBar id="popularity" class="heart" content="♡♡♡♡♡" value={this.props.popularity}  amount="5"/>
                        <RatingBar id="difficulty" class="skull" content="☠☠☠☠☠" value={this.props.difficulty} amount="5"/>
                        <RatingBar id="requirements" class="computer" content="🖳🖳🖳🖳🖳" value={this.props.requirements} amount="5" />
                    </div>
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