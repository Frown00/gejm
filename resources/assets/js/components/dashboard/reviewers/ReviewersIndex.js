import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ReviewersIndex extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            reviewers: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/reviewers')
            .then(response => response.json())
            .then((result) => {
                this.setState({ 
                    isLoaded: true,
                    reviewers: result });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, reviewers } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {/* {console.log(games)} */}
                    <h4>Lista recenzentów</h4>
                        
                    <ul className='list-group list-group-flush'>
    
                        {reviewers.map(reviewer => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`reviewers/${reviewer.id}/edit`}
                                key={reviewer.id} >
                                
                                <div>
                                    <h5>{reviewer.id}</h5>   
                                </div>
                                <div>
                                    <h5>{reviewer.name}</h5>
                                </div>
                                    
                            </Link>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}
