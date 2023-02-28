import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-20 pt-20 items-center bg-gray-100">
        <div className="vertical-align-top">
          <h1 className="md:text-8xl text-5xl font-bold md:mb-8 mb-4 text-gray-800">
            stephanie
            <br/> hestilow
          </h1>
          <p className="md:text-3xl text-lg md:mb-4 mb-0 text-gray-400">
            from digital marketer to
          </p>
          <p className="md:text-4xl text-xl font-medium text-red-600">
            full stack <br/> software engineer
          </p>
          <img
              className="md:float-right md:object-cover md:w-3/4 md:h-full md:max-w-3xl max-w-sm md:vertical-align-top pt-10 pl-20"
              alt="hero"
              src="./golden_gate.png"
            />
        </div>
      </div>
    </section>
  );
}
