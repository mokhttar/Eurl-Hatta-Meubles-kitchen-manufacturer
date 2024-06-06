import React from "react";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import AboutUs from "./AboutUs";
import Card from "./Card";
//
function LandingPage() {
  return (
    <div className=" px-10">
      <section className=" scale-75 ml-5 sm:scale-90 sm:ml-0">
      <HeroSection />
      </section>
      <Card />
      <Brands />
      <AboutUs />
    </div>
  );
}
export default LandingPage;
