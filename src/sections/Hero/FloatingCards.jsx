import { motion } from "framer-motion";

const cards = [
  {
    title: "Artificial Intelligence",
    x: -180,
    y: -120,
  },
  {
    title: "Machine Learning",
    x: 220,
    y: -80,
  },
  {
    title: "Generative AI",
    x: -220,
    y: 120,
  },
  {
    title: "Full Stack",
    x: 180,
    y: 160,
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="floating-card"
          style={{
            left: `calc(50% + ${card.x}px)`,
            top: `calc(50% + ${card.y}px)`,
          }}
        >
          {card.title}
        </motion.div>
      ))}
    </>
  );
}