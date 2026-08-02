import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>Hello 👋</h3>

      <p>
        I'm <span>Gutta Chakrapani</span>, a Computer Science student
        specializing in Artificial Intelligence and Machine Learning.
      </p>

      <p>
        I enjoy building intelligent applications using Python, Machine
        Learning, Generative AI, and Full Stack Development.
      </p>

      <p>
        My goal is to create AI products that solve real-world problems and
        deliver meaningful user experiences.
      </p>

      <div className="mission-box">
        <h4>🎯 Mission</h4>

        <p>
          Build practical AI solutions that make technology smarter,
          faster, and more accessible.
        </p>
      </div>
    </motion.div>
  );
}