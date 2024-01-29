import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import bgImage from './bg.png';
import logoImage from "./soft.jpg";
import Footer from './footer';



export class Home extends Component {
  render() {
    return (
      <div>
        <div className='intro10' id="intro1">
        <section className="firstSection">
           <div className="leftSection">
           <h1>
            Hi, We are <br /> <span className="purple"> devTriots</span><br />I am passionate  <br /> web developer</h1>
            {/* <h1>I am passionate</h1> */}
            {/* <div> web developer</div> */}
           <span id="element"></span>
           <div className="button">
            <a  className="btn mx-2" href="https://online.flippingbook.com/view/691143498/" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a className="btn mx-2" href="https://github.com/pushpendra0809"  target="_blank" rel="noopener noreferrer">Visit Github</a>
           </div>
           </div>
           <div className="rightSection">
            <img src={bgImage} alt=""/>
            {/* <img src={bgImage} style={{width: "100%", height: "auto"}} alt=""></img> */}
           </div>
        </section>
        </div>
         <div className='intro0' id="intro">
        <section className="firstSection">
           <div className="leftSection" id="INTRODUCE">
            <h1>LET ME<span> INTRODUCE</span> MYSELF</h1>
            <h3> <p> Hi, my name is <span>Pushpendra Pal</span> I'm from <span>Orai Uttar Pradesh,India</span>.
           <br />
            <br /> I recently graduated with a <span>Bachelor  of Technology</span> in Computer Science & Engineering  from 
           <span>University Institute of Technology, RGPV, Bhopal</span>.
           <br /><br />As a <span>Full-Stack</span> 
           developer, i enjoy tackling new challenges and continuously expanding my skillset. <br /> 
           I have done project <span>Texttweater , NewsMonkey</span> using Html,Css,Js ,React.
            <br />
           <br /> I am also interested in building new <span>Web Technology and Products</span> as well as exploring areas related to <span>Software Development</span>.</p></h3>
           <span id="element"></span>

           </div>
           <div className="rightSection">
            <img src={logoImage} alt=""/>
           </div>
        </section>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
