import React, { Component } from 'react';

export default class ReviewerDelete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDeleted: false,
            error: null
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        console.log(this.props.id);
        let isDelete = confirm(`Czy na pewno chcesz usunąć recenzenta ${this.props.name}?`);
        
        if(isDelete) {
            fetch(`http://gejm.pl/reviewers/delete/${this.props.id}`)
                .then(response => {
                    if(response.status < 300) {
                        this.props.history.push("/dashboard/reviewers"); 
                    }
                    else {
                        console.log("Nie udało się usunąć recenzenta");
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
                <button className='btn btn-danger' style={deleteBtnStyle} onClick={this.handleDelete}>Usuń</button>
            </div>    
        );
    }
}