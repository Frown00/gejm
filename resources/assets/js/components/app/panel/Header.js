import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

    const Header = () => (
      <header className="site-header">
        <div>
          {/* CHANGE TO DOMAIN */}
            <Link to='/sites/gejm/public'><img className="logo" src="http://localhost:8000/sites/gejm/public/images/gejm_logo1.svg" alt="Logo strony"/></Link>
        </div>
        <Navbar />
      </header>
      
    )

    export default Header;