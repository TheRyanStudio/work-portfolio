import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
        {
      role: "Mobile App Developer",
      company: "Self Directed",
      location: "Remote",
      period: "Jan 2025 - Present",
      descriptions: [
        "Designed and shipped Mediary, an iOS app for managing personal libraries of books and movies; supports EPUB, PDF, MP4, and MOV with a built-in reader, page tracking, and native video playback. Built with React Native, TypeScript, Expo, and SQLite; acquired active monthly users with zero marketing spend.",
        "Currently developing Worth It?, an iOS app focused on helping users reduce impulse spending habits.",
        "Integrated Sentry for production error monitoring and RevenueCat for in-app purchases across both apps, gaining experience with real-world deployment and monetization.",
        "Took both apps from concept to launch, including market research, keyword analysis, Figma mockups, and full end-to-end implementation; leveraged LLMs to accelerate development and debugging."
      ],
      tech: ["Typescript", "React Native", "Expo", "Figma"],
    },
    {
      role: "Software Developer Intern",
      company: "KiM GmbH",
      location: "Germany",
      period: "Summer 2024",
      descriptions: [
        "Tested the CADClick 3D visualization API (RESTful, JSON) using Postman to ensure accurate 3D profile rendering in the browser",
        "Developed parametric CAD models and profiles",
        "Created UI features for the CADClick 3D visualization tool using JavaScript, CSS, and HTML to display different models together, anchored, and with interchangeable profiles",
      ],
      tech: ["Postman", "REST APIs", "JavaScript", "CSS", "HTML", "CAD"],
    },
    {
      role: "Server",
      company: "Algonquin Resort",
      location: "New Brunswick",
      period: "May 2022 – August 2025 (Seasonal)",
      descriptions: [
        "Provided customer support in a fast-paced environment, managing multiple requests and prioritizing tasks by urgency",
      ],
      tech: ["Customer Service", "Multitasking", "Hospitality"],
    },
  ];

  const experienceStyle = {
    background: "var(--bg)",
  };

  const timelineStyle = {
    position: "relative",
    paddingLeft: 0,
    animation: "fadeIn 0.6s ease-in",
  };

  const timelineItemStyle = {
    position: "relative",
    paddingLeft: "80px",
    marginBottom: "2.5rem",
  };

  const timelineMarkerStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "48px",
    height: "48px",
    background: "var(--accent)",
    border: "4px solid var(--bg)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    zIndex: 10,
  };

  const timelineContentStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    padding: "2rem",
    transition: "all 0.3s ease",
  };

  const expHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem",
  };

  const expHeaderH3Style = {
    fontSize: "1.5rem",
    color: "var(--text-primary)",
  };

  const companyStyle = {
    fontSize: "1.1rem",
    color: "var(--accent)",
    fontWeight: 600,
  };

  const expMetaStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    flexWrap: "wrap",
  };

  const expDescriptionsStyle = {
    listStyle: "none",
    marginBottom: "1.5rem",
  };

  const expDescriptionItemStyle = {
    paddingLeft: "1.5rem",
    position: "relative",
    marginBottom: "0.75rem",
    color: "var(--text-secondary)",
  };

  const expTechStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  };

  const expTechTagStyle = {
    display: "inline-block",
    padding: "0.4rem 0.9rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    transition: "all 0.3s ease",
  };

  return (
    <section
      id="experience"
      style={experienceStyle}
      className="section experience"
    >
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
        .timeline::before {
          content: "";
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent), transparent);
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .exp-descriptions li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .timeline::before {
            left: 12px;
          }
          .timeline-item {
            padding-left: 60px;
          }
          .timeline-marker {
            width: 40px;
            height: 40px;
            font-size: 0.8rem;
          }
          .timeline-content {
            padding: 1.5rem;
          }
          .exp-header h3 {
            font-size: 1.3rem;
          }
          .exp-meta {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-item:hover .timeline-content {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">Where I've Worked</h2>

        <div style={timelineStyle} className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={timelineItemStyle}
              className="timeline-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={timelineMarkerStyle} className="timeline-marker">
                <FiBriefcase size={24} />
              </div>

              <div
                style={{
                  ...timelineContentStyle,
                  borderColor:
                    hoveredIndex === index ? "var(--accent)" : "var(--border)",
                  transform:
                    hoveredIndex === index
                      ? "translateX(10px)"
                      : "translateX(0)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 30px rgba(59, 130, 246, 0.1)"
                      : "none",
                }}
                className="timeline-content"
              >
                <div style={expHeaderStyle} className="exp-header">
                  <h3 style={expHeaderH3Style}>{exp.role}</h3>
                  <span style={companyStyle} className="company">
                    {exp.company}
                  </span>
                </div>

                <div style={expMetaStyle} className="exp-meta">
                  <FiCalendar size={18} />
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>

                <ul style={expDescriptionsStyle} className="exp-descriptions">
                  {exp.descriptions.map((desc, idx) => (
                    <li key={idx} style={expDescriptionItemStyle}>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div style={expTechStyle} className="exp-tech">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={expTechTagStyle}
                      className="exp-tech-tag"
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
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
