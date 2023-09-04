import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "../css/about.css";


function About() {


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
              defaultValue={50}
              step={25}
              valueLabelDisplay="off"
              marks={options}
            />
          </Box>
        );
      }




    //function to decide which length of bio to render
    function renderBio(param) {
        switch(param) {
            case 'shortest':
                return "shortest bio";
            case 'short':
                return "short bio";
            case 'normal':
                return "normal bio";
            case 'long':
                return "long bio";
            case 'longest':
                return "longest bio";
        }
    }

    //function to actually render the bio 
    function render() {
        return(
            <div>
                {renderBio('short')}
            </div>
        )
    }


  return (
    <div className="about-section">


      {createSlider()}

      <div className="bio">
          {renderBio('longest')}
      </div>

      <div>
          {render()}
      </div>


    </div>



  );
};

export default About;