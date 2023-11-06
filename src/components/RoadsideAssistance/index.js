import React from "react";
import "./RoadAss.css";
import Avail from "../Images/24x7Avail.png";
import Rapid from "../Images/RapidResp.png";
import Tech from "../Images/ExpertTech.png";
import Nationwide from "../Images/Nationwide.png";
import { VscArrowDown } from "react-icons/vsc";
import { VscStarFull } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";
import RoadAssTire from "../Images/CommTires.jpg";
import RoadsideImg from "../Images/RoadsideImg.jpg";
import Heavy1 from "../Images/HeavyDutyTrucks1.jpg";
import Heavy2 from "../Images/HeavyDutyTrucks2.jpg"; 
import userImage from "../Images/userImage.png";
import RoadHero from "../Images/RoadAssHero.png"



function RoadsideAssistance() {
  return (
    <div>
      <div className="hero-container-one">
        <div className="hero-background-one">
          {/* Background image */}
          <img src={RoadHero} alt="Background" className="background-image" />
        </div>
        <div className="hero-content-one">
          {/* Text and content overlay */}
          <div className="upper-border">
            <p className="hero-upper-border"></p>
          </div>
          <h1 className="hero-title">Roadside Assistance</h1>
          <p className="hero-subtitle">
            Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
            Nationwide!
          </p>
          {/* <div className="hunterImage"></div> */}
        </div>
      </div>
      <div className="main_container">
        <div className="heavy_hauler">
          <div>
            <h2
              className="title"
              style={{ "font-size": "35px", width: "120%" }}
            >
              At Heavy Hauler Roadside Rescue
            </h2>
          </div>
          <div style={{ width: "90%;" }}>
            <p>
              we prioritize safety above all else. Our technicians undergo
              rigorous training and stay up-to-date with the latest industry
              standards, ensuring that your truck is in capable hands. We take
              every precaution to protect both you and your vehicle during the
              service process.
            </p>
          </div>
          <div style={{ "padding-top": "30px", width: "300px" }}>
            <button className="assistance_button">Call for Assistance</button>
          </div>
        </div>
        <div className="RoadsideContainer">
          <div className="first_container">
            <h2 className="title" style={{ "font-size": "35px" }}>
              24/7 roadside assistance service specifically designed trucks.
            </h2>
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, <br></br>
              Adipisci velit, sed quia non numquam eius modi tempora incidunt,
              ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>
          <div className="image_container">
            <img className="img1" src={RoadAssTire} alt="RoadsideTire"></img>
            <img className="img2" src={RoadsideImg} alt="RoadsideImg"></img>
          </div>
        </div>
        <div className="card_container">
          <div
            class="card_A"
            style={{ backgroundColor: "#1C1F35", color: "white" }}
          >
            <img className="Nationwide" src={Nationwide} alt="24x7"></img>
            <h4>
              <b>Nationwide Coverage</b>
            </h4>
            <p className="first">
              you can have peace of mind knowing that reliable support is
              available wherever your journeys take you.
            </p>
            <div className="arrow">
              <VscArrowDown style={{ height: "45px", width: "45px" }} />
            </div>
          </div>
          <div class="card_A">
            <img src={Avail} alt="24x7"></img>
            <h4>
              <b>24/7 Availability</b>
            </h4>
            <p>
              Our roadside assistance is available 24 hours a day, 7 days a
              week, ensuring that help is always just a phone call away.
            </p>
            <div className="arrow">
              <VscArrowDown style={{ height: "45px", width: "45px" }} />
            </div>
          </div>
          <div class="card_A">
            <img src={Rapid} alt="24x7"></img>
            <h4>
              <b>Rapid Response</b>
            </h4>
            <p>
              equipped with the necessary tools and expertise to address the
              issue efficiently and get you back on the road as quickly as
              possible
            </p>
            <div className="arrow">
              <VscArrowDown style={{ height: "45px", width: "45px" }} />
            </div>
          </div>
          <div class="card_A">
            <img src={Tech} alt="24x7"></img>
            <h4>
              <b>Expert Technicians</b>
            </h4>
            <p>
              Our roadside assistance team consists of skilled technicians who
              specialize in handling heavy-duty tire emergencies.
            </p>
            <div className="arrow">
              <VscArrowDown style={{ height: "45px", width: "45px" }} />
            </div>
          </div>
        </div>
        <div className="heavy_duty_trucks">
          <div className="item1">
            <img src={Heavy1}></img>
          </div>
          <div className="item2">
            <h2 style={{ fontSize: "35px" }}>For heavy-duty trucks.</h2>
            <p style={{ color: "#C81010", fontSize: "16px" }}>
              Premium Heavy Duty Tires and OTR{" "}
            </p>
            <p style={{ color: "#666C89", fontSize: "16px" }}>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit,
            </p>
          </div>
          <div className="item3">
            <img src={Heavy2}></img>
          </div>
        </div>
        <div className="card_container_two">
          <div className="card_b">
            <div className="card_upper">
              <img className="card_b_img" src={userImage}></img>
              <div>
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
              </div>
            </div>
            <p className="title">
              <b>Chris</b>
            </p>
            <p className="subtitle">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non dese
            </p>
          </div>
          <div className="card_b">
            <div className="card_upper">
              <img className="card_b_img" src={userImage}></img>
              <div>
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
              </div>
            </div>
            <p className="title">
              <b>Reuben</b>
            </p>
            <p className="subtitle">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non dese
            </p>
          </div>
          <div className="card_b">
            <div className="card_upper">
              <img className="card_b_img" src={userImage}></img>
              <div>
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
              </div>
            </div>
            <p className="title">
              <b>Raju</b>
            </p>
            <p className="subtitle">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non dese
            </p>
          </div>
          <div className="card_b">
            <div className="card_upper">
              <img className="card_b_img" src={userImage}></img>
              <div>
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarFull style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
                <VscStarEmpty style={{ color: "red" }} />
              </div>
            </div>
            <p className="title">
              <b>Floyd</b>
            </p>
            <p className="subtitle">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non dese
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadsideAssistance;
 