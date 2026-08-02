import { motion } from "framer-motion";

export default function ProjectCard({ project }) {

  return (

    <motion.div
    

      className="project-card"

      whileHover={{

        y:-12,

        scale:1.02

      }}

    >

      <img
        src={project.image}
        alt={project.title}
      />

      <div className="project-info">

        <h3>{project.title}</h3>

        <p>{project.subtitle}</p>

        <div className="project-tech">

          {project.tech.slice(0,3).map((item)=>(

            <span key={item}>

              {item}

            </span>

          ))}

        </div>

      </div>

    </motion.div>

  );

}