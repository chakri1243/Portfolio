import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  return (

    <motion.div
      className="featured-project"
      initial={{ opacity:0,y:50 }}
      whileInView={{ opacity:1,y:0 }}
      transition={{ duration:.8 }}
      viewport={{ once:true }}
    >

      <div className="featured-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="featured-content">

        <span className="featured-tag">

          ⭐ Featured Project

        </span>

        <h2>{project.title}</h2>

        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>

        <div className="feature-list">

          {project.features.map((item)=>(

            <div
              className="feature-item"
              key={item}
            >

              ✓ {item}

            </div>

          ))}

        </div>

        <div className="tech-list">

          {project.tech.map((tech)=>(

            <span key={tech}>{tech}</span>

          ))}

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

        </div>

      </div>

    </motion.div>

  );
}