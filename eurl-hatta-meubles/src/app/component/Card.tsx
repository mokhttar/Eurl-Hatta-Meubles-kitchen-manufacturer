"use client";
import React, { useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "./3dCard";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HighGloseImgKitchen from "/public/assets/glossy-kitchen-cabinets-1024x512.jpg";
import AccesoirsImg from "/public/assets/Accesoirs.jpg";
import WorkerImages from "/public/assets/Workers.jpg";

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="grid gap-10  xl:py-20 py-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div ref={(el: never) => (cardRefs.current[0] = el)}>
          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Créez votre design de cuisine de rêve
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Concevez et construisez votre cuisine de rêve avec nous, où la
                créativité rencontre la fonctionnalité et l'artisanat de qualité
                donne vie à votre vision
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={HighGloseImgKitchen}
                  height={300}
                  width={400}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  layout="responsive"
                  objectFit="cover"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        <div ref={(el: never) => (cardRefs.current[1] = el)}>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-black/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-black dark:text-black"
              >
                Construit avec le Meilleur
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-black text-sm max-w-sm mt-2 dark:text-black scale-105"
              >
                Experience unparalleled quality with our kitchens, crafted using
                only the finest materials and components
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-2">
                <Image
                  src={AccesoirsImg}
                  width={1000}
                  height={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  layout="responsive"
                  objectFit="cover"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20"></div>
            </CardBody>
          </CardContainer>
        </div>

        <div ref={(el: never) => (cardRefs.current[2] = el)}>
          <CardContainer className="inter-var ">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                Plus de 10 ans d'expertise
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Bénéficiez de notre expérience décennale, offrant excellence et
                fiabilité dans chaque projet
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={WorkerImages}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                  layout="responsive"
                  objectFit="cover"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}

export default Card;
