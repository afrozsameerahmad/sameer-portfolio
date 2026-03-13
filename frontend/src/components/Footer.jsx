import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp, Sparkles, Code2 } from "lucide-react";
import "./Footer.css";

// FIXED:
// ✗ Removed: { name: "Home", href: "/home" } — route is "/" not "/home". Was a 404.
// ✓ All internal links use React Router paths that match App.jsx routes exactly

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },           // FIXED: was "/home" → 404
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/afrozsameerahmad",
          icon: Github,
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/in/sameer-ahmad-a65325335",
          icon: Linkedin,
        },
        {
          name: "Email",
          href: "mailto:sameerahmad723898@gmail.com",
          icon: Mail,
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <Sparkles size={24} className="logo-icon" />
              <span className="logo-text">Sameer Ahmad</span>
            </div>
            <p className="footer-tagline">
              Aspiring AI Engineer building AI-powered solutions for real-world problems.
            </p>
            <div className="footer-badge">
              <div className="badge-dot" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              className="footer-links-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto");
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
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

        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              © {currentYear} <span className="copyright-name">Sameer Ahmad</span>. All rights
              reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={14} className="heart-icon" /> and <Code2 size={14} /> in India
            </p>
          </motion.div>

          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      <div className="footer-bg-gradient" />
    </footer>
  );
}

export default Footer;
