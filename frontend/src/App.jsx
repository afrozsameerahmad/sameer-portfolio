import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certifications";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ Global animated background — visible on every page */}
      <ParticleCanvas />

      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/skills"         element={<Skills />} />
          <Route path="/experience"     element={<Experience />} />
          <Route path="/certifications" element={<Certificates />} />
          <Route path="/blog"           element={<Blog />} />
          <Route path="/blog/:id"       element={<BlogPost />} />
          <Route path="/contact"        element={<Contact />} />
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;