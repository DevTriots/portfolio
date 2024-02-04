import React, { Component, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import bgImage from "./bg.png";
import logoImage from "./soft.jpg";
import Footer from "./footer";
import { useTypewriter } from "react-simple-typewriter";
import down from "./arrow-2.png";

function Home() {
  const [typeEffect] = useTypewriter({
    words: [" MERN Stack Developer", "Engineer", "and a Designer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="home-container">
      <div className="intro10" id="intro1">
        <section className="firstSection">
          <div className="leftSection">
            <div className="para">
              <div className="para-1">
                <h1>
                  Hi, We Are <br />{" "}
                  <span style={{ color: "#c3073f" }}> DevTriots </span>
                  <br />
                </h1>
              </div>
              <div className="para-2">
                <span>{typeEffect}</span>
              </div>
            </div>

            {/* <div className="button">
            <a  className="btn mx-2" href="https://online.flippingbook.com/view/691143498/" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a className="btn mx-2" href="https://github.com/pushpendra0809"  target="_blank" rel="noopener noreferrer">Visit Github</a>
           </div> */}
          </div>
          <div className="rightSection">
            <div className="box-1">
              <div class="cube-container">
                <div class="cube">
                  <div class="face"></div>
                  <div class="face"></div>
                  <div class="face"></div>
                  <div class="face"></div>
                  <div class="face"></div>
                  <div class="face"></div>
                </div>
              </div>
            </div>
            <div className="box-2">
              <a href="#firstsection-2" class="scroll-button">
                <img src={down}></img>
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="firstsection-2" id="firstsection-2">
        <div className="leftSection" id="INTRODUCE">
          <h1>
            From Pixels to Perfection: Crafting Web Solutions That Inspire.
          </h1>
          <span id="element"></span>
        </div>
        <div className="rightSection">
          <div class="laptop-container">
            <div class="screen">
              <pre class="code-animation">
                Welcome to our Portfolio const greeting = "Hello, World!";
                console.log(greeting); About Us const aboutMe = "Passionate web
                developers"; console.log(aboutMe); Skills const skills =
                ["HTML", "CSS", "JavaScript", "React"]; console.log("Skills:",
                skills.join(", ")); Contact const email = "DevTriots@gmail.com";
                console.log("Contact me:", email);
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
