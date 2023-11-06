import React from "react";
import "./industrial.css";
import IndustrialOne from "../Images/IndustrialOne.png";
import IndustrialTwo from "../Images/IndTwo.png";
import { BsCheckCircleFill } from "react-icons/bs";
import TickIcon from "../Images/TickIcon.png";
import IndTwo from "../Images/IndTwo.png";
import IndThree from "../Images/IndThree.png";
import IndLast from "../Images/IndLast.png";
import AmericaSteel from "../Images/American.jpg";
import Continental from "../Images/Continental.png";
import Bkt from "../Images/BKT.png";
import IndIconOne from "../Images/IndIconOne.png";
import IndIconTwo from "../Images/IndIconTwo.png";
import IndIconThree from "../Images/IndIconThree.png";
import IndIconFour from "../Images/IndIconFour.png";
import IndIconFive from "../Images/IndIconFive.png";
import IndIconSix from "../Images/IndIconSix.png";
import One from "../Images/1.png";
import Two from "../Images/2.png";

function Industrial() {
  return (
    <div>
      <div className="hero-container-one">
        <div className="hero-background-one">
          {/* Background image */}
          <img
            src={IndustrialOne}
            alt="Background"
            className="background-image"
          />
        </div>
        <div className="hero-content-one">
          {/* Text and content overlay */}
          <div className="upper-border">
            <p className="hero-upper-border"></p>
          </div>
          <h1 className="hero-title">INDUSTRIAL TIRES</h1>
          <p className="hero-subtitle">
            Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
            Nationwide!
          </p>
          {/* <div className="hunterImage"></div> */}
        </div>
      </div>
      <div className="Cont_top">
        <div className="imageCont">
          <img src={IndThree}></img>
        </div>
        <div className="leftConTop">
          <div className="Cont_top_one">
            <h2>Diverse Range</h2>
            <p className="subtitle_2">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </div>
          <div className="TwoConts">
            <img src={One}></img>
            <h2 className="title_1">Our Vission</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster.
            </p>
          </div>
          <div className="TwoConts">
            <img src={Two}></img>
            <h2 className="title_1">Estimate Shipping</h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster.
            </p>
          </div>
        </div>
      </div>

      <div className="container_otr">
        <div className="carousel">
          {/* <div className="brand">
            <img src={AmericaSteel}></img>
            <img src={Bkt}></img>
            <img src={Continental}></img>
          </div> */}
        </div>
        <div className="left_cont">
          <img src={IndTwo} className="bkttires" alt="img"></img>
        </div>
        <div className="right_cont">
          <div className="content">
            <h2>
              KVL Tires' industrial<br></br> tires are designed to <br></br>
              handle heavy loads<br></br>
              with ease.
            </h2>
            <p className="subtitle_2">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <div className="items">
              <div className="item_1">
                <img src={IndIconOne}></img>
                <p>Extensive Selection</p>
              </div>
              <div className="item_1">
                <img src={IndIconTwo}></img>
                <p>Durability</p>
              </div>
              <div className="item_1">
                <img src={IndIconThree}></img>
                <p>Superior Performance</p>
              </div>
              <div className="item_1">
                <img src={IndIconFour}></img>
                <p>Quiet Ride</p>
              </div>
              <div className="item_1">
                <img src={IndIconFive}></img>
                <p>Safety Features</p>
              </div>
              <div className="item_1">
                <img src={IndIconSix}></img>
                <p>Fuel Efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hunterContThree">
        <div className="contThreeImg"></div>
        <div className="contThreeText">
          <h2 className="title">
            Expert Guidance <br></br>and Support
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
    </div>
  );
}

export default Industrial;
