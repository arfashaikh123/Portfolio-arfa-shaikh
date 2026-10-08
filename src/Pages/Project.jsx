import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Code,
  Globe,
  Database,
  Smartphone,
  Eye,
  Activity,
  Bone,
  Zap,
  Lock,
  Newspaper,
  Calendar,
  X,
  Sparkles,
} from "lucide-react";
import "./Project.css";

// Import generated thumbnails
import cardioscanThumb from "../assets/cardioscan_thumb.png";
import fractureThumb from "../assets/fracture_thumb.png";
import papergenThumb from "../assets/papergen_thumb.png";
import spaceThumb from "../assets/space_thumb.png";
import scanjoyThumb from "../assets/scanjoy_thumb.png";
import nfprojThumb from "../assets/nfproj_thumb.png";
import sparkThumb from "../assets/spark_thumb.png";
import creditThumb from "../assets/credit_thumb.png";
import pixieThumb from "../assets/pixie_thumb.png";
import paryaThumb from "../assets/parya_thumb.png";
import mtengzThumb from "../assets/mtengz_thumb.png";
import jagatThumb from "../assets/jagat_thumb.png";
import weddingThumb from "../assets/wedding_thumb.png";

const categories = ["All", "AI / ML", "Full-Stack", "Web & Design"];

const projectsData = [
  {
    title: "DeepTrace",
    desc: "AI-generated and AI-edited image detection platform running a four-stage forensic pipeline with calibrated, honesty-first verdicts.",
    category: "AI / ML",
    url: "https://deeptrace-ai-check.netlify.app/",
    tech: ["Python", "FastAPI", "React 18", "OpenCV", "scikit-learn"],
    icon: <Eye size={24} />,
    details: {
      problem: "Synthetic and AI-manipulated images are spreading faster than trust can follow, and most detectors overclaim certainty even when the evidence is thin or contradictory.",
      solution: "Built an end-to-end detection platform that ingests images up to 15 MB and runs a four-stage forensic pipeline: C2PA/XMP provenance checks, metadata forensics with privacy-preserving GPS handling, FFT/DCT spectral and noise/texture analysis, and ML inference — fused through a 10-path decision tree into a calibrated verdict.",
      achievements: [
        "Shipped honesty guarantees: confidence caps on thin evidence, a first-class INCONCLUSIVE output, and signature checks reporting unverified instead of valid.",
        "Localized potential AI-edited regions with heatmap overlays and shipped a tabbed evidence report with confidence ring and JSON export.",
        "Hardened with 22 pytest unit tests plus 13/13 live end-to-end probes, deployed as split architecture (Render API + Netlify SPA) with same-origin /api proxying.",
      ],
    },
  },
  {
    title: "CardioScan",
    desc: "AI-powered ECG analysis and arrhythmia detection using 2D-CNN models. Accurately flags patterns from clinical signals.",
    category: "AI / ML",
    url: "https://cardioscan.netlify.app",
    tech: ["Python", "TensorFlow", "Deep Learning", "ECG"],
    icon: <Activity size={24} />,
    thumbnail: cardioscanThumb,
    details: {
      problem: "Traditional ECG review can be slow and subject to error under fatigue. Automated triage can save critical minutes.",
      solution: "Developed a 2D Convolutional Neural Network (CNN) trained on the MIT-BIH Arrhythmia Database that classifies beats into normal, ventricular, supraventricular, or block categories with high specificity.",
      achievements: [
        "Converted raw 1D signals into spectrogram images for 2D convolutional feature extraction.",
        "Built a responsive React frontend connected to an inference server.",
        "Integrated custom PDF report generation for clinical diagnostics.",
      ],
    },
  },
  {
    title: "AI Bone Fracture Detection",
    desc: "AI-based bone fracture detection system trained on clinical X-ray images, providing immediate screening and classification.",
    category: "AI / ML",
    url: "https://bone-fracture.netlify.app",
    tech: ["Python", "PyTorch", "CNN", "Medical Imaging"],
    icon: <Bone size={24} />,
    thumbnail: fractureThumb,
    details: {
      problem: "Radiologist bottlenecks in busy emergency rooms lead to delays in treating acute fractures.",
      solution: "Engineered a Deep Residual Network (ResNet) to perform binary classification (Fracture vs. Healthy) and heat-map generation (Grad-CAM) to pinpoint diagnostic regions for doctors.",
      achievements: [
        "Achieved 94.2% validation accuracy on clinical radiography datasets.",
        "Created an interactive image upload tool with zoom and annotation properties.",
        "Developed API endpoints serving real-time model inferences under 120ms.",
      ],
    },
  },
  {
    title: "NextPaperGen",
    desc: "Intelligent question paper generator that extracts course structures from syllabi PDFs and maps evaluation priorities.",
    category: "AI / ML",
    url: "https://nextpapergen.netlify.app",
    tech: ["React", "Node.js", "AI", "PDF Parsing"],
    icon: <Sparkles size={24} />,
    thumbnail: papergenThumb,
    details: {
      problem: "Drafting examinations that fairly map to university syllabi, difficulty criteria, and bloom's taxonomy requires hours of manual evaluation.",
      solution: "Built an LLM-assisted workspace that parses syllabi documents, categorizes topics, and constructs standardized exams with randomized, balanced questions.",
      achievements: [
        "Implemented robust local PDF scanning to pull index and syllabus guidelines.",
        "Created template options matching official university examination formats.",
        "Added manual overriding so teachers can adjust difficulty sliders in real-time.",
      ],
    },
  },
  {
    title: "Space Debris Tracking",
    desc: "Real-time orbital debris visualization using 3D globe models, tracking thousands of active satellites and fragments.",
    category: "AI / ML",
    url: "https://space-debris-tracking.netlify.app",
    tech: ["Three.js", "React", "CelesTrak API", "TLE"],
    icon: <Globe size={24} />,
    thumbnail: spaceThumb,
    details: {
      problem: "Visualizing space congestion and predicting close orbital approaches requires complex coordinate conversions.",
      solution: "Constructed a WebGL 3D globe using Three.js that fetches daily Two-Line Element (TLE) satellite data and propagates orbital paths in real-time.",
      achievements: [
        "Engineered WebGL shaders capable of rendering 15,000+ individual particles at 60 FPS.",
        "Created predictive collision tracking indicating proximity warnings between active satellites.",
        "Integrated custom search filters by country, launch year, and debris type.",
      ],
    },
  },
  {
    title: "ScanJoy",
    desc: "Premium event ticketing and digital check-in platform featuring custom QR generation and WhatsApp API integration.",
    category: "Full-Stack",
    url: "https://scanjoy.netlify.app/",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp API"],
    icon: <Smartphone size={24} />,
    thumbnail: scanjoyThumb,
    details: {
      problem: "Traditional event platforms charge high fees and lack friction-free communication channels like direct chat messaging.",
      solution: "Developed an invite-focused ticket manager that sends PDF tickets with encrypted QR codes directly to guests' WhatsApp accounts.",
      achievements: [
        "Built a mobile companion web scanner that checks in guests at the door in under a second.",
        "Created an analytics dashboard tracking ticket sales, check-in percentages, and drop-off rates.",
        "Integrated secure payment gateways with support for immediate payouts.",
      ],
    },
  },
  {
    title: "N&F Projects",
    desc: "Full-stack tender management system featuring role-based workflows, project milestones, and live budget tracking.",
    category: "Full-Stack",
    url: "https://nf-projects.netlify.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: <Database size={24} />,
    thumbnail: nfprojThumb,
    details: {
      problem: "Construction and corporate bids often suffer from opaque communication and manual spreadsheet management.",
      solution: "Created an enterprise tender portal where contractors can apply, review proposals, and update milestones on active contracts.",
      achievements: [
        "Configured strict Role-Based Access Control (RBAC) separating admins, contractors, and project owners.",
        "Created an interactive timeline demonstrating project phases, budget usage, and delay indicators.",
        "Added file-hosting capabilities to house engineering blueprint documents securely.",
      ],
    },
  },
  {
    title: "Problem Spark",
    desc: "Problem-statement aggregator using background crawlers, identifying active hackathon and research proposals.",
    category: "Full-Stack",
    url: "https://problemspark.netlify.app",
    tech: ["React", "Cheerio", "Node.js", "Netlify"],
    icon: <Search size={24} />,
    thumbnail: sparkThumb,
    details: {
      problem: "Students and hackathon developers struggle to find validated, real-world problems to solve.",
      solution: "Built a web crawling tool that scrapes challenges posted by universities, corporations, and government portals and indexes them with AI tags.",
      achievements: [
        "Created scheduled cron crawlers that aggregate data weekly from multiple portals.",
        "Added AI search keywords mapping difficulty, industry domain, and potential tech stacks.",
        "Allowed bookmarking and exporting to markdown for team planning.",
      ],
    },
  },
  {
    title: "CreditShield",
    desc: "FinTech risk evaluation platform illustrating credit scoring methodologies and fraud prevention awareness.",
    category: "Full-Stack",
    url: "https://creditshield.netlify.app",
    tech: ["React", "TailwindCSS", "ChartJS", "Framer Motion"],
    icon: <Lock size={24} />,
    thumbnail: creditThumb,
    details: {
      problem: "Consumers and merchants often find credit scoring systems opaque and lack understanding of credit health indicators.",
      solution: "Created a simulator showing how payment history, utilization, and account age calculate risk levels in real-time.",
      achievements: [
        "Configured interactive slider variables to simulate financial actions on credit scores.",
        "Built detailed breakdowns of fraud prevention measures and secure transaction guidelines.",
        "Used responsive canvas graphs to visualize longitudinal credit changes.",
      ],
    },
  },
  {
    title: "Pixie Notch NZ",
    desc: "Handcrafted brand portfolio for a creative agency in New Zealand, built for fast loading and immersive visuals.",
    category: "Web & Design",
    url: "https://pixienotchnz.netlify.app",
    tech: ["React", "Vanilla CSS", "Framer Motion"],
    icon: <Globe size={24} />,
    thumbnail: pixieThumb,
    details: {
      problem: "Creative portfolios must stand out instantly, demanding custom animations without bloated package sizes.",
      solution: "Developed a custom landing page for the studio using highly tailored CSS animations, fluid typographic systems, and optimized image assets.",
      achievements: [
        "Achieved near-perfect 99/100 Lighthouse performance metrics through smart resource loading.",
        "Designed fluid layouts matching local New Zealand landscape branding guides.",
        "Integrated contact channels for direct consultation scheduling.",
      ],
    },
  },
  {
    title: "Paryavaran Council",
    desc: "Environmental advocacy platform displaying ecological milestones, tree plantation tracking, and green initiatives.",
    category: "Web & Design",
    url: "https://paryavarancouncil.in",
    tech: ["React", "SEO", "Responsive Design"],
    icon: <Globe size={24} />,
    thumbnail: paryaThumb,
    details: {
      problem: "Non-profit websites often suffer from outdated designs, making it hard to mobilize volunteers and track tree planting drives.",
      solution: "Created a modern portal mapping active plantation sites, listing environment programs, and accepting volunteer registrations.",
      achievements: [
        "Developed custom counters reflecting active ecological impacts.",
        "Optimized pages for search queries, securing local organization discovery on search engines.",
        "Configured a lightweight content administration interface for volunteers.",
      ],
    },
  },
  {
    title: "MTENGZ",
    desc: "Corporate service site for a technical consulting firm, providing professional project portfolios and quotes.",
    category: "Web & Design",
    url: "https://mtengz.in",
    tech: ["React", "Branding", "Responsive UI"],
    icon: <Globe size={24} />,
    thumbnail: mtengzThumb,
    details: {
      problem: "Engineering firms need an clean, authoritative web presence to present compliance audits and case studies.",
      solution: "Designed a clean site featuring case cards, industrial service tables, and quote builders.",
      achievements: [
        "Engineered an automated request-for-quote form sending formatted client requests to engineering teams.",
        "Created case studies showcasing complex ventilation and building audits.",
        "Configured absolute cross-browser rendering compatibility.",
      ],
    },
  },
  {
    title: "Jagat Bharti",
    desc: "Digital journalism and newspaper portal featuring article categories, search indexes, and responsive layouts.",
    category: "Web & Design",
    url: "https://jagatbharti.netlify.app",
    tech: ["React", "Content Grid", "Social Sharing"],
    icon: <Newspaper size={24} />,
    thumbnail: jagatThumb,
    details: {
      problem: "Local digital newspapers struggle with layout readability when viewing text-heavy articles on mobile screens.",
      solution: "Structured a newspaper-style grid that rearranges sections based on screen width, emphasizing typography and readability.",
      achievements: [
        "Integrated dynamic font resizing controls for senior readers.",
        "Added instantaneous search to filter articles by category or publication date.",
        "Optimized image loading pipelines to ensure articles load on slow 3G connections.",
      ],
    },
  },
  {
    title: "Wedding Invitation Portal",
    desc: "Custom digital invitation site containing interactive maps, RSVP trackers, and a digital wedding gallery.",
    category: "Web & Design",
    url: "https://maruf-arshi-wedding.netlify.app",
    tech: ["Frontend", "Framer Motion", "RSVP Form"],
    icon: <Calendar size={24} />,
    thumbnail: weddingThumb,
    details: {
      problem: "Paper invitations are static and cannot track real-time food preferences or attendance tallies.",
      solution: "Created an interactive webpage incorporating RSVP submissions directly to database records, audio backgrounds, and integrated directions.",
      achievements: [
        "Built responsive count-down timers and animated event itineraries.",
        "Collected over 200 attendee RSVP records containing food preferences and messages.",
        "Designed elegant, card-turning animation pages showcasing couple milestones.",
      ],
    },
  },
];

// Interactive Browser Frame Component
function ProjectBrowserFrame({ url, title, thumbnail }) {
  const [interact, setInteract] = useState(!thumbnail);

  return (
    <div className="browser-mock-frame" onClick={(e) => e.stopPropagation()}>
      <div className="browser-title-bar">
        <div className="browser-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="browser-url-bar">{url.replace("https://", "")}</div>
      </div>
      <div className="browser-window-content">
        {!interact ? (
          <div className="browser-image-placeholder">
            <img src={thumbnail} alt={`${title} preview`} />
            <div className="browser-placeholder-overlay">
              <button
                className="btn primary frame-load-btn"
                onClick={() => setInteract(true)}
              >
                Load Live Frame
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            className="browser-iframe-frame"
          />
        )}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category and search term
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.section
      className="projects-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="projects-header-wrapper" variants={cardVariants}>
        <span className="badge">
          <Code size={14} /> DEPLOYMENTS
        </span>
        <h1 className="projects-main-title">
          Shipped & <span className="highlight-text">Live Work</span>
        </h1>
        <p className="projects-subtitle-text">
          Explore interactive web frames and custom deep learning models. Click "Load Live Frame" to view the actual live application inside the card.
        </p>

        {/* Toolbar: Category Filters & Search Input */}
        <div className="projects-toolbar">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-box-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search by title, tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="projects-grid-list" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              className="project-display-card glass-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* Mock Browser Frame showing static thumbnail / live frame */}
              <ProjectBrowserFrame
                url={project.url}
                title={project.title}
                thumbnail={project.thumbnail}
              />

              <div className="proj-card-content-area">
                <div className="proj-card-top">
                  <div className="proj-card-title-row">
                    <div className="proj-card-icon">{project.icon}</div>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="proj-card-cat">{project.category}</span>
                </div>

                <div className="proj-card-middle">
                  <p>{project.desc}</p>
                </div>

                <div className="proj-card-bottom">
                  <div className="proj-card-tags">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag-more">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  <span className="view-details-indicator">View Specs &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content-card glass-card"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="modal-header">
                <div className="modal-title-area">
                  <div className="modal-icon">{selectedProject.icon}</div>
                  <div>
                    <h2>{selectedProject.title}</h2>
                    <span className="badge">{selectedProject.category}</span>
                  </div>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <div className="modal-description-section">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.desc}</p>

                  <h3 style={{ marginTop: "1.5rem" }}>The Problem</h3>
                  <p className="modal-meta-text">{selectedProject.details.problem}</p>

                  <h3 style={{ marginTop: "1.5rem" }}>Our Solution</h3>
                  <p className="modal-meta-text">{selectedProject.details.solution}</p>
                </div>

                <div className="modal-highlights-section">
                  <h3>Key Deliverables</h3>
                  <ul className="modal-bullets-list">
                    {selectedProject.details.achievements.map((bullet, idx) => (
                      <li key={idx}>
                        <Sparkles size={14} className="bullet-glow-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ marginTop: "1.5rem" }}>Technologies Used</h3>
                  <div className="modal-tech-grid">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Web Frame inside Modal */}
              <div className="modal-iframe-container" style={{ marginTop: "2rem" }}>
                <h3>Live Interactive Frame</h3>
                <ProjectBrowserFrame
                  url={selectedProject.url}
                  title={selectedProject.title}
                  thumbnail={selectedProject.thumbnail}
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Open in New Window
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn secondary"
                >
                  Close Explorer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
