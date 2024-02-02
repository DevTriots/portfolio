import React, { Component, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import bgImage from "./bg.png";
import logoImage from "./soft.jpg";
import Footer from "./footer";

export class Home extends Component {


  render() {
    return (
      <div className='home-container'>
         <div className="intro10" id="intro1">
          <section className="firstSection">
            <div className="leftSection">
              <h1 className="auto-type">
                Hi, We are <br /> <span  style={{color: '#c3073f'}}> DevTriots</span>
              </h1>
              <span id="element"></span>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Visit our Github profiles
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="https://github.com/DevTriots"
                  target="_blank"
                  rel="noopener noreferrer">
                      DevTriots Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="https://github.com/sandeepshiven"
                  target="_blank"
                  rel="noopener noreferrer">
                      Sandeep Shiven
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="https://github.com/dhananjay1002000"
                  target="_blank"
                  rel="noopener noreferrer">
                      Dhananjay Meshram
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="https://github.com/pushpendra0809"
                  target="_blank"
                  rel="noopener noreferrer">
                      Puspendra Pal
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="rightSection">
              <img src={bgImage} alt="" />
              {/* <img src={bgImage} style={{width: "100%", height: "auto"}} alt=""></img> */}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
