import React, { Component } from 'react';

export default class PlatformCreate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
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
                        <label htmlFor="company">Firma: </label>
                        <input id="company" name="company" className="form-control" type="text" value={this.state.company} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                        <input className="btn btn-outline-primary" type="submit" value="Dodaj" />
                </div>
            </form>
        )
    }
}