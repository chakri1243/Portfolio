import { motion } from "framer-motion";

export default function HeroStatus() {
  return (
    <motion.div
      className="hero-status"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <span className="status-chip">
        🚀 ACTIVE PROJECT
      </span>

      <h3>AI Resume Analyzer</h3>

      <p>
        ATS Scoring • Resume Parsing • AI Suggestions
      </p>
    </motion.div>
  );
}