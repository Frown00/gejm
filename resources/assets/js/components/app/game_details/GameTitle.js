import React, { Component } from 'react';

export default class GameTitle extends Component {
    render() {
        return(
            <h1><strong>{this.props.title}</strong></h1>
        )
    }
}