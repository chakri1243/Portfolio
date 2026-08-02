import "./CurrentlyLearning.css";
import LearningCard from "./LearningCard";
import { learning } from "./learningData";

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      className="learning-section"
    >

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Currently Learning
          </h2>

          <p className="section-subtitle">
            Continuously improving my knowledge in modern AI,
            Machine Learning and Cloud technologies.
          </p>

        </div>

        <div className="learning-grid">

          {learning.map((item) => (
            <LearningCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}