/* ═══════════════════════════════════════════════════════
   روز دختر برای شێواز 🌸
   اگر خواستی چیزی رو عوض کنی، همه‌چیز توی CONFIG پایین همین فایله.
   ═══════════════════════════════════════════════════════ */

const CONFIG = {
  name: "شێواز",
  nameLatin: "shewaz",

  /* ─────── نامه (کردی سۆرانی) ─────── */
  letter: [
    "شێواز گیان،",
    "ئەمڕۆ ڕۆژی کچە و هەندێک شت لە دڵمدا بوو کە دەبوو پێتی بڵێم.",
    "تۆ لەو کەسانەی کە کاتێک لە تەنیشتیان دانیشتووی، دڵی مرۆڤ ئارام دەبێتەوە و لەبیری دەچێتەوە دنیا چەندە قەرەباڵغە.",
    "پێکەنینەکەت بۆ من وەک ڕووناکییە. نیگات ئومێدێک بە من دەبەخشێت کە هەموو بەیانییەک پێی بەئاگا دێمەوە.",
    "هەر جارێک کە ماندووم، لەبیرم دێتەوە کە کەسێک هەیە هەموو شتێک بۆ ئەو جوانە؛ تەنانەت ڕۆژە سەختەکانی منیش.",
    "بڕیار نییە ڕۆژی کچ بە بۆنەی ڕۆژێکی تایبەتەوە جەژن بگرین؛ تۆ خۆت ڕۆژی کچی، هەموو ڕۆژێک، هەتاهەتایە.",
    "هیوادارم هەمیشە دڵخۆش بیت، هەمیشە ساغ و سەلامەت بیت و هەر ئاواتێکت هەیە، ڕۆژێکی جوان بگاتە خوشبەختی.",
    "من قارەمانی هیچ شتێک نیم، بەڵام ئەم یەک لاپەڕەیەم بە دنیایەک خۆشەویستییەوە بۆ نووسیویت و هەر ئەمە خۆی شتێکە کە دڵم گەرم دەکاتەوە.",
    "خۆشم دەوێیت شێواز. زیاتر لەوەی کە بیری لێ دەکەیتەوە 💗"
  ],

  /* ─────── دلایل: [ایموجی، عنوان، دلیل] ─────── */
  reasons: [
    ["🌸", "چشم‌ها", "چشمات یه آرامشی دارن که هر کسی تو زندگیم نبوده."],
    ["☕", "صبح‌ها", "صبح کنار تو قشنگ‌ترین بخش روزه، حتی وقتی عجله دارم."],
    ["😂", "خنده", "خنده‌ات بلندترین آهنگیه که تا حالا شنیدم."],
    ["🫶", "دستات", "دستات گرمه؛ ناخناش مرتب و نازکه، درست مثل خودت."],
    ["💭", "حرفات", "هر شب قبل خواب، با صدای تو آروم می‌گیرم."],
    ["🌙", "شب‌ها", "شب کنار تو برام امن‌ترین جای دنیاست."],
    ["🎯", "باهوشی", "هوش تو یه چیز دیگه‌ست؛ هر بار حرف می‌زنی یه چیزی یادم می‌اندازی."],
    ["💛", "دل تو", "قلبت نرم‌ترین چیزیه که تا حالا دیدم."],
    ["✨", "حضورت", "فقط بودنت، همه‌چیز رو قشنگ‌تر می‌کنه."],
    ["🫂", "آغوشت", "آغوشت جاییه که همه خستگی‌هام تموم می‌شه."]
  ],

  /* ─────── پیام‌های نوار عشق ─────── */
  meterMessages: [
    "داری قلبم رو نگه می‌داری… نگه دار 💗",
    "بیشتر! من هنوز جا دارم 😌",
    "نصف راه… چه خوب پیش می‌ری 😍",
    "داره می‌رسه… عشق داره بالا می‌ره 🔥",
    "دوستت دارم شێواز 💖"
  ],
  goalReachedText: "۱۰۰٪! یعنی رسیدی به ته قلبم ❤️ گوشی‌تو بذار کنار، فقط یه بغل بذار 💕"
};

/* ═════════════════ ابزارها ═════════════════ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const fa = (n) => String(n).replace(/\d/g, (d) => FA_DIGITS[+d]);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);

/* ═════════════════ ۱) قلب‌های پس‌زمینه ═════════════════ */
(function backgroundHearts() {
  const cv = $("#bgCanvas");
  const ctx = cv.getContext("2d");
  let W, H, dpr, hearts = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeHeart(spread = false) {
    return {
      x: rand(0, W),
      y: spread ? rand(-H, H) : H + rand(10, 90),
      s: rand(7, 20),
      vy: rand(0.22, 0.85),
      vx: rand(-0.25, 0.25),
      a: rand(0.14, 0.42),
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.012, 0.012),
      hue: Math.random() < 0.25 ? "#ffd6e0" : "#ff5c93",
    };
  }

  function drawHeart(x, y, s, a, hue) {
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle = hue;
    ctx.beginPath();
    const t = s / 16;
    ctx.moveTo(x, y + 5 * t);
    ctx.bezierCurveTo(x, y, x - 5 * t, y, x - 5 * t, y + 5 * t);
    ctx.bezierCurveTo(x - 5 * t, y + 10 * t, x, y + 12.5 * t, x, y + 15 * t);
    ctx.bezierCurveTo(x, y + 12.5 * t, x + 5 * t, y + 10 * t, x + 5 * t, y + 5 * t);
    ctx.bezierCurveTo(x + 5 * t, y, x, y, x, y + 5 * t);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const h of hearts) {
      h.y -= h.vy; h.x += h.vx; h.rot += h.vr;
      if (h.y < -30) Object.assign(h, makeHeart());
      if (h.x < -40) h.x = W + 40;
      if (h.x > W + 40) h.x = -40;
      drawHeart(h.x, h.y, h.s, h.a, h.hue);
    }
    requestAnimationFrame(loop);
  }

  resize();
  const count = Math.round(clamp(W / 26, 22, 55));
  for (let i = 0; i < count; i++) hearts.push(makeHeart(true));
  window.addEventListener("resize", () => { resize(); hearts.forEach(() => hearts.push(makeHeart(true))); });
  loop();
})();

/* ═════════════════ ۲) نامه با افکت تایپ ═════════════════ */
(function letterTyping() {
  const out = $("#typedText");
  const caret = $("#caret");
  const text = CONFIG.letter.join("\n\n");
  let timer = null, pauseTimer = null, i = 0;

  // یک قدم تایپ؛ جدا از شروع تایپ، تا مکثِ بین بندها متن ریست نشود
  function tick() {
    if (i >= text.length) {
      clearInterval(timer);
      caret.classList.add("done");
      return;
    }

    i += 1;
    out.textContent = text.slice(0, i);

    // بعد از هر بند، یه مکث کوتاه تا خواندنی‌تر بشه
    if (text[i - 1] === "\n" && text[i] === "\n") {
      clearInterval(timer);
      pauseTimer = setTimeout(() => { timer = setInterval(tick, 14); }, 280);
    }
  }

  function type() {
    clearInterval(timer);
    clearTimeout(pauseTimer);
    i = 0;
    out.textContent = "";
    caret.classList.remove("done");
    timer = setInterval(tick, 14);
  }

  $("#replayLetter").addEventListener("click", type);
  $("#openLetterBtn").addEventListener("click", () => {
    $("#letter").scrollIntoView({ behavior: "smooth" });
    setTimeout(type, 450);
  });

  // اولین اجرا وقتی سکشن دیده شد
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { type(); io.disconnect(); }
    });
  }, { threshold: 0.3 });
  io.observe($("#letter"));
})();

/* ═════════════════ ۳) کارت‌های «چرا شێواز؟» ═════════════════ */
(function reasons() {
  const grid = $("#reasonsGrid");
  CONFIG.reasons.forEach(([emoji, title, text]) => {
    const flip = document.createElement("div");
    flip.className = "flip";
    flip.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="flip-emoji">${emoji}</div>
          <h3>${title}</h3>
          <small>برای دیدن دلیل کلیک کن</small>
        </div>
        <div class="flip-face flip-back">${text}</div>
      </div>`;
    flip.addEventListener("click", () => flip.classList.toggle("flipped"));
    grid.appendChild(flip);
  });
})();

/* ═════════════════ ۴) گالری خاطرات (عکس‌های محلی) ═════════════════ */
(function gallery() {
  const grid = $("#galleryGrid");
  const input = $("#photoInput");
  const SLOTS = 6;

  function placeholder(i) {
    const d = document.createElement("div");
    d.className = "gallery-item";
    d.innerHTML = `<div class="ph"><span>📷</span>عکس شماره ${fa(i + 1)}</div>`;
    return d;
  }

  function render(slots) {
    grid.innerHTML = "";
    slots.forEach((dataUrl, i) => {
      const item = document.createElement("div");
      item.className = "gallery-item" + (dataUrl ? " filled" : "");
      if (dataUrl) {
        item.innerHTML = `<img src="${dataUrl}" alt="خاطره ${fa(i + 1)}" />`;
        const rm = document.createElement("button");
        rm.className = "remove"; rm.textContent = "×";
        rm.setAttribute("aria-label", "حذف عکس");
        rm.addEventListener("click", () => { slots[i] = null; render(slots); });
        item.appendChild(rm);
      } else {
        item.appendChild(placeholder(i).firstElementChild);
      }
      grid.appendChild(item);
    });
  }

  let slots = Array(SLOTS).fill(null);
  render(slots);

  input.addEventListener("change", () => {
    [...input.files].forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const free = slots.indexOf(null);
        if (free === -1) slots.push(e.target.result); else slots[free] = e.target.result;
        render(slots);
      };
      reader.readAsDataURL(file);
    });
    input.value = "";
  });

  $("#clearPhotos").addEventListener("click", () => {
    slots = Array(SLOTS).fill(null);
    render(slots);
  });
})();

/* ═════════════════ ۵) نوار عشق (نگه داشتن قلب) ═════════════════ */
(function loveMeter() {
  const btn = $("#holdHeart");
  const fill = $("#meterFill");
  const val = $("#meterVal");
  const msg = $("#meterMessage");
  let pct = 0, raf = null, done = false;

  function render() {
    fill.style.width = pct + "%";
    val.textContent = fa(Math.round(pct)) + "٪";
    const idx = Math.min(CONFIG.meterMessages.length - 1, Math.floor(pct / 22));
    msg.textContent = CONFIG.meterMessages[idx];
  }

  function start(e) {
    if (done) return;
    e.preventDefault();
    btn.classList.add("holding");
    cancelAnimationFrame(raf);
    let last = performance.now();

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      pct = clamp(pct + dt * 34, 0, 100);
      render();
      if (pct >= 100) {
        done = true;
        msg.textContent = CONFIG.goalReachedText;
        btn.classList.remove("holding");
        burst();
        Sound.win();
        return;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  function stop() { btn.classList.remove("holding"); cancelAnimationFrame(raf); }

  btn.addEventListener("pointerdown", start);
  btn.addEventListener("pointerup", stop);
  btn.addEventListener("pointerleave", stop);
  btn.addEventListener("pointercancel", stop);
  render();
})();

/* ═════════════════ ۶) بازی گرفتن قلب‌ها ═════════════════ */
const Game = (function () {
  const cv = $("#gameCanvas");
  const ctx = cv.getContext("2d");
  const overlay = $("#gameOverlay");
  const oTitle = $("#overlayTitle");
  const oText = $("#overlayText");
  const oBtn = $("#startGame");
  const elScore = $("#score");
  const elLives = $("#lives");
  const reward = $("#rewardCard");

  let W = 0, H = 0, dpr = 1;
  let running = false, score = 0, lives = 3, target = 20;
  let hearts = [], last = 0, spawn = 0;
  const player = { x: 0, targetX: 0, r: 24, y: 0 };
  const keys = new Set();

  function resize() {
    const rect = cv.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    cv.width = Math.max(1, W * dpr); cv.height = Math.max(1, H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    player.y = H - 40;
    if (!player.x) player.x = player.targetX = W / 2;
  }
  window.addEventListener("resize", () => { if (running) resize(); else { resize(); draw(); } });

  function heartShape(x, y, s) {
    const t = s / 16;
    ctx.beginPath();
    ctx.moveTo(x, y + 5 * t);
    ctx.bezierCurveTo(x, y, x - 5 * t, y, x - 5 * t, y + 5 * t);
    ctx.bezierCurveTo(x - 5 * t, y + 10 * t, x, y + 12.5 * t, x, y + 15 * t);
    ctx.bezierCurveTo(x, y + 12.5 * t, x + 5 * t, y + 10 * t, x + 5 * t, y + 5 * t);
    ctx.bezierCurveTo(x + 5 * t, y, x, y, x, y + 5 * t);
    ctx.closePath();
  }

  function spawnHeart() {
    const r = Math.random();
    const type = r < 0.14 ? "gold" : r < 0.27 ? "poison" : "normal";
    hearts.push({
      x: rand(26, W - 26),
      y: -30,
      s: type === "gold" ? 26 : rand(19, 25),
      vy: rand(72, 108) + score * 2.4,
      type,
      rot: rand(-0.3, 0.3),
      vr: rand(-0.02, 0.02),
    });
  }

  function drawHeartItem(h) {
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate(h.rot);
    ctx.shadowBlur = 16;
    ctx.shadowColor = h.type === "gold" ? "rgba(247,201,72,.9)"
      : h.type === "poison" ? "rgba(120,120,140,.5)" : "rgba(255,46,116,.75)";
    if (h.type === "poison") {
      ctx.strokeStyle = "rgba(200,200,215,.85)";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 5]);
      heartShape(0, 0, h.s);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(0, -h.s / 2); ctx.lineTo(0, h.s / 2);
      ctx.moveTo(-6, -2); ctx.lineTo(6, -2);
      ctx.stroke();
    } else {
      ctx.fillStyle = h.type === "gold" ? "#f7c948" : "#ff2e74";
      heartShape(0, 0, h.s);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawPlayer() {
    const p = player;
    ctx.save();
    ctx.shadowBlur = 26; ctx.shadowColor = "rgba(255,179,201,.9)";
    ctx.fillStyle = "#ffb3c9";
    heartShape(p.x, p.y, 46);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = .55;
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(p.x, p.y + 6, 30, Math.PI * 1.12, Math.PI * 1.88);
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    hearts.forEach(drawHeartItem);
    ctx.restore();
    if (running) drawPlayer();
  }

  function hit(h) {
    const dx = h.x - player.x, dy = h.y - player.y;
    return Math.hypot(dx, dy) < player.r + h.s * 0.42;
  }

  function update(dt) {
    // کنترل با کیبورد
    const speed = 380;
    if (keys.has("ArrowLeft") || keys.has("a")) player.targetX -= speed * dt;
    if (keys.has("ArrowRight") || keys.has("d")) player.targetX += speed * dt;
    player.targetX = clamp(player.targetX, 26, W - 26);
    player.x += (player.targetX - player.x) * Math.min(1, dt * 12);

    spawn -= dt;
    if (spawn <= 0) { spawnHeart(); spawn = clamp(0.85 - score * 0.02, 0.38, 0.85); }

    const fallSpeed = Math.min(2.2, 1 + score * 0.035);
    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.y += h.vy * dt * fallSpeed;
      h.rot += h.vr;

      if (hit(h)) {
        if (h.type === "poison") { lives--; Sound.beep(140, 0.25, "sawtooth"); }
        else {
          score += h.type === "gold" ? 3 : 1;
          Sound.beep(h.type === "gold" ? 880 : 660, 0.12, "triangle");
        }
        hearts.splice(i, 1);
        syncHUD();
        if (lives <= 0) return endGame(false);
        if (score >= target) return endGame(true);
        continue;
      }

      if (h.y - h.s > H) {
        if (h.type === "poison") { lives--; syncHUD(); if (lives <= 0) return endGame(false); }
        hearts.splice(i, 1);
      }
    }
  }

  function syncHUD() {
    elScore.textContent = fa(score);
    elLives.textContent = "♥".repeat(Math.max(0, lives)) + "♡".repeat(3 - Math.max(0, lives));
  }

  function loop(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }

  function endGame(won) {
    running = false;
    overlay.classList.remove("hidden");
    if (won) {
      oTitle.textContent = "بردی! 🎉";
      oText.textContent = `امتیاز نهایی: ${fa(score)} — واقعاً خوب بازی کردی.`;
      oBtn.textContent = "یه بار دیگه؟";
      reward.classList.remove("hidden");
      burst();
      Sound.win();
    } else {
      oTitle.textContent = "قلب‌هات تموم شد 😅";
      oText.textContent = `امتیازت شد ${fa(score)}. بذار یه بار دیگه امتحان کنیم!`;
      oBtn.textContent = "تلاش دوباره 🔁";
    }
    syncHUD();
  }

  function start() {
    resize();
    hearts = []; score = 0; lives = 3; spawn = 0.4;
    player.x = player.targetX = W / 2;
    running = true;
    reward.classList.add("hidden");
    overlay.classList.add("hidden");
    syncHUD();
    last = performance.now();
    requestAnimationFrame(loop);
  }

  oBtn.addEventListener("click", start);

  // کنترل با ماوس / لمسی
  function move(clientX) {
    const rect = cv.getBoundingClientRect();
    player.targetX = clamp(clientX - rect.left, 26, W - 26);
  }
  cv.addEventListener("pointermove", (e) => move(e.clientX));
  cv.addEventListener("pointerdown", (e) => { cv.setPointerCapture(e.pointerId); move(e.clientX); });
  cv.addEventListener("touchmove", (e) => { if (e.touches[0]) move(e.touches[0].clientX); }, { passive: true });

  window.addEventListener("keydown", (e) => {
    keys.add(e.key);
    const onButton = document.activeElement && document.activeElement.tagName === "BUTTON";
    if (!onButton && !running && (e.key === " " || e.key === "Enter")) { e.preventDefault(); start(); }
  });
  window.addEventListener("keyup", (e) => keys.delete(e.key));

  // اگر کاربر تا اینجا اسکرول کرده، بازی رو زنده نگه دار
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (!e.isIntersecting) stopKeys(); });
  }, { threshold: 0 });
  function stopKeys() { keys.clear(); }
  io.observe(cv);

  resize();
  draw();
  syncHUD();
  return { start };
})();

/* ═════════════════ ۷) نقاشی قلب ═════════════════ */
(function drawing() {
  const cv = $("#drawCanvas");
  const ctx = cv.getContext("2d");
  const hint = $("#drawHint");
  const swatches = $$("#palette .swatch");
  let color = "#ff2e74", drawing = false, lastPt = null;

  function resize(withGuide = true) {
    const rect = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, rect.width * dpr);
    cv.height = Math.max(1, rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (withGuide) guide();
  }

  function guide() {
    const w = cv.clientWidth, h = cv.clientHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2 + h * 0.04);
    const s = Math.min(w, h) * 0.42;
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = "#ffb3c9";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 7]);
    const t = s / 16;
    ctx.beginPath();
    ctx.moveTo(0, 5 * t);
    ctx.bezierCurveTo(0, 0, -5 * t, 0, -5 * t, 5 * t);
    ctx.bezierCurveTo(-5 * t, 10 * t, 0, 12.5 * t, 0, 15 * t);
    ctx.bezierCurveTo(0, 12.5 * t, 5 * t, 10 * t, 5 * t, 5 * t);
    ctx.bezierCurveTo(5 * t, 0, 0, 0, 0, 5 * t);
    ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  function pos(e) {
    const r = cv.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function down(e) {
    e.preventDefault();
    drawing = true; hint.classList.add("gone");
    lastPt = pos(e);
    cv.setPointerCapture?.(e.pointerId);
    dot(lastPt);
  }
  function movePt(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.strokeStyle = color;
    ctx.lineWidth = 7;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(lastPt.x, lastPt.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    lastPt = p;
  }
  function up() { drawing = false; lastPt = null; }

  function dot(p) {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(p.x, p.y, 3.6, 0, Math.PI * 2); ctx.fill();
  }

  cv.addEventListener("pointerdown", down);
  cv.addEventListener("pointermove", movePt);
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", up);

  swatches.forEach((s) => {
    s.addEventListener("click", () => {
      swatches.forEach((x) => x.classList.remove("active"));
      s.classList.add("active");
      color = s.dataset.color;
    });
  });
  swatches[0].classList.add("active");

  $("#clearDraw").addEventListener("click", guide);

  $("#saveDraw").addEventListener("click", () => {
    const out = document.createElement("canvas");
    out.width = cv.width; out.height = cv.height;
    const o = out.getContext("2d");
    const grd = o.createLinearGradient(0, 0, 0, out.height);
    grd.addColorStop(0, "#2a0a1e"); grd.addColorStop(1, "#14050f");
    o.fillStyle = grd; o.fillRect(0, 0, out.width, out.height);
    o.drawImage(cv, 0, 0);

    o.fillStyle = "rgba(255,233,241,.95)";
    o.font = `${Math.round(out.height * 0.075)}px Tahoma, sans-serif`;
    o.direction = "rtl";
    o.textAlign = "center";
    o.fillText(`قلب ${CONFIG.name} ♡`, out.width / 2, out.height * 0.94);

    out.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "heart-of-shewaz.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    });
  });

  // با ریساز، نقاشی رو پاک نکن؛ فقط دوباره بکشش
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (drawing) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const saved = cv.toDataURL();
      resize(false);
      const img = new Image();
      img.onload = () => {
        const o = cv.getContext("2d");
        o.drawImage(img, 0, 0, cv.clientWidth, cv.clientHeight);
      };
      img.src = saved;
    }, 180);
  });
  resize();
})();

/* ═════════════════ ۸) شمارش معکوس + تاریخ شمسی ═════════════════ */
(function countdown() {
  const MONTHS = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
  // getDay(): ۰ = یکشنبه، ۶ = شنبه
  const WEEK = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];

  function toJalali(gy, gm, gd) {
    const gdm = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let jy = gy <= 1600 ? 0 : 979;
    gy -= gy <= 1600 ? 621 : 1600;
    const gy2 = gm > 2 ? gy + 1 : gy;
    let days = 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100)
      + Math.floor((gy2 + 399) / 400) - 80 + gd + gdm[gm - 1];
    jy += 33 * Math.floor(days / 12053); days %= 12053;
    jy += 4 * Math.floor(days / 1461); days %= 1461;
    if (days > 365) { jy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
    const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
    const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
    return { jy, jm, jd };
  }

  const now = new Date();
  const j = toJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
  $("#jalaliDate").textContent =
    `${WEEK[now.getDay()]} ${fa(j.jd)} ${MONTHS[j.jm - 1]} ${fa(j.jy)}`;

  // روز دختر = ۱۹ مهر = ۱۱ اکتبر (new Date ماه را از ۰ شمارش می‌کند → ۹ = اکتبر)
  const GIRL_DAY_MONTH = 9;
  const GIRL_DAY_DAY = 11;
  const todayIsGirlDay = now.getMonth() === GIRL_DAY_MONTH && now.getDate() === GIRL_DAY_DAY;

  function nextGirlDay() {
    let t = new Date(now.getFullYear(), GIRL_DAY_MONTH, GIRL_DAY_DAY, 0, 0, 0);
    if (t <= now) t = new Date(now.getFullYear() + 1, GIRL_DAY_MONTH, GIRL_DAY_DAY, 0, 0, 0);
    return t;
  }
  const target = nextGirlDay();

  // اگر امروز خودِ روز دختر است، جشن را توی صفحه اعلام می‌کنیم
  if (todayIsGirlDay) {
    document.body.classList.add("is-girl-day");
    $("#countdownNote").innerHTML =
      "امروز <b>۱۹ مهر</b> روز دختره؛ شمارش تا روز دختر بعدی 🌸";
  }

  function tick() {
    let diff = Math.max(0, target - new Date());
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000); diff -= h * 3600000;
    const m = Math.floor(diff / 60000); diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    $("#cdD").textContent = fa(d);
    $("#cdH").textContent = fa(h);
    $("#cdM").textContent = fa(m);
    $("#cdS").textContent = fa(s);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ═════════════════ ۹) صدا و موزیک (Web Audio) ═════════════════ */
const Sound = (function () {
  let ctxA = null;
  function ac() {
    if (!ctxA) ctxA = new (window.AudioContext || window.webkitAudioContext)();
    if (ctxA.state === "suspended") ctxA.resume();
    return ctxA;
  }

  function beep(freq, dur = 0.12, type = "triangle") {
    try {
      const a = ac(), t = a.currentTime;
      const o = a.createOscillator(), g = a.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(a.destination);
      o.start(t); o.stop(t + dur + 0.02);
    } catch (_) {}
  }

  // نت‌های یه آهنگ ملایم (لایه‌ی گرم)
  const N = {
    E5: 659.25, G5: 783.99, A5: 880.00, B5: 987.77,
    D5: 587.33, C5: 523.25, G4: 392.00, F5: 698.46,
  };
  const MELODY = [
    [N.E5, .5], [N.G5, .5], [N.A5, .75], [N.G5, .5], [N.E5, .5], [N.D5, 1],
    [N.E5, .5], [N.G5, .5], [N.B5, .75], [N.A5, .5], [N.G5, .5], [N.C5, 1],
    [N.D5, .5], [N.E5, .5], [N.G5, .75], [N.F5, .5], [N.E5, .5], [N.D5, 1],
    [N.G4, .5], [N.C5, .5], [N.E5, .75], [N.D5, .5], [N.C5, .5], [N.G4, 1.5],
  ];
  let musicOn = false, timer = null, step = 0;

  function note(freq, dur) {
    const a = ac(), t = a.currentTime;
    const o = a.createOscillator(), o2 = a.createOscillator(), g = a.createGain(), f = a.createBiquadFilter();
    o.type = "triangle"; o2.type = "sine";
    o.frequency.value = freq; o2.frequency.value = freq / 2;
    f.type = "lowpass"; f.frequency.value = 2200;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.13, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 1.6);
    o.connect(f); o2.connect(f); f.connect(g).connect(a.destination);
    o.start(t); o2.start(t); o.stop(t + dur * 1.7); o2.stop(t + dur * 1.7);
  }

  function playStep() {
    const [f, d] = MELODY[step % MELODY.length];
    note(f, d);
    step++;
  }

  function startMusic() {
    musicOn = true; ac();
    playStep();
    timer = setInterval(playStep, 620);
  }
  function stopMusic() { musicOn = false; clearInterval(timer); }

  function win() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      setTimeout(() => beep(f, 0.3, "triangle"), i * 140));
    if (!musicOn) setTimeout(() => { startMusic(); syncMusicUI(); }, 900);
  }

  return { beep, startMusic, stopMusic, win, isOn: () => musicOn };
})();

/* دکمه‌های موزیک */
const musicBtn = $("#musicBtn");
function syncMusicUI() {
  const on = Sound.isOn();
  musicBtn.textContent = on ? "🔇 موزیک خاموش کن" : "🎵 موزیک روشن کن";
  musicBtn.setAttribute("aria-pressed", String(on));
}

musicBtn.addEventListener("click", () => {
  if (Sound.isOn()) Sound.stopMusic(); else Sound.startMusic();
  syncMusicUI();
});

/* ═════════════════ ۱۰) انفجار قلب (جشن) ═════════════════ */
function burst(count = 34) {
  const fx = document.createElement("canvas");
  fx.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:100;pointer-events:none";
  document.body.appendChild(fx);
  const ctx = fx.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  fx.width = innerWidth * dpr; fx.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const W = innerWidth, H = innerHeight;
  const parts = [];
  for (let i = 0; i < count; i++) {
    parts.push({
      x: W / 2, y: H * 0.45,
      vx: rand(-7, 7), vy: rand(-11, -4),
      s: rand(10, 26), rot: rand(0, 6.3), vr: rand(-0.2, 0.2),
      hue: ["#ff2e74", "#ff6fa5", "#ffd6e0", "#f7c948"][i % 4],
    });
  }

  let life = 0;
  (function tick() {
    life++;
    ctx.clearRect(0, 0, W, H);
    parts.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.22; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = clamp(1 - life / 190, 0, 1);
      ctx.fillStyle = p.hue;
      const t = p.s / 16;
      ctx.beginPath();
      ctx.moveTo(0, 5 * t);
      ctx.bezierCurveTo(0, 0, -5 * t, 0, -5 * t, 5 * t);
      ctx.bezierCurveTo(-5 * t, 10 * t, 0, 12.5 * t, 0, 15 * t);
      ctx.bezierCurveTo(0, 12.5 * t, 5 * t, 10 * t, 5 * t, 5 * t);
      ctx.bezierCurveTo(5 * t, 0, 0, 0, 0, 5 * t);
      ctx.closePath(); ctx.fill();
      ctx.restore();
    });
    if (life < 190) requestAnimationFrame(tick);
    else fx.remove();
  })();
}

/* دکمه‌ی بغل */
$("#loveBtn").addEventListener("click", () => {
  burst(60);
  Sound.beep(1046.5, 0.4, "triangle");
  const card = $(".finale-card");
  card.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }],
    { duration: 600, iterations: 2 }
  );
});

/* ═════════════════ ۱۱) انیمیشن ورود + دکمه‌ی بالا ═════════════════ */
(function revealAndTop() {
  const sections = $$(".section");

  // انیمیشن ورود فقط اگر IntersectionObserver در دسترس بود
  if ("IntersectionObserver" in window) {
    sections.forEach((s) => s.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    sections.forEach((s) => io.observe(s));
  }

  // شبکه ایمنی: هر کاری هم که شد، بعد ۲.۵ ثانیه همه‌چیز باید دیده شود
  setTimeout(() => sections.forEach((s) => s.classList.add("in")), 2500);

  const top = $("#toTop");
  window.addEventListener("scroll", () => {
    top.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ═════════════════ پایان ═════════════════ */
console.log("💗 ساخته‌شده برای " + CONFIG.name + " (" + CONFIG.nameLatin + ") — روز دختر مبارک");