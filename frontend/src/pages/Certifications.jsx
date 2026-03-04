import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, ExternalLink, Calendar, CheckCircle, Star,
  TrendingUp, Briefcase, BadgeCheck, Building2, FileText, X, ZoomIn, Download
} from "lucide-react";

// ── Image thumbnails (for the lightbox preview) ──
import cert1 from "../assets/certificates/udemy_python_ds.png";
import intern1 from "../assets/certificates/minematics_letter.png";
import intern2 from "../assets/certificates/floraedze_completion.png";
import intern3 from "../assets/certificates/codsoft_offer.png";
import intern5 from "../assets/certificates/saiket_offer.png";
import intern6 from "../assets/certificates/cognifyz_completion.png";

/*
 ╔══════════════════════════════════════════════════════════════╗
 ║  PDF SETUP — place your PDFs inside:  public/certificates/  ║
 ║                                                              ║
 ║  public/                                                     ║
 ║    certificates/                                             ║
 ║      udemy_python_ds.pdf                                     ║
 ║      cognifyz_completion.pdf                                 ║
 ║      saiket_offer.pdf                                        ║
 ║      codsoft_offer.pdf                                       ║
 ║      floraedze_completion.pdf                                ║
 ║      minematics_letter.pdf                                   ║
 ╚══════════════════════════════════════════════════════════════╝
*/

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */
const certifications = [
  {
    id: 1,
    title: "Python for Data Science Pro: The Complete Mastery Course",
    organization: "Udemy",
    issuer: "Sara Academy",
    date: "April 28, 2025",
    img: cert1,
    previewImg: cert1,
    // Udemy has a real verify URL — opens directly
    pdfLink: "https://ude.my/UC-9de4c950-da43-475e-8e33-e6f6994a8ca5",
    skills: ["Python", "Data Science", "NumPy", "Pandas", "Data Analysis"],
    accent: "#a78bfa",
    featured: true,
    refId: "UC-9de4c950-da43-475e-8e33-e6f6994a8ca5",
  },
];

const internships = [
  {
    id: 1,
    title: "Data Science Intern",
    organization: "Cognifyz Technologies",
    type: "Completion Certificate",
    period: "April 2025 – May 2025",
    img: intern6,
    previewImg: intern6,
    pdfLink: "/certificates/cognifyz_completion.pdf",  // ← PDF in /public/certificates/
    skills: ["Data Science", "Data Analysis", "Machine Learning", "Python"],
    accent: "#f97316",
    featured: true,
    refId: "CTI/A1/C128129",
    description: "Worked on data-driven solutions, complex dataset analysis, and deriving meaningful insights.",
  },
  {
    id: 2,
    title: "Data Science Intern",
    organization: "SaiKet Systems",
    type: "Offer Letter",
    period: "April 25, 2025",
    img: intern5,
    previewImg: intern5,
    pdfLink: "/certificates/saiket_offer.pdf",
    skills: ["Data Science", "Data Analysis", "Decision Making"],
    accent: "#38bdf8",
    featured: false,
    refId: "SKS/A2/C17519",
    description: "Selected for data-driven insights and decision-making across diverse projects at SaiKet Systems.",
  },
  {
    id: 3,
    title: "Data Science Intern",
    organization: "CodSoft",
    type: "Virtual Internship",
    period: "May 1 – May 31, 2025",
    img: intern3,
    previewImg: intern3,
    pdfLink: "/certificates/codsoft_offer.pdf",
    skills: ["Data Science", "Machine Learning", "Python", "Projects"],
    accent: "#22c55e",
    featured: false,
    refId: "CS25RY41429",
    description: "4-week virtual Data Science internship focused on learning and hands-on skill development.",
  },
  {
    id: 4,
    title: "Sale Forecasting Intern",
    organization: "Flora Edze",
    type: "Internship Completion",
    period: "March 25 – May 5, 2025",
    img: intern2,
    previewImg: intern2,
    pdfLink: "/certificates/floraedze_completion.pdf",
    skills: ["Sales Forecasting", "E-commerce", "Deployment", "Security"],
    accent: "#00ffd5",
    featured: false,
    refId: "FE120PDC",
    description: "Project-based internship in Sale Forecasting for E-commerce business at Flora Edze, Hyderabad.",
  },
  {
    id: 5,
    title: "BCA Intern",
    organization: "Minematics Solutions Pvt. Ltd.",
    type: "Selection Letter",
    period: "March 10, 2025",
    img: intern1,
    previewImg: intern1,
    pdfLink: "/certificates/minematics_letter.pdf",
    skills: ["Operations", "Business Analytics", "Tech"],
    accent: "#fbbf24",
    featured: false,
    refId: "Pinnacle Degree College",
    description: "Selected among BCA students for internship at Minematics Solutions, Hyderabad.",
  },
];

const stats = [
  { icon: <Award size={18} />, value: "1", label: "Certificate" },
  { icon: <Briefcase size={18} />, value: "5+", label: "Internships" },
  { icon: <TrendingUp size={18} />, value: "2025", label: "Latest" },
  { icon: <Building2 size={18} />, value: "6", label: "Organizations" },
];

const stagger = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
});

/* ════════════════════════════════════════
   LIGHTBOX  (thumbnail click → image preview)
════════════════════════════════════════ */
function Lightbox({ item, onClose }) {
  const openPdf = () => window.open(item.pdfLink, "_blank", "noopener,noreferrer");

  return (
    <motion.div
      className="cert-lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="cert-lightbox-modal"
        initial={{ opacity: 0, scale: 0.88, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 32 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cert-lightbox-header" style={{ borderBottomColor: `${item.accent}33` }}>
          <div className="cert-lightbox-header-info">
            <span
              className="cert-lightbox-org"
              style={{ color: item.accent, borderColor: `${item.accent}44`, background: `${item.accent}18` }}
            >
              {item.organization}
            </span>
            <h3 className="cert-lightbox-title">{item.title}</h3>
            <p className="cert-lightbox-period">
              <Calendar size={13} />
              {item.period || item.date}
            </p>
          </div>
          <button className="cert-lightbox-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Image preview */}
        <div className="cert-lightbox-img-wrap">
          <div
            className="cert-lightbox-glow"
            style={{ background: `radial-gradient(ellipse at center, ${item.accent}22 0%, transparent 70%)` }}
          />
          <img src={item.previewImg} alt={item.title} className="cert-lightbox-img" />
        </div>

        {/* Footer with Open PDF button */}
        <div className="cert-lightbox-footer">
          {item.refId && (
            <span className="cert-lightbox-ref">
              <FileText size={13} />
              Ref: {item.refId}
            </span>
          )}
          <button
            className="cert-lightbox-pdf-btn"
            style={{ background: item.accent }}
            onClick={openPdf}
          >
            <ExternalLink size={14} />
            Open Full PDF
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════
   CARD
════════════════════════════════════════ */
function Card({ item, index, type, onPreview }) {
  // "View Credential" → open PDF directly in new tab
  const handleViewCredential = (e) => {
    e.stopPropagation();
    window.open(item.pdfLink, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      className={`cert-card${item.featured ? " cert-card--featured" : ""}`}
      {...stagger(index)}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="cert-accent-bar" style={{ background: item.accent }} />

      {/* Thumbnail — click to open image lightbox */}
      <div
        className="cert-thumb-wrap"
        onClick={() => onPreview(item)}
        style={{ cursor: "zoom-in" }}
        title="Click to preview"
      >
        <img src={item.img} alt={item.title} className="cert-thumb" />
        <div className="cert-thumb-overlay" style={{ background: `${item.accent}15` }} />
        <div className="cert-thumb-zoom">
          <ZoomIn size={20} />
          <span>Preview</span>
        </div>
        {item.featured && (
          <div className="cert-featured-badge">
            <Star size={11} fill="currentColor" />
            Featured
          </div>
        )}
        <div className="cert-type-badge" style={{ borderColor: `${item.accent}55`, color: item.accent }}>
          {type === "cert" ? <BadgeCheck size={11} /> : <Briefcase size={11} />}
          {type === "cert" ? "Certificate" : item.type}
        </div>
      </div>

      {/* Body */}
      <div className="cert-body">
        <div className="cert-org-row">
          <span className="cert-org" style={{ color: item.accent, borderColor: `${item.accent}33` }}>
            {item.organization}
          </span>
          {item.issuer && <span className="cert-issuer">by {item.issuer}</span>}
        </div>

        <h3 className="cert-name">{item.title}</h3>

        {item.description && <p className="cert-desc">{item.description}</p>}

        <div className="cert-date">
          <Calendar size={13} />
          {item.period || item.date}
        </div>

        {item.refId && (
          <div className="cert-ref">
            <FileText size={11} />
            <span>{item.refId}</span>
          </div>
        )}

        <div className="cert-skills">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="cert-skill"
              style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}0d` }}
            >
              <CheckCircle size={11} />
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA — opens PDF in new tab */}
      <button
        className="cert-cta"
        style={{ "--accent": item.accent }}
        onClick={handleViewCredential}
        title="Opens PDF in new tab"
      >
        <span>View Credential</span>
        <ExternalLink size={15} />
      </button>
    </motion.article>
  );
}

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
function Certifications() {
  const [preview, setPreview] = useState(null);

  return (
    <motion.section
      className="certs-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Lightbox */}
      <AnimatePresence>
        {preview && <Lightbox item={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>

      {/* Header */}
      <motion.div className="certs-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="certs-badge">
          <Award size={14} />
          <span>Achievements</span>
        </div>
        <h1 className="certs-title">
          Certifications &amp; <span className="certs-highlight">Internships</span>
        </h1>
        <p className="certs-subtitle">
          Professional certifications and real-world internship experience across Data Science &amp; Tech
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div className="certs-stats" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
        {stats.map((s, i) => (
          <div key={s.label} className="certs-stat">
            <span className="certs-stat-icon">{s.icon}</span>
            <strong className="certs-stat-value">{s.value}</strong>
            <span className="certs-stat-label">{s.label}</span>
            {i < stats.length - 1 && <div className="certs-stat-div" />}
          </div>
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div className="certs-section-label" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <BadgeCheck size={16} />
        <span>Course Certifications</span>
      </motion.div>
      <div className="certs-grid certs-grid--certs">
        {certifications.map((cert, i) => (
          <Card key={cert.id} item={cert} index={i} type="cert" onPreview={setPreview} />
        ))}
      </div>

      {/* Internships */}
      <motion.div className="certs-section-label certs-section-label--intern" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ marginTop: "52px" }}>
        <Briefcase size={16} />
        <span>Internship Experience</span>
      </motion.div>
      <div className="certs-grid">
        {internships.map((intern, i) => (
          <Card key={intern.id} item={intern} index={i} type="intern" onPreview={setPreview} />
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div className="certs-footer-cta" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="certs-footer-icon"><TrendingUp size={22} /></div>
        <h3 className="certs-footer-title">Always Growing</h3>
        <p className="certs-footer-desc">
          Continuously building expertise in Data Science, Machine Learning, and Software Development
        </p>
        <div className="certs-platforms">
          {["Udemy", "Cognifyz", "CodSoft", "SaiKet", "Flora Edze", "Minematics"].map((p, i, arr) => (
            <span key={p} className="certs-platform-group">
              <span className="certs-platform">{p}</span>
              {i < arr.length - 1 && <span className="certs-platform-dot">·</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Certifications;