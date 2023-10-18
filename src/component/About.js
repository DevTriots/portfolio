import React, { Component } from "react";
import Footer from "./footer";
export class About extends Component {
  render() {
    return (
      <div className="container mainline mainline2 " id="about" > 
      
        <h2>AboutMe</h2>
        <p>
          Hello, I'm <span>Pushpendra Pal</span>, a passionate web developer with a strong
          foundation in various<br></br> technologies. I'm constantly working on exciting
          projects and honing my skills to create <br></br>innovative solutions. Here's a
          glimpse of my journey:
        </p>
        <h2> Education</h2>
        <p>
          - Bachelor of Technology in Computer Science & Engineering, <br />
          from (University Institute of Technology, RGPV, Bhopal (2023))
          <br />
          - Senior Secondary, Radha Krishna I C Binora Vidya Jalaun, UP Board
          (2018)
          <br />- Class 10, S.R Inter College Orai, UP Board (2016)
        </p>
        <h2> Projects</h2>
        <h4>News Monkey</h4>
        <p>
          - Duration:** October 2022 - December 2022
          <br />
          - Designed and developed a dynamic and user-friendly news aggregator
          application that provides curated and up-to-date news content from a
          diverse range of reputable sources.
          <br />- Technology Stack: HTML, JavaScript, CSS, React.js
        </p>
        <h4> TextTweaker</h4>
        <p>
          - Duration: August 2023 - Present
          <br />
          - Welcome to TextTweaker, the all-in-one solution for manipulating and
          optimizing your text! Whether you're a writer, editor, or just someone
          who loves playing with words, TextTweaker is here to streamline your
          text processing tasks.
          <br />- Technology Stack:** HTML, JavaScript, CSS, React.js
        </p>
        <h2> Skills</h2>
        <p>
          - Programming Languages: C, C++, JavaScript
          <br />
          - Web Development: HTML, CSS, React.js, Node.js
          <br />- Database Management: MySQL, MongoDB
        </p>
        <h2> Achievements</h2>
        <p>
          - Volunteer at the 34th MP Young Scientist Conference.
          <br />
          - Participated in a Robotics workshop conducted by team EmbedVISION at
          UIT RGPV, Bhopal, on behalf of TECHFEST IIT Bombay.
          <br />- 2nd position in district in running competition. - 1st
          position in kabaddi tournament at Mahasangram - sportsfest of UIT
          RGPV.
        </p>
        <h2> Contact</h2>
        - Email: pushpendrapal2100@gmail.com
        <br />- Phone:8871813661<br />
        LinkedIn - https://www.linkedin.com/in/pushpendra-pal-9628ab214
        <h2> Hobbies</h2>
        <p>
          - Web Designing
          <br />- Cricket, Music, Learning
        </p>
        
        
        <Footer />
      </div>
    );
  }
}

export default About;
