import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-1">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Logo */}
          <div className="col-md-3 mb-3">
            <img src={assets.logo} alt="logo" className="img-fluid w-50 mb-3" />
            <p>Elevate Your Style with Timeless Collections</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/collection"
                  className="text-light text-decoration-none"
                >
                  Collection
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@logiczo.com</p>
            <p>Phone: +91 1234567890</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-3 text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Logiczo. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
