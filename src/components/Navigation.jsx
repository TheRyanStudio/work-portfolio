import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navigation() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const navbarStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "var(--bg)",
    borderBottom: "1px solid var(--border)",
    backdropFilter: "blur(10px)",
    backgroundColor: isDark
      ? "rgba(15, 23, 42, 0.95)"
      : "rgba(255, 255, 255, 0.95)",
  };

  const navContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLogoStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  };

  const logoCursiveStyle = {
    fontFamily: '"Dancing Script", cursive',
    fontSize: "2rem",
    color: "var(--accent)",
    fontWeight: 700,
  };

  const navMenuStyle = {
    display: isOpen ? "flex" : "flex",
    gap: "2rem",
    alignItems: "center",
    "@media (max-width: 768px)": {
      position: "fixed",
      left: isOpen ? 0 : "-100%",
      top: "70px",
      flexDirection: "column",
      backgroundColor: "var(--bg)",
      width: "100%",
      textAlign: "center",
      transition: "0.3s",
      padding: "2rem 0",
      borderTop: "1px solid var(--border)",
    },
  };

  const navLinkStyle = {
    background: "none",
    border: "none",
    color: "var(--text-secondary)",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "color 0.3s ease",
    padding: isOpen ? "1.5rem" : "0.5rem 0",
    position: "relative",
    width: isOpen ? "100%" : "auto",
  };

  const themToggleStyle = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  const hamburgerStyle = {
    display: "none",
    background: "none",
    border: "none",
    color: "var(--text-primary)",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "@media (max-width: 768px)": {
      display: "flex",
    },
  };

  const navActionsStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  return (
    <nav style={navbarStyle}>
      <style>{`
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: var(--bg);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            gap: 0;
            padding: 2rem 0;
            border-top: 1px solid var(--border);
          }
          .nav-menu.active {
            left: 0;
          }
          .nav-link {
            display: block;
            padding: 1.5rem;
            width: 100%;
          }
          .nav-link::after {
            display: none;
          }
          .hamburger {
            display: flex !important;
          }
          .nav-container {
            padding: 1rem 1.5rem;
          }
          .logo-cursive {
            font-size: 1.5rem;
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <div style={navContainerStyle} className="nav-container">
        <div style={navLogoStyle}>
          <span style={logoCursiveStyle} className="logo-cursive">
            Ryan Johnson
          </span>
        </div>

        <div
          style={navMenuStyle}
          className={`nav-menu ${isOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              style={{
                ...navLinkStyle,
                color:
                  hoveredLink === link.id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
              }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={navActionsStyle}>
          <button
            style={themToggleStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-secondary)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>

          <button
            className="hamburger"
            style={hamburgerStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
