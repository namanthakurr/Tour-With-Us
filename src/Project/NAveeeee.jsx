/* eslint-disable */

import React from 'react';
import Mountain from '../video/Mountain.mp4';
import Slider1 from "./Slider1.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from "./Destination.js";
// import Vacation from "./Vacation.js";
import Youtube from "./Youtube.js";
import Packages from "./Packages.js";
import Discount from "./Discount.js";
import Review from "./Review.js";
import Dialogue from './Dialogue.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NAveeeee() {
  return (
    <>
     
     <div class="navbar-container">
        <nav>
            <div class="navbar-links">
                <p class="nav-item">Home</p>
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
                        <p>Rajasthan</p>
                        <p>Gujrat</p>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <p>Central</p>
                    <div class="dropdown-content">
                        <p>Madhya pradesh</p>
                        <p>Maharshtra</p>
                        <p>Daman&Diu</p>
                        <p>Odisha</p>
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
                        <p>Goa</p>
                        <p>Karnataka</p>
                        <p>Keral</p>
                        <p>Andhra Pradesh</p>
                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
      <div className='video-container'>

        <video src={Mountain} autoPlay loop muted className='video' />

        <div className='text-overlay'>
          <h1 className='overlay-text'>
            Tour With US
          </h1>
          <p className='India'>Incredible India</p>
        </div>

<<<<<<< Updated upstream
        <div className='search-container'>
          <Form className='d-flex'>
            <FormControl type='search' placeholder='Search countries, cities' className='me-2 custom-input' aria-label='Search' />
            <Button variant='outline-success' type='submit' className='search-button'>
              Search
            </Button>
          </Form>
        </div>

        <div className='navbar-container'>
          <Navbar expand='lg' variant='dark' className='transparent-navbar'>
            <Container>
              <Navbar.Brand href='#'><img src="verma.png" className='logo' alt="Logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls='navbarSupportedContent' />
              <Navbar.Collapse id='navbarSupportedContent'>
                <Nav className='me-auto'>
                  <Nav.Link href='#' active>
                    Home
                  </Nav.Link>
                  <NavDropdown title='International Holidays' id='basic-nav-dropdown-link'>
                    <NavDropdown.Item href='/bali'>Bali</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Dubai</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Thailand</NavDropdown.Item>
                    <NavDropdown.Item href='#'>London</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Australia</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Newzealand</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#'>More countries</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title='Honeymoon Gateways' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>Bali Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Dubai Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Greece Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Brazil Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Australia Honeymoon Packages</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#'>More Packages</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title='Packages by Interest' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>International Tour Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Solo Tour Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Couple Tour Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Family Tour Packages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Friends Group Tour Packages</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#'>More Luxuries Packages</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title='Search' id='basic-nav-dropdown-search'>

                    <NavDropdown.Item href='#'>More Searches</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className='black_div'>
          <div className='black_div_info'>

            <div>4.6 SR</div>
            <div>100% Customized Trips</div>
            <div>95% Visa Succes Rate</div>
            <div>24x7 Concierge</div>
          </div>
        </div>
=======
        
>>>>>>> Stashed changes
      </div>
      <div className="india-intro">
        <h2>Discover the Magic of Incredible India</h2>
        <p>Discover the magic of <span>Incredible India</span>, 
        a land where ancient traditions and modern marvels coexist in harmony. 
        From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India's 
        diverse landscapes offer something for every traveler. Explore the rich cultural heritage in cities like Delhi, Jaipur, 
        and Varanasi, where history comes alive in vibrant festivals and timeless monuments. 
        Savor the diverse cuisine, from spicy street food to royal delicacies, reflecting India's culinary depth.
         Wander through bustling markets, tranquil temples, and lush national parks teeming with wildlife. Whether you seek adventure,
         spirituality, or relaxation, India promises an unforgettable journey. Embrace the warmth of its people and
          the richness of its traditions. Come, experience the unparalleled beauty and vibrant spirit of <span>Incredible India</span>!</p>
    </div>

      <Slider1 />
      <Destination />
      <Dialogue/>
      {/* <Vacation /> */}
      <Packages />
      <Youtube />
      <Review />
      <Discount />
    </>
  );
}

export default NAveeeee;
