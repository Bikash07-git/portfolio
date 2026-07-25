"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
        👋 Welcome to my Portfolio
      </span>

      <h1 className="mt-8 text-6xl font-black leading-[0.9] tracking-tight text-white lg:text-8xl">
        {portfolio.firstName}
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
          {portfolio.lastName}
        </span>
      </h1>
    </motion.div>
  );
}