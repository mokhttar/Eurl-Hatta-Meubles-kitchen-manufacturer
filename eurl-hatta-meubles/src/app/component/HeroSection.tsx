"use client";
import React from "react";
import Image from "next/image";
import { Gloock, Prata } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test from "../assets/lotus-design-n-print-ik9WP2V8Vas-unsplash.jpg";
import Slider from "react-slick";
import MainKitchen from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";
import DownArrow from "../assets/down-arrow-svgrepo-com.svg";
import { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
const GlockFont = Gloock({ subsets: ["latin"], weight: "400" });
const PrataFont = Prata({ subsets: ["cyrillic"], weight: "400" });

//TODO fix width image in 812 px
//TODO check some respo problems

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

  function HanldeRef(event: any) {
    event.preventDefault();
  }

  useEffect(() => {
    if (TitleRef.current != null) {
      gsap.to(TitleRef.current, {
          duration:.8,
         ease:Power3.easeInOut,
         y:-10,
        opacity: 1 ,
      });
    }
  }, []);

  return (
    <div className="px-5 bg-[#FBFFFF] scale-90">
      <div className="py-10 rounded-md w-full flex justify-center items-center xl:mt-20">
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          {/* Text Section */}
          <div className="xl:w-1/2 xl:px-32 px-20 py-12 flex flex-col gap-5">
            <div className={PrataFont.className}>
              <h1
                className="w-auto text-4xl xl:text-5xl sm:tracking-wide leading-normal xl:leading-snug tracking-widest opacity-0"
                ref={TitleRef}
              >
                Découvrez l'Art de l'Excellence Culinaire chez EURL Hatta Meuble
              </h1>
            </div>
            <div className="flex gap-10">
              <button
                className="bg-black text-white font-semibold px-5 py-1 transition-transform duration-500 hover:scale-95 rounded-md hover:animate-pulse text-xl"
                onClick={HanldeRef}
              >
                Commencer
              </button>
              <button className="text-xl hover:bg-black font-semibold hover:text-white transition-transform duration-500 hover:scale-95 px-5 py-1 rounded-md hover:animate-pulse">
                À propos de nous
              </button>
            </div>
          </div>
          {/* Image Slider Section */}
          <div className="xl:w-1/2 xl:px-32 px-20">
            <Slider {...settings} className="w-[450px] xl:w-[700px]">
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
