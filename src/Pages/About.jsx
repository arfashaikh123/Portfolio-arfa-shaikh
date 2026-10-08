import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  User,
  Heart,
} from "lucide-react";
import "./About.css";

const education = [
  {
    period: "2024 – 2027",
    institution: "St. Francis Institute of Technology",
    degree: "B.E. – Computer Engineering",
    details: "Focusing on artificial intelligence, data structures, and advanced algorithms.",
  },
  {
    period: "2021 – 2024",
    institution: "Theem College of Engineering",
    degree: "Diploma – Computer Engineering",
    details: "Graduated with honors, establishing strong foundations in systems engineering.",
  },
];

const highlights = [
  "Hands-on ML developer with 1+ years of applied experience in deep learning & computer vision.",
  "Delivered live training sessions on Python & AI for over 300 students and professionals.",
  "Experienced in full-stack web architectures using React, Node.js, and MongoDB.",
  "Passionate researcher exploring deep learning models for biomedical signal processing.",
];

const achievements = [
  {
    title: "Blind C Winner",
    event: "Megaleio 2023",
    level: "National Level Technical Fest",
  },
  {
    title: "Runner Up",
    event: "Code Runner, Enthusia 2024",
    level: "State Level Competition",
  },
  {
    title: "Grand Finalist",
    event: "Tecnothon24",
    level: "24-Hour Hackathon",
  },
  {
    title: "Finalist",
    event: "State Level Technical Quiz",
    level: "MSBTE Quiz competition",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function About() {
  return (
    <motion.section
      className="about-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="about-hero-section" variants={itemVariants}>
        <span className="badge">
          <User size={14} /> ABOUT ME
        </span>
        <h1 className="about-title">
          Blending AI Research with <br />
          <span className="highlight-text">Full-Stack Engineering</span>
        </h1>
        <p className="about-lede">
          I am a Computer Engineering student focused on building products that merge 
          machine intelligence with responsive user experiences. I work as an ML Trainer, 
          ship live software, and conduct research in medical deep learning.
        </p>

        <div className="about-contact-quick">
          <a href="tel:+919823344853" className="quick-pill">
            📞 +91 9823344853
          </a>
          <a href="mailto:shaikharfa2005@gmail.com" className="quick-pill">
            ✉️ shaikharfa2005@gmail.com
          </a>
        </div>
      </motion.div>

      <div className="about-details-grid">
        {/* Left Column: Biography & Strengths */}
        <motion.div className="details-col-left" variants={itemVariants}>
          <div className="glass-card bio-card">
            <h2 className="card-title">Professional Bio</h2>
            <p>
              My path in technology is driven by curiosity and a desire to make intelligent systems 
              accessible. As an ML Developer & Industrial Expert at IOFT, I work on industrial-grade 
              AI deployments and lead interactive workshops that help teams transition theoretical concepts 
              into working prototypes.
            </p>
            <p style={{ marginTop: "1rem" }}>
              I thrive on bridging the gap between scientific research and practical engineering. Whether 
              processing medical scans with custom CNNs or deploying secure backend APIs, I prioritize 
              performance, user focus, and clean system design.
            </p>
          </div>

          <div className="glass-card highlights-card" style={{ marginTop: "2rem" }}>
            <h2 className="card-title">Core Strengths</h2>
            <ul className="highlight-list">
              {highlights.map((text, idx) => (
                <li key={idx}>
                  <ChevronRight className="bullet-icon" size={16} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column: Academic Path & Achievements */}
        <motion.div className="details-col-right" variants={itemVariants}>
          <div className="glass-card education-card">
            <h2 className="card-title flex-title">
              <GraduationCap size={22} /> Education
            </h2>
            <div className="education-timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-block">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-date">
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <p>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card achievements-card" style={{ marginTop: "2rem" }}>
            <h2 className="card-title flex-title">
              <Award size={22} /> Achievements & Hackathons
            </h2>
            <div className="achievements-list">
              {achievements.map((ach, idx) => (
                <div key={idx} className="achievement-item">
                  <div className="ach-icon-circle">
                    <Award size={16} />
                  </div>
                  <div className="ach-details">
                    <h3>{ach.title}</h3>
                    <p>
                      {ach.event} &bull; <span className="ach-level">{ach.level}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
