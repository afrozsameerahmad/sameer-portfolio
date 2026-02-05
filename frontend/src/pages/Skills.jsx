import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      title: "Programming",
      items: ["Python", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks",
      items: ["React", "Django", "REST API"],
    },
    {
      title: "Data Science",
      items: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Power BI", "Postman"],
    },
  ];

  return (
    <motion.section
      className="section skills-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>My Skills</h2>
      <p className="subtitle">Technologies & Tools I Work With</p>

      <div className="skills-grid">

        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((skill, index) => (
                <li key={index}>✅ {skill}</li>
              ))}
            </ul>

          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}

export default Skills;
