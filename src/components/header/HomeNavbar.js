import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navIcon from '../../Assets/Images/navIcon.svg';
import logo from '../../Assets/Images/logo.svg';
import { Link } from 'react-router-dom';
import '../header/Header.scss';

function HomeNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="header">
        <Container>
          <Container className="col">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="logo-img" alt='...' />
              </Link>
            </Navbar.Brand>
            <Link className="nav-links" to="/">Help Center</Link>
          </Container>
          
            {/* <Container className="me-auto"> */}
              
              <Container className="col-md-2 d-flex flex-row">
                {/* <Nav> */}
                  <Container style={{ textAlign: 'right' }}>
                  <h4 style={{ marginTop: '8px', marginBottom: '0px', fontFamily: 'David Libre' }}>Ashwari</h4>
                    <p>Student</p>
                  </Container>
                  <Container style={{ paddingLeft:'0px' }} className="d-flex flex-row align-items-center">
                    <img alt='...' style={{ height: '50px', width: '50px' }} src={navIcon} className="logo-img" />
                    <NavDropdown id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                  </Container>
                {/* </Nav> */}
              </Container> 
            {/* </Container> */}
        </Container>
  </Navbar>
    </>
  )
}

export default HomeNavbar;