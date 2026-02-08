import { motion } from "framer-motion";

import cert1 from "../assets/certificates/coursera_ds.png";
import cert2 from "../assets/certificates/ml_ai.png";
import cert3 from "../assets/certificates/powerbi.png";
import cert4 from "../assets/certificates/fullstack.png";

function Certifications() {
  const certs = [
    {
      title: "Data Science & Machine Learning",
      org: "Coursera / Google",
      year: "2024",
      img: cert1,
      link: "https://coursera.org/verify/XXXXX",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "Machine Learning Specialization",
      org: "DeepLearning.AI - Andrew Ng",
      year: "2024",
      img: cert2,
      link: "https://coursera.org/verify/YYYYY",
      skills: ["ML Algorithms", "Feature Engineering", "Model Evaluation"],
    },
    {
      title: "Data Analysis & Visualization",
      org: "Microsoft / Udemy",
      year: "2024",
      img: cert3,
      link: "https://learn.microsoft.com/verify/ZZZZZ",
      skills: ["Matplotlib", "Seaborn", "Excel", "Data Viz"],
    },
    {
      title: "Python for Data Science",
      org: "IBM / Coursera",
      year: "2023",
      img: cert4,
      link: "https://coursera.org/verify/AAAAA",
      skills: ["Python", "SQL", "EDA", "Data Cleaning"],
    },
  ];

  return (
    <motion.section
      className="section page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="page-title">Certifications & Achievements</h1>
      <p className="page-subtitle">Professional Development & Learning 🎓</p>

      <div className="cards-container">
        {certs.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="card cert-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="cert-img-wrapper">
              <img
                src={item.img}
                alt={item.title}
                className="cert-img"
              />
              <div className="cert-overlay">
                <span>View Certificate</span>
              </div>
            </div>

            <div className="cert-content">
              <h3>{item.title}</h3>
              
              <p className="cert-org">{item.org}</p>
              
              <span className="cert-year">{item.year}</span>
              
              {item.skills && (
                <div className="cert-skills">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              )}
            </div>

            <small className="cert-cta">Click to View Certificate</small>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;