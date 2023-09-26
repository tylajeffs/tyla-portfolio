import React from 'react'
import Headshot from '../assets/bioimg.png'
import FunResume from '../assets/funResume.pdf';
import BoringResume from '../assets/boringResume.pdf';
import { Download } from "react-bootstrap-icons";

function Contact() {
    return (
        <div>
            <h1>Contact Page!</h1>
            
            <div className='row'>

                <div className="pic-section">
                    <img src={Headshot} id="headshot-pic"></img>
                </div>

                <div className="contact-section">
                    <p> Thanks for stopping by! </p>
                    <a
                    href={FunResume}
                    download="TylaJeffsCV(fun!)"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <button className="button"> <Download color="black" size={15}/> Resume (fun)</button>
                    </a>

                    <a
                    href={BoringResume}
                    download="TylaJeffsCV(boring)"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <button className="button"> <Download color="black" size={15}/> Resume (boring)</button>
                    </a>

                    <a href="mailto:tylajeffs@gmail.com" target="_blank" rel="noreferrer noopener"><button className="button">tylajeffs@gmail.com</button></a>

                    <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <button className="button">github</button> </a>

                    
                </div>

            </div>

            
        </div>
    )
}

export default Contact
