import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NAveeeee() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <img src='/images/TourLogo.png' alt='hanbde' className='tourlogo'/>
            <Link to="/">
              <p className="nav-item">Home</p>
            </Link>
            <div className="nav-item dropdown">
              <p>North</p>
              <div className="dropdown-content">
                <Link to='/ladakh'><p>Ladakh</p></Link>
                <Link to='/JammuAndKashmir'><p>Jammu&Kashmir</p></Link>
                <Link to='/Himachal_Pradesh'><p>Himachal Pradesh</p></Link>
                <Link to='/Uttarakhand'><p>Uttarakhand</p></Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <p>West</p>
              <div className="dropdown-content">
                <Link to='/rajasthan'><p>Rajasthan</p></Link>
                <Link to="/gujrat"><p>Gujrat</p></Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <p>Central</p>
              <div className="dropdown-content">
                <Link to="/mp"><p>Madhya Pradesh</p></Link>
                <Link to='/maharashtra'><p>Maharashtra</p></Link>
                <Link to='daman'><p>Daman&Diu</p></Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <p>East</p>
              <div className="dropdown-content">
                <Link to='/Sikkim'><p>Sikkim</p></Link>
                <Link to='/Odisha'><p>Odisha</p></Link>
                <Link to='/Assam'><p>Assam</p></Link>
                <Link to='/WestBengal'><p>West Bengal</p></Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <p>South</p>
              <div className="dropdown-content">
                <Link to='/goa'><p>Goa</p></Link>
                <Link to='/karnataka'><p>Karnataka</p></Link>
                <Link to='/keral'><p>Keral</p></Link>
                <Link to='/andhra'><p>Andhra Pradesh</p></Link>
              </div>
            </div>
            <button class="signup-buttonn">Sign Up</button>

          </div>
        </nav>
      </div>
    </>
  );
}

export default NAveeeee;
