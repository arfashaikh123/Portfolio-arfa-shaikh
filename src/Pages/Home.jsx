import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import code from "../assets/pfp.png";

const services = [
  {
    icon: "🧠",
    title: "AI / ML Engineering",
    desc: "Designing intelligent systems with CNNs, NLP pipelines, and data-first experimentation.",
    tags: ["Python", "TensorFlow", "PyTorch", "CV", "NLP"],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Building performant web apps with modern stacks, clear UX, and production-ready hosting.",
    tags: ["React", "Node", "APIs", "SQL", "Cloud"],
  },
  {
    icon: "📘",
    title: "Teaching & Mentorship",
    desc: "Leading workshops and trainings for teams and students on AI, Python, and real-world delivery.",
    tags: ["AIML", "Python", "Workshops", "Career"],
  },
];

const stats = [
  { label: "Live Deployments", value: "12+" },
  { label: "Workshops Delivered", value: "6+" },
  { label: "Tech Stack", value: "AI · Web · Cloud" },
];

export default function Home() {
  return (
    <section className="home page-shell">
      <div className="home-grid">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pill">AI/ML · Full-Stack · Trainer</div>
          <h1>
            Mohd Arfa A Shaikh
            <span> builds intelligent experiences.</span>
          </h1>
          <p className="lede">
            Computer Engineering student focused on AI/ML products, fast web experiences,
            and hands-on training. I ship reliable systems, lead workshops, and turn data
            into useful products.
          </p>

          <div className="btn-row">
            <Link to="/projects" className="btn primary">
              View projects
            </Link>
            <a className="btn" href="mailto:shaikharfa2005@gmail.com">
              Book a collaboration
            </a>
          </div>

          <div className="stat-row">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <p className="stat-value">{item.value}</p>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="visual-frame">
            <div className="editor-top">
              <span />
              <span />
              <span />
              <p>build.py</p>
            </div>
            <img src={code} alt="code preview" />
            <div className="overlay-card">
              <p>AI · Web · Cloud</p>
              <strong>Human-centered engineering</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="services">
        <div className="section-heading">Capabilities</div>
        <div className="service-grid">
          {services.map((service) => (
            <motion.div
              className="service-card"
              key={service.title}
              whileHover={{ translateY: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <p className="service-desc">{service.desc}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
