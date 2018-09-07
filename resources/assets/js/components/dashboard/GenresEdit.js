import React, { Component } from 'react';
import GenresDelete from './GenresDelete';

export default class GenresEdit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            funky_name: '',
            description: '',
            isLoaded: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const genreId = this.props.match.params.id;
        fetch(`http://gejm.pl/genres/edit/${genreId}`)
            .then(response => response.json())
            .then((genre) => {
                console.log(genre);
                this.setState({ 
                    isLoaded: true,
                    name: genre.name,
                    funky_name: genre.funky_name,
                    description: genre.description !== null ? genre.description : ''
                });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
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

    render() {
        const genreId = this.props.match.params.id;
        const updateHref = `http://gejm.pl/genres/${genreId}`;
        return (
            <div>
                <GenresDelete id={genreId} name={this.state.name} history={this.props.history}/>
                <form className="container" method="post" action={updateHref}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <input type='hidden' name='_method' value='PUT' />

                    <div className="form-group">
                            <label htmlFor="name">Nazwa: </label>
                            <input id="name" name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                            <label htmlFor="funky_name">"Śmieszna" nazwa: </label>
                            <input id="funky_name" name="funky_name" className="form-control" type="text" value={this.state.funky_name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                            <label htmlFor="description">Opis: </label>
                            <textarea id="description" name="description" className="form-control" type="text" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="form-group">
                            <input className="btn btn-outline-primary" type="submit" value="Zaaktualizuj" />
                    </div>
                </form>
            </div>
        )
    }
}