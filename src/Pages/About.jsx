import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const education = [
  {
    period: "2024 – 2027",
    title: "St. Francis Institute of Technology",
    detail: "B.E. – Computer Engineering",
  },
  {
    period: "2021 – 2024",
    title: "Theem College of Engineering",
    detail: "Diploma – Computer Engineering",
  },
];

const experience = [
  {
    period: "Nov 2024 – Present",
    role: "ML Developer & Industrial Expert",
    place: "Institute of Futuristic Technology (IOFT)",
    bullets: [
      "Delivering ML solutions on live industrial projects",
      "Leading trainings and workshops on AI/ML for teams and students",
    ],
  },
  {
    period: "Jun 2023 – Aug 2023",
    role: "Intern",
    place: "Intellect Technologies",
    bullets: ["Python", "Internet of Things (IoT)", "Automation foundations"],
  },
];

const achievements = [
  "Blind C Winner – Megaleio 2023 (National Level Technical Fest)",
  "Runner Up – Code Runner, Enthusia 2024",
  "Grand Finalist – Tecnothon24 (24-Hour Hackathon)",
  "Finalist – State Level Technical Quiz (MSBTE)",
];

const keyProjects = [
  {
    title: "ECG Arrhythmia Detection using 2D CNN",
    desc: "Deep learning pipeline with signal processing and a hardware prototype for real-time monitoring and early diagnosis.",
  },
  {
    title: "JurifAI – Agreement Classification",
    desc: "Legal agreement classifier using NLP models and synthetic data generation to overcome dataset scarcity across seven categories.",
  },
];

export default function About() {
  return (
    <section className="about-page page-shell">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill">About</div>
        <h1>AI/ML developer, web builder, and trainer.</h1>
        <p className="lede">
          I am a Computer Engineering student focused on AI/ML, production-grade web apps,
          and translating complex concepts into hands-on trainings. I thrive at the intersection of
          data, design, and delivery.
        </p>
        <div className="contact-row">
          <a className="pill" href="tel:+919823344853">
            📞 +91 9823344853
          </a>
          <a className="pill" href="mailto:shaikharfa2005@gmail.com">
            ✉️ shaikharfa2005@gmail.com
          </a>
        </div>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-card wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="section-heading">Career Summary</div>
          <p>
            Hands-on ML developer with over a year of applied experience across deep learning, NLP, and
            computer vision. Complementing AI work with full-stack web delivery and IoT projects, while
            teaching and mentoring teams to ship reliable products.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-heading">Education</div>
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="year">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="section-heading">Experience</div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.place}>
                <span className="year">{item.period}</span>
                <h3>{item.place}</h3>
                <p className="role">{item.role}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-heading">Achievements</div>
          <ul className="achievement-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="about-card wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="section-heading">Key Projects</div>
          <div className="project-list">
            {keyProjects.map((project) => (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
