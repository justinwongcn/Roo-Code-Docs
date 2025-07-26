# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Build & Development
- `npm start` - Start local development server with hot reload at http://localhost:3000
- `npm run build` - Build static production site to `/build` directory
- `npm run serve` - Serve production build locally

### Code Quality
- `npm run lint` - Lint TypeScript/JavaScript files in `/src`
- `npm run lint:fix` - Auto-fix linting issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint:unused` - Check for unused imports

### Documentation Management
- `npm run clear` - Clear Docusaurus cache (useful if seeing stale content)
- `npm run swizzle` - Customize Docusaurus components

## High-Level Architecture

This is a Docusaurus v3 documentation site for Roo Code, an AI-powered VS Code extension. The architecture follows these patterns:

### Content Structure
- **Documentation** lives in `/docs` with a hierarchical folder structure
- **Components** in `/src/components` provide custom React components used throughout the site
- **Theme customizations** in `/src/theme` override default Docusaurus components for custom behavior
- **Static assets** in `/static` (images, downloads, etc.)

### Key Configuration Files
- `docusaurus.config.ts` - Main site configuration including URLs, metadata, plugins, and theme settings
- `sidebars.ts` - Defines the documentation navigation structure
- `src/constants.ts` - Centralized URLs and links used across the site

### Documentation Organization
The `/docs` folder follows this structure:
- `getting-started/` - New user onboarding
- `basic-usage/` - Core features and concepts  
- `features/` - Detailed feature documentation
- `advanced-usage/` - Power user features and tools
- `providers/` - API provider configurations
- `community/` - Community contributions and resources
- `update-notes/` - Version release notes

### Custom Components
The site uses custom React components for:
- Social media icons and links
- Tutorial video grids
- Animated backgrounds
- GitHub installation buttons
- Custom navbar and footer implementations

### Search Implementation
Uses `@easyops-cn/docusaurus-search-local` for local search functionality with highlighting and explicit result paths.

### Analytics
Integrates PostHog analytics when `POSTHOG_API_KEY` environment variable is set.

### Redirects
Extensive redirect configuration handles moved documentation pages to maintain backwards compatibility with existing links.