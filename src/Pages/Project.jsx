import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    title: "Pixie Notch NZ",
    desc: "Handcrafted brand site for a New Zealand creative studio with sharp storytelling.",
    url: "https://pixienotchnz.netlify.app",
    tech: ["Brand", "React", "Deployment"],
  },
  {
    title: "Paryavaran Council",
    desc: "Environmental awareness & sustainability platform.",
    url: "https://paryavarancouncil.in",
    tech: ["React", "Web", "SEO"]
  }, {
    title: "MTENGZ",
    desc: "Corporate and technical service website.",
    url: "https://mtengz.in",
    tech: ["Business", "Web", "Branding"]
  },
  {
    title: "Problem Spark",
    desc: "Problem-statement finder via web scraping.",
    url: "https://problemspark.netlify.app",
    tech: ["React", "Netlify", "Scraping"]
  },
  {
    title: "Bone Fracture Detection",
    desc: "AI-based bone fracture detection using deep learning.",
    url: "https://bone-fracture.netlify.app",
    tech: ["AI", "CNN", "Medical"]
  },
  {
    title: "Mentora Mini",
    desc: "AI-powered mentorship & guidance platform.",
    url: "https://mentora-mini.netlify.app",
    tech: ["AI", "React"]
  },
  {
    title: "CreditShield",
    desc: "Credit risk & fraud awareness system.",
    url: "https://creditshield.netlify.app",
    tech: ["FinTech", "Web App"]
  },
  {
    title: "Jagat Bharti",
    desc: "Online newspaper and digital journalism platform.",
    url: "https://jagatbharti.netlify.app",
    tech: ["News", "React", "Content"]
  },
  {
    title: "Wedding Invitation Portal",
    desc: "Custom digital wedding invitation and event website.",
    url: "https://maruf-arshi-wedding.netlify.app",
    tech: ["Design", "Frontend", "Events"]
  },
  {
    title: "Prakrutik Shakti Nisark Upchar Charitable trust",
    desc: "Environmental conservation & nature therapy trust website.",
    url: "https://prakrutik-shakti.netlify.app",
    tech: ["Design", "Frontend", "Events"]
  },
  {
    title: "Space Debris Tracking",
    desc: "Real-time orbital debris visualization using 3D globe and TLE data.",
    url: "https://space-debris-tracking.netlify.app",
    tech: ["Three.js", "React", "Celestrak"]
  },
  {
    title: "ScanJoy",
    desc: "Premium event ticketing and digital check-in platform with WhatsApp integration.",
    url: "https://scanjoy.netlify.app/",
    tech: ["React", "MongoDB", "WhatsApp API"]
  },
  {
    title: "N&F Projects",
    desc: "Full-stack tender management system with role-based features and real-time tracking.",
    url: "https://nf-projects.netlify.app",
    tech: ["Node.js", "React", "MongoDB"]
  },
  {
    title: "CardioScan",
    desc: "AI-powered ECG analysis and arrhythmia detection using 2D-CNN models.",
    url: "https://cardioscan.netlify.app",
    tech: ["AI", "Deep Learning", "ECG"]
  },
  {
    title: "NextPaperGen",
    desc: "Intelligent question paper generator that extracts structures from PDFs and maps syllabus priorities.",
    url: "https://nextpapergen.netlify.app",
    tech: ["React", "AI", "PDF Parsing"]
  }
];


export default function Projects() {
  return (
    <section className="projects-page page-shell">
      <motion.div
        className="projects-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill">Deployments</div>
        <h1>Web projects built, shipped, and live.</h1>
        <p className="lede">
          A mix of AI-driven experiences, business sites, and fast frontends. Each build is responsive,
          production-hosted, and focused on clarity.
        </p>
      </motion.div>

      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.title}
            whileHover={{ translateY: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="project-frame">
              <iframe
                src={project.url}
                title={project.title}
                loading="lazy"
              />
            </div>

            <div className="project-info">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open ↗
                </a>
              </div>
              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
