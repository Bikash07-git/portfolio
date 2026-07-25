import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-5">

      <a href="#">
        <FaGithub size={28} />
      </a>

      <a href="#">
        <FaLinkedin size={28} />
      </a>

      <a href="#">
        <MdEmail size={30} />
      </a>

    </div>
  );
}