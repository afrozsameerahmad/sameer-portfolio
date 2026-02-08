import { motion } from "framer-motion";
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail,
  ArrowUp,
  Sparkles,
  Code2
} from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Social",
      links: [
        { 
          name: "GitHub", 
          href: "https://github.com/afrozsameerahmad",
          icon: Github
        },
        { 
          name: "LinkedIn", 
          href: "https://linkedin.com/in/sameer-ahmad-a65325335",
          icon: Linkedin
        },
        { 
          name: "Email", 
          href: "mailto:sameerahmad723898@gmail.com",
          icon: Mail
        }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <Sparkles size={24} className="logo-icon" />
              <span className="logo-text">Sameer Ahmad</span>
            </div>
            <p className="footer-tagline">
              Aspiring Data Scientist building AI-powered solutions
              for real-world problems.
            </p>
            <div className="footer-badge">
              <div className="badge-dot"></div>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              className="footer-links-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="footer-link"
                      >
                        {Icon && <Icon size={16} />}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.div 
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              © {currentYear} <span className="copyright-name">Sameer Ahmad</span>. 
              All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={14} className="heart-icon" /> and <Code2 size={14} /> in India
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

      </div>

      {/* Background Decoration */}
      <div className="footer-bg-gradient"></div>
    </footer>
  );
}

export default Footer;