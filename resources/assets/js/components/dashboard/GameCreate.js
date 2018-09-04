import React, { Component } from 'react';


class GameCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            developer: '',
            publisher: '',
            main_genre: 'FPS',
            release_year: '2018',
            release_date: '',
            game_time: '0',
            popularity: '0.00',
            difficulty: '0.00',
            rating_avg: '0.00',
            requirements: '0.00',
            requirements_detail: '',
            age_rating: '0',
            description: '',
            gameplay: '',
            walkthrough: '',
            slug: '',
            image_box: '',
            genres: [],
            platforms: [],
            ratings: [],
            reviews: [],

            isGenresLoaded: false,
            errorGenres: null,
            genresList: [],

            isPlatformsLoaded: false,
            errorPlatforms: null,
            platformsList: [],

            isRatersLoaded: false,
            errorRaters: null,
            ratersList: [],

            isReviewersLoaded: false,
            errorReviewers: null,
            reviewersList: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckingList = this.handleCheckingList.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleReviews = this.handleReviews.bind(this);

    }

    componentDidMount() {

        fetch('http://gejm.pl/genres')
            .then(response => response.json())
            .then((result) => {
                    // console.log(result);
                this.setState({ 
                    isGenresLoaded: true,
                    genresList: result,
                    main_genre: result[0].name });
            }, 
            (errorGenres) => {
                this.setState({
                    isGenresLoaded: true,
                    errorGenres
                });
            }
        );

        fetch('http://gejm.pl/platforms')
            .then(response => response.json())
            .then((result) => {
                this.setState({ 
                    isPlatformsLoaded: true,
                    platformsList: result });
            }, 
            (errorPlatforms) => {
                this.setState({
                    isPlatformsLoaded: true,
                    errorPlatforms
                });
            }
        );

        fetch('http://gejm.pl/raters')
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState({ 
                    isRatersLoaded: true,
                    ratersList: result });
            }, 
            (errorRaters) => {
                this.setState({
                    isRatersLoaded: true,
                    errorRaters
                });
            }
        );

        fetch('http://gejm.pl/reviewers')
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                this.setState({ 
                    isReviewersLoaded: true,
                    reviewersList: result });
            }, 
            (errorReviewers) => {
                this.setState({
                    isPlatformsLoaded: true,
                    errorReviewers
                });
            }
        );
    }

    // objectList       - contains all objects from state (genres,platfoms) 
    // stateListName    - name of state
    
    handleCheckingList(event, objectList, stateListName) {
        let isChecked = event.target.checked;
        let checkboxName = event.target.name;
        let object = objectList.filter((value) => {
            return value.name == checkboxName;
        })[0];

        let stateList = this.state[stateListName];

        if(isChecked) {
            stateList.push(object);
            stateListName = stateListName;
            this.setState({
                listName: stateList
            });
        } else {
            let removeIndex = stateList.map(function(item) { return item.id; }).indexOf(object.id);
            stateList.splice(removeIndex, 1);
            stateListName = stateListName;            
            this.setState({
                listName: stateList
            });
        }

        console.log(stateList);

    }

    handleRating(event) {
        let rating = event.target.value;
        let raterName = event.target.name;
        let rater = this.state.ratersList.filter((value) => {
            return value.name == raterName;
        })[0];

        let ratings = this.state.ratings;
        let isRatedBefore = ratings.includes(rater); // -1 - new one     0 - rated before
        console.log(isRatedBefore);
        rater.rating = rating;

        if(rating !== '' && !isRatedBefore) {
            ratings.push(rater);
            this.setState({
                'ratings':  ratings
            });
        } else if(rating === '' && isRatedBefore) {
            let removeRater = ratings.map(function(item) { return item.id; }).indexOf(rater.id);
            ratings.splice(removeRater, 1);
            this.setState({
                'ratings':  ratings
            });
        } else if(rating !== '' && isRatedBefore) {
            let removeRater = ratings.map(function(item) { return item.id; }).indexOf(rater.id);
            ratings.splice(removeRater, 1);
            ratings.push(rater);
            this.setState({
                'ratings':  ratings
            });
        }
    }

    handleReviews(event) {
        let review = event.target.value;
        let reviewerName = event.target.name;
        let reviewer = this.state.reviewersList.filter((value) => {
            return value.name == reviewerName;
        })[0];

        let reviews = this.state.reviews;
        let isReviewBefore = reviews.includes(reviewer); // -1 - new one     0 - rated before
        reviewer.link = review;

        if(review !== '' && !isReviewBefore) {
            reviews.push(reviewer);
            this.setState({
                'reviews':  reviews
            });
        } else if(review === '' && isReviewBefore) {
            let removeReview = reviews.map(function(item) { return item.id; }).indexOf(review.id);
            reviews.splice(removeReview, 1);
            this.setState({
                'reviews':  reviews
            });
        } else if(review !== '' && isReviewBefore) {
            let removeReview = reviews.map(function(item) { return item.id; }).indexOf(review.id);
            reviews.splice(removeReview, 1);
            reviews.push(reviewer);
            this.setState({
                'reviews':  reviews
            });
        }

        console.log(this.state.reviews);

    }


    handleChange(event) {
        let property = event.target.id;
        
        this.setState({
            [property]: event.target.value,   // partialState[property] = value - { property: value} its same
        });
        
        if(property === 'title') {
            this.setState({
            'slug': strToSlug(event.target.value)
            });
        }
        else if(property === 'main_genre') {
            let genres = this.state.genres;
            let removeIndex = genres.map(function(item) { return item.name; }).indexOf(event.target.name);
            genres.splice(removeIndex, 1);
            
            this.setState({
                'genres': genres
            });
            console.log(genres);
        }
    }

    
    

    handleSubmit(event) {
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('developer', this.state.developer);
        formData.append('publisher', this.state.publisher);
        formData.append('main_genre', this.state.main_genre);
        formData.append('release_year', this.state.release_year);
        formData.append('release_date', this.state.release_date);
        formData.append('game_time', this.state.game_time);
        formData.append('popularity', this.state.popularity);
        formData.append('difficulty', this.state.difficulty);
        formData.append('requirements', this.state.requirements);
        formData.append('requirements_detail', this.state.requirements_detail);
        formData.append('rating_avg', this.state.rating_avg);
        formData.append('age_rating', this.state.age_rating);
        formData.append('description', this.state.description);
        formData.append('gameplay', this.state.gameplay);
        formData.append('walkthrough', this.state.walkthrough);
        formData.append('slug', this.state.slug);
        for(let i = 0; i < this.state.genres.length; i++) {
            formData.append('genres[]', this.state.genres[i]);
        }
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        fetch("http://gejm.pl/games", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrf_token
            },
            body: formData,
            credentials: "same-origin"
        })
        .then((response) => {
            // console.log(response);
            if(response.status < 300) {

                fetch(`http://gejm.pl/games/${this.state.slug}/genres`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrf_token
                    },
                    body: JSON.stringify(this.state.genres)
                })
                .then((response) => {
                    console.log(response);
                });
                
                this.props.history.push("/dashboard");
            }
        });
        
        event.preventDefault();
    }

    render() {
        
        return (
            <div>
                <h4>Utwórz nową grę</h4>
                <form className="container" method="post" action="http://gejm.pl/games">
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className="form-group">
                        <label htmlFor="title">Tytuł: </label>
                        <input id="title" name="title" className="form-control" type="text" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="developer">Developer: </label>
                        <input id="developer" name="developer" className="form-control" type="text" value={this.state.developer} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publisher">Wydawca: </label>
                        <input id="publisher" name="publisher" className="form-control" type="text" value={this.state.publisher} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="main_genre">Główny gatunek: </label>
                        <select id="main_genre" name="main_genre" className="form-control" type="text" value={this.state.main_genre} onChange={this.handleChange}>
                            {this.state.genresList.map((genre, key) => (
                                    <option key={key}> {genre.name}</option>
                                ))}
                        </select>  
                    </div>
                    <input name="genres" type="hidden" value={JSON.stringify(this.state.genres)} />
                    <div className="form-group">
                        <label>Pozostałe gatunki: </label>
                        <ul>
                        {this.state.genresList.map((genre, key) => {        // Return genre when is diffrent than main
                            return genre.name !== this.state.main_genre ?
                                <li key={key}>
                                    <input name={genre.name} type="checkbox" className="custom-form-control" onChange={(e) => this.handleCheckingList(e, this.state.genresList, 'genres')}></input>
                                    <label className="custom-cotrol-label" htmlFor={genre.name} >{genre.name}</label>
                                </li>
                            : 
                            ''
                        })}
                        </ul>
                    </div>
                    <input name="plaforms" type="hidden" value={JSON.stringify(this.state.platforms)} />
                    <div className="form-group">
                        <label>Na jakie platformy: </label>
                        <ul>
                        {this.state.platformsList.map((platform, key) => {        // Return genre when is diffrent than main
                            return (
                                <li key={key}>
                                    <input name={platform.name} type="checkbox" className="custom-form-control" onChange={(e) => this.handleCheckingList(e, this.state.platformsList, 'platforms')}></input>
                                    <label className="custom-cotrol-label" htmlFor={platform.name}>{platform.name}</label>
                                </li>
                            )    
                        })}
                        </ul>
                    </div>
                    <div className="form-group">
                        <label htmlFor="release_date">Data wydania: </label>
                        <input id="release_date" name="release_date" className="form-control" type="date" value={this.state.release_date} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="release_year">Rok wydania: </label>
                        <input id="release_year" name="release_year" className="form-control" type="number" min="1990" step="1" value={this.state.release_year} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="game_time">Czas gry: </label>
                        <input id="game_time" name="game_time" className="form-control" type="number" min="0" value={this.state.game_time} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="popularity">Popularność: </label>
                        <input id="popularity" name="popularity" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.popularity} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="difficulty">Trudność: </label>
                        <input id="difficulty" name="difficulty" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.difficulty} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="requirements">Wymagania: </label>
                        <input id="requirements" name="requirements" className="form-control" type="number" min="0.00" max="5.00" step="0.01" value={this.state.requirements} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="requirements_detail">Wymagania szczegółowo: </label>
                        <textarea id="requirements_detail" name="requirements_detail" className="form-control" type="text" value={this.state.requirements_detail} onChange={this.handleChange}></textarea>
                    </div>
                    <input name="reviews" type="hidden" value={JSON.stringify(this.state.reviews)} />
                    <div className="form-group">
                        <label>Recenzje: </label>
                        <div>
                        {this.state.reviewersList.map((reviewer, key) => {        // Return genre when is diffrent than main
                            return (
                                <div key={key}>
                                    <label htmlFor={reviewer.name}>{reviewer.name}</label>
                                    <input name={reviewer.name} type="text" className="form-control" onBlur={this.handleReviews} placeholder="Brak recenzji"></input>
                                </div>
                            )    
                        })}
                        </div>
                    </div>
                    <input name="ratings" type="hidden" value={JSON.stringify(this.state.ratings)} />                    
                    <div className="form-group">
                        <label>Oceny: </label>
                        <div>
                        {this.state.ratersList.map((rater, key) => {        // Return genre when is diffrent than main
                            return (
                                <div key={key} style={{display: 'flex', marginBottom: '10px'}}>
                                    <label style={{display:'inline-block', width: '100px', marginBottom: '0', alignSelf: 'center'}} htmlFor={rater.name}>{rater.name}</label>
                                    <input name={rater.name} type="number" min="0.00" max="10.00" step="0.1" style={{width: '90px'}}className="form-control" onBlur={this.handleRating} placeholder="Brak"></input>
                                </div>
                            )    
                        })}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating_avg">Ocena średnia: </label>
                        <input id="rating_avg" name="rating_avg" className="form-control" type="number" min="0.00" max="10.00" step="0.01" value={this.state.rating_avg} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="age_rating">Od ilu lat: </label>
                        <input id="age_rating" name="age_rating" className="form-control" type="number" value={this.state.age_rating} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Krótki opis gry: </label>
                        <textarea id="description" name="description" className="form-control" type="text" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gameplay">Link do gameplayu: </label>
                        <input id="gameplay" name="gameplay" className="form-control" type="text" value={this.state.gameplay} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="walkthrough">Link do walkthrough: </label>
                        <input id="walkthrough" name="walkthrough" className="form-control" type="text" value={this.state.walkthrough} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Unikalny adres gry: </label>
                        <input id="slug" name="slug" className="form-control" type="text" value={this.state.slug} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <input className="btn btn-outline-primary" type="submit" value="Dodaj" />
                    </div>
                </form>
            </div>
        )
    }
}

export default GameCreate;