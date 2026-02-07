import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin,
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Brain
} from "lucide-react";

import profileImg from "../assets/profile.png";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingIcons = [
    { Icon: Code2, color: "#00ffd5", delay: 0, position: { top: "15%", left: "10%" } },
    { Icon: Database, color: "#ff6b6b", delay: 1, position: { top: "70%", left: "15%" } },
    { Icon: Brain, color: "#4ecdc4", delay: 2, position: { top: "40%", right: "8%" } },
    { Icon: Sparkles, color: "#ffd93d", delay: 1.5, position: { top: "80%", right: "12%" } }
  ];

  return (
    <motion.section
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-container">
        
        {/* LEFT CONTENT */}
        <motion.div 
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="home-badge"
            variants={itemVariants}
          >
            <div className="badge-dot"></div>
            <span>Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="home-title">
              Hi, I'm{" "}
              <span className="name-gradient">Sameer Ahmad</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div 
            className="home-typewriter"
            variants={itemVariants}
          >
            <h2>
              <span className="typewriter-prefix">Aspiring</span>{" "}
              <span className="typewriter-text">
                <Typewriter
                  words={[
                    "Data Scientist",
                    "ML Engineer",
                    "AI Enthusiast",
                    "Python Developer",
                    "Data Analyst"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="home-description"
            variants={itemVariants}
          >
            First-year MCA student passionate about transforming data into 
            actionable insights. Building real-world AI solutions through 
            hands-on projects and continuous learning.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="home-stats"
            variants={itemVariants}
          >
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Skills</div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="home-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Get In Touch</span>
              <ArrowRight size={18} className="btn-arrow" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="home-social"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/sameerahmad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sameer-ahmad-a65325335" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sameerahmad723898@gmail.com"
              className="social-link"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div 
            className="home-location"
            variants={itemVariants}
          >
            <MapPin size={16} />
            <span>Lucknow, Uttar Pradesh, India</span>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          className="home-image-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-wrapper">
            {/* Main Image */}
            <motion.div 
              className="profile-image-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={profileImg} alt="Sameer Ahmad" className="profile-image" />
              
              {/* Gradient Overlay */}
              <div className="image-gradient"></div>
              
              {/* Border Animation */}
              <div className="image-border"></div>
            </motion.div>

            {/* Floating Elements */}
            {floatingIcons.map(({ Icon, color, delay, position }, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                style={{
                  ...position,
                  background: `${color}22`,
                  borderColor: `${color}44`
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0]
                }}
                transition={{
                  scale: { delay: delay * 0.3, duration: 0.5 },
                  rotate: { delay: delay * 0.3, duration: 0.5 },
                  y: {
                    repeat: Infinity,
                    duration: 2 + index * 0.5,
                    ease: "easeInOut",
                    delay: delay
                  }
                }}
              >
                <Icon size={20} color={color} strokeWidth={2} />
              </motion.div>
            ))}

            {/* Background Decorations */}
            <div className="image-decoration decoration-circle-1"></div>
            <div className="image-decoration decoration-circle-2"></div>
            <div className="image-decoration decoration-circle-3"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>

      {/* Background Elements */}
      <div className="home-bg-grid"></div>
      <div className="home-bg-gradient-1"></div>
      <div className="home-bg-gradient-2"></div>
      <div className="home-bg-gradient-3"></div>
    </motion.section>
  );
}

export default Home;