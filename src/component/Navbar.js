import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./logo.png";
import logoImage1 from "./linkedin.png";
import logoImage2 from "./github1.png";
import logoImage3 from "./instagram.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={logoImage} alt="" className="logoImage" />
            Pushpendra's Portpolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/project"
                  >
                    Project
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/skill">
                    Skill
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                <div className="social-icon">
                  <a
                    className="social-media mx-2"
                    href="https://www.linkedin.com/in/pushpendra-pal-9628ab214/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoImage1} alt="" />
                  </a>
                  <a
                    className="social-media mx-2"
                    href="https://github.com/pushpendra0809"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoImage2} alt="" />
                  </a>
                  <a
                    className="social-media mx-2"
                    href="https://www.instagram.com/pushpendra.pal.54772/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoImage3} alt="" />
                  </a>
                  {/* <Link
                    className="btn btn-primary mx-1" id="btn-contect"
                    to="/contact"
                    onClick={() => console.log("connect")}
                  >
                    <span>Let's Connect</span>
                  </Link> */}
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
