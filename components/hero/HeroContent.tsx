import Greeting from "./Greeting";
import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import { portfolio } from "@/data/portfolio";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <Greeting />

      <TypingText />

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        {portfolio.description}
      </p>

      <HeroButtons />

      <SocialLinks />

      <div className="mt-16 grid grid-cols-3 gap-10">

        <div>
          <h2 className="text-4xl font-bold text-white">
            10+
          </h2>

          <p className="mt-2 text-slate-400">
            Projects
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            IEEE
          </h2>

          <p className="mt-2 text-slate-400">
            Research Paper
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            M.Tech
          </h2>

          <p className="mt-2 text-slate-400">
            Computer Science
          </p>
        </div>

      </div>

    </div>
  );
}