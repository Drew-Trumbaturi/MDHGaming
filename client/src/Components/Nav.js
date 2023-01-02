import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/Logo.jpg";
import Login from "../Images/Login.png";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

export default function MyNavbar() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //const [isNavClosed, setIsNavClosed] = useState(true);
  //const handleNavclosed = () => setIsNavClosed(!isNavClosed);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Navbar
      collapseOnSelect="true"
      bg="dark"
      variant="dark"
      sticky="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          href="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
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
              menuVariant="dark"
            >
              <NavDropdown.Item
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <AnchorLink href="#populargames" className="text-reset">
                  Popular Games
                </AnchorLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <AnchorLink href="#gallery" className="text-reset">
                  Gallery
                </AnchorLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <AnchorLink href="#testimonials" className="text-reset">
                  Testimonials
                </AnchorLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  openInNewTab("https://www.facebook.com/mdhgamingNZ/")
                }
              >
                Social Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end text-light">
          <a href="/Login" className="text-reset">
            Login <img src={Login} width="20" height="20" alt="mdhbg.jpg" />{" "}
          </a>
          <i className="bi bi-moon mx-2 text-align-right"></i>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
