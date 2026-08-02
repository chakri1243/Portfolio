import { motion } from "framer-motion";
import heroData from "../../data/herodata";

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {heroData.stats.map((item, index) => (
        <motion.div
          key={index}
          className="stat-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
            duration: 0.6,
          }}
          whileHover={{
            y: -10,
            scale: 1.05,
          }}
        >
          <h2 className="stat-number">
            {item.number}
            {item.suffix}
          </h2>

          <p className="stat-title">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}