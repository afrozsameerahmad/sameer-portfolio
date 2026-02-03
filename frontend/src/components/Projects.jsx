import { motion } from "framer-motion";

const projects = [
  {
    title: "Stock Price Prediction",
    desc: "ML model to predict stock trends using historical data.",
    tech: ["Python", "Pandas", "Sklearn"],
    github: "https://github.com/yourname/stock-prediction",
    demo: "#"
  },
  {
    title: "Sales Forecasting System",
    desc: "Time-series forecasting with ARIMA & Prophet.",
    tech: ["Python", "Prophet", "Matplotlib"],
    github: "https://github.com/yourname/sales-forecast",
    demo: "#"
  },
  {
    title: "Customer Churn Analysis",
    desc: "Predict churn using classification algorithms.",
    tech: ["ML", "EDA", "XGBoost"],
    github: "https://github.com/yourname/churn-analysis",
    demo: "#"
  }
];

function Projects() {
  return (
    <div className="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <div className="tech-stack">
              {p.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.github} target="_blank">GitHub</a>
              <a href={p.demo} target="_blank">Live</a>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Projects;
