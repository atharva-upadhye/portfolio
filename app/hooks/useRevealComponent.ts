"use client";
import { useEffect, useRef } from "react";

export function useRevealComponent() {
  const ref = useRef(null);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal");
    const sr = ScrollReveal.default({ reset: true });
    sr.reveal(ref.current, {
      delay: 500,
    });
  }, []);
  return { ref };
}
