import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code2, Users, Trophy } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    icon: <Code2 size={24} />,
    title: "250+ DSA Problems Solved",
    desc: "Strong foundation in problem-solving, algorithm design, and edge-case analysis.",
    color: "var(--accent-primary)"
  },
  {
    icon: <Trophy size={24} />,
    title: "Top 50 Finalist (800+ teams)",
    desc: "Smart India Hackathon (SIH) Internals 2025",
    color: "#ffbd2e"
  },
  {
    icon: <Award size={24} />,
    title: "1st Position",
    desc: "Catalyzing Concepts 2025, IIT Ropar",
    color: "var(--accent-secondary)"
  },
  {
    icon: <Award size={24} />,
    title: "Runner-Up",
    desc: "Infineon Hackathon",
    color: "#ff5f56"
  },
  {
    icon: <Users size={24} />,
    title: "COO, Optimus (DSO)",
    desc: "Led operational execution and team coordination.",
    color: "#27c93f"
  }
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Hackathons & <span className="gradient-text">Leadership</span>
        </motion.h2>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="achievement-card glass-card"
              variants={itemVariants}
            >
              <div 
                className="ach-icon" 
                style={{ 
                  color: item.color, 
                  boxShadow: `0 0 15px ${item.color}40`,
                  border: `1px solid ${item.color}40`
                }}
              >
                {item.icon}
              </div>
              <h3 className="ach-title">{item.title}</h3>
              <p className="ach-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
