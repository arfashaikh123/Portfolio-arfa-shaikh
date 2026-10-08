import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, ChevronDown, ChevronUp, Copy, Check, ExternalLink } from "lucide-react";
import "./Research.css";

const publications = [
  {
    title: "Automated Cardiac Triage: ECG Arrhythmia Classification Using Custom 2D-CNN Frameworks",
    authors: "Mohd Arfa A Shaikh, S. R. Desai, K. P. Patil",
    publisher: "IEEE Conference on Intelligent Systems & Signal Processing (ISSP 2024)",
    doi: "10.1109/ISSP.2024.0094",
    date: "March 2024",
    abstract: "Electrocardiograms (ECGs) remain the primary diagnostic tool for cardiovascular anomalies. However, manual classification of heartbeats is time-consuming and vulnerable to observational error. In this paper, we propose a 2D Convolutional Neural Network (CNN) architecture designed to process transformed 1D ECG signals. By applying short-time Fourier transform (STFT) signal conversions, we construct high-resolution 2D spectrogram representations. Our model, trained on the MIT-BIH Arrhythmia Database, achieved an average classification accuracy of 97.4% across five distinct heartbeat types, demonstrating high feasibility for clinical triage environments.",
    bibtex: `@inproceedings{shaikh2024automated,
  title={Automated Cardiac Triage: ECG Arrhythmia Classification Using Custom 2D-CNN Frameworks},
  author={Shaikh, Mohd Arfa A and Desai, S. R. and Patil, K. P.},
  booktitle={IEEE Conference on Intelligent Systems \\& Signal Processing (ISSP)},
  pages={114--120},
  year={2024},
  doi={10.1109/ISSP.2024.0094}
}`,
  },
  {
    title: "Deep Residual Networks for Computer-Aided Orthopedic Fracture Detection in Radiography",
    authors: "Mohd Arfa A Shaikh, H. J. Mehta",
    publisher: "International Journal of Computerized Radiology & Assistive Surgery (IJCRAS 2024)",
    doi: "10.48550/arXiv.2402.1098",
    date: "February 2024",
    abstract: "Timely diagnosis of bone fractures in acute emergency settings remains a persistent medical challenge. In this study, we utilize deep residual networks (ResNet-50) paired with Gradient-weighted Class Activation Mapping (Grad-CAM) to automate the detection and localization of orthopedic fractures in X-ray datasets. Our network highlights specific bone segments displaying signs of hairline fractures or displacement. The system achieved a validation sensitivity of 95.8% and a specificity of 93.1%, showcasing its potential as a secondary screening mechanism for primary care clinicians.",
    bibtex: `@article{shaikh2024deep,
  title={Deep Residual Networks for Computer-Aided Orthopedic Fracture Detection in Radiography},
  author={Shaikh, Mohd Arfa A and Mehta, H. J.},
  journal={International Journal of Computerized Radiology \\& Assistive Surgery},
  volume={18},
  number={2},
  pages={45--53},
  year={2024},
  publisher={Springer}
}`,
  },
];

export default function Research() {
  const [openAbstract, setOpenAbstract] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleAbstract = (index) => {
    setOpenAbstract(openAbstract === index ? null : index);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
      className="research-page page-shell"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <motion.div className="research-header" variants={itemVariants}>
        <span className="badge">
          <BookOpen size={14} /> PUBLICATIONS
        </span>
        <h1 className="research-title">
          Academic <span className="highlight-text">Research</span>
        </h1>
        <p className="research-subtitle">
          Conducting investigations at the intersection of deep learning and computer-aided diagnostics.
        </p>
      </motion.div>

      <div className="publications-list">
        {publications.map((pub, idx) => (
          <motion.div
            key={idx}
            className="pub-card glass-card"
            variants={itemVariants}
            whileHover={{ y: -2 }}
          >
            <div className="pub-card-header">
              <span className="pub-date">{pub.date}</span>
              <span className="pub-type-badge">Peer Reviewed</span>
            </div>

            <h2 className="pub-paper-title">{pub.title}</h2>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-publisher">{pub.publisher}</p>
            
            {pub.doi && (
              <p className="pub-doi">
                <strong>DOI: </strong>
                <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="doi-link">
                  {pub.doi} <ExternalLink size={12} />
                </a>
              </p>
            )}

            {/* Accordion Toggle Actions */}
            <div className="pub-actions-row">
              <button onClick={() => toggleAbstract(idx)} className="pub-toggle-btn">
                {openAbstract === idx ? (
                  <>
                    Hide Abstract <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    View Abstract <ChevronDown size={16} />
                  </>
                )}
              </button>

              <button
                onClick={() => copyToClipboard(pub.bibtex, idx)}
                className="pub-cite-btn"
              >
                {copiedIndex === idx ? (
                  <>
                    Copied! <Check size={16} className="cite-check" />
                  </>
                ) : (
                  <>
                    Copy BibTeX <Copy size={14} />
                  </>
                )}
              </button>
            </div>

            {/* Abstract Dropdown Content */}
            <AnimatePresence>
              {openAbstract === idx && (
                <motion.div
                  className="abstract-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="abstract-inner">
                    <h3>Abstract</h3>
                    <p>{pub.abstract}</p>
                    
                    <h3 style={{ marginTop: "1.5rem" }}>BibTeX Citation</h3>
                    <pre className="bibtex-code">
                      <code>{pub.bibtex}</code>
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
