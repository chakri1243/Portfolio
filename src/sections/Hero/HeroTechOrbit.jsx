import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiTensorflow,
  SiFlask,

  SiJavascript,
} from "react-icons/si";

import { FaRobot } from "react-icons/fa";

const techs = [
  { icon: <SiPython />, className: "tech python" },
  { icon: <SiReact />, className: "tech react" },
  { icon: <SiTensorflow />, className: "tech tensorflow" },
  { icon: <FaRobot />, className: "tech openai" },
  { icon: <SiFlask />, className: "tech flask" },
  { icon: <SiJavascript />, className: "tech javascript" },
];

export default function HeroTechOrbit() {
  return (
    <motion.div
      className="tech-orbit"
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {techs.map((tech, index) => (
        <div key={index} className={tech.className}>
          {tech.icon}
        </div>
      ))}
    </motion.div>
  );
}