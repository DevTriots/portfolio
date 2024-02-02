import React from 'react';
// import { Link } from "react-router-dom";

import logoImage1 from "./media/linkedin (2).png";
import logoImage2 from "./media/github (3).png";
import logoImage3 from "./media/instagram_icon.png";
import logoImage4 from "./media/mail.png";
import logoImage5 from "./media/whatsapp.png";

function Footer() {
  return (
    <footer>
      <div className="row footrow" id="footerbox">
        <div className=" box md-4" id="footerbox1">
          <span>Dedicated to creating impactful solutions</span>
        </div>
        <div className=" box md-4" id="footerbox2">
          <span>&copy; 2024 Devtriots Portfolio</span>
        </div>
        <div className=" box md-4" id="footerbox3">
          <div className="social">
         <a className="social-media mx-1" href="https://www.linkedin.com/in/pushpendra-pal-9628ab214/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage1} alt="" />
        </a>
       <a className="social-media mx-1" href="https://github.com/pushpendra0809" target="_blank" rel="noopener noreferrer">
        <img src={logoImage2} alt=""/>
       </a>
        <a className="social-media mx-1" href="https://www.instagram.com/pushpendra.pal.54772/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage3} alt=""/>
        </a>
        <a className="social-media mx-1" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
        <img src={logoImage4} alt=""/>
        </a>
        <span className="social-media mx-1" href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoImage5} alt=""/>
        <div className="whatApp">887181361</div>
        </span>
     </div>  
        </div>
      </div>
    </footer>
  );
}

export default Footer;
