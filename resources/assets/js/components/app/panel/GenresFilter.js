import React, {Component} from 'react';

export default class GenresFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            isLoaded: null
        }
    }

    componentDidMount() {
        fetch(`/sites/gejm/public/api/genres`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
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
        return (
            <div>
                <p>Kategorie</p>
                <section className="genres-filter">
                {
                    this.state.genres.map( (genre, key) => (
                        <span name={genre.name} className="genres-filter__name" key={key}>
                            {genre.name}&nbsp;                  
                        </span>
                    ))
                }
                </section>
            </div>
            
        )
    }
}