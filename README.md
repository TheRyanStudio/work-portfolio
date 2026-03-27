# Ryan Johnson - Portfolio Website

A modern, interactive portfolio website built with React and Vite. Features light/dark mode toggle, responsive design, and smooth animations.

## Features

- ✨ Modern and sleek design with interactive elements
- 🌓 Light and dark mode toggle
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 📄 Resume available for viewing/download
- 🖼️ Project showcase with image galleries
- ⚡ Built with Vite for fast performance
- 🚀 GitHub Pages ready deployment

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

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TheRyanStudio/work-portfolio.git
cd work-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

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

## Customization Guide

### Update Personal Information

Edit the following files to update your information:

- **Navigation.jsx**: Update resume PDF path if needed
- **Hero.jsx**: Customize hero title and subtitle
- **About.jsx**: Update about me text and highlights
- **Skills.jsx**: Add/remove skills and categories
- **Projects.jsx**: Update project details, images, and links
- **Experience.jsx**: Add/remove work experience
- **Contact.jsx**: Update contact methods and email
- **Footer.jsx**: Update social links and copyright

### Change Colors

Global colors are defined in `index.css` under the `:root` selector:

```css
:root {
  --primary: #0f172a; /* Dark background */
  --accent: #3b82f6; /* Blue accent */
  --success: #10b981; /* Green for success */
  /* ... more colors */
}
```

Modify these values to change the color scheme across the entire site.

### Add Resume PDF

Place your resume PDF in the `public/` folder:

```bash
cp path/to/your/resume.pdf public/resume.pdf
```

The resume is referenced in Navigation.jsx and About.jsx as `/resume.pdf`.

### Update Images

Place your images in the `public/images/` folder:

- `headshot.jpg` - Your profile picture (About section)
- Project images - Referenced in Projects.jsx

## Building for Production

Build the optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

Preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

### Step 1: Update package.json

The `homepage` field is already set to:

```json
"homepage": "https://TheRyanStudio.github.io/work-portfolio"
```

Update `TheRyanStudio` with your actual GitHub username if different.

### Step 2: Install GitHub Pages package (if not already installed)

```bash
npm install gh-pages --save-dev
```

It's already included in the dev dependencies.

### Step 3: Deploy

```bash
npm run deploy
```

This will:

1. Build the project
2. Push the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select the `gh-pages` branch
5. Click **Save**

Your portfolio will be live at: `https://TheRyanStudio.github.io/work-portfolio`

### Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Adding a Resume

1. Convert your resume to PDF format
2. Place it in the `public/` folder as `resume.pdf`
3. The "Download Resume" button will automatically work

## Performance Optimization

- Images are optimized and responsive
- CSS is minified in production
- JavaScript is code-split by Vite
- Animations use GPU-accelerated CSS transforms
- Theme preference is cached in localStorage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Styles not loading in dark mode?

Check that your HTML root element has the correct class. The theme toggle should add/remove the `light` class from `document.documentElement`.

### Images not showing?

Ensure image files are in the `public/` folder and paths in components are correct:

```jsx
<img src="/images/filename.jpg" alt="description" />
```

### Deploy button not working?

Ensure:

1. GitHub username in `package.json` homepage is correct
2. Repository is public
3. You have push access to the repository

## Future Enhancements

Consider adding:

- [ ] Blog section for tech articles
- [ ] Testimonials/recommendations section
- [ ] Case studies for projects
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Sitemap
- [ ] Search functionality

## License

This project is open source and available under the MIT License.

## Contact

- Email: [ryandjohnson08@gmail.com](mailto:ryandjohnson08@gmail.com)
- GitHub: [@TheRyanStudio](https://github.com/TheRyanStudio)
- LinkedIn: [ryan-johnson-cs](https://linkedin.com/in/ryan-johnson-cs)

---

Made with ❤️ by Ryan Johnson
