import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
import "../css/footer.css";

function Footer() {

  return (

    <div className="footer">
      
      <a href="#" id="name"> Tyla Jeffs</a>
      <div id="icons">
        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <AiFillGithub color="black" size={18} className="icon"/></a>
        <a href="https://www.linkedin.com/in/tylajeffs/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin color="black" size={18} className="icon"/></a>
        <a href="mailto:tylajeffs@gmail.com" target="_blank" rel="noreferrer noopener"><AiOutlineMail color="black" size={18} className="icon"/></a>
      </div>

    </div>

  );
};

export default Footer;