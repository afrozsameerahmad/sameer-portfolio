import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook
} from "lucide-react";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Blog posts data (same as in Blog.jsx - you can move this to a separate file)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt: "A comprehensive beginner's guide to understanding ML concepts, algorithms, and practical workflows for aspiring data scientists.",
      category: "Machine Learning",
      categoryColor: "#00ffd5",
      date: "Feb 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["ML", "Beginner", "Tutorial"],
      content: `
        <h2>Introduction to Machine Learning</h2>
        <p>Machine Learning has revolutionized the way we approach problem-solving in the digital age. As an aspiring data scientist, understanding the fundamentals of ML is crucial for building a strong foundation in this field.</p>

        <h2>What is Machine Learning?</h2>
        <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing computer programs that can access data and use it to learn for themselves.</p>

        <h3>Types of Machine Learning</h3>
        <p>There are three main types of machine learning:</p>
        <ul>
          <li><strong>Supervised Learning:</strong> The algorithm learns from labeled training data</li>
          <li><strong>Unsupervised Learning:</strong> The algorithm finds patterns in unlabeled data</li>
          <li><strong>Reinforcement Learning:</strong> The algorithm learns through trial and error</li>
        </ul>

        <h2>Getting Started with Your First ML Project</h2>
        <p>Here are the essential steps to begin your ML journey:</p>
        <ol>
          <li>Choose a programming language (Python is highly recommended)</li>
          <li>Learn the basics of statistics and linear algebra</li>
          <li>Understand data preprocessing and feature engineering</li>
          <li>Start with simple algorithms like Linear Regression</li>
          <li>Practice with real-world datasets</li>
        </ol>

        <h2>Essential Libraries and Tools</h2>
        <p>To work effectively with machine learning, you'll need to familiarize yourself with these key libraries:</p>
        <ul>
          <li><strong>NumPy:</strong> For numerical computing</li>
          <li><strong>Pandas:</strong> For data manipulation and analysis</li>
          <li><strong>Scikit-learn:</strong> For machine learning algorithms</li>
          <li><strong>Matplotlib/Seaborn:</strong> For data visualization</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Machine Learning is an exciting field with endless possibilities. Start small, practice consistently, and build projects that solve real-world problems. Remember, the journey of learning ML is continuous, so stay curious and keep experimenting!</p>
      `
    },
    {
      id: 2,
      title: "How I Built My First ML Model",
      excerpt: "Step-by-step journey of building and deploying my first machine learning model, including challenges faced and lessons learned.",
      category: "Project Showcase",
      categoryColor: "#ff6b6b",
      date: "Jan 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["Python", "ML", "Deployment"],
      content: `
        <h2>The Beginning of My ML Journey</h2>
        <p>Building my first machine learning model was both exciting and challenging. In this article, I'll share my complete journey, from ideation to deployment.</p>

        <h2>Choosing the Right Project</h2>
        <p>I decided to build a house price prediction model using the California Housing dataset. This classic problem was perfect for learning the fundamentals while creating something practical.</p>

        <h3>Why This Project?</h3>
        <ul>
          <li>Real-world relevance and practical application</li>
          <li>Clean dataset perfect for beginners</li>
          <li>Opportunity to learn regression techniques</li>
          <li>Sufficient complexity to learn preprocessing</li>
        </ul>

        <h2>The Development Process</h2>
        <p>Here's how I approached the project step by step:</p>

        <h3>1. Data Collection and Exploration</h3>
        <p>I started by loading the dataset and performing exploratory data analysis (EDA). Understanding the data distribution, correlations, and potential outliers was crucial.</p>

        <h3>2. Data Preprocessing</h3>
        <p>This was the most time-consuming part. I had to:</p>
        <ul>
          <li>Handle missing values</li>
          <li>Encode categorical variables</li>
          <li>Scale numerical features</li>
          <li>Split data into training and testing sets</li>
        </ul>

        <h3>3. Model Selection and Training</h3>
        <p>I experimented with multiple algorithms including Linear Regression, Random Forest, and Gradient Boosting. After cross-validation, Random Forest gave the best results.</p>

        <h3>4. Model Evaluation</h3>
        <p>I used metrics like R² score, RMSE, and MAE to evaluate model performance. The final model achieved an R² score of 0.81 on the test set.</p>

        <h2>Challenges I Faced</h2>
        <p>The journey wasn't smooth. Here are some challenges:</p>
        <ul>
          <li>Overfitting: My initial model performed great on training data but poorly on test data</li>
          <li>Feature Engineering: Deciding which features to include required experimentation</li>
          <li>Hyperparameter Tuning: Finding the right parameters took time and patience</li>
        </ul>

        <h2>Key Lessons Learned</h2>
        <ol>
          <li>Start simple, then iterate and improve</li>
          <li>Data quality matters more than model complexity</li>
          <li>Always validate your model on unseen data</li>
          <li>Document everything for future reference</li>
        </ol>

        <h2>Deployment</h2>
        <p>I deployed the model using Flask and hosted it on Heroku. This gave me hands-on experience with the complete ML lifecycle.</p>

        <h2>Conclusion</h2>
        <p>Building my first ML model taught me that success comes from persistence and continuous learning. Don't be afraid to start small and make mistakes – they're your best teachers!</p>
      `
    },
    {
      id: 3,
      title: "Data Science Roadmap 2026",
      excerpt: "Complete roadmap covering essential skills, tools, and technologies you need to master to become a successful data scientist.",
      category: "Career Guide",
      categoryColor: "#4ecdc4",
      date: "Jan 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["Career", "Roadmap", "Skills"],
      content: `
        <h2>Your Complete Data Science Roadmap</h2>
        <p>Breaking into data science in 2026 requires a strategic approach. This comprehensive roadmap will guide you through the essential skills and technologies you need to master.</p>

        <h2>Phase 1: Foundation (Months 1-3)</h2>
        <h3>Programming</h3>
        <ul>
          <li>Python fundamentals</li>
          <li>Data structures and algorithms</li>
          <li>Object-oriented programming</li>
        </ul>

        <h3>Mathematics</h3>
        <ul>
          <li>Linear algebra</li>
          <li>Calculus basics</li>
          <li>Probability and statistics</li>
        </ul>

        <h2>Phase 2: Core Skills (Months 4-6)</h2>
        <h3>Data Manipulation</h3>
        <ul>
          <li>NumPy for numerical computing</li>
          <li>Pandas for data analysis</li>
          <li>SQL for database querying</li>
        </ul>

        <h3>Data Visualization</h3>
        <ul>
          <li>Matplotlib and Seaborn</li>
          <li>Plotly for interactive visualizations</li>
          <li>Tableau or Power BI</li>
        </ul>

        <h2>Phase 3: Machine Learning (Months 7-9)</h2>
        <ul>
          <li>Supervised learning algorithms</li>
          <li>Unsupervised learning techniques</li>
          <li>Feature engineering</li>
          <li>Model evaluation and validation</li>
          <li>Scikit-learn library</li>
        </ul>

        <h2>Phase 4: Advanced Topics (Months 10-12)</h2>
        <h3>Deep Learning</h3>
        <ul>
          <li>Neural networks fundamentals</li>
          <li>TensorFlow or PyTorch</li>
          <li>Computer vision with CNNs</li>
          <li>NLP with transformers</li>
        </ul>

        <h3>MLOps</h3>
        <ul>
          <li>Model deployment</li>
          <li>Docker and containerization</li>
          <li>CI/CD for ML</li>
          <li>Model monitoring</li>
        </ul>

        <h2>Essential Tools and Technologies</h2>
        <ul>
          <li>Git and GitHub for version control</li>
          <li>Jupyter Notebooks for experimentation</li>
          <li>Cloud platforms (AWS, GCP, or Azure)</li>
          <li>Big data tools (Spark, Hadoop)</li>
        </ul>

        <h2>Building Your Portfolio</h2>
        <p>Throughout your journey, focus on building real projects:</p>
        <ol>
          <li>Start with guided projects from courses</li>
          <li>Participate in Kaggle competitions</li>
          <li>Build 3-5 end-to-end projects</li>
          <li>Contribute to open-source projects</li>
          <li>Write technical blog posts</li>
        </ol>

        <h2>Soft Skills Matter</h2>
        <ul>
          <li>Communication and storytelling with data</li>
          <li>Business acumen</li>
          <li>Problem-solving mindset</li>
          <li>Collaboration and teamwork</li>
        </ul>

        <h2>Conclusion</h2>
        <p>This roadmap is a guide, not a rigid path. Adapt it to your learning style and goals. Stay consistent, build projects, and never stop learning. The field of data science is constantly evolving, and so should you!</p>
      `
    },
    // Add content for remaining posts...
    {
      id: 4,
      title: "Understanding Neural Networks",
      excerpt: "Deep dive into how neural networks work, from basic perceptrons to complex deep learning architectures.",
      category: "Deep Learning",
      categoryColor: "#ffd93d",
      date: "Jan 10, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["Neural Networks", "Deep Learning", "AI"],
      content: `<h2>Introduction to Neural Networks</h2><p>Neural networks are the backbone of modern deep learning. This article will help you understand how they work from the ground up.</p><p>Content coming soon...</p>`
    },
    {
      id: 5,
      title: "Data Cleaning Best Practices",
      excerpt: "Essential techniques and tips for cleaning messy data effectively using Python, Pandas, and real-world examples.",
      category: "Data Engineering",
      categoryColor: "#a29bfe",
      date: "Dec 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["Data Cleaning", "Pandas", "Tips"],
      content: `<h2>Data Cleaning Essentials</h2><p>Clean data is the foundation of any successful data science project. Learn the best practices here.</p><p>Content coming soon...</p>`
    },
    {
      id: 6,
      title: "Time Series Forecasting with ARIMA",
      excerpt: "Practical guide to implementing ARIMA models for accurate time series predictions in business applications.",
      category: "Time Series",
      categoryColor: "#fd79a8",
      date: "Dec 15, 2023",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Sameer Ahmad",
      tags: ["ARIMA", "Forecasting", "Python"],
      content: `<h2>Time Series Forecasting</h2><p>ARIMA models are powerful tools for forecasting. Learn how to implement them effectively.</p><p>Content coming soon...</p>`
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-section">
        <div className="post-not-found">
          <h2>Post Not Found</h2>
          <button onClick={() => navigate('/blog')} className="back-btn">
            <ArrowLeft size={18} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      className="blog-post-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="blog-post-container">
        {/* Back Button */}
        <motion.button
          className="back-button"
          onClick={() => navigate('/blog')}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={18} />
          Back to Blog
        </motion.button>

        {/* Article Header */}
        <motion.header
          className="post-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span 
            className="post-category-badge"
            style={{ color: post.categoryColor, borderColor: post.categoryColor }}
          >
            {post.category}
          </span>
          
          <h1 className="post-main-title">{post.title}</h1>
          
          <div className="post-meta-info">
            <div className="meta-left">
              <span className="meta-author">By {post.author}</span>
              <span className="meta-separator">•</span>
              <span className="meta-date">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="meta-separator">•</span>
              <span className="meta-time">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            
            <div className="meta-actions">
              <button className="action-btn" title="Like">
                <ThumbsUp size={16} />
              </button>
              <button className="action-btn" title="Bookmark">
                <Bookmark size={16} />
              </button>
              <button className="action-btn" title="Share">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="post-tags-list">
            {post.tags.map((tag, i) => (
              <span key={i} className="tag-item">{tag}</span>
            ))}
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="post-featured-image"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={post.image} alt={post.title} />
          <div 
            className="featured-overlay"
            style={{ background: `linear-gradient(135deg, ${post.categoryColor}22, transparent)` }}
          ></div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          className="post-article-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <motion.div
          className="post-share-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-btn twitter">
              <Twitter size={18} />
              Twitter
            </button>
            <button className="share-btn linkedin">
              <Linkedin size={18} />
              LinkedIn
            </button>
            <button className="share-btn facebook">
              <Facebook size={18} />
              Facebook
            </button>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          className="comments-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="comments-title">
            <MessageCircle size={20} />
            Comments
          </h3>
          <p className="comments-placeholder">Comments feature coming soon!</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BlogPost;