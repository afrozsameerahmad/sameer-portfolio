import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Star, Eye } from "lucide-react";

import salesImg from "../assets/sales_forecast.png";
import mlImg from "../assets/ml_deploy.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Sales Forecasting",
      desc: "ML-based sales prediction system using time series analysis with ARIMA and Facebook Prophet models",
      longDesc: "Analyzed historical sales data to identify trends and patterns, supporting data-driven business decisions through advanced forecasting techniques.",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/sales-forecast",
      live: "https://sales-forecast-demo.vercel.app",
      tags: ["Python", "Pandas", "Time Series", "ARIMA", "Prophet"],
      color: "#00ffd5",
      featured: true
    },
    {
      id: 2,
      title: "ML Model Deployment Platform",
      desc: "End-to-end machine learning deployment using Django REST API and React frontend",
      longDesc: "Built scalable ML infrastructure with Django backend, featuring model versioning, real-time predictions, and interactive visualization dashboard.",
      img: mlImg,
      github: "https://github.com/afrozsameerahmad/ml-deploy",
      live: "https://ml-deploy-demo.vercel.app",
      tags: ["Django", "React", "REST API", "Scikit-learn", "ML"],
      color: "#ff6b6b",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Data Analysis",
      desc: "Comprehensive EDA and feature engineering on restaurant dataset",
      longDesc: "Cleaned and analyzed restaurant data, handling missing values and performing advanced feature engineering to extract meaningful insights.",
      img: salesImg, // placeholder
      github: "#",
      live: "#",
      tags: ["Python", "Pandas", "NumPy", "EDA", "Visualization"],
      color: "#4ecdc4",
      featured: false
    }
  ];

  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "5", label: "Technologies" },
    { value: "3", label: "Live Deployments" }
  ];

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="projects-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-badge">
          <Code2 size={16} />
          <span>Portfolio</span>
        </div>
        <h1 className="projects-title">
          Featured <span className="title-highlight">Projects</span>
        </h1>
        <p className="projects-subtitle">
          Real-world data science and machine learning solutions
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="projects-stats"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
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
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            {project.featured && (
              <div className="featured-badge">
                <Star size={14} fill="currentColor" />
                <span>Featured</span>
              </div>
            )}

            {/* Project Image */}
            <div className="project-image-container">
              <img src={project.img} alt={project.title} className="project-image" />
              <div 
                className="image-overlay"
                style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }}
              ></div>
              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="project-long-desc">{project.longDesc}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="project-tag"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
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
              </div>
            </div>

            {/* Decoration */}
            <div 
              className="project-decoration"
              style={{ background: `${project.color}11` }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div 
        className="view-all-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/afrozsameerahmad" target="_blank" rel="noopener noreferrer" className="view-all-btn">
          <Github size={20} />
          <span>View All Projects on GitHub</span>
          <ExternalLink size={18} />
        </a>
      </motion.div>

      {/* Background */}
      <div className="projects-bg-decoration bg-dec-1"></div>
      <div className="projects-bg-decoration bg-dec-2"></div>
    </motion.section>
  );
}

export default Projects;