import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarB from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbar = () => {
  return (
    <NavbarB collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarB.Brand href="/home">Algorithmic</NavbarB.Brand>
        <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarB.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Roadmap</Nav.Link>
            <Nav.Link href="/problems">Problems</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/mylists">My Lists</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarB.Collapse>
      </Container>
    </NavbarB>
  );
};

export default Navbar;
