// Navbar.js
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class AppNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar-dark bg-dark px-5" expand="md">
                <Container>
                    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar;
