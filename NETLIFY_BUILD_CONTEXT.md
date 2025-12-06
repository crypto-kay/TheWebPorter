# Netlify & Vercel Build Context for Debugging

## Project Overview
**Project Name**: TheWebPorter - Premium Web Development Catalogue
**Type**: React SPA with Vite build system
**Framework**: React 18.2.0 with modern hooks and components
**Styling**: Tailwind CSS with custom configurations
**Build Tool**: Vite 5.0.8

## Key Configuration Files

### package.json
- **Build Commands**: 
  - `npm run build` (for Netlify)
  - `npm run build:vercel` (for Vercel)
  - `npm run build:netlify` (for Netlify optimized)
- **Dependencies**: React, GSAP, Framer Motion, Lucide React, OGL, React Hook Form, Zod
- **Dev Dependencies**: Vite, React plugin, TypeScript, Tailwind, ESLint

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### netlify.toml
```toml
[build]
  command = "npm run build:netlify"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### vercel.json (NEW)
```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "nodeVersion": "18.x",
  "builds": {
    "src": {
      "src": "src/main.jsx",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  }
}
```

### tsconfig.json
- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **JSX**: react-jsx
- **Strict mode**: Disabled (`"strict": false`)
- **Path aliases**: `@/*` mapped to `./src/*`

## Project Structure
```
TheWebPorter/
├── src/
│   ├── main.jsx (entry point)
│   ├── showcase.jsx (main app component)
│   ├── components/
│   │   ├── ui/ (reusable components)
│   │   ├── sections/ (page sections)
│   │   └── showcases/ (template demos)
│   └── lib/ (utilities)
├── public/
│   └── _redirects
├── index.html
├── tailwind.config.js
├── vite.config.js
├── netlify.toml
├── vercel.json (NEW)
└── .gitignore
```

## Common Build Issues & Solutions

### 1. Build Process Issues
**Expected Flow**: 
1. Platform runs appropriate build command
2. Vite bundles application to `dist/`
3. Static files are deployed

**Vercel-Specific Issues**:
- Node version mismatch (requires 18.x)
- Permission denied errors with Vite binary
- Memory constraints during build
- Missing Vercel configuration file

**Netlify-Specific Issues**:
- Build command mismatch
- Environment variable conflicts
- Deploy timeout issues

### 2. TypeScript Configuration Issues
**Current Config**: Relaxed settings (`"strict": false`)
**Common Problems**:
- Type errors in components
- Import/export mismatches
- Missing type definitions

### 3. Asset & Path Issues
**Base Path**: Set to `'/'` in vite.config.js
**Asset Handling**: Vite automatically handles asset optimization
**Potential Issues**:
- Absolute vs relative paths
- Dynamic imports
- External resource loading

### 4. React Component Issues
**Key Components**:
- Multiple template components (Luxury, Cafe, Trust, etc.)
- Interactive elements (carousels, modals)
- GSAP animations
- Form handling
- **Recent Fix**: BubbleMenu logo prop made optional

**Common Problems**:
- Component re-renders
- State management issues
- Event handler problems
- Hook dependency arrays

### 5. Tailwind CSS Issues
**Custom Configuration**: Extended screens (3xl: 1600px, 4xl: 1920px)
**Build Optimization**: PurgeCSS should remove unused styles
**Potential Issues**:
- Missing Tailwind imports
- Custom class conflicts
- Build-time CSS generation

## Recent Changes Made
1. **Logo Removal**: Modified BubbleMenu component to conditionally render logo
2. **Git Integration**: Added comprehensive .gitignore
3. **Component Updates**: Multiple new components added
4. **TypeScript Config**: Added proper path resolution
5. **Vercel Configuration**: Added vercel.json with proper build settings
6. **Build Scripts**: Added platform-specific build commands

## Debugging Checklist

### Pre-Build
- [ ] Node version matches requirements (18.x for Vercel)
- [ ] All dependencies installed (`npm install`)
- [ ] TypeScript compiles locally (`npm run build:vercel` works locally)
- [ ] No console errors in development

### Vercel Build Process
- [ ] Check Vercel build logs for permission errors
- [ ] Verify NODE_OPTIONS environment variable
- [ ] Check memory usage during build
- [ ] Verify build command matches vercel.json config

### Netlify Build Process
- [ ] Check Netlify build logs for specific error messages
- [ ] Verify build command matches local command
- [ ] Check for environment variable issues
- [ ] Verify asset paths and imports

### Post-Build
- [ ] Check deployed site loads correctly
- [ ] Test interactive elements (carousels, modals)
- [ ] Verify all template previews work
- [ ] Check responsive behavior
- [ ] Test form submissions

## Specific Error Patterns to Look For

### Vercel Permission Errors
```
sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied
Error: Command "npm run build" exited with 126
```
**Solution**: Use NODE_OPTIONS environment variable to increase old space size

### TypeScript Errors
```
- Property 'X' does not exist on type 'Y'
- Module not found: Can't resolve import
- JSX element type error
```

### React Runtime Errors
```
- Cannot read property 'undefined'
- Maximum update depth exceeded
- Component re-render loops
```

### Build/Bundle Issues
```
- Module not found during build
- Asset optimization failed
- Bundle size too large
```

## Environment Variables & Secrets
Check platform UI for:
- Build environment variables
- Deploy context variables
- Any required secrets

## Performance Considerations
- GSAP animations should be optimized
- Image lazy loading implemented
- Bundle splitting configured
- CSS purging working correctly

## Contact Information
- **Repository**: https://github.com/crypto-kay/TheWebPorter
- **Recent Commit**: cd08fda - "Add all components and configuration files"
- **Build Status**: Check platform dashboard for latest deployment

## Quick Debug Commands
```bash
# Local build test (Vercel)
npm run build:vercel

# Local build test (Netlify)
npm run build:netlify

# Check types
npx tsc --noEmit

# Audit dependencies
npm audit

# Clean build
rm -rf dist && npm run build:vercel
```

## Common Solutions
1. **Vercel Permission Issues**: Use NODE_OPTIONS environment variable
2. **TypeScript Issues**: Add proper type definitions or use `any` temporarily
3. **Import Issues**: Check path aliases in vite.config.js
4. **Build Failures**: Ensure all files are properly exported
5. **Runtime Errors**: Check useEffect dependencies and state updates
6. **Asset Issues**: Verify all imports use correct file extensions