# Portfolio

A brutalist-minimal, dark-themed personal portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion. 
Inspired by editorial and terminal aesthetics.

## Features

- **Next.js App Router** with TypeScript and strict mode.
- **Tailwind CSS v4** for utility-first styling and custom design tokens.
- **Framer Motion** for 60fps transform/opacity animations.
- **Lenis** for smooth scrolling.
- **Accessible & SEO-ready**: Semantic HTML, ARIA attributes, full keyboard navigation, and OpenGraph/Twitter meta tags.
- **Reduced Motion Support**: Disables custom cursor, animations, and smooth scroll for users who prefer reduced motion.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Edit Content

All content is decoupled from the components and lives in typed TypeScript files within the `src/content/` directory. You can edit the content without touching the UI components.

- `src/content/meta.ts`: Your personal information, social links, and technology stack.
- `src/content/projects.ts`: Your featured open-source releases or projects.
- `src/content/experience.ts`: Your career timeline and roles.
- `src/content/posts.ts`: Your engineering blog posts and liner notes.

### Updating Images
To add real images to the projects, place them in the `public/images/projects/` directory and update the `image` paths in `src/content/projects.ts`. You can then replace the gradient placeholder in `src/components/Projects.tsx` with Next.js `<Image />` components for optimized loading and blur placeholders.

## Architecture

- **`src/app/`**: Next.js App Router pages and global layout/CSS.
- **`src/components/`**: React UI components organized by section (Hero, Projects, Experience, etc.).
- **`src/content/`**: Typed data files for easy content management.
- **`src/hooks/`**: Custom React hooks (e.g., `useSmoothScroll`, `useCustomCursor`).
- **`src/lib/`**: Utility functions and shared Framer Motion animation variants.
