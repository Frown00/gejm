import React, {Component} from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#"><span className="nav__text">Okazje</span><i className="nav__icon fab fa-hotjar"></i></a></li>
                    <li><a href="#"><span className="nav__text">Polubione</span><i className="nav__icon fas fa-gamepad"></i></a></li>
                    <li><a href="#"><span className="nav__text">O stronie</span><i className="nav__icon fas fa-info-circle"></i></a></li>
                </ul>
            </nav>
        )
    }
}