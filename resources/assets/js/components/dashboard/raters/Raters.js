import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RaterCreate from './RaterCreate';
import RaterEdit from './RaterEdit';
import RatersIndex from './RatersIndex';

export default class Raters extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="container" style={{paddingLeft: '0', marginBottom: '3em'}}>
                        <a href="/dashboard/raters/create" className="btn btn-primary">Dodaj oceniającego</a>
                    </div>

                    <Switch>
                        <Route exact path='/dashboard/raters' component={ RatersIndex } />
                        <Route path='/dashboard/raters/create' component={ RaterCreate } />
                        <Route path='/dashboard/raters/:id/edit/' component={ RaterEdit } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}
