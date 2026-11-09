# Website

Astro builds every page, compiles SCSS, and copies static assets from `public/`.

```bash
npm ci
npm run dev
```

Open `http://localhost:4321/blog/`. Existing pages remain at `/`, `/projects.html`, and `/resume.html`.

## Editing the website

| What | Where |
| --- | --- |
| Home page | `src/pages/index.astro` |
| Projects | `src/pages/projects.astro` |
| Resume | `src/pages/resume.astro` |
| Site-wide navigation | `src/components/Header.astro` |
| Shared HTML shell, fonts, and metadata | `src/layouts/SiteLayout.astro` |
| Blog layout and styling | `src/layouts/BlogLayout.astro` |
| Shared and page-specific styles | `src/styles/` |
| Images and other unchanged assets | `public/` |

Astro compiles imported styles automatically; edit SCSS sources rather than generated CSS.
The `preserve` build format keeps existing `.html` page URLs and directory-style blog URLs.

## Writing posts

Add a `.md` or `.mdx` file under `src/content/blog/`:

```yaml
---
title: "Post title"
description: "A short summary."
date: 2026-11-08
draft: true
---
```

The filename determines the URL: `my-post.mdx` becomes `/blog/my-post/`.
Set `draft: false` or omit it to publish. Drafts are excluded from both the listing and generated pages.

MDX posts can import Astro components from `src/components/`. See `interactive-diagrams.mdx` and `InteractiveVector.astro` for a working JavaScript/SVG example. Only trusted authors should supply executable components.

## Deployment

```bash
npm run check
npm run build
npm test
npm run preview
```

Pushing to `master` triggers the Azure workflow. It installs locked dependencies, checks, builds, and tests the site, then uploads `dist/` without running Oryx a second time.
Do not edit generated files in `dist/`.
