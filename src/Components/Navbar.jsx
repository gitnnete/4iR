import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This will give us the current route location

  // Close the navbar whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
        <div class="container">
          <li class="nav-item mx-4 fw-bold">
            <Link
              class="navbar-brand text-white fs-3"
              aria-current="page"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              4<span className="text-danger">i</span>R
            </Link>
          </li>
          <button
            class="navbar-toggler text-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={toggleNavbar}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-4 fw-bold">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  
                >
                  Home
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/Services" >
                  Services
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/About" >
                  About
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/ContactUs" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
