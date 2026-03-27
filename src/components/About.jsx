import { FiDownload } from "react-icons/fi";

export default function About() {
  const aboutStyle = {
    background: "var(--bg)",
  };

  const aboutContentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    gap: "3rem",
    alignItems: "center",
    animation: "fadeIn 0.6s ease-in",
  };

  const aboutImageStyle = {
    position: "relative",
  };

  const headshotStyle = {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    aspectRatio: "1",
    objectFit: "cover",
    border: "2px solid var(--border)",
    transition: "transform 0.3s ease, border-color 0.3s ease",
  };

  const aboutTextH3Style = {
    fontSize: "2.5rem",
    color: "var(--text-primary)",
  };

  const aboutTextPStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    marginBottom: "1.5rem",
  };

  const aboutHighlightsStyle = {
    display: "flex",
    gap: "2rem",
    margin: "2rem 0",
    padding: "2rem 0",
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
  };

  const highlightStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const highlightNumberStyle = {
    fontSize: "2.5rem",
    fontWeight: 900,
    color: "var(--accent)",
  };

  const highlightLabelStyle = {
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  return (
    <section id="about" style={aboutStyle} className="section">
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
        .about-headshot {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .about-headshot:hover {
          border-color: var(--accent);
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .about-image {
            display: flex;
            justify-content: center;
          }
          .about-headshot {
            max-width: 300px;
          }
        }
        @media (max-width: 768px) {
          .about-text h3 {
            font-size: 2rem;
          }
          .about-text p {
            font-size: 1rem;
          }
          .about-highlights {
            flex-direction: column;
            gap: 1rem;
          }
          .highlight {
            flex-direction: row;
            gap: 1rem;
          }
          .highlight-number {
            font-size: 2rem;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div style={aboutContentStyle} className="about-content">
          <div style={aboutImageStyle} className="about-image">
            <img
              src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
              alt="Ryan Johnson"
              style={headshotStyle}
              className="about-headshot"
            />
          </div>

          <div className="about-text">
            <h3 style={aboutTextH3Style}>Hello, I'm Ryan Johnson</h3>
            <p style={aboutTextPStyle}>
              I’m a full-stack developer with a bachelor’s degree in Computer
              Science from Carleton University. I focused my studies on software
              security and secure design principles. I’ve always loved figuring
              out how things work behind the scenes, and I enjoy building
              software that’s both practical and easy to use.
            </p>

            <p style={aboutTextPStyle}>
              My journey in software development includes experience as a
              Software Developer Intern at KiM GmbH in Germany, where I worked
              on RESTful APIs, CAD visualization tools, and interactive UI
              components. I've worked with diverse technologies ranging from
              Python and Java to C++ and JavaScript.
            </p>

            <p style={aboutTextPStyle}>
              Beyond coding, I'm interested in cryptography, network security,
              and how systems can be built to be both powerful and secure. I
              believe in writing clean, maintainable code and creating
              user-centered design solutions.
            </p>

            <div style={aboutHighlightsStyle} className="about-highlights">
              <div style={highlightStyle} className="highlight">
                <span style={highlightNumberStyle} className="highlight-number">
                  5+
                </span>
                <span style={highlightLabelStyle} className="highlight-label">
                  Languages
                </span>
              </div>
              <div style={highlightStyle} className="highlight">
                <span style={highlightNumberStyle} className="highlight-number">
                  7+
                </span>
                <span style={highlightLabelStyle} className="highlight-label">
                  Projects
                </span>
              </div>
              <div style={highlightStyle} className="highlight">
                <span style={highlightNumberStyle} className="highlight-number">
                  1
                </span>
                <span style={highlightLabelStyle} className="highlight-label">
                  Internship
                </span>
              </div>
            </div>

            <button
              className="cta-button"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: "var(--accent)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => window.open(`${import.meta.env.BASE_URL}resume_Ryan_Johnson_SD.pdf`, "_blank")}
            >
              <FiDownload size={20} style={{ marginRight: "0.5rem" }} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
