import React, { ReactNode } from "react";

export function Section({
  name,
  children,
}: {
  name: string;
  children?: ReactNode;
}) {
  return (
    <div
      id={name}
      className="section flex flex-col gap-1 m-1"
      //  ref={revealContainer}
    >
      <a className="text-2xl" href={`#${name}`}>
        {name}
      </a>
      <div className="ml-2">{children}</div>
    </div>
  );
}
