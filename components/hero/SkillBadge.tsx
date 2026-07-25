"use client";

import { motion } from "framer-motion";

type SkillBadgeProps = {
  label: string;
  className: string;
};

export default function SkillBadge({
  label,
  className,
}: SkillBadgeProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className={`absolute rounded-full border border-cyan-500/40 bg-slate-900/80 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md ${className}`}
    >
      {label}
    </motion.div>
  );
}