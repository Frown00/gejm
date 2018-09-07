import React, { Component } from 'react';
import PlatformDelete from './PlatformDelete';

export default class PlatformEdit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            isLoaded: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const platformId = this.props.match.params.id;
        fetch(`http://gejm.pl/platforms/edit/${platformId}`)
            .then(response => response.json())
            .then((platform) => {
                console.log(platform);
                this.setState({ 
                    isLoaded: true,
                    name: platform.name,
                    company: platform.company,
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
        const platformId = this.props.match.params.id;
        const updateHref = `http://gejm.pl/platforms/${platformId}`;
        return (
            <div>
                <PlatformDelete id={platformId} name={this.state.name} history={this.props.history}/>
                <form className="container" method="post" action={updateHref}>
                    <input type="hidden" name="_token" value={csrf_token} />
                    <input type='hidden' name='_method' value='PUT' />

                    <div className="form-group">
                            <label htmlFor="name">Nazwa: </label>
                            <input id="name" name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                            <label htmlFor="company">Firma: </label>
                            <input id="company" name="company" className="form-control" type="text" value={this.state.company} onChange={this.handleChange} />
                    </div>

                    
                    <div className="form-group">
                            <input className="btn btn-outline-primary" type="submit" value="Zaaktualizuj" />
                    </div>
                </form>
            </div>
        )
    }
}