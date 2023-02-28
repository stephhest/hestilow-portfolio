import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-20 mx-auto bg-gray-100">
        <div className="flex flex-col w-full mb-20">
        <div className="flex-grow border-solid border-4 border-white md:my-48 my-32">
        </div>
          <h1 className="text-center md:text-7xl text-5xl font-bold mb-4 text-gray-800">
            projects
          </h1>
        </div>
        <div className="text-center flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="md:w-1/2 w-100 p-4"
            >
              <div className="relative h-full p-0">
                <img
                  alt="gallery"
                  className="object-cover object-center rounded-md w-full h-full"
                  src={project.image}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full p-8 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-95">
                  <h1 className="md:text-4xl text-xl font-medium text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="md:text-xl text-lg text-white mb-4">{project.description}</p>
                  <h2 className="tracking-widest md:text-2xl text-lg font-medium text-blue-300">
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
