import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBar from './RatingBar';
import RatingBadge from './RatingBadge';

export default class GameBack extends Component {
    
    
    render() {
        return (
            <div className="game__data game__data--back">
                <div className="game__info">
                    <div className="game-heading">
                        <RatingBadge value={this.props.ratingAvg} />
                        <div className="main-genre">
                        {/* TODO include content below in component */}

                            <div className="genres-badge genres-badge--yellow">
                                <div className="genres-badge__circle">
                                    <img src="/sites/gejm/public/images/genres/adventure2.png" />    
                                </div>
                                <div className="genres-badge__ribbon">
                                    <span>{this.props.mainGenre}</span>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-body">
                        {/* TODO include content below in component */}
                        <div className="numbers">
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/calendar.png"/>
                                <p>{this.props.releaseYear}</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/clock.png"/>
                                <p>{this.props.gameTime}h</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/people.png"/>
                                <p>1-3</p> 
                            </div>   
                        </div>

                        <div className="rating-bars-box"> 
                            <RatingBar 
                                itemId={this.props.slug} 
                                barId="popularity" 
                                stylingClass="heart" 
                                label="Popularność" 
                                iconClass='fas fa-heart' 
                                value={this.props.popularity} 
                                amount={5}/>
                            <RatingBar 
                                itemId={this.props.slug} 
                                barId="difficulty" 
                                stylingClass="skull" 
                                label="Trudność" 
                                iconClass="fas fa-skull" 
                                value={this.props.difficulty} 
                                amount={5}/>
                            <RatingBar 
                                itemId={this.props.slug}
                                barId="requirements"
                                stylingClass="desktop" 
                                label="Wymagania" 
                                iconClass="fas fa-desktop" 
                                value={this.props.requirements} 
                                amount={5} />
                        </div>
                        <div className="genres">
                            {this.props.genres.map((genre, key) => (
                                <span key={key}>{genre.name} </span>
                            ))}
                        </div>
                    </div>
                </div>
                <TitleToDetails 
                    title={this.props.title}
                    developer={this.props.developer}
                    publisher={this.props.publisher}
                    id={this.props.id} 
                    slug={this.props.slug}
                    style={this.props.titleStyle} />
            </div>
        )
    }
}