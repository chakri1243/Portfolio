import "./Skills.css";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Generative AI",
      "NLP",
      "Prompt Engineering",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Flask",
      "Tailwind CSS",
      "Streamlit",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      "Excel",
      "Power BI",
      "Tableau",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <p>TECH STACK</p>
        <h2>Skills & Technologies</h2>
      </div>

      {skillGroups.map((group, index) => (
        <div className="skill-group" key={index}>

          <h3>{group.title}</h3>

          <div className="skills-grid">

            {group.skills.map((skill) => (
              <SkillCard
                key={skill}
                title={skill}
              />
            ))}

          </div>

        </div>
      ))}

    </section>
    
  );
}