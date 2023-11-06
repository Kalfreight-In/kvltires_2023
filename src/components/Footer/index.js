import React from "react";
import "./footer.css";
import KvlLogo from "../Images/kvlTireslogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <img className="footer__logo" src={KvlLogo}></img>
        <address>
          <a href="tel:800-805-0025">800-805-0025</a> <br></br>
          Headquarters: 10156 Live Oak Ave Fontana, CA 92335
          <br />
          <a href="mailto:info@kaltires.com">info@kaltires.com</a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Who We Are</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Group of Companies</a>
            </li>

            <li>
              <a href="#">CSR</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Inventory</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">OTR Tires</a>
            </li>

            <li>
              <a href="#">Truck and Trailer Tires</a>
            </li>

            <li>
              <a href="#">Earthmover Tires</a>
            </li>

            <li>
              <a href="#">Commercial Tires</a>
            </li>

            <li>
              <a href="#">Used Tires</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Quick Links</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Brands</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">24x7 Roadside Assistance</a>
            </li>

            <li>
              <a href="#">Credit Application</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Subscribe for latest updates</h2>

          <ul className="nav__ul">
            <input placeholder="Enter your Email Id"></input>
            <button>Submit</button>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <div className="footer_content">
          <p>Sitemap</p>
          <p>Terms of use</p>   
          <p>Privacy Policy</p>
        </div>
        <div className="legal__links">
          <span>
            <span className="heart"></span>Copyright © KVL Tires, 2022. All
            Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
