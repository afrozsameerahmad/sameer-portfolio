import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen, Calendar, Clock, ArrowRight,
  TrendingUp, Code2, Brain, Lightbulb, Activity,
} from "lucide-react";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const blogPosts = [
    {
      id: 1,
      title: "How I Built a Live Sales Forecasting App with Streamlit",
      excerpt:
        "A complete walkthrough of how I built and deployed a real-time e-commerce sales forecasting app using Python, ARIMA, and Streamlit — during my Flora Edze internship.",
      category: "Project Showcase",
      categoryColor: "#00ffd5",
      icon: Code2,
      date: "May 10, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: true,
      tags: ["Python", "Streamlit", "ARIMA", "Deployment"],
    },
    {
      id: 2,
      title: "What I Learned from My Cognifyz Data Science Internship",
      excerpt:
        "A candid reflection on my internship at Cognifyz Technologies — the restaurant data tasks, EDA challenges, geospatial analysis, and how it shaped my data science thinking.",
      category: "Internship Experience",
      categoryColor: "#f97316",
      icon: Lightbulb,
      date: "May 22, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      featured: true,
      tags: ["Cognifyz", "EDA", "Internship", "Data Analysis"],
    },
    {
      id: 3,
      title: "Analyzing Fitbit Data to Uncover Health Trends",
      excerpt:
        "How I used Python, Pandas, and Seaborn to analyze Fitbase fitness and sleep data — and what the patterns revealed about daily activity and rest quality.",
      category: "Data Analysis",
      categoryColor: "#38bdf8",
      icon: Activity,
      date: "Apr 15, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
      featured: false,
      tags: ["Pandas", "Seaborn", "EDA", "Health Analytics"],
    },
    {
      id: 4,
      title: "Time Series Forecasting: ARIMA vs Random Forest",
      excerpt:
        "A practical comparison of ARIMA and Random Forest for sales forecasting — when to use which, what the data tells you, and results from my real e-commerce dataset.",
      category: "Machine Learning",
      categoryColor: "#a78bfa",
      icon: TrendingUp,
      date: "Apr 2, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1612838320302-4b3b3996765c?w=800&q=80",
      featured: false,
      tags: ["ARIMA", "Random Forest", "Time Series", "Python"],
    },
    {
      id: 5,
      title: "My Journey as a BCA Student Getting into Data Science",
      excerpt:
        "From a BCA student in Hyderabad to completing 5+ internships and deploying real ML apps — here's my honest journey, what worked, and what didn't.",
      category: "Career Journey",
      categoryColor: "#fbbf24",
      icon: Brain,
      date: "Mar 18, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      featured: false,
      tags: ["Career", "Data Science", "Student", "Journey"],
    },
    {
      id: 6,
      title: "Building My Portfolio Site with React & Framer Motion",
      excerpt:
        "How I designed and built this portfolio — from dark-themed UI decisions to animated components, a Python contact backend, and deploying it live on Vercel.",
      category: "Web Development",
      categoryColor: "#22c55e",
      icon: Code2,
      date: "Mar 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      featured: false,
      tags: ["React", "Framer Motion", "Vercel", "Portfolio"],
    },
  ];

  const uniqueCategories = [...new Set(blogPosts.map((p) => p.category))];
  const categories = [
    { name: "All Posts", count: blogPosts.length },
    ...uniqueCategories.map((name) => ({
      name,
      count: blogPosts.filter((p) => p.category === name).length,
    })),
  ];

  const filteredPosts =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="blog-header"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-badge">
          <BookOpen size={16} />
          <span>Blog</span>
        </div>
        <h1 className="blog-title">
          Sharing My <span className="title-highlight">Learning Journey</span>
        </h1>
        <p className="blog-subtitle">
          Internship experiences, project breakdowns, and data science insights from a BCA student in Hyderabad
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="blog-categories"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
            <span className="category-count">{category.count}</span>
          </button>
        ))}
      </motion.div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="featured-section">
          <h2 className="section-subtitle">Featured Articles</h2>
          <div className="featured-grid">
            {featuredPosts.map((post, index) => {
              const IconComponent = post.icon;
              return (
                <motion.article
                  key={post.id}
                  className="featured-post"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${post.categoryColor}44, transparent)` }} />
                    <div className="featured-badge"><span>Featured</span></div>
                  </div>

                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category" style={{ color: post.categoryColor }}>
                        <IconComponent size={16} />
                        {post.category}
                      </span>
                      <div className="meta-divider">•</div>
                      <span className="post-date">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>

                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="post-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="post-footer">
                      <span className="read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <Link to={`/blog/${post.id}`} className="read-more">
                        Read More
                        <ArrowRight size={16} className="arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div className="regular-section">
          <h2 className="section-subtitle">
            {activeCategory === "All Posts" ? "Recent Articles" : activeCategory}
          </h2>
          <div className="blog-grid">
            {regularPosts.map((post, index) => {
              const IconComponent = post.icon;
              return (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="card-image-container">
                    <img src={post.image} alt={post.title} className="card-image" />
                    <div className="card-overlay" style={{ background: `linear-gradient(135deg, ${post.categoryColor}33, transparent)` }} />
                  </div>

                  <div className="card-content">
                    <div className="card-meta">
                      <span className="card-category" style={{ color: post.categoryColor, borderColor: `${post.categoryColor}55` }}>
                        <IconComponent size={14} />
                        {post.category}
                      </span>
                      <span className="card-date">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>

                    <div className="card-tags">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="card-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="card-footer">
                      <span className="card-read-time">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <Link to={`/blog/${post.id}`} className="card-link">
                        Read
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="blog-empty"
        >
          <p>No posts in this category yet. Check back soon!</p>
        </motion.div>
      )}

      {/* Newsletter CTA — mailto so it actually works */}
      <motion.div
        className="newsletter-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="newsletter-content">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-desc">
            Get notified when I publish new articles about data science, ML, and internship experiences
          </p>
        </div>
        <a
          href="mailto:sameerahmad723898@gmail.com?subject=Subscribe to Blog Updates"
          className="newsletter-btn"
        >
          Get Notified
          <ArrowRight size={16} />
        </a>
      </motion.div>

      <div className="blog-bg-decoration bg-dec-1" />
      <div className="blog-bg-decoration bg-dec-2" />
    </motion.section>
  );
}

export default Blog;