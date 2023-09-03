import React from "react";
import "../css/about.css";

function About() {

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


  return (
    <div className="about-section">
        <div className="slider">
        </div>

        <div className="bio">
            {renderBio('longest')}
        </div>

    </div>



  );
};

export default About;