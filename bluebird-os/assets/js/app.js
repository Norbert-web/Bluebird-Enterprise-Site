(function(){

  /* ── Download links map ── */
  const DOWNLOAD_URLS = {
    'v1.7': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.7/Bluebird-v1.7.apk',
    'v1.6': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.6/Bluebird-v1.6.apk',
    'v1.5': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.5/Bluebird-v1.5.apk',
    'v1.4': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.4/Bluebird-v1.4.apk',
    'v1.3': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.3/Bluebird-v1.3.apk',
    'v1.2': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.2/Bluebird-v1.2.apk',
    'v1.1': 'https://github.com/Norbert-web/Bluebird/releases/download/V1.1/Bluebird-v1.1.apk',
    'v1.0': 'https://github.com/Norbert-web/Bluebird/releases/download/v1.0/Bluebird-v1.0.apk'
  };

  /* ── Toast notification ── */
  function showToast(msg) {
    let toast = document.getElementById('dl-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'dl-toast';
      toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(80px);background:#1a90ff;color:#fff;padding:12px 24px;border-radius:40px;font-family:var(--font-body);font-size:0.88rem;font-weight:600;box-shadow:0 8px 28px rgba(26,144,255,0.45);display:flex;align-items:center;gap:10px;z-index:9999;transition:transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);white-space:nowrap;pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' + msg;
    requestAnimationFrame(() => { toast.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(80px)'; }, 3500);
  }

  /* ── Generic download trigger ── */
  window.triggerDownload = function(version) {
    const url = DOWNLOAD_URLS[version];
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', 'Bluebird-' + version + '.apk');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Downloading Bluebird ' + version + '…');
  };

  /* ── Featured download button ── */
  window.startFeaturedDownload = function() {
    const btn = document.getElementById('downloadBtn');
    const text = document.getElementById('btnText');
    const icon = document.getElementById('btnIcon');
    if (!btn || btn.classList.contains('downloading')) return;
    btn.classList.add('downloading');
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>';
    text.textContent = 'Downloading…';
    triggerDownload('v1.6');
    setTimeout(() => {
      btn.classList.remove('downloading');
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
      text.textContent = 'v1.7 ARM64 (.apk)';
    }, 4000);
  };



  /* ── Lightbox ── */
  window.openLightbox = function(src, caption) {
    const overlay = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    img.src = src;
    img.alt = caption;
    cap.textContent = caption;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = function(e) {
    if (e.target === document.getElementById('lightbox') || e.target === document.querySelector('.lightbox-close')) {
      document.getElementById('lightbox').classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.getElementById('lightbox').classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* ── Copy to clipboard ── */
  window.copyCode = function(btn, preId) {
    const code = document.getElementById(preId).innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy';
      }, 2200);
    }).catch(() => {
      // fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
  };

  /* ── Dynamic tab title ── */
  const pageTitles = {
    home: 'Bluebird OS — Android Desktop Launcher · v1.7',
    releases: 'Bluebird OS — Releases',
    downloads: 'Bluebird OS — Downloads',
    apps: 'Bluebird OS — Apps',
    docs: 'Bluebird OS — Documentation',
    community: 'Bluebird OS — Community',
    about: 'Bluebird OS — About',
    privacy: 'Bluebird OS — Privacy Policy',
    terms: 'Bluebird OS — Terms of Use',
    license: 'Bluebird OS — MIT License',
  };
  const _origGo = window.go;
  window.go = function(page) {
    _origGo(page);
    if (pageTitles[page]) document.title = pageTitles[page];
  };

  /* ── Theme handling ── */
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('bb-theme', theme);
  }

  const saved = localStorage.getItem('bb-theme');
  applyTheme(saved || getSystemTheme());

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('bb-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    const cur = document.body.getAttribute('data-theme') || getSystemTheme();
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  /* ── Page navigation ── */
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-links a[data-page]');
  const ham = document.getElementById('ham');
  const navLinksEl = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const nav = document.getElementById('nav');

  function closeMobileNav() {
    navLinksEl.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function go(page) {
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(a => a.classList.remove('active'));

    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    navLinks.forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });

    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.pushState) history.pushState(null, null, '#' + page);
  }

  window.go = go;

  ham.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    navOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navOverlay.addEventListener('click', closeMobileNav);

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  function handleHash() {
    const hash = location.hash.replace('#', '');
    const valid = ['home','releases','apps','docs','community','downloads','about','privacy','terms','license'];
    if (valid.includes(hash)) go(hash); else go('home');
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();

  /* download button handled by startFeaturedDownload() above */
})();

// Bluebird Enterprise — cookie / analytics notice (shared with main site)
(function(){
  var KEY = 'be-notice-ack';
  if (localStorage.getItem(KEY)) return;

  var bar = document.createElement('div');
  bar.className = 'cookie-notice';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Cookie notice');
  bar.innerHTML =
    '<p>This site uses basic analytics to understand traffic. See our ' +
    '<a href="../privacy.html">Privacy Policy</a>.</p>' +
    '<button type="button" class="btn btn-outline btn-sm" id="cookie-ack">Got it</button>';
  document.body.appendChild(bar);

  document.getElementById('cookie-ack').addEventListener('click', function(){
    localStorage.setItem(KEY, '1');
    bar.remove();
  });
})();
