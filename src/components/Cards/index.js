import React, { useState } from "react";
import "./Card.css";
import OTRTires from "../Images/OTRTires.jpg"; // Import your background images
import CommTires from "../Images/CommTires.jpg";
import PassTires from "../Images/PassTires.jpg";
import IndustrialTire from "../Images/IndustrialTires.png";
import EarthmoverTire from "../Images/EarthMoverTires.png";
import AgriTires from "../Images/AgriculturalTires.png";
import PassengerTire from "../Images/PassengerTires.png";
import LightTruckTire from "../Images/LightTruckTires.png";
import AmericaSteel from "../Images/American.jpg";
import Apollo from "../Images/Apollo.png";
import Continental from "../Images/Continental.png";
import Bkt from "../Images/BKT.png";
import GeneralTires from "../Images/General.png";
import Goodyear from "../Images/Goodyear.png";
import CooperTires from "../Images/CooperTires.png";

const Card = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="explore-button">Explore</button>
    </div>
  );
};

const CenteredThreeCards = () => {
  return (
    <div className="center-container">
      <div className="cards-container">
        <div className="description">
          <h3>We cover all your needs</h3>
          <p className="premium">Premium Heavy Duty Tires and OTR</p>
          <p className="card_subtitle">
            We understand the diverse needs of industries that require reliable
            and durable tires for their heavy-duty vehicles and equipment.
            Whether you're operating in construction, mining, agriculture, or
            any other demanding sector, we have you covered.
          </p>
        </div>
        <div className="cards_actual">
          <Card
            title="OTR Tires"
            description="At KVL Tired, we take pride in being a leading tire company based in California, with a strong presence and a network of stores throughout the USA. Our mission is "
            image={OTRTires}
          />
          <Card
            title="Commercial Tires"
            description="At KVL Tired, we take pride in being a leading tire company based in California, with a strong presence and a network of stores throughout the USA. Our mission is "
            image={CommTires}
          />
          <Card
            title="Passenger Tires"
            description="At KVL Tired, we take pride in being a leading tire company based in California, with a strong presence and a network of stores throughout the USA. Our mission is "
            image={PassTires}
          />
        </div>
      </div>
      <div className="five-cards-container">
        <div className="card_five">
          <div className="image-container">
            <img src={IndustrialTire} alt="Avatar" />
          </div>
          <div className="container">
            <h4>
              <b>Industrial Tires</b>
            </h4>
            <p> Rugged strength for demanding environments</p>
          </div>
        </div>
        <div className="card_five">
          <div className="image-container">
            <img
              src={EarthmoverTire}
              alt="Avatar"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
          <div className="container">
            <h4>
              <b>Earthmover Tires</b>
            </h4>
            <p>Power through any terrain effortlessly.</p>
          </div>
        </div>
        <div className="card_five">
          <div className="image-container">
            <img
              src={AgriTires}
              alt="Avatar"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
          <div className="container">
            <h4>
              <b>Agricultural Tires</b>
            </h4>
            <p> Enhanced performance for farming operations.</p>
          </div>
        </div>
        <div className="card_five">
          <div className="image-container">
            <img src={PassengerTire} alt="Avatar" />
          </div>
          <div className="container">
            <h4>
              <b>Passenger Tires</b>
            </h4>
            <p>Smooth rides with exceptional comfort.</p>
          </div>
        </div>
        <div className="card_five">
          <div className="image-container">
            <img
              src={LightTruckTire}
              alt="Avatar"
              style={{ transform: "rotateY(180deg)" }}
            />
          </div>
          <div className="container">
            <h4>
              <b>Light Truck Tires</b>
            </h4>
            <p>Versatile reliability for every journey.</p>
          </div>
        </div>
      </div>
      <div className="quality_container">
        <div className="quality_text">
          <h3>Quality and Reliability</h3>
          <p>The exceptional brands we offer</p>
        </div>
        <div className="quality_para">
          <p>
            Our valued partners at KVL bring unparalleled expertise and
            innovation to the heavy-duty tire industry. With a long-standing
            reputation for excellence, KVL has consistently delivered
            cutting-edge solutions that meet the demanding needs of various
            sectors.
          </p>
        </div>
        <div className="brand">
          <img src={AmericaSteel}></img>
          <img src={Apollo}></img>
          <img src={Continental}></img>
          <img src={Bkt}></img>
          <img src={GeneralTires}></img>
          <img src={Goodyear}></img>
          <img src={CooperTires}></img>
        </div>
      </div>
      <div className="roadside_container">
        <div className="roadside_centre">
          <h1 className="roadside-title">24/7 Roadside Assistance</h1>
          <p className="roadside-subtitle">
            Rest easy knowing that our 24/7 roadside assistance for heavy-duty
            tires is here to support you across the entire USA. We understand
            that breakdowns and tire emergencies can happen at any time, causing
            significant delays and frustration.
          </p>
          <button className="hero-button">Call for Assistance</button>
        </div>
      </div>
    </div>
  );
};

export default CenteredThreeCards;
