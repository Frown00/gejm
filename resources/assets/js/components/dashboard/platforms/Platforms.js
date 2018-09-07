import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlatformCreate from './PlatformCreate';
import PlatformEdit from './PlatformEdit';
import PlatformsIndex from './PlatformsIndex';

export default class Platforms extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="container" style={{paddingLeft: '0', marginBottom: '3em'}}>
                        <a href="/dashboard/platforms/create" className="btn btn-primary">Dodaj platformę</a>
                    </div>

                    <Switch>
                        <Route exact path='/dashboard/platforms' component={ PlatformsIndex } />
                        <Route path='/dashboard/platforms/create' component={ PlatformCreate } />
                        <Route path='/dashboard/platforms/:id/edit/' component={ PlatformEdit } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        );
    }
}
