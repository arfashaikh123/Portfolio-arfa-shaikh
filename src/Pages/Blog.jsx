import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import "./Blog.css";

const blogPosts = [
  {
    title: "Spectrograms vs. Wavelets: Feature Extraction in Medical ECG Diagnostics",
    date: "June 15, 2024",
    readTime: "6 min read",
    category: "AI & Signal Processing",
    summary: "Deep-dive into transforming 1D physiological signals into 2D spaces for convolutional network inference. We compare STFT spectrogram outputs to continuous wavelet transforms.",
  },
  {
    title: "Whisper ASR + LLMs: Automating Clinical Note Transcriptions Securely",
    date: "April 22, 2024",
    readTime: "5 min read",
    category: "LLM & HealthTech",
    summary: "How to chain OpenAI's Whisper model with local LLMs (like Llama-3) to create automated, structured clinical prescription logs while ensuring patients data compliance.",
  },
  {
    title: "WebGL Shaders on the Web: Real-time rendering of 15,000+ Satellites with Three.js",
    date: "Feb 10, 2024",
    readTime: "8 min read",
    category: "WebGL & Graphics",
    summary: "Optimizing 3D rendering performances on browsers. We dissect how we passed Keplerian TLE telemetry parameters into GPU fragments to sustain 60 FPS simulations of space debris orbital paths.",
  },
];

export default function Blog() {
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
      className="blog-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="blog-header" variants={itemVariants}>
        <span className="badge">
          <BookOpen size={14} /> JOURNAL
        </span>
        <h1 className="blog-title">
          Technical <span className="highlight-text">Writeups</span>
        </h1>
        <p className="blog-subtitle">
          Sharing discoveries, optimization logs, and academic walkthroughs on machine learning and software engineering.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="blog-grid-list">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="blog-post-card glass-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="blog-post-meta">
              <span className="post-cat-badge">{post.category}</span>
              <div className="post-time-meta">
                <span className="meta-item">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="meta-item">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
            </div>

            <div className="blog-post-content">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>

            <div className="blog-post-footer">
              <span className="read-more-btn">
                Read Article
                <ArrowRight size={14} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
