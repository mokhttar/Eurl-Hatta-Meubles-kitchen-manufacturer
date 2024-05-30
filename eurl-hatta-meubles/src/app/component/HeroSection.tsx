"use client";
import React from "react";
import Image from "next/image";
import { Gloock } from "next/font/google";
import MainImage from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";
import { Prata } from "next/font/google";

const GlockFont = Gloock({ subsets: ["latin"], weight: "400" });
const PrataFont = Prata({ subsets: ["cyrillic"], weight: "400" });
//TODO fix width image in 812 px
export default function HeroSection() {
  return (
    <div className="bg-[#FBFFFF]  w-full flex justify-center items-center mt-5 ">
      <div className="flex md:flex-row flex-col  justify-center items-center gap-10">
        {/* Text Sextion */}
        <div className="xl:w-1/2 xl:px-20  px-10 py-12  flex flex-col  gap-5 ">
          <div className={PrataFont.className}>
            <h1 className="w-auto  text-4xl xl:text-5xl sm:tracking-wide   leading-normal  xl:leading-snug  tracking-widest">
              Discover the Art of Culinary Excellence at EURL Hatta Meuble
            </h1>
          </div>
          <div className="flex gap-10">
            <button className=" bg-black text-white  px-5 py-1  rounded-md text-xl">
              Get Started
            </button>
            <button className="text-xl ">About us</button>
          </div>
        </div>
        {/*Image Slider Section*/}
        <div className=" xl:w-1/2    px-10 xl:pr-10">
           <Image src={MainImage} alt="SlideImages"  layout="responsive"  className="xl:rounded-xl xl:scale-90  border  rounded-md" />
        </div>
      </div>
    </div>
  );
}
