"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolio } from "@/data/portfolio";

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: portfolio.social.github,
  },
  {
    icon: <FaLinkedin size={20} />,
    href: portfolio.social.linkedin,
  },
  {
    icon: <MdEmail size={22} />,
    href: `mailto:${portfolio.social.email}`,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-10 flex gap-4"
    >
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-slate-900/70 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}