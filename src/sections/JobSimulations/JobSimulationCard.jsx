import {
  FaBuilding,
  FaLaptopCode,
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function JobSimulationCard({ job }) {
  return (
    <div className="job-card">

      <div className="job-top">

        <img
          src={job.logo}
          alt={job.company}
          className="company-logo"
        />

        <div>

          <h3>{job.company}</h3>

          <h4>{job.role}</h4>

          <span>{job.platform}</span>

        </div>

      </div>

      <p className="job-description">
        {job.description}
      </p>

      <div className="job-info">

        <div>
          <FaBuilding />
          <span>{job.duration}</span>
        </div>

        <div>
          <FaLaptopCode />
          <span>{job.platform}</span>
        </div>

        <div>
          <FaAward />
          <span>Completed</span>
        </div>

      </div>

      <h4 className="skills-heading">
        Skills Gained
      </h4>

      <div className="skills-list">

        {job.skills.map((skill, index) => (
          <span
            className="skill-badge"
            key={index}
          >
            <FaCheckCircle />
            {skill}
          </span>
        ))}

      </div>

      <a
        href={job.certificate}
        target="_blank"
        rel="noreferrer"
        className="certificate-btn"
      >
        View Certificate

        <FaExternalLinkAlt />

      </a>

    </div>
  );
}