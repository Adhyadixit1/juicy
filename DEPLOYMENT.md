# Deployment Guide

This guide provides instructions for deploying the application to Vercel with proper 3D model support.

## Prerequisites

- Node.js 18+ and npm 8+
- Vercel CLI (optional)
- Vercel account

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory.

## Vercel Deployment

### Automatic Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import your repository into Vercel.
3. Vercel will automatically detect it's a Next.js app and configure the build settings.

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

## Important Notes

- The application is configured for static export with `output: 'export'` in `next.config.js`.
- 3D models should be placed in the `public/assets/3d/` directory.
- The build process will automatically copy static assets to the output directory.

## Troubleshooting

### 3D Models Not Loading

1. Ensure the model files (.glb/.gltf) are in the `public/assets/3d/` directory.
2. Check the browser's network tab for 404 errors when loading models.
3. Verify the file paths in your code match the actual file locations.

### Build Failures

1. Clear the `.next` and `out` directories:
   ```bash
   rm -rf .next out
   ```
2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
3. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Environment Variables

Create a `.env.local` file for local development with the following variables:

```
NEXT_PUBLIC_BASE_PATH=
NODE_ENV=development
```

For production, set these variables in your Vercel project settings.
