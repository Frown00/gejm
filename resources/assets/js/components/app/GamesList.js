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
        fetch(`/sites/gejm/public/api/games`)
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
            )
            
    }

    render() {
        const { error, isLoaded, games } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(this.state.games);
            return(
                <div>
                    <Filters columns={Object.keys(games[0])}/>
                    <ul className='list'>
    
                        {games.map(game => (
                             
                                <li key={game.id} id={game.slug}>
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