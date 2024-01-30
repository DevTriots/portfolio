import React, { Component, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import bgImage from "./bg.png";
import logoImage from "./soft.jpg";
import Footer from "./footer";

export class Home extends Component {


  render() {
    return (
      <div>
        <div className="intro10" id="intro1">
          <section className="firstSection">
            <div className="leftSection">
              <h1 className="auto-type">
                Hi, We are <br /> <span  color='#C3073F'> DevTriots</span>
              </h1>
              <h5>
                Meet our dynamic team of three passionate developers with a rich
                background in multinational corporations (MNCs) and a proven
                track record of delivering successful projects for diverse
                clients. Drawing on our extensive expertise, we specialize in a
                comprehensive array of technologies to bring your visions to
                life.
                <br />
                <br />
                Our skill set spans the entire web development stack, including
                proficiency in HTML, CSS, JavaScript, Node.js, React.js,
                Express.js, MongoDB, and Postgres. With a keen eye for design
                and user experience, we excel in crafting visually appealing and
                intuitively functional interfaces.
                <br />
                <br />
                Beyond the web, we are well-versed in Java and Spring Boot for
                robust backend development, coupled with SQL for efficient
                database management. Our commitment to collaboration and version
                control is evident in our adept use of Git and GitHub.
                <br />
                <br />
                With a combined wealth of experience from MNCs, we bring a
                disciplined and structured approach to project management,
                ensuring timely delivery and exceeding client expectations.
                Whether it's creating sleek user interfaces or building scalable
                backend solutions, our team is geared to tackle diverse
                challenges.
              </h5>
              {/* <h1>I am passionate</h1> */}
              {/* <div> web developer</div> */}
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
        <div className="intro0" id="intro">
          <section className="firstSection">
            <div className="leftSection" id="INTRODUCE">
              <h1>
                LET ME<span> INTRODUCE</span> MYSELF
              </h1>
              <h3>
                {" "}
                <p>
                  {" "}
                  Hi, my name is <span>Pushpendra Pal</span> I'm from{" "}
                  <span>Orai Uttar Pradesh,India</span>.
                  <br />
                  <br /> I recently graduated with a{" "}
                  <span>Bachelor of Technology</span> in Computer Science &
                  Engineering from
                  <span>University Institute of Technology, RGPV, Bhopal</span>.
                  <br />
                  <br />
                  As a <span>Full-Stack</span>
                  developer, i enjoy tackling new challenges and continuously
                  expanding my skillset. <br />I have done project{" "}
                  <span>Texttweater , NewsMonkey</span> using Html,Css,Js
                  ,React.
                  <br />
                  <br /> I am also interested in building new{" "}
                  <span>Web Technology and Products</span> as well as exploring
                  areas related to <span>Software Development</span>.
                </p>
              </h3>
              <span id="element"></span>
            </div>
            <div className="rightSection">
              <img src={logoImage} alt="" />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
