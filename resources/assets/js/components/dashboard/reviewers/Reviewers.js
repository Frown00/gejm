import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReviewerCreate from './ReviewerCreate';
import ReviewerEdit from './ReviewerEdit';
import ReviewersIndex from './ReviewersIndex';

export default class Reviewers extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="container" style={{paddingLeft: '0', marginBottom: '3em'}}>
                        <a href="/dashboard/reviewers/create" className="btn btn-primary">Dodaj recenzenta</a>
                    </div>

                    <Switch>
                        <Route exact path='/dashboard/reviewers' component={ ReviewersIndex } />
                        <Route path='/dashboard/reviewers/create' component={ ReviewerCreate } />
                        <Route path='/dashboard/reviewers/:id/edit/' component={ ReviewerEdit } />
                    </Switch>
                </div>  
            </BrowserRouter>
        );
    }
}
