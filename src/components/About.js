import React, { useState } from "react";
import { icons, offset } from "../data";

export default function About() {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
    setIsShown(!isShown);
  };

  return (
    <section id="about">
      <div className="container md:px-20 md:py-20 px-8 py-8 mx-auto bg-gray-100 rounded-t-3xl">
        <div
          data-aos="fade-in"
          data-aos-offset={offset}
          className="md:float-right float-left grid mx-auto grid-cols-4 md:w-64 w-44 md:gap-4 gap-2"
        >
          {icons.map((icon) => (
            <div key={icon.link}>
              <a href={icon.link} key={icon.image}>
                <img
                  alt={icon.alt}
                  className="rounded opacity-40 transition hover:-translate-y-4 ease-in-out duration-200 transform-gpu hover:shadow-none"
                  src={icon.image}
                  href={icon.link}
                />
              </a>
            </div>
          ))}
        </div>
        <h1 className="text-left md:text-8xl text-6xl font-bold text-gray-700 md:pt-20 md:pb-12 pb-6 pt-14 animate-fade-in-down">
          stephanie <br /> hestilow
        </h1>
        <p className="md:text-3xl text-xl md:pb-4 pb-2 text-gray-400 animate-fade-in">
          from digital marketer to
        </p>
        <p className="md:text-4xl text-2xl font-medium md:pb-8 text-red-600 animate-fade-in">
          full stack <br /> software engineer
        </p>
        <div className="relative">
        <button
          onClick={toggleIsShown}
          className="animate-fade-in bg-none md:text-3xl text-xl text-red-600 py-2 rounded-md mt-4 focus:outline-none border-none lg:absolute lg:z-10"
          >
            {isShown ? "hello!" : "+ about me"}
          </button>
          {isShown && (
            <p className="lg:text-xl text-lg text-gray-400 lg:mt-20 lg:absolute lg:z-10 lg:max-w-sm max-w-md">
            I'm a full stack software engineer with a unique combination of programming and digital marketing expertise. <br/><br/> Fueled by my passion for bringing innovative online experiences to life, I pivoted from marketing & advertising to pursue a career in software development, switching gears from strategist to architect. <br/><br/>After dedicating the past year toward building my technical skillset, I'm excited for the opportunity to play a role in building these experiences firsthand.
          </p>
        )}
        <img
          src="./cloud.png"
          alt="cloud"
          className="absolute float-right top-90 lg:right-40 right-0 md:w-80 w-40 ml-14 opacity-40 animate-float-right-left"
        />
        <img
          className="float-right lg:w-3/5 w-4/5 md:mt-14 pl-14 pt-14 animate-fade-in"
          alt="hero"
          src="./golden_gate.png"
        />
        </div>
      </div>
    </section>
  );
}
