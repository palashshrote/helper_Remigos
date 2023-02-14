import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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
        <Container className="me-auto">
          <Container className="col-3 d-flex">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="logo-img" alt='...' />
              </Link>
            </Navbar.Brand>
            <Link className="nav-links" to="/homepage">Help Center</Link>
          </Container>
          <Container className="col-7">
            <ul className="option-container ">
              <li>
                <Link className="nav-links" to="/homepage">Home page</Link>
              </li>
              <li>
                <Link className="nav-links" to="/sndingmoney">Sending money</Link>
              </li>
              <li>
                <Link className="nav-links" to="/sndmoney">Send money</Link>
              </li>
              <li>
                <Link className="nav-links" to="/pgemail">help-page-email</Link>
              </li>
              <li>
                <Link className="nav-links" to="/pgtnx">help-page-tnx</Link>
              </li>
            </ul>
          </Container>
          <Container className="col-2">
            <Nav>
              <Container className="d-flex flex-column">
                <h4>Ashwari</h4>
                <p>Student</p>
              </Container>
              {/* <Nav.Link href="/pgtnx">Link</Nav.Link> */}
              <img alt='...' style={{ height: '50px', width: '50px' }} src={navIcon} className="logo-img" />
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container> 
        </Container>
      </Navbar>
    </>
  )
}

export default HomeNavbar;