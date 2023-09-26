import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import "../css/footer.css";

function Footer() {

  //function to pick which color moon emoji to use
  function GitHubEmoji() {
    //check if it's dark or light mode
    if(document.body.classList.contains("light-mode")) {
        return <AiFillGithub color="black" size={18} className="icon"/>
    } else {
        return <AiFillGithub color="white" size={18} className="icon"/>
    }
  }



  return (

    <div className="footer">
      <div id="name">Tyla Jeffs  </div>
      <div id="icons">
        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> { GitHubEmoji() }</a>
        <a href="https://www.linkedin.com/in/tylajeffs/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin color="black" size={18} className="icon"/></a>
        <a href="mailto:tylajeffs@gmail.com" target="_blank" rel="noreferrer noopener"><AiOutlineMail color="black" size={18} className="icon"/></a>
      </div>


        



    </div>

  );
};

export default Footer;