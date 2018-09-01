import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GamesList extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/api/games')
            .then(response => response.json())
            .then(
                (result) => {
                this.setState({ 
                    isLoaded: true,
                    games: result });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, games } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {console.log(games)}
                    
                        
                    <ul className='list-group list-group-flush'>
    
                        {games.map(game => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`/${game.slug}`}
                                key={game.id} >
                                
                                <div>
                                    <h5>{game.title}</h5>
                                    <h6>{game.developer}</h6>
                                    <h6>{game.publisher}</h6>
                                </div>
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
}

export default GamesList;