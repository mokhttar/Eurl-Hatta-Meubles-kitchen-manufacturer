import React from "react";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import Card from "./Card";
function LandingPage() {
  return (
    <div className="px-10">
      <HeroSection />
      <Card />
      <Brands />
    </div>
  );
}

export default LandingPage;
