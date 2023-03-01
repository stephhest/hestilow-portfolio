import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, offset } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-20 py-20 mx-auto bg-gray-100">
        <div className="flex-grow border-solid border-4 border-white md:mt-28 md:mb-24 my-20">
        </div>
          <img
            src="./cloud.png"
            alt="cloud"
            className="float-right right-0 bottom-0 md:w-80 w-40 z-10 opacity-40 animate-float-right-left"
          />
          <h1 data-aos="fade-in"
          data-aos-offset={offset} className="text-center md:text-7xl text-5xl font-bold text-gray-700 md:pt-48 md:pb-16 pt-28 pb-8">
            skills &amp; tech
          </h1>
        <div data-aos="fade-in" data-aos-offset={offset} className="grid mx-auto md:grid-cols-3 grid-cols-2 md:max-w-5xl md:gap-4">
          {skills.map((skill) => (
            <div key={skill} className="p-1">
              <div className="bg-gray-700 rounded-xl flex p-4 h-full items-center transition hover:scale-110 ease-in-out duration-200 transform-gpu hover:shadow-none">
                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="md:text-lg text-sm font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
