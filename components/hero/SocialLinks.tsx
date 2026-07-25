import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { portfolio } from "@/data/portfolio";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-6 text-slate-400">
      <a
        href={portfolio.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-400"
      >
        <FaGithub size={26} />
      </a>

      <a
        href={portfolio.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-cyan-400"
      >
        <FaLinkedin size={26} />
      </a>

      <a
        href={`mailto:${portfolio.social.email}`}
        className="transition hover:text-cyan-400"
      >
        <MdEmail size={28} />
      </a>
    </div>
  );
}