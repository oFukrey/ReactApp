import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { toggleTheme, theme, count } = useContext(ShopContext);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="d-flex items-center justify-center shadow-sm p-3 background-color: #e3f2fd"
      style={{ position: "sticky", top: "0px", zIndex: "1000" }}
    >
      <Container className="nav">
        <Navbar.Brand href="/">
          <img
            src={assets.logo}
            alt="logo"
            width="54"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div className="d-flex gap-3 order-lg-2 ms-auto">
          <div className="position-relative">
            <Link to="/cart">
              <img
                src={assets.cart}
                alt="cart"
                width="27px"
                style={{}}
                className=" "
              />
              <div
                className="d-flex rounded-circle 
                align-items-center
                justify-content-center"
                style={{
                  backgroundColor: "black",
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  top: "-8px",
                  left: "15px",
                  paddingRight: "5px",
                  paddingBottom: "15px",
                }}
              >
                <p
                  className=""
                  style={{
                    paddingBottom: "8px",
                    marginBottom: "2px",
                    color: "white",
                    height: "3px",
                    width: "3px",
                  }}
                >
                  {count}
                </p>
              </div>
            </Link>
          </div>

          <img src={assets.searchbar} alt="search" width="27" />
          <img src={assets.wishlist} alt="wishlist" width="27" />
          <div className="dropdown">
            <button
              className="d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={assets.userprofile}
                alt="profile"
                width="27"
                className=""
              />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/login">
                  Log out
                </a>
              </li>
            </ul>
          </div>
          {theme === "light" ? (
            <img
              onClick={toggleTheme}
              src={assets.sun}
              alt="profile"
              width="27"
            />
          ) : (
            <img
              onClick={toggleTheme}
              src={assets.moon}
              alt="profile"
              width="27"
            />
          )}
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
