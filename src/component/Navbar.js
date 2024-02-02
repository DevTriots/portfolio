import React from "react";
import { Link } from "react-router-dom";
import logoImage from "./logo.png";
import logoImage1 from "./linkedin.png";
import logoImage2 from "./github1.png";
import logoImage3 from "./instagram.png";
const Navbar = () => {
  return (
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home"><img src={logoImage} alt="" className="logoImage"/>
            Pushpendra's Portpolio</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/project">Project</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/skill">Skill</Link>
                </li>
              </ul>
              <span className="navbar-text">
                <div className="social-icon">
    <a className="social-media mx-1" href="https://www.linkedin.com/in/pushpendra-pal-9628ab214/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage1} alt="" />
    </a>
    <a className="social-media mx-1" href="https://github.com/pushpendra0809" target="_blank" rel="noopener noreferrer">
        <img src={logoImage2} alt=""/>
    </a>
    <a className="social-media mx-1" href="https://www.instagram.com/pushpendra.pal.54772/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage3} alt=""/>
    </a>
</div>

            </span>
            </div>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
