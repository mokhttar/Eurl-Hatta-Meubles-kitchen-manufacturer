"use client";
// About us section to describe the company and the details about it
import React from "react";
import Image from "next/image";
import { Ibarra_Real_Nova } from "next/font/google";
import DelevryIcon from "../assets/Lottie/Delivery.json";
import PriceTagIcon from "../assets/Lottie//PriceTag.json";
import ratingIcon from "../assets/Lottie/Rating.json";
import Lottie from "lottie-react";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
//TODO change  design about us page . 

const MerriFont = Merriweather({ subsets: ["cyrillic"], weight: "400" });
const PoppinsFont = Poppins({ subsets: ["latin"], weight: "300" });
function AboutUs() {
  return (
    <div className="flex flex-col items-center    mt-10  py-10 lg:px-32 lg:py-24 px-10  ">
      <div
        className={`bg-[#f8f9fa]  rounded-md  flex flex-col  text-start  items-center px-5 justify-center  ${PoppinsFont.className}`}
      >
        <div className=" w-full lg:w-2/3 text-gray-800 ">
          <hr className="h-1   border-none mx-auto  mt-10  bg-[#212529]" />
          <h1
            className={`text-5xl  text-[#2A3132] font-semibold md:text-6xl p-5 tracking-wide mb-4 text-center ${MerriFont.className}`}
          >
            À propos de nous
          </h1>
          <p className="text-lg mb-8  font-semibold py-2 text-gray-800">
            EURL Hatta Meuble est une entreprise de fabrication de cuisines
            réputée pour son savoir-faire exceptionnel et ses designs innovants.
            Notre mission est de transformer votre espace cuisine en un havre de
            fonctionnalité et d'élégance, adapté à vos besoins et préférences
            uniques. Avec un engagement envers la qualité et la satisfaction du
            client, nous offrons une large gamme de solutions de cuisine sur
            mesure, garantissant que chaque projet reflète notre dévouement à
            l'excellence. Découvrez le parfait mélange de style et de praticité
            avec EURL Hatta Meuble, où votre cuisine de rêve devient réalité
          </p>
        </div>

        <div className="flex flex-col items-center w-full lg:w-2/3 font-semibold">
          <div className="flex flex-col items-center text-start mb-8 ">
            <div className="flex mr-20 items-center justify-center">
              <Lottie animationData={DelevryIcon} className="w-32 " />
              <h1 className="text-xl font-semibold text-green-700">
                Simple and Direct
              </h1>
            </div>

            <p className="w-full lg:w-2/3 text-gray-800">
              Chez nous, nous comprenons que votre temps est précieux. C'est
              pourquoi nous nous engageons à une livraison rapide et efficace.
              Nous travaillons sans relâche pour vous faire parvenir vos
              commandes le plus rapidement possible, afin que vous puissiez
              profiter de vos achats sans délai
            </p>
          </div>

          <div className="flex flex-col items-center text-start mb-8">
            <div className="flex  gap-2 items-center">
              <Lottie animationData={PriceTagIcon} className="w-14 py-2" />
              <h1 className="text-center  text-green-700 text-xl     font-semibold">
                Meilleurs prix dans l'Algérie
              </h1>
            </div>

            <p className="w-full lg:w-2/3 text-gray-800">
              Nous nous efforçons d'offrir à nos clients les meilleurs prix en
              Algérie sans compromettre la qualité. Nous nous approvisionnons
              auprès de fournisseurs réputés et négocions des tarifs compétitifs
              pour vous faire bénéficier d'un excellent rapport qualité-prix.
              Notre engagement envers la qualité se reflète dans notre sélection
              rigoureuse des produits et notre service client attentionn
            </p>
          </div>

          <div className="flex flex-col items-center text-start mb-8">
            <div className="flex gap-2  items-center justify-center">
              <Lottie animationData={ratingIcon} className="w-16 py-2" />
              <p className="text-green-700 text-xl">Expertise et Confiance</p>
            </div>

            <p className="w-full lg:w-2/3 text-gray-800">
              In Chez nous, vous êtes entre de bonnes mains. Notre équipe
              francophone expérimentée et attentionnée est là pour vous guider à
              chaque étape du processus. Nous comprenons vos besoins et nous
              nous engageons à vous offrir une expérience positive et sans
              stress. Faites confiance à notre expertise et laissez-nous vous
              montrer pourquoi Chez nous est le meilleur choix pour vous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
