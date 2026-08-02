import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

export default function ResumeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0f172a] rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-white text-2xl"
            >
              <FaTimes />
            </button>

            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full"
            />

            <a
              href="/resume.pdf"
              download
              className="absolute bottom-5 right-5 bg-blue-600 px-5 py-3 rounded-xl flex items-center gap-2"
            >
              <FaDownload />
              Download
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}