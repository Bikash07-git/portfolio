"use client";

import { motion } from "framer-motion";

type FloatingCardProps = {
  title: string;
  value: string;
  className: string;
};

export default function FloatingCard({
  title,
  value,
  className,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur-xl shadow-2xl ${className}`}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-1 text-lg font-bold text-white">
        {value}
      </h3>
    </motion.div>
  );
}