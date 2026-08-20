# Bluebird Enterprise — Company Website

Static, dependency-free multi-page site for **Bluebird Enterprise**, an IT,
creative, and computer services company in Uganda — plus a full, dedicated
site for its flagship open-source product, **Bluebird OS**. Built for GitHub
Pages, no build step required.

## Structure

```
/
├── index.html                 Home
├── about.html                 Company story, values, workflow
├── services.html              Full service menu, pricing, packages
├── products.html              All 16 projects, public repos, Bluebird OS summary
├── team.html                  Management board / org chart
├── contact.html                Contact info, intake process, community links
├── CNAME                      Custom domain: bluebirduganda.dpdns.org
├── assets/
│   ├── css/styles.css         Company theme ("the work order" — ticket/ledger design)
│   └── img/
│       ├── favicon.svg        Company favicon
│       └── team/               Drop team headshots here (e.g. norbert.jpg)
│
└── bluebird-os/                The dedicated Bluebird OS product site
    ├── index.html               Full single-page app: home, releases, apps,
    │                            docs, community, downloads, about, privacy,
    │                            terms, MIT license — all ten original sections
    └── assets/
        ├── css/styles.css      Bluebird OS's own theme (Uganda flag colors,
        │                        Syne/Manrope/DM Mono fonts, light + dark mode)
        ├── js/app.js           Page router, theme toggle, download links,
        │                        lightbox, copy-to-clipboard
        └── img/
            ├── favicon.svg     Bluebird OS's own gradient bird-mark icon
            └── screenshots/    Drop the 5 product screenshots here:
                                 desktop.png, startmenu.png, explorer.png,
                                 editor.png, settings.png
```

## One shared theme

Bluebird Enterprise now shares Bluebird OS's visual system: soft radial
glow backgrounds, glass/blur cards, gradient pill buttons, Syne + Manrope +
DM Mono type, and a working light/dark toggle. The company site keeps its
own signature — the ticket/ledger "work order" vocabulary (job tickets,
duty rosters, ledger pricing tables) — but restyled with the same glow,
glass, and gradient language as the product site, plus a shared Uganda
flag–stripe accent. A slim bar at the top of every Bluebird OS page ("←
Bluebird Enterprise") and a matching footer column still link the two
together.

## SEO

Every page has a unique title, meta description, canonical URL, Open
Graph + Twitter Card tags, and JSON-LD structured data (ProfessionalService
on the homepage, SoftwareApplication on the Bluebird OS page, breadcrumbs
elsewhere). `robots.txt` and `sitemap.xml` sit at the repo root.

## Images — what's real vs. placeholder

Placeholder images are already in place at the exact paths below so the
site never shows a broken image. Drop a real file in with the **same
filename** to replace a placeholder — no code changes needed.

| Path | Status | Needed |
|---|---|---|
| `assets/img/logo.svg` | placeholder | Real Bluebird Enterprise logo (SVG preferred; PNG works, just tell me and I'll repoint the reference) |
| `assets/img/og-cover.png` | placeholder | Social-share cover image, 1200×630 |
| `assets/img/team/norbert.jpg` | placeholder | Photo of Lamn Nobert / Norbert (used on both the Team page and the Bluebird OS About page) |
| `assets/img/team/atilio-okwera.jpg` | placeholder | Photo of Atilio Okwera |
| `assets/img/team/alimo-doreen.jpg` | placeholder | Photo of Alimo Doreen |
| `assets/img/team/kidega-joseph.jpg` | placeholder | Photo of Kidega Joseph |
| `assets/img/team/hamaro-fortunate.jpg` | placeholder | Photo of Hamaro Fortunate |
| `assets/img/team/paska-lanyero.jpg` | placeholder | Photo of Paska Lanyero |
| `bluebird-os/assets/img/screenshots/desktop.png` | placeholder | Desktop mode screenshot, 720×1280 |
| `bluebird-os/assets/img/screenshots/startmenu.png` | placeholder | Start menu screenshot, 720×1280 |
| `bluebird-os/assets/img/screenshots/explorer.png` | placeholder | File explorer screenshot, 720×1280 |
| `bluebird-os/assets/img/screenshots/editor.png` | placeholder | Text editor screenshot, 1280×720 |
| `bluebird-os/assets/img/screenshots/settings.png` | placeholder | Settings screenshot, 1280×720 |
| `bluebird-os/assets/img/logo.svg` | not used yet | Bluebird OS already has its own crafted inline SVG bird-mark in its nav/footer — send the real Bluebird OS logo file if you'd like it swapped in |

## What was merged in

Everything from the original single-file Bluebird OS site now lives at
`/bluebird-os/index.html`, split into proper `assets/css` and `assets/js`
files instead of one giant inline `<style>`/`<script>` block:

- All 10 sections: Home, Releases (full v1.0–v1.9 changelog), Apps
  (official suite + community apps), Docs, Community, Downloads, About
  (the Bluebird OS origin story and creator bio), Privacy Policy, Terms of
  Use, and the full MIT License text.
- Every social/community link, preserved exactly: GitHub
  (`Norbert-web/BLUEBIRD-PLUS`), Reddit, TikTok, YouTube, X/Twitter,
  Telegram, Discord.
- The MIT license text and copyright line
  (`© 2024–2026 Norbert (LAMN-NOBERT), Uganda`), unchanged.
- All per-version download links and the `.bwa` app download links.

Those same real community links (GitHub, Telegram, Discord, Reddit,
YouTube, X, TikTok) now also appear on the main site's `contact.html`,
replacing the old "coming soon" placeholders — plus a link straight to
the Bluebird OS site itself.

`products.html` and the homepage both now link directly to
`bluebird-os/index.html` as the deep-dive destination for the flagship
product, alongside the existing 16-project portfolio summary.

## Deploying

1. Push this folder to the root of your GitHub repo's default branch (or `gh-pages`).
2. In **Settings → Pages**, set the source to that branch, root folder.
3. The `CNAME` file keeps the existing custom domain (`bluebirduganda.dpdns.org`)
   — make sure your DNS still points at GitHub Pages. Both the company
   site and `/bluebird-os/` are served from this one domain.

## To finish before launch

- [ ] Add the 5 Bluebird OS screenshots to `bluebird-os/assets/img/screenshots/`
      (`desktop.png`, `startmenu.png`, `explorer.png`, `editor.png`, `settings.png`)
- [ ] Add Norbert's headshot to `assets/img/team/norbert.jpg` (used on the
      Bluebird OS "About" page; falls back to an initial avatar if missing)
- [ ] Replace the placeholder company email / WhatsApp number on `contact.html`
- [ ] Swap in your real company logo file if you have one — the header
      currently uses a stamped "BE" mark as part of the ticket design
- [ ] Firm up the generic `https://t.me` and `https://discord.com`
      community links in `bluebird-os/index.html` and `contact.html` with
      your actual invite links once those channels exist
- [ ] Add individual contact details to `team.html` once available
      (currently role-based only, by design)

## Editing

No build tooling — every page is plain HTML with a shared stylesheet per
site (`/assets/css/styles.css` for the company pages,
`/bluebird-os/assets/css/styles.css` for the product site). To change
something on every company page (nav, footer), update each `.html` file's
header/footer block, or convert to includes with a static site generator
later if the page count grows further. `bluebird-os/index.html` is a
single-page app — its ten sections are `<div class="page" id="page-...">`
blocks shown/hidden by `bluebird-os/assets/js/app.js`, matching the
original site's behavior exactly.
