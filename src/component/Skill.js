import React, { Component } from 'react'
import logoImage1 from "./media/c-icon.png";
import logoImage2 from "./media/c_plus_icon.png";
import logoImage3 from "./media/java_icon.png";
import logoImage4 from "./media/html_icon.png";
import logoImage5 from "./media/css_icon.png";
import logoImage6 from "./media/javascript_icon.png";
import logoImage7 from "./media/react_icon.png";
import logoImage8 from "./media/nodejs_icon2.png";
import logoImage9 from "./media/express-js.png";
import logoIcon from "./media/spring_boot_icon.png";
import logoIcon1 from "./media/mongodb_icon.png";
import logoIcon2 from "./media/postgresql_icon.png";
import logoIcon3 from "./media/aws_icon.png";
import logoIcon4 from "./media/azure_icon.png";
import logoIcon5 from "./media/atom_icon.png";
import logoIcon6 from "./media/vs code.png";
import logoIcon7 from "./media/github (2).png";
import logoIcon8 from "./media/postman_icon.png";
import logoIcon9 from "./media/slack_icon.png";

import Footer from './footer';

export class Skill extends Component {
  render() {
    return (
        <>
        <div className="container-skill" >
      <div className='images row'id="skill12">
       <h1 className='my-4'>Professional<span>Skillset</span></h1>
        <div className="skillcard mx-2 " >
        <img src={logoImage1} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> C </p>
        </div>
        </div>
        <div className="skillcard mx-2  kkk"id="skillid" >
        <img src={logoImage2} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> C++</p>
        </div>
        </div>
        <div className="skillcard mx-2 "id="skillid" >
        <img src={logoImage3} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Java </p>
        </div>
        </div> 
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoImage4} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> HTML </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoImage5} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> CSS </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoImage6} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> JavaScript </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoImage7} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> ReactJs </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoImage8} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p>NodeJs</p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid">
        <img src={logoImage9} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> ExpressJs</p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoIcon} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Spring Boot</p>
        </div>
        </div>
        <div className="skillcard mx-2  " id="skillid">
        <img src={logoIcon1} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> MongoDB </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoIcon2} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> PostgreSQL</p>
        </div>
        </div>
        <div className="skillcard mx-2  " id="skillid">
        <img src={logoIcon3} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Aws </p>
        </div>
        </div>
        <div className="skillcard mx-2  "id="skillid" >
        <img src={logoIcon4} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Azure </p>
        </div>
        </div>
       
        <div className='images row tools'>
          <h1>Working<span>Tools</span></h1>
        <div className="skillcard mx-3 "id="skillid" >
        <img src={logoIcon6} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> VS Code </p>
        </div>
        </div>
        <div className="skillcard mx-3  "id="skillid">
        <img src={logoIcon7} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Github</p>
        </div>
        </div>
        <div className="skillcard mx-3  "id="skillid" >
        <img src={logoIcon8} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Postman</p>
        </div>
        </div>
        <div className="skillcard mx-3  "id="skillid">
        <img src={logoIcon9} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Slack </p>
        </div>
        </div>
        <div className="skillcard mx-3 "id="skillid" >
        <img src={logoIcon5} className="card-img-top" alt="..."></img>
        <div className="cover"id="coverid">
          <p> Atom </p>
        </div>
        </div>
        </div>
      </div>
        
      </div>
      </>
    )
  }
}

export default Skill

