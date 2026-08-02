import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import heroData from "../../data/heroData";

export default function HeroTypewriter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
      className="mt-6"
    >
      <h2 className="text-xl md:text-3xl font-semibold text-blue-400 h-12">
        <Typewriter
          words={heroData.roles}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </h2>
    </motion.div>
  );
}