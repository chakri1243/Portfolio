import { motion } from "framer-motion";

export default function SkillCard({ title }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      {title}
    </motion.div>
  );
}