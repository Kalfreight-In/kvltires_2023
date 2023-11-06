import React from "react";
import "./OTRBottom.css";
import BKTtires from "../Images/BKTtires.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import AmericaSteel from "../Images/American.jpg";
import Apollo from "../Images/Apollo.png";
import Continental from "../Images/Continental.png";
import Bkt from "../Images/BKT.png";
import GeneralTires from "../Images/General.png";
import Goodyear from "../Images/Goodyear.png";
import CooperTires from "../Images/CooperTires.png";


function OTRbottom() {
  return (
    <div className="container_otr">
      <div className="carousel">
        <div className="brand">
          <img src={AmericaSteel}></img>
          <img src={Bkt}></img>
          <img src={Continental}></img>
        </div>
      </div>
      <div className="left_cont">
        <img src={BKTtires} className="bkttires" alt="img"></img>
      </div>
      <div className="right_cont">
        <div className="content">
          <h2>
            We create opportunity <br></br> to reach potential
          </h2>
          <p className="subtitle_2">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="items">
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>Safe Package</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>Ship Everywhere</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>Global Tracking</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>24/7 Support</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>In Time Delivery</p>
            </div>
            <div className="item_1">
              <BsCheckCircleFill
                style={{ color: "#C81010", fontSize: "40px" }}
              />
              <p>Transparent Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTRbottom;
