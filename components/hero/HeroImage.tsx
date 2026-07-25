"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import { portfolio } from "@/data/portfolio";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto flex h-[620px] w-[620px] items-center justify-center"
    >
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute h-[380px] w-[380px] rounded-full border border-cyan-500/20 animate-pulse" />

      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="relative overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-[0_0_90px_rgba(6,182,212,0.35)]"
      >
        <Image
          src={portfolio.profileImage}
          alt={portfolio.firstName}
          width={380}
          height={380}
          priority
          className="h-[380px] w-[380px] object-cover"
        />
      </motion.div>

      <FloatingCard
        title="Projects"
        value="10+"
        className="left-0 top-24"
      />

      <FloatingCard
        title="Research"
        value="IEEE"
        className="right-0 top-20"
      />

      <FloatingCard
        title="Education"
        value="M.Tech CSE"
        className="-left-4 bottom-28"
      />

      <FloatingCard
        title="Location"
        value="India"
        className="right-4 bottom-24"
      />
    </motion.div>
  );
}