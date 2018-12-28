import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBar from './RatingBar';
import RatingBadge from './RatingBadge';

export default class GameBack extends Component {
    
    
    render() {
        const {game, titleStyle} = this.props;
        return (
            <div className="game__data game__data--back">
                <div className="game__info">
                    <div className="game-heading">
                        <RatingBadge value={game.rating_avg} />
                        <div className="main-genre">
                        {/* TODO include content below in component */}

                            <div className="genres-badge genres-badge--yellow">
                                <div className="genres-badge__circle">
                                    <img src="/sites/gejm/public/images/genres/adventure2.png" />    
                                </div>
                                <div className="genres-badge__ribbon">
                                    <span>{game.main_genre}</span>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-body">
                        {/* TODO include content below in component */}
                        <div className="numbers">
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/calendar.png"/>
                                <p>{game.release_year}</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/clock.png"/>
                                <p>{game.game_time}h</p> 
                            </div>
                            <div className="numbers__info">
                                <img src="/sites/gejm/public/images/people.png"/>
                                <p>1-3</p> 
                            </div>   
                        </div>

                        <div className="rating-bars-box"> 
                            <RatingBar 
                                itemId={game.slug} 
                                barId="popularity" 
                                stylingClass="heart" 
                                label="Popularność" 
                                iconClass='fas fa-heart' 
                                value={game.popularity} 
                                amount={5}/>
                            <RatingBar 
                                itemId={game.slug} 
                                barId="difficulty" 
                                stylingClass="skull" 
                                label="Trudność" 
                                iconClass="fas fa-skull" 
                                value={game.difficulty} 
                                amount={5}/>
                            <RatingBar 
                                itemId={game.slug}
                                barId="requirements"
                                stylingClass="desktop" 
                                label="Wymagania" 
                                iconClass="fas fa-desktop" 
                                value={game.requirements} 
                                amount={5} />
                        </div>
                        <div className="genres">
                            {game.genres.map((genre, key) => (
                                <span key={key}>{genre.name} </span>
                            ))}
                        </div>
                    </div>
                </div>
                <TitleToDetails 
                    game={game}
                    style={titleStyle} />
            </div>
        )
    }
}