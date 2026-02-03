import API from "../api";
import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await API.post("contact/", form);

      setStatus("Message sent successfully ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch {
      setStatus("Error sending message ❌");
    }
  }

  return (
    <div className="contact">

      <h2>Contact Me</h2>

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

        <button type="submit">
          Send Message
        </button>

      </form>

      {status && <p>{status}</p>}

    </div>
  );
}

export default Contact;
