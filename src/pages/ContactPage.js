import React from 'react'
import Headshot from '../assets/bioimg.png'
import FunResume from '../assets/funResume.pdf';
import BoringResume from '../assets/boringResume.pdf';
import { Download } from "react-bootstrap-icons";
import ContactForm from '../components/ContactForm';
import '../css/contactPage.css'

function Contact() {
    return (
        <div className='contact-page'>
            <h1 id='contact-header'>Contact.</h1>
            
            <div className='row contact-page-row'>

                

                <div className="contact-text">
                    <p> Thanks for stopping by! </p>

                    <div>
                        <a
                        href={FunResume}
                        download="TylaJeffsCV(fun!)"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <button className="contact-button"> <Download color="black" size={15}/> Resume (fun)</button>
                        </a>

                        <a
                        href={BoringResume}
                        download="TylaJeffsCV(boring)"
                        target="_blank"
                        rel="noreferrer"
                        >
                        <button className="contact-button"> <Download color="black" size={15}/> Resume (boring)</button>
                        </a>

                        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <button className="contact-button">GitHub</button> </a>

                        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <button className="contact-button">LinkedIn</button> </a>

                        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <button className="contact-button">+1 385-288-7851</button> </a>

                        <a href="mailto:tylajeffs@gmail.com" target="_blank" rel="noreferrer noopener"><button className="contact-button">tylajeffs@gmail.com</button></a>

                    </div>
                    
                    
                </div>

                <div className="pic-section">
                    <img src={Headshot} id="headshot-pic"></img>
                </div>

            </div>

            <ContactForm />

            
        </div>
    )
}

export default Contact
