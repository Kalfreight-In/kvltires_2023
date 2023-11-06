import React, { useState } from "react";
import kvlLogo from "./images/kvlTireslogo.png";
import locationIcon from "./images/location.png";
import "./Navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

function Navbar() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const openNav = () => {
    setIsSidePanelOpen(true);
  };

  const closeNav = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={kvlLogo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-right">
          <p className="call">CALL FOR ASSISTANCE</p>
          <p className="number">800 808 0025</p>
          <button className="signin-button">
            SIGN IN <BsFillPersonFill className="signin-icon" />
          </button>
        </div>
      </div>
      <div className="bottom-navbar">
        <button className="hamburger-button" onClick={openNav}>
          <FaBars className="hamburger-icon" />
        </button>
        <div className="navbar-center">
          <input type="text" className="search-input" />
          <button className="search-bar-button">Search</button>
        </div>
        <div className="bottom-nav-item">
          <p>FIND STORE</p>
          <img
            src={locationIcon}
            alt="Location Icon"
            className="location-icon"
          />
        </div>
      </div>
      <div className={`side-panel ${isSidePanelOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          <VscChromeClose className="close-icon" />
        </button>
        <div className="side-panel-content">
          <ul>
            <li>
              <a className="item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="item" href="/AboutUs">
                About Us
              </a>
            </li>
            <li>
              <a className="item" href="/RoadsideAssistance">
                Roadside Assistance
              </a>
            </li>
            <hr class="new3" />
            <li>
              <a className="item" href="/OTRTires">
                OTR Tires
              </a>
            </li>
            <li>
              <a className="item" href="/RetreadTires">
                Retread Tires
              </a>
            </li>
            <li>
              <a className="item" href="/HunterAlignment">
                Hunter Alignment
              </a>
            </li>
            <li>
              <a className="item" href="/PassengerTires">
                Passenger Tires
              </a>
            </li>
            <li>
              <a className="item" href="/IndustrialTires">
                Industrial Tires
              </a>
            </li>
            <li>
              <a className="item" href="/AgricultureTires">
                Agriculture Tires
              </a>
            </li>
            <hr class="new3" />
            <li>
              <a className="item" href="#Locations">
                Locations
              </a>
            </li>
            <li>
              <a className="item" href="/">
                Sign In
              </a>
            </li>
            <li>
              <a className="item" href="/">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
