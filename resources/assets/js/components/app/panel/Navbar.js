import React, {Component} from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Szukaj</li>
                    <li><a href="#"><span className="nav__text">Polubione</span><span className="nav__icon">❤</span></a></li>
                    <li><a href="#"><span className="nav__text">O stronie</span><span className="nav__icon">🛈</span></a></li>
                </ul>
            </nav>
        )
    }
}