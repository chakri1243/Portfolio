import { useEffect, useState } from "react";
import "./Github.css";

export default function Github() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/chakri1243")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <p>Loading GitHub...</p>;

  return (
    <section id="github" className="github-section">
      <h2>GitHub Profile</h2>

      <div className="github-card">
        <img src={user.avatar_url} alt={user.login} />

        <h3>{user.name}</h3>

        <p>@{user.login}</p>

        <div className="stats">
          <div>
            <h4>{user.public_repos}</h4>
            <span>Repositories</span>
          </div>

          <div>
            <h4>{user.followers}</h4>
            <span>Followers</span>
          </div>

          <div>
            <h4>{user.following}</h4>
            <span>Following</span>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}