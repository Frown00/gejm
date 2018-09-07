import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenresCreate from './GenresCreate';
import GenresEdit from './GenresEdit';
import GenresIndex from './GenresIndex';

export default class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="container" style={{paddingLeft: '0', marginBottom: '3em'}}>
                        <a href="/dashboard/genres/create" className="btn btn-primary">Dodaj kategorię</a>
                    </div>

                    <Switch>
                        <Route exact path='/dashboard/genres' component={ GenresIndex } />
                        <Route path='/dashboard/genres/create' component={ GenresCreate } />
                        <Route path='/dashboard/genres/:id/edit/' component={ GenresEdit } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}
