import React, { Component } from 'react';

class SingleGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: []
        }
    }

    componentDidMount() {
        const gameId = this.props.match.params.id;
        console.log(gameId);
        fetch(`/api/games/${gameId}`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(game => {
                this.setState({ game });
                document.title = "Gejm | " + game.title;
            });
    }

    render() {
        const { game } = this.state;

        return (
            <div>
                {game.title}
            </div>
        )
    }
}

export default SingleGame;