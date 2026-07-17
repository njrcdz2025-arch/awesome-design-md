/* =========================================================================
   iFlight · Live Runtime (Clock · Rolling Counter · Hero Carousel · Race Clock)
   Loaded on every page; safely no-ops if the target IDs don't exist.
   ========================================================================= */

(function () {
  'use strict';

  const pad = (n, w) => n.toString().padStart(w || 2, '0');
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // ------------------------------------------------------------------------
  // 1) LIVE DUAL CLOCK · Shenzhen (UTC+8) + Los Angeles (UTC-8, ignoring DST)
  //    Shenzhen = iFlight HQ. LA = North America's largest FPV community hub.
  // ------------------------------------------------------------------------
  function tickClock() {
    const now = new Date();
    // Shenzhen: UTC+8
    const tSZ = new Date(now.getTime() + 8 * 3600 * 1000);
    // Los Angeles: UTC-8 (PST, static)
    const tLA = new Date(now.getTime() - 8 * 3600 * 1000);

    const hmsSZ = pad(tSZ.getUTCHours()) + ':' + pad(tSZ.getUTCMinutes()) + ':' + pad(tSZ.getUTCSeconds());
    const hmsLA = pad(tLA.getUTCHours()) + ':' + pad(tLA.getUTCMinutes()) + ':' + pad(tLA.getUTCSeconds());
    const ymd  = tSZ.getUTCFullYear() + '.' + pad(tSZ.getUTCMonth() + 1) + '.' + pad(tSZ.getUTCDate());

    // Nav dual clock
    setText('nav-clock-sz', hmsSZ);
    setText('nav-clock-la', hmsLA);
    setText('nav-clock-ymd', ymd);

    // Hero clocks (index only)
    setText('hero-clock-sz', hmsSZ);
    setText('hero-clock-la', hmsLA);
    setText('hero-clock-date', ymd);

    // Footer clock (shared)
    setText('footer-clock', 'SZ ' + hmsSZ + '  ·  LA ' + hmsLA + '  ·  ' + ymd);
  }
  tickClock();
  setInterval(tickClock, 1000);

  // ------------------------------------------------------------------------
  // 2) ROLLING PILOT COUNTER · 850,000+ starting, +1 every 4s
  //    Sits between DJI (22.5M+ / 2s) and Antigravity (128K / 3s).
  //    Reflects mid-vertical FPV community scale, not consumer flagship.
  // ------------------------------------------------------------------------
  let pilotCount = 850000;
  function tickCounter() {
    pilotCount += 1;
    const el = document.getElementById('pilot-counter');
    if (el) el.textContent = pilotCount.toLocaleString('en-US');
  }
  const seedEl = document.getElementById('pilot-counter');
  if (seedEl) seedEl.textContent = pilotCount.toLocaleString('en-US');
  setInterval(tickCounter, 4000);

  // Additional grow stats
  function grow(id, seed, stepMax, everyMs) {
    let v = seed;
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = v.toLocaleString('en-US');
    setInterval(function () {
      v += Math.floor(1 + Math.random() * stepMax);
      el.textContent = v.toLocaleString('en-US');
    }, everyMs || 4200);
  }
  grow('stat-drones-shipped', 1240000, 3, 4600);   // drones shipped worldwide
  grow('stat-frames-cut',      480000,  2, 5000);   // 2Raw frames cut
  grow('stat-motors-wound',   3820000,  5, 4200);   // XING motors wound

  // ------------------------------------------------------------------------
  // 3) HERO CAROUSEL (index page only) — 6 slides × 6.5s auto-advance
  //    Hover / focus pauses cycle. Dot pagination + counter.
  // ------------------------------------------------------------------------
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots   = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const counterNow = carousel.querySelector('.carousel-counter .now');
    const counterTot = carousel.querySelector('.carousel-counter .tot');
    const total = slides.length;
    let idx = 0;
    let timer = null;
    const INTERVAL_MS = 6500;

    function render() {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i)   => d.classList.toggle('is-active', i === idx));
      if (counterNow) counterNow.textContent = pad(idx + 1);
      if (counterTot) counterTot.textContent = pad(total);
    }
    function next() { idx = (idx + 1) % total; render(); }
    function jump(i) { idx = i; render(); }
    function start() { if (!timer) timer = setInterval(next, INTERVAL_MS); }
    function stop()  { if (timer) { clearInterval(timer); timer = null; } }

    dots.forEach((d, i) => {
      d.addEventListener('click', () => { jump(i); stop(); start(); });
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); jump(i); stop(); start(); }
      });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin',    stop);
    carousel.addEventListener('focusout',   start);

    render();
    start();
  }

  // ------------------------------------------------------------------------
  // 4) SCROLLED NAV state (frosted-dark past 100px)
  // ------------------------------------------------------------------------
  const nav = document.querySelector('.nav-shell');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 100) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ------------------------------------------------------------------------
  // 5) RACE LAP CLOCK (racing.html only) — MM:SS.mmm rolling stopwatch
  //    Anchored to a start time and free-runs. Cycles roughly every 3 min.
  // ------------------------------------------------------------------------
  const raceClock = document.getElementById('race-clock');
  const raceClockMs = document.getElementById('race-clock-ms');
  if (raceClock && raceClockMs) {
    const START = Date.now();
    function tickRace() {
      let elapsed = (Date.now() - START) % (3 * 60 * 1000);   // 3-minute loop
      const m  = Math.floor(elapsed / 60000);
      const s  = Math.floor((elapsed % 60000) / 1000);
      const ms = Math.floor((elapsed % 1000));
      raceClock.textContent = pad(m) + ':' + pad(s);
      raceClockMs.textContent = '.' + pad(ms, 3);
    }
    tickRace();
    setInterval(tickRace, 47);   // ~21 Hz — feels live
  }

  // ------------------------------------------------------------------------
  // 6) SIMPLE FAQ ACCORDION
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
  // 7) CATEGORY TAG BAR — swap active state (cosmetic)
  // ------------------------------------------------------------------------
  document.querySelectorAll('[data-tag-bar]').forEach((bar) => {
    const items = Array.from(bar.querySelectorAll('.tag'));
    items.forEach((it) => {
      it.addEventListener('click', (e) => {
        e.preventDefault();
        items.forEach((i) => i.classList.remove('is-hot'));
        it.classList.add('is-hot');
      });
    });
  });
})();
