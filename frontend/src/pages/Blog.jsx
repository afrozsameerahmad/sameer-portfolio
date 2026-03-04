import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Code2,
  Brain,
  Lightbulb,
} from "lucide-react";

// FIXED:
// ✗ Removed: ExternalLink import — used only on newsletter button which was broken
// ✗ Removed: Newsletter form — had no handler, submitted nothing. Replaced with a
//   simple mailto link so it actually works.
// ✗ Fixed: Category filter buttons had no state — clicking did nothing.
//   Now activeCategory state filters posts correctly.
// ✓ categories now derived from posts data (no hardcoded duplicate counts)

function Blog() {
  // FIXED: Add working filter state
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt:
        "A comprehensive beginner's guide to understanding ML concepts, algorithms, and practical workflows for aspiring data scientists.",
      category: "Machine Learning",
      categoryColor: "#00ffd5",
      icon: Brain,
      date: "Feb 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      featured: true,
      tags: ["ML", "Beginner", "Tutorial"],
    },
    {
      id: 2,
      title: "How I Built My First ML Model",
      excerpt:
        "Step-by-step journey of building and deploying my first machine learning model, including challenges faced and lessons learned.",
      category: "Project Showcase",
      categoryColor: "#ff6b6b",
      icon: Code2,
      date: "Jan 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: true,
      tags: ["Python", "ML", "Deployment"],
    },
    {
      id: 3,
      title: "Data Science Roadmap 2026",
      excerpt:
        "Complete roadmap covering essential skills, tools, and technologies you need to master to become a successful data scientist.",
      category: "Career Guide",
      categoryColor: "#4ecdc4",
      icon: TrendingUp,
      date: "Jan 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      featured: false,
      tags: ["Career", "Roadmap", "Skills"],
    },
    {
      id: 4,
      title: "Understanding Neural Networks",
      excerpt:
        "Deep dive into how neural networks work, from basic perceptrons to complex deep learning architectures.",
      category: "Deep Learning",
      categoryColor: "#ffd93d",
      icon: Brain,
      date: "Jan 10, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      featured: false,
      tags: ["Neural Networks", "Deep Learning", "AI"],
    },
    {
      id: 5,
      title: "Data Cleaning Best Practices",
      excerpt:
        "Essential techniques and tips for cleaning messy data effectively using Python, Pandas, and real-world examples.",
      category: "Data Engineering",
      categoryColor: "#a29bfe",
      icon: Lightbulb,
      date: "Dec 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: false,
      tags: ["Data Cleaning", "Pandas", "Tips"],
    },
    {
      id: 6,
      title: "Time Series Forecasting with ARIMA",
      excerpt:
        "Practical guide to implementing ARIMA models for accurate time series predictions in business applications.",
      category: "Time Series",
      categoryColor: "#fd79a8",
      icon: TrendingUp,
      date: "Dec 15, 2023",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: false,
      tags: ["ARIMA", "Forecasting", "Python"],
    },
  ];

  // FIXED: Derive categories from posts — no duplicate hardcoded counts
  const uniqueCategories = [...new Set(blogPosts.map((p) => p.category))];
  const categories = [
    { name: "All Posts", count: blogPosts.length },
    ...uniqueCategories.map((name) => ({
      name,
      count: blogPosts.filter((p) => p.category === name).length,
    })),
  ];

  // FIXED: Actually filter posts based on active category
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
          Insights, tutorials, and experiences from my data science adventure
        </p>
      </motion.div>

      {/* FIXED: Category filter now actually works */}
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
                    <div
                      className="image-overlay"
                      style={{
                        background: `linear-gradient(135deg, ${post.categoryColor}44, transparent)`,
                      }}
                    />
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
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
                        <span key={tag} className="post-tag">
                          {tag}
                        </span>
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
                    <div
                      className="card-overlay"
                      style={{
                        background: `linear-gradient(135deg, ${post.categoryColor}33, transparent)`,
                      }}
                    />
                  </div>

                  <div className="card-content">
                    <div className="card-meta">
                      <span
                        className="card-category"
                        style={{ color: post.categoryColor, borderColor: post.categoryColor }}
                      >
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
                        <span key={tag} className="card-tag">
                          {tag}
                        </span>
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

      {/* Empty state when filter returns nothing */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: "center", padding: "60px 20px", color: "#666" }}
        >
          <p>No posts in this category yet. Check back soon!</p>
        </motion.div>
      )}

      {/* FIXED: Newsletter — was a broken <form> with no handler.
          Replaced with a simple mailto CTA that actually works. */}
      <motion.div
        className="newsletter-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="newsletter-content">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-desc">
            Get notified when I publish new articles about data science, ML, and tech
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
