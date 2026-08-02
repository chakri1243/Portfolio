import "./HeroButtons.css";

import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="hero-buttons">

      <a
        href="#projects"
        className="primary-btn"
      >
        Explore My Work

        <FaArrowRight className="button-arrow"/>
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        <HiOutlineDocumentText />

        Preview Resume
      </a>

      <a
        href="/resume.pdf"
        download
        className="secondary-btn"
      >
        <FiDownload />

        Download Resume
      </a>

    </div>
  );
}