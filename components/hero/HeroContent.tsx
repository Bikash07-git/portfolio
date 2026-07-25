import Greeting from "./Greeting";
import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import { portfolio } from "@/data/portfolio";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <Greeting />

      <TypingText />

      <p className="mt-8 text-lg leading-8 text-slate-400">
        {portfolio.description}
      </p>

      <HeroButtons />

      <SocialLinks />

      <div className="mt-14 grid grid-cols-3 gap-8">

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">
            4+
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">
            1
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Research Works
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-400">
            15+
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Technologies
          </p>
        </div>

      </div>

    </div>
  );
}