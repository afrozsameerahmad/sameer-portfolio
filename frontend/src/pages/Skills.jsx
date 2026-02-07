import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Brain, Wrench, TrendingUp, Sparkles, Zap } from "lucide-react";

function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Skills organized by category with proficiency levels
  const skillCategories = [
    {
      id: 1,
      title: "Programming & Data Analysis",
      icon: Code2,
      color: "#00ffd5",
      gradient: "linear-gradient(135deg, #00ffd5, #00b8a0)",
      skills: [
        { name: "Python", level: 85, years: "2+" },
        { name: "SQL", level: 75, years: "1+" },
        { name: "Pandas", level: 80, years: "2+" },
        { name: "NumPy", level: 80, years: "2+" },
      ]
    },
    {
      id: 2,
      title: "Machine Learning & AI",
      icon: Brain,
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a6f)",
      skills: [
        { name: "Scikit-learn", level: 75, years: "1+" },
        { name: "XGBoost", level: 65, years: "1+" },
        { name: "TensorFlow", level: 50, years: "<1" },
        { name: "Time Series Analysis", level: 70, years: "1+" },
        { name: "Neural Networks", level: 55, years: "<1" },
      ]
    },
    {
      id: 3,
      title: "Data Visualization",
      icon: TrendingUp,
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4, #44a3dd)",
      skills: [
        { name: "Matplotlib", level: 80, years: "2+" },
        { name: "Seaborn", level: 80, years: "2+" },
        { name: "Microsoft Excel", level: 75, years: "2+" },
      ]
    },
    {
      id: 4,
      title: "Tools & Platforms",
      icon: Wrench,
      color: "#ffd93d",
      gradient: "linear-gradient(135deg, #ffd93d, #f9ca24)",
      skills: [
        { name: "Jupyter Notebook", level: 85, years: "2+" },
        { name: "VS Code", level: 80, years: "2+" },
        { name: "Git & GitHub", level: 75, years: "1+" },
      ]
    },
    {
      id: 5,
      title: "Databases",
      icon: Database,
      color: "#a29bfe",
      gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      skills: [
        { name: "MySQL", level: 70, years: "1+" },
        { name: "MS SQL Server", level: 65, years: "1+" },
      ]
    },
    {
      id: 6,
      title: "Data Science Techniques",
      icon: Sparkles,
      color: "#fd79a8",
      gradient: "linear-gradient(135deg, #fd79a8, #e84393)",
      skills: [
        { name: "EDA", level: 85, years: "2+" },
        { name: "Data Cleaning", level: 85, years: "2+" },
        { name: "Feature Engineering", level: 80, years: "1+" },
        { name: "Model Evaluation", level: 75, years: "1+" },
      ]
    }
  ];

  // Soft skills
  const softSkills = [
    { name: "Communication & Presentation", icon: "💬" },
    { name: "Analytical Thinking", icon: "🧠" },
    { name: "Problem-Solving", icon: "🎯" },
    { name: "Leadership & Collaboration", icon: "🤝" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Attention to Detail", icon: "🔍" },
  ];

  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="skills-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="header-badge">
          <Zap size={16} />
          <span>Expertise</span>
        </div>
        <h1 className="skills-title">
          Technical <span className="title-highlight">Arsenal</span>
        </h1>
        <p className="skills-subtitle">
          Comprehensive toolkit for data-driven solutions
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          
          return (
            <motion.div
              key={category.id}
              className={`skill-category ${hoveredCategory === category.id ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ 
                    background: category.gradient,
                    boxShadow: `0 8px 24px ${category.color}33`
                  }}
                >
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-years">{skill.years}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="skill-progress-container">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: "easeOut"
                        }}
                        style={{ 
                          background: category.gradient,
                          boxShadow: `0 0 10px ${category.color}66`
                        }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div 
                className="category-corner"
                style={{ borderColor: category.color }}
              ></div>

              {/* Glow Effect */}
              <div 
                className="category-glow"
                style={{ background: `radial-gradient(circle at top right, ${category.color}15, transparent 70%)` }}
              ></div>
            </motion.div>
          );
        })}
      </div>

      {/* Soft Skills Section */}
      <motion.div 
        className="soft-skills-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="soft-skills-title">
          <span className="title-icon">✨</span>
          Professional Skills
        </h2>
        
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="soft-skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                ease: "backOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="soft-skill-icon">{skill.icon}</span>
              <span className="soft-skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="skills-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="stat-item">
          <div className="stat-value">20+</div>
          <div className="stat-label">Technical Skills</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">6</div>
          <div className="stat-label">Skill Categories</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="skills-bg-decoration decoration-1"></div>
      <div className="skills-bg-decoration decoration-2"></div>
      <div className="skills-bg-decoration decoration-3"></div>
    </motion.section>
  );
}

export default Skills;