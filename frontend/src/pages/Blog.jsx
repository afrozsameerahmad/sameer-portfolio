import { motion } from "framer-motion";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  TrendingUp,
  Code2,
  Brain,
  Lightbulb,
  ExternalLink
} from "lucide-react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt: "A comprehensive beginner's guide to understanding ML concepts, algorithms, and practical workflows for aspiring data scientists.",
      category: "Machine Learning",
      categoryColor: "#00ffd5",
      icon: Brain,
      date: "Feb 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      link: "#",
      featured: true,
      tags: ["ML", "Beginner", "Tutorial"]
    },
    {
      id: 2,
      title: "How I Built My First ML Model",
      excerpt: "Step-by-step journey of building and deploying my first machine learning model, including challenges faced and lessons learned.",
      category: "Project Showcase",
      categoryColor: "#ff6b6b",
      icon: Code2,
      date: "Jan 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
      featured: true,
      tags: ["Python", "ML", "Deployment"]
    },
    {
      id: 3,
      title: "Data Science Roadmap 2026",
      excerpt: "Complete roadmap covering essential skills, tools, and technologies you need to master to become a successful data scientist.",
      category: "Career Guide",
      categoryColor: "#4ecdc4",
      icon: TrendingUp,
      date: "Jan 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "#",
      featured: false,
      tags: ["Career", "Roadmap", "Skills"]
    },
    {
      id: 4,
      title: "Understanding Neural Networks",
      excerpt: "Deep dive into how neural networks work, from basic perceptrons to complex deep learning architectures.",
      category: "Deep Learning",
      categoryColor: "#ffd93d",
      icon: Brain,
      date: "Jan 10, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      link: "#",
      featured: false,
      tags: ["Neural Networks", "Deep Learning", "AI"]
    },
    {
      id: 5,
      title: "Data Cleaning Best Practices",
      excerpt: "Essential techniques and tips for cleaning messy data effectively using Python, Pandas, and real-world examples.",
      category: "Data Engineering",
      categoryColor: "#a29bfe",
      icon: Lightbulb,
      date: "Dec 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
      featured: false,
      tags: ["Data Cleaning", "Pandas", "Tips"]
    },
    {
      id: 6,
      title: "Time Series Forecasting with ARIMA",
      excerpt: "Practical guide to implementing ARIMA models for accurate time series predictions in business applications.",
      category: "Time Series",
      categoryColor: "#fd79a8",
      icon: TrendingUp,
      date: "Dec 15, 2023",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#",
      featured: false,
      tags: ["ARIMA", "Forecasting", "Python"]
    }
  ];

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Machine Learning", count: 2 },
    { name: "Career Guide", count: 1 },
    { name: "Deep Learning", count: 1 },
    { name: "Data Engineering", count: 1 },
    { name: "Time Series", count: 1 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="blog-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
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

      {/* Categories */}
      <motion.div 
        className="blog-categories"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div 
                      className="image-overlay"
                      style={{ background: `linear-gradient(135deg, ${post.categoryColor}44, transparent)` }}
                    ></div>
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="post-content">
                    <div className="post-meta">
                      <span 
                        className="post-category"
                        style={{ color: post.categoryColor }}
                      >
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

                    {/* Tags */}
                    <div className="post-tags">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="post-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="post-footer">
                      <span className="read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <a href={post.link} className="read-more">
                        Read More
                        <ArrowRight size={16} className="arrow-icon" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="regular-section">
        <h2 className="section-subtitle">Recent Articles</h2>
        <div className="blog-grid">
          {regularPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="card-image-container">
                  <img src={post.image} alt={post.title} className="card-image" />
                  <div 
                    className="card-overlay"
                    style={{ background: `linear-gradient(135deg, ${post.categoryColor}33, transparent)` }}
                  ></div>
                </div>

                {/* Content */}
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

                  {/* Tags */}
                  <div className="card-tags">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="card-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="card-footer">
                    <span className="card-read-time">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <a href={post.link} className="card-link">
                      Read
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Newsletter CTA */}
      <motion.div 
        className="newsletter-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="newsletter-content">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-desc">
            Get notified when I publish new articles about data science, ML, and tech
          </p>
        </div>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
            <ExternalLink size={16} />
          </button>
        </form>
      </motion.div>

      {/* Background */}
      <div className="blog-bg-decoration bg-dec-1"></div>
      <div className="blog-bg-decoration bg-dec-2"></div>
    </motion.section>
  );
}

export default Blog;