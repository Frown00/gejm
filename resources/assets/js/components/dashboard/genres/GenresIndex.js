import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GenresIndex extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            genres: []
        };
    }

    componentDidMount() {
        fetch('http://gejm.pl/genres')
            .then(response => response.json())
            .then(
                (result) => {
                this.setState({ 
                    isLoaded: true,
                    genres: result });
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
        const { error, isLoaded, genres } = this.state;
        if(error) {
                return <div>Error: {error.message}</div>;
        }
        else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    {/* {console.log(games)} */}
                    <h4>Lista kategorii</h4>
                        
                    <ul className='list-group list-group-flush'>
    
                        {genres.map(genre => (
                            <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`genres/${genre.id}/edit`}
                                key={genre.id} >
                                
                                <div>
                                    <h5>{genre.id}</h5>   
                                </div>
                                <div>
                                    <h5>{genre.name}</h5>
                                </div>
                                    
                            </Link>
                         ))}
                    </ul>    
                </div>
            )
        }
        
    }
}

export default GenresIndex;