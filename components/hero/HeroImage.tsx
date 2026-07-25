import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Profile Image */}
      <div className="relative overflow-hidden rounded-full border-4 border-cyan-500/40">
        <Image
          src={portfolio.profileImage}
          alt={portfolio.firstName}
          width={320}
          height={320}
          className="h-80 w-80 object-cover"
          priority
        />
      </div>
    </div>
  );
}