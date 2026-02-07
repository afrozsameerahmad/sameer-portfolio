import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <p>© {new Date().getFullYear()} Sameer Ahmad. All Rights Reserved.</p>

      <div className="footer-links">

        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        <a href="mailto:yourmail@gmail.com">Email</a>

      </div>

    </footer>
  );
}

export default Footer;
