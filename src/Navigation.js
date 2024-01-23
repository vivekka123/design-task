import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Images/nexcent-logo.png';
import './Navigation.css';

function Example() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" className='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href='#community'>Community</Nav.Link>
            <Nav.Link href='#blogs'>Blogs</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <Button >Registration</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Example;