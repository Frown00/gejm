import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamesIndex from './GamesIndex';
import GameCreate from './GameCreate';
import GameEdit from './GameEdit';

export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <a href="/dashboard" className="btn btn-dark">Dashboard</a>
                    <a href="/dashboard/create" className="btn btn-primary">Dodaj gre</a>
                    
                    <h4>Lista gier</h4>
                    <Switch>
                        <Route exact path='/dashboard' component={ GamesIndex } />
                        <Route path='/dashboard/create' component={ GameCreate } />
                        <Route path='/dashboard/:id/edit/' component={ GameEdit } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}