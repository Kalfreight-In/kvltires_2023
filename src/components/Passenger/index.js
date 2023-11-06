import React from "react";
import "./Pass.css";
import TickIcon from "../Images/TickIcon.png";
import BKTtires from "../Images/BKTtires.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import AmericaSteel from "../Images/American.jpg";
import Apollo from "../Images/Apollo.png";
import Continental from "../Images/Continental.png";
import Bkt from "../Images/BKT.png";
import GeneralTires from "../Images/General.png";
import Goodyear from "../Images/Goodyear.png";
import CooperTires from "../Images/CooperTires.png";
import PassOne from "../Images/Trail-best-tires 1.png";
import PassTwo from "../Images/passtwo.png";

function Passenger() {
  return (
    <div>
      <div className="hero-container-one">
        <div className="hero-background-one">
          {/* Background image */}
          <img src={PassOne} alt="Background" className="background-image" />
        </div>
        <div className="hero-content-one">
          {/* Text and content overlay */}
          <div className="upper-border">
            <p className="hero-upper-border"></p>
          </div>
          <h1 className="hero-title">PASSENGER TIRES</h1>
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
            High-quality and reliable<br></br> passengertires
          </h2>
          {/* <p className="subtitle">Premium Heavy Duty Tires and OTR </p> */}
          <p className="subtitle_2">
            We understand that your safety and comfort on the road are
            paramount, which is why we offer a wide range of passenger tires
            designed to meet your specific needs.
          </p>
          <p className="title_1">
            <img src={TickIcon}></img>5 Years Experience
          </p>
          <p className="subtitle_1">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium.
          </p>
          <p className="title_1">
            <img src={TickIcon}></img>Excellencee Certificate
          </p>
          <p className="subtitle_1">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium
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

      <div className="container_otr">
        <div className="carousel">
          <div className="brand">
            <img src={AmericaSteel}></img>
            <img src={Bkt}></img>
            <img src={Continental}></img>
          </div>
        </div>
        <div className="left_cont">
          <img src={PassTwo} className="bkttires" alt="img"></img>
        </div>
        <div className="right_cont">
          <div className="content">
            <h2>
              Responsiveness for a<br></br> confident and smooth<br></br> ride.
            </h2>
            <p className="subtitle_2">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <div className="items">
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Extensive Selection</p>
              </div>
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Durability</p>
              </div>
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Superior Performance</p>
              </div>
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Quiet Ride</p>
              </div>
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Safety Features</p>
              </div>
              <div className="item_1">
                <BsCheckCircleFill
                  style={{ color: "#C81010", fontSize: "40px" }}
                />
                <p>Fuel Efficiency</p>
              </div>
            </div>
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
              KVL Tires offers a comprehensive<br></br> range of passenger tires
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
        <div className="PassContFourImg"></div>
      </div>
    </div>
  );
}

export default Passenger;
