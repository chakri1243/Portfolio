import { useState, useEffect } from "react";
import {
  FaSearch,
  FaTimes,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBrain,
  FaFolderOpen,
  FaGraduationCap,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";

import "./CommandPalette.css";

const commands = [
  { name: "Home", icon: <FaHome />, target: "hero" },
  { name: "About", icon: <FaUser />, target: "about" },
  { name: "Job Simulations", icon: <FaLaptopCode />, target: "job-simulations" },
  { name: "Skills", icon: <FaBrain />, target: "skills" },
  { name: "Projects", icon: <FaFolderOpen />, target: "projects" },
  { name: "Education", icon: <FaGraduationCap />, target: "education" },
  { name: "Contact", icon: <FaEnvelope />, target: "contact" },

  {
    name: "GitHub",
    icon: <FaGithub />,
    action: () =>
      window.open("https://github.com/chakri1243", "_blank"),
  },

  {
    name: "Resume",
    icon: <FaFileAlt />,
    action: () => window.open("/resume.pdf", "_blank"),
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = commands.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (item) => {
    setOpen(false);

    if (item.action) {
      item.action();
      return;
    }

    const section = document.getElementById(item.target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        className="command-button"
        onClick={() => setOpen(true)}
      >
        <FaSearch />
      </button>

      {open && (
        <div className="palette-overlay">
          <div className="palette">

            <div className="palette-header">

              <FaSearch />

              <input
                autoFocus
                type="text"
                placeholder="Search portfolio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>

            </div>

            <div className="palette-results">

              {filtered.map((item, index) => (
                <div
                  key={index}
                  className="palette-item"
                  onClick={() => handleClick(item)}
                >
                  {item.icon}

                  <span>{item.name}</span>
                </div>
              ))}

            </div>

          </div>
        </div>
      )}
    </>
  );
}