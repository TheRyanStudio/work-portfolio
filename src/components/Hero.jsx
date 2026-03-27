import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    padding: "1rem 2rem 2rem",
    minHeight: "calc(100vh - 5.5rem)",
  };

  const heroBackgroundStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    overflow: "hidden",
  };

  const gradientOrbStyle = {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(80px)",
    opacity: 0.3,
  };

  const orb1Style = {
    ...gradientOrbStyle,
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent 70%)",
    top: "-100px",
    right: "-100px",
    animation: "float 20s infinite ease-in-out",
  };

  const orb2Style = {
    ...gradientOrbStyle,
    width: "300px",
    height: "300px",
    background:
      "radial-gradient(circle, rgba(16, 185, 129, 0.6), transparent 70%)",
    bottom: "-50px",
    left: "-50px",
    animation: "float 25s infinite ease-in-out reverse",
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 10,
    textAlign: "left",
    maxWidth: "800px",
    animation: "fadeIn 0.8s ease-in 0.2s backwards",
  };

  const badgeStyle = {
    display: "inline-block",
    background: "rgba(124, 107, 255, 0.15)",
    border: "1px solid rgba(124, 107, 255, 0.45)",
    color: "var(--accent)",
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "0.4rem 1rem",
    borderRadius: "999px",
  };

  const heroTitleStyle = {
    fontSize: "4rem",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "1.5rem",
    color: "var(--text-primary)",
  };

  const accentTextStyle = {
    background: "linear-gradient(135deg, #3b82f6, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const heroSubtitleStyle = {
    fontSize: "1.5rem",
    color: "var(--text-secondary)",
    marginBottom: "2.5rem",
    lineHeight: 1.6,
  };

  const heroButtonsStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    zIndex: 10,
    background: "none",
    border: "none",
    color: "var(--accent)",
    cursor: "pointer",
    animation: "bounce 2s infinite",
    transition: "color 0.3s ease",
  };

  return (
    <section style={heroStyle} className="hero">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }
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
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }
        .cta-button {
          display: inline-block;
          padding: 0.875rem 2rem;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
        .cta-button.secondary {
          background: transparent;
          border: 2px solid var(--accent);
          color: var(--accent);
        }
        .cta-button.secondary:hover {
          background: var(--accent);
          color: white;
        }
        .hero-btn {
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .hero {
            min-height: 80vh;
            padding: 1rem 1rem 2rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.125rem;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .orb-1 {
            width: 300px;
            height: 300px;
          }
          .orb-2 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
      <div style={heroContentStyle}>
        <div style={badgeStyle}>Available for hire</div>
        <h1
          className="hero-title"
          style={{
            ...heroTitleStyle,
            fontSize: "clamp(4rem, 9vw, 8rem)",
            textAlign: "left",
          }}
        >
          Ryan <br />
          <span style={{ color: "var(--accent)" }}>Johnson.</span>
        </h1>
        <p
          className="hero-subtitle"
          style={{
            ...heroSubtitleStyle,
            fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
            lineHeight: 1.2,
            textAlign: "left",
          }}
        >
          Full Stack Developer
        </p>
        <div style={heroButtonsStyle} className="hero-buttons">
          <button className="cta-button hero-btn" onClick={scrollToProjects}>
            Explore My Work
          </button>
          <button
            className="cta-button secondary hero-btn"
            onClick={scrollToContact}
          >
            Get in Touch
          </button>
        </div>
      </div>

      <button
        style={scrollIndicatorStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--accent-light)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--accent)";
        }}
        onClick={scrollToAbout}
        aria-label="Scroll to about"
      >
        <FiArrowDown size={24} />
      </button>

      <div style={heroBackgroundStyle}>
        <div style={orb1Style}></div>
        <div style={orb2Style}></div>
      </div>
    </section>
  );
}
