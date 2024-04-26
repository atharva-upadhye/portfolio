import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact-me">
      <div className="container-flex-column">
        <h4>Let's Connect</h4>
        <div>
          <a
            href="https://github.com/atharva-u-01"
            className="link"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span className="span-icons fa fa-github" aria-hidden="true"></span>
          </a>
          <a
            href="#"
            className="https://twitter.com/atharva_u_01"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span
              className="span-icons fa fa-twitter"
              aria-hidden="true"
            ></span>
          </a>
          <a
            href="#"
            className="https://www.linkedin.com/in/atharva-u-01/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <span
              className="span-icons fa fa-linkedin"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
      <div className="container-flex-column">
        <h4>Useful Links</h4>
        <div className="footer-link-super">
          <a href="#about" className="link footer-link">
            About
          </a>
          <a href="#projects" className="link footer-link">
            Projects
          </a>
          <a href="#certifications" className="link footer-link">
            Certifications
          </a>
        </div>
      </div>
    </footer>
  );
}
