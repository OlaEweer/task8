import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavbarComponent(){
    return (
     <>
        <Navbar collapseOnSelect expand="lg" className="navbarComp">
            <Container>
                    <Navbar.Brand href="#home" className='d-flex logo'>

                        <img src="./public/logo.svg" alt="" />
          <h6>Digital marketing agency</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                    </Nav>
                        <Nav className='navbar'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#ClientsAndPartners">Clients & Partners</Nav.Link>
                            <NavDropdown href="#About" title="About Us" id="basic-nav-dropdown">
                     

              <NavDropdown.Item href="#About">Who & Why</NavDropdown.Item>
              <NavDropdown.Item href="#Internship">Internship
              </NavDropdown.Item>
              <NavDropdown.Item href="#Achievement">Achievement</NavDropdown.Item>
              <NavDropdown.Item href="#certificate">
              Search for ID
              </NavDropdown.Item>
            </NavDropdown>
             <Nav.Link href="#LetsTalk">Let's Talk</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
    );
}