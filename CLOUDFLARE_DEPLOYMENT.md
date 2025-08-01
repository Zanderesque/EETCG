# Cloudflare Deployment Guide

This document provides detailed information about deploying the Elite Enterprise Consulting Group Next.js application to Cloudflare Pages using the optimized OpenNext configuration.

## Table of Contents

1. [Deployment Overview](#deployment-overview)
2. [Current Configuration](#current-configuration)
3. [Automated Deployment (CI/CD)](#automated-deployment-cicd)
4. [Manual Deployment](#manual-deployment)
5. [Build Configuration](#build-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

## Deployment Overview

This project uses **OpenNext** as the deployment adapter for Cloudflare Pages. The configuration has been optimized to eliminate common deployment errors and provide reliable, automated deployments.

### Key Features

- **Pure OpenNext approach** - No conflicting adapters
- **Automated CI/CD** - GitHub Actions workflow
- **Error-free configuration** - Optimized for Cloudflare Workers
- **Standalone output** - Next.js configured for serverless deployment

## Current Configuration

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "opennext:build": "next build && open-next build",
    "opennext:deploy": "wrangler pages deploy .open-next/standalone --project-name=eetcg",
    "opennext:dev": "wrangler pages dev .open-next/standalone --compatibility-flag=nodejs_compat",
    "deploy": "npm run opennext:build && npm run opennext:deploy",
    "preview": "npm run opennext:build && npm run opennext:dev"
  }
}
```

### Wrangler.toml Configuration

```toml
# wrangler.toml
name = 'eetcg'
main = ".open-next/worker.js"
compatibility_date = "2024-03-25"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".open-next/assets"
binding = "ASSETS"

[build]
command = "npm run opennext:build"

# Environment variables (add as needed)
[vars]
NODE_ENV = "production"

# Pages configuration
[site]
bucket = ".open-next/assets"
```

### Next.js Configuration

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
    ],
  },
  
  // Configure for serverless deployment
  output: 'standalone',
};

module.exports = nextConfig;
```

## Automated Deployment (CI/CD)

### GitHub Actions Workflow

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys on push to the main branch:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Build with OpenNext
        run: npm run opennext:build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: eetcg
          directory: .open-next/standalone
```

### Required GitHub Secrets

Add these secrets to your GitHub repository settings:

- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token with Pages:Edit permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

## Manual Deployment

### Local Development and Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build and preview locally
npm run preview

# Deploy to production
npm run deploy
```

### Step-by-Step Manual Deployment

1. **Build the application:**
   ```bash
   npm run opennext:build
   ```

2. **Deploy to Cloudflare Pages:**
   ```bash
   npm run opennext:deploy
   ```

## Build Configuration

### Cloudflare Pages Settings

Configure these settings in your Cloudflare Pages dashboard:

- **Build command:** `npm run opennext:build`
- **Deploy command:** `wrangler pages deploy .open-next/standalone`
- **Non-production branch deploy command:** `npm run opennext:build && wrangler pages deploy .open-next/standalone`
- **Path:** `/`
- **Node.js version:** `18`

### Build Process

The OpenNext build process:

1. Runs `next build` to create the Next.js production build
2. Transforms the output using `open-next build` for Cloudflare compatibility
3. Creates a `.open-next/standalone` directory with optimized assets
4. Generates a worker.js file for Cloudflare Workers runtime

## Troubleshooting

### Common Issues and Solutions

#### Build Failures

**Issue:** `npm ci` fails with dependency conflicts
**Solution:** Ensure `package-lock.json` is committed and up-to-date

**Issue:** OpenNext build fails
**Solution:** Check that `output: 'standalone'` is set in `next.config.js`

#### Deployment Failures

**Issue:** Wrangler deployment fails with authentication error
**Solution:** Verify `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets are set correctly

**Issue:** Pages not loading correctly
**Solution:** Check that the deploy command points to `.open-next/standalone`

#### Runtime Errors

**Issue:** Images not loading
**Solution:** Verify image paths and remotePatterns in `next.config.js`

**Issue:** API routes not working
**Solution:** Ensure API routes are compatible with edge runtime

### Debug Commands

```bash
# Check build output
ls -la .open-next/

# Test local deployment
npm run opennext:dev

# Check wrangler configuration
npx wrangler pages project list
```

## Best Practices

### Development Workflow

1. **Always test locally** before pushing to main
2. **Use feature branches** for development
3. **Run linting** before committing: `npm run lint`
4. **Test the build process** locally: `npm run preview`

### Deployment Best Practices

1. **Monitor GitHub Actions** for deployment status
2. **Use semantic commit messages** for clear deployment history
3. **Keep dependencies updated** regularly
4. **Test in preview environments** before production

### Performance Optimization

1. **Use Next.js Image component** for automatic optimization
2. **Implement proper caching** strategies
3. **Monitor Core Web Vitals** in production
4. **Optimize bundle size** regularly

## Migration Notes

This configuration represents an optimized deployment setup that:

- **Removes conflicting adapters** (previously had both OpenNext and next-on-pages)
- **Adds automated CI/CD** (previously manual deployment only)
- **Updates compatibility settings** (current compatibility date)
- **Streamlines build process** (simplified scripts and configuration)

The previous configuration mixed deployment adapters which caused conflicts. This optimized setup uses a pure OpenNext approach for reliable deployments.

---

For additional support, refer to:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [OpenNext Documentation](https://open-next.js.org/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
