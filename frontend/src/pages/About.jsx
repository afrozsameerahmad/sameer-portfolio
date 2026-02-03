import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          className="about-text"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>About Me</h1>

          <p>
            Hi, I’m <b>Sameer Ahmad</b> — a <b>Data Scientist</b> who enjoys solving
            real-world problems using data, machine learning, and analytics.
            I focus on building scalable, data-driven solutions that deliver
            measurable business impact.
          </p>

          <p>
            I have hands-on experience in <b>predictive modeling</b>,
            <b> data analysis</b>, and <b>end-to-end ML pipelines</b> — from
            data cleaning and feature engineering to model deployment and
            visualization.
          </p>

          <div className="about-info">

            <div>
              <h4>🎓 Education</h4>
              <p>Bachelor’s in Computer Science / Data Science</p>
            </div>

            <div>
              <h4>💼 Experience</h4>
              <p>Multiple internships in Data Science & Machine Learning</p>
            </div>

            <div>
              <h4>📊 Expertise</h4>
              <p>Forecasting, Classification, EDA, Model Evaluation</p>
            </div>

          </div>

          <a
            href="/resume.pdf"
            download
            className="btn about-btn"
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-skills"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Technical Skills</h3>

          <div className="skills-grid">
            {[
              "Python",
              "Pandas & NumPy",
              "Scikit-Learn",
              "Machine Learning",
              "SQL",
              "Data Visualization",
              "Power BI",
              "Time Series Forecasting",
              "Statistics",
              "Django & REST APIs",
              "React",
              "Git & GitHub",
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;