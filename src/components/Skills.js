import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-20 py-20 mx-auto bg-gray-100">
        <div className="flex-grow border-solid border-4 border-white md:my-52 my-32">
        </div>
          <h1 className="text-center md:text-7xl text-5xl font-bold text-gray-800 mb-16">
            skills &amp; tech
          </h1>
        <div className="grid mx-auto md:grid-cols-3 grid-cols-2 md:max-w-5xl md:gap-4">
          {skills.map((skill) => (
            <div key={skill} className="p-1">
              <div className="bg-gray-800 rounded-xl flex p-4 h-full items-center">
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
