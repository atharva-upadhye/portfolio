import React from "react";

export default function about() {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <div className="container-centered">
        <p>
          My mission as a developer is to contribute to applications that
          empower and motivate lives. I believe that through code we can make
          the world a better place by building products that empower
          communities.{" "}
        </p>
        <p>
          On my free time, I am building web applications through the
          FreeCodeCamp curriculum, an open source coding community. On top of
          FreeCodeCamp, I attend meetups and seminars, listen to engineering
          podcasts, read tech blogs, and take other online courses in order to
          help me develop a growth mindset and become a better developer.
        </p>
        <p>I recently started contributing to open source through DWOC</p>
        <p>When I'm not coding, you can find me doing</p>
        <ul className="tablets">
          <li>Running</li>
          <li>Swimming</li>
          <li>Cricket</li>
          <li>Traveling </li>
        </ul>
      </div>
    </section>
  );
}
