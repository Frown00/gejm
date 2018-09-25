import React, {Component} from 'react';

export default class RatingBadge extends Component {
    render() {
        return(
            <div className="rating-badge">
                <span>
                    {Math.ceil(this.props.value * 10)}
                </span>
            </div>
        )
    }
}