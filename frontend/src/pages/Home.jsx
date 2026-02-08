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
  Brain,
  ChevronDown
} from "lucide-react";

import profileImg from "../assets/profile.png";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="home-section" id="home">
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
            <span className="badge-dot"></span>
            <span className="badge-text">Available for Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="home-title">
              Hi, I'm{" "}
              <span className="name-gradient">Sameer Ahmad</span>
            </h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div 
            className="home-typewriter"
            variants={itemVariants}
          >
            <h2 className="typewriter-heading">
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
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="home-description"
            variants={itemVariants}
          >
            First-year MCA student in Data Science and AI with strong foundation 
            in Python, machine learning, and data analysis. Passionate about 
            building real-world, data-driven AI solutions through hands-on projects 
            and continuous learning.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="home-stats"
            variants={itemVariants}
          >
            <div className="stat-item">
              <div className="stat-icon">
                <Sparkles size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">Internships</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Code2 size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <Brain size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">15+</div>
                <div className="stat-label">Skills</div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="home-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:sameerahmad723898@gmail.com"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              <span>Get In Touch</span>
              <ArrowRight size={18} className="btn-arrow" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Sameer_Ahmad_Resume.pdf"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="home-social"
            variants={itemVariants}
          >
            <p className="social-label">Connect with me:</p>
            <div className="social-icons">
              <motion.a 
                href="https://github.com/afrozsameerahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/sameer-ahmad-a65325335" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a 
                href="mailto:sameerahmad723898@gmail.com"
                className="social-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
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

        {/* RIGHT IMAGE SECTION */}
        <motion.div 
          className="home-image-wrapper"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="image-container">
            {/* Profile Image */}
            <motion.div 
              className="profile-image-box"
              animate={floatingAnimation}
            >
              <img 
                src={profileImg} 
                alt="Sameer Ahmad - Data Scientist" 
                className="profile-image" 
              />
              <div className="image-overlay"></div>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              className="floating-element element-1"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code2 size={24} strokeWidth={2} />
            </motion.div>

            <motion.div
              className="floating-element element-2"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Database size={24} strokeWidth={2} />
            </motion.div>

            <motion.div
              className="floating-element element-3"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Brain size={24} strokeWidth={2} />
            </motion.div>

            {/* Background Shapes */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="bg-shape shape-3"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>

      {/* Background Grid */}
      <div className="home-bg-grid"></div>
      
      {/* Gradient Overlays */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </section>
  );
}

export default Home;