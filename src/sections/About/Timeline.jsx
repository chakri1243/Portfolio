import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech",
    description:
      "Computer Science & Engineering (AI)"
  },
  {
    year: "2024",
    title: "Programming Journey",
    description:
      "Python, Java, SQL and Web Development"
  },
  {
    year: "2025",
    title: "AI & Machine Learning",
    description:
      "Machine Learning, NLP and Generative AI"
  },
  {
    year: "2026",
    title: "Building Projects",
    description:
      "AI Resume Analyzer, AI Assistant and Portfolio"
  }
];

export default function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}