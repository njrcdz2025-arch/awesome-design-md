/* =========================================================================
   DJI Global · Live Runtime (Clock · Rolling Counter · Hero Carousel)
   Loaded on every page; safely no-ops if the target IDs don't exist.
   ========================================================================= */

(function () {
  'use strict';

  const pad = (n) => n.toString().padStart(2, '0');
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function setAll(sel, text) {
    document.querySelectorAll(sel).forEach((el) => { el.textContent = text; });
  }

  // ------------------------------------------------------------------------
  // 1) LIVE DUAL CLOCK · HK · Shenzhen (both UTC+8 — the "dual same-zone"
  //    is intentional: HK for the stock listing, Shenzhen for HQ; DJI
  //    lives in both cities.)
  // ------------------------------------------------------------------------
  function tickClock() {
    const now = new Date();
    // UTC+8 (both HK and Shenzhen)
    const t = new Date(now.getTime() + 8 * 3600 * 1000);
    const H = pad(t.getUTCHours());
    const M = pad(t.getUTCMinutes());
    const S = pad(t.getUTCSeconds());
    const Y = t.getUTCFullYear();
    const Mo = pad(t.getUTCMonth() + 1);
    const D = pad(t.getUTCDate());
    const hms = `${H}:${M}:${S}`;
    const ymd = `${Y}.${Mo}.${D}`;

    // Nav dual-city clock: "HK 12:34:56 · SZ 12:34:56"
    setText('nav-clock-hk', hms);
    setText('nav-clock-sz', hms);
    setText('nav-clock-ymd', ymd);

    // Hero clocks (index only)
    setText('hero-clock-hk', hms);
    setText('hero-clock-sz', hms);
    setText('hero-clock-date', ymd);

    // Footer clock (shared)
    setText('footer-clock', `HK ${hms} · SZ ${hms} · ${ymd}`);
  }
  tickClock();
  setInterval(tickClock, 1000);

  // ------------------------------------------------------------------------
  // 2) ROLLING COUNTER · devices in the sky worldwide
  //    Starts at 22,500,000+ and increments +1 every 2 seconds.
  //    Faster than Skydio (5s) and Antigravity (3s) — DJI is the volume leader.
  // ------------------------------------------------------------------------
  let deviceCount = 22500000;
  function tickCounter() {
    deviceCount += 1;
    const el = document.getElementById('device-counter');
    if (el) el.textContent = deviceCount.toLocaleString('en-US');
  }
  const initEl = document.getElementById('device-counter');
  if (initEl) initEl.textContent = deviceCount.toLocaleString('en-US');
  setInterval(tickCounter, 2000);

  // Cumulative "clips uploaded today" — always-growing side stat
  function grow(id, seed, stepMax, everyMs) {
    let v = seed;
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = v.toLocaleString('en-US');
    setInterval(() => {
      v += Math.floor(1 + Math.random() * stepMax);
      el.textContent = v.toLocaleString('en-US');
    }, everyMs || 3000);
  }
  grow('stat-uploads',      184921, 4, 3500);   // clips uploaded today (Skypixel)
  grow('stat-flights',       61340, 2, 4200);   // flights logged today
  grow('stat-pilots',        18244, 1, 5500);   // pilots newly registered

  // ------------------------------------------------------------------------
  // 3) HERO CAROUSEL (index page only)
  //    - Auto-advance every 6.5s
  //    - Pause on hover / keyboard focus (accessibility)
  //    - Dot pagination + "03 / 08" counter
  // ------------------------------------------------------------------------
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots   = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const counterEl = carousel.querySelector('.carousel-counter');
    const total = slides.length;
    let idx = 0;
    let timer = null;
    const INTERVAL_MS = 6500;

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i)   => d.classList.toggle('is-active', i === idx));
      if (counterEl) {
        counterEl.textContent = pad(idx + 1) + ' / ' + pad(total);
      }
    }
    function next() { idx = (idx + 1) % total; render(); }
    function jump(i) { idx = i; render(); }
    function start() {
      if (timer) return;
      timer = setInterval(next, INTERVAL_MS);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    // dot clicks
    dots.forEach((d, i) => {
      d.addEventListener('click', () => { jump(i); stop(); start(); });
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); jump(i); stop(); start(); }
      });
    });

    // hover pause
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin',    stop);
    carousel.addEventListener('focusout',   start);

    render();
    start();
  }

  // ------------------------------------------------------------------------
  // 4) PRODUCT-TAB STRIP · active-state on click (no page navigation)
  //    Cosmetic underline slide only — since categories are anchored to
  //    the same page grid, click swaps the visual active state.
  // ------------------------------------------------------------------------
  document.querySelectorAll('[data-tab-strip]').forEach((strip) => {
    const items = Array.from(strip.querySelectorAll('.tab-strip-item'));
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        items.forEach((i) => i.classList.remove('is-active'));
        item.classList.add('is-active');
      });
    });
  });

  // ------------------------------------------------------------------------
  // 5) SIMPLE FAQ ACCORDION (contact page)
  // ------------------------------------------------------------------------
  document.querySelectorAll('[data-faq]').forEach((item) => {
    const q = item.querySelector('.q');
    const a = item.querySelector('.a');
    if (!q || !a) return;
    a.style.display = 'block';
    q.addEventListener('click', () => {
      const shown = a.style.display !== 'none';
      a.style.display = shown ? 'none' : 'block';
      const chev = q.querySelector('[data-chev]');
      if (chev) chev.textContent = shown ? '+' : '−';
    });
  });

  // ------------------------------------------------------------------------
  // 6) SCROLLED NAV state (subtle bottom border darken past 80px)
  // ------------------------------------------------------------------------
  const nav = document.querySelector('.nav-shell');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 80) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
