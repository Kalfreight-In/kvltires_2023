import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/HeroOne";
import Cards from "../../components/Cards";
import ContactForm from "../../components/Contact";
import Footer from "../../components/Footer";

function Home(){
 return (
   <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Cards></Cards>
     <ContactForm></ContactForm>
     <Footer></Footer>
   </>
 );
}

export default Home;