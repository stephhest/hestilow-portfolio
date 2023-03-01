import React from "react";
import { ChevronRightIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { roles, programs, offset } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-20 py-2 mx-auto bg-gray-100 relative">
        <div className="flex-grow border-solid border-4 border-white md:mt-28 md:mb-24 my-20">
        </div>
          <img
            src="./cloud.png"
            alt="cloud"
            className="float-left left-0 bottom-0 md:w-80 w-40 z-10 opacity-40 animate-float-left-right"
          />
          <h1 data-aos="fade-in"
          data-aos-offset={offset} className="text-center md:text-7xl text-5xl font-bold text-gray-700 md:pt-56 md:pb-16 pt-28 pb-8">
            work experience <br/> & education
          </h1>
          <div data-aos="fade-in" data-aos-offset={offset}>
            <div className="flex flex-wrap mt-4">
              {roles.map((role) => (
                <div key={role.image} className="lg:w-1/2 lg:mx-auto w-100 p-4">
                  <div className="h-full bg-gray-600 px-6 py-10 rounded-xl">
                  <div className="inline-flex items-center">
                    <div className="group flex"></div>
                      <img
                        alt="icon"
                        src={role.image}
                        className="md:w-20 w-16 rounded-full flex-shrink-0 object-cover border-4 border-gray-600 object-center"
                      />
                      <div>
                        <h1 className="md:text-2xl text-lg ml-3 font-medium text-white">
                          {role.company}
                        </h1>
                        <h2 className="md:text-xl text-base ml-3 font-semibold text-blue-300">
                          {role.years}
                        </h2>
                      </div>
                    </div>
                    <p className="md:text-lg text-base text-white mt-4 mb-4">{role.description}</p>
                    <ul className="list-none pl-5 space-y-3 text-white">
                      {role.titles.map((title) => (
                        <li key={title} className="group flex">
                        <ChevronRightIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-2" />
                        <p className="md:text-lg text-base text-white">
                          {title}
                        </p>
                      </li>
                      ))}
                  </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap">
              {programs.map((program) => (
                <div key={program.image} className="lg:w-1/3 lg:mx-auto w-100 p-4">
                  <div className="h-full bg-gray-600 px-6 py-10 rounded-xl">
                  <div className="inline-flex items-center">
                    <div className="group flex"></div>
                      <img
                        alt="icon"
                        src={program.image}
                        className="md:w-20 w-16 rounded-full flex-shrink-0 object-cover border-4 border-gray-600 object-center"
                      />
                      <div>
                        <h1 className="md:text-2xl text-lg ml-3 font-medium text-white">
                          {program.institution}
                        </h1>
                        <h2 className="md:text-xl text-base ml-3 font-semibold text-blue-300">
                          {program.years}
                        </h2>
                      </div>
                    </div>
                    <ul className="list-none pt-10 space-y-3 text-white">
                        <li key={program.image} className="group flex">
                        <AcademicCapIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-2" />
                        <p className="md:text-lg text-base text-white">
                          {program.degree}
                        </p>
                      </li>
                    </ul>
                    <p className="md:text-lg text-base text-white mt-4">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
