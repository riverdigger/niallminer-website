// src/components/Contact.js

import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <section id="contact" className="relative section-p bg-gray-900">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="45" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="#e5e7eb" stroke="#e5e7eb"></path>
      </svg>
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <Header text={
          <div>
            <span className="text-gray-200 hidden sm:inline">Get in&nbsp;</span><span className="text-gray-200 font-bold">Contact</span>
          </div>
          }
        />
        <div className="md:w-3/4 w-full flex flex-col text-center m-auto md:py-8 mt-8 md:mt-0">
          <p className="leading-relaxed mb-5 text-gray-200 text-xl">
          I'm excited to hear about your projects and would love to know if you'd be interested in collaborating on any of them with me.</p>
          <p className="leading-relaxed mb-5 text-gray-200 text-xl">Please reach out and I'll get back to you soon.
          </p>
          <div className="gradient-sm p-1 pb-3 hover:pb-2 hover:mt-1 rounded flex w-full flex-start justify-center">
            <a
              href="mailto:niallminer@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="p-4 text-gray-900 bg-gray-200 rounded text-2xl w-full hover:bg-gray-300">
              Email
            </a>

          </div>
        </div>
        <p className="mt-24 text-center text-white">Made by Niall Miner with ReactJS</p>
      </div>
    </section>
  );
}
