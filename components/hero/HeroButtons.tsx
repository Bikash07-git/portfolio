"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { portfolio } from "@/data/portfolio";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-wrap gap-5"
    >
      <Button variant="primary" href="#projects">
        View Projects
      </Button>

      <Button variant="secondary" href={portfolio.resume}>
        Download Resume
      </Button>
    </motion.div>
  );
}