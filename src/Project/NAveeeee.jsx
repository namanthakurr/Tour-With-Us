/* eslint-disable */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function NAveeeee() {
  return (
    <>
     
     <div class="navbar-container">
        <nav>
            <div class="navbar-links">
              <Link to="/">
                <p class="nav-item">Home</p>
              </Link>
                <div class="nav-item dropdown">
                    <p>North</p>
                    <div class="dropdown-content">
                        <p>Ladakh</p>
                        <p>Jammu&Kashmir</p>
                        <p>Himachal Pradesh</p>
                        <p>Uttarakhand</p>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <p>West</p>
                    <div class="dropdown-content">
                      <Link to='/rajasthan'>
                        <p>Rajasthan</p>
                      </Link>
                      <Link to="/gujrat">
                        <p>Gujrat</p>
                      </Link>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <p>Central</p>
                    <div class="dropdown-content">
                      <Link to="/mp">
                        <p>Madhya pradesh</p>
                      </Link>
                      <Link to='/maharashtra'>
                        <p>Maharshtra</p>
                      </Link>
                      <Link to='daman'>
                        <p>Daman&Diu</p>
                      </Link>
                         
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <p>East</p>
                    <div class="dropdown-content">
                    <p>Sikkim</p>
                        <p>West Bengal</p>
                        <p>Assam</p>
                        <p>Odisha</p>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <p>South</p>
                    <div class="dropdown-content">
                      <Link to='/goa'>
                        <p>Goa</p>
                      </Link>
                      <Link to='/karnataka'>
                        <p>Karnataka</p>
                      </Link>
                        <Link to='/keral'> 
                        <p>Keral</p>
                        </Link>
                        <Link to='/andhra'>
                        <p>Andhra Pradesh</p>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>

    
    </>
  );
}

export default NAveeeee;
