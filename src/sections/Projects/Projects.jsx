import { useState } from "react";

import "./Projects.css";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

import {
  featuredProject,
  projects,
} from "./ProjectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
   
    <section className="projects" id="projects">

      <div className="section-title">

        <p>FEATURED WORK</p>

        <h2>Projects</h2>

      </div>

      <div
        onClick={() => setSelectedProject(featuredProject)}
      >
        <FeaturedProject project={featuredProject} />
      </div>

      <h3 className="other-title">
        Other Projects
      </h3>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            key={project.title}
            onClick={() =>
              setSelectedProject(project)
            }
          >
            <ProjectCard
              project={project}
            />
          </div>

        ))}

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>
    
  );
}