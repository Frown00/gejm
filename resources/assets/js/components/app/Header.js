import React from 'react'
import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className='navbar navbar-expand-md navbar-light navbar-gejm'>
        <div>
          <Link to='/'><img className="logo" src="/images/gejm_logo1.svg" alt="Nazwa strony z m jako pad"/></Link>
        </div>
      </nav>
    )

    export default Header;