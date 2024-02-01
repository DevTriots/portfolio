// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Project from './component/Project';
import Home from './component/Home';
import Contact from "./component/Contact";
import Skill from './component/Skill';
import Footer from './component/footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      
      <Routes>
        {/* <Route element={<Navbar />} />
        <Route element={<Footer />} /> */}
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/project" element={<Project />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/skill" element={<Skill />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer />
      </Router>
      
    </div>
    
  );
}

export default App;
