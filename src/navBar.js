import React from 'react';
import './App.css';
import { Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar_ = (props) => {
  return (
    <Navbar className="color-nav" collapseOnSelect expand="md" variant="dark">
      <Link to="/" style={{textDecoration:'none'}}>
        <Nav.Link href="/"  style={{ fontSize: 30, fontFamily: 'Audiowide',color:'white',textDecoration:'none' }}>TECHMAN</Nav.Link>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/blogs">
            <Nav.Link href="/blogs" style={{ fontSize: 18 }}>Blogs</Nav.Link>
          </Link>
          <Link to="/tutorials">
            <Nav.Link href="/tutorials" style={{ fontSize: 18 }}>Tutorials</Nav.Link>
          </Link>

          <Link to="/projects">
            <Nav.Link href="/projects" style={{ fontSize: 18 }}>Projects</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ fontSize: 18 }}>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar_