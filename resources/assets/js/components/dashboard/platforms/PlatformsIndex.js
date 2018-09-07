import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class PlatformsIndex extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            platforms: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/platforms')
            .then(response => response.json())
            .then(
                (result) => {
                this.setState({ 
                    isLoaded: true,
                    platforms: result });
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
        const { error, isLoaded, platforms } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {/* {console.log(games)} */}
                    <h4>Lista platform</h4>
                        
                    <ul className='list-group list-group-flush'>
    
                        {platforms.map(platform => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`platforms/${platform.id}/edit`}
                                key={platform.id} >
                                
                                <div>
                                    <h5>{platform.id}</h5>   
                                </div>
                                <div>
                                    <h5>{platform.name}</h5>
                                </div>
                                    
                            </Link>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}
