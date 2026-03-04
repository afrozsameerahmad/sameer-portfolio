import { motion } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Download,
  TrendingUp,
  Code,
  Database,
  ChevronRight,
} from "lucide-react";

// FIXED:
// ✗ Removed: image-placeholder showing "SA" initials — profile.png exists, use it!
// ✗ Removed: image-decoration rings (decoration-1/2/3) — too much visual noise
// ✓ Real profile image now shown in About hero
// ✓ Animation pattern simplified — no conflicting initial/animate on nested elements

import profileImg from "../assets/profile.png";

function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { icon: Briefcase, label: "Internships", value: "3", color: "#00ffd5" },
    { icon: Code, label: "Projects", value: "10+", color: "#ff6b6b" },
    { icon: Database, label: "Technologies", value: "20+", color: "#4ecdc4" },
    { icon: Award, label: "Certifications", value: "4+", color: "#ffd93d" },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      field: "Data Science & AI",
      institution: "BBD University",
      location: "Lucknow, Uttar Pradesh",
      period: "July 2025 – Pursuing",
      status: "current",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Pinnacle Degree College, Hyderabad",
      affiliated: "Affiliated to Osmania University",
      period: "July 2022 – June 2025",
      status: "completed",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Mia Saheb Inter College, Uttar Pradesh",
      board: "UP State Board",
      percentage: "66%",
      period: "Aug 2020 – June 2022",
      status: "completed",
    },
  ];

  const expertise = [
    {
      category: "Core Strengths",
      items: [
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Preprocessing",
        "Feature Engineering",
        "Statistical Analysis",
        "Predictive Modeling",
        "Model Evaluation (MAE, RMSE, MAPE)",
      ],
    },
    {
      category: "Machine Learning",
      items: [
        "Supervised Learning",
        "Time Series Forecasting (ARIMA, Prophet)",
        "Regression & Classification",
        "XGBoost & Ensemble Methods",
        "Neural Networks (TensorFlow)",
        "Model Deployment",
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "SQL (MySQL, MS SQL Server)",
        "Jupyter Notebook & VS Code",
        "Git & GitHub",
        "Matplotlib & Seaborn",
        "Microsoft Excel (Advanced)",
      ],
    },
  ];

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <TrendingUp size={16} />
            <span>Aspiring Data Scientist</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Sameer Ahmad</span>
          </h1>

          <p className="hero-subtitle">
            First-year MCA student specializing in Data Science and AI, passionate about
            transforming data into actionable insights through machine learning and analytics.
          </p>

          <div className="hero-contact">
            <a href="tel:+917238982622" className="contact-item">
              <Phone size={16} />
              <span>+91-7238982622</span>
            </a>
            <a href="mailto:sameerahmad723898@gmail.com" className="contact-item">
              <Mail size={16} />
              <span>sameerahmad723898@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/sameer-ahmad-a65325335"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Lucknow, India</span>
            </div>
          </div>
        </motion.div>

        {/* FIXED: Use real profile.png — not "SA" initials placeholder */}
        <motion.div
          className="hero-image"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="image-container">
            <div className="image-placeholder">
              <img
                src={profileImg}
                alt="Sameer Ahmad"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="stats-grid"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div
                className="stat-icon"
                style={{ background: `${stat.color}22`, color: stat.color }}
              >
                <IconComponent size={24} strokeWidth={2} />
              </div>
              <div className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tabs */}
      <div className="about-tabs">
        {["overview", "education", "expertise"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "overview" && (
          <motion.div
            className="overview-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="overview-grid">
              <div className="overview-text">
                <h2 className="section-title">Professional Summary</h2>
                <div className="text-content">
                  <p>
                    First-year MCA student with a strong foundation in <strong>Python</strong> and
                    data science tools including <strong>Pandas, NumPy, and Scikit-learn</strong>.
                    Actively learning machine learning concepts, data preprocessing, feature
                    engineering, and model development.
                  </p>
                  <p>
                    Experienced in <strong>exploratory data analysis (EDA)</strong>, data
                    visualization using <strong>Matplotlib and Seaborn</strong>, and model
                    evaluation. Passionate about building real-world, data-driven AI solutions
                    through hands-on practice and continuous learning.
                  </p>
                  <p>
                    Completed internships at <strong>Minematics</strong>,{" "}
                    <strong>Flora Edze</strong>, and <strong>Cognifyz Technologies</strong>, working
                    on real datasets including e-commerce sales forecasting, restaurant data
                    analysis, and machine learning model development.
                  </p>
                </div>

                <div className="highlights-section">
                  <h3>Key Highlights</h3>
                  <div className="highlights-grid">
                    {[
                      "Strong foundation in Python programming and data analysis",
                      "Hands-on experience with real-world datasets",
                      "Proficient in EDA and data visualization",
                      "Experience with ML model development and evaluation",
                      "Strong analytical thinking and problem-solving skills",
                      "Continuous learner with adaptability mindset",
                    ].map((highlight) => (
                      <div key={highlight} className="highlight-item">
                        <ChevronRight size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overview-sidebar">
                <div className="sidebar-card">
                  <h3>Quick Facts</h3>
                  <div className="fact-list">
                    {[
                      { label: "Current Role", value: "MCA Student" },
                      { label: "Specialization", value: "Data Science & AI" },
                      { label: "Location", value: "Lucknow, UP, India" },
                      { label: "Experience", value: "3 Internships" },
                      { label: "Languages", value: "Python, SQL" },
                    ].map((fact) => (
                      <div key={fact.label} className="fact-item">
                        <span className="fact-label">{fact.label}</span>
                        <span className="fact-value">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="download-resume-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "education" && (
          <motion.div
            className="education-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title">Educational Background</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`education-item ${edu.status}`}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="education-marker">
                    <GraduationCap size={20} />
                  </div>
                  <div className="education-content-box">
                    <div className="education-header">
                      <div>
                        <h3 className="education-degree">{edu.degree}</h3>
                        {edu.field && <span className="education-field">{edu.field}</span>}
                      </div>
                      {edu.status === "current" && (
                        <span className="current-badge">Current</span>
                      )}
                    </div>
                    <p className="education-institution">{edu.institution}</p>
                    {edu.affiliated && (
                      <p className="education-affiliated">{edu.affiliated}</p>
                    )}
                    {edu.board && <p className="education-board">{edu.board}</p>}
                    <div className="education-meta">
                      <span className="education-period">{edu.period}</span>
                      {edu.percentage && (
                        <span className="education-percentage">
                          Aggregate: {edu.percentage}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "expertise" && (
          <motion.div
            className="expertise-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="section-title">Areas of Expertise</h2>
            <div className="expertise-grid">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.category}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="expertise-category">{area.category}</h3>
                  <ul className="expertise-list">
                    {area.items.map((item) => (
                      <li key={item}>
                        <span className="expertise-bullet" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="about-bg-decoration bg-dec-1" />
      <div className="about-bg-decoration bg-dec-2" />
    </motion.section>
  );
}

export default About;
