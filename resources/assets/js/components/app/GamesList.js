import React, {Component} from 'react';
import Game from './game_card/Game';
import Filters from './panel/Filters';

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
                    <Filters />
                    <ul className='list'>
    
                        {games.map(game => (
                             
                                <li key={game.id}>
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