import React, { Component } from 'react';
import {TitleToDetails} from './TitleToDetails';
import RatingBadge from './RatingBadge';
import PropTypes from 'prop-types';

export default class GameFront extends Component {
    
    render() {
        return (
            <div>
                <div className="game__data game__data--front">
                <div>
                    <img src={'/sites/gejm/public/storage/upload/game-images/' + this.props.image_box.path} alt={'Image cover of ' + ' game'}/>
                </div>
                <TitleToDetails 
                    title={this.props.title}
                    developer={this.props.developer}
                    publisher={this.props.publisher}
                    id={this.props.id} 
                    slug={this.props.slug}
                    style={this.props.titleStyle}
                 />
                </div>
                <div>
                    <span className="image-badge"><RatingBadge value={this.props.ratingAvg}/></span>
                    <i className="image-mark fas fa-gamepad"></i>                
                </div>
            </div>
            
        )
    }
}

GameFront.propsTypes = {
    id: PropTypes.id,
    title: PropTypes.string,
    developer: PropTypes.string,
    publisher: PropTypes.string,
    slug: PropTypes.string,
    style: PropTypes.string
}