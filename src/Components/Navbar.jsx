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

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <li className="nav-item mx-4 fw-bold">
            <Link
              className="navbar-brand text-white fs-3"
              aria-current="page"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              4<span className="text-danger">i</span>R
            </Link>
          </li>
          <button
            className="navbar-toggler text-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item mx-4 fw-bold ${isActive("/")}`}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item mx-4 fw-bold ${isActive("/Services")}`}>
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className={`nav-item mx-4 fw-bold ${isActive("/About")}`}>
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className={`nav-item mx-4 fw-bold ${isActive("/ContactUs")}`}>
                <Link className="nav-link" to="/ContactUs">
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
