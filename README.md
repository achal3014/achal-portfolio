# Data Scientist Portfolio

A modern, animated portfolio website built with React and Tailwind CSS, featuring a sleek dark theme with purple and pink gradients.

## Features

- 🎨 Modern, responsive design with glassmorphism effects
- ⚡ Smooth animations and micro-interactions
- 🌟 Interactive background with mouse-following gradients
- 📱 Fully responsive across all devices
- 🎯 Smooth scrolling navigation
- 💫 CSS animations and hover effects
- 🔧 Modular component architecture

## Tech Stack

- **React** - Frontend library
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **CSS Animations** - Custom animations

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Main navigation component
│   │   ├── HeroSection.jsx      # Hero/landing section
│   │   ├── AboutSection.jsx     # About me section
│   │   ├── SkillsSection.jsx    # Skills and technologies
│   │   ├── ProjectsSection.jsx  # Featured projects
│   │   ├── ContactSection.jsx   # Contact information
│   │   └── Footer.jsx           # Footer component
│   ├── data/
│   │   └── portfolioData.js     # Portfolio content data
│   ├── styles/
│   │   ├── globals.css          # Global styles and utilities
│   │   └── animations.css       # Custom animations
│   ├── hooks/
│   │   └── useMousePosition.js  # Mouse position tracking hook
│   ├── utils/
│   │   └── scrollUtils.js       # Scroll utility functions
│   ├── App.jsx                  # Main app component
│   ├── index.js                 # Entry point
│   └── index.css                # Base styles
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information
Update the portfolio content in `src/data/portfolioData.js`:
- Personal information (name, title, bio)
- Skills and technologies
- Project details
- Social media links

### Styling
- Global styles: `src/styles/globals.css`
- Animations: `src/styles/animations.css`
- Component-specific styles are handled through Tailwind classes

### Components
Each section is a separate component in `src/components/` for easy customization:
- Modify individual sections without affecting others
- Add new sections by creating new components
- Update navigation in `Navigation.jsx`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Deployment

Build the project for production:
```bash
npm run build
```

The build folder contains the optimized production build ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## Contact

S Achal - [Your Email] - [Your LinkedIn]

Project Link: [Repository URL]