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
  Brain,
  ChevronDown
} from "lucide-react";

import profileImg from "../assets/profile.png";

// ✅ ParticleCanvas removed — now lives globally in App.jsx

const fade = (delay = 0) => ({
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } }
});

function Home() {
  return (
    <section className="home-section" id="home">

      {/* Soft ambient blobs */}
      <div className="home-ambient" aria-hidden="true">
        <div className="amb amb-1" />
        <div className="amb amb-2" />
      </div>

      <div className="home-container">

        {/* ── LEFT CONTENT ── */}
        <div className="home-content">

          <motion.div className="home-badge" variants={fade(0.1)} initial="hidden" animate="visible">
            <span className="badge-dot" />
            <span>Available for Opportunities</span>
          </motion.div>

          <motion.h1 className="home-title" variants={fade(0.2)} initial="hidden" animate="visible">
            Hi, I'm <span className="highlight">Sameer Ahmad</span>
          </motion.h1>

          <motion.div className="home-typewriter" variants={fade(0.3)} initial="hidden" animate="visible">
            <span className="tw-prefix">Aspiring </span>
            <span className="tw-word">
              <Typewriter
                words={["Data Scientist", "ML Engineer", "AI Enthusiast", "Python Developer", "Data Analyst"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p className="home-desc" variants={fade(0.4)} initial="hidden" animate="visible">
            First-year MCA student in Data Science and AI with a strong foundation
            in Python, machine learning, and data analysis. Passionate about
            building real-world, data-driven AI solutions.
          </motion.p>

          <motion.div className="home-stats" variants={fade(0.5)} initial="hidden" animate="visible">
            <div className="stat">
              <Sparkles size={18} />
              <div>
                <strong>3</strong>
                <span>Internships</span>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <Code2 size={18} />
              <div>
                <strong>10+</strong>
                <span>Projects</span>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <Brain size={18} />
              <div>
                <strong>15+</strong>
                <span>Skills</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="home-buttons" variants={fade(0.6)} initial="hidden" animate="visible">
            <motion.a
              href="mailto:sameerahmad723898@gmail.com"
              className="btn btn-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={17} />
              Get In Touch
              <ArrowRight size={17} className="btn-arrow" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Sameer_Ahmad_Resume.pdf"
              className="btn btn-outline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={17} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div className="home-social" variants={fade(0.7)} initial="hidden" animate="visible">
            <motion.a
              href="https://github.com/afrozsameerahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Github size={19} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sameer-ahmad-a65325335"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={19} />
            </motion.a>
            <motion.a
              href="mailto:sameerahmad723898@gmail.com"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Mail size={19} />
            </motion.a>
            <span className="social-sep" />
            <span className="home-location">
              <MapPin size={14} />
              Lucknow, India
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <motion.div
            className="profile-frame"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={profileImg} alt="Sameer Ahmad" className="profile-img" />
            <div className="frame-glow" />
          </motion.div>

          <div className="tag tag-tl">Python · ML</div>
          <div className="tag tag-br">Data Science</div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;