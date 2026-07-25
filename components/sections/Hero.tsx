import Container from "../ui/container";
import Greeting from "../hero/Greeting";
import TypingText from "../hero/TypingText";
import HeroButtons from "../hero/HeroButtons";
import SocialLinks from "../hero/SocialLinks";
import HeroImage from "../hero/HeroImage";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <Container>
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-12 lg:grid-cols-2">
          
          <div>
            <Greeting />

            <TypingText />

            <p className="mt-6 max-w-xl text-slate-400">
              {portfolio.description}
            </p>

            <HeroButtons />

            <SocialLinks />
          </div>

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}