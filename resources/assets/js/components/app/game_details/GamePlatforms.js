import React, {Component} from 'react';
import {platformsNames, genresNames} from '../tools/Data';
import {getCSSPostfixDependsOnType} from '../tools/Functions';

export default class GameGenres extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Platformy</p>
                <ul>
                    {
                        this.props.platforms.map((platform, key) => (
                            <li className={`platform platform${getCSSPostfixDependsOnType(platformsNames, platform.name)}`} key={key}>{platform.name} </li>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
}