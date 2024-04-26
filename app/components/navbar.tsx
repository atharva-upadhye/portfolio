import React from "react";

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <h1>Atharva Upadhye</h1>
      </a>
      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        {/* <li><a href="#contact-me">Contact Me</a></li>  */}
      </ul>
    </nav>
  );
}
