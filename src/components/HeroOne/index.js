import React from "react";
import "./hero.css"; // Import your CSS file for styling
import HeroOneImage from "../Images/hero.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-background">
        {/* Background image */}
        <img src={HeroOneImage} alt="Background" className="background-image" />
      </div>
      <div className="hero-content">
        {/* Text and content overlay */}
        <div className="upper-border">
          <p className="hero-upper-border"></p>
        </div>
        <h1 className="hero-title">Unleash the Power of Performance</h1>
        <p className="hero-subtitle">
          Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
          Nationwide!
        </p>
        <button className="hero-button">Explore</button>
      </div>
    </div>
  );
}

export default Hero;
