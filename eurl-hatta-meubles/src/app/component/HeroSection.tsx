import React from "react";
import Image from "next/image";
import { Gloock } from "next/font/google";
import MainImage from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";

const GlockFont = Gloock({ subsets: ["latin"], weight: "400" });
export default function HeroSection() {
  return (
    <div className="bg-[#FBFFFF]">

      <div className="w-full px-5   pt-10 pb-20 flex    md:flex-row flex-col  justify-center items-center ">
        <div className="md:w-1/2  px-5 flex flex-col ml-5 text-start leading-relaxed ">
          <div className={GlockFont.className}>
            <h1 className="xl:text-4xl mt-20 text-3xl font-semibold tracking-widest  w-full  xl:w-3/4 leading-normal  py-2">
              Discover the Art of Culinary Excellence at EURL Hatta Meuble
            </h1>
          </div>
          <p className="text-gray-400  py-2 ">
            Crafting Exquisite Kitchens with Passion
          </p>
          <div className="flex  gap-3 py-2">
            <button className="sm:py-2 px-5  rounded-md  bg-black text-white   hover:bg-white  hover:text-black   transform hover:scale-105 transition-transform duration-1000">
              Explore our Offers{" "}
            </button>
            <button className="sm:py-2  px-5  rounded-md    bg-white text-black hover:bg-black  hover:text-white  transform hover:scale-105 transition-transform duration-1000 ">
              Contact us
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-20   px-10">
            <div className="rounded-xl  overflow-hidden">
          <Image
            src={MainImage}
            alt="MainKitchenImage"
            className="rounded-md md:w-5/6 xl:scale-105 py-10 xl:px-32"
            layout="responsive" 
          />
        </div>
        </div>
      </div>


    </div>
  );
}
