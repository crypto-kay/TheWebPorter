# TheWebPorter - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Template System](#template-system)
6. [Core Components](#core-components)
7. [Development Setup](#development-setup)
8. [Deployment](#deployment)
9. [Configuration](#configuration)

## Project Overview

TheWebPorter is a React-based web application that serves as a portfolio showcase for website templates designed for various business categories in the Delhi NCR region. The application demonstrates multiple website templates tailored for different industries including real estate, hospitality, healthcare, education, e-commerce, and coworking spaces.

### Key Features
- Interactive portfolio showcase with filtering capabilities
- Six distinct website templates with unique designs
- Live preview mode for each template
- Responsive design optimized for all devices
- Search functionality across projects
- Category-based filtering
- WhatsApp integration for business inquiries

## Architecture

The application follows a component-based architecture pattern typical of modern React applications:

```
src/
├── main.jsx          # Application entry point
├── index.css         # Global styles and Tailwind imports
└── showcase.jsx      # Main application component with all templates
```

### Architecture Patterns
- **Component-Based**: UI is broken down into reusable components
- **Template Engine**: Dynamic template rendering based on project type
- **State Management**: React hooks for local state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Technology Stack

### Frontend Framework
- **React 18.2.0**: Core UI framework with hooks support
- **Vite 5.0.8**: Build tool and development server

### Styling
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **PostCSS**: CSS processing pipeline
- **Google Fonts**: Typography for various templates

### Icons
- **Lucide React 0.294.0**: Icon library for UI elements

### Development Tools
- **ESLint**: Code linting and formatting
- **VS Code Extensions**: Development environment configuration

## Project Structure

```
TheWebPorter/
├── .cspell.json           # Spell checker configuration
├── .vscode/
│   └── settings.json      # VS Code workspace settings
├── context.pdf            # Project context documentation
├── index.html             # HTML entry point with meta tags
├── netlify.toml           # Netlify deployment configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── README.md              # Basic project description
├── tailwind.config.js     # Tailwind CSS customization
├── vite.config.js         # Vite build configuration
└── src/
    ├── index.css          # Global styles
    ├── main.jsx           # Application entry point
    └── showcase.jsx       # Main application component
```

## Template System

The application implements a sophisticated template engine that renders different website designs based on the selected project. Each template has its own unique design system, color palette, and layout structure.

### Template Types

1. **Luxury Template** (`LuxuryTemplate`)
   - **Purpose**: High-end real estate properties
   - **Design**: Elegant, minimalist with gold accents
   - **Features**: Virtual tours, property galleries, inquiry forms
   - **Typography**: Cormorant Garamond (serif), Montserrat (sans-serif)

2. **Cafe Template** (`CafeTemplate`)
   - **Purpose**: Coffee shops and hospitality businesses
   - **Design**: Warm, inviting with orange/brown color scheme
   - **Features**: Menu display, reservation system, Instagram integration
   - **Typography**: Playfair Display (serif), Oswald (sans-serif)

3. **Lifestyle Template** (`LifestyleTemplate`)
   - **Purpose**: Fashion and e-commerce brands
   - **Design**: Bold, streetwear-inspired with high contrast
   - **Features**: Product carousel, shopping cart, lookbook
   - **Typography**: Anton (display), Inter (body)

4. **Trust Template** (`TrustTemplate`)
   - **Purpose**: Healthcare and medical practices
   - **Design**: Clean, professional with blue color scheme
   - **Features**: Appointment booking, patient testimonials, service listings
   - **Typography**: Inter (sans-serif), Merriweather (serif)

5. **Education Template** (`EducationTemplate`)
   - **Purpose**: Educational institutions and coaching centers
   - **Design**: Modern, vibrant with gradient accents
   - **Features**: Course listings, student portal, performance analytics
   - **Typography**: Outfit (display), Plus Jakarta Sans (body)

6. **Tech Template** (`TechTemplate`)
   - **Purpose**: Coworking spaces and tech companies
   - **Design**: Dark theme with neon green accents
   - **Features**: Membership plans, amenity grids, booking system
   - **Typography**: Space Grotesk (display), Inter (body)

### Template Implementation

Each template is implemented as a separate React component with:

- **Custom Styles**: Inline `<style>` blocks for template-specific CSS
- **Google Fonts**: Template-specific font imports
- **Interactive Elements**: Hover states, animations, and transitions
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **Accessibility**: Semantic HTML and ARIA attributes

## Core Components

### Main Application Component (`App`)

The main component manages the application state and renders either the catalogue view or template preview:

```jsx
const App = () => {
  const [viewMode, setViewMode] = useState('catalogue'); // 'catalogue' | 'preview'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePreviewProject, setActivePreviewProject] = useState(null);
  // ... rest of component logic
};
```

### Portfolio Data

The application uses mock data for portfolio items:

```jsx
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Skyline Heights Realty",
    category: "Real Estate",
    templateType: "luxury",
    location: "Gurgaon, Sector 42",
    image: "https://images.unsplash.com/...",
    description: "A luxury property showcase...",
    tags: ["Lead Gen", "3D Tours", "Premium UI"],
  },
  // ... more items
];
```

### Navigation Component (`Navbar`)

Sticky navigation bar with branding and call-to-action button:

```jsx
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    {/* Navigation content */}
  </nav>
);
```

### Project Card Component (`ProjectCard`)

Reusable card component for displaying portfolio items:

```jsx
const ProjectCard = ({ project, onClick }) => {
  // Card implementation with hover effects
};
```

### Modal Component (`Modal`)

Modal dialog for project details and preview launch:

```jsx
const Modal = ({ project, onClose, onPreview }) => {
  // Modal implementation with project details
};
```

### Utility Components

- **RevealOnScroll**: Animation component for scroll-triggered reveals
- **handleImageError**: Fallback image error handler

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TheWebPorter
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Deployment

### Netlify Configuration

The application is configured for deployment on Netlify:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Build Process

1. Run build command:
```bash
npm run build
```

2. Deploy `dist` folder to hosting provider

### Environment Variables

No environment variables are required for basic functionality. WhatsApp integration uses hardcoded phone number.

## Configuration

### Tailwind CSS Configuration

Custom screen sizes and theme extensions:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}
```

### Vite Configuration

React plugin configuration with base path:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### PostCSS Configuration

Tailwind and Autoprefixer setup:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### VS Code Settings

CSS linting configuration for unknown at-rules:

```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

### Spell Checker Configuration

Custom word list for project-specific terminology:

```json
{
  "version": "0.2",
  "words": [
    "Gurgaon", "Roastery", "thewebporter", "Hauz", "Khas",
    // ... more words
  ]
}
```

## Performance Considerations

### Image Optimization
- Uses Unsplash for placeholder images
- Implements lazy loading with intersection observers
- Fallback image handling for errors

### Bundle Optimization
- Vite's built-in optimization
- Code splitting at template level
- Dynamic imports for template components

### CSS Optimization
- Tailwind's purge mode removes unused styles
- Template-specific styles are isolated
- Minimal custom CSS

## Accessibility Features

- Semantic HTML5 structure
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader friendly content
- High contrast color schemes in templates

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## Future Enhancements

Potential areas for improvement:

1. **Backend Integration**: CMS for dynamic content
2. **User Authentication**: Personalized experiences
3. **Analytics**: User behavior tracking
4. **Performance**: Further optimization and caching
5. **Testing**: Unit and integration test coverage
6. **Internationalization**: Multi-language support

## Contributing Guidelines

1. Follow existing code patterns and naming conventions
2. Use Tailwind classes for styling
3. Maintain responsive design principles
4. Test across different screen sizes
5. Optimize images and assets
6. Document new features and components

## License

This project appears to be proprietary with no explicit license information in the repository.