"use client";
import React, { lazy } from "react";
import Logo from "../assets/Hatta Meubles.svg";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";
import MenuLogo from "../assets/Menu-Logo.svg";

//TODO fix navbare in 649 px (only this number ) 
const outfitFont = Outfit({ subsets: ["latin"], weight: "300" });
const NunitoFont = Nunito({ subsets: ["latin"], weight: "300" });

function NavBare() {
  const [Menu, setMenu] = useState(false);

  const Showmenu = () => {
    setMenu((prebool) => !prebool);
    console.log(Menu);
  };

  return (
    <div className="flex justify-between items-center  px-2  py-1   bg-opacity-30  backdrop-blur-lg fixed  top-0 w-full z-10">
      <div className="flex gap-2  items-center   ">
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
              ? "sm:flex  gap-3  flex-col  "
              : "sm:flex  hidden gap-6  font-semibold items-center justify-center "
          }
        >
          <p className="hover:cursor-pointer hover:animate-pulse py-1">Produit</p>
          <p className="hover:cursor-pointer hover:animate-pulse py-1" >Marques</p>
          <p className="hover:cursor-pointer hover:animate-pulse py-1">À propos de nous</p>
          <p className="hover:cursor-pointer hover:animate-pulse py-1">Contactez-nous</p>
          <button className="bg-black px-5 text-white  py-1 rounded-md flex items-center hover:bg-white hover:text-black   transition-transform duration-500 hover:scale-105">Connexion</button>
        </div>
      </div>
     
    </div>
    
  );
}

export default NavBare;
