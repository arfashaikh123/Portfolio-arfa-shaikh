import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Layers, Settings, Brain, CheckCircle2 } from "lucide-react";
import "./Skills.css";

const skillCategories = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: <Brain size={20} />,
    description: "Building neural networks, computer vision classification systems, and NLP workflows.",
    skills: [
      { name: "Deep Learning (CNNs, RNNs)", level: 92 },
      { name: "PyTorch & TensorFlow", level: 90 },
      { name: "Computer Vision (OpenCV)", level: 88 },
      { name: "Natural Language Processing (STFT, ASR)", level: 85 },
      { name: "Machine Learning (Scikit-Learn, LightGBM)", level: 90 },
    ],
  },
  {
    id: "web",
    title: "Web Engineering",
    icon: <Layers size={20} />,
    description: "Developing scalable backend services, RESTful APIs, and fast UI client states.",
    skills: [
      { name: "React & Router", level: 95 },
      { name: "Node.js & Express", level: 88 },
      { name: "MongoDB & Database Modeling", level: 85 },
      { name: "HTML5, CSS3 & Responsive UI", level: 94 },
      { name: "REST APIs & Integration", level: 90 },
    ],
  },
  {
    id: "lang",
    title: "Programming Languages",
    icon: <Terminal size={20} />,
    description: "Core scripting, automation foundations, and algorithm development.",
    skills: [
      { name: "Python", level: 95 },
      { name: "C / C++", level: 85 },
      { name: "SQL", level: 82 },
      { name: "MATLAB", level: 80 },
    ],
  },
  {
    id: "tools",
    title: "Developer Workflows",
    icon: <Settings size={20} />,
    description: "Managing deployments, source control, and local developer environments.",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "FastAPI & Server Setup", level: 86 },
      { name: "Docker (Containerization)", level: 75 },
      { name: "Linux & Shell Scripting", level: 80 },
    ],
  },
];

const conceptualKnowledge = [
  "Supervised & Unsupervised Learning",
  "Convolutional Residual Networks (ResNet)",
  "Signal Transformation (Fourier, STFT)",
  "Role-Based Access Controls (RBAC)",
  "RESTful API Architecture",
  "Object-Oriented Design (OOP)",
  "Vectorization & Mathematical Inference",
  "SEO & Web Performance Tuning",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ai");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <motion.section
      className="skills-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="skills-header" variants={itemVariants}>
        <span className="badge">
          <Cpu size={14} /> EXPERTISE
        </span>
        <h1 className="skills-title">
          Technical <span className="highlight-text">Capabilities</span>
        </h1>
        <p className="skills-subtitle">
          My skills are rooted in academic research and balanced by modern full-stack web deployment capabilities.
        </p>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div className="skills-tabs-container" variants={itemVariants}>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`skills-tab-btn ${activeTab === cat.id ? "active" : ""}`}
          >
            {cat.icon}
            <span>{cat.title}</span>
          </button>
        ))}
      </motion.div>

      {/* Active Tab Panel */}
      <div className="skills-panel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="skills-active-panel glass-card"
          >
            <div className="panel-intro">
              <div className="panel-icon-header">
                {activeCategory.icon}
                <h2>{activeCategory.title}</h2>
              </div>
              <p>{activeCategory.description}</p>
            </div>

            <div className="panel-skills-list">
              {activeCategory.skills.map((skill, idx) => (
                <div key={idx} className="skill-meter-item">
                  <div className="meter-label-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="meter-track">
                    <motion.div
                      className="meter-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Concept Badges Grid */}
      <motion.div className="conceptual-knowledge-section" variants={itemVariants}>
        <h2 className="concept-title">Methodologies & Concepts</h2>
        <div className="concept-grid">
          {conceptualKnowledge.map((concept, idx) => (
            <div key={idx} className="concept-badge glass-card">
              <CheckCircle2 size={16} className="concept-check-icon" />
              <span>{concept}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
