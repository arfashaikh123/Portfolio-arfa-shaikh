import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  GraduationCap,
  Users,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MoreHorizontal,
  Award,
  Settings,
  Activity,
  Bone,
  Eye,
  Zap,
  TrendingUp,
  Brain,
  Globe,
} from "lucide-react";
import "./Home.css";
const pfp2 = "/1000411717.webp";

const expYears = new Date().getFullYear() - 2023;

const stats = [
  {
    icon: <Briefcase size={20} />,
    value: "15+",
    label: "AI/ML Projects",
  },
  {
    icon: <Globe size={20} />,
    value: "12+",
    label: "Live Deployments",
  },
  {
    icon: <GraduationCap size={20} />,
    value: `${expYears}+`,
    label: "Years of Experience",
  },
  {
    icon: <Users size={20} />,
    value: "500+",
    label: "Students Mentored",
  },
];

const featuredProjects = [
  {
    title: "AI Bone Fracture Detection",
    desc: "Deep learning model to detect fractures from X-ray images with high accuracy.",
    icon: <Bone size={20} />,
    tech: ["Python", "TensorFlow", "Keras", "Flask"],
    link: "/projects",
  },
  {
    title: "ECG Arrhythmia Detection",
    desc: "ML models for arrhythmia classification using MIT-BIH dataset.",
    icon: <Activity size={20} />,
    tech: ["Python", "Scikit-Learn", "SciPy", "Matlab"],
    link: "/projects",
  },
  {
    title: "SmartPrescribe",
    desc: "Voice-to-prescription using Whisper ASR and LLM for clinical notes.",
    icon: <Brain size={20} />,
    tech: ["Python", "OpenAI", "Langchain", "FastAPI"],
    link: "/projects",
  },
  {
    title: "LineGuard / GridShield",
    desc: "AI-powered system for power grid protection & non-technical loss detection.",
    icon: <Zap size={20} />,
    tech: ["Python", "LightGBM", "Pandas", "Scikit-Learn"],
    link: "/projects",
  },
  {
    title: "CrimeVista",
    desc: "3D crime scene reconstruction and blood splatter analysis.",
    icon: <Eye size={20} />,
    tech: ["Blender", "Three.js", "React", "Node.js"],
    link: "/projects",
  },
];

const ribbonItems = [
  {
    icon: <Users size={20} />,
    title: "Workshops Delivered",
    detail: "6+ Technical Sessions",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Teaching Experience",
    detail: "200+ Students Trained",
  },
  {
    icon: <Settings size={20} />,
    title: "Projects Completed",
    detail: "15+ End-to-End Projects",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Industries Worked",
    detail: "Healthcare, Energy, Web, AI",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Goal",
    detail: "Building AI for a Better Tomorrow",
  },
];

// Motion animation variables
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid-container">

          {/* Left Column: Introduction */}
          <motion.div className="hero-intro" variants={itemVariants}>
            <span className="hero-subtitle">
              AI ENGINEER | ML DEVELOPER | RESEARCH ENTHUSIAST
            </span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">Arfa Shaikh</span>
            </h1>

            {/* Elegant flourish ornament */}
            <div className="flourish">
              <svg viewBox="0 0 100 10" width="80" height="8">
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="50" cy="5" r="3" fill="currentColor" />
              </svg>
            </div>

            <p className="hero-desc">
              I build intelligent systems that solve real-world problems using
              Machine Learning, Deep Learning, and Full Stack development.
            </p>

            <div className="hero-actions-row">
              <button
                onClick={() => navigate("/projects")}
                className="btn primary"
              >
                VIEW MY WORK
                <ArrowRight size={16} />
              </button>
              <a
                href="/cv.pdf"
                download
                className="btn secondary"
              >
                DOWNLOAD CV
                <Download size={16} />
              </a>
            </div>

            {/* Social Icons row */}
            <div className="social-links-container">
              <span className="social-label">Connect with me</span>
              <div className="social-icons">
                <a
                  href="https://github.com/arfashaikh123"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://in.linkedin.com/in/mohd-arfa-shaikh-383a97279"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/919823344853"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.416 1.452 5.378 0 9.756-4.379 9.76-9.76.002-2.585-1.002-5.016-2.829-6.843-1.826-1.828-4.255-2.83-6.848-2.83-5.383 0-9.764 4.382-9.768 9.763-.001 1.967.512 3.888 1.487 5.602l-.974 3.565 3.655-.959zm11.233-6.52c-.3-.15-1.771-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.589-.49-.51-.676-.51-.175-.008-.376-.01-.576-.01-.2 0-.525.075-.8 0-.376-.275-.8-1.126-.8-2.525 0-1.375 1.025-2.7 1.175-2.875.15-.175 2.013-3.073 4.877-4.312.68-.295 1.21-.47 1.62-.601.69-.22 1.325-.19 1.825-.115.55.08 1.77.725 2.02 1.425.25.7.25 1.3 1.15.15.075-.15.225-.3.525-.45z"/>
                  </svg>
                </a>
                <a
                  href="mailto:shaikharfa2005@gmail.com"
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <button
                  onClick={() => navigate("/contact")}
                  className="social-icon-btn"
                  aria-label="More options"
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait Image with floating animations */}
          <motion.div className="hero-portrait-col" variants={itemVariants}>
            <div className="portrait-wrapper">
              <div className="academic-sketch-bg" />
              <img
                src={pfp2}
                alt="Arfa Shaikh portrait"
                className="portrait-img"
                onError={(e) => {
                  e.target.src = "/pfp.png";
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Statistics */}
          <motion.div className="hero-stats-col" variants={itemVariants}>
            <div className="stats-vertical-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card-item glass-card">
                  <div className="stat-icon-wrapper">{stat.icon}</div>
                  <div className="stat-details">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="academic-divider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" strokeWidth="1.5" />
            <path d="M2 13.5l10 6.5 10-6.5" strokeWidth="1.5" />
            <path d="M2 17.5l10 6.5 10-6.5" strokeWidth="1.5" />
          </svg>
        </div>

        <h2 className="featured-section-title">FEATURED PROJECTS</h2>
        <p className="featured-section-subtitle">
          Leading AI research and production-ready intelligent software
        </p>

        <div className="featured-projects-grid">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="featured-project-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="proj-header">
                <div className="proj-icon">{project.icon}</div>
                <Link to={project.link} className="proj-link-icon" aria-label={`View ${project.title}`}>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="proj-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="proj-tech-tags">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Status Ribbon */}
      <section className="status-ribbon-section">
        <div className="ribbon-container">
          {ribbonItems.map((item, idx) => (
            <div key={idx} className="ribbon-item">
              <div className="ribbon-icon">{item.icon}</div>
              <div className="ribbon-info">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
