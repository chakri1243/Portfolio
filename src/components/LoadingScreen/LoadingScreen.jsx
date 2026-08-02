import "./LoadingScreen.css";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-content">

        <div className="loading-logo">

          <div className="loading-circle">
            CK
          </div>

        </div>

        <h1>Gutta Chakrapani</h1>

        <p>AI • Machine Learning • Full Stack Developer</p>

        <div className="loading-bar">

          <div className="loading-progress"></div>

        </div>

        <span>Initializing Portfolio...</span>

      </div>
    </motion.div>
  );
}