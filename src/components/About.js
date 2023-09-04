import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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


  // //custom color palette for the slider
  // const theme = createTheme({
  //   palette: {
  //     light: {
  //       main: '#FF5733',
  //       // light: will be calculated from palette.primary.main,
  //       // dark: will be calculated from palette.primary.main,
  //       // contrastText: will be calculated to contrast with palette.primary.main
  //     },
  //     dark: {
  //       main: '#ffffff',
  //       //light: '#F5EBFF',
  //       // dark: will be calculated from palette.secondary.main,
  //       //contrastText: '#47008F',
  //     },
  //   },
  // });


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
              return "long bio";
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



  return (
    <div className="about-section">

      {createSlider()}

      {renderBio(sliderValue)}

    </div>
  );
};

export default About;