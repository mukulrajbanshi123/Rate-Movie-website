import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top ">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src="/img/logo.png" alt="logo" width={200} />
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-medium text-center">
              <li className="nav-item py-1">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to="/destination" className="nav-link" href="#">
                  Destinations
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to="/gallery" className="nav-link" href="#">
                  Gallery
                </Link>
              </li>
              <li className="nav-item py-1">
                <Link to="/contact" className="nav-link" href="#">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
