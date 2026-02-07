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
  ChevronRight
} from "lucide-react";

function About() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { icon: Briefcase, label: "Internships", value: "3", color: "#00ffd5" },
    { icon: Code, label: "Projects", value: "15+", color: "#ff6b6b" },
    { icon: Database, label: "Technologies", value: "20+", color: "#4ecdc4" },
    { icon: Award, label: "Certifications", value: "5+", color: "#ffd93d" }
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      field: "Data Science & AI",
      institution: "BBD University",
      location: "Lucknow, Uttar Pradesh",
      period: "July 2025 - Pursuing",
      status: "current"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Pinnacle Degree College, Hyderabad",
      affiliated: "Affiliated to OSMANIA UNIVERSITY",
      period: "July 2022 - June 2025",
      status: "completed"
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Mia Saheb Inter College, Uttar Pradesh",
      board: "UP State Board",
      percentage: "66%",
      period: "Aug 2020 - June 2022",
      status: "completed"
    }
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
        "Model Evaluation (MAE, RMSE, MAPE)"
      ]
    },
    {
      category: "Machine Learning",
      items: [
        "Supervised Learning",
        "Time Series Forecasting (ARIMA, Prophet)",
        "Regression & Classification",
        "XGBoost & Ensemble Methods",
        "Neural Networks (TensorFlow)",
        "Model Deployment"
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "SQL (MySQL, MS SQL Server)",
        "Jupyter Notebook & VS Code",
        "Git & GitHub",
        "Matplotlib & Seaborn",
        "Microsoft Excel (Advanced)"
      ]
    }
  ];

  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <TrendingUp size={16} />
            <span>Aspiring Data Scientist</span>
          </motion.div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Sameer Ahmad</span>
          </h1>
          
          <p className="hero-subtitle">
            First-year MCA student specializing in Data Science and AI, passionate about 
            transforming data into actionable insights through machine learning and analytics.
          </p>

          {/* Contact Info */}
          <div className="hero-contact">
            <a href="tel:+917238982622" className="contact-item">
              <Phone size={16} />
              <span>+91-7238982622</span>
            </a>
            <a href="mailto:sameerahmad723898@gmail.com" className="contact-item">
              <Mail size={16} />
              <span>sameerahmad723898@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/sameer-ahmad-a65325335" target="_blank" rel="noopener noreferrer" className="contact-item">
              <Linkedin size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Lucknow, India</span>
            </div>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <motion.div 
          className="hero-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-container">
            <div className="image-placeholder">
              <span className="placeholder-text">SA</span>
            </div>
            <div className="image-decoration decoration-1"></div>
            <div className="image-decoration decoration-2"></div>
            <div className="image-decoration decoration-3"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="stats-grid"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div 
                className="stat-icon"
                style={{ 
                  background: `${stat.color}22`,
                  color: stat.color 
                }}
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

      {/* Tabs Navigation */}
      <div className="about-tabs">
        {["overview", "education", "expertise"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            className="overview-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overview-grid">
              <div className="overview-text">
                <h2 className="section-title">Professional Summary</h2>
                <div className="text-content">
                  <p>
                    First-year MCA student with a strong foundation in <strong>Python</strong> and 
                    data science tools including <strong>Pandas, NumPy, and Scikit-learn</strong>. 
                    Actively learning machine learning concepts, data preprocessing, feature engineering, 
                    and model development.
                  </p>
                  <p>
                    Experienced in <strong>exploratory data analysis (EDA)</strong>, data visualization 
                    using <strong>Matplotlib and Seaborn</strong>, and basic model evaluation. Passionate 
                    about building real-world, data-driven AI solutions through hands-on practice and 
                    continuous learning.
                  </p>
                  <p>
                    Completed internships at <strong>Minematics</strong>, <strong>Flora Edze</strong>, 
                    and <strong>Cognifyz Technologies</strong>, working on real datasets including 
                    e-commerce sales forecasting, restaurant data analysis, and machine learning 
                    model development.
                  </p>
                </div>

                <div className="highlights-section">
                  <h3>Key Highlights</h3>
                  <div className="highlights-grid">
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Strong foundation in Python programming and data analysis</span>
                    </div>
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Hands-on experience with real-world datasets</span>
                    </div>
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Proficient in EDA and data visualization</span>
                    </div>
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Experience with ML model development and evaluation</span>
                    </div>
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Strong analytical thinking and problem-solving skills</span>
                    </div>
                    <div className="highlight-item">
                      <ChevronRight size={16} />
                      <span>Continuous learner with adaptability mindset</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overview-sidebar">
                <div className="sidebar-card">
                  <h3>Quick Facts</h3>
                  <div className="fact-list">
                    <div className="fact-item">
                      <span className="fact-label">Current Role</span>
                      <span className="fact-value">MCA Student</span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-label">Specialization</span>
                      <span className="fact-value">Data Science & AI</span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-label">Location</span>
                      <span className="fact-value">Lucknow, UP, India</span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-label">Experience</span>
                      <span className="fact-value">3 Internships</span>
                    </div>
                    <div className="fact-item">
                      <span className="fact-label">Languages</span>
                      <span className="fact-value">Python, SQL</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="download-resume-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <motion.div
            className="education-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Educational Background</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={`education-item ${edu.status}`}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
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

        {/* Expertise Tab */}
        {activeTab === "expertise" && (
          <motion.div
            className="expertise-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Areas of Expertise</h2>
            <div className="expertise-grid">
              {expertise.map((area, index) => (
                <motion.div
                  key={index}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="expertise-category">{area.category}</h3>
                  <ul className="expertise-list">
                    {area.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <span className="expertise-bullet"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Background Decorations */}
      <div className="about-bg-decoration bg-dec-1"></div>
      <div className="about-bg-decoration bg-dec-2"></div>
    </motion.section>
  );
}

export default About;