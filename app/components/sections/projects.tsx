import React from "react";

export default function Projects() {
  return (
    <section className="section section-offwhite projects" id="projects">
      <h2>
        These are some of the projects I have made while learning different
        technologies
      </h2>
      <div className="container-centered">
        <ul>
          <li className="card">
            <h3 className="card-title">Authentication Project</h3>
            <p>To learn how authentication works.</p>
            <p>
              Tech Stack:{" "}
              <span className="badge">ReactJS, ExpressJS, MongoDB</span>
            </p>
            <button className="button button-primary">
              <a
                href="https://react-auth-123.herokuapp.com/"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="button button-secondary">
              <a
                href="https://github.com/atharva-u-01/auth-in-express-react"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Source
              </a>
            </button>
          </li>
          <li className="card">
            <h3 className="card-title">Launcher App</h3>
            <p>
              A quick app launcher with feeds similar to Google Now and Xiaomi
              App Vault.
            </p>
            <p>
              Tech Stack: <span className="badge">Flutter, ExressJS</span>
            </p>
            <button className="button button-primary">
              <a
                className="link"
                href="https://drive.google.com/drive/folders/1BeKIp-pKRziNFuP4qhXsm3K27sR-Jy5g?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="button button-secondary">
              <a
                href="https://github.com/atharva-u-01/app_launcher"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Source
              </a>
            </button>
          </li>
          <li className="card">
            <h3 className="card-title">Script to copy missing files</h3>
            <p>
              Copies missing files of source directory to destination directory
              by comparing filenames. Also has custom settings to exclude files
            </p>
            <p>
              Tech Stack: <span className="badge">NodeJS</span>
            </p>
            <button className="button button-primary">
              <a
                href="https://github.com/atharva-u-01/copy_missing_files"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Project
              </a>
            </button>
            <button className="button button-secondary">
              <a
                href="https://github.com/atharva-u-01/copy_missing_files"
                className="link"
                rel="noreferrer noopener"
                target="_blank"
              >
                View Source
              </a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
