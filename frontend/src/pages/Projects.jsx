import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Star, Eye, TrendingUp, Activity, Globe } from "lucide-react";

import salesImg from "../assets/sales_forecast.png";
import mlImg from "../assets/ml_deploy.png";
// Use mlImg as portfolio thumbnail until you add a real screenshot
// To use a real screenshot: add portfolio_preview.png to src/assets/ and import it here
const portfolioImg = mlImg;

/*
 ═══════════════════════════════════════════════════════════
  VERIFIED REPOS — github.com/afrozsameerahmad
 ═══════════════════════════════════════════════════════════
  ✅ FloraEdze-sales-forecasting-project  → Jupyter Notebook (no live)
  ✅ flora-edge-app                        → Streamlit app (LIVE)
  ✅ Cognifyz_Internship_tasks             → HTML + Jupyter
  ✅ Fitabase-Fitness-Sleep-Analysis       → Jupyter Notebook
  ✅ sameer-portfolio                      → React + Python (Vercel LIVE)
 ═══════════════════════════════════════════════════════════
  ⚠️  REPLACE the flora-edge-app live link below with your
      actual Streamlit URL once you have it, e.g.:
      "https://flora-edge-app.streamlit.app"
 ═══════════════════════════════════════════════════════════
*/

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sales Forecasting App",
      desc: "Interactive Streamlit web app that predicts future e-commerce sales — built and deployed live as part of the Flora Edze internship.",
      longDesc:
        "Users can input parameters and get real-time sales forecasts powered by ARIMA and Random Forest models. Includes data visualizations, trend analysis, and a clean UI for business decision-making.",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/flora-edge-app",
      live: "https://floraedze-sales-forecasting-project-9wphj6fstwtquwh5sdltsn.streamlit.app/",
      tags: ["Python", "Streamlit", "ARIMA", "Random Forest", "Pandas", "Deployed"],
      color: "#00ffd5",
      featured: true,
      lang: "Python · Streamlit",
      org: "Flora Edze Internship",
      liveLabel: "Live App",
    },
    {
      id: 2,
      title: "E-Commerce Sales Forecasting",
      desc: "Beginner ML project predicting future sales from historical data using ARIMA and Random Forest — the analysis notebook behind the Streamlit app.",
      longDesc:
        "Covers data cleaning, exploratory analysis, time series decomposition, and model evaluation to generate actionable sales trend insights.",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/FloraEdze-sales-forecasting-project",
      live: null,
      tags: ["Python", "ARIMA", "Random Forest", "Pandas", "Jupyter Notebook"],
      color: "#f97316",
      featured: false,
      lang: "Jupyter Notebook",
      org: "Flora Edze Internship",
      liveLabel: null,
    },
    {
      id: 3,
      title: "Cognifyz Internship Tasks",
      desc: "Complete data science task set from Cognifyz Technologies — restaurant data EDA, geospatial analysis, cuisine analysis, and feature engineering.",
      longDesc:
        "Multi-level project covering data cleaning, missing value handling, cuisine distribution, location-based restaurant insights, and advanced feature engineering on real-world datasets.",
      img: mlImg,
      github: "https://github.com/afrozsameerahmad/Cognifyz_Internship_tasks",
      live: null,
      tags: ["Python", "Pandas", "NumPy", "EDA", "Feature Engineering", "Visualization"],
      color: "#a78bfa",
      featured: true,
      lang: "HTML / Jupyter Notebook",
      org: "Cognifyz Technologies",
      liveLabel: null,
    },
    {
      id: 4,
      title: "Fitabase Fitness & Sleep Analysis",
      desc: "Analyzes Fitbit daily activity and sleep data to understand physical activity patterns, sleep quality, and health trends.",
      longDesc:
        "In-depth EDA covering steps, calories, active minutes, distance, and sleep patterns — with rich visualizations to surface meaningful health insights from wearable tracker data.",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/Fitabase-Fitness-Sleep-Analysis",
      live: null,
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Health Analytics"],
      color: "#38bdf8",
      featured: false,
      lang: "Jupyter Notebook",
      org: "Personal Project",
      liveLabel: null,
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      desc: "Fully responsive, animated personal portfolio site built with React and a Python backend — live on Vercel.",
      longDesc:
        "Features smooth Framer Motion animations, dark-themed UI, certifications page, projects showcase, and a working contact form powered by a Python backend.",
      img: portfolioImg,
      github: "https://github.com/afrozsameerahmad/sameer-portfolio",
      live: "https://sameer-portfolio-eight-orcin.vercel.app",
      tags: ["React", "Python", "JavaScript", "CSS", "Framer Motion", "Vercel"],
      color: "#fbbf24",
      featured: false,
      lang: "JavaScript + Python",
      org: "Personal Project",
      liveLabel: "Live Site",
    },
  ];

  const stats = [
    { value: "5",   label: "Projects",       icon: <Code2 size={18} /> },
    { value: "2",   label: "Live Deployments", icon: <Globe size={18} /> },
    { value: "20+", label: "Skills Used",     icon: <Activity size={18} /> },
  ];

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── Header ── */}
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
        <p className="projects-subtitle">
          Real-world data science, machine learning, and full-stack projects — including 2 live deployments
        </p>
      </motion.div>

      {/* ── Stats ── */}
      <motion.div
        className="projects-stats"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* ── Projects Grid ── */}
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
                <Star size={13} fill="currentColor" />
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

              {/* Live badge on image if deployed */}
              {project.live && (
                <div className="project-live-badge" style={{ color: project.color, borderColor: `${project.color}55` }}>
                  <span className="live-dot" style={{ background: project.color }} />
                  Live
                </div>
              )}

              {/* Org tag */}
              <div
                className="project-org-tag"
                style={{
                  color: project.color,
                  borderColor: `${project.color}44`,
                  background: "rgba(0,0,0,0.78)",
                }}
              >
                {project.org}
              </div>

              {/* Hover action buttons */}
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
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn"
                    title={project.liveLabel || "Live Demo"}
                  >
                    <Globe size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              {/* Language pill */}
              <div className="project-lang">
                <span className="lang-dot" style={{ background: project.color }} />
                {project.lang}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="project-long-desc">{project.longDesc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="project-tag"
                    style={{
                      borderColor: `${project.color}55`,
                      color: project.color,
                      background: `${project.color}0d`,
                    }}
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
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    style={{ background: `${project.color}22`, color: project.color, borderColor: `${project.color}44` }}
                  >
                    <Eye size={16} />
                    <span>{project.liveLabel || "Live Demo"}</span>
                  </a>
                )}
              </div>
            </div>

            <div
              className="project-decoration"
              style={{ background: `${project.color}0d` }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── View All on GitHub ── */}
      <motion.div
        className="view-all-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/afrozsameerahmad?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          <Github size={20} />
          <span>View All Repositories on GitHub</span>
          <ExternalLink size={16} />
        </a>
      </motion.div>

      <div className="projects-bg-decoration bg-dec-1" />
      <div className="projects-bg-decoration bg-dec-2" />
    </motion.section>
  );
}

export default Projects;