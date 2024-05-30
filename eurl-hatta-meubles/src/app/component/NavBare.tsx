"use client";
import React, { lazy } from "react";
import Logo from "../assets/Hatta Meubles.svg";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";
import MenuLogo from "../assets/Menu-Logo.svg";


const outfitFont = Outfit({ subsets: ["latin"], weight: "300" });
const NunitoFont = Nunito({ subsets: ["latin"], weight: "300" });

function NavBare() {
  const [Menu, setMenu] = useState(false);

  const Showmenu = () => {
    setMenu((prebool) => !prebool);
    console.log(Menu);
  };

  return (
    <div className="flex justify-between items-center  px-5    bg-opacity-30  backdrop-blur-lg ">
      <div className="flex gap-2  items-center  ">
        <Image src={Logo} alt="Logo" className="w-20" />
        <div className={outfitFont.className}>
          <h2 className="text-xl  font-semibold ">Hatta Meubles</h2>
        </div>
      </div>

      <div className={NunitoFont.className}>
        <Image
          src={MenuLogo}
          alt="Menu-logo"
          className="w-10 sm:hidden "
          onClick={Showmenu}
        />
        <div
          className={
            Menu
              ? "sm:flex  gap-3  flex-col "
              : "sm:flex  hidden gap-5  font-semibold"
          }
        >
          <p className="hover:cursor-pointer hover:animate-pulse">Product</p>
          <p className="hover:cursor-pointer hover:animate-pulse">Brands</p>
          <p className="hover:cursor-pointer hover:animate-pulse">About us</p>
          <p className="hover:cursor-pointer hover:animate-pulse">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default NavBare;
