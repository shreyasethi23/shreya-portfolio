// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "💻 Programming & Scripting",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "🌐 Web Development",
    items: ["ReactJS", "HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
  },
  {
    category: "⚙️ Frameworks & Libraries",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    category: "🤖 AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "NLP", "LLMs"],
  },
  {
    category: "🗄 Databases & Tools",
    items: ["MySQL", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    category: "📚 Core CS Concepts",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "3rem 2rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#0f172a",
        }}
      >
        Skills
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              color: "#0f172a",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "1rem",
                fontWeight: "600",
              }}
            >
              {skillGroup.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "0.35rem 0.75rem",
                    backgroundColor: "#e2e8f0",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
