// Shared site chrome + i18n + tweaks

(function () {
  const PAGES = [
    { href: 'index.html', labelKey: 'nav.home', key: 'home' },
    { href: 'product.html', labelKey: 'nav.product', key: 'product' },
    { href: 'for-breed-clubs.html', labelKey: 'nav.clubs', key: 'clubs' },
    { href: 'blog.html', labelKey: 'nav.blog', key: 'blog' },
    { href: 'about.html', labelKey: 'nav.about', key: 'about' },
  ];

  // ---------- I18N ----------
  function getLang() {
    return localStorage.getItem('dogmetrics_lang') || document.documentElement.lang || 'en';
  }
  function setLang(lang) {
    localStorage.setItem('dogmetrics_lang', lang);
    document.documentElement.lang = lang;
    applyI18n();
    // re-render nav + footer to update labels
    renderNav();
    renderFooter();
  }
  function t(key) {
    const lang = getLang();
    const dict = (window.I18N && window.I18N[lang]) || {};
    return dict[key] != null ? dict[key] : key;
  }
  function applyI18n() {
    // Text content (allows HTML)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = t(key);
    });
    // Attributes: data-i18n-attr="placeholder:some.key,title:another.key"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    // Title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = t(titleEl.getAttribute('data-i18n'));
  }

  function renderNav() {
    const host = document.querySelector('[data-site-nav]');
    if (!host) return;
    const active = host.getAttribute('data-active') || '';
    const lang = getLang();
    host.innerHTML = `
      <nav class="nav" aria-label="Primary">
        <div class="nav-inner">
          <a class="logo" href="index.html" aria-label="DogMetrics home">
            <span class="logo-mark"><img src="assets/dogmetrics-mark.png" alt=""></span>
            <span class="logo-word">Dog<em>Metrics</em></span>
          </a>
          <ul class="nav-links" role="list">
            ${PAGES.map(p => `<li><a href="${p.href}" class="${p.key === active ? 'is-active' : ''}">${t(p.labelKey)}</a></li>`).join('')}
          </ul>
          <div class="nav-cta">
            <div class="lang-toggle" role="group" aria-label="Language">
              <button class="${lang==='sv'?'is-active':''}" data-lang="sv">SV</button>
              <button class="${lang==='en'?'is-active':''}" data-lang="en">EN</button>
            </div>
            <a class="btn btn-ghost nav-live" href="https://insight.vorsteh.se/" target="_blank" rel="noopener">${t('nav.live')}</a>
            <a class="btn btn-primary" href="index.html#contact">${t('nav.demo')}</a>
          </div>
        </div>
      </nav>
    `;
    host.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });
  }

  function renderFooter() {
    const host = document.querySelector('[data-site-footer]');
    if (!host) return;
    const year = new Date().getFullYear();
    host.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="logo" href="index.html" aria-label="DogMetrics home" style="margin-bottom:18px">
                <span class="logo-mark"><img src="assets/dogmetrics-mark.png" alt=""></span>
                <span class="logo-word">Dog<em>Metrics</em></span>
              </a>
              <p style="max-width: 34ch; color: var(--ink-soft); font-size: 14px; margin: 14px 0 0;">
                ${t('footer.tagline')}
              </p>
            </div>
            <div>
              <h4>${t('footer.product')}</h4>
              <ul>
                <li><a href="product.html">${t('footer.insight')}</a></li>
                <li><a href="product.html#features">${t('footer.features')}</a></li>
                <li><a href="https://insight.vorsteh.se/" target="_blank" rel="noopener">${t('footer.livelink')}</a></li>
              </ul>
            </div>
            <div>
              <h4>${t('footer.customers')}</h4>
              <ul>
                <li><a href="for-breed-clubs.html">${t('footer.for_clubs')}</a></li>
                <li><a href="for-breed-clubs.html#svk">${t('footer.svk_case')}</a></li>
                <li><a href="blog.html">${t('footer.journal')}</a></li>
              </ul>
            </div>
            <div>
              <h4>${t('footer.company')}</h4>
              <ul>
                <li><a href="about.html">${t('footer.about')}</a></li>
                <li><a href="about.html#team">${t('footer.team')}</a></li>
                <li><a href="mailto:hello@dogmetrics.se">hello@dogmetrics.se</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-meta">
            <span>${t('footer.meta_left').replace('{year}', year)}</span>
            <span>${t('footer.meta_right')}</span>
          </div>
        </div>
      </footer>
    `;
  }

  // ---------- TWEAKS ----------
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "rust",
    "mode": "light",
    "displayFont": "Instrument Serif",
    "bodyFont": "Inter"
  }/*EDITMODE-END*/;

  function loadTweaks() {
    try { return { ...TWEAK_DEFAULTS, ...JSON.parse(localStorage.getItem('dogmetrics_tweaks') || '{}') }; }
    catch { return { ...TWEAK_DEFAULTS }; }
  }
  function saveTweaks(t) {
    localStorage.setItem('dogmetrics_tweaks', JSON.stringify(t));
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: t }, '*'); } catch {}
  }

  const PALETTES = {
    rust:   { '--rust': '#8C3A1F', '--rust-deep': '#6B2B15', '--rust-soft': '#B05636', '--tan': '#D9C3A0', '--tan-soft': '#E8D7B8', '--tan-pale': '#F0E4CC' },
    forest: { '--rust': '#3D5A3D', '--rust-deep': '#2A422A', '--rust-soft': '#5A7A5A', '--tan': '#C9D4B5', '--tan-soft': '#DDE5CC', '--tan-pale': '#EDF1E3' },
    indigo: { '--rust': '#2D3D5E', '--rust-deep': '#1E2B47', '--rust-soft': '#4A5D82', '--tan': '#C5CCDB', '--tan-soft': '#DADFE8', '--tan-pale': '#EBEEF3' },
    clay:   { '--rust': '#A34A2B', '--rust-deep': '#7D3520', '--rust-soft': '#C36A4D', '--tan': '#E6CDAA', '--tan-soft': '#F0DEC4', '--tan-pale': '#F7EBD8' },
  };

  function applyTweaks(t) {
    const root = document.documentElement;
    const p = PALETTES[t.palette] || PALETTES.rust;
    Object.entries(p).forEach(([k, v]) => root.style.setProperty(k, v));
    root.setAttribute('data-theme', t.mode === 'dark' ? 'dark' : 'light');
    root.style.setProperty('--font-display', `'${t.displayFont}', serif`);
    root.style.setProperty('--font-body', `'${t.bodyFont}', sans-serif`);
  }

  function renderTweaks() {
    let host = document.querySelector('[data-tweaks]');
    if (!host) { host = document.createElement('div'); host.setAttribute('data-tweaks', ''); document.body.appendChild(host); }
    const tw = loadTweaks();
    applyTweaks(tw);
    host.innerHTML = `
      <aside class="tweaks" id="tweaksPanel">
        <h4>Tweaks <button id="tweaksClose" style="color:var(--stone);background:none;border:none;cursor:pointer;font-size:16px;line-height:1;">×</button></h4>
        <div class="row">
          <span>Palette</span>
          <div class="swatches">
            ${Object.keys(PALETTES).map(k => `<button class="swatch ${tw.palette===k?'is-active':''}" data-palette="${k}" style="background:${PALETTES[k]['--rust']}" aria-label="${k}"></button>`).join('')}
          </div>
        </div>
        <div class="row">
          <span>Mode</span>
          <select id="modeSel">
            <option value="light" ${tw.mode==='light'?'selected':''}>Light</option>
            <option value="dark" ${tw.mode==='dark'?'selected':''}>Dark</option>
          </select>
        </div>
        <div class="row">
          <span>Display font</span>
          <select id="displaySel">
            <option ${tw.displayFont==='Instrument Serif'?'selected':''}>Instrument Serif</option>
            <option ${tw.displayFont==='Fraunces'?'selected':''}>Fraunces</option>
            <option ${tw.displayFont==='Cormorant Garamond'?'selected':''}>Cormorant Garamond</option>
            <option ${tw.displayFont==='Playfair Display'?'selected':''}>Playfair Display</option>
          </select>
        </div>
        <div class="row">
          <span>Body font</span>
          <select id="bodySel">
            <option ${tw.bodyFont==='Inter'?'selected':''}>Inter</option>
            <option ${tw.bodyFont==='IBM Plex Sans'?'selected':''}>IBM Plex Sans</option>
            <option ${tw.bodyFont==='Work Sans'?'selected':''}>Work Sans</option>
          </select>
        </div>
      </aside>
    `;
    host.querySelectorAll('[data-palette]').forEach(btn => {
      btn.addEventListener('click', () => { const n={...loadTweaks(),palette:btn.getAttribute('data-palette')}; saveTweaks(n); applyTweaks(n); renderTweaks(); });
    });
    document.getElementById('modeSel').addEventListener('change', (e) => { const n={...loadTweaks(),mode:e.target.value}; saveTweaks(n); applyTweaks(n); });
    document.getElementById('displaySel').addEventListener('change', (e) => { const n={...loadTweaks(),displayFont:e.target.value}; saveTweaks(n); applyTweaks(n); });
    document.getElementById('bodySel').addEventListener('change', (e) => { const n={...loadTweaks(),bodyFont:e.target.value}; saveTweaks(n); applyTweaks(n); });
    document.getElementById('tweaksClose').addEventListener('click', () => { document.getElementById('tweaksPanel').classList.remove('is-open'); });
  }

  window.addEventListener('message', (e) => {
    const d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.type === '__activate_edit_mode') document.getElementById('tweaksPanel')?.classList.add('is-open');
    else if (d.type === '__deactivate_edit_mode') document.getElementById('tweaksPanel')?.classList.remove('is-open');
  });

  function init() {
    document.documentElement.lang = getLang();
    renderNav();
    renderFooter();
    applyI18n();
    renderTweaks();
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
