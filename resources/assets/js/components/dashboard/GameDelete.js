import React, { Component } from 'react';

export default class GameDelete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleted: false,
            error: null
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        console.log(this.props.slug);
        let isDelete = confirm(`Czy na pewno chcesz usunąć grę ${this.props.title}?`);
        
        if(isDelete) {
            fetch(`http://gejm.pl/games/delete/${this.props.slug}`)
                .then(response => {
                    if(response.status < 300) {
                        this.props.history.push("/dashboard"); 
                    }
                    else {
                        console.log("Nie udało się usunąć gry");
                    }
                });
                
        }
    }

    render() {
        let divStyle = {
            display: 'flex',
            justifyContent: 'flex-end'
        }
        let deleteBtnStyle = {
            color: 'white',
            
        }
        return (
            <div className='container' style={divStyle}>
                <a className='btn btn-danger' style={deleteBtnStyle} onClick={this.handleDelete}>Usuń</a>
            </div>    
        );
    }
}