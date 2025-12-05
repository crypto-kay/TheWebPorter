# Developer Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Development Environment Setup](#development-environment-setup)
3. [Code Organization](#code-organization)
4. [Styling Guidelines](#styling-guidelines)
5. [Component Development](#component-development)
6. [Template Creation](#template-creation)
7. [State Management](#state-management)
8. [Testing Strategy](#testing-strategy)
9. [Performance Optimization](#performance-optimization)
10. [Git Workflow](#git-workflow)

## Introduction

This guide is for developers working on TheWebPorter project. It covers coding standards, best practices, and development workflows to ensure consistency and quality across the codebase.

## Development Environment Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- VS Code (recommended)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Setup Steps

1. Fork and clone the repository:
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

4. Open in VS Code:
```bash
code .
```

## Code Organization

### File Structure

```
src/
├── main.jsx              # Application entry point
├── index.css             # Global styles and Tailwind imports
└── showcase.jsx          # Main application component
```

### Component Structure

Each component should follow this structure:

```jsx
// Component imports
import React, { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';

// Component definition
const ComponentName = ({ prop1, prop2 }) => {
  // State hooks
  const [state, setState] = useState(initialValue);
  
  // Effect hooks
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // Event handlers
  const handleEvent = () => {
    // Event logic
  };
  
  // Render
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  );
};

// Export
export default ComponentName;
```

### Naming Conventions

#### Files
- Use PascalCase for component files: `ComponentName.jsx`
- Use kebab-case for utilities: `utility-function.js`

#### Components
- Use PascalCase for component names: `ProjectCard`
- Use camelCase for props: `onClick`, `isActive`

#### Variables
- Use camelCase for variables: `selectedProject`, `isLoading`
- Use UPPER_SNAKE_CASE for constants: `API_BASE_URL`

#### CSS Classes
- Use Tailwind utility classes
- For custom CSS, use kebab-case: `.custom-class`

## Styling Guidelines

### Tailwind CSS Usage

#### Preferred Approach
```jsx
// Use utility classes directly
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
```

#### Custom Components
For repeated patterns, create component classes:
```jsx
const Button = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

#### Responsive Design
```jsx
// Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3 p-4">
```

#### Custom CSS
For template-specific styles, use inline style blocks:
```jsx
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Font+Name:wght@300;400;600&display=swap');
  .custom-font { font-family: 'Font Name', sans-serif; }
`}</style>
```

### Color System

Use consistent color variables for templates:

```jsx
// Template-specific color palette
const colors = {
  primary: '#1D3557',
  secondary: '#457B9D',
  accent: '#E63946',
  background: '#F1FAEE',
  text: '#2c2c2c'
};
```

## Component Development

### Functional Components

Use functional components with hooks:

```jsx
import React, { useState, useEffect, useRef } from 'react';

const Component = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  const ref = useRef(null);
  
  useEffect(() => {
    // Component lifecycle
    return () => {
      // Cleanup
    };
  }, []);
  
  return (
    <div ref={ref}>
      {/* JSX content */}
    </div>
  );
};

export default Component;
```

### Props Validation

Use PropTypes or TypeScript for type checking:

```jsx
import PropTypes from 'prop-types';

const Component = ({ title, count, isActive }) => {
  // Component logic
};

Component.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  isActive: PropTypes.bool
};

Component.defaultProps = {
  count: 0,
  isActive: false
};
```

### Event Handlers

Follow naming conventions:

```jsx
const handleClick = () => {
  // Handle click event
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

const handleScroll = (e) => {
  // Handle scroll event
};
```

### Conditional Rendering

Use ternary operators and logical operators:

```jsx
// Ternary operator
{isLoading ? <Spinner /> : <Content />}

// Logical AND
{showDetails && <DetailsComponent />}

// Multiple conditions
{isLoggedIn ? (
  <UserProfile />
) : (
  <LoginForm />
)}
```

## Template Creation

### Template Structure

Each template should follow this structure:

```jsx
const TemplateName = ({ project }) => {
  // Template-specific state
  const [state, setState] = useState(initialValue);
  
  // Template-specific effects
  useEffect(() => {
    // Template initialization
  }, []);
  
  return (
    <div className="template-specific-classes">
      {/* Template sections */}
    </div>
  );
};
```

### Template Sections

Common sections across templates:

1. **Navigation**
2. **Hero Section**
3. **Features/Services**
4. **Gallery/Showcase**
5. **Testimonials**
6. **Contact/CTA**
7. **Footer**

### Template-Specific Features

Implement unique features for each template:

```jsx
// Luxury template example
const LuxuryTemplate = ({ project }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  
  const handleScroll = (e) => {
    // Scroll-based navigation hide/show
  };
  
  return (
    <div className="font-luxury-serif bg-[#0c0c0c]" onScroll={handleScroll}>
      {/* Luxury-specific design */}
    </div>
  );
};
```

### Font Import

Use Google Fonts for template typography:

```jsx
<style>{`
  @import url('https://fonts.googleapis.com/css2?family=Font+Name:ital,wght@0,400;0,700;1,400&display=swap');
  .font-template-name { font-family: 'Font Name', serif; }
`}</style>
```

## State Management

### Local State

Use React hooks for local state:

```jsx
const [selectedProject, setSelectedProject] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [formData, setFormData] = useState({});
```

### Derived State

Compute derived values from state:

```jsx
const filteredProjects = projects.filter(project => 
  project.category === selectedCategory
);
```

### State Updates

Use functional updates for complex state:

```jsx
// For objects
setFormData(prev => ({
  ...prev,
  [name]: value
}));

// For arrays
setItems(prev => [...prev, newItem]);
```

### Effect Dependencies

Include all dependencies in useEffect:

```jsx
useEffect(() => {
  // Effect logic
}, [dependency1, dependency2]); // Include all dependencies
```

## Testing Strategy

### Component Testing

Use React Testing Library:

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  test('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
  
  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Component onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Integration Testing

Test component interactions:

```jsx
test('form submission', () => {
  render(<ContactForm />);
  
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'John Doe' }
  });
  
  fireEvent.click(screen.getByText('Submit'));
  
  expect(screen.getByText('Form submitted')).toBeInTheDocument();
});
```

### Manual Testing

Test across:
- Different screen sizes
- Various browsers
- Mobile devices
- Accessibility tools

## Performance Optimization

### Component Optimization

Use React.memo for expensive components:

```jsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
});
```

### Image Optimization

Implement lazy loading:

```jsx
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={imgRef}>
      {isLoaded && <img src={src} alt={alt} />}
    </div>
  );
};
```

### Bundle Optimization

Use dynamic imports for code splitting:

```jsx
const LazyComponent = React.lazy(() => import('./Component'));

// Usage with Suspense
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

## Git Workflow

### Branching Strategy

```
main                 # Production branch
├── develop          # Development branch
├── feature/feature-name
├── bugfix/bug-description
└── hotfix/urgent-fix
```

### Commit Messages

Use conventional commits:

```
type(scope): description

feat(templates): add new education template
fix(navbar): resolve mobile menu issue
docs(readme): update installation instructions
style(components): improve button hover effects
refactor(utils): optimize image loading
test(components): add unit tests for cards
```

### Pull Request Process

1. Create feature branch from develop
2. Implement changes with tests
3. Ensure all tests pass
4. Submit pull request to develop
5. Request code review
6. Merge after approval

### Code Review Guidelines

Review for:
- Code quality and style
- Performance implications
- Accessibility compliance
- Test coverage
- Documentation updates

## Debugging

### Common Issues

#### State Not Updating
```jsx
// Wrong
state.value = newValue;

// Correct
setState(prev => ({ ...prev, value: newValue }));
```

#### Infinite Re-renders
```jsx
// Wrong - missing dependency
useEffect(() => {
  setState(value + 1);
}); // Missing dependency

// Correct
useEffect(() => {
  setState(value + 1);
}, [value]); // Include dependency
```

#### Memory Leaks
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    // Timer logic
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
}, []);
```

### Debugging Tools

- React DevTools for component inspection
- Browser DevTools for network and console
- Lighthouse for performance auditing
- Axe DevTools for accessibility testing

## Best Practices

### Code Quality

1. Keep components small and focused
2. Use descriptive variable names
3. Add comments for complex logic
4. Follow consistent formatting
5. Remove unused code and imports

### Performance

1. Optimize images and assets
2. Implement lazy loading
3. Use code splitting
4. Minimize re-renders
5. Monitor bundle size

### Accessibility

1. Use semantic HTML
2. Add ARIA attributes
3. Ensure keyboard navigation
4. Test with screen readers
5. Maintain color contrast

### Security

1. Sanitize user inputs
2. Use HTTPS in production
3. Implement CSP headers
4. Validate data on both sides
5. Keep dependencies updated

---

For questions or additional guidance, refer to the project documentation or contact the development team.