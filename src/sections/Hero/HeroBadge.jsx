import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      className="hero-badge"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
    >
      <span className="badge-dot"></span>

      Available for Internship
    </motion.div>
  );
}