import React from "react";
import { Section } from "./section";

function Blogs({ blogs }: { blogs: { title: string; link: string }[] }) {
  return (
    <Section name="Blogs">
      {blogs.length ? <></> : <>No blogs available</>}
    </Section>
  );
}

export default Blogs;
