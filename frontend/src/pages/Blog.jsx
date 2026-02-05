import { motion } from "framer-motion";

function Blog() {
  const blogs = [
    {
      title: "Getting Started with Machine Learning",
      desc: "Beginner guide to ML concepts and workflows.",
      link: "#",
    },
    {
      title: "How I Built My First ML Model",
      desc: "Step-by-step project experience.",
      link: "#",
    },
    {
      title: "Data Science Roadmap 2026",
      desc: "Skills & tools to become a Data Scientist.",
      link: "#",
    },
  ];

  return (
    <motion.section
      className="section blog-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>My Blog</h2>
      <p className="subtitle">Sharing My Learning Journey ✍️</p>

      <div className="blog-grid">

        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className="blog-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{blog.title}</h3>

            <p>{blog.desc}</p>

            <a href={blog.link} target="_blank" rel="noreferrer">
              Read More →
            </a>

          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}

export default Blog;
