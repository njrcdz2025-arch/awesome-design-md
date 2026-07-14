/* =========================================================================
   Skydio · Live telemetry JS (Live Clock, Rolling Counter, Drift stats)
   Loaded on every page; safely no-ops if the target IDs don't exist.
   ========================================================================= */

(function () {
  'use strict';

  const pad = (n) => n.toString().padStart(2, '0');

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // -------- Live clock (UTC + PDT) --------
  function tickClock() {
    const now = new Date();

    // UTC
    const uH = pad(now.getUTCHours());
    const uM = pad(now.getUTCMinutes());
    const uS = pad(now.getUTCSeconds());
    const uY = now.getUTCFullYear();
    const uMo = pad(now.getUTCMonth() + 1);
    const uD = pad(now.getUTCDate());
    const utcClock = `${uH}:${uM}:${uS}`;
    const utcDate  = `${uY}.${uMo}.${uD}`;

    // PDT (approximate: UTC-7). Skydio HQ is San Mateo, CA.
    const pdt = new Date(now.getTime() - 7 * 3600 * 1000);
    const pH = pad(pdt.getUTCHours());
    const pM = pad(pdt.getUTCMinutes());
    const pS = pad(pdt.getUTCSeconds());
    const pdtClock = `${pH}:${pM}:${pS}`;

    setText('nav-clock',     `${utcClock} UTC`);
    setText('hero-clock',    utcClock);
    setText('hero-date',     utcDate);
    setText('hero-clock-pdt', pdtClock);
    setText('footer-clock',  `${utcClock} UTC · ${utcDate}`);
  }
  tickClock();
  setInterval(tickClock, 1000);

  // -------- Rolling total-flights counter (hero) --------
  // Seed from raw data; increments ~1 per 2s to feel live.
  let flights = 4779138;
  function tickCounter() {
    flights += Math.floor(1 + Math.random() * 2);
    setText('hero-counter', flights.toLocaleString('en-US'));
  }
  setText('hero-counter', flights.toLocaleString('en-US'));
  setInterval(tickCounter, 2000);

  // -------- Small drifting telemetry stats (contact page & elsewhere) --------
  function drift(id, base, spread, everyMs) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = base.toLocaleString('en-US');
    setInterval(() => {
      const v = base + Math.floor(Math.random() * spread) - Math.floor(spread / 2);
      el.textContent = v.toLocaleString('en-US');
    }, everyMs || 4000);
  }
  drift('stat-airborne', 217, 12, 4000);
  drift('stat-docks',    344,  6, 5000);

  // Monotonic growers
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
  grow('stat-missions', 8142,   3, 3000);
  grow('stat-hours',    412306, 2, 4000);

  // -------- Sticky rail auto-active on scroll (index/products) --------
  const railItems = document.querySelectorAll('[data-rail-target]');
  if (railItems.length) {
    const observers = [];
    railItems.forEach((item) => {
      const targetId = item.getAttribute('data-rail-target');
      const target = document.getElementById(targetId);
      if (!target) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            railItems.forEach((i) => i.classList.remove('active'));
            item.classList.add('active');
          }
        });
      }, { rootMargin: '-40% 0px -50% 0px' });
      io.observe(target);
      observers.push(io);
    });
  }
})();
