import React from 'react';
// import { Link } from "react-router-dom";

// import logoImage1 from "./linkedin.png";
// import logoImage2 from "./github1.png";
// import logoImage3 from "./instagram.png";
import logoImage4 from "./gmail.png";
import logoImage5 from "./call.png";

function Footer() {
  return (
    <footer>
      <div className="row" id="footerbox">
        <div className=" box md-4">
          <span>Dedicated to creating impactful solutions</span>
        </div>
        <div className=" box md-4">
          <span>&copy; 2023 Pushpendra's Portfolio</span>
        </div>
        <div className=" box md-4">
          {/* <a className="social-media mx-1" href="https://www.linkedin.com/in/pushpendra-pal-9628ab214/" target="_blank" rel="noopener noreferrer">
            <img src={logoImage1} alt="LinkedIn" />
          </a>
          <a className="social-media mx-1" href="https://github.com/pushpendra0809" target="_blank" rel="noopener noreferrer">
            <img src={logoImage2} alt="GitHub" />
          </a>
          <a className="social-media mx-1" href="https://www.instagram.com/pushpendra.pal.54772/" target="_blank" rel="noopener noreferrer">
            <img src={logoImage3} alt="Instagram" />
          </a> */}
          <span > <img className='mx-1 my-1' src={logoImage5} alt="LinkedIn" />+91 8871813661 <br /> <img className='mx-1' src={logoImage4} alt="LinkedIn" />pushpendrapal2100@gmail.com </span>
         

        </div>
      </div>
    </footer>
  );
}

export default Footer;
