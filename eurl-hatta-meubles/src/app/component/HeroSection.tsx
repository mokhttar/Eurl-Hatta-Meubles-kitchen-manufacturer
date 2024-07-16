"use client";
import React from "react";
import Image from "next/image";
import { Gloock, Prata } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DownArrow from "/public/assets/down-arrow-svgrepo-com.svg";
import { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ImageArray } from "../Data/SlideImages";

const PrataFont = Prata({ subsets: ["cyrillic"], weight: "400" });

//TODO fix width image in 812 px
//DONE

export default function HeroSection() {
  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const [scroll, setScroll] = useState(false);

  const handleScroll = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  let TitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (TitleRef.current != null) {
      gsap.to(TitleRef.current, {
        duration: 0.8,
        ease: Power3.easeInOut,
        y: -10,
        opacity: 1,
      });
    }
  }, []);
  return (
    <div>
      <div className="bg-[#FBFFFF] flex flex-col md:flex-row  items-center justify-center mt-32 w-screen">
        <div className="md:w-1/2 w-full  flex flex-col px-5 md:px-20  ml-10 mb-10  ">
          <div className={PrataFont.className}>
            <h1
              className=" text-2xl xl:text-5xl py-8 sm:tracking-wide leading-normal xl:leading-snug tracking-widest opacity-0   "
              ref={TitleRef}
            >
              Découvrez l'Art de l'Excellence Culinaire chez{" "}
              <span className="text-gray-600">EURL Hatta Meuble</span>
            </h1>
          </div>
          <div className="flex  sm:flex-wrap   h-10 sm:h-auto     gap-4">
            <button className="bg-black   text-white font-semibold px-5 py-1 transition-transform duration-500 hover:scale-95 rounded-md hover:animate-pulse text-xl">
              Commencer
            </button>
            <button className="text-xl hover:bg-black font-semibold hover:text-white transition-transform duration-500 hover:scale-95 px-1 py-1 rounded-md hover:animate-pulse">
              À propos de nous
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <Slider {...settings} className="w-full px-0  sm:px-10 py-5  mb-5   ">
            {" "}
            {ImageArray.map((Element: any, index: number) => {
              return (
                <div key={Element.id}>
                  <img
                    src={`/assets/${Element.Url}`}
                    alt="image-place"
                    className="rounded-md  "
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 ">
        <Image
          src={DownArrow}
          alt="downArrow"
          className="animate-bounce"
          width={30}
          onClick={handleScroll}
        />
      </div>
    </div>
  );
}
