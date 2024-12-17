// src/components/Work.js

import React from "react";
import Header from "./Header";
import Tag from "./Tag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { experience } from "../data";

export default function Work() {
  return (
    <section id="work" className="bg-gray-200 body-font section-p relative">
      {experience.map((project, i) => (
        <div
          className={"w-1/3 md:h-1 absolute shadow-md" + (i % 4 === 0 ? " bg-red-400" : "" ) + (i % 4 === 1 ? " bg-green-500" : "" ) + (i % 4 === 2 ? " bg-indigo-500" : "" ) + (i % 4 === 3 ? " bg-yellow-500" : "" )}
          style={
            {
              top: 15 + (30*(i) + 5 + i) + "em",
              left: (i % 2 === 0 ? "0em" : "66%")
            }
          }
        >

        </div>
      ))}
      <div className="container px-5 pt-10 md:pb-10 mx-auto text-center lg:px-40">
        <Header text={
          <div>
            <span className="font-bold">Work</span>&nbsp;<span className="hidden sm:inline">Experience</span>
          </div>
          }
        />
        <div className="flex flex-col text-white">
          {experience.map((project, i) => (
            <div className="flex items-center flex-col md:flex-row relative md:h-96 bg-white md:bg-transparent rounded-lg md:rounded-none md:my-14 mb-14">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={"md:w-3/5 w-full md:absolute shadow-lg h-full mx-2" + (i % 2 === 0 ? " md:right-14" : " md:left-12 ")}>
                  <img
                    alt="gallery"
                    className={"w-full object-cover object-center md:rounded-lg rounded-t-lg h-full md:inset-0 md:absolute"}
                    src={project.image}
                  />
                <div className={"w-full rounded-lg h-full bg-white opacity-70 hover:opacity-0 inset-0 absolute"}></div>
              </a>
              <div className={"flex flex-col items-center justify-center w-full xl:w-2/5 md:w-7/12 h-full md:absolute grow-sm z-10 md:z-auto bg-white md:bg-transparent rounded-lg md:rounded-none" + (i % 2 === 0 ? " md:left-8" : " md:right-10")}>
                <div className="w-full flex items-end justify-between bg-white md:bg-transparent rounded-t-lg md:rounded-none mb-2 p-2 md:mb-0 md:p-0 flex-wrap xl:flex-nowrap">
                  <h1 className="xl:text-3xl text-2xl font-bold text-gray-900">
                    <FontAwesomeIcon icon={project.icon} className="mr-2" />
                    {project.title}
                  </h1>
                  <h1 className="text-xl italic text-gray-900">{project.subtitle}</h1>
                </div>
                <div className="mb-2">
                  <ul className={"text-left text-gray-900 rounded-md px-4 py-2 relative z-10 w-full bg-white border-2" + (i % 4 === 0 ? " border-red-400" : "" ) + (i % 4 === 1 ? " border-green-500" : "" ) + (i % 4 === 2 ? " border-indigo-500" : "" ) + (i % 4 === 3 ? " border-yellow-500" : "" )}>
                    {project.description.map((description) => (
                      <li><FontAwesomeIcon icon={faCaretRight} className={"mr-2" + (i % 4 === 0 ? " text-red-400" : "" ) + (i % 4 === 1 ? " text-green-500" : "" ) + (i % 4 === 2 ? " text-indigo-500" : "" ) + (i % 4 === 3 ? " text-yellow-500" : "" )} />{description}</li>
                    ))}
                  </ul>
                  <div className={"text-left rounded-md px-4 py-2 shadow-md w-full -my-2 absolute z-0" + (i % 4 === 0 ? " bg-red-400" : "" ) + (i % 4 === 1 ? " bg-green-500" : "" ) + (i % 4 === 2 ? " bg-indigo-500" : "" ) + (i % 4 === 3 ? " bg-yellow-500" : "" )}></div>
                </div>
                <div className="flex w-full justify-center items-center my-2 rounded-b-lg bg-white md:rounded-none md:bg-transparent">
                  {project.tags.map((tag) => (
                    <Tag text={tag} i={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
