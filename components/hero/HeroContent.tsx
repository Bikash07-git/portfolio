import StatusBadge from "./StatusBadge";
import Greeting from "./Greeting";
import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import { portfolio } from "@/data/portfolio";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <StatusBadge />

      <div className="mt-8">
        <Greeting />
      </div>

      <TypingText />

      <p className="mt-8 text-lg leading-8 text-slate-400">
        {portfolio.description}
      </p>

      <HeroButtons />

      <SocialLinks />

      <div className="mt-16 flex gap-12">

        <div>
          <h2 className="text-4xl font-bold text-white">
            10+
          </h2>

          <p className="mt-2 text-slate-500">
            Projects
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            IEEE
          </h2>

          <p className="mt-2 text-slate-500">
            Publication
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white">
            M.Tech
          </h2>

          <p className="mt-2 text-slate-500">
            Computer Science
          </p>
        </div>

      </div>

    </div>
  );
}