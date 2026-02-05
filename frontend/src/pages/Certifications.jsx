import { motion } from "framer-motion";

import cert1 from "../assets/certificates/coursera_ds.png";
import cert2 from "../assets/certificates/ml_ai.png";
import cert3 from "../assets/certificates/powerbi.png";
import cert4 from "../assets/certificates/fullstack.png";

function Certifications() {

  const certs = [
    {
      title: "Data Science with Python",
      org: "Coursera",
      year: "2024",
      img: cert1,
      link: "https://coursera.org/verify/XXXXX", // real link daalna
    },
    {
      title: "Machine Learning Specialization",
      org: "DeepLearning.AI",
      year: "2023",
      img: cert2,
      link: "https://coursera.org/verify/YYYYY",
    },
    {
      title: "Power BI Certification",
      org: "Microsoft",
      year: "2024",
      img: cert3,
      link: "https://learn.microsoft.com/verify/ZZZZZ",
    },
    {
      title: "Full Stack Web Development",
      org: "Udemy",
      year: "2022",
      img: cert4,
      link: "https://udemy.com/certificate/AAAAA",
    },
  ];

  return (
    <motion.section
      className="section page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="page-title">Certifications & Achievements</h1>

      <div className="cards-container">

        {certs.map((item, i) => (

          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="card cert-card"
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={item.img}
              alt={item.title}
              className="cert-img"
            />

            <h3>{item.title}</h3>

            <p>{item.org}</p>

            <span>{item.year}</span>

            <small>Click to View Certificate</small>

          </motion.a>

        ))}

      </div>
    </motion.section>
  );
}

export default Certifications;
