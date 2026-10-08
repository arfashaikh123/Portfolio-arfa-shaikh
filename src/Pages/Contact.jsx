import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
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
      className="contact-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <span className="badge">
          <Mail size={14} /> CONNECT
        </span>
        <h1 className="contact-title">
          Let's <span className="highlight-text">Collaborate</span>
        </h1>
        <p className="contact-subtitle">
          Have an AI/ML industrial project, full-stack application, or custom training session you want to coordinate? Let's connect.
        </p>
      </motion.div>

      <div className="contact-grid-container centered-layout">
        {/* Left Column: Direct Info Cards */}
        <motion.div className="contact-info-col" variants={itemVariants}>
          <div className="glass-card contact-info-card">
            <h2>Direct Communications</h2>
            <p>Get in touch via email, phone call, or scheduling details.</p>

            <div className="info-items-list">
              <a href="mailto:shaikharfa2005@gmail.com" className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="info-text">
                  <span>Email</span>
                  <strong>shaikharfa2005@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+919823344853" className="info-item">
                <div className="info-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="info-text">
                  <span>Call or WhatsApp</span>
                  <strong>+91 9823344853</strong>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="info-text">
                  <span>Location</span>
                  <strong>Mumbai, India</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Social Networks Card */}
        <motion.div className="contact-socials-col" variants={itemVariants}>
          <div className="glass-card contact-socials-card">
            <h2>Social Networks</h2>
            <p>Follow my development milestones and academic activities.</p>
            
            <div className="social-links-grid">
              <a
                href="https://github.com/arfashaikh123"
                target="_blank"
                rel="noreferrer"
                className="social-link-item"
              >
                <Github size={20} />
                <span>GitHub</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
              <a
                href="https://in.linkedin.com/in/mohd-arfa-shaikh-383a97279"
                target="_blank"
                rel="noreferrer"
                className="social-link-item"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
              <a
                href="https://wa.me/919823344853"
                target="_blank"
                rel="noreferrer"
                className="social-link-item"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.416 1.452 5.378 0 9.756-4.379 9.76-9.76.002-2.585-1.002-5.016-2.829-6.843-1.826-1.828-4.255-2.83-6.848-2.83-5.383 0-9.764 4.382-9.768 9.763-.001 1.967.512 3.888 1.487 5.602l-.974 3.565 3.655-.959zm11.233-6.52c-.3-.15-1.771-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.589-.49-.51-.676-.51-.175-.008-.376-.01-.576-.01-.2 0-.525.075-.8 0-.376-.275-.8-1.126-.8-2.525 0-1.375 1.025-2.7 1.175-2.875.15-.175 2.013-3.073 4.877-4.312.68-.295 1.21-.47 1.62-.601.69-.22 1.325-.19 1.825-.115.55.08 1.77.725 2.02 1.425.25.7.25 1.3 1.15.15.075-.15.225-.3.525-.45z"/>
                </svg>
                <span>WhatsApp</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
