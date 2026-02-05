import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

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
        setSuccess("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("❌ Something went wrong.");
      }
    } catch {
      setSuccess("⚠️ Server not responding.");
    }

    setLoading(false);
  };

  return (
    <motion.section
      className="section contact"   // ✅ CSS ke saath match
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Contact Me</h1>

      <p>
        Let’s connect and build something great 🚀
      </p>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

      {success && (
        <p className="contact-msg">{success}</p>
      )}

    </motion.section>
  );
}

export default Contact;
