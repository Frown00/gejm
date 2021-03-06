import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamesIndex from './GamesIndex';
import GameCreate from './GameCreate';
import GameEdit from './GameEdit';
import Genres from './genres/Genres';
import Platforms from './platforms/Platforms';
import Raters from './raters/Raters';
import Reviewers from './reviewers/Reviewers';


export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">

                    <div className="container" style={{paddingLeft: '0', marginBottom: '3em'}}>
                        <a href="/dashboard" className="btn btn-dark panel">Dashboard</a>
                        <a href="/dashboard/create" className="btn panel add-game">Dodaj grę</a>
                        <a href="/dashboard/genres" className="btn panel category">Kategorie</a>
                        <a href="/dashboard/platforms" className="btn panel platforms">Platformy</a>
                        <a href="/dashboard/raters" className="btn panel raters">Oceniający</a>                    
                        <a href="/dashboard/reviewers" className="btn panel reviewers">Recenzenci</a>
                        <a href="#" className="btn panel free-games">Darmowe gry</a>
                    </div>

                    <Switch>
                        <Route exact path='/dashboard' component={ GamesIndex } />
                        <Route path='/dashboard/create' component={ GameCreate } />
                        <Route path='/dashboard/:id/edit/' component={ GameEdit } />
                        <Route path='/dashboard/genres' component={ Genres } />
                        <Route path='/dashboard/platforms' component={ Platforms } />
                        <Route path='/dashboard/raters' component={ Raters } />
                        <Route path='/dashboard/reviewers' component={ Reviewers } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}