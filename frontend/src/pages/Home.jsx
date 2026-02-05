import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import profileImg from "../assets/profile.png";

function Home() {
  return (
    <motion.section
      className="section home-container-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-text">

          <h1>
            Hi, I’m <span>Sameer Ahmad</span>
          </h1>

          <h2>
            <Typewriter
              words={["Data Scientist", "ML Engineer", "Python Developer"]}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h2>

          <p>
            I build intelligent systems using Machine Learning and Data Science
            to solve real-world problems.
          </p>

          <div className="home-buttons">

            <a href="/contact" className="btn">
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Resume
            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <motion.div
          className="home-image"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={profileImg} alt="Sameer Ahmad" />
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Home;
