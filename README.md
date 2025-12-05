# TheWebPorter

A premium web development portfolio showcasing custom website templates for businesses in Delhi NCR region.

## 🚀 Live Demo

[View Live Demo](https://thewebporter.netlify.app/)

## 📋 Overview

TheWebPorter is a React-based web application that serves as an interactive portfolio showcasing six distinct website templates tailored for different business categories. Each template demonstrates industry-specific design patterns, user experiences, and conversion-focused features.

### Featured Templates

| Template | Industry | Key Features |
|----------|-----------|--------------|
| **Luxury** | Real Estate | Virtual tours, property galleries, lead generation |
| **Cafe** | Hospitality | Digital menu, reservations, social integration |
| **Lifestyle** | E-Commerce | Product showcase, shopping cart, lookbook |
| **Trust** | Healthcare | Appointment booking, patient testimonials |
| **Education** | Coaching Centers | Course listings, student portal, LMS features |
| **Tech** | Coworking Spaces | Membership plans, amenity grids, booking system |

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0 with hooks
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: Lucide React 0.294.0
- **Deployment**: Netlify

## 🏗️ Project Structure

```
TheWebPorter/
├── src/
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
│   └── showcase.jsx      # Main component with all templates
├── public/              # Static assets
├── docs/                # Documentation files
└── config files          # Build and deployment configs
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/thewebporter.git
cd thewebporter
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Features

### Portfolio Showcase
- Interactive grid layout with hover effects
- Category-based filtering
- Search functionality
- Responsive design for all devices

### Template Previews
- Live preview mode for each template
- Interactive elements and animations
- Mobile-responsive designs
- Industry-specific user experiences

### Business Integration
- WhatsApp contact integration
- Contact forms and inquiries
- Social media integration
- Location-based services

## 🎨 Design System

### Typography
Each template uses industry-appropriate typography:
- **Luxury**: Cormorant Garamond + Montserrat
- **Cafe**: Playfair Display + Oswald
- **Lifestyle**: Anton + Inter
- **Trust**: Inter + Merriweather
- **Education**: Outfit + Plus Jakarta Sans
- **Tech**: Space Grotesk + Inter

### Color Schemes
- **Luxury**: Black with gold accents
- **Cafe**: Warm browns and oranges
- **Lifestyle**: High contrast black and white
- **Trust**: Professional blues and whites
- **Education**: Vibrant gradients
- **Tech**: Dark with neon green

## 🔧 Configuration

### Tailwind CSS

Custom configuration with additional breakpoints:
```javascript
screens: {
  'xs': '475px',
  '3xl': '1600px',
  '4xl': '1920px',
}
```

### Vite

React plugin configuration:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

## 🚀 Deployment

### Netlify

The application is configured for automatic deployment to Netlify:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📊 Performance

### Optimization Techniques
- Lazy loading with Intersection Observer
- Image optimization and fallbacks
- Code splitting at template level
- Minimal bundle size with tree shaking

### Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines

- Follow existing code patterns
- Use Tailwind classes for styling
- Maintain responsive design
- Test across screen sizes
- Document new features

## 📝 License

This project is proprietary. All rights reserved.

## 📞 Contact

For inquiries or custom development:

- **WhatsApp**: +91 91663 61317
- **Email**: info@thewebporter.com
- **Location**: Delhi NCR, India

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) for placeholder images
- [Lucide](https://lucide.dev/) for icon library
- [Tailwind CSS](https://tailwindcss.com/) for styling framework
- [Vite](https://vitejs.dev/) for build tool

---

**TheWebPorter** - Crafting digital experiences that convert for Delhi NCR businesses.
