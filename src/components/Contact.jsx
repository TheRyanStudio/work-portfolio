import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const [hoveredMethod, setHoveredMethod] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:ryandjohnson08@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  const contactStyle = {
    background: "var(--bg)",
  };

  const contactContentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    animation: "fadeIn 0.6s ease-in",
  };

  const contactInfoPStyle = {
    fontSize: "1.1rem",
    color: "var(--text-secondary)",
    marginBottom: "2rem",
  };

  const contactMethodsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const contactMethodStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    padding: "1rem",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    color: "var(--text-primary)",
    textDecoration: "none",
  };

  const methodLabelStyle = {
    display: "block",
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const methodValueStyle = {
    display: "block",
    fontSize: "1.1rem",
    color: "var(--text-primary)",
  };

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    background: "var(--bg-secondary)",
    padding: "2rem",
    borderRadius: "12px",
    border: "1px solid var(--border)",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const formLabelStyle = {
    fontSize: "1rem",
    fontWeight: 500,
    color: "var(--text-primary)",
  };

  const formInputStyle = {
    padding: "0.75rem 1rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    color: "var(--text-primary)",
    fontFamily: "inherit",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  return (
    <section id="contact" style={contactStyle} className="section contact">
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .contact-info h3 {
            font-size: 1.5rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
          .form-group input,
          .form-group textarea {
            padding: 0.65rem 0.85rem;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>

        <div style={contactContentStyle} className="contact-content">
          <div className="contact-info">
            <p style={contactInfoPStyle}>
              I'm always open to new opportunities, collaborations, and
              interesting conversations. Feel free to reach out!
            </p>

            <div style={contactMethodsStyle} className="contact-methods">
              <a
                href="mailto:ryandjohnson08@gmail.com"
                style={{
                  ...contactMethodStyle,
                  borderColor:
                    hoveredMethod === "email"
                      ? "var(--accent)"
                      : "var(--border)",
                  background:
                    hoveredMethod === "email"
                      ? "rgba(59, 130, 246, 0.05)"
                      : "var(--bg-secondary)",
                  transform:
                    hoveredMethod === "email"
                      ? "translateX(5px)"
                      : "translateX(0)",
                }}
                onMouseEnter={() => setHoveredMethod("email")}
                onMouseLeave={() => setHoveredMethod(null)}
                className="contact-method"
              >
                <FiMail
                  size={24}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <div>
                  <span style={methodLabelStyle} className="method-label">
                    Email
                  </span>
                  <span style={methodValueStyle} className="method-value">
                    ryandjohnson08@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/TheRyanStudio"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...contactMethodStyle,
                  borderColor:
                    hoveredMethod === "github"
                      ? "var(--accent)"
                      : "var(--border)",
                  background:
                    hoveredMethod === "github"
                      ? "rgba(59, 130, 246, 0.05)"
                      : "var(--bg-secondary)",
                  transform:
                    hoveredMethod === "github"
                      ? "translateX(5px)"
                      : "translateX(0)",
                }}
                onMouseEnter={() => setHoveredMethod("github")}
                onMouseLeave={() => setHoveredMethod(null)}
                className="contact-method"
              >
                <FiGithub
                  size={24}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <div>
                  <span style={methodLabelStyle} className="method-label">
                    GitHub
                  </span>
                  <span style={methodValueStyle} className="method-value">
                    @TheRyanStudio
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ryan-johnson-cs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...contactMethodStyle,
                  borderColor:
                    hoveredMethod === "linkedin"
                      ? "var(--accent)"
                      : "var(--border)",
                  background:
                    hoveredMethod === "linkedin"
                      ? "rgba(59, 130, 246, 0.05)"
                      : "var(--bg-secondary)",
                  transform:
                    hoveredMethod === "linkedin"
                      ? "translateX(5px)"
                      : "translateX(0)",
                }}
                onMouseEnter={() => setHoveredMethod("linkedin")}
                onMouseLeave={() => setHoveredMethod(null)}
                className="contact-method"
              >
                <FiLinkedin
                  size={24}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <div>
                  <span style={methodLabelStyle} className="method-label">
                    LinkedIn
                  </span>
                  <span style={methodValueStyle} className="method-value">
                    ryan-johnson-cs
                  </span>
                </div>
              </a>

              <div
                style={{
                  ...contactMethodStyle,
                  textDecoration: "none",
                }}
                className="contact-method"
              >
                <FiMapPin
                  size={24}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <div>
                  <span style={methodLabelStyle} className="method-label">
                    Location
                  </span>
                  <span style={methodValueStyle} className="method-value">
                    Canada
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form
            style={contactFormStyle}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div style={formGroupStyle} className="form-group">
              <label style={formLabelStyle} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={formInputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={formGroupStyle} className="form-group">
              <label style={formLabelStyle} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={formInputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={formGroupStyle} className="form-group">
              <label style={formLabelStyle} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="6"
                style={{
                  ...formInputStyle,
                  resize: "vertical",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              ></textarea>
            </div>

            <button
              type="submit"
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
              className="cta-button"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
