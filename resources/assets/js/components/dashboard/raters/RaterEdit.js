import React, { Component } from 'react';
import RaterDelete from './RaterDelete';

export default class RaterEdit extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: {},
            isLoaded: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    componentDidMount() {
        const raterId = this.props.match.params.id;
        fetch(`http://gejm.pl/raters/edit/${raterId}`)
            .then(response => response.json())
            .then((rater) => {
                console.log(rater);
                this.setState({ 
                    isLoaded: true,
                    name: rater.name,
                    logo: rater.logo !== null ? rater.logo[0] : '',
                });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
            .then(res => {
            // Add image src if exist
                if(this.state.logo) {
                    let image = document.getElementById('logo-image');
                    image.src = "/storage/upload/logo-images/" + this.state.logo.path;
                }
            });
    }

    handleChange(event) {
        let property = event.target.id;
        
        this.setState({
            [property]: event.target.value,   // partialState[property] = value - { property: value} its same
        });
    }

    handleFile(event) {
        // let reader = new FileReader();
        let file = event.target.files[0];

        let reader = new FileReader();
        let image = document.getElementById("logo-image");
        reader.onload = function(event) {
            image.src = event.target.result;
            image.width = 200;
            image.height = 200;
        };
        
        if(file) {
            reader.readAsDataURL(file);
        }
        
        console.log(reader);
    }

    render() {
        const raterId = this.props.match.params.id;
        const updateHref = `http://gejm.pl/raters/${raterId}`;
        return (
            <div>
                <RaterDelete id={raterId} name={this.state.name} history={this.props.history}/>
                <form className="container" method="post" action={updateHref} encType="multipart/form-data">
                    <input type="hidden" name="_token" value={csrf_token} />
                    <input type='hidden' name='_method' value='PUT' />

                    <div className="form-group">
                            <label htmlFor="name">Nazwa: </label>
                            <input id="name" name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">Logo: </label>
                        <input name="logo-image" className="form-control" type="file" onChange={this.handleFile}/>
                    </div>
                    <div>
                        <img id="logo-image" src="#" alt="Image of logo" width="200" height="200" />
                    </div>

                    
                    <div className="form-group">
                            <input className="btn btn-outline-primary" type="submit" value="Zaaktualizuj" />
                    </div>
                </form>
            </div>
        )
    }
}