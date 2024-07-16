"use client";
// About us section to describe the company and the details about it
import React, { useEffect, useRef } from "react";
import DelevryIcon from "../Lottie/Delivery.json";
import PriceTagIcon from "../Lottie/PriceTag.json";
import ratingIcon from "../Lottie/Rating.json";
import Lottie from "lottie-react";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import { gsap, Power3 } from "gsap";

//TODO change design about us page.

const MerriFont = Merriweather({ subsets: ["cyrillic"], weight: "400" });
const PoppinsFont = Poppins({ subsets: ["latin"], weight: "300" });

function AboutUs() {
  const PageRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          gsap.to(PageRef.current, {
            duration: 0.5,
            ease: Power3.easeIn,
            y: -10,
            opacity: 1,
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.2,
    });

    if (PageRef.current) {
      observer.observe(PageRef.current);
    }

    return () => {
      if (PageRef.current) {
        observer.unobserve(PageRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center opacity-0 mt-10 py-10 lg:px-32 lg:py-24  "
      ref={PageRef}
    >
      <div
        className={` rounded-md flex flex-col   bg-[#FAF6F0]   text-start items-center px-5 justify-center ${PoppinsFont.className}`}
      >
        <div className="w-full lg:w-2/3 text-gray-800">
          <hr className="h-1 border-none mx-auto mt-10 bg-[#212529] " />
          <h1
            className={`sm:text-5xl text-3xl text-[#2A3132] font-semibold md:text-6xl p-5 tracking-wide mb-4 text-center ${MerriFont.className}`}
          >
            pourquoi nous ?
          </h1>
          <p className="sm:text-lg  text-base  mb-8 font-semibold py-2 text-gray-800">
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
          <div className="flex flex-col items-center text-start mb-8">
            <div className="flex mr-20 items-center justify-center">
              <Lottie animationData={DelevryIcon} className="w-32" />
              <h1 className="sm:text-xl text-lg font-semibold text-green-700">
                Simple and Direct
              </h1>
            </div>

            <p className="w-full sm:text-base lg:w-2/3 text-gray-800">
              Chez nous, nous comprenons que votre temps est précieux. C'est
              pourquoi nous nous engageons à une livraison rapide et efficace.
              Nous travaillons sans relâche pour vous faire parvenir vos
              commandes le plus rapidement possible, afin que vous puissiez
              profiter de vos achats sans délai
            </p>
          </div>

          <div className="flex flex-col items-center text-start mb-8">
            <div className="flex gap-2 items-center">
              <Lottie animationData={PriceTagIcon} className="w-14 py-2" />
              <h1 className="text-center text-green-700 sm:text-xl text-lg font-semibold">
                Meilleurs prix dans l'Algérie
              </h1>
            </div>

            <p className="w-full lg:w-2/3 text-gray-800">
              Nous nous efforçons d'offrir à nos clients les meilleurs prix en
              Algérie sans compromettre la qualité. Nous nous approvisionnons
              auprès de fournisseurs réputés et négocions des tarifs compétitifs
              pour vous faire bénéficier d'un excellent rapport qualité-prix.
              Notre engagement envers la qualité se reflète dans notre sélection
              rigoureuse des produits et notre service client attentionné.
            </p>
          </div>

          <div className="flex flex-col items-center text-start mb-8">
            <div className="flex gap-2 items-center justify-center">
              <Lottie animationData={ratingIcon} className="w-16 py-2" />
              <p className="text-green-700 sm:text-xl text-lg mr-10">
                Expertise et Confiance
              </p>
            </div>

            <p className="w-full lg:w-2/3 text-gray-800">
              Chez nous, vous êtes entre de bonnes mains. Notre équipe
              francophone expérimentée et attentionnée est là pour vous guider à
              chaque étape du processus. Nous comprenons vos besoins et nous
              nous engageons à vous offrir une expérience positive et sans
              stress. Faites confiance à notre expertise et laissez-nous vous
              montrer pourquoi Chez nous est le meilleur choix pour vous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
