import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://sameer-portfolio-backend.onrender.com/api/projects/")


      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => console.log("Backend not connected"));
  }, []);

  return (
    <motion.section
      className="section projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>My Projects</h2>

      <div className="projects-grid">

        {projects.length === 0 && (
          <p style={{ textAlign: "center" }}>
            Loading projects...
          </p>
        )}

        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="project-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3>{p.title}</h3>

            <p className="project-desc">
              {p.description}
            </p>

            <div className="project-tech">
              {p.tech_stack.split(",").map((t, i) => (
                <span key={i}>{t.trim()}</span>
              ))}
            </div>

            <div className="project-links">
              {p.github_link && (
                <a
                  href={p.github_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {p.live_link && (
                <a
                  href={p.live_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}

export default Projects;
