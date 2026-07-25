"use client";

import { motion } from "framer-motion";

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

      <span className="text-sm font-medium text-cyan-300">
        Available for Full-Time Opportunities
      </span>
    </motion.div>
  );
}