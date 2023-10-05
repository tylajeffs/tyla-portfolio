import React from "react";
import Headshot from "../assets/TylaFlowers.jpg";
import FunResume from "../assets/funResume.pdf";
import BoringResume from "../assets/boringResume.pdf";
import { Download } from "react-bootstrap-icons";
import ContactForm from "../components/ContactForm";
import "../css/contactPage.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1 id="contact-header">Contact.</h1>
      <p id="thanks"> Thanks for stopping by! </p>

      <div className="contact-page-container">
        <div className="column-one links-and-contact">
          <div id="form-container">
            <ContactForm />
          </div>

          <div id="links-container">
            <div id="links-row-one">
              <a
                href="mailto:tylajeffs@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="contact-button">tylajeffs@gmail.com</button>
              </a>

              <a
                href="https://github.com/tylajeffs"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <button className="contact-button">GitHub</button>{" "}
              </a>

              <a
                href="https://github.com/tylajeffs"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <button className="contact-button">LinkedIn</button>{" "}
              </a>

              <a
                href="https://github.com/tylajeffs"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <button className="contact-button">+1 385-288-7851</button>{" "}
              </a>
            </div>

            <div id="links-row-two">
              <a
                href={FunResume}
                download="TylaJeffsResume(fun!)"
                target="_blank"
                rel="noreferrer"
              >
                <button className="contact-button">
                  {" "}
                  <Download
                    color="black"
                    size={15}
                  />{" "}
                  Resume (fun)
                </button>
              </a>

              <a
                href={BoringResume}
                download="TylaJeffsResume(boring)"
                target="_blank"
                rel="noreferrer"
              >
                <button className="contact-button">
                  {" "}
                  <Download
                    color="black"
                    size={15}
                  />{" "}
                  Resume (boring)
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="column-two picture-section">
          <img
            src={Headshot}
            alt=""
            id="headshot-pic"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
