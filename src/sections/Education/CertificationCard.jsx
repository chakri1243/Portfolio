import { motion } from "framer-motion";

export default function CertificationCard({ cert }) {
  return (
    <motion.div
      className="certificate-card"
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
    >
      <h3>{cert.title}</h3>

      <p>{cert.issuer}</p>

      <span>{cert.year}</span>

      <a
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate →
      </a>
    </motion.div>
  );
}