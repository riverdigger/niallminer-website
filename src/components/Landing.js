// src/components/Landing.js

import React from "react";
import Fade, { AttentionSeeker } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
  return (
    <section id="landing" className="h-screen gradient shadow-xl">
      <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center justify-center h-full">
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 lg:items-start items-center text-left ml-4">
          <Fade cascade>
            <p className="text-2xl font-medium text-white bg-white bg-opacity-20 transform md:-skew-x-12 md:rounded-none rounded-md md:shadow-none shadow-md md:px-3 px-2"><Fade cascade duration="100">// Nice to meet you, I'm</Fade></p>
          </Fade>
          <Fade cascade>
            <div className="flex flex-col justify-start items-center my-7">
              <div className="flex justify-center items-center mx-4 md:flex-no-wrap flex-wrap">
                <div className="flex items-center">
                  <img
                    className="object-cover object-center rounded h-24"
                    alt="niall miner"
                    src="./logo_bracket_left.png"
                  />
                  <p className="font-bold md:text-9xl sm:text-8xl text-7xl text-white md:not-italic italic">NIALL&nbsp;</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold md:text-9xl sm:text-8xl text-7xl text-white md:not-italic italic">MINER</p>
                  <img
                    className="object-cover object-center rounded h-24"
                    alt="niall miner"
                    src="./logo_bracket_right.png"
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade cascade>
            <p className="text-2xl mb-4 font-medium text-white bg-white bg-opacity-20 transform md:-skew-x-12 md:rounded-none rounded-md md:shadow-none shadow-md md:px-3 px-2 md:text-left text-center"><Fade cascade duration="30">// Software developer with experience in full stack development, defect tracking, and database management</Fade></p>
          </Fade>
          <Fade cascade>
            <AttentionSeeker effect="pulse" delay="100">
              <div className="flex justify-center shadow-md">
                <a
                  href="#contact"
                  className="inline-flex items-center text-white bg-gray-900 bg-opacity-20 transform -skew-x-12 px-3 hover:bg-gray-800 text-xl">
                  Let's Build Something
                  <FontAwesomeIcon icon={faArrowRight} className="w-f h-4 ml-1" />
                </a>
              </div>
            </AttentionSeeker>
          </Fade>
        </div>
      </div>
    </section>
  );
}
