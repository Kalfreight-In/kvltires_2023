import React from "react";
import "./Hunter.css";
import Hunter_1 from "../Images/HunterAl_1.png";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import TickIcon from "../Images/TickIcon.png";

function Hunter() {
  return (
    <div className="fullContainer">
      <div className="hero-container-one">
        <div className="hero-background-one">
          {/* Background image */}
          <img src={Hunter_1} alt="Background" className="background-image" />
        </div>
        <div className="hero-content-one">
          {/* Text and content overlay */}
          <div className="upper-border">
            <p className="hero-upper-border"></p>
          </div>
          <h1 className="hero-title">HUNTER ALIGNMENT</h1>
          <p className="hero-subtitle">
            Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
            Nationwide!
          </p>
          <div className="hunterImage"></div>
        </div>
      </div>
      <div className="hunterContOne">
        <div className="HunterImg1"></div>
        <p className="subtitle_6">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium dynamically target high-payoff intellectual
          capital for customized technologies objectively integrate emerging
          core competencies before process-centric communities dramatically
          evisculate holistic innovation rather than client-centric data.
        </p>
      </div>
      <div className="hunterContTwo">
        <div style={{ width: "50%", padding: "40px" }}>
          <h2 className="title">
            Get your Truck Ready<br></br> for the Road
          </h2>
          <p className="subtitle">Safe & Reliable Services</p>
          <p className="subtitle_6">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium dynamically target high-payoff intellectual
            capital for customized technologies objectively.
          </p>
        </div>
        <div className="fourCols">
          <div className="fourcolsone">
            <img className="IconInCol" src={one}></img>
            <div className="inner_box">
              <p className="title_1">Advanced Alignment Technology</p>
              <p className="subtitle_2">
                Utilizing state-of-the-art Hunter alignment technology for
                precision and accuracy.
              </p>
            </div>
          </div>
          <div className="fourcolsone">
            <img className="IconInCol" src={two}></img>
            <div className="inner_box">
              <p className="title_1">Expert Truck Alignment:</p>
              <p className="subtitle_2">
                Proper alignment ensures even tire wear, extending the lifespan
                of your tires.
              </p>
            </div>
          </div>
          <div className="fourcolsone">
            <img className="IconInCol" src={three}></img>
            <div className="inner_box">
              <p className="title_1">Increased Tire Life</p>
              <p className="subtitle_2">
                Specialized technicians with extensive experience in aligning
                heavy-duty trucks.
              </p>
            </div>
          </div>
          <div className="fourcolsone">
            <img className="IconInCol" src={four}></img>
            <div className="inner_box">
              <p className="title_1">Enhanced Safety and Stability</p>
              <p className="subtitle_2">
                Aligning your heavy-duty truck improves handling, stability, and
                overall safety on the road.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hunterContThree">
        <div className="contThreeImg"></div>
        <div className="contThreeText">
          <h2 className="title">
            Increase The<br></br> Productivity for your<br></br> Truck
          </h2>
          <p className="subtitle">Unlock the power</p>
          <div className="inner_div">
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
        </div>
      </div>
      <div className="hunterContFour">
        <div className="left_2">
          <p
            className="title"
            style={{ textAlign: "start", paddingLeft: "60px" }}
          >
            <strong>
              {" "}
              Increase The Productivity for<br></br> your OTR
            </strong>
          </p>
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
        <div className="hunterContFourImg"></div>
      </div>
      <div className="hunterLastCont">
        <div className="blue"></div>
        <p className="subtitle_4">
          The job market of the future will consist of those jobs that robots
          cannot perform. Our blue-collar work is pattern<br></br>
          recognition, making sense of what you see.
        </p>
      </div>
    </div>
  );
}

export default Hunter;
