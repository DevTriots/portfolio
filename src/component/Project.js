import React, { Component } from "react";
import logoImage from "./Screentexttwiter.png";
import logoImage1 from "./app-image.png";
import logoImage2 from "./spotify.png";
import logoImage3 from "./Two-Goog-co.png";
import logoImage4 from "./iNotebook.png";
import logoImage5 from "./media/todolist2.png";
import logoImage6 from "./media/keeperApp.png";
import Footer from "./footer";
export class Project extends Component {
  render() {
    return (
      <>
        <div className="background">
          <div className="cantent-wrap" id="cantent-wrap1">
            <div className="container1 ">
              <h2>
                My<span>Project</span>
              </h2>
            </div>
            <div className="container2" id="container12">
              <div className="number3" id="number2">

                <div className="cards iteam1" id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">Textutilles</h5>
                    <p className="cards-text">
                      In TextTweaker, the all-in-one solution
                      formanipulating and optimizing your text! Whetheryou're a
                      writer,editor, or just someone who lovesplaying with
                      words, here tostreamline your text
                      processing tasks.<br></br>
                      Technology use - HTML, JavaScript, CSS ,React.js
                    </p>
                  </div>
                  <div className="proButton" >
                      <a
                      href="https://github.com/pushpendra0809/pushpendratext"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project
                    </a>
                    </div>
                </div>

                <div className="cards iteam1 md-6  mx-6  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage1}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">News Monkey</h5>
                    <p className="cards-text">
                      Designed and developed a dynamic and user-friendly news
                      aggregator application that providescurated and up-to-date
                      news content from adiverse range of reputable sources.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS ,React.js.
                    </p>
                    <div  className="proButton">
                    <a
                      href="https://github.com/pushpendra0809/nwesMonkey"
                     
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    </div>
                  </div>
                </div>

                <div className="cards iteam1 md-6  mx-6  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage4}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>

                  <div className="cards-body">
                    <h5 className="cards-title">iNotebook</h5>
                    <p className="cards-text">
                      In iNotebook user login, logout, and signup
                      functionalities, Users can effortlessly create, edit, and
                      remove notes, providing a seamless and organized platform
                      for managing their thoughts and ideas. .<br></br>
                      Technology use - HTML, JavaScript, CSS ,React.js.
                    </p>
                    {/* <p  className="cards-text"><small className="text-body-secondary">(08/2023-10/2023)</small></p> */}
                   <div className="proButton">
                    <a
                      href="https://github.com/pushpendra0809/iNootebook"
                      
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    </div>
                    </div>
                </div>
              </div>

              <div className="number3" id="number2">

                <div className="cards iteam1 md-6  mx-6  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage3}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">Two Good-co</h5>
                    <p className="cards-text">
                      "I co-founded 'Two Good co,' a subsidiary app of 'Colon
                      of,' designed to (briefly describe the main feature or
                      service) for users. It embodies the same commitment to
                      user-centric design and seamless functionality.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS , Animation
                    </p>
                    <div className="proButton" id="proButton1">
                    {/* <button> */}
                      <a
                      href="https://github.com/pushpendra0809/tow-good"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project
                    </a>
                    {/* </button> */}
                    {/* <button> */}
                      <a
                      href="https://pushpendra0809.github.io/tow-good/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    {/* </button> */}
                    </div>
                  </div>
                </div>

                <div className="cards iteam1 md-6  mx-6  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage2}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>

                  <div className="cards-body">
                    <h5 className="cards-title">Spotify-Colon</h5>
                    <p className="cards-text">
                      Users can effortlessly play, pause, and skip to the next
                      or previous tracks, providing an intuitive and seamless
                      music listening experience. Leveraging my app development
                      skills, I ensured smooth and responsive performance.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS .
                    </p>
                    {/* <p  className="cards-text"><small className="text-body-secondary">(06/2023-07/2023)</small></p> */}
                   <div className="proButton">
                    <a
                      href="https://github.com/pushpendra0809/Spotify-Colon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    <a
                      href="https://pushpendra0809.github.io/Spotify-Colon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    </div>
                  </div>
                </div>

                <div className="cards iteam1 md-6  mx-6  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage5}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">TodoList</h5>
                    <p className="cards-text">
                      Users can effortlessly Create, edit, and delete notes
                      effortlessly with our intuitive todo list app. Seamlessly
                      organize your tasks, ensuring a streamlined and
                      efficient task management experience.<br></br>
                      Technology use - HTML, JavaScript, CSS, react.js.
                    </p>
                    {/* <p  className="cards-text"><small className="text-body-secondary">(06/2023-07/2023)</small></p> */}
                    <div className="proButton">
                    <a
                      href="https://github.com/dhananjay1002000/todo-2.0-api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    <a
                      href="https://todo-nmof.onrender.com/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="number3" id="number2">
                <div className="cards iteam1  " id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage2}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">ChatApp</h5>
                    <p className="cards-text">
                      Users can effortlessly play, pause, and skip to the next
                      or previous tracks, providing an intuitive and seamless
                      music listening experience. Leveraging my app development
                      skills, I ensured smooth and responsive performance.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS .
                    </p>
                    </div>
                    <div className="proButton">
                    <a
                      href="https://github.com/dhananjay1002000/chatApp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    <a href="https://todo-nmof.onrender.com/ " target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>

                <div className="cards iteam1" id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage6}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">keeper</h5>
                    <p className="cards-text">
                      Users can effortlessly play, pause, and skip to the next
                      or previous tracks, providing an intuitive and seamless
                      music listening experience. Leveraging my app development
                      skills, I ensured smooth and responsive performance.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS .
                    </p>
                    </div>
                   <div className="proButton">
                    <a
                      href="https://github.com/dhananjay1002000/keeper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    <a
                      href="https://keeper-app-v1.onrender.com/ "

                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    </div>
                </div>

                <div className="cards iteam1" id="iteam12">
                  <div className="cardImage">
                    <img
                      src={logoImage6}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="cards-body">
                    <h5 className="cards-title">keeper</h5>
                    <p className="cards-text">
                      Users can effortlessly play, pause, and skip to the next
                      or previous tracks, providing an intuitive and seamless
                      music listening experience. Leveraging my app development
                      skills, I ensured smooth and responsive performance.
                      <br></br>
                      Technology use - HTML, JavaScript, CSS .
                    </p>
                    </div>
                  <div className="proButton">
                    <a
                      href="https://github.com/dhananjay1002000/keeper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Porject
                    </a>
                    <a
                      href="https://keeper-app-v1.onrender.com/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    </div>
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
