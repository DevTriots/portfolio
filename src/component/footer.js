import React from 'react';
import { useEffect, useState } from "react";
import git from "./git.png";
import insta from "./insta.png";
import mail from "./mail.png";
import link from "./link.png";


function Footer() {
  const[date , setDate] = useState();
    useEffect(()=>{
        setDate(()=>{
            return new Date().getFullYear();
        })
    },[])
    const handleGmail = ()=>{
      const recipientEmail='devTriots@gmail.com';
      const subject = 'Subject of the email';
      const body = 'Body of the email';
      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
  }
  
  return (
    
    <div className='footerbox' id="footerbox">
        <div className=" footerbox1" >
          <span>Designed and Developed by <span style={{color:'#c3073f'}}>DevTriots</span></span>
        </div>
        <div className=" footerbox2" >
          <span> copyright @ {date} </span>
        </div>
        <div  className="footerbox3">
                <p><img src={git} alt="github" onClick={()=>{
                                window.open('https://github.com/dhananjay1002000')
                            }}/></p>
                <p><img src={insta} alt="whatsapp"  className='tooltip-trigger' />
                </p>
                <p><img src={link} alt="linkdin" onClick={()=>{
                                window.open('https://www.linkedin.com/in/dhananjay-meshram-a87487214/')
                            }} /></p>
                <p><img src={mail} alt="gmail" onClick={handleGmail}  /></p>
        </div>
    </div>
    
  );
}

export default Footer;
