// NAveeeee.jsx

import React from 'react';
import Mountain from '../video/Mountain.mp4';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Slider1 from "./Slider1.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from "./Destination.js";
import Vacation from "./Vacation.js";
import Youtube from "./Youtube.js";
import Packages from "./Packages.js";
import Discount from "./Discount.js";
import Review from "./Review.js";

function NAveeeee() {
  return (
    <>


      <div className='video-container'>

        <video src={Mountain} autoPlay loop muted className='video' />

        <div className='text-overlay'>
          <h1 className='overlay-text'>
            Plan your exciting and stress-free tour with us
          </h1>
        </div>

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
      </div>

      <Slider1 />
      <Destination />
      <Vacation />
      <Packages />
      <Youtube />
      <Discount />
      <Review />
    </>
  );
}

export default NAveeeee;
