import React from "react";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import AboutUs from "./AboutUs";
import Card from "./Card";
function LandingPage() {
  return (
    <div className=" px-10 ml-5 sm:ml-0 sm:px-0">
      <HeroSection />
      <Card />
      <Brands />

      <AboutUs />
    </div>
  );
}
export default LandingPage;
