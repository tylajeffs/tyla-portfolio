import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
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
        <Box sx={{ width: 600 }}>
          <Slider
            aria-label="Bio Length"
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
              return "long bio";
          case 100:
              return "longest bio";
      }
  }


  //function to actually render the bio 
  function renderBio(param) {
      return(
          <div>
              {selectBioLength(param)}
          </div>
      )
  }



  return (
    <div className="about-section">

      {createSlider()}

      {renderBio(sliderValue)}

    </div>
  );
};

export default About;