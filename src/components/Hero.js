import React from "react";
import "../css/hero.css";
import cloudll from "../assets/light-mode-cloud-left.png";
import cloudlr from "../assets/light-mode-cloud-right.png";
import clouddl from "../assets/dark-mode-cloud-left.png";
import clouddr from "../assets/dark-mode-cloud-right.png";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text title-font">Hey! I'm Tyla</h1>
      <img
        src={cloudll}
        alt=""
        className="floating-left"
      />
      <img
        src={cloudlr}
        alt=""
        className="floating-right"
      />
    </div>
  );
}

export default Hero;
