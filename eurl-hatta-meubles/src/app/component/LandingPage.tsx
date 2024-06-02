import React from "react";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import AboutUs from "./AboutUs";
import Card from "./Card";
function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <Card />
      <Brands />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
