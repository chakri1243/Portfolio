import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import heroData from "../../data/heroData";

export default function HeroSocial() {
  return (
    <>
      <a
        href={heroData.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={22} />
      </a>

      <a
        href={heroData.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={22} />
      </a>

      <a
        href={heroData.social.email}
        aria-label="Email"
      >
        <FaEnvelope size={22} />
      </a>
    </>
  );
}