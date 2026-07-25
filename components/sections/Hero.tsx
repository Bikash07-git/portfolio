"use client";

import Container from "../ui/container";
import HeroContent from "../hero/HeroContent";
import HeroImage from "../hero/HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
}