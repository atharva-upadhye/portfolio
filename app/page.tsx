import React from "react";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Certifications from "./components/sections/certifications";

export default function page() {
  return (
    <main>
      <About />
      <Projects />
      <Certifications />
    </main>
  );
}
