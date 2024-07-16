"use client";

import { useRouter } from "next/navigation";
import Logo from "/public/assets/Hatta Meubles.svg";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Nunito } from "next/font/google";
import { useState } from "react";
import MenuLogo from "/public/assets/Menu-Logo.svg";

//TODO fix navbare in 649 px (only this number )
const outfitFont = Outfit({ subsets: ["latin"], weight: "300" });
const NunitoFont = Nunito({ subsets: ["latin"], weight: "300" });

type MenuItems = {
  id: number;
  item: string;
};

function NavBare() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const route = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  const MenuItems: MenuItems[] = [
    { id: 1, item: "Produit" },
    { id: 2, item: "Marques" },
    { id: 3, item: " À propos de nous" },
    { id: 4, item: " Contactez-nous" },
  ];

  const Redirect = (item: string) => {
    route.push(`/${item.toLowerCase()}`);
  };

  return (
    <div className="flex justify-between items-center px-2 py-1 bg-opacity-30 backdrop-blur-lg fixed top-0 w-full z-10">
      <div className="flex gap-2 items-center">
        <Image src={Logo} alt="Logo" className="w-20" />
        <div className={outfitFont.className}>
          <h2 className="text-xl font-semibold">Hatta Meubles</h2>
        </div>
      </div>

      <div className={NunitoFont.className}>
        <Image
          src={MenuLogo}
          alt="Menu-logo"
          className="w-10 sm:hidden"
          onClick={toggleMenu}
        />
        <div
          className={`sm:flex ${
            menuOpen ? "flex-col justify-center " : "hidden"
          } gap-3 font-semibold items-center justify-center ${
            menuOpen ? "absolute left-0 h-screen bg-white w-screen" : ""
          }`}
        >
          {MenuItems.map((Element: MenuItems) => {
            return (
              <p
                className="hover:cursor-pointer px-2 hover:animate-pulse py-2  sm:py-1"
                key={Element.id}
                onClick={() => Redirect(Element.item)}
              >
                {Element.item}{" "}
              </p>
            );
          })}
          <button
            className="bg-black px-5 text-white py-1 rounded-md flex items-center hover:bg-white hover:text-black transition-transform duration-500 hover:scale-105"
            onClick={() => {
              route.push("/Login");
            }}
          >
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBare;
