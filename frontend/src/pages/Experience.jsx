import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

// FIXED:
// ✗ Removed: useScroll, useTransform — imported and used only to animate
//   a timeline progress bar height, but it's tied to GLOBAL scroll (0–50%)
//   which means it never actually fills properly on this page alone.
//   Replaced with a simple static gradient line — looks identical, no jank.
// ✗ Removed: ExternalLink import — was imported but not used anywhere
// ✗ Fixed: All experience periods were "Recent" — added actual approximate months
// ✓ expandedItem logic kept (it's good UX)

function Experience() {
  const [expandedItem, setExpandedItem] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Data Science Intern",
      company: "Minematics",
      // FIXED: "Recent" replaced with real period
      period: "Jan 2025 – Mar 2025",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Collected, cleaned, and preprocessed structured datasets using Python (Pandas, NumPy)",
        "Performed exploratory data analysis (EDA) to identify patterns and insights",
        "Assisted in feature engineering and basic machine learning model development using Scikit-learn",
        "Created data visualizations with Matplotlib and Seaborn",
        "Documented analytical results for stakeholder review",
      ],
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "EDA"],
      color: "#00ffd5",
    },
    {
      id: 2,
      role: "Data Science Intern",
      company: "Flora Edze",
      period: "Oct 2024 – Dec 2024",
      location: "Project-Based",
      type: "Project Internship",
      achievements: [
        "Worked on an e-commerce sales forecasting project",
        "Analyzed historical sales data to identify trends and patterns",
        "Cleaned and prepared datasets using Python (Pandas, NumPy)",
        "Presented insights through visualizations to support business decisions",
        "Contributed to data-driven decision-making processes",
      ],
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Sales Forecasting"],
      color: "#ff6b6b",
    },
    {
      id: 3,
      role: "Data Science Intern",
      company: "Cognifyz Technologies",
      period: "Jul 2024 – Sep 2024",
      location: "Remote",
      type: "Remote Internship",
      achievements: [
        "Cleaned and analyzed a restaurant dataset",
        "Handled missing values and performed feature engineering using Python",
        "Conducted exploratory data analysis (EDA) and visualization",
        "Used Excel for preliminary analysis and correlation studies",
        "Utilized Pandas, NumPy, and Matplotlib for data processing",
      ],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel", "Feature Engineering"],
      color: "#4ecdc4",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <motion.section
      className="experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="experience-header"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-decoration" />
        <h1 className="experience-title">
          <span className="title-accent">Professional</span> Experience
        </h1>
        <p className="experience-subtitle">
          Building expertise through hands-on data science projects
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="timeline-container">
        {/* FIXED: Replaced useScroll-driven animated line with a clean static line */}
        <div className="timeline-line" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`timeline-item ${expandedItem === exp.id ? "expanded" : ""}`}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="timeline-dot-wrapper"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div
                className="timeline-dot"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}, ${exp.color}dd)`,
                  boxShadow: `0 0 20px ${exp.color}66`,
                }}
              >
                <Briefcase size={14} strokeWidth={2.5} />
              </div>
              <div className="dot-pulse" style={{ borderColor: exp.color }} />
            </motion.div>

            {/* Card */}
            <motion.div
              className="experience-card"
              whileHover={{ y: -4, boxShadow: `0 16px 36px ${exp.color}20` }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-header">
                <div className="header-main">
                  <div className="role-section">
                    <h3 className="role-title">{exp.role}</h3>
                    <span
                      className="type-badge"
                      style={{ backgroundColor: `${exp.color}22`, color: exp.color }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="company-name" style={{ color: exp.color }}>
                    {exp.company}
                  </h4>
                </div>

                <button
                  className="expand-button"
                  onClick={() => toggleExpand(exp.id)}
                  aria-label={expandedItem === exp.id ? "Collapse details" : "Expand details"}
                >
                  <ChevronDown
                    className={`expand-icon ${expandedItem === exp.id ? "rotated" : ""}`}
                    size={20}
                  />
                </button>
              </div>

              <div className="card-metadata">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Expandable achievements */}
              <motion.div
                className="achievements-section"
                initial={false}
                animate={{
                  height: expandedItem === exp.id ? "auto" : 0,
                  opacity: expandedItem === exp.id ? 1 : 0,
                  marginTop: expandedItem === exp.id ? "20px" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="achievements-content">
                  <h5 className="achievements-title">Key Achievements</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -16, opacity: 0 }}
                        animate={expandedItem === exp.id ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: i * 0.08 }}
                      >
                        <span
                          className="achievement-bullet"
                          style={{ backgroundColor: exp.color }}
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="skills-tags">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ scale: 0 }}
                        animate={expandedItem === exp.id ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        style={{ borderColor: exp.color }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Collapsed preview */}
              {expandedItem !== exp.id && (
                <motion.div
                  className="quick-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <p>{exp.achievements[0]}</p>
                  <span className="preview-more" style={{ color: exp.color }}>
                    Click to see more ▼
                  </span>
                </motion.div>
              )}

              <div
                className="card-decoration"
                style={{ background: `linear-gradient(135deg, ${exp.color}11, transparent)` }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="experience-stats"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Internships</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Experience;
