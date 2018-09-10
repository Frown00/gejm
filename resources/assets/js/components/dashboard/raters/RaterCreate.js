import React, { Component } from 'react';

export default class PlatformCreate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            logo: null,
            isLoaded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
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
            image.style = "display: block";
        };
        
        if(file) {
            reader.readAsDataURL(file);
        }
        
        console.log(reader);
    }

    render() {
        return (
            <form className="container" method="post" action="http://gejm.pl/raters" encType="multipart/form-data">
                <input type="hidden" name="_token" value={csrf_token} />

                <div className="form-group">
                        <label htmlFor="name">Nazwa: </label>
                        <input id="name" name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                        <label htmlFor="logo-image">Logo: </label>
                        <input id="logo-image" name="logo-image" className="form-control" type="file" onChange={this.handleFile}/>
                </div>
                <div>
                    <img style={{display: 'none'}} id="logo-image" src="#" alt="Image of logo" />
                </div>
                
                <div className="form-group">
                        <input className="btn btn-outline-primary" type="submit" value="Dodaj" />
                </div>
            </form>
        )
    }
}