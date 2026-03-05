import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Brain, Wrench, TrendingUp, Sparkles, Zap } from "lucide-react";

// FIXED:
// ✗ Removed: useMotionValue, useTransform, useSpring — imported but never used
// ✗ Removed: Skill percentage bars (Python 85%) — subjective & unprofessional
// ✗ Removed: skill.years labels — clutter
// ✗ Removed: "6 Skill Categories" stat — meaningless; replaced with "10+ Projects"
// ✗ Removed: category-corner + category-glow decorative divs — visual noise
// ✗ Removed: decoration-3 background blob — excess
// ✓ Skills shown as clean color-coded tags
// ✓ "EDA" expanded to full name
// ✓ Unified animation system via containerVariants

function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      id: 1,
      title: "Programming & Data Analysis",
      icon: Code2,
      color: "#00ffd5",
      gradient: "linear-gradient(135deg, #00ffd5, #00b8a0)",
      skills: ["Python", "SQL", "Pandas", "NumPy","OOP","Data Structures","API Integration"],
    },
    {
      id: 2,
      title: "Machine Learning & AI",
      icon: Brain,
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
      skills: ["Scikit-learn", "XGBoost", "TensorFlow","Deep Learning", "Time Series Analysis", "Neural Networks","Hyperparameter Tuning","Model Deployment"],
    },
    {
      id: 3,
      title: "Data Visualization",
      icon: TrendingUp,
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #44a3dd)",
      skills: ["Matplotlib", "Seaborn", "Plotly","Power BI","Microsoft Excel"],
    },
    {
      id: 4,
      title: "Tools & Platforms",
      icon: Wrench,
      color: "#ffd93d",
      gradient: "linear-gradient(135deg, #ffd93d, #f9ca24)",
      skills: ["Jupyter Notebook", "VS Code", "Git & GitHub","Docker","Streamlit","Linux"],
    },
    {
      id: 5,
      title: "Databases",
      icon: Database,
      color: "#a29bfe",
      gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      skills: ["MySQL", "MS SQL Server","PostgreSQL"],
    },
    {
      id: 6,
      title: "Data Science Techniques",
      icon: Sparkles,
      color: "#fd79a8",
      gradient: "linear-gradient(135deg, #fd79a8, #e84393)",
      skills: [
        "Exploratory Data Analysis",
        "Data Cleaning",
        "Feature Engineering",
        "Model Evaluation",
        "Statistical Analysis",
        "A/B Testing",
        "Cross Validation"
      ],
    },
    {
      id: 7,
      title: "MLOps & Deployment",
      icon: Sparkles,
      color: "#a29bfe",
      gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      skills: ["Streamlit", "Model Deployment","REST APIs","Docker","CI/CD Basics"],
    },
  ];

  const softSkills = [
  { name: "Communication & Presentation", icon: "💬" },
  { name: "Analytical Thinking", icon: "🧠" },
  { name: "Problem-Solving", icon: "🎯" },
  { name: "Leadership & Collaboration", icon: "🤝" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Attention to Detail", icon: "🔍" },
  { name: "Critical Thinking", icon: "🧩" },
  { name: "Data-Driven Decision Making", icon: "📊" },
  { name: "Research & Continuous Learning", icon: "📚" },
  { name: "Time Management", icon: "⏳" },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="skills-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="skills-header" variants={cardVariants}>
        <div className="header-badge">
          <Zap size={14} />
          <span>Expertise</span>
        </div>
        <h1 className="skills-title">
          Technical <span className="title-highlight">Arsenal</span>
        </h1>
        <p className="skills-subtitle">Comprehensive toolkit for data-driven solutions</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillCategories.map((category) => {
          const IconComponent = category.icon;
          const isHovered = hoveredCategory === category.id;

          return (
            <motion.div
              key={category.id}
              className={`skill-category${isHovered ? " hovered" : ""}`}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{
                    background: category.gradient,
                    boxShadow: `0 6px 20px ${category.color}40`,
                  }}
                >
                  <IconComponent size={22} strokeWidth={2} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {/* Clean skill tags — no fake percentage bars */}
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      borderColor: `${category.color}55`,
                      color: category.color,
                      background: `${category.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Professional Skills */}
      <motion.div
        className="soft-skills-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <h2 className="soft-skills-title">
          <span className="title-icon">✨</span>
          Professional Skills
        </h2>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="soft-skill-card"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07, ease: "backOut" }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.18 } }}
            >
              <span className="soft-skill-icon">{skill.icon}</span>
              <span className="soft-skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="skills-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="stat-item">
          <div className="stat-value">20+</div>
          <div className="stat-label">Technical Skills</div>
        </div>
        <div className="stat-divider" />
        {/* FIXED: Was "6 Skill Categories" — meaningless. Now shows Projects. */}
        <div className="stat-item">
          <div className="stat-value">10+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-value">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </motion.div>

      {/* Background — reduced from 3 to 2 blobs */}
      <div className="skills-bg-decoration decoration-1" />
      <div className="skills-bg-decoration decoration-2" />
    </motion.section>
  );
}

export default Skills;
