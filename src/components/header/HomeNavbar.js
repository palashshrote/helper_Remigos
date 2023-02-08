import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link */}
            <Link className="nav-link active" to="/to1">help-page</Link>
            <Link className="nav-link active" to="/to2">help-page2</Link>
            <Link className="nav-link active" to="/to3">help-page3</Link>
            <Link className="nav-link active" to="/to4">help-page-transaction</Link>
            <Link className="nav-link active" to="/to5">help-page-email</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;