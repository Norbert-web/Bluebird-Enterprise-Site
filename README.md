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
