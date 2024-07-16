//TODO  Add two more brands
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import GrassLogo from "/public/assets/GrassLogo.svg";
import SaliceLogo from "/public/assets/SaliceLogo.png";
import Brand from "./Brand";
function Brands() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    centerMode: false,
    fade: false,
  };

  return (
    <div>
      <p className="text-center sm:text-3xl  text-xl font-semibold text-[#212529] py-6 mt-5">
        Top accessoires, produits exceptionnels !
      </p>
      <div>
        <Slider
          {...settings}
          className=" bg-gray-900 flex   items-center rounded-none  sm:rounded-sm   md:scale-75  "
        >
          <Brand img={SaliceLogo} alt="salice-logo" />
          <Brand img={GrassLogo} alt="salice-logo" />
          <Brand img={GrassLogo} alt="salice-logo" />
        </Slider>
      </div>
    </div>
  );
}

export default Brands;
