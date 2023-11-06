import React from "react";
import "./Retread.css";
import RetreadImg from "../Images/Retread.png";
import { BsCheckCircleFill } from "react-icons/bs";

function Retread() {
  return (
    <div className="full_Container">
      <div className="hero-container-one">
        <div className="hero-background-one">
          {/* Background image */}
          <img src={RetreadImg} alt="Background" className="background-image" />
        </div>
        <div className="hero-content-one">
          {/* Text and content overlay */}
          <div className="upper-border">
            <p className="hero-upper-border"></p>
          </div>
          <h1 className="hero-title">RETREAD TIRES</h1>
          <p className="hero-subtitle">
            Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
            Nationwide!
          </p>
          <div className="continentalImage"></div>
        </div>
      </div>
      <div className="middle_container">
        <div className="left_one">
          <div className="before_first">
            <div className="first_one">
              <div className="Rectangle">New Tires</div>
              <div className="RectangleTwo">Retread Tires</div>
            </div>
            <div className="RectangleThree">
              <p>
                Providing Varity <br></br>Electical Services
              </p>
              <p>
                Discount 25% <br></br>Rewiring Services
              </p>
              <p>Click to Get Discout</p>
            </div>
          </div>
        </div>
        <div className="right_one">
          <h2 className="title">
            We understand the importance of <br></br> sustainability
          </h2>
          <p className="subtitle">
            We can help you with the following services:
          </p>
          <p className="subtitle_3">
            Pellentesque vehicula eros neque, maximus mattisin sagittis Nulla
            facilisi. In sed pretium metus Proin pretium id urna Interdum et
            malesuada.
          </p>
          <div className="retreadImage"></div>
          <div className="itemsRetread">
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Telecom Installation and Repair</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Lighting Design</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Hosted PBX Solutions</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Motors and Transformers</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Outdoor/Parking Lot Lighting</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p className="forColor">Isolated Computer Circuits</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_container">
        <div className="content_1">
          <div className="bottomRetreadImage"></div>
          <h2 className="title">Description for Commercial Services</h2>
          <p className="subtitle_5">
            Phosfluorescently engage worldwide methodologies with web enabled
            technology Interactively coordinate proactives e-commerce process
            centric outside the box thinking completely pursue scalabl customer
            service through sustainable potentialities colaboratively
            administrate turnkey channels whereas virtual e tailers objectively
            seize scalable metrics whereas proactiveservices Seamlessly empower
            fully researched growth strategies.
          </p>
          <div className="lastCont">
            <div className="blue"></div>
            <p className="subtitle_4">
              The job market of the future will consist of those jobs that
              <br></br>
              robots cannot perform. Our blue-collar work is pattern<br></br>
              recognition, making sense of what you see.
            </p>
            <div className="RetreadLastImg"></div>
          </div>
          <p className="subtitle_6">
            Coordinate proactives e-commerce process centric outside the box
            thinking completely pursue scalabl customer service through
            sustainable potentialities colaboratively administrate turnkey
            channels whereas virtual e tailers objectively seize scalable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Retread;
