import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/Logo.jpg";
import Login from "../Images/Login.png";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="MDH Gaming Logo"
          />{" "}
          MDH Gaming
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
            <NavDropdown
              title="More"
              id="nav-dropdown-dark-example"
              // className="text-muted"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#about">Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about">Game News</NavDropdown.Item>
              <NavDropdown.Item href="#games">Popular Games</NavDropdown.Item>
              <NavDropdown.Item href="#about">Competitions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.facebook.com/mdhgamingNZ/">
                Social Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end text-light">
          <a href="#login" className="text-light text-decoration-none">
            Login <img src={Login} width="20" height="20" />{" "}
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
