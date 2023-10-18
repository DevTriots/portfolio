import React, { Component } from "react";
import logoImage from "./Screentexttwiter.png";
import logoImage1 from "./app-image.png";
import Footer from "./footer";
export class Project extends Component {
  render() {
    return (
      <>
      <div className="background">
        <div className="cantent-wrap" id="cantent-wrap1">
      <div className="container1 ">
        <h2>My<span>Project</span></h2>
      </div>
      <div className="container2" id="container12">

      <div className="card iteam1 md-6 mx-2" id="iteam12" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Textutilles</h5>
           <p className="card-text">Welcome to TextTweaker, the all-in-one solution formanipulating and optimizing your text!
            Whetheryou're a writer, editor, or just someone who lovesplaying with words, TextTweaker is here tostreamline
             your text processing tasks.<br></br>
             Technology use - HTML, JavaScript, CSS ,React.js</p>
           <p className="card-text"><small className="text-body-secondary">(10/2022 - 12/2022)</small></p>
           <a href="https://github.com/pushpendra0809/pushpendratext" className="btn btn-primary mx-1" target="_blank" rel="noopener noreferrer">Project</a>
            {/* <a href="#" className="btn btn-primary mx-1">Another link</a> */}
           </div>
          </div>
          </div>
        </div>

      <div className="card iteam2 md-6 mx-2"  id="iteam13" style={{width: "inherite"}}>
       <div className="row g-0">
          <div className="col-md-4">
          <img src={logoImage1} className="img-fluid rounded-start" alt="..."/>
         </div>
          <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">News Monkey</h5>
           <p className="card-text">
             
             Designed and developed a dynamic and user-friendly 
            news aggregator application that providescurated and up-to-date news content from 
            adiverse range of reputable sources.<br></br>
            Technology use - HTML, JavaScript, CSS ,React.js.
             </p>
           <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
           <a href="https://github.com/pushpendra0809/nwesMonkey" className="btn btn-primary mx-1" target="_blank" rel="noopener noreferrer">Porject</a>
            {/* <a href="#" className="btn btn-primary mx-1">Another link</a> */}
           </div>
          </div>
          </div>
        </div>
        
      </div>
      <div className="container my-5" id="workExperience">
        <h2>Work<span>Experiences</span></h2>
      <div className="card work-experience-card">
            <h5 className="card-header">Internship</h5>
             <div className="card-body">
              <h5 className="card-title">Move Hostel</h5>
                <p className="card-text"> Web Development <br />05/2021 - 09/2021 <br /> In this intership  I am Make some template. collect some Information. Go Hostel to Hostel convincing for register our Hostel on MoveHostel.com.
                 every day i am  learn Web - Developments 1-2 hour.
                 Move - hostel is an ultimate resource of great value accommodationin online which help to find budget and decent accommodation in BHOPAL
                 Achievements/Tasks
                  Contact : movehostel.com
                   Technology- HTML, JavaScript, CSS ,React.js</p>
              </div>
         </div>
         </div>
         </div>
      <Footer />
      </div>
      </>
    );
  }
}

export default Project;
