"use client";
// About us section to describe the company and the details about it
import React from "react";
import Image from "next/image";
import { Prata } from "next/font/google";
import { Ibarra_Real_Nova } from "next/font/google";
import Kitchen4 from "../assets/Kitchen4.jpg";
import DelevryIcon from "../assets/Delivery.svg";
import PriceTagIcon from "../assets/PriceTag.svg";
import ratingIcon from "../assets/RatingIcon.svg";
import AboutUs01 from "../assets/AboutUs01.jpg";
import AboutUs02 from "../assets/AboutUs02.jpg";

const IbaraFont = Ibarra_Real_Nova({ subsets: ["latin"], weight: "500" });

function AboutUs() {
  return (


       <div className="flex flex-col items-center   py-10 lg:px-32 lg:py-24 px-10  ">

      <div className=" w-full lg:w-2/3">
        <hr className="h-1 w-32 bg-white border-none mx-auto mb-4" />
        <h1 className={`text-5xl md:text-6xl tracking-wide mb-4 text-center ${IbaraFont.className}`}>
          About Us
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis
          assumenda dolore temporibus eos hic eum? Aperiam totam sunt illo
          excepturi, necessitatibus aspernatur nesciunt earum ea mollitia,
          autem, libero quia!
        </p>
      </div>

      <div className="flex flex-col items-center w-full lg:w-2/3">
        <div className="flex flex-col items-center text-start mb-8">
          <Image src={DelevryIcon} alt="DeliveryIcon" className="w-10 mb-4" />
          <p className="w-full lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates cumque quasi praesentium distinctio. Delectus expedita
            voluptatem quis quasi quod minus ipsam pariatur repellat facere.
            Quibusdam unde pariatur fuga qui explicabo.
          </p>
        </div>

        <div className="flex flex-col items-center text-start mb-8">
          <Image src={PriceTagIcon} alt="PriceTagIcon" className="w-10 mb-4" />
          <p className="w-full lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            nulla fugit culpa dignissimos blanditiis ratione molestias quia
            nobis? Laboriosam eos quasi, perspiciatis itaque earum omnis
            sapiente cumque voluptatem saepe dolore.
          </p>
        </div>

        <div className="flex flex-col items-center text-start mb-8">
          <Image src={ratingIcon} alt="rating-icon" className="w-10 mb-4" />
          <p className="w-full lg:w-2/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            iste itaque sunt ducimus obcaecati est quibusdam sed animi pariatur
            ipsam? Corrupti, atque sed inventore ut natus possimus debitis saepe
            nobis.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-2/3  scale-75">
        <Image src={AboutUs01} alt="aboutUsImage" className="w-full lg:w-1/2" />
        <Image src={AboutUs02} alt="aboutUsImage02" className="w-full lg:w-1/2" />
      </div>
    </div>
 
 
  );
}

export default AboutUs;
