import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './Style.css';
import { NavLink } from "react-router-dom";

export default function Navs() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col lg='10'>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand className="navbrand" href="/">Technical</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto navs">
                                    <NavLink className="nav-links" to="/">Home</NavLink>
                                    <NavLink className="nav-links" to="/service">Service</NavLink>
                                    <NavLink className="nav-links" to="/contact">Contact</NavLink>
                                    <NavLink className="nav-links" to="/about">About</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}