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
        <div className=" box md-4" id="footerbox1">
          <span>Dedicated to creating impactful solutions</span>
        </div>
        <div className=" box md-4" id="footerbox2">
          <span>&copy; 2023 Pushpendra's Portfolio</span>
        </div>
        <div className=" box md-4" id="footerbox3">
          <span > <img className='mx-1 my-1' src={logoImage5} alt="LinkedIn" />+91 8871813661 <br /> <img className='mx-1' src={logoImage4} alt="LinkedIn" />pushpendrapal2100@gmail.com </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
