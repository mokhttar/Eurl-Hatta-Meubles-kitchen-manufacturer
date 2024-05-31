"use client";

import React from "react";
import Image from "next/image";
import { Gloock } from "next/font/google";
import { Prata } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test from "../assets/lotus-design-n-print-ik9WP2V8Vas-unsplash.jpg";
import { KitchenArray } from "../TestData/Kitchens";
import Slider from "react-slick";
import MainKitchen from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg"
import DownArrow from "../assets/down-arrow-svgrepo-com.svg"

const GlockFont = Gloock({ subsets: ["latin"], weight: "400" });
const PrataFont = Prata({ subsets: ["cyrillic"], weight: "400" });
//TODO fix width image in 812 px
//TODO check some  respo problems 
export default function HeroSection() {
  //  Settigs for The slide
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
    <div className="bg-[#FBFFFF]  w-full flex justify-center items-center mt-20  ">
      <div className="flex md:flex-row flex-col  justify-center items-center gap-10 ">
        {/* Text Sextion */}
        <div className="xl:w-1/2 xl:px-32  px-20 py-12  flex flex-col  gap-5 ">
          <div className={PrataFont.className}>
            <h1 className="w-auto  text-4xl xl:text-5xl sm:tracking-wide   leading-normal  xl:leading-snug  tracking-widest">
              Discover the Art of Culinary Excellence at EURL Hatta Meuble
            </h1>
          </div>
          <div className="flex gap-10">
            <button className=" bg-black text-white font-semibold px-5 py-1 transition-transform  duration-500  hover:scale-95  rounded-md  hover:animate-pulse  text-xl">
              Get Started
            </button>
            <button className="text-xl  hover:bg-black font-semibold hover:text-white  transition-transform  duration-500  hover:scale-95 px-5 py-1 rounded-md  hover:animate-pulse">
              About us
            </button>
          </div>
        </div>
        {/*Image Slider Section*/}
        <div className="xl:w-1/2 xl:px-32 px-20 ">
         
          <Slider {...settings} className="w-[450px] xl:w-[700px]  ">
            <div>
              <Image src={MainKitchen} alt="Image" className="rounded-md" />
            </div>
            <div>
              <Image src={Test} alt="Image" className="rounded-md" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
         <div className="flex items-center justify-center mt-20">
             <Image src={DownArrow} alt="downAroow " className="animate-bounce"  width={30}/>
         </div>
    </div>
  );
}
