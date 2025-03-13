import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";

const NavbarComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Navbar
      className="px-3 shadow-sm"
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "#ffffff",
        height: "70px",
        zIndex: 1000,
        marginLeft: "250px",
      }}
    >
      <Container className="d-flex justify-content-between">
        <Form className="d-flex align-items-center">
          <div className="input-group">
            <FormControl
              type="search"
              placeholder="Search..."
              className="form-control"
              aria-label="Search"
            />
            <Button variant="outline-secondary">
              <i className="bi bi-search"></i>
            </Button>
          </div>
        </Form>
        {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}

        <div className="d-flex">
          <button className="bg-white">
            {isDarkMode ? (
              <i className="bi bi-sun "></i>
            ) : (
              <i className="bi bi-moon"></i>
            )}
          </button>
          <button className="bg-white">
            <i className="bi bi-bell "></i>
          </button>
          <button className="bg-white">
            <i className="bi bi-person-circle "></i>
          </button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
