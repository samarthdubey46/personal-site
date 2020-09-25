import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar_ = (props) => {
  return (
    <Navbar  className="color-nav" collapseOnSelect expand="md" variant="dark">
      <Link to="/">
        <Navbar.Brand style={{ fontSize: 30, fontFamily: 'Audiowide' }}>TECHMAN</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/blogs">
            <Nav.Link href="/blogs" style={{ fontFamily: 'Audiowide' }}>Blogs</Nav.Link>
          </Link>
          <Nav.Link style={{ fontFamily: 'Audiowide' }}>Tutorials</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ fontFamily: 'Audiowide' }} >Contact Me</Nav.Link>
          <Nav.Link style={{ fontFamily: 'Audiowide' }} eventKey={2} >
            Login
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar_