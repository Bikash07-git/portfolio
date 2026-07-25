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
      className="relative mx-auto flex h-[520px] w-[520px] items-center justify-center"
    >
      <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute h-[360px] w-[360px] rounded-full border border-cyan-500/20 animate-pulse" />

      <div className="relative overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-[0_0_80px_rgba(34,211,238,0.35)]">
        <Image
          src={portfolio.profileImage}
          alt={portfolio.firstName}
          width={340}
          height={340}
          priority
          className="h-[340px] w-[340px] object-cover"
        />
      </div>

      <SkillBadge label="Python" className="left-4 top-24" />
      <SkillBadge label="SQL" className="right-8 top-20" />
      <SkillBadge label="Power BI" className="right-6 bottom-24" />
      <SkillBadge label="Machine Learning" className="left-0 bottom-24" />
    </motion.div>
  );
}