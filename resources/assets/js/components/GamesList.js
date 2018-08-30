import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GamesList extends Component {
    constructor() {
        super();
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        fetch('/api/games')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(games => {
                this.setState({ games });
            });
    }

    render() {
        const { games } = this.state;

        return(
            <div>
                {console.log(games)}
                
                    
                        <ul className='list-group list-group-flush'>

                            {games.map(game => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`/${game.slug}`}
                                key={game.id}
                            >
                                {game.title}
                                <div>
                                {(game.genres).map((genre, index) => (
                                    
                                    <span key={index} className='badge badge-primary badge-pill'>
                                        {genre.name}
                                    </span>
                                             
                                ))}
                                </div>
                                
                            </Link>
                            ))}
                        </ul>    
            </div>
        )
    }
}



export default GamesList;