// src/components/Work.js

import React from "react";
import { Zoom } from "react-awesome-reveal";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { projects } from "../data";

export default function Projects() {
  var isActive = false;

  function toggleActive() {
    isActive = !isActive;
    if (isActive) {
      document.getElementById("projects_container").classList.remove("overflow-hidden");
      document.getElementById("projects_container").classList.remove("max-h-88");
      document.getElementById("show_more").style.display = "none";
      document.getElementById("show_less").style.display = "flex";
    } else {
      document.getElementById("projects_container").classList.add("overflow-hidden");
      document.getElementById("projects_container").classList.add("max-h-88");
      document.getElementById("show_more").style.display = "flex";
      document.getElementById("show_less").style.display = "none";
    }
  }

  return (
    <section id="work" className="bg-gray-200 body-font section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Header text={
          <div>
            <span className="hidden sm:inline">Side</span>&nbsp;<span className="font-bold">Projects</span>
          </div>
          }
        />
        <div id="projects_container" className={"flex flex-wrap justify-center mb-4 " + (isActive ? "" : "overflow-hidden max-h-88")}>
          {projects.map((project, i) => (
            <Zoom delay={i * 200} triggerOnce>
            <div className={"grow-sm m-4 flex flex-col justify-between items-start rounded-md shadow-lg hover:shadow-sm h-80 max-h-80 w-80 bg-white p-4 ring-4" + (i % 4 == 0 ? " ring-red-400" : "" ) + (i % 4 == 1 ? " ring-green-500" : "" ) + (i % 4 == 2 ? " ring-indigo-500" : "" ) + (i % 4 == 3 ? " ring-yellow-500" : "" )}>
              <div>
                <div className="w-full flex justify-between items-center">
                  <a className="text-xl ml-1 text-gray-900 font-bold" href={project.link} target="_blank">{project.title}</a>
                  <div className="flex flex-grow justify-end items-center">
                  {project.links.map((link, i) => (
                    <a href={link.link} target="_blank"><FontAwesomeIcon icon={link.icon} className="mr-2 font-bold text-2xl" /></a>
                  ))}
                  </div>
                </div>
                <div className="overflow-ellipsis w-full text-left pt-2">
                  {project.description}
                </div>
              </div>
              <div className="w-full flex justify-between items-end">
                <div className="flex flex-grow justify-start items-center">
                {project.tags.map((tag, i) => (
                  <span className="mr-4">{tag}</span>
                ))}
                </div>
                <a
                href={project.link}
                target="_blank"
                className="w-1/3">
                <img
                alt="gallery"
                className="object-cover object-center md:rounded-lg rounded-t-lg "
                src={project.image}
                />
                </a>

              </div>
            </div>
            </Zoom>
          ))}
        </div>
        <div id="show_more" className="cursor-pointer text-lg hover:text-gray-500 w-full flex justify-center items-center" onClick={ toggleActive }>
          Show More
          <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 ml-1" />
        </div>
        <div id="show_less" className="cursor-pointer text-lg hover:text-gray-500 w-full flex justify-center items-center hidden" onClick={ toggleActive }>
          Show Less
          <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 ml-1" />
        </div>
      </div>
    </section>
  );
}
