import React from "react";
import "./Agriculture.css";
import AgriOne from "../Images/AgriOne.png";
import TickIcon from "../Images/TickIcon.png"
import AgriThree from "../Images/AgriThree.png"

function Agriculute() {
    return (
      <div>
        <div className="hero-container-one">
          <div className="hero-background-one">
            {/* Background image */}
            <img src={AgriOne} alt="Background" className="background-image" />
          </div>
          <div className="hero-content-one">
            {/* Text and content overlay */}
            <div className="upper-border">
              <p className="hero-upper-border"></p>
            </div>
            <h1 className="hero-title">AGRICULTURAL TIRES</h1>
            <p className="hero-subtitle">
              Discover Our Premium Heavy Duty Tires and OTR <br></br> Solutions
              Nationwide!
            </p>
            {/* <div className="hunterImage"></div> */}
          </div>
        </div>
        <div className="hunterContOne">
          <div className="AgriImg1"></div>
          <p className="subtitle_6">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium dynamically target high-payoff intellectual
            capital for customized technologies objectively integrate emerging
            core competencies before process-centric communities dramatically
            evisculate holistic innovation rather than client-centric data.
          </p>
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
        <div className="hhwCont">
          <h2 className="title agriTitle">How We Work</h2>
          <div className="AgriContSide">
            <img src={AgriThree}></img>
            <div className="AgriRight">
              <h2 className="title_1">Warehousing Services</h2>
              <p className="subtitle_3">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
              <h2 className="title_1">Safety & Quality</h2>
              <p className="subtitle_3">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
              </p>
              <h2 className="title_1">Care for Environment</h2>
              <p className="subtitle_3">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking{" "}
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
                KVL Tires offers a comprehensive<br></br> range of passenger
                tires
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

export default Agriculute; 