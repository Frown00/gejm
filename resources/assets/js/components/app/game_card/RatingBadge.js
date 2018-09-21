import React, {Component} from 'react';

export default class RatingBadge extends Component {
    render() {
        return(
            <div className="rating-badge">
                <span>
                    {this.props.value}
                </span>
            </div>
        )
    }
}