import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: "🌐 Front End",
      skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "🖥️ Back End",
      skills: [
        "Java",
        "Python",
        "C++",
        "C",
        "Node.js",
        "Express.js",
        "RESTful APIs",
      ],
    },
    {
      category: "🗄️ Databases",
      skills: ["SQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    {
      category: "📱 Mobile Development",
      skills: ["React Native", "Expo"],
    },
    {
      category: "🧪 Testing",
      skills: ["JUnit", "Cypress", "Cucumber", "TDD", "BDD"],
    },
    {
      category: "🛠️ Tools & Systems",
      skills: ["Git", "TortoiseSVN", "Linux", "Maven", "Postman"],
    },
  ];

  const skillsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    animation: "fadeIn 0.6s ease-in",
  };

  const skillCategoryStyle = {
    background: "var(--bg-secondary)",
    padding: "2rem",
    borderRadius: "12px",
    border: "1px solid var(--border)",
    transition: "all 0.3s ease",
  };

  const skillCategoryH3Style = {
    fontSize: "1.5rem",
    color: "var(--accent)",
    marginBottom: "1.5rem",
  };

  const skillsListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  };

  const skillBadgeStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    transition: "all 0.3s ease",
    cursor: "default",
  };

  const skillsStyle = {
    background: "var(--bg)",
  };

  return (
    <section id="skills" style={skillsStyle} className="section skills">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">My Tech Stack</h2>

        <div style={skillsGridStyle} className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={skillCategoryStyle}
              className="skill-category"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(59, 130, 246, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 style={skillCategoryH3Style}>{category.category}</h3>
              <div style={skillsListStyle} className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={skillBadgeStyle}
                    className="skill-badge"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--bg)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
