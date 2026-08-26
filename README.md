# Bluebird Enterprise — Official Company Website

This repository holds the official Bluebird Enterprise company website. The site is live and serves as the public presence for Bluebird Enterprise — an IT, creative, and computer services company based in Uganda. Everything in this repo is the real, published site content (not placeholders): company story, services and pricing, product portfolio, team bios, contact methods, and the dedicated Bluebird OS product site.

Live site: https://bluebirduganda.dpdns.org (served from this repository via GitHub Pages)

License: MIT — the repository is free to reuse or adapt, but its primary purpose and source of truth is Bluebird Enterprise's public website.

## What this repo contains

- Full, multi-page company website: index.html, about.html, services.html, products.html, team.html, contact.html.
- Dedicated product site for our flagship open-source product at /bluebird-os/ (single-page app with releases, docs, downloads, community links).
- Styling, images, and small client-side JavaScript kept intentionally minimal to allow direct edits and fast loading.
- SEO and social metadata (unique page titles, meta descriptions, Open Graph/Twitter tags, JSON-LD structured data).
- CNAME file for the custom domain used in production.

## Key points — official site, no placeholders

- The content stored here is the live company content. Image files, logos, team photos, product screenshots, and text are the actual assets used on the public site.
- If you fork or reuse this project as a template, be aware the canonical intent of this repository is to serve Bluebird Enterprise’s official website. When reusing, change branding, contact details, and domain/CNAME entries as appropriate.
- For contributors: treat edits here as updates to the live public site. Small fixes (typos, image replacements, minor content changes) can be made via direct commits or pull requests; larger structural changes should be coordinated with the site maintainer.

## Structure (high level)
/
├── index.html                 Home (official company homepage)
├── about.html                 Company story, mission, values
├── services.html              Services, packages, pricing
├── products.html              Portfolio summary and links to product pages
├── team.html                  Team bios and roles
├── contact.html               Official contact info and community links
├── CNAME                      Production domain: bluebirduganda.dpdns.org
├── assets/
│   ├── css/styles.css         Site styles and responsive layout
│   └── img/                   Logos, photos, and product screenshots
└── bluebird-os/               Official Bluebird OS product site and assets

## Deployment / publishing notes

- The site is published via GitHub Pages from this repository. To update the live site, push to the repository’s publishing branch (the current live branch).
- The CNAME file at the repo root points the domain to the Pages site — do not remove or change it unless you intend to change the public domain.
- This repo can also be hosted on any static host (Netlify, Vercel, S3, etc.) if you intend to migrate.

## Editing and maintenance

- The site is static HTML/CSS/JS without a build step. Edit HTML files directly for content changes, and assets/css/styles.css for visual updates.
- Bluebird OS’s product site is a small client-side single-page app in /bluebird-os/ — its sections are managed by bluebird-os/assets/js/app.js.
- For site-wide header/footer changes, update the header/footer blocks in each HTML file (or propose a templating approach if you want to introduce a build step).

## SEO, accessibility, and best practices

- Each page contains unique metadata for SEO and social sharing; update titles and meta descriptions when changing page content.
- Images include alt text appropriate to the site content. Preserve or improve alt text when replacing images.
- The site uses semantic HTML and responsive CSS for accessibility and mobile performance.

## Reuse guidance

- This repository is licensed under the MIT License and may be reused or adapted. If you reuse it as a template, update all branding, contact details, and the CNAME to avoid confusion with the official Bluebird Enterprise site.
- When redistributing, include the LICENSE file and keep attributions as required by the MIT license.

## Need changes or a commit?

- I updated this README text to reflect that this repo is the live Bluebird Enterprise website with real content (no placeholders) and that it remains reusable under MIT.
- If you’d like, I can commit this README to the repository, add or update a LICENSE file, or make any other edits (update contact info, change the live-site URL, or prepare a contributor guide). Tell me which action you want me to take next.
