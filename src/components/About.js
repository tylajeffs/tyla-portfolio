import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import FunResume from '../assets/funResume.pdf';
import BoringResume from '../assets/boringResume.pdf';
import { Download } from "react-bootstrap-icons";
import Headshot from "../assets/bioimg.png";
import "../css/about.css";


function About() {

  //state variable to keep track of the slider value
  const [sliderValue, setSliderValue] = useState(50);

  //function to change the slider value and render the bio
  const changeSliderValue = (event, sliderValue) => {
    setSliderValue(sliderValue);
    renderBio(sliderValue);
  };

  //array of all the options/labels for the bio length slider
  const options = [
      {
        value: 0,
        label: 'Shortest',
      },
      {
        value: 25,
        label: 'Short',
      },
      {
        value: 50,
        label: 'Normal',
      },
      {
        value: 75,
        label: 'Long',
      },
      {
        value: 100,
        label: 'Longest',
      },
  ];

  //function to create the slider
  function createSlider() {
      return (
        <Box id="slider-container" sx={{ width: 500 }}>
          
            <Slider
              className="bio-slider"
              aria-label="Bio Length"
              size="large"
              value={sliderValue}
              step={25}
              valueLabelDisplay="off"
              marks={options}
              onChange={changeSliderValue}
            />

        </Box>
      );
    }


  //function to decide which length of bio to render and the text
  function selectBioLength(param) {
      switch(param) {
          case 0:
              return "Tyla Jeffs. Computer Science. Plants. 🌱";
          case 25:
              return <div>
              <p>Hi! I'm Tyla Jeffs. Currently finishing my BS in Computer Science, I am especially passionate about community gardens and coding.</p>
            </div>;
          case 50:
              return <div>
              <p>Hi! My name is Tyla Jeffs. I’m based in Hawaii and am finishing up my BS in Computer Science this December. Fueled by my love of plants 🌱, I’m currently working on a passion project implementing technology into community gardens in the United States.</p>
              <p>I’ve worked with several different technologies, but I’ve worked most with the MERN stack (Mongo DB, Express js, React, Node js). I’m an Enneagram 7 and an ENFP-T, and I’m happiest when I’m creating, exploring, and finding ways to make people’s lives easier.   </p>
              <p>To find out more about me, please check out my resumes down below.  Have a great day, and may your code always compile and your divs stay centered! ☀️🫶</p>
            </div>;
          case 75:
              return <div>
                <p>Hi! My name is Tyla Jeffs. I’m based in Hawaii and am finishing up my BS in Computer Science at Brigham Young University Hawaii. Fueled by my love of plants (indoor and outdoor 🌱), I’m currently working on a passion project to help streamline the process of creating fertile soil for community gardens in the United States.</p>
                <p>As a student, I’ve worked with several different technologies, but I’ve worked most with the MERN stack (Mongo DB, Express js, React, Node js).   </p>
                <p>I’m an Enneagram 7 and an ENFP-T (I know, strange to find myself in software) and I’m happiest when I’m creating, exploring, and finding ways to make people’s lives easier.   </p>
                <p>To find out more about me, please check out my resumes down below.  Have a great day - however that looks for you -  and may your code always compile and your divs stay centered! ☀️🫶</p>
              </div>;
          case 100:
              return <div>
              <p>Hi! My name is Tyla Jeffs. I’m based in Hawaii and am finishing up my BS in Computer Science at Brigham Young University Hawaii this December. Fueled by my love of plants (indoor and outdoor 🌱), I’m currently working on a passion project to help streamline the process of creating fertile soil for community gardens in the United States.</p>
              <p>I’ve worked with several different technologies (as a student does) but I’ve worked most with the MERN stack (Mongo DB, Express js, React, Node js). I’m also familiar with Docker, Postgres, Vue js, Oauth, and B-crypt, among other things. </p>
              <p>I’m an Enneagram 7 and an ENFP-T (I know, strange to find myself in software) and I’m happiest when I’m creating, exploring, and finding ways to make people’s lives easier.  </p>
              <p>To find out more about me, please check out my resumes down below (fun or boring? Up to you!).  Have a great day - however that looks for you -  and may your code always compile and your divs stay centered! ☀️🫶</p>
            </div>;
      }
  }

  //function to actually render the bio 
  function renderBio(param) {
      return(
          <div className="child">
              {selectBioLength(param)}
          </div>
      )
  }


  //now actually build the page :D
  return (
    <div className="about-section" id="about-section">
      <div className="row">
        <div className="pic-section">
          <img src={Headshot} id="headshot-pic"></img>
        </div>
        <div className="bio">
          <p className="slider-title">-- Bio too long? Adjust the slider! --</p>

          {createSlider()}

          {renderBio(sliderValue)}

          

        </div>
      </div>


      <div id="contact-heading">Curious? Learn more!</div>

      

      <div className="contact-section">
        <a
          href={FunResume}
          download="TylaJeffsCV(fun!)"
          target="_blank"
          rel="noreferrer"
        >
          <button className="about-button"> <Download color="black" size={15}/> Resume (fun)</button>
        </a>

        <a
          href={BoringResume}
          download="TylaJeffsCV(boring)"
          target="_blank"
          rel="noreferrer"
        >
          <button className="about-button"> <Download color="black" size={15}/> Resume (boring)</button>
        </a>

        <a href="mailto:tylajeffs@gmail.com" target="_blank" rel="noreferrer noopener"><button className="about-button">tylajeffs@gmail.com</button></a>

        <a href="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener"> <button className="about-button">GitHub</button> </a>

        
      </div>

    </div>
  );
};

export default About;