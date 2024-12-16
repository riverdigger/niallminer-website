// import React from "react";
//
// export default function App() {
//   return "App";
// }

// src/App.js
import React from "react";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import './App.css';

function App() {
  return (
    <main className="text-black bg-gray-200 body-font">
      <Navbar />
      <Landing />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Socials />
    </main>
  );
}

export default App;


// export default function App() {
//   // return "App";
//   return (
//     <main className="text-black bg-gray-200 body-font">
//       <Navbar />
//       <Landing />
//       <About />
//       <Work />
//       <Projects />
//       <Contact />
//       <Socials />
//     </main>
//   );
// }
