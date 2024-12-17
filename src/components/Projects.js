// src/components/Work.js

import React from "react";
import Header from "./Header";
import { projects } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-200 body-font section-p">
      <div className="container px-5 pt-10 md:pb-10 mx-auto text-center lg:px-40">
        <Header text={
          <div>
            <span className="hidden sm:inline">Side</span>&nbsp;<span className="font-bold">Projects</span>
          </div>
          }
        />
      </div>
      <div className="pb-10 w-full text-center">
        <div className="flex flex-wrap justify-center mb-4">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            centeredSlides={true}
            loop={false}
            pagination={true}
            modules={[Pagination]}
          >
            {projects.map((project, i) => (
              <SwiperSlide className="pb-10 md:w-80 sm:w-full">
                <div className="relative grow-sm m-4">
                  <FontAwesomeIcon icon={faStar} className={"text-yellow-400 text-4xl absolute -left-4 -top-2 z-20" + (project.active === true ? "" : " hidden")} />
                  <div className={"flex flex-col justify-between relative z-10 items-start rounded-md hover:shadow-sm h-80 max-h-80 md:w-80 sm:w-full bg-white p-4 border-2" + (i % 4 === 0 ? " border-red-400" : "" ) + (i % 4 === 1 ? " border-green-500" : "" ) + (i % 4 === 2 ? " border-indigo-500" : "" ) + (i % 4 === 3 ? " border-yellow-500" : "" )}>
                    <div>
                      <div className="w-full flex justify-between items-center">
                        <a className="text-xl ml-1 text-gray-900 font-bold" href={project.links[0].link} rel="noreferrer" target="_blank">{project.title}</a>
                        <div className="flex flex-grow justify-end items-center">
                        {project.links.map((link, i) => (
                          <a href={link.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={link.icon} className="mr-2 font-bold text-2xl" /></a>
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
                        <span className="mr-4 font-medium">{tag}</span>
                      ))}
                      </div>
                      <a
                        href={project.links[0].link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-1/3">
                        <img
                          alt="gallery"
                          className={"object-cover object-center md:rounded-lg rounded-t-lg" + (project.image === "" ? " hidden" : "")}
                          src={project.image}
                        />
                      </a>
                    </div>
                  </div>
                  <div className={"text-left rounded-md py-2 shadow-md  absolute z-0 -bottom-2 md:w-80 sm:w-full" + (i % 4 === 0 ? " bg-red-400" : "" ) + (i % 4 === 1 ? " bg-green-500" : "" ) + (i % 4 === 2 ? " bg-indigo-500" : "" ) + (i % 4 === 3 ? " bg-yellow-500" : "" )}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
