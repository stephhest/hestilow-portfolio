import React from "react";
import { projects, offset } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container md:px-20 px-4 mx-auto bg-gray-100">
        <div className="flex flex-col w-full mb-20">
        <div className="flex-grow border-solid border-4 border-white md:mt-48 md:mb-12 my-20">
        </div>
          <img
            src="./cloud.png"
            alt="cloud"
            className="float-left left-0 bottom-20 md:w-80 w-40 z-10 opacity-40 animate-float-left-right"
          />
          <h1 data-aos="fade-in"
          data-aos-offset={offset} className="text-center md:text-7xl text-5xl font-bold mb-4 text-gray-700 pt-14">
            projects
          </h1>
        </div>
        <div data-aos="fade-in"
        data-aos-offset={offset} className="text-center flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="lg:w-1/2 w-100 p-2"
            >
              <div className="relative h-full p-0">
                <img
                  alt="gallery"
                  className="object-cover object-center rounded-md w-full h-full"
                  src={project.image}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full p-8 border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-95">
                  <h1 className="md:text-2xl text-lg font-medium text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="md:text-lg text-base text-white mb-4">{project.description}</p>
                  <h2 className="tracking-widest md:text-xl text-base font-medium text-blue-300">
                    {project.subtitle}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
