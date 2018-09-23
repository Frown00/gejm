import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

    const Header = () => (
      <header className="site-header">
        <div>
            <Link to='/'><img className="logo" src="/images/gejm_logo1.svg" alt="Logo strony"/></Link>
        </div>
        <Navbar />
      </header>
      
    )

    export default Header;