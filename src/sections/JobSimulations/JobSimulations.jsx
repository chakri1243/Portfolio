import "./JobSimulations.css";
import JobSimulationCard from "./JobSimulationCard";
import { jobSimulations } from "./jobSimulationData";

export default function JobSimulations() {
  return (
    <section id="job-simulations" className="job-section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Job Simulations</h2>
          <p className="section-subtitle">
            Real-world virtual internship experiences completed through industry
            job simulation programs.
          </p>
        </div>

        <div className="job-grid">
          {jobSimulations.map((job) => (
            <JobSimulationCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}