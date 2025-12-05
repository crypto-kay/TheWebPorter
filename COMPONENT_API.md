# Component API Documentation

## Table of Contents
1. [Core Application Components](#core-application-components)
2. [Template Components](#template-components)
3. [Utility Components](#utility-components)
4. [Data Structures](#data-structures)
5. [Event Handlers](#event-handlers)

## Core Application Components

### App Component

The main application component that manages state and routing between catalogue and preview modes.

#### Props
None (uses internal state management)

#### State
- `viewMode` (string): 'catalogue' | 'preview' - Controls which view is displayed
- `selectedCategory` (string): Current filter category (default: 'All')
- `searchQuery` (string): Search term for filtering projects
- `selectedProject` (object|null): Currently selected project for modal
- `activePreviewProject` (object|null): Project being previewed
- `filteredProjects` (array): Projects filtered by category and search

#### Methods
- `handleLivePreview(project)`: Opens preview mode for selected project
- `handleFormSubmit(e)`: Handles form submission (placeholder)
- `closePreview()`: Returns to catalogue view from preview

#### Example Usage
```jsx
// The App component is the root component and doesn't require explicit props
<App />
```

### Navbar Component

Sticky navigation bar with branding and call-to-action button.

#### Props
None

#### Features
- Sticky positioning with backdrop blur
- WhatsApp integration button
- Responsive design

#### Example Usage
```jsx
<Navbar />
```

### Modal Component

Modal dialog for displaying project details and launching preview.

#### Props
- `project` (object): Project data to display
- `onClose` (function): Callback for modal close action
- `onPreview` (function): Callback for preview launch action

#### Project Object Structure
```javascript
{
  id: number,
  title: string,
  category: string,
  templateType: string,
  location: string,
  image: string,
  description: string,
  tags: array of strings
}
```

#### Example Usage
```jsx
<Modal 
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
  onPreview={handleLivePreview}
/>
```

### ProjectCard Component

Card component for displaying portfolio items in the grid.

#### Props
- `project` (object): Project data to display
- `onClick` (function): Click handler for card interaction

#### Features
- Hover effects with image zoom
- Category display
- Responsive design
- Accessibility attributes

#### Example Usage
```jsx
<ProjectCard 
  project={project}
  onClick={setSelectedProject}
/>
```

## Template Components

### LuxuryTemplate

Template for luxury real estate properties.

#### Props
- `project` (object): Project data for template customization

#### Features
- Elegant serif typography
- Gold accent colors
- Horizontal scrolling sections
- Interactive navigation with scroll effects
- Inquiry form

#### Sections
- Hero with full-screen image
- Statistics bar
- Philosophy section
- Residence layouts (horizontal scroll)
- Amenities grid
- Inquiry form
- Footer

#### Example Usage
```jsx
<LuxuryTemplate project={project} />
```

### CafeTemplate

Template for coffee shops and hospitality businesses.

#### Props
- `project` (object): Project data for template customization

#### Features
- Warm color scheme
- Menu display
- Reservation system
- Instagram integration
- Marquee animations

#### Sections
- Hero with overlay
- Marquee announcement bar
- Story section
- Menu showcase
- Quote section
- Social media grid
- Footer with location and hours

#### Example Usage
```jsx
<CafeTemplate project={project} />
```

### LifestyleTemplate

Template for fashion and e-commerce brands.

#### Props
- `project` (object): Project data for template customization

#### Features
- Bold streetwear aesthetic
- Product carousel
- Shopping cart functionality
- Sidebar navigation
- Hero carousel

#### Sections
- Sidebar menu
- Hero carousel
- Ticker announcement
- Collections grid
- Product slider
- Shop the look
- Footer

#### Example Usage
```jsx
<LifestyleTemplate project={project} />
```

### TrustTemplate

Template for healthcare and medical practices.

#### Props
- `project` (object): Project data for template customization

#### Features
- Clean medical aesthetic
- Emergency notification bar
- Appointment booking
- Patient testimonials
- Service grid

#### Sections
- Emergency bar
- Information bar
- Navigation
- Hero with statistics
- Services grid
- Call-to-action section
- Footer

#### Example Usage
```jsx
<TrustTemplate project={project} />
```

### EducationTemplate

Template for educational institutions and coaching centers.

#### Props
- `project` (object): Project data for template customization

#### Features
- Modern gradient design
- Course listings
- Student testimonials
- Performance metrics
- Learning management features

#### Sections
- Announcement bar
- Navigation
- Hero with floating elements
- Statistics strip
- Popular courses
- LMS features
- Footer

#### Example Usage
```jsx
<EducationTemplate project={project} />
```

### TechTemplate

Template for coworking spaces and tech companies.

#### Props
- `project` (object): Project data for template customization

#### Features
- Dark theme with neon accents
- Membership pricing
- Amenities grid
- Modern tech aesthetic
- Interactive elements

#### Sections
- Navigation
- Hero with floating UI
- Amenities bento grid
- Pricing plans
- Footer

#### Example Usage
```jsx
<TechTemplate project={project} />
```

## Utility Components

### RevealOnScroll

Animation component that reveals content when it comes into view.

#### Props
- `children` (ReactNode): Content to be revealed
- `className` (string): Additional CSS classes (optional)

#### Features
- Intersection Observer API
- Customizable animation classes
- Performance optimized

#### Example Usage
```jsx
<RevealOnScroll className="custom-class">
  <h2>This content will animate in</h2>
</RevealOnScroll>
```

### handleImageError

Error handler function for image fallbacks.

#### Parameters
- `e` (Event): Error event from image element

#### Behavior
- Replaces failed image with fallback URL
- Prevents infinite error loops

#### Example Usage
```jsx
<img 
  src={imageUrl} 
  onError={handleImageError}
  alt="Description"
/>
```

## Data Structures

### PORTFOLIO_ITEMS

Array of project objects used throughout the application.

```javascript
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

### CATEGORIES

Array of category objects for filtering.

```javascript
const CATEGORIES = [
  { id: 'All', label: 'All Projects', icon: Layout },
  { id: 'Real Estate', label: 'Real Estate', icon: Building2 },
  // ... more categories
];
```

## Event Handlers

### Project Interaction Events

- `onClick(project)`: Triggered when project card is clicked
- `onClose()`: Triggered to close modal or preview
- `onPreview(project)`: Triggered to launch template preview

### Form Events

- `onSubmit(e)`: Triggered on form submission
- `onChange(e)`: Triggered on input field changes

### Navigation Events

- `onClick()`: Triggered for navigation interactions
- `onScroll(e)`: Triggered for scroll-based interactions

## Styling System

### Tailwind CSS Classes

The application uses Tailwind CSS with custom configuration:

```javascript
// Custom screen sizes
screens: {
  'xs': '475px',
  '3xl': '1600px',
  '4xl': '1920px',
}
```

### Custom CSS Classes

- `.scrollbar-hide`: Hides scrollbars across browsers
- Template-specific classes for unique designs

### Animation Classes

- `.animate-marquee`: Continuous horizontal scrolling
- `.animate-pulse-slow`: Slow pulsing animation
- `.animate-in`: Entrance animations with variants

## Accessibility Features

### Semantic HTML

- Proper heading hierarchy (h1, h2, h3)
- Semantic elements (nav, main, section, footer)
- ARIA attributes where needed

### Keyboard Navigation

- Tab order management
- Focus indicators
- Keyboard-accessible controls

### Screen Reader Support

- Alt text for images
- Descriptive labels
- Role attributes

## Performance Considerations

### Image Optimization

- Lazy loading with Intersection Observer
- Fallback images for errors
- Optimized image dimensions

### Component Optimization

- Conditional rendering
- Memoization opportunities
- Efficient event handlers

### Bundle Optimization

- Code splitting at template level
- Dynamic imports
- Tree shaking

## Browser Compatibility

### Supported Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Polyfills

- Intersection Observer (if needed)
- CSS custom properties
- ES6+ features

## Debugging Tools

### Development Tools

- React DevTools
- Vite dev server
- ESLint integration
- Browser developer tools

### Common Issues

1. **Image Loading**: Check Unsplash URLs and fallbacks
2. **Template Switching**: Verify templateType matches component
3. **Responsive Design**: Test at various breakpoints
4. **Performance**: Monitor bundle size and load times