import React, { Component } from 'react';


class GameCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            developer: '',
            publisher: '',
            main_genre: '',
            release_year: '2018',
            release_date: '',
            game_time: '0',
            popularity: '0.00',
            difficulty: '0.00',
            rating_avg: '0.00',
            requirements: '0.00',
            requirements_detail: '',
            age_rating: '0',
            description: '',
            gameplay: '',
            walkthrough: '',
            slug: '',
            image_box: '',

            isGenresLoaded: false,
            errorGenre: null,
            genres: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('http://gejm.pl/genres')
            .then(response => response.json())
            .then(
                (result) => {
                    // console.log(result);
                this.setState({ 
                    isGenresLoaded: true,
                    genres: result,
                    main_genre: result[0].name });
            }, 
            (errorGenre) => {
                this.setState({
                    isLoaded: true,
                    errorGenre
                });
            }
        );
    }

    handleChange(event) {
        let property = event.target.id;
        this.setState({
            [property]: event.target.value,   // partialState[property] = value - { property: value} its same
        });
    }

    handleSubmit(event) {
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('developer', this.state.developer);
        formData.append('publisher', this.state.publisher);
        formData.append('main_genre', this.state.main_genre);
        formData.append('release_year', this.state.release_year);
        formData.append('release_date', this.state.release_date);
        formData.append('game_time', this.state.game_time);
        formData.append('popularity', this.state.popularity);
        formData.append('difficulty', this.state.difficulty);
        formData.append('requirements', this.state.requirements);
        formData.append('requirements_detail', this.state.requirements_detail);
        formData.append('rating_avg', this.state.rating_avg);
        formData.append('age_rating', this.state.age_rating);
        formData.append('description', this.state.description);
        formData.append('gameplay', this.state.gameplay);
        formData.append('walkthrough', this.state.walkthrough);
        formData.append('slug', this.state.slug);
        formData.append('genres', this.state.genres);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        fetch("http://gejm.pl/games", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrf_token
            },
            body: formData,
            credentials: "same-origin"
        })
        .then((response) => {
            // console.log(response);
            if(response.status < 300) {
                this.props.history.push("/dashboard");
            }
        });
        
        event.preventDefault();
    }

    render() {
        return (
            <form className="container" method="post" action="http://gejm.pl/games">
                <input type="hidden" name="_token" value={csrf_token} />
                <div className="form-group">
                    <label htmlFor="title">Tytuł: </label>
                    <input id="title" name="title" className="form-control" type="text" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="developer">Developer: </label>
                    <input id="developer" name="developer" className="form-control" type="text" value={this.state.developer} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="publisher">Wydawca: </label>
                    <input id="publisher" name="publisher" className="form-control" type="text" value={this.state.publisher} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="main_genre">Główny gatunek: </label>
                    <select id="main_genre" name="main_genre" className="form-control" type="text" value={this.state.main_genre} onChange={this.handleChange}>
                    {this.state.genres.map((genre, key) => (
                            <option key={key}> {genre.name}</option>
                         ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="genres">Pozostałe gatunki: </label>
                    <div>
                    {this.state.genres.map((genre, key) => {        // Return genre when is diffrent than main
                        return genre.name !== this.state.main_genre ?
                            <div key={key}>
                                <input type="checkbox" className="custom-form-control" ></input>
                                <label className="custom-cotrol-label" htmlFor="genres" >{genre.name}</label>
                            </div>
                        :
                        ''
                    })}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="release_date">Data wydania: </label>
                    <input id="release_date" name="release_date" className="form-control" type="date" value={this.state.release_date} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="release_year">Rok wydania: </label>
                    <input id="release_year" name="release_year" className="form-control" type="number" min="1990" step="1" value={this.state.release_year} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="game_time">Czas gry: </label>
                    <input id="game_time" name="game_time" className="form-control" type="number" min="0" value={this.state.game_time} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="popularity">Popularność: </label>
                    <input id="popularity" name="popularity" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.popularity} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Trudność: </label>
                    <input id="difficulty" name="difficulty" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.difficulty} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="rating_avg">Ocena średnia: </label>
                    <input id="rating_avg" name="rating_avg" className="form-control" type="number" min="0.00" max="10.00" step="0.01" value={this.state.rating_avg} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="requirements">Wymagania: </label>
                    <input id="requirements" name="requirements" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.requirements} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="requirements_detail">Wymagania szczegółowo: </label>
                    <input id="requirements_detail" name="requirements_detail" className="form-control" type="text" value={this.state.requirements_detail} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="age_rating">Od ilu lat: </label>
                    <input id="age_rating" name="age_rating" className="form-control" type="number" value={this.state.age_rating} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Krótki opis gry: </label>
                    <input id="description" name="description" className="form-control" type="text" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="gameplay">Link do gameplayu: </label>
                    <input id="gameplay" name="gameplay" className="form-control" type="text" value={this.state.gameplay} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="walkthrough">Link do walkthrough: </label>
                    <input id="walkthrough" name="walkthrough" className="form-control" type="text" value={this.state.walkthrough} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Unikalny adres gry: </label>
                    <input id="slug" name="slug" className="form-control" type="text" value={this.state.slug} onChange={this.handleChange} />
                </div>
                
                <div className="form-group">
                    <input className="btn btn-outline-primary" type="submit" value="Dodaj" />
                </div>
            </form>
        )
    }
}

export default GameCreate;