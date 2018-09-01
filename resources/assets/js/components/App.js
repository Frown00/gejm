import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import GamesList from './GamesList';
import SingleGame from './SingleGame';


class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ GamesList } />
                        <Route path='/:id' component={ SingleGame } />
                    </Switch>
                </div>
                
            </BrowserRouter>
        )
    }
}

if(document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}