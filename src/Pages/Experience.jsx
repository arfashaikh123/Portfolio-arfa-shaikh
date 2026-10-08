import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import "./Experience.css";

const workExperience = [
  {
    period: "Nov 2024 – Present",
    role: "ML Developer & Industrial Expert",
    company: "Institute of Futuristic Technology (IOFT)",
    location: "Mumbai, India",
    description: "Developing artificial intelligence models for industrial deployments while translating machine learning concepts into structured learning programs.",
    bullets: [
      "Architect and deploy machine learning models on live corporate/industrial project pipelines.",
      "Design syllabus and lead intensive training workshops on Python, Deep Learning, and Computer Vision.",
      "Mentored 200+ students and technical professionals, guiding them to build ready-to-publish projects.",
      "Collaborate with multi-disciplinary engineering teams to optimize CNN inference speeds on edge devices.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Computer Vision", "Instructional Design"],
  },
  {
    period: "June 2023 – August 2023",
    role: "Machine Learning & IoT Intern",
    company: "Intellect Technologies",
    location: "Mumbai, India",
    description: "Gained core industrial exposure in hardware-software integrations, automation routines, and data processing.",
    bullets: [
      "Programmed microcontroller firmware scripts in MicroPython for automated sensory logging.",
      "Constructed regression models to forecast device maintenance cycles based on telemetry data.",
      "Optimized database storage operations to speed up local retrieval from edge components.",
    ],
    skills: ["Python", "Internet of Things (IoT)", "MicroPython", "SQLite", "Data Analysis"],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <motion.section
      className="experience-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="experience-header" variants={itemVariants}>
        <span className="badge">
          <Briefcase size={14} /> HISTORY
        </span>
        <h1 className="experience-title">
          Professional <span className="highlight-text">Experience</span>
        </h1>
        <p className="experience-subtitle">
          Over a year of applied experience in corporate machine learning environments, coaching, and engineering internships.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="experience-timeline-container">
        {workExperience.map((job, idx) => (
          <motion.div
            key={idx}
            className="experience-timeline-card glass-card"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            {/* Left/Header Details */}
            <div className="exp-card-header">
              <div className="exp-role-title">
                <h2>{job.role}</h2>
                <h3>{job.company}</h3>
              </div>
              <div className="exp-meta">
                <span className="exp-meta-item">
                  <Calendar size={14} /> {job.period}
                </span>
                <span className="exp-meta-item">
                  <MapPin size={14} /> {job.location}
                </span>
              </div>
            </div>

            {/* Role Description */}
            <p className="exp-desc">{job.description}</p>

            {/* Deliverables Bullet List */}
            <ul className="exp-bullets-list">
              {job.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>
                  <CheckCircle size={14} className="bullet-check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skills Utilized */}
            <div className="exp-skills-row">
              <h4>Technologies Utilized:</h4>
              <div className="exp-skills-grid">
                {job.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
