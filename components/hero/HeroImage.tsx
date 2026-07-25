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
      whileHover={{ scale: 1.03 }}
      className="relative flex justify-center"
    >
      <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-full border-4 border-cyan-500/40 shadow-2xl shadow-cyan-500/20">
        <Image
          src={portfolio.profileImage}
          alt={portfolio.firstName}
          width={320}
          height={320}
          priority
          className="h-80 w-80 object-cover"
        />
      </div>

      <SkillBadge label="Python" className="-left-4 top-16" />
      <SkillBadge label="SQL" className="right-2 top-10" />
      <SkillBadge label="Power BI" className="right-0 bottom-16" />
      <SkillBadge label="Machine Learning" className="-left-10 bottom-14" />
    </motion.div>
  );
}