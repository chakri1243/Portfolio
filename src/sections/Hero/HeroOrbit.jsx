import { motion } from "framer-motion";

export default function HeroOrbit() {
  return (
    <>
      <motion.div
        className="orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      <motion.div
        className="orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
      />
    </>
  );
}