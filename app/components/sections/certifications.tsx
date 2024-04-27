import React from "react";
import { Section } from "../section";

export default function Certifications({
  certificates,
}: {
  certificates: {
    name: string;
    url: string;
  }[];
}) {
  return certificates.length ? (
    <Section name="Certificates">
      <ul className="p-2">
        {certificates.map((c) => (
          <li key={c.name}>
            <a
              className=" text-blue-500 hover:text-blue-800"
              target="_blank"
              href={c.url}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  ) : null;
}
