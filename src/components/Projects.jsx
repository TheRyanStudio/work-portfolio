import { useState } from "react";
import { FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaApple } from "react-icons/fa";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mediary",
      description:
        "An iOS application for managing your personal library of books and movies.",
      longDescription:
        "Mediary puts you back in control of your media. Import EPUBs, PDFs, MP4s, and MOV files from anywhere. Features a stunning built-in reader with auto light/dark mode, bookmark support, and a powerful video player with native iOS controls and Picture-in-Picture support. Everything stored locally on your device.",
      images: [
        "/images/mediary-home.png",
        "/images/mediary-reader-split.png",
        "/images/mediary-video-split.png",
      ],
      tech: ["React Native", "Expo", "SQLite"],
      appStore: "",
      featured: true,
    },
    {
      id: 2,
      title: "Library Management System",
      description:
        "A full-stack library management system built with Java backend and web frontend, featuring authentication, book borrowing, returns, and hold queue management.",
      longDescription:
        "Comprehensive library system with authentication, user book borrowing and returning, hold queue management. Applied Test-Driven Development for backend logic, Behavior-Driven Development with Cucumber for feature scenarios, and Web Acceptance Testing with Cypress for end-to-end validation.",
      images: ["/images/library-management-system.png"],
      tech: [
        "Java",
        "Express.js",
        "Node.js",
        "Cucumber",
        "Cypress",
        "Maven",
        "PostgreSQL",
      ],
      github: "https://github.com/TheRyanStudio/Library-Management-System",
    },
    {
      id: 3,
      title: "Encrypted Password Manager",
      description:
        "A secure password manager application with Qt-based GUI featuring symmetric encryption (Fernet), Argon2 hashing, and PBKDF2-HMAC key derivation.",
      longDescription:
        "Develop a secure password manager with a Qt-based GUI for managing and storing credentials. Implemented local storage using SQLite with Fernet symmetric encryption for sensitive data. Protected master passwords with Argon2 hashing and PBKDF2-HMAC key derivation for security.",
      images: ["/images/password-manager.png"],
      tech: ["Python", "PySide6", "Qt", "SQLite", "Cryptography", "Fernet"],
      github: "https://github.com/TheRyanStudio/password-manager-application",
    },
    {
      id: 4,
      title: "Health Monitor Device Simulator",
      description:
        "A C++ Qt application simulating a RaDoTech health monitoring device with MVC architecture and observer pattern implementation.",
      longDescription:
        "Created a realistic simulation of a RaDoTech health monitoring device to replicate measurement workflows and health result generation. Implemented MVC architecture and observer pattern to manage profiles, handle simulated device interactions, and display detailed health results.",
      images: ["/images/health-monitor.png"],
      tech: ["C++", "Qt", "MVC Architecture", "Observer Pattern"],
      github: "https://github.com/TheRyanStudio/RaDoTech_App",
    },
  ];

  const projectsStyle = {
    background: "var(--bg)",
  };

  const projectsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    animation: "fadeIn 0.6s ease-in",
  };

  const projectCardStyle = {
    transition: "all 0.3s ease",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    paddingBottom: "3rem",
    borderBottom: "1px solid var(--border)",
  };

  const projectImagesStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const projectImageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 0.3s ease",
    borderRadius: "8px",
  };

  const imageCarouselStyle = {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
  };

  const carouselButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s ease",
  };

  const imageIndicatorStyle = {
    display: "flex",
    gap: "0.5rem",
  };

  const indicatorStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.5)",
    transition: "background 0.3s ease",
  };

  const indicatorActiveStyle = {
    background: "white",
  };

  const projectContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };

  const featuredBadgeStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    background: "var(--accent)",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0 0 0 8px",
    fontSize: "0.85rem",
    fontWeight: 700,
    textTransform: "uppercase",
  };

  const projectContentH3Style = {
    fontSize: "1.75rem",
    color: "var(--text-primary)",
    marginBottom: "1rem",
  };

  const projectDescriptionStyle = {
    fontSize: "1.1rem",
    color: "var(--text-primary)",
    marginBottom: "0.5rem",
  };

  const projectDetailsStyle = {
    fontSize: "1rem",
    marginBottom: "1.5rem",
  };

  const projectTechStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginBottom: "1.5rem",
  };

  const techTagStyle = {
    display: "inline-block",
    padding: "0.4rem 0.9rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    fontSize: "0.85rem",
    color: "var(--accent)",
    transition: "all 0.3s ease",
  };

  const projectLinksStyle = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const projectLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: "var(--accent)",
    color: "white",
    borderRadius: "8px",
    fontWeight: 600,
    transition: "all 0.3s ease",
    textDecoration: "none",
  };

  return (
    <section id="projects" style={projectsStyle} className="section projects">
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
        @media (max-width: 1024px) {
          .project-card {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">Things I've Built</h2>

        <div style={projectsContainerStyle} className="projects-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                ...projectCardStyle,
                ...(index === projects.length - 1
                  ? { borderBottom: "none" }
                  : {}),
              }}
              className={`project-card ${project.featured ? "featured" : ""}`}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={projectImagesStyle} className="project-images">
                {project.id === 1 ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "0.5rem",
                      alignItems: "start",
                    }}
                  >
                    {project.images.slice(0, 3).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        style={{
                          ...projectImageStyle,
                          width: "100%",
                          transform:
                            hoveredCard === project.id
                              ? "scale(1.05)"
                              : "scale(1)",
                        }}
                        className="project-image"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={{
                      ...projectImageStyle,
                      transform:
                        hoveredCard === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                    className="project-image"
                  />
                )}

                {project.images.length > 1 && project.id !== 1 && (
                  <div style={imageCarouselStyle} className="image-carousel">
                    <button
                      style={carouselButtonStyle}
                      className="carousel-button prev"
                      onClick={handlePrevImage}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                      }}
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={24} />
                    </button>
                    <div
                      style={imageIndicatorStyle}
                      className="image-indicator"
                    >
                      {project.images.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            ...indicatorStyle,
                            ...(idx === 0 ? indicatorActiveStyle : {}),
                          }}
                          className={`indicator ${idx === 0 ? "active" : ""}`}
                        ></div>
                      ))}
                    </div>
                    <button
                      style={carouselButtonStyle}
                      className="carousel-button next"
                      onClick={handleNextImage}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "white";
                      }}
                      aria-label="Next image"
                    >
                      <FiChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>

              <div style={projectContentStyle} className="project-content">
                {project.featured && (
                  <span style={featuredBadgeStyle} className="featured-badge">
                    Featured
                  </span>
                )}
                <h3 style={projectContentH3Style}>{project.title}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>
                <p style={projectDetailsStyle}>{project.longDescription}</p>

                <div style={projectTechStyle} className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={techTagStyle}
                      className="tech-tag"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--bg)";
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={projectLinksStyle} className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectLinkStyle}
                      className="project-link"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent-light)";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <FiGithub size={20} />
                      View on GitHub
                    </a>
                  )}
                  {"appStore" in project && (
                    <a
                      href={project.appStore || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectLinkStyle}
                      className="project-link"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent-light)";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <FaApple size={20} />
                      View on App Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
