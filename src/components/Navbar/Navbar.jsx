import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Job Simulation", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll ? "navbar scrolled" : "navbar"}>

      <div className="navbar-logo">

        <div className="logo-circle">
          CK
        </div>

        <span>
          Chakrapani
        </span>

      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>

        {links.map((item) => (

          <li key={item.to}>

            <Link
              to={item.to}
              smooth={true}
              duration={700}
              spy={true}
              offset={-80}
              activeClass="active"
              onClick={() => setMenu(false)}
            >
              {item.name}
            </Link>

          </li>

        ))}

      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <HiX /> : <HiMenuAlt3 />}
      </button>

    </header>
  );
}