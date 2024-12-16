// src/components/Navbar.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white sm:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
        <a href="#landing">
          <img
          className="object-cover object-center rounded"
          alt="niall miner"
          src="./logo_small.png"
          />
        </a>
        <nav className="sm:mr-auto sm:ml-4 sm:py-1 sm:pl-4 sm:border-l sm:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-400">
            About
          </a>
          <a href="#work" className="mr-5 hover:text-gray-400">
            Work
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-400">
            Contact
          </a>
          <a
            href="./resume_niall_miner.pdf"
            target="_blank"
            className="sm:hidden inline-flex items-center text-green-400">
            Resume
            <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4 ml-1" />
          </a>
        </nav>
        <a
          href="./resume_niall_miner.pdf"
          target="_blank"
          className="sm:inline-flex hidden items-center text-white bg-green-400 transform sm:-skew-x-12 sm:rounded-none rounded-md px-3 hover:bg-green-500 text-lg sm:mt-0 mt-4">
          Resume
          <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
