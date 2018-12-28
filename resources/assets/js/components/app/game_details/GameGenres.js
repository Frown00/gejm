import React, {Component} from 'react';

export default class GameGenres extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="game-genres">
                <p>Kategorie</p>
                <ul>
                    {
                        this.props.genres.map((genre, key) => (
                        <li key={key}>{genre.name} </li>
                        ))
                    }
                </ul>  
            </div>
        )
    }
}