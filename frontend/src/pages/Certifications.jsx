import { motion } from "framer-motion";
import { 
  Award, 
  ExternalLink, 
  Calendar,
  CheckCircle,
  Star,
  Download,
  Eye
} from "lucide-react";

import cert1 from "../assets/certificates/coursera_ds.png";
import cert2 from "../assets/certificates/ml_ai.png";
import cert3 from "../assets/certificates/powerbi.png";
import cert4 from "../assets/certificates/fullstack.png";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Data Science with Python",
      organization: "Coursera",
      issuer: "IBM",
      year: "2024",
      date: "January 2024",
      img: cert1,
      link: "https://coursera.org/verify/XXXXX",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
      color: "#00ffd5",
      featured: true,
      credentialId: "ABC123XYZ"
    },
    {
      id: 2,
      title: "Machine Learning Specialization",
      organization: "DeepLearning.AI",
      issuer: "Andrew Ng",
      year: "2023",
      date: "December 2023",
      img: cert2,
      link: "https://coursera.org/verify/YYYYY",
      skills: ["ML Algorithms", "Neural Networks", "Supervised Learning"],
      color: "#ff6b6b",
      featured: true,
      credentialId: "DEF456UVW"
    },
    {
      id: 3,
      title: "Power BI Data Analyst",
      organization: "Microsoft",
      issuer: "Microsoft Learn",
      year: "2024",
      date: "February 2024",
      img: cert3,
      link: "https://learn.microsoft.com/verify/ZZZZZ",
      skills: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
      color: "#4ecdc4",
      featured: false,
      credentialId: "GHI789RST"
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      organization: "Udemy",
      issuer: "Angela Yu",
      year: "2022",
      date: "November 2022",
      img: cert4,
      link: "https://udemy.com/certificate/AAAAA",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      color: "#ffd93d",
      featured: false,
      credentialId: "JKL012MNO"
    }
  ];

  const stats = [
    { value: "5+", label: "Certifications" },
    { value: "4", label: "Platforms" },
    { value: "2024", label: "Latest" }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const regularCerts = certifications.filter(cert => !cert.featured);

  return (
    <motion.section
      className="certifications-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="certifications-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-badge">
          <Award size={16} />
          <span>Achievements</span>
        </div>
        <h1 className="certifications-title">
          Certifications & <span className="title-highlight">Credentials</span>
        </h1>
        <p className="certifications-subtitle">
          Continuous learning through professional certifications and courses
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="certifications-stats"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="cert-stat-box">
            <div className="cert-stat-value">{stat.value}</div>
            <div className="cert-stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Featured Certifications */}
      {featuredCerts.length > 0 && (
        <div className="featured-certs-section">
          <h2 className="section-subtitle">
            <Star size={20} fill="currentColor" />
            Featured Certifications
          </h2>
          <div className="featured-certs-grid">
            {featuredCerts.map((cert, index) => (
              <motion.article
                key={cert.id}
                className="featured-cert-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Certificate Image */}
                <div className="cert-image-wrapper">
                  <img src={cert.img} alt={cert.title} className="cert-image" />
                  <div 
                    className="cert-overlay"
                    style={{ background: `linear-gradient(135deg, ${cert.color}44, transparent)` }}
                  ></div>
                  <div className="cert-actions">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cert-action-btn"
                      title="View Certificate"
                    >
                      <Eye size={20} />
                    </a>
                    <button className="cert-action-btn" title="Download">
                      <Download size={20} />
                    </button>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="cert-content">
                  <div className="cert-header">
                    <div 
                      className="cert-icon"
                      style={{ background: `${cert.color}22`, color: cert.color }}
                    >
                      <Award size={24} />
                    </div>
                    <span className="featured-label">Featured</span>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  
                  <div className="cert-issuer">
                    <span className="org-name" style={{ color: cert.color }}>
                      {cert.organization}
                    </span>
                    <span className="issuer-name">by {cert.issuer}</span>
                  </div>

                  <div className="cert-meta">
                    <span className="cert-date">
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                    <span className="cert-id">ID: {cert.credentialId}</span>
                  </div>

                  {/* Skills */}
                  <div className="cert-skills">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="cert-skill"
                        style={{ borderColor: cert.color, color: cert.color }}
                      >
                        <CheckCircle size={12} />
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                    style={{ background: `${cert.color}22`, color: cert.color }}
                  >
                    <span>View Credential</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Decoration */}
                <div 
                  className="cert-decoration"
                  style={{ background: `${cert.color}11` }}
                ></div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      {/* Regular Certifications */}
      <div className="regular-certs-section">
        <h2 className="section-subtitle">All Certifications</h2>
        <div className="certs-grid">
          {regularCerts.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="card-image-section">
                <img src={cert.img} alt={cert.title} className="card-cert-image" />
                <div 
                  className="card-overlay"
                  style={{ background: `linear-gradient(135deg, ${cert.color}33, transparent)` }}
                ></div>
              </div>

              {/* Content */}
              <div className="card-cert-content">
                <div 
                  className="card-cert-icon"
                  style={{ background: `${cert.color}22`, color: cert.color }}
                >
                  <Award size={20} />
                </div>

                <h3 className="card-cert-title">{cert.title}</h3>
                
                <p className="card-cert-org" style={{ color: cert.color }}>
                  {cert.organization}
                </p>
                
                <div className="card-cert-info">
                  <span className="card-cert-year">{cert.year}</span>
                  <span className="card-cert-issuer">by {cert.issuer}</span>
                </div>

                {/* Skills Tags */}
                <div className="card-cert-skills">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="card-cert-skill">{skill}</span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="card-cert-skill">+{cert.skills.length - 3}</span>
                  )}
                </div>

                <div className="card-cert-footer">
                  <span className="view-text">View Certificate</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="certs-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="cta-title">Continuous Learning</h3>
        <p className="cta-desc">
          Currently pursuing more certifications in Advanced Machine Learning and Cloud Computing
        </p>
        <div className="cta-platforms">
          <span>Coursera</span>
          <span>•</span>
          <span>DataCamp</span>
          <span>•</span>
          <span>AWS</span>
          <span>•</span>
          <span>Google Cloud</span>
        </div>
      </motion.div>

      {/* Background */}
      <div className="certs-bg-decoration bg-dec-1"></div>
      <div className="certs-bg-decoration bg-dec-2"></div>
    </motion.section>
  );
}

export default Certifications;