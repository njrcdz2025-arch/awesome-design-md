/* =========================================================================
   Antigravity · Live telemetry JS  (CET + Beijing clocks, Rolling Counter,
   Drift stats, Sticky-rail scroll spy)
   Loaded on every page; safely no-ops if the target IDs don't exist.
   ========================================================================= */

(function () {
  'use strict';

  const pad = (n) => n.toString().padStart(2, '0');

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // -------- Live clocks (CET / Beijing) --------
  // CET  ≈ UTC+1  (Antigravity is a global cinematic aerial brand — CET as HQ time)
  // CST  = UTC+8  (Beijing — Insta360 parent office)
  function tickClock() {
    const now = new Date();

    const cet = new Date(now.getTime() + 1 * 3600 * 1000);
    const cH = pad(cet.getUTCHours());
    const cM = pad(cet.getUTCMinutes());
    const cS = pad(cet.getUTCSeconds());
    const cY = cet.getUTCFullYear();
    const cMo = pad(cet.getUTCMonth() + 1);
    const cD = pad(cet.getUTCDate());
    const cetClock = `${cH}:${cM}:${cS}`;
    const cetDate  = `${cY}.${cMo}.${cD}`;

    const bj = new Date(now.getTime() + 8 * 3600 * 1000);
    const bH = pad(bj.getUTCHours());
    const bM = pad(bj.getUTCMinutes());
    const bS = pad(bj.getUTCSeconds());
    const bjClock = `${bH}:${bM}:${bS}`;

    setText('nav-clock',           `${cetClock} CET`);
    setText('hero-clock-cet',      cetClock);
    setText('hero-clock-beijing',  bjClock);
    setText('hero-date',           cetDate);
    setText('footer-clock',        `${cetClock} CET · ${bjClock} BJT · ${cetDate}`);
  }
  tickClock();
  setInterval(tickClock, 1000);

  // -------- Rolling total-hours counter (hero) --------
  // Seed: 128,432 hours of aerial footage captured by A1 pilots worldwide.
  // Increments +1 every 3s to feel like a live global odometer.
  let hours = 128432;
  function tickCounter() {
    hours += 1;
    setText('hero-counter', hours.toLocaleString('en-US'));
  }
  setText('hero-counter', hours.toLocaleString('en-US'));
  setInterval(tickCounter, 3000);

  // -------- Small drifting telemetry stats (hero panel & contact) --------
  function drift(id, base, spread, everyMs) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = base.toLocaleString('en-US');
    setInterval(() => {
      const v = base + Math.floor(Math.random() * spread) - Math.floor(spread / 2);
      el.textContent = v.toLocaleString('en-US');
    }, everyMs || 4000);
  }
  drift('stat-airborne', 384, 22, 4000);   // A1s currently airborne worldwide
  drift('stat-altitude', 612, 40, 5000);   // Average current altitude, m

  // Monotonic growers (only ever go up)
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
  grow('stat-flights',  20418,   2, 3500);   // Cumulative flights today
  grow('stat-clips',    73921,   3, 4500);   // Clips uploaded today

  // -------- Sticky rail auto-active on scroll --------
  const railItems = document.querySelectorAll('[data-rail-target]');
  if (railItems.length) {
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
    });
  }
})();
