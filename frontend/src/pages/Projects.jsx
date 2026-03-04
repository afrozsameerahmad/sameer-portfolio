import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Star, Eye } from "lucide-react";

import salesImg from "../assets/sales_forecast.png";
import mlImg from "../assets/ml_deploy.png";

// FIXED:
// ✗ Removed: github: "#" and live: "#" on Restaurant project — broken links look bad
//   → GitHub now links to the actual profile; live set to null so no broken demo btn
// ✗ Removed: stats "5 Technologies" — wrong (you use 10+); replaced with "3 Internships"
// ✓ project-decoration divs kept (they're CSS-only, no perf cost)

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Sales Forecasting",
      desc: "ML-based sales prediction using time series analysis with ARIMA and Facebook Prophet models.",
      longDesc:
        "Analyzed historical sales data to identify trends and patterns, supporting data-driven business decisions through advanced forecasting techniques.",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/sales-forecast",
      live: null, // FIXED: was a fake demo URL
      tags: ["Python", "Pandas", "Time Series", "ARIMA", "Prophet"],
      color: "#00ffd5",
      featured: true,
    },
    {
      id: 2,
      title: "ML Model Deployment Platform",
      desc: "End-to-end machine learning deployment using Django REST API and React frontend.",
      longDesc:
        "Built scalable ML infrastructure with Django backend, featuring model versioning, real-time predictions, and an interactive visualization dashboard.",
      img: mlImg,
      github: "https://github.com/afrozsameerahmad/ml-deploy",
      live: null, // FIXED: was a fake demo URL
      tags: ["Django", "React", "REST API", "Scikit-learn", "ML"],
      color: "#ff6b6b",
      featured: true,
    },
    {
      id: 3,
      title: "Restaurant Data Analysis",
      desc: "Comprehensive EDA and feature engineering on a restaurant dataset from Cognifyz internship.",
      longDesc:
        "Cleaned and analyzed restaurant data, handled missing values, and performed advanced feature engineering to extract meaningful business insights.",
      img: salesImg,
      // FIXED: Was "#" — now links to GitHub profile since individual repo isn't public
      github: "https://github.com/afrozsameerahmad",
      live: null, // FIXED: Was "#" — no live demo exists, remove it cleanly
      tags: ["Python", "Pandas", "NumPy", "EDA", "Visualization"],
      color: "#4ecdc4",
      featured: false,
    },
  ];

  // FIXED: Was "5 Technologies" (wrong) → now "3 Internships" (accurate)
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "3", label: "Internships" },
    { value: "20+", label: "Skills Used" },
  ];

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="projects-header"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-badge">
          <Code2 size={16} />
          <span>Portfolio</span>
        </div>
        <h1 className="projects-title">
          Featured <span className="title-highlight">Projects</span>
        </h1>
        <p className="projects-subtitle">Real-world data science and machine learning solutions</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="projects-stats"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
          >
            {project.featured && (
              <div className="featured-badge">
                <Star size={14} fill="currentColor" />
                <span>Featured</span>
              </div>
            )}

            {/* Image */}
            <div className="project-image-container">
              <img src={project.img} alt={project.title} className="project-image" />
              <div
                className="image-overlay"
                style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }}
              />
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn"
                  title="View on GitHub"
                >
                  <Github size={20} />
                </a>
                {/* FIXED: Only show live link if it actually exists */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="project-long-desc">{project.longDesc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                {/* FIXED: Live Demo button only shown when link exists */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    style={{ background: `${project.color}22`, color: project.color }}
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div
              className="project-decoration"
              style={{ background: `${project.color}11` }}
            />
          </motion.div>
        ))}
      </div>

      {/* View All */}
      <motion.div
        className="view-all-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/afrozsameerahmad"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          <Github size={20} />
          <span>View All Projects on GitHub</span>
          <ExternalLink size={18} />
        </a>
      </motion.div>

      <div className="projects-bg-decoration bg-dec-1" />
      <div className="projects-bg-decoration bg-dec-2" />
    </motion.section>
  );
}

export default Projects;
