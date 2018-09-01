import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GamesIndex extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/games')
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
                                to={`dashboard/${game.slug}`}
                                key={game.id} >
                                
                                <div>
                                    <h5>{game.id}</h5>
                                    
                                    
                                </div>
                                <div>
                                    <h5>{game.title}</h5>
                                </div>
                                    
                            </Link>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}

export default GamesIndex;