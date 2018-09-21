import React, {Component} from 'react';

export default class RatingBar extends Component {
    

    componentDidMount() {
        let value = this.props.value;
        value = value / this.props.amount * 100;
        console.log(value);
        
        let sheet;
        if(!document.getElementById('rating-styles')) {
            sheet = document.createElement('style')
            sheet.id = 'rating-styles';
        } else {
            sheet = document.getElementById('rating-styles');
        }

        sheet.innerHTML += `.data-icon.${this.props.class + this.props.itemId}--fill::after {width: ${value + '%'}}`;
        document.body.appendChild(sheet);
        console.log(sheet);
    }

    render() {
        let value = this.props.value;
        value = value / this.props.amount * 100;
        return (
            
            
            <div id={this.props.id}>
                <div>{this.props.label}</div>
                <div style={{}} className={'data-icon'+ ' ' + this.props.class + ' ' + this.props.class + this.props.itemId +'--fill'}>{this.props.content}</div>
            </div>
        )
    }
}