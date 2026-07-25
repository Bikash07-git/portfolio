"use client";

import { TypeAnimation } from "react-type-animation";
import { portfolio } from "@/data/portfolio";

const sequence: (string | number)[] = [];

portfolio.roles.forEach((role) => {
  sequence.push(role, 2000);
});

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={60}
      repeat={Infinity}
      className="mt-8 block text-4xl font-bold text-cyan-400"
    />
  );
}