import { motion } from "framer-motion";

function Blog() {
  const blogs = [
    {
      title: "Getting Started with Machine Learning",
      desc: "A beginner's guide to ML concepts, algorithms, and practical workflows using Python and Scikit-learn.",
      date: "Jan 2026",
      category: "Machine Learning",
      link: "#",
    },
    {
      title: "My Data Science Internship Journey",
      desc: "Lessons learned from working on real-world projects at Minematics, Flora Edze, and Cognifyz Technologies.",
      date: "Dec 2025",
      category: "Career",
      link: "#",
    },
    {
      title: "E-Commerce Sales Forecasting with Python",
      desc: "Step-by-step guide to building sales forecasting models using ARIMA, Prophet, and time series analysis.",
      date: "Nov 2025",
      category: "Projects",
      link: "#",
    },
    {
      title: "Data Cleaning & EDA Best Practices",
      desc: "Essential techniques for data preprocessing, handling missing values, and exploratory data analysis using Pandas and NumPy.",
      date: "Oct 2025",
      category: "Data Science",
      link: "#",
    },
    {
      title: "Feature Engineering for ML Models",
      desc: "Practical approaches to feature engineering and how it improves model performance in real-world datasets.",
      date: "Sep 2025",
      category: "Machine Learning",
      link: "#",
    },
    {
      title: "Data Visualization with Matplotlib & Seaborn",
      desc: "Creating compelling visualizations to communicate data insights effectively using Python libraries.",
      date: "Aug 2025",
      category: "Data Science",
      link: "#",
    },
  ];

  return (
    <motion.section
      className="section page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="page-title">My Blog</h1>
      <p className="page-subtitle">Sharing My Learning Journey ✍️</p>

      <div className="cards-container">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className="card blog-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="blog-category">{blog.category}</div>
            
            <h3>{blog.title}</h3>
            
            <p className="blog-desc">{blog.desc}</p>
            
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
              <a href={blog.link} className="blog-link" target="_blank" rel="noreferrer">
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Blog;