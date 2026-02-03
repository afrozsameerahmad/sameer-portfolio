import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-text">
          <h3>Hi, I'm Sameer 👋</h3>

          <p>
            I am a passionate <b>Data Scientist</b> and{" "}
            <b>Full Stack Developer</b> who loves building
            intelligent systems and scalable web applications.
          </p>

          <p>
            I specialize in Machine Learning, Data Analysis,
            and deploying real-world AI solutions.
          </p>

          <p>
            My goal is to use data to solve business problems
            and create meaningful impact.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-skills">
          <h3>Skills</h3>

          <div className="skills-grid">
            {[
              "Python",
              "Django",
              "React",
              "Machine Learning",
              "SQL",
              "Power BI",
              "REST APIs",
              "Git & GitHub",
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default About;
