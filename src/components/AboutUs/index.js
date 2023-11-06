import React from "react";
import "./AboutUs.css";
import AboutHero from "../Images/AboutHero.png"

function AboutUscontent_1() {
    return (
      <div>
        <div className="mainContainer">
          <div className="hero-container-one">
            <div className="hero-background-one">
              {/* Background image */}
              <img
                src={AboutHero}
                alt="Background"
                className="background-image"
              />
            </div>
            <div className="hero-content-one">
              {/* Text and content overlay */}
              <div className="upper-border">
                <p className="hero-upper-border"></p>
              </div>
              <h1 className="hero-title">About Us</h1>
              <p className="hero-subtitle">
                Discover Our Premium Heavy Duty Tires and OTR <br></br>{" "}
                Solutions Nationwide!
              </p>
              {/* <div className="hunterImage"></div> */}
            </div>
          </div>
          <div className="WhoAreWe">
            <h2 className="title">Who Are We</h2>
            <p className="subtitle">The exceptional brands we offer</p>
            <p className="content_1_1">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?<br></br> <br></br>
              Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
              esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
              fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et
              iusto odio dignissimos ducimus, qui blanditiis praesentium
              voluptatum deleniti atque corrupti, quos dolores et quas molestias
              excepturi sint, obcaecati cupiditate non provident, similique sunt
              in culpa, qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio.
            </p>
          </div>
          <div className="OurServices">
            <div>
              <div className="left">
                <h2 className="title">Our Services</h2>
                <p className="subtitle">The exceptional brands we offer</p>

                <p className="content_1">
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo
                  inventore veritatis.
                </p>
                <ul>
                  <li>Clearance and compliance service</li>
                  <li>Saving Time to Deal with commodo iaculis</li>
                  <li>Automate your business elis tristique</li>
                  <li>Saving Time to Deal with commodo iaculis</li>
                </ul>
              </div>
            </div>
            <div className="right imgCont1">
              {/* <img className="OurServicesImg" src={OurServicesImg}></img> */}
            </div>
          </div>
          <div className="HowWeWork">
            <div className="left imgCont2"></div>
            <div className="right">
              <h2 className="title">How We Work</h2>
              <p className="subtitle">The exceptional brands we offer</p>
              <p className="content_1">
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                santium doloremque laudantium, totam rem quae ab illo inventore
                veritatis. <br></br>
                Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                santium doloremque laudantium, totam rem quae ab illo inventore
                veritatis.
              </p>
            </div>
          </div>
          <div className="OurProjectTransportation">
            <h2 className="title">Our Project Transportation</h2>
            <p className="subtitle">The exceptional brands we offer</p>
            <p className="content_1">
              Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium
              doloremque laudantium, totam rem quae ab illo inventore veritatis.{" "}
              <br></br>
              Sed ut perspiciatis, unde omnis iste natu volupta temaccu santium
              doloremque laudantium, totam rem quae ab illo inventore veritatis.
            </p>
            <div className="OPTImage"></div>
          </div>
        </div>
      </div>
    );
}

export default AboutUscontent_1;