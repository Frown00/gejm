import React, { Component } from 'react';

export default class GenreCreate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            funky_name: '',
            description: '',
            isLoaded: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let property = event.target.id;
        
        this.setState({
            [property]: event.target.value,   // partialState[property] = value - { property: value} its same
        });
    }

    render() {
        return (
            <form className="container" method="post" action="http://gejm.pl/genres">
                <input type="hidden" name="_token" value={csrf_token} />

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
                        <input className="btn btn-outline-primary" type="submit" value="Dodaj" />
                </div>
            </form>
        )
    }
}