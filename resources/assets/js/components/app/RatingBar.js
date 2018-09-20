import React, {Component} from 'react';

export default class RatingBar extends Component {
    

    componentDidMount() {
        let value = this.props.value;
        value = value / this.props.amount * 100;
        console.log(value);
        let sheet = document.createElement('style')
        sheet.innerHTML = `.data-icon.${this.props.class}--fill::after {width: ${value + '%'}}`;
        document.body.appendChild(sheet);
    }

    render() {
        return (
            
            
            <div id={this.props.id}>
                <div style={{}} className={'data-icon'+ ' ' + this.props.class + ' ' + this.props.class +'--fill'}>{this.props.content}</div>
            </div>
        )
    }
}