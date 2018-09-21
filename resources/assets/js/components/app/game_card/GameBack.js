import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBar from './RatingBar';
import RatingBadge from './RatingBadge';

export default class GameBack extends Component {
    
    componentDidMount() {
        

        // popularity.pseudoStyle("after", "color", "#ffff00");
    }
    render() {
        return (
            <div className="game__data game__data--back">
                <div className="game__info">
                    <div className="game-heading">
                        <RatingBadge value={this.props.ratingAvg} />
                        <div className="main-genre">
                            <div className="genres-badge genres-badge--yellow">
                                <div className="genres-badge__circle">
                                    <img src="/images/genres/adventure2.png" />    
                                </div>
                                <div className="genres-badge__ribbon">
                                    <span>Przygodowe</span>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-body">
                        <div className="numbers">
                            <div className="numbers__info">
                                <img src="/images/calendar.png"/>
                                <p>{this.props.releaseYear}</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/images/clock.png"/>
                                <p>{this.props.gameTime}h</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/images/people.png"/>
                                <p>1-3</p> 
                            </div>
                            
                        </div>
                        <div className="icon-ratings"> 
                            <RatingBar itemId={this.props.id} id="popularity" class="heart" label="Popularność" content="♡♡♡♡♡" value={this.props.popularity}  amount="5"/>
                            <RatingBar itemId={this.props.id} id="difficulty" class="skull" label="Trudność" content="☠☠☠☠☠" value={this.props.difficulty} amount="5"/>
                            <RatingBar itemId={this.props.id} id="requirements" class="computer" label="Wymagania" content="🖳🖳🖳🖳🖳" value={this.props.requirements} amount="5" />
                        </div>
                        <div className="genres">
                            {this.props.genres.map(genre => (
                                <span>{genre.name} </span>
                            ))}
                        </div>
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