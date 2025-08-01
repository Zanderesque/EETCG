# Cloudflare Deployment Guide

This document provides detailed information about deploying Next.js applications to Cloudflare, including the different approaches, configuration options, and troubleshooting tips.

## Table of Contents

1. [Deployment Approaches](#deployment-approaches)
2. [OpenNext Deployment](#opennext-deployment)
3. [Next-on-Pages Deployment](#next-on-pages-deployment)
4. [Configuration Files](#configuration-files)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Troubleshooting](#troubleshooting)
7. [Migration Between Approaches](#migration-between-approaches)

## Deployment Approaches

Cloudflare offers two main approaches for deploying Next.js applications:

### 1. OpenNext Approach

[OpenNext](https://github.com/serverless-stack/open-next) is an open-source adapter that optimizes Next.js applications for deployment on edge platforms like Cloudflare. This approach:

- Generates a standalone Next.js build optimized for edge environments
- Creates a structure compatible with Cloudflare Workers
- Supports most Next.js features including server components and API routes

### 2. Next-on-Pages Approach

[@cloudflare/next-on-pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) is Cloudflare's official adapter for Next.js applications. This approach:

- Is specifically designed for Cloudflare Pages
- Provides tight integration with Cloudflare's ecosystem
- Optimizes for Cloudflare's edge network

**Note:** It's important to choose ONE approach and stick with it. Mixing both can lead to deployment conflicts and errors.

## OpenNext Deployment

This project is currently configured to use the OpenNext approach.

### Build Process

The OpenNext build process involves:

1. Building the Next.js application
2. Transforming the output for edge compatibility
3. Creating a standalone directory structure

```bash
# Build command
npm run opennext:build  # Runs: next build && open-next build
```

This generates output in the `.open-next` directory with the following structure:
- `.open-next/standalone` - The deployable application
- `.open-next/assets` - Static assets
- `.open-next/worker.js` - The main worker script

### Deployment Process

Deployment to Cloudflare Pages involves:

```bash
# Deploy command
npm run opennext:deploy  # Runs: wrangler pages deploy .open-next/standalone
```

### Configuration

The OpenNext deployment is configured through:

1. **wrangler.toml**:
```toml
# wrangler.toml
name = 'eetcg'
main = ".open-next/worker.js"
compatibility_date = "2025-03-25"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".open-next/assets"
binding = "ASSETS"

[[r2_buckets]]
binding = "NEXT_INC_CACHE_R2_BUCKET"
bucket_name = "next-inc-cache"
```

## Next-on-Pages Deployment

The Next-on-Pages approach is an alternative deployment method.

### Build Process

```bash
# Build command
next build && npx @cloudflare/next-on-pages
```

This generates output in the `.vercel/output/static` directory.

### Deployment Process

```bash
# Deploy command
wrangler pages deploy .vercel/output/static
```

## Configuration Files

### wrangler.toml

This is the main configuration file for Cloudflare Workers:

```toml
# Key configuration options
name = 'eetcg'                         # Name of your worker
main = ".open-next/worker.js"          # Entry point for your worker
compatibility_date = "2025-03-25"      # Sets the Workers runtime compatibility date
compatibility_flags = ["nodejs_compat"] # Enables Node.js compatibility

[assets]
directory = ".open-next/assets"        # Directory containing static assets
binding = "ASSETS"                     # Name of the binding in your worker

[[r2_buckets]]                         # R2 bucket configuration for caching
binding = "NEXT_INC_CACHE_R2_BUCKET"
bucket_name = "next-inc-cache"
```

## CI/CD Pipeline

### GitHub Actions Integration

Cloudflare Pages automatically integrates with GitHub repositories. When code is pushed:

1. Cloudflare detects the changes
2. Triggers a build using the configured build command
3. Deploys the result if the build succeeds

### Important CI/CD Configuration

When configuring the CI/CD pipeline in Cloudflare Pages:

1. **Build Command**: Use `npm run opennext:build`
2. **Deploy Command**: Use `npm run opennext:deploy` or `wrangler pages deploy .open-next/standalone`
3. **Environment Variables**: Configure any required environment variables in the Cloudflare dashboard
4. **Node.js Version**: Ensure the build environment uses Node.js 18.x or higher (20.x recommended)

### Package Management

The CI/CD pipeline uses `npm` for package management. Important considerations:

- **npm ci vs npm install**: 
  - `npm ci` requires package.json and package-lock.json to be in perfect sync
  - `npm install` is more forgiving but may update dependencies
  - If using `npm ci`, ensure package-lock.json is always committed after any package.json changes

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Ensure all dependencies are correctly listed in package.json
   - Check for compatibility between Next.js version and deployment adapters
   - Verify that package-lock.json is in sync with package.json

2. **Font Loading Issues**:
   - Use Next.js built-in font system instead of CSS imports
   - Configure fonts in a dedicated file (e.g., app/services/fonts.js)
   - Apply font variables correctly in layout.tsx

3. **Deployment Configuration Errors**:
   - Verify wrangler.toml has the correct paths and configurations
   - Ensure build output directories match what's expected in the deployment commands
   - Check for typos in configuration files

4. **Mixed Deployment Approaches**:
   - Stick to either OpenNext OR Next-on-Pages, not both
   - Remove unused dependencies and scripts for the approach you're not using

### Debugging Steps

1. Build locally first to identify any issues:
   ```bash
   npm run opennext:build
   ```

2. Check the build output structure:
   ```bash
   ls -la .open-next/
   ```

3. Review Cloudflare build logs for specific errors

## Migration Between Approaches

If you need to migrate between deployment approaches, follow these steps:

### From OpenNext to Next-on-Pages

1. Install the required dependency:
   ```bash
   npm install --save-dev @cloudflare/next-on-pages
   ```

2. Update your build and deploy scripts in package.json:
   ```json
   "scripts": {
     "build": "next build",
     "pages:build": "npx @cloudflare/next-on-pages",
     "pages:deploy": "wrangler pages deploy .vercel/output/static"
   }
   ```

3. Update your CI/CD configuration to use the new commands

### From Next-on-Pages to OpenNext

1. Install the required dependency:
   ```bash
   npm install --save-dev open-next
   ```

2. Update your build and deploy scripts in package.json:
   ```json
   "scripts": {
     "opennext:build": "next build && open-next build",
     "opennext:deploy": "wrangler pages deploy .open-next/standalone"
   }
   ```

3. Update your CI/CD configuration to use the new commands

## Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [OpenNext GitHub Repository](https://github.com/serverless-stack/open-next)
- [Cloudflare Migration Guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)
