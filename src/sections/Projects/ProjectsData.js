import resume1 from "../../assets/projects/resume-analyzer/1.png";
import resume2 from "../../assets/projects/resume-analyzer/2.png";
import resume3 from "../../assets/projects/resume-analyzer/3.png";
import resume4 from "../../assets/projects/resume-analyzer/4.png";

import portfolio1 from "../../assets/projects/portfolio/1.png";
import portfolio2 from "../../assets/projects/portfolio/2.png";
import portfolio3 from "../../assets/projects/portfolio/3.png";
import assistant1 from "../../assets/projects/ai-assistant/1.png";
const featuredProject = {
  title: "AI Resume Analyzer",

  subtitle: "AI Powered ATS Resume Analysis Platform",

  description:
    "An intelligent web application that analyzes resumes, calculates ATS score, performs Job Description matching, and provides AI-powered recommendations to improve resumes.",

  // Cover Image
  image: resume1,

  // Gallery Images
  images: [
    resume1,
    resume2,
    resume3,
    resume4,
  ],

  features: [
    "ATS Score Analysis",
    "Resume Parsing",
    "Job Description Matching",
    "AI Recommendations",
    "Grammar Suggestions",
    "PDF Report Generation",
  ],

  tech: [
    "Python",
    "Flask",
    "Machine Learning",
    "NLP",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
  ],

  github: "https://github.com/chakri1243/AI_Resume_Analyzer",

  live: "#",
};

const projects = [
  {
    title: "Personal AI Assistant",

    subtitle: "LLM Based Assistant",

    // Keep your existing image until you add screenshots
    image: [
      assistant1,
    ],

    description:
      "A personal AI assistant built using modern LLM technologies capable of answering questions and assisting users.",

    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "OpenAI",
    ],

    github: "#",

    live: "#",
  },

  {
    title: "Developer Portfolio",

    subtitle: "React Portfolio",

    // Cover Image
    image: portfolio1,

    // Gallery Images
    images: [
      portfolio1,
      portfolio2,
      portfolio3,
    ],

    description:
      "Modern responsive portfolio showcasing AI projects, certifications, and technical skills.",

    tech: [
      "React",
      "CSS",
      "Framer Motion",
    ],

    github: "#",

    live: "#",
  },
];

export { featuredProject, projects };