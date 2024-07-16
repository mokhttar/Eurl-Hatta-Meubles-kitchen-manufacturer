"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectList } from "../Data/listProject";
import { ProjectType } from "../types";

function ProjectCardUi() {
  //TODO  choose and change default font.
  return (
    <div className="pb-10 px-5 rounded-md">
      <h1 className="text-2xl sm:text-4xl  font-semibold  text-[#212529]      tracking-wide text-center">
        Latest Projects
      </h1>
      <div className="flex lg:flex-row flex-col md:px-5 mt-5       gap-2  ">
        {ProjectList.map((Element: ProjectType, index: number) => {
          return (
            <div key={Element.id}>
              <section className="flex  gap-10">
                <ProjectCard {...Element} />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCardUi;
