//TODO  Add two more brands
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import GrassLogo from "../assets/GrassLogo.svg";
import SaliceLogo from "../assets/SaliceLogo.png";
function Brands() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    centerMode: true,
    fade: false,
  };

  return (
    <div>
      <p className="text-center text-3xl font-semibold text-[#212529] py-2 mt-5">
      Top accessoires, produits exceptionnels !
      </p>
      <Slider
        {...settings}
        className="py-2 bg-gray-900 flex  items-center rounded-md xl:scale-75  "
      >
        <div>
          <a href="https://www.samet.com.tr/">
            <Image
              src="https://www.samet.com.tr/files/cms/images/samet-logo.svg"
              alt="SametLogo"
              layout="responsive"
              className=" scale-50"
              width={1}
              height={1}
            />
          </a>
        </div>
        <div>
          <a href="https://www.grassusa.com/">
            <Image
              src={GrassLogo}
              alt="GrassLogo"
              layout="responsive"
              className=" scale-75 mt-1"
              width={1}
            />
          </a>
        </div>
        <div>
          <a href="https://www.salice.com/us/en">
            <Image
              src={SaliceLogo}
              alt="SaliceLogo "
              layout="responsive"
              className="  scale-75 mt-1"
              width={1}
            />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Brands;
