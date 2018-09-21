import React, {Component} from 'react';
import Game from './game_card/Game';

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
        document.title = "Gejm | Tanie granie";
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
                    
                        
                    <ul className='list'>
    
                        {games.map(game => (
                             
                                <li key={game.id}>
                                    {/* <div>
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
                                </div> */}
                                    <Game game={game} />                                    
                                </li>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}

export default GamesList;