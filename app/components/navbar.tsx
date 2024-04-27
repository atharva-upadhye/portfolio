import React from "react";
import { ThemeSwitcher } from "./theme-switcher/theme-switcher";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-2 bg-blue-300 dark:bg-blue-800">
      <a href="#">
        <h1>Atharva Upadhye</h1>
      </a>
      <ul>
        {/* <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li> */}
        <ThemeSwitcher />
        {/* <li><a href="#contact-me">Contact Me</a></li>  */}
      </ul>
    </nav>
  );
}
