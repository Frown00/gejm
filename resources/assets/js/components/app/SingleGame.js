import React, { Component } from 'react';

class SingleGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: [],
            image_box: ''
        }
    }

    componentDidMount() {
        const gameId = this.props.match.params.id;
        fetch(`/api/games/${gameId}`)
            .then(response => {
                return response.json();
            })
            .then(game => {
                console.log(game.image_box["path"]);
                this.setState({ game });

                document.title = "Gejm | " + game.title;
                document.getElementById('cover-image').src = '/storage/upload/game-images/' + game.image_box.path;
            });
    }

    render() {
        const game = this.state.game;
        console.log(this.props);
        return (
            <main>
                <div>
                    <img id="cover-image" alt={'Image cover of ' + game.title}/>
                </div>
                <h1>{game.title}</h1>
            </main>
        )
    }
}

export default SingleGame;