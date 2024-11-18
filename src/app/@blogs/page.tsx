import { Section } from "@/components/section";

export default function Blogs() {
  const blogs: { title: string; link: string }[] = [];
  return (
    <Section name="Blogs">
      {blogs.length ? <></> : <>No blogs available</>}
    </Section>
  );
}
