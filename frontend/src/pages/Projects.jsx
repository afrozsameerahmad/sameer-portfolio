import { motion } from "framer-motion";

import salesImg from "../assets/sales_forecast.png";
import mlImg from "../assets/ml_deploy.png";

function Projects() {

  const projects = [
    {
      title: "Sales Forecasting System",
      desc: "ML-based sales prediction using Python & ML models",
      img: salesImg,
      github: "https://github.com/afrozsameerahmad/sales-forecast",
      live: "https://sales-forecast-demo.vercel.app",
    },

    {
      title: "ML Model Deployment",
      desc: "Deployed ML model using Django & React",
      img: mlImg,
      github: "https://github.com/afrozsameerahmad/ml-deploy",
      live: "https://ml-deploy-demo.vercel.app",
    },
  ];

  return (
    <motion.section
      className="section page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="page-title">Projects</h1>

      <div className="cards-container">

        {projects.map((p, i) => (

          <motion.div
            key={i}
            className="card project-card"
            whileHover={{ scale: 1.05 }}
          >

            <img src={p.img} alt={p.title} className="project-img" />

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <div className="project-links">

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live Demo
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default Projects;
