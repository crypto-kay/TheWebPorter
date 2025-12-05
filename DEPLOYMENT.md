# Deployment Guide

## Table of Contents
1. [Overview](#overview)
2. [Build Process](#build-process)
3. [Deployment Platforms](#deployment-platforms)
4. [Environment Variables](#environment-variables)
5. [Domain Configuration](#domain-configuration)
6. [Performance Optimization](#performance-optimization)
7. [Monitoring and Analytics](#monitoring-and-analytics)
8. [Troubleshooting](#troubleshooting)

## Overview

This guide covers deployment options for TheWebPorter, a React-based web application built with Vite. The application is designed for static hosting and can be deployed to various platforms with minimal configuration.

## Build Process

### Prerequisites

Ensure you have Node.js (v16 or higher) and npm installed.

### Building for Production

1. Install dependencies:
```bash
npm install
```

2. Build the application:
```bash
npm run build
```

3. The build output will be in the `dist/` directory

### Build Output Structure

```
dist/
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [image-files]
├── index.html
└── favicon.ico (if present)
```

### Build Configuration

The build process uses the following configurations:

#### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Base public path
})
```

#### Tailwind Configuration
- Purges unused CSS in production
- Optimizes for final bundle size
- Includes all responsive variants

## Deployment Platforms

### Netlify (Recommended)

The application is pre-configured for Netlify deployment.

#### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automatically on push to main branch

#### Manual Deployment

1. Build the application locally
2. Drag and drop the `dist` folder to Netlify deploy page
3. Configure your custom domain if needed

#### Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

#### Redirects and Headers

Create `_redirects` file in public directory for SPA routing:
```
/*    /index.html   200
```

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Configure project settings in Vercel dashboard

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',
})
```

2. Build the application
3. Deploy `dist` folder to `gh-pages` branch

### AWS S3 + CloudFront

1. Build the application
2. Upload `dist` contents to S3 bucket
3. Configure CloudFront distribution
4. Set up S3 static website hosting

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Deploy:
```bash
firebase deploy --only hosting
```

## Environment Variables

### Required Variables

The application doesn't require environment variables for basic functionality.

### Optional Variables

For enhanced functionality, you may configure:

```bash
# Analytics (if implemented)
VITE_GA_TRACKING_ID=your-ga-id

# API endpoints (if backend integration)
VITE_API_URL=https://api.example.com

# WhatsApp number (to override hardcoded)
VITE_WHATSAPP_NUMBER=919166361317
```

### Platform-Specific Configuration

#### Netlify
- Set environment variables in Site settings > Build & deploy > Environment
- Available during build time

#### Vercel
- Set environment variables in Project settings > Environment Variables
- Available during build time

#### Firebase
- Use `.firebaserc` and `firebase.json` for configuration
- Environment variables set through Firebase console

## Domain Configuration

### Custom Domain Setup

#### Netlify
1. Go to Domain settings in Netlify dashboard
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic)

#### Vercel
1. Go to Project settings > Domains
2. Add custom domain
3. Configure DNS records
4. SSL certificate is automatic

#### Other Platforms
1. Configure CNAME or A records in your DNS provider
2. Set up SSL certificate (Let's Encrypt recommended)
3. Configure CDN if needed

### DNS Configuration

Typical DNS records:

```
Type: A
Name: @
Value: 192.0.2.1 (platform IP)

Type: CNAME
Name: www
Value: your-platform.com
```

## Performance Optimization

### Build Optimizations

The application includes several performance optimizations:

#### Code Splitting
- Automatic code splitting by route
- Dynamic imports for templates
- Lazy loading of images

#### Asset Optimization
- Image compression and optimization
- CSS purging in production
- JavaScript minification

#### Caching Strategy
```javascript
// Cache static assets for 1 year
// Cache HTML for 1 hour
// Service Worker for offline support (if implemented)
```

### CDN Configuration

#### Netlify
- Automatic CDN distribution
- Edge caching enabled
- Global edge locations

#### Vercel
- Built-in CDN with Edge Network
- Automatic asset optimization
- Global distribution

#### Custom CDN
1. Configure CDN provider (Cloudflare, AWS CloudFront)
2. Set up origin to your hosting
3. Configure caching rules
4. Update DNS to point to CDN

### Performance Monitoring

#### Lighthouse CI
1. Install Lighthouse CI:
```bash
npm install -g @lhci/cli
```

2. Configure `.lighthouserc.js`:
```javascript
module.exports = {
  ci: {
    collect: {
      url: ['https://your-site.com'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }]
      }
    }
  }
};
```

#### Web Vitals
Implement Web Vitals monitoring:
```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Monitoring and Analytics

### Google Analytics

1. Create GA4 property
2. Add tracking script to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

#### Sentry Integration
1. Install Sentry:
```bash
npm install @sentry/react @sentry/tracing
```

2. Configure in `main.jsx`:
```javascript
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "YOUR_DSN",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

### Uptime Monitoring

Set up uptime monitoring with:
- Uptime Robot
- Pingdom
- StatusCake

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 16+
```

#### Deployment Issues
1. Check build logs for errors
2. Verify environment variables
3. Ensure all dependencies are installed
4. Check platform-specific requirements

#### Routing Issues
Ensure proper SPA routing configuration:
```javascript
// Netlify: _redirects file
/*    /index.html   200

// Vercel: vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### Asset Loading Issues
1. Check base path configuration
2. Verify asset paths in built HTML
3. Ensure proper MIME types on server
4. Check CORS configuration if needed

#### Performance Issues
1. Run Lighthouse audit
2. Check bundle size with:
```bash
npm run build -- --analyze
```
3. Optimize images and assets
4. Implement lazy loading

### Debugging Production

#### Browser DevTools
1. Open Developer Tools
2. Check Console for errors
3. Inspect Network tab for failed requests
4. Verify Application tab for storage issues

#### Remote Debugging
1. Use browser-based debugging tools
2. Check platform-specific logs
3. Monitor real-time errors
4. Test in production environment

### Security Considerations

#### HTTPS Configuration
- Ensure SSL certificate is properly configured
- Redirect HTTP to HTTPS
- Update all internal links to HTTPS

#### Content Security Policy
Implement CSP headers:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
```

#### Security Headers
Add security headers:
```javascript
// Netlify: _headers file
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## Maintenance

### Regular Tasks

1. **Weekly**:
   - Check uptime monitoring
   - Review performance metrics
   - Update dependencies

2. **Monthly**:
   - Run security audits
   - Update SSL certificates
   - Review analytics data

3. **Quarterly**:
   - Performance optimization review
   - Accessibility audit
   - SEO check

### Backup Strategy

1. **Code Backup**: Version control (Git)
2. **Configuration Backup**: Document all settings
3. **Data Backup**: If implementing backend features

### Update Process

1. Test changes in development
2. Build and test staging version
3. Deploy to production
4. Monitor for issues
5. Rollback if necessary

---

For additional support or questions about deployment, contact the development team or refer to platform-specific documentation.