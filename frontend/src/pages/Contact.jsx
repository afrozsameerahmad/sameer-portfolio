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

  // Use environment variable or fallback to production URL
  const API_URL = import.meta.env.VITE_API_URL || "https://sameer-portfolio-backend.onrender.com";

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
      color: "#fff"
    }
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ 
        type: "error", 
        message: "Please fill in all fields." 
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ 
        type: "error", 
        message: "Please enter a valid email address." 
      });
      return;
    }

    setLoading(true);
    setStatus({ 
      type: "info", 
      message: "⏳ Sending your message..." 
    });

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

    try {
      console.log("Sending to:", `${API_URL}/api/contact/`);
      console.log("Form data:", form);

      const res = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("Response status:", res.status);

      // Parse response
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        throw new Error("Invalid response from server");
      }

      console.log("Response data:", data);

      if (res.ok) {
        setStatus({ 
          type: "success", 
          message: data.message || "✨ Message sent successfully! I'll get back to you soon." 
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ 
          type: "error", 
          message: data.message || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Contact form error:", error);
      
      if (error.name === 'AbortError') {
        setStatus({ 
          type: "error", 
          message: "⏱️ Request timed out. The server might be waking up. Please try again in a moment." 
        });
      } else if (error.message === 'Failed to fetch') {
        // Network error or CORS issue
        setStatus({ 
          type: "warning", 
          message: "⚠️ Unable to reach server. Opening your email client as backup..." 
        });
        
        // Fallback to mailto
        setTimeout(() => {
          const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
          const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
          );
          const mailtoLink = `mailto:sameerahmad723898@gmail.com?subject=${subject}&body=${body}`;
          window.location.href = mailtoLink;
        }, 1500);
      } else {
        setStatus({ 
          type: "error", 
          message: `❌ ${error.message || "An unexpected error occurred. Please try again."}` 
        });
      }
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${loading ? 'loading' : ''}`}
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <>
                  <Loader size={20} className="spin-icon" />
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
              exit={{ opacity: 0, y: -10 }}
            >
              {status.type === "success" ? (
                <CheckCircle size={20} />
              ) : status.type === "info" ? (
                <Loader size={20} className="spin-icon" />
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