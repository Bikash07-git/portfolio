"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import SkillBadge from "./SkillBadge";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
  scale: 1.05,
  rotate: 1,
}}
      className="relative flex items-center justify-center w-[420px] h-[420px] mx-auto"
    >
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="relative overflow-hidden rounded-full border-4 border-cyan-500/40 shadow-[0_0_70px_rgba(6,182,212,0.35)]">
        <Image
          src={portfolio.profileImage}
          alt={portfolio.firstName}
          width={320}
          height={320}
          priority
          className="w-80 h-80 object-cover"
        />
      </div>

      <SkillBadge label="Python" className="top-16 left-4" />
      <SkillBadge label="SQL" className="top-12 right-2" />
      <SkillBadge label="Power BI" className="bottom-16 right-4" />
      <SkillBadge label="Machine Learning" className="bottom-16 left-0" />
    </motion.div>
  );
}