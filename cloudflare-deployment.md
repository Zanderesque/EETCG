# IT Connect - Cloudflare Deployment Documentation

## Overview

This document outlines the deployment process for the IT Connect website using Cloudflare Pages. The site is built with Next.js using static export configuration.

## Project Configuration

### Next.js Configuration

The project uses Next.js with static export configuration in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "*.eetcg.com"],
    },
  },
};

export default nextConfig;
```

### Cloudflare Pages Build Settings

| Setting | Value |
|---------|-------|
| Framework preset | Next.js |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 22.x (default) |

### R2 Bucket Configuration

For asset storage and caching, an R2 bucket is configured:

- **Bucket name**: `it-connect-next-cache`
- **R2 binding variable name**: `NEXT_INC_CACHE_R2_BUCKET`

This configuration is specified in `wrangler.toml`:

```toml
name = "it_connect"
main = ".open-next/worker.js"
compatibility_date = "2025-03-25"
compatibility_flags = ["nodejs_compat"]

[[r2_buckets]]
binding = "NEXT_INC_CACHE_R2_BUCKET"
bucket_name = "it-connect-next-cache"

[assets]
directory = ".open-next/assets"
binding = "ASSETS"
```

## Deployment Process

### Local Development

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Preview the static build locally:
   ```bash
   npm run build
   npm run serve
   ```

### Production Deployment

The site is automatically deployed when changes are pushed to the main branch of the GitHub repository.

1. Make changes to the codebase
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin main
   ```

3. Cloudflare Pages automatically:
   - Clones the repository
   - Installs dependencies
   - Builds the site using `npm run build`
   - Deploys the contents of the `out` directory

## Troubleshooting

### Common Issues

1. **Build failures due to dependency mismatches**:
   - Ensure package.json and package-lock.json are in sync
   - The following dependencies must be explicitly included:
     - @babel/core@7.28.0
     - @babel/helpers@7.28.2
     - convert-source-map@2.0.0
     - gensync@1.0.0-beta.2
     - json5@2.2.3

2. **Static export compatibility**:
   - Remember that `next start` doesn't work with static exports
   - Use `npx serve@latest out` to serve the site locally

### Monitoring and Logs

- Deployment logs are available in the Cloudflare Pages dashboard
- Monitor site performance through Cloudflare Analytics

## Maintenance

### Updating Dependencies

When updating dependencies:

1. Run `npm install` to update package-lock.json
2. Test locally before pushing changes
3. Consider using `npm ci` locally to test the exact installation process Cloudflare Pages will use

### Environment Variables

Any environment variables needed for the build process should be configured in the Cloudflare Pages dashboard under Settings > Environment variables.

## Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [R2 Storage Documentation](https://developers.cloudflare.com/r2/)
