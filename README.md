# Ryan Johnson - Portfolio Website

A modern, interactive portfolio website built with React and Vite. Features light/dark mode toggle, responsive design, and smooth animations.

## Sections

- **Hero** - Eye-catching landing section
- **About** - Personal introduction with headshot
- **Skills** - Organized by categories
- **Projects** - Featured projects with images and descriptions
- **Experience** - Timeline of work experience
- **Contact** - Contact form and social links
- **Footer** - Quick navigation and social connections

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Modules
- **Icons**: React Icons
- **Fonts**: Inter (main) and Dancing Script (logo)
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Development

The project structure is organized as follows:

```
work-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/             # React context (Theme)
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
│   ├── images/             # Project and profile images
│   └── resume.pdf          # Your resume PDF
├── package.json
├── vite.config.js
├── index.html
└── README.md
```
