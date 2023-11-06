import React from "react";
import "./OTR.css";
import TickIcon from "../Images/TickIcon.png";
import OTROne from "../Images/OTROne.png"



function OTRTires() {
    return (
      <div>
        <div className="hero-container-one">
          <div className="hero-background-one">
            {/* Background image */}
            <img src={OTROne} alt="Background" className="background-image" />
          </div>
          <div className="hero-content-one">
            {/* Text and content overlay */}
            <div className="upper-border">
              <p className="hero-upper-border"></p>
            </div>
            <h1 className="hero-title">OTR TIRES</h1>
            <p className="hero-subtitle">
              Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
              Nationwide!
            </p>
            {/* <div className="hunterImage"></div> */}
          </div>
        </div>
        <div className="main_container">
          <div className="left_1">
            <h2>
              Increase The<br></br> Productivity for your<br></br> OTR
            </h2>
            <p className="subtitle">Premium Heavy Duty Tires and OTR </p>
            <p className="subtitle_2">
              Phosfluorescently engaged worldwides methodologies with web
              enabled technology pursure interactively coordinates proactive
              commerce via process
            </p>
            <p className="title_1">
              <img src={TickIcon}></img>35 Years Experience
            </p>
            <p className="subtitle_1">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium.
            </p>
            <p className="title_1">
              <img src={TickIcon}></img>Excellencee Certificate
            </p>
            <p className="subtitle_1">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium
            </p>
          </div>
          <div className="right_1">
            <div className="boxes">
              <div className="box_1">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </div>
              <div className="box_1">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </div>
              <div className="box_1">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OTRTires;