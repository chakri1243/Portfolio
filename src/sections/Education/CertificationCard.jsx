import { motion } from "framer-motion";

export default function CertificationCard({ cert }) {
  return (

<motion.div

className="certificate-card"

whileHover={{

y:-8,

scale:1.03

}}

>

<h3>{cert.title}</h3>

<p>{cert.issuer}</p>

<span>{cert.year}</span>

<a

href={cert.link}

target="_blank"

rel="noreferrer"

>

View Credential →

</a>

</motion.div>

  );
}