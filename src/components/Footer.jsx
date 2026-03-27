import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    background: "var(--bg-secondary)",
    borderTop: "1px solid var(--border)",
    padding: "3rem 2rem",
    marginTop: "4rem",
  };

  const footerContentStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "2rem",
    marginBottom: "2rem",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 2rem",
  };

  const footerSectionStyle = {
    fontSize: "1rem",
  };

  const footerSectionH3Style = {
    fontSize: "1.5rem",
    color: "var(--text-primary)",
    marginBottom: "1rem",
  };

  const footerSectionH4Style = {
    fontSize: "1rem",
    color: "var(--accent)",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "1rem",
  };

  const footerSectionPStyle = {
    color: "var(--text-secondary)",
    marginBottom: 0,
  };

  const footerSectionUlStyle = {
    listStyle: "none",
  };

  const footerSectionLiStyle = {
    marginBottom: "0.75rem",
  };

  const footerButtonStyle = {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  };

  const socialLinksStyle = {
    display: "flex",
    gap: "1rem",
  };

  const socialLinkStyle = {
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg)",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    color: "var(--text-secondary)",
    transition: "all 0.3s ease",
    textDecoration: "none",
  };

  const footerDividerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    height: "1px",
    background: "var(--border)",
  };

  const footerBottomStyle = {
    textAlign: "center",
    paddingTop: "2rem",
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
  };

  const footerBottomPStyle = {
    marginBottom: "0.5rem",
  };

  return (
    <footer style={footerStyle}>
      <style>{`
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .social-links {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .footer-section {
            text-align: center;
          }
          .footer-section h3,
          .footer-section h4,
          .footer-section p {
            text-align: center;
          }
          .footer-bottom {
            padding-top: 1rem;
          }
        }
      `}</style>
      <div className="container">
        <div style={footerContentStyle} className="footer-content">
          <div style={footerSectionStyle} className="footer-section">
            <h3 style={footerSectionH3Style}>Ryan Johnson</h3>
            <p style={footerSectionPStyle}>
              Full-stack developer with a passion for security and innovation
            </p>
          </div>

          <div style={footerSectionStyle} className="footer-section">
            <h4 style={footerSectionH4Style}>Quick Links</h4>
            <ul style={footerSectionUlStyle}>
              <li style={footerSectionLiStyle}>
                <button
                  style={footerButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </button>
              </li>
              <li style={footerSectionLiStyle}>
                <button
                  style={footerButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Projects
                </button>
              </li>
              <li style={footerSectionLiStyle}>
                <button
                  style={footerButtonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div style={footerSectionStyle} className="footer-section">
            <h4 style={footerSectionH4Style}>Connect</h4>
            <div style={socialLinksStyle} className="social-links">
              <a
                href="https://github.com/TheRyanStudio"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ryan-johnson-cs"
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:ryandjohnson08@gmail.com"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Email"
              >
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div style={footerDividerStyle} className="footer-divider"></div>

        <div style={footerBottomStyle} className="footer-bottom">
          <p style={footerBottomPStyle}>
            &copy; {currentYear} Ryan Johnson. Built with React & Vite.
          </p>
          <p style={{ marginBottom: 0 }} className="made-with">
            Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
