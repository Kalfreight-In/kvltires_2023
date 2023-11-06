import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/HeroOne";
import Footer from "../../components/Footer";
import AboutUsContent from "../../components/AboutUs";

function AboutUs() {
    return(
       <>
     <Navbar></Navbar>
     <AboutUsContent></AboutUsContent>
     <Footer></Footer>
      </>
  );
};

export default AboutUs;