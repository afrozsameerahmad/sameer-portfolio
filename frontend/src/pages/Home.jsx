import { motion } from "framer-motion";

import profileImg from "../assets/profile.png";
import salesForecastImg from "../assets/sales_forecast.png";
import mlDeployImg from "../assets/ml_deploy.png";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        className="section home-container-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="home-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="home-text">
            <h1>
              Hi, I’m <span>Sameer Ahmad</span>
            </h1>
            <h2>Data Scientist</h2>

            <p>
              I turn raw data into actionable insights and build ML solutions
              that create real impact.
            </p>

           <div className="home-buttons">
  <a href="/contact" className="btn">
    Contact Me
  </a>

  <a href="/resume.pdf" download className="btn">
    Download CV
  </a>
</div>

          </div>

          <motion.div
            className="home-image"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src={profileImg} alt="Sameer Ahmad" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* PROOF STRIP */}
      <section className="section">
        <motion.div
          className="proof-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3> 3 Data Science Internships</h3>
          <h3> Real Sales Forecasting Projects</h3>
          <h3> Deployed ML Models</h3>
        </motion.div>
      </section>

      {/* WHAT I DO */}
      <section className="section what-i-do">
        <h2>What I Do</h2>

        <div className="cards-container">
          {[
            { title: "Data Science", text: "Build ML models and insights." },
            { title: "Problem Solving", text: "Solve business problems." },
            { title: "Visualization", text: "Create dashboards." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      const projects = [
  {
    title: "📈 Sales Forecasting",
    img: salesForecastImg,
    github: "https://github.com/...",
    demo: "https://...",
    desc: "ML model for sales prediction"
  },
  {
    title: "🌐 ML Deployment",
    img: mlDeployImg,
    github: "https://github.com/...",
    demo: "https://...",
    desc: "Deployed ML using Django"
  }
];


      {/* TECH STACK */}
      <section className="section tech-stack">
        <h2>Tech Stack</h2>

        <motion.div
          className="tech-icons"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {["Python", "SQL", "ML", "Power BI", "Git", "Django", "React"].map(
            (tech, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </section>
    </>
  );
}

export default Home;
