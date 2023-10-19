import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import bgImage from './bg.png';
import logoImage from "./devloper 5.png";
import Footer from './footer';



export class Home extends Component {
  render() {
    return (
      <div>
        <section className="firstSection">
           <div className="leftSection">
           
            Hi, My name is <span className="purple"> Pushpendra pal</span>
            <div>I am passionate</div>
            <div> web developer</div>
           <span id="element"></span>
           <div className="button">
            <a  className="btn mx-2" href="https://publuu.com/flip-book/264736/639644" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a className="btn mx-2" href="https://github.com/pushpendra0809"  target="_blank" rel="noopener noreferrer">Visit Github</a>
           </div>
           </div>
           <div className="rightSection">
            <img src={bgImage} alt=""/>
           </div>
        </section>

        <section className="firstSection">
           <div className="leftSection" id="INTRODUCE">
            <h1>LET ME<span> INTRODUCE</span> MYSELF</h1>
            <h3> <p> Hi, my name is <span>Pushpendra Pal</span> I'm from <span>Orai Uttar Pradesh,India</span>.
           <br />
            <br /> I recently graduated with a <span>Bachelor  of Technology</span> in Computer Since & Engineering  from 
           <span>University Institute of Technology, RGPV, Bhopal  in 2023</span>.
           <br /><br />As a <span>Full-Stack</span> 
           developer, i enjoy tackling new challenges and continuously expanding my skillset. <br /> 
           I have done project <span>Texttweater , NewsMonkey</span> using Html,Css,Js ,React.
            <br />
           <br /> I am also interested in building new <span>Web Technology and Products</span> as well as exploring areas related to <span>Softwear Development</span>.</p></h3>
           <span id="element"></span>

           </div>
           <div className="rightSection">
            <img src={logoImage} alt=""/>
           </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Home
