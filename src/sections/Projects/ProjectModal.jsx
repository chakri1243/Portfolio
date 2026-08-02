import "./Projects.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
        />

        <h2>{project.title}</h2>

        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>

        {project.features && (
          <>
            <h3>Key Features</h3>

            <ul>
              {project.features.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.github} target="_blank">
            GitHub
          </a>

          <a href={project.live} target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}