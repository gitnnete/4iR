import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
        <div class="container">
          <li class="nav-item mx-4 fw-bold">
            <Link class="navbar-brand text-white fs-3" aria-current="page" to="/">
              4<span className="text-danger">i</span>R
            </Link>
          </li>
          <button
            class="navbar-toggler text-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/Services" href="#">
                  Services
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/About" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item mx-4 fw-bold">
                <Link class="nav-link" to="/ContactUs" href="#">
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
