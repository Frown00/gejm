import React, { Component } from 'react';
import GameTitle from './GameTitle';
import RatingBadge from '../game_card/RatingBadge';
import GameGenres from './GameGenres';
import GamePlatforms from './GamePlatforms';

let displayDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay() > 9 ? date.getDay() : `0${date.getDay()}`;
    const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
}

export default class SingleGame extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        const gameId = this.props.match.params.id;
        
    }

    render() {
        const {title, publisher, developer, release_date, platforms, genres, game_time, image_box} = this.props.location.state;
        return (
            <main className="single-game-container">
                <div className="leftbar-info">
                    <GameTitle title={title} />
                    <GamePlatforms platforms={platforms} />
                    <GameGenres genres={genres} />
                </div>
                <div className="rightbar-info">
                    <div className="game-cover">
                        <img src = {`/sites/gejm/public/storage/upload/game-images/${image_box.path}`}></img>
                    </div>
                    <div>
                        <div>
                            <p>Twórca</p>
                            <p>{developer}</p>
                        </div>
                        <div>
                            <p>Wydawca</p>
                            <p>{publisher}</p>
                        </div>
                        <div>
                            <p>Data Wydania</p>
                            <p>{displayDate(release_date)}</p>
                        </div>
                        <div>
                            <p>Czas przejścia</p>
                            <p>{`~${game_time}h`}</p>
                        </div>
                        <div>
                            <p>Dla ilu osób</p>
                            <p>1-4</p>
                        </div>
                    </div>
                    
                </div>    
            </main>
        )
    }
}


