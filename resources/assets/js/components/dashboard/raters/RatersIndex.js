import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class RatersIndex extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            raters: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/raters')
            .then(response => response.json())
            .then(
                (result) => {
                this.setState({ 
                    isLoaded: true,
                    raters: result });
            }, 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, raters } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {/* {console.log(games)} */}
                    <h4>Lista oceniających</h4>
                        
                    <ul className='list-group list-group-flush'>
    
                        {raters.map(rater => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`raters/${rater.id}/edit`}
                                key={rater.id} >
                                
                                <div>
                                    <h5>{rater.id}</h5>   
                                </div>
                                <div>
                                    <h5>{rater.name}</h5>
                                </div>
                                    
                            </Link>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}
