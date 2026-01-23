# Bikram Keshari Parida - Portfolio Website

A professional portfolio website showcasing AI research, publications, and academic achievements.

## Overview

This is a React-based portfolio website for Dr. Bikram Keshari Parida, a Ph.D. candidate specializing in AI and Image Processing at Sun Moon University, South Korea.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, professional interface with smooth animations
- **Sections**:
  - Hero: Personal introduction with key statistics
  - About: Educational background and research focus
  - Research: Key projects and research interests
  - Publications: Filterable list of academic papers
  - Experience: Professional and teaching experience
  - Skills: Technical skills and expertise
  - Awards: Academic achievements and recognition
  - Contact: Contact information and links

## Technology Stack

- React 18
- TailwindCSS
- Lucide Icons
- Vanilla JavaScript (no build tools)

## File Structure

```
├── index.html
├── app.js
├── styles/
│   └── main.css
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Research.js
│   ├── Publications.js
│   ├── Experience.js
│   ├── Skills.js
│   ├── Awards.js
│   ├── Contact.js
│   └── Footer.js
└── trickle/
    └── notes/
        └── README.md
```

## Deployment to GitHub Pages

To host this portfolio on GitHub Pages:

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Save and wait for deployment

Your site will be available at: `https://[your-username].github.io/[repository-name]/`

## Customization

To update content:
- Personal information: Edit `components/Hero.js` and `components/About.js`
- Publications: Update the array in `components/Publications.js`
- Projects: Modify `components/Research.js`
- Experience: Edit `components/Experience.js`
- Contact: Update `components/Contact.js`

## Color Scheme

The portfolio uses a professional blue color scheme:
- Primary: #2563eb
- Secondary: #1e40af
- Accent: #3b82f6

Colors can be customized in `styles/main.css` by modifying CSS variables.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Bikram Keshari Parida. All rights reserved.