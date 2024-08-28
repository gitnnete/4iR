import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-4">
        <div className="container">
          <div className="row">
            {/* Company Description */}
            <div className="col-md-4">
              <div class="nav-item mx-4 mb-4 fw-bold">
                <Link
                  class="navbar-brand text-white fs-3"
                  aria-current="page"
                  to="/"
                >
                  4<span className="text-danger">i</span>R
                </Link>
              </div>
              <p>
                4iR is a leading IT solutions company, offering cutting-edge
                technology solutions to businesses worldwide. We specialize in
                cybersecurity, cloud services, and digital transformation.
              </p>
            </div>

            {/* Social Media Icons - Vertical List */}
            <div className="col-md-4 text-center">
              <h5>Follow Us</h5>
              <ul className="list-unstyled footer-icons">
                <li className="my-3">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Links */}
            <div className="col-md-4 text-end">
              <h5 className="mb-2">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link to="/" className="my-2 nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="my-2 nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="my-2 nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactUs" className="my-2 nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
