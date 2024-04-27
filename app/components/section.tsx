"use client";
import React, { ReactNode, useEffect, useRef } from "react";

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
      className="section"

      //  ref={revealContainer}
    >
      <a className="text-2xl" href={`#${name}`}>
        {name}
      </a>
      <div className="ml-2">{children}</div>
    </div>
  );
}
