import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 80 },
  { name: "Pandas / NumPy", level: 85 },
  { name: "Scikit-learn", level: 75 },
  { name: "TensorFlow", level: 70 },
  { name: "Data Visualization", level: 85 },
  { name: "EDA", level: 90 },
  { name: "Git / GitHub", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} className="skill">

          <div className="skill-head">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="bar">

            <motion.div
              className="fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2 }}
            />

          </div>
        </div>
      ))}

    </section>
  );
}
