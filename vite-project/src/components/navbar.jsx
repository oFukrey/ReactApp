import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="d-flex items-center justify-center shadow-sm p-3"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={assets.logo}
            alt="logo"
            width="54"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="d-flex gap-3 order-lg-2 ms-auto">
          <img src={assets.cart} alt="cart" width="27" />
          <img src={assets.searchbar} alt="search" width="27" />
          <img src={assets.wishlist} alt="wishlist" width="27" />
          <img src={assets.userprofile} alt="profile" width="27" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/collection" className="nav-link">
              Collection
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
