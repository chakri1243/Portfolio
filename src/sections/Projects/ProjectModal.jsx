import { useState, useEffect } from "react";
import "./Projects.css";

export default function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  if (!project) return null;

  const images =
    project.images && project.images.length
      ? project.images
      : [project.image];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

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
          src={images[currentImage]}
          alt={project.title}
          className="project-gallery-image"
        />

        {images.length > 1 && (
          <div className="gallery-controls">

            <button onClick={prevImage}>
              ◀
            </button>

            <span>
              {currentImage + 1} / {images.length}
            </span>

            <button onClick={nextImage}>
              ▶
            </button>

          </div>
        )}

        {images.length > 1 && (
          <div className="gallery-thumbnails">

            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setCurrentImage(index)}
                className={
                  currentImage === index
                    ? "active-thumb"
                    : ""
                }
              />
            ))}

          </div>
        )}

        <h2>{project.title}</h2>

        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>

        {project.features && (
          <>
            <h3>Key Features</h3>

            <ul>
              {project.features.map((item) => (
                <li key={item}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
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
        </div>
      </div>
    </div>
  );
}