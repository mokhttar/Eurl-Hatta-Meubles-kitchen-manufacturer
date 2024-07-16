"use client";
import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import ProjectCardUi from "./ProjectCardUi";
import { ProjectType } from "../types";
import Router, { useRouter } from "next/router";

//TODO fix font and text size for mobile devices
//TODO add animations
function ProjectCard({
  id,
  name,
  Title,
  location, //number
  Description, //string
  Image, //string
  time, //number
}: ProjectType) {
  const CardRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    //TODO make it happen every time when you scroll to the Project Card  section .
    //animation for the cards
    gsap.to(CardRef.current, {
      duration: 0.6,
      ease: Power3.easeIn,
      y: -10,
      z: 10,
    });
    console.log(id);
    //animation for the text in the cards

    gsap.to(textRef.current, {
      duration: 0.8,
    });
  }, []);

  return (
    <div
      className="bg-black rounded-md text-white  sm:rounded-md  hover:transition-transform  duration-1000  hover:px-10   hover:scale-105   pb-16 p-10  w-full text-lg relative"
      ref={CardRef}
    >
      <h3 className="px-5 text-center text-3xl font-semibold py-4 text-gray-400">
        <span className="text-white">{Title}</span>
      </h3>
      <p className=" py-4 text-sm">
        <strong>Desciption:</strong>
        {Description}
      </p>
      <div className="flex flex-col gap-3    rounded-md p-4">
        <p className="text-center font-semibold  text-gray-300">
          <strong> Fiche technique de Projet </strong>
        </p>
        <div className="text-sm flex flex-col gap-2">
          <p>
            <span className="font-semibold">
              {" "}
              <strong>Nom de projt </strong>{" "}
            </span>
            : {name} <br />
          </p>
          <p>
            <span className="font-semibold">
              {" "}
              <strong>location du projet : </strong>{" "}
            </span>
            {location} <br />
          </p>
          <p>
            <span className="font-semibold"> Nombre de cuisine</span> : "Kitchen
            number (add them in the kitchen type before adding them into the
            data base)" <br />
          </p>
          <p>
            {" "}
            <strong>Temps de realisation </strong>:{time}
          </p>
        </div>
      </div>
      <p className="absolute buttom-0 right-5  mt-2 py-3 text-md hover:animate-pulse">
        <span className="px-1">see more</span>
      </p>
    </div>
  );
}

export default ProjectCard;
