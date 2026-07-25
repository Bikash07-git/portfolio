"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Data Analyst",
        2000,
        "Machine Learning Engineer",
        2000,
        "Business Intelligence Developer",
        2000,
        "Published IEEE Researcher",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="mt-6 block text-2xl font-semibold text-cyan-400"
    />
  );
}