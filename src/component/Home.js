import React, { Component, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import bgImage from "./bg.png";
import logoImage from "./soft.jpg";
import Footer from './footer';
import {useTypewriter} from 'react-simple-typewriter' 
import down from './arrow-2.png'
import git from "./git.png";
import insta from "./insta.png";
import mail from "./mail.png";
import link from "./link.png";
import arrow from "./arrow.png"


function Home() {
  const [typeEffect] = useTypewriter ({
    words:[' MERN Stack Developers','Engineers','and  Designers'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
    
})
const handleGmail = ()=>{
  const recipientEmail='devtriots@gmail.com';
  const subject = 'Subject of the email';
  const body = 'Body of the email';
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}
  
    return (
      <div className='home-container'>
        <div className='intro10' id="intro1">
          <section className="firstSection">
           <div className="leftSection">
            
              
            <div className='para'>
              <div className='box-1-1'>
                <div className='para-1'>
                  <h1>Hi, We Are <br /> <span style={{color:'#c3073f'}}> DevTriots </span><br /></h1>
                </div>
                <div className='para-2'>
                  <span>{typeEffect}</span>
                </div>
              </div>
              <div className='box-2-2'>
                <a href="#firstsection-2" class="scroll-button-1"><img src={down}></img></a>
              </div>
               
            </div>
            
           </div>
           <div className="rightSection">
            <div className='box-1'>
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
             
              
           </div>
        </section>
        </div>
        <section className="firstsection-2 " id='firstsection-2'>
            <div className="leftSection" id="INTRODUCE">
                <h1>From Pixels to Perfection: Crafting Web Solutions That Inspire.</h1>
                <span id="element"></span>
                <div className='box-2'>
                   <a href="#firstsection-3" class="scroll-button"><img src={arrow}></img></a>
                </div> 
            </div>
            <div className="rightSection">
            <div class="laptop-container">
              <div class="screen">
                <pre class="code-animation">
                    Welcome to our Portfolio
                    const greeting = "Hello, World!";
                    console.log(greeting);

                    About Us
                    const aboutMe = "Passionate web developers";
                    console.log(aboutMe);

                    Skills
                    const skills = ["HTML", "CSS", "JavaScript", "React"];
                    console.log("Skills:", skills.join(", "));

                    Contact
                    const email = "DevTriots@gmail.com";
                    console.log("Contact me:", email);
                </pre>
                
        </div>
        
        </div>
            </div>
          </section>
          <section className='firstsection-3' id='firstsection-3'>
            <div className="contact">
                    <button onClick={handleGmail}>Contact Us!</button>
                    
            </div>
          </section>
        </div>
        
      
    )
  }

export default Home;
