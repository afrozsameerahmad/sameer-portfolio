import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  CheckCircle,
  AlertCircle,
  Loader
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sameerahmad723898@gmail.com",
      link: "mailto:sameerahmad723898@gmail.com",
      color: "#00ffd5"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7238982622",
      link: "tel:+917238982622",
      color: "#ff6b6b"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, Uttar Pradesh, India",
      link: null,
      color: "#4ecdc4"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/sameer-ahmad-a65325335",
      color: "#0077b5"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/afrozsameerahmad",
      color: "#333"
    }
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch(
        "https://sameer-portfolio-backend.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Server not responding. Please try emailing directly." });
    }

    setLoading(false);
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div 
        className="contact-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-badge">
          <Mail size={16} />
          <span>Get In Touch</span>
        </div>
        <h1 className="contact-title">
          Let's <span className="title-highlight">Connect</span>
        </h1>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="contact-container">
        {/* Left Side - Contact Form */}
        <motion.div 
          className="contact-form-section"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-textarea"
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <>
                  <Loader size={20} className="spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Status Message */}
          {status.message && (
            <motion.div 
              className={`status-message ${status.type}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status.type === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span>{status.message}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div 
          className="contact-info-section"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Contact Info Cards */}
          <div className="info-cards">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div 
                    className="info-icon"
                    style={{ background: `${info.color}22`, color: info.color }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <div className="info-value">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3 className="social-title">Connect on Social Media</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} />
                    <span>{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Availability Card */}
          <motion.div 
            className="availability-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="availability-dot"></div>
            <div>
              <div className="availability-title">Available for Opportunities</div>
              <div className="availability-desc">
                Open to internships, freelance projects, and collaborations
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="contact-bg-decoration bg-dec-1"></div>
      <div className="contact-bg-decoration bg-dec-2"></div>
    </motion.section>
  );
}

export default Contact;