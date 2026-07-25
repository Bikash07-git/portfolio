"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import Greeting from "../hero/Greeting";
import TypingText from "../hero/TypingText";
import HeroButtons from "../hero/HeroButtons";
import SocialLinks from "../hero/SocialLinks";
import HeroImage from "../hero/HeroImage";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="max-w-2xl">

            <Greeting />

            <TypingText />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-400"
            >
              {portfolio.description}
            </motion.p>

            <HeroButtons />

            <SocialLinks />

          </div>

          <HeroImage />

        </div>
      </Container>
    </section>
  );
}