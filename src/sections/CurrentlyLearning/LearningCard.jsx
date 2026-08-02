export default function LearningCard({ item }) {
  return (
    <div className="learning-card">

      <div className="learning-top">
        <h3>{item.title}</h3>
        <span>{item.progress}%</span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${item.progress}%`,
            background: item.color
          }}
        />

      </div>

    </div>
  );
}