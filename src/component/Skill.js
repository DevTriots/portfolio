import React, { Component } from 'react'
import logoImage1 from "./c.png";
import logoImage2 from "./cpluse.png";
import logoImage3 from "./html.png";
import logoImage4 from "./css.png";
import logoImage5 from "./Js.png";
import logoImage6 from "./react.png";
import logoImage7 from "./codingActivity1.png";
import Footer from './footer';

export class Skill extends Component {
  render() {
    return (
        <>
        <div className="container-skill" >
      <div className='images row'id="skill12">
       <h1 className='my-4'>Professional<span>Skillset</span></h1>
        <div className="card mx-2 " style={{width: "18rem"}}>
        <img src={logoImage1} className="card-img-top" alt="..."></img>
        </div>
        <div className="card mx-2 " style={{width: "18rem"}}>
        <img src={logoImage2} className="card-img-top" alt="..."></img>
        </div>
        <div className="card mx-2 " style={{width: "18rem"}}>
        <img src={logoImage3} className="card-img-top" alt="..."></img>
        </div> 
       
        <div className="card mx-2  " style={{width: "18rem"}}>
        <img src={logoImage4} className="card-img-top" alt="..."></img>
        </div>
        <div className="card mx-2  " style={{width: "18rem"}}>
        <img src={logoImage5} className="card-img-top" alt="..."></img>
        </div>
        <div className="card mx-2  " style={{width: "18rem"}}>
        <img src={logoImage6} className="card-img-top" alt="..."></img>
        </div>
        <h2 className='hading my-5'>Professional<span>Skillset</span></h2>
        <img src={logoImage7} className="card-img-top1" alt="..."></img>
        
      </div>
        <Footer />
      </div>


      </>
    )
  }
}

export default Skill

