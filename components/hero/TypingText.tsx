"use client";

import { TypeAnimation } from "react-type-animation";
import { portfolio } from "@/data/portfolio";

export default function TypingText() {
  const sequence: (string | number)[] = [];

  portfolio.roles.forEach((role) => {
    sequence.push(role, 2000);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="mt-8 block text-3xl font-bold text-cyan-400"
    />
  );
}