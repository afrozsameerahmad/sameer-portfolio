import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      className="section experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Experience & Internships</h1>

      <div className="timeline">

        {/* ITEM 1 */}
        <motion.div
          className="timeline-item"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="timeline-dot"></span>

          <div className="timeline-content">
            <h3>Data Science Intern</h3>
            <h4>ABC Company</h4>
            <p>Jan 2024 – Mar 2024</p>

            <ul>
              <li>Built ML models for sales prediction</li>
              <li>Improved accuracy by 18%</li>
              <li>Created Power BI dashboards</li>
            </ul>
          </div>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          className="timeline-item"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="timeline-dot"></span>

          <div className="timeline-content">
            <h3>Machine Learning Intern</h3>
            <h4>XYZ Tech</h4>
            <p>Jun 2023 – Aug 2023</p>

            <ul>
              <li>Deployed ML models using Django</li>
              <li>Worked with real datasets</li>
              <li>Built REST APIs</li>
            </ul>
          </div>
        </motion.div>

        {/* ITEM 3 */}
        <motion.div
          className="timeline-item"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="timeline-dot"></span>

          <div className="timeline-content">
            <h3>Data Analyst Intern</h3>
            <h4>Startup Labs</h4>
            <p>Sep 2022 – Dec 2022</p>

            <ul>
              <li>Analyzed customer data</li>
              <li>Created reports</li>
              <li>Improved decision making</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Experience;
