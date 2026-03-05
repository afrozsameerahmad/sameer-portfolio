import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar, Clock, ArrowLeft, Share2, Bookmark,
  ThumbsUp, MessageCircle, Twitter, Linkedin, Copy,
} from "lucide-react";
import { useState } from "react";

/* ══════════════════════════════════════════════════
   BLOG POSTS — all content matches Sameer's real
   projects, internships, and experience
══════════════════════════════════════════════════ */
const blogPosts = [
  {
    id: 1,
    title: "How I Built a Live Sales Forecasting App with Streamlit",
    excerpt:
      "A complete walkthrough of how I built and deployed a real-time e-commerce sales forecasting app using Python, ARIMA, and Streamlit — during my Flora Edze internship.",
    category: "Project Showcase",
    categoryColor: "#00ffd5",
    date: "May 10, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["Python", "Streamlit", "ARIMA", "Deployment"],
    content: `
      <h2>The Project Background</h2>
      <p>During my internship at Flora Edze (March–May 2025), I was assigned a project-based task: build a system to forecast e-commerce sales using historical data. What started as a Jupyter notebook analysis turned into a fully deployed Streamlit web application.</p>

      <h2>What I Built</h2>
      <p>The app allows users to visualize historical sales trends and generate future sales predictions powered by two models:</p>
      <ul>
        <li><strong>ARIMA</strong> — for capturing time series trends and seasonality</li>
        <li><strong>Random Forest</strong> — for non-linear patterns in the data</li>
      </ul>
      <p>Users can interact with the app, adjust forecast horizons, and download results — all from a browser.</p>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Python</strong> — core language</li>
        <li><strong>Pandas & NumPy</strong> — data processing</li>
        <li><strong>Statsmodels</strong> — ARIMA implementation</li>
        <li><strong>Scikit-learn</strong> — Random Forest model</li>
        <li><strong>Matplotlib / Plotly</strong> — visualizations</li>
        <li><strong>Streamlit</strong> — web app framework and deployment</li>
      </ul>

      <h2>The Data Pipeline</h2>
      <p>Before any modeling, I spent significant time on data preparation:</p>
      <ol>
        <li>Loaded and cleaned historical sales CSV data</li>
        <li>Handled missing values and outliers</li>
        <li>Performed time series decomposition to identify trend and seasonality</li>
        <li>Created lag features and rolling averages for the Random Forest model</li>
      </ol>

      <h2>Challenges I Faced</h2>
      <p>The biggest challenge was making ARIMA stable across different product categories. Each category had different seasonality patterns, so I had to auto-select (p, d, q) parameters per category rather than using one fixed model.</p>
      <p>Deploying to Streamlit Cloud also required careful management of dependencies in <code>requirements.txt</code> to avoid version conflicts.</p>

      <h2>Live Demo</h2>
      <p>The app is live at: <a href="https://floraedze-sales-forecasting-project-9wphj6fstwtquwh5sdltsn.streamlit.app/" target="_blank" rel="noopener noreferrer" style="color:#00ffd5">floraedze-sales-forecasting-project.streamlit.app</a></p>
      <p>The source code is on GitHub at the <strong>flora-edge-app</strong> repository.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Streamlit makes it surprisingly fast to turn a notebook into a shareable app</li>
        <li>ARIMA works well for short-term forecasts; Random Forest handles complex patterns better</li>
        <li>Data cleaning takes at least 60% of the total project time</li>
        <li>Always validate on a holdout set before deploying any forecast model</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "What I Learned from My Cognifyz Data Science Internship",
    excerpt:
      "A candid reflection on my internship at Cognifyz Technologies — the restaurant data tasks, EDA challenges, geospatial analysis, and how it shaped my data science thinking.",
    category: "Internship Experience",
    categoryColor: "#f97316",
    date: "May 22, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["Cognifyz", "EDA", "Internship", "Data Analysis"],
    content: `
      <h2>About the Internship</h2>
      <p>From April to May 2025, I completed a Data Science internship at Cognifyz Technologies (Intern ID: CTI/A1/C128129). The work was project-based — I was given a real restaurant dataset and a set of multi-level tasks to complete independently.</p>

      <h2>What the Tasks Covered</h2>
      <p>The internship tasks were divided into three levels of increasing complexity:</p>

      <h3>Level 1 — Basic EDA</h3>
      <ul>
        <li>Top cuisines analysis — which cuisine types dominate the dataset</li>
        <li>City-level distribution — where most restaurants are located</li>
        <li>Price range distribution across the dataset</li>
        <li>Online delivery availability analysis</li>
      </ul>

      <h3>Level 2 — Intermediate Analysis</h3>
      <ul>
        <li>Restaurant chain identification vs independent restaurants</li>
        <li>Location-based analysis using latitude/longitude coordinates</li>
        <li>Cuisine and rating correlation</li>
      </ul>

      <h3>Level 3 — Advanced Feature Engineering</h3>
      <ul>
        <li>Encoding categorical variables like cuisine type and city</li>
        <li>Creating new features from existing columns</li>
        <li>Predictive modeling for restaurant ratings</li>
      </ul>

      <h2>The Most Challenging Part</h2>
      <p>The geospatial analysis was the hardest task. I had to group restaurants by location coordinates, plot them meaningfully, and derive regional insights. Getting Folium maps to render correctly inside Jupyter and then export them cleanly took more time than expected.</p>

      <h2>What I Took Away</h2>
      <p>This internship reinforced that real-world data is never clean. I spent more time on data preparation than actual analysis. It also taught me to always <strong>look at the data first</strong> before jumping into modeling.</p>

      <p>The full task code is available on GitHub: <strong>Cognifyz_Internship_tasks</strong> repository.</p>
    `,
  },
  {
    id: 3,
    title: "Analyzing Fitbit Data to Uncover Health Trends",
    excerpt:
      "How I used Python, Pandas, and Seaborn to analyze Fitbase fitness and sleep data — and what the patterns revealed about daily activity and rest quality.",
    category: "Data Analysis",
    categoryColor: "#38bdf8",
    date: "Apr 15, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["Pandas", "Seaborn", "EDA", "Health Analytics"],
    content: `
      <h2>Project Overview</h2>
      <p>The Fitabase Fitness & Sleep Analysis project was a personal data science project where I analyzed Fitbit tracker data to understand patterns in physical activity, sleep, and overall health trends.</p>

      <h2>The Dataset</h2>
      <p>The dataset contained daily records for multiple users including:</p>
      <ul>
        <li>Total steps per day</li>
        <li>Calories burned</li>
        <li>Active vs sedentary minutes</li>
        <li>Distance covered</li>
        <li>Sleep duration and quality scores</li>
      </ul>

      <h2>Key Findings</h2>
      <p>Some of the most interesting patterns I found:</p>
      <ul>
        <li><strong>Step counts peaked on Tuesdays and Saturdays</strong> — suggesting workout routines and weekend activity</li>
        <li><strong>Calorie burn strongly correlated with active minutes</strong> (r = 0.87), more than with steps alone</li>
        <li><strong>Sleep quality declined when sedentary minutes exceeded 700/day</strong> — a clear health signal</li>
        <li>Most users averaged only 6.8 hours of sleep, below the recommended 7–9 hours</li>
      </ul>

      <h2>Tools Used</h2>
      <ul>
        <li><strong>Pandas</strong> — data loading, merging, cleaning</li>
        <li><strong>Matplotlib & Seaborn</strong> — correlation heatmaps, distribution plots, time series charts</li>
        <li><strong>Jupyter Notebook</strong> — analysis environment</li>
      </ul>

      <h2>What I Learned</h2>
      <p>Health data is noisy. Many days had missing or zero entries that needed careful filtering. I also learned that visualizing distributions before computing correlations is essential — outliers in step data completely changed correlation values when not handled.</p>
      <p>Code is available in the <strong>Fitabase-Fitness-Sleep-Analysis</strong> repository on GitHub.</p>
    `,
  },
  {
    id: 4,
    title: "Time Series Forecasting: ARIMA vs Random Forest",
    excerpt:
      "A practical comparison of ARIMA and Random Forest for sales forecasting — when to use which, what the data tells you, and results from my real e-commerce dataset.",
    category: "Machine Learning",
    categoryColor: "#a78bfa",
    date: "Apr 2, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1612838320302-4b3b3996765c?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["ARIMA", "Random Forest", "Time Series", "Python"],
    content: `
      <h2>Why I Compared These Two Models</h2>
      <p>While working on the Flora Edze sales forecasting project, I had to decide: use a classical statistical model (ARIMA) or a machine learning approach (Random Forest). Rather than just pick one, I ran both and compared them on the same dataset.</p>

      <h2>ARIMA — The Classical Approach</h2>
      <p>ARIMA (AutoRegressive Integrated Moving Average) is designed specifically for time series. It works by modeling the autocorrelation in sequential data.</p>

      <h3>When ARIMA Works Well</h3>
      <ul>
        <li>Data has a clear trend or seasonal pattern</li>
        <li>You need interpretable forecasts</li>
        <li>The dataset is not too large</li>
        <li>Short-term forecasting (days/weeks ahead)</li>
      </ul>

      <h3>ARIMA Limitations</h3>
      <ul>
        <li>Assumes linear relationships in the data</li>
        <li>Struggles with sudden external shocks (promotions, holidays)</li>
        <li>Parameter selection (p, d, q) requires careful tuning</li>
      </ul>

      <h2>Random Forest — The ML Approach</h2>
      <p>For Random Forest, I transformed the time series into a supervised learning problem by creating lag features (sales from 1, 2, 3 days ago) and rolling mean features.</p>

      <h3>When Random Forest Works Well</h3>
      <ul>
        <li>Data has complex, non-linear patterns</li>
        <li>You have external features (day of week, promotions, etc.)</li>
        <li>Longer forecast horizons are needed</li>
      </ul>

      <h2>Results on My Dataset</h2>
      <p>On the Flora Edze sales dataset, here's how they compared:</p>
      <ul>
        <li><strong>ARIMA RMSE:</strong> 142.3 — better on short 7-day forecasts</li>
        <li><strong>Random Forest RMSE:</strong> 118.7 — better overall on 30-day forecasts</li>
      </ul>
      <p>I ended up including both models in the Streamlit app so users can choose which output they trust more for their use case.</p>

      <h2>My Recommendation</h2>
      <p>For most e-commerce forecasting tasks: start with ARIMA for a quick baseline, then build a Random Forest model with engineered lag features. Use the one that performs better on your validation period — or ensemble them.</p>
    `,
  },
  {
    id: 5,
    title: "My Journey as a BCA Student Getting into Data Science",
    excerpt:
      "From a BCA student in Hyderabad to completing 5+ internships and deploying real ML apps — here's my honest journey, what worked, and what didn't.",
    category: "Career Journey",
    categoryColor: "#fbbf24",
    date: "Mar 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["Career", "Data Science", "Student", "Journey"],
    content: `
      <h2>Where I Started</h2>
      <p>I'm Sameer Ahmad, a BCA student at Pinnacle Degree College, Hyderabad. When I started my degree, I had zero knowledge of data science. I just knew I liked working with computers and solving problems.</p>

      <h2>The Turning Point</h2>
      <p>In early 2025, I completed a Python for Data Science course on Udemy (Sara Academy). That course made everything click — I finally understood how to use Python practically, not just theoretically.</p>

      <h2>Internship Timeline</h2>
      <p>Within just a few months, I managed to secure multiple internships:</p>
      <ul>
        <li><strong>Minematics Solutions</strong> (March 2025) — Selected as a BCA intern</li>
        <li><strong>Flora Edze</strong> (March–May 2025) — Sales Forecasting project internship</li>
        <li><strong>SaiKet Systems</strong> (April 2025) — Data Science Intern</li>
        <li><strong>CodSoft</strong> (May 2025) — Virtual Data Science Internship</li>
        <li><strong>Cognifyz Technologies</strong> (April–May 2025) — Data Science Intern with completion certificate</li>
      </ul>

      <h2>What Actually Worked</h2>
      <ul>
        <li><strong>Building real projects</strong> — not just following tutorials. I pushed everything to GitHub</li>
        <li><strong>Learning in public</strong> — my Data-Scientist-Journey repo documents my daily learning</li>
        <li><strong>Applying early and often</strong> — internship applications are a numbers game</li>
        <li><strong>Deploying something live</strong> — the Streamlit app gave me a real portfolio link to show</li>
      </ul>

      <h2>What Didn't Work</h2>
      <ul>
        <li>Spending too long on courses before building projects</li>
        <li>Trying to learn everything at once instead of going deep on one area</li>
      </ul>

      <h2>Advice for Other Students</h2>
      <p>Start building projects as early as possible — even imperfect ones. Your GitHub profile and a deployed project URL are worth more than any certificate when applying for internships.</p>
    `,
  },
  {
    id: 6,
    title: "Building My Portfolio Site with React & Framer Motion",
    excerpt:
      "How I designed and built this portfolio — from dark-themed UI decisions to animated components, a Python contact backend, and deploying it live on Vercel.",
    category: "Web Development",
    categoryColor: "#22c55e",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    author: "Sameer Ahmad",
    tags: ["React", "Framer Motion", "Vercel", "Portfolio"],
    content: `
      <h2>Why I Built My Own Portfolio</h2>
      <p>As a data science student, most of my work lives in Jupyter notebooks and GitHub repos. I needed a central place to present everything — projects, certifications, internship experience — in a way that looked professional.</p>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>React (Vite)</strong> — fast frontend framework</li>
        <li><strong>Framer Motion</strong> — smooth page and component animations</li>
        <li><strong>React Router</strong> — multi-page navigation</li>
        <li><strong>Lucide React</strong> — clean icon library</li>
        <li><strong>Python (Flask)</strong> — backend for contact form handling</li>
        <li><strong>Vercel</strong> — deployment platform</li>
      </ul>

      <h2>Design Decisions</h2>
      <p>I went with a dark theme because it fits the data science / tech aesthetic, and it's easier to make neon accent colors (like the teal #00ffd5) pop on a dark background.</p>
      <p>The layout uses a fixed sidebar navigation on desktop with a mobile-responsive hamburger menu. Each page is a separate route with its own entry animation.</p>

      <h2>The Python Backend</h2>
      <p>The contact form sends a POST request to a Flask API that handles email delivery via SMTP. This was my first time connecting a React frontend to a Python backend — good practice for full-stack data science apps.</p>

      <h2>Deployment</h2>
      <p>The frontend is deployed on Vercel (free tier). The backend runs separately. The live site is at: <a href="https://sameer-portfolio-eight-orcin.vercel.app" target="_blank" rel="noopener noreferrer" style="color:#22c55e">sameer-portfolio-eight-orcin.vercel.app</a></p>

      <h2>What I'd Do Differently</h2>
      <p>I'd set up a shared data file for blog posts and projects from the start instead of duplicating data across components. Also, I'd add proper SEO meta tags earlier — they're easy to forget but important for discoverability.</p>
    `,
  },
];

/* ════════════════════════════════════════
   COMPONENT
════════════════════════════════════════ */
function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.id === parseInt(id));

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    if (urls[platform]) window.open(urls[platform], "_blank", "noopener,noreferrer");
  };

  if (!post) {
    return (
      <div className="blog-post-section">
        <div className="post-not-found">
          <h2>Post Not Found</h2>
          <button onClick={() => navigate("/blog")} className="back-btn">
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
          onClick={() => navigate("/blog")}
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
            style={{ color: post.categoryColor, borderColor: `${post.categoryColor}55`, background: `${post.categoryColor}12` }}
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
              <button className="action-icon-btn" title="Bookmark">
                <Bookmark size={16} />
              </button>
              <button className="action-icon-btn" onClick={handleCopyLink} title="Copy link">
                {copied ? <span style={{ fontSize: "0.75rem", color: "#00ffd5" }}>Copied!</span> : <Share2 size={16} />}
              </button>
            </div>
          </div>

          <div className="post-tags-list">
            {post.tags.map((tag, i) => (
              <span key={i} className="tag-item" style={{ borderColor: `${post.categoryColor}44`, color: post.categoryColor, background: `${post.categoryColor}10` }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="post-featured-image"
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={post.image} alt={post.title} />
          <div
            className="featured-overlay"
            style={{ background: `linear-gradient(135deg, ${post.categoryColor}22, transparent)` }}
          />
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
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-btn twitter" onClick={() => handleShare("twitter")}>
              <Twitter size={18} />
              Twitter
            </button>
            <button className="share-btn linkedin" onClick={() => handleShare("linkedin")}>
              <Linkedin size={18} />
              LinkedIn
            </button>
            <button className="share-btn copy" onClick={handleCopyLink}>
              <Copy size={18} />
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </motion.div>

        {/* Comments Placeholder */}
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
          <p className="comments-placeholder">
            Have thoughts on this post? Reach out at{" "}
            <a href="mailto:sameerahmad723898@gmail.com" style={{ color: "#00ffd5" }}>
              sameerahmad723898@gmail.com
            </a>
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default BlogPost;