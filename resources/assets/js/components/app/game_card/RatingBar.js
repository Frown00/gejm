import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class RatingBar extends Component {
    

    componentDidMount() {
        let value = this.props.value;
        value = value / this.props.amount * 100;

        const ratingBar = document.querySelector(`#${this.props.itemId} #${this.props.barId} .rating-bar__fillable`);
        ratingBar.style.width = `${value}%`;
    }

    render() {
        let value = this.props.value;
        value = value / this.props.amount * 100;

        const iconStripe = [];
        for(let i = 0; i < this.props.amount; i++) {
            let icon = <i key={i} className={this.props.iconClass}></i>
            iconStripe.push(icon);
        }

        return ( 
            <div id={this.props.barId}>
                <p>{this.props.label}</p>
                {/* <div className={'data-icon'+ ' ' + this.props.class + ' ' + this.props.class + this.props.itemId +'--fill'}>{this.props.content}</div> */}
                <div className="rating-bar">
                    <span className={`rating-bar__template ${this.props.stylingClass}-spacing`}>{iconStripe}</span>
                    <span className={`rating-bar__fillable rating-bar__fillable--${this.props.stylingClass} ${this.props.stylingClass}-spacing`}>{iconStripe}</span>
                </div>
            </div>
        )
    }
}

RatingBar.propTypes = {
    itemId: PropTypes.string,
    barId: PropTypes.string,
    stylingClass: PropTypes.string,
    label: PropTypes.string,
    iconClass: PropTypes.string,
    value: PropTypes.number,
    amount: PropTypes.number
}