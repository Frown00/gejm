import React from 'react'
import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
          <Link className='navbar-brand' to='/'><img className="logo" src="/images/gejm_logo.svg" alt="Nazwa strony z m jako pad"/></Link>
        </div>
      </nav>
    )

    export default Header;