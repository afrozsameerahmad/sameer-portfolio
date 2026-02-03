export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-center py-10 border-t border-slate-800"
    >
      <h4 className="text-xl font-semibold mb-3">
        Contact Me
      </h4>

      <p className="text-slate-400">
        📞 +91-7238982622
      </p>

      <p className="text-slate-400">
        📧 sameerahmad723898@gmail.com
      </p>

      <p className="text-slate-400">
        📍 Lucknow, India
      </p>

      <div className="mt-4 space-x-4">

        <a
          href="https://linkedin.com/in/sameer-ahmad-a65325335/"
          target="_blank"
          className="text-blue-400"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          className="text-blue-400"
        >
          GitHub
        </a>

      </div>

      <p className="mt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Sameer Ahmad
      </p>
    </footer>
  );
}
