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


  //function to decide which length of bio to render
  function selectBioLength(param) {
      switch(param) {
          case 0:
              return "shortest bio";
          case 25:
              return "short bio";
          case 50:
              return "normal bio";
          case 75:
              return <div>
                <p>Hi! My name is Tyla Jeffs, and trying my best to . I’m based in Hawaii and am finishing up my BS in Computer Science at Brigham Young University Hawaii. Fueled by my love of plants (indoor and outdoor 🌱), I’m currently working on a passion project to help foster greater biodiversity in the United States. </p>
                <p>I’ve worked with several different tech stacks (as a student does) but I’ve worked most (extensively?) with the MERN stack (Mongo DB, Express js, React, Node js). I’m also familiar with Docker, Postgres, Vue js, Oauth, and B-crypt. </p>
                <p>I’m an Enneagram 7 and an ENFP-T (I know, strange to find myself in software) and I’m happiest when I’m creating, exploring (collaborating?), and finding ways to make people’s lives easier. </p>
                <p>To find out more about me, please check out my resumes down below (fun or boring? Up to you!).  Have a great day - however that looks for you -  and may your code always compile and your divs stay centered! ☀️🫶</p>
              </div>;
          case 100:
              return "longest bio";
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

          {createSlider()}

          {renderBio(sliderValue)}

          

        </div>
      </div>


      

      <div className="contact-section">
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
  );
};

export default About;