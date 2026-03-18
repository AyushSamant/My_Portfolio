import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    type: "Certification",
    link: "#"
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    type: "Certificate",
    link: "#"
  },
  {
    title: "Cloud Computing",
    issuer: "IIT Kharagpur / NPTEL",
    type: "Course",
    link: "#"
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    type: "Course",
    link: "#"
  }
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="section bg-alt pattern-bg">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Licenses & <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx} 
              className="cert-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.15) }}
            >
              <div className="cert-icon-wrapper">
                <Award size={24} className="cert-icon" />
              </div>
              <div className="cert-details">
                <span className="cert-badge">{cert.type}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">Issued by {cert.issuer}</p>
                <a href={cert.link} className="cert-link">
                  Verify <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
