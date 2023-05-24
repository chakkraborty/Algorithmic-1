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
                <NavbarB.Brand href="#home"><h1 className="Brand">Algorithmic</h1></NavbarB.Brand>
                <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarB.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Roadmap</Nav.Link>
                        <Nav.Link href="#pricing">Articles</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Lists</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
                            {/* <NavDropdown.Divider /> */}
                            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </NavbarB.Collapse>
            </Container>
        </NavbarB>
    );
};

export default Navbar;