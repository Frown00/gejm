import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBadge from './RatingBadge';
import PropTypes from 'prop-types';

export default class GameFront extends Component {
    
    render() {
        const {game, titleStyle} = this.props;
        return (
            <div>
                <div className="game__data game__data--front">
                <div>
                    <img src={'/sites/gejm/public/storage/upload/game-images/' + game.image_box.path} alt={'Image cover of ' + ' game'}/>
                </div>
                <TitleToDetails 
                    game={game}
                    style={titleStyle}
                 />
                </div>
                <div>
                    <span className="image-badge"><RatingBadge value={game.rating_avg}/></span>
                    <i className="image-mark fas fa-gamepad"></i>                
                </div>
            </div>
            
        )
    }
}

