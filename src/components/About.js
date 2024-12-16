// src/components/About.js

import React from "react";
import Fade from "react-awesome-reveal";
import Header from "./Header";

export default function About() {
  return (
    <section id="about" className="body-font /*shadow-inner-md*/ section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Header text={
          <div>
            <span className='hidden sm:inline'>A Bit&nbsp;</span><span className='font-bold'>About</span><span className='hidden sm:inline'>&nbsp;Me</span>
          </div>
          }
        />
        <Fade triggerOnce>
        <div className="flex md:mt-14 md:flex-row flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center md:w-1/3 grow md:block hidden">
            <img
              alt="gallery"
              className={"w-full object-cover object-center rounded-lg h-full shadow-md"}
              src="./me.png"
            />
          </div>
          <div className="inline flex-col justify-center items-center md:w-2/3 w-full m-10 text-xl">
            Hi there! My name is Niall Miner and I'm a Website/Media/Game Developer with experience in <span className="inline font-bold">full stack development</span>, <span className="inline font-bold">defect tracking</span>, <span className="inline font-bold">database management</span>, who has commerical releases for websites, mobile applications, and video games. I'm an avid programmer with a degree in Computer Science from Colorado School of Mines who loves rock climbing, guitar, mountain biking, and being creative.
          </div>
          <div className="flex md:flex-col justify-center items-center md:w-1/3 w-1/2 grow md:hidden">
            <img
              alt="gallery"
              className={"w-full object-cover object-center rounded-lg h-full shadow-md"}
              src="./me.jpg"
            />
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}
