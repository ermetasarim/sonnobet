/* =========================================================
   SON NÖBET — Özellikler v5.3
   Tutorial, günlük hedef, rozetler, PWA, erişilebilirlik,
   paylaşım, zorluk ipuçları, hikâye zinciri
   ========================================================= */

const Features = (() => {
    const TUTORIAL_KEY = "son_nobet_tutorial_done_v1";
    const DAILY_KEY = "son_nobet_daily_v1";
    const BADGES_KEY = "son_nobet_badges_v1";
    const A11Y_KEY = "son_nobet_a11y_v1";

    const BADGE_DEFS = [
        { id: "steady_guard", icon: "🧊", name: "Soğukkanlı", desc: "5 doğru karar" },
        { id: "perfect_shift", icon: "💎", name: "Kusursuz", desc: "8+ doğru, 0 hata" },
        { id: "low_risk", icon: "🛡️", name: "Düşük Risk", desc: "Risk ≤ 20" },
        { id: "team_player", icon: "🤝", name: "Ekip", desc: "Ekip güveni ≥ 80" },
        { id: "management_favorite", icon: "👔", name: "Yönetim", desc: "Yönetim güveni ≥ 85" },
        { id: "daily_done", icon: "📅", name: "Günlük", desc: "Günlük hedef tamam" },
        { id: "first_shift", icon: "⭐", name: "İlk Nöbet", desc: "İlk vardiyayı bitir" },
        { id: "night_owl", icon: "🌙", name: "Gece Kuşu", desc: "Gece vardiyası bitir" },
        { id: "day_shift", icon: "☀️", name: "Gündüz", desc: "Gündüz vardiyası bitir" },
        { id: "story_link", icon: "📖", name: "İz Sürücü", desc: "Hikâye bayrağı aç" },
        { id: "all_institutions", icon: "🏛️", name: "Tesis Ustası", desc: "5 kurumda vardiya" },
        { id: "offline_ready", icon: "📦", name: "Çevrimdışı", desc: "PWA önbellek hazır" },
        { id: "inst_AVM", icon: "🏬", name: "AVM Uzmanı", desc: "AVM'de 3 vardiya" },
        { id: "inst_Hastane", icon: "🏥", name: "Hastane", desc: "Hastanede 3 vardiya" },
        { id: "inst_Fabrika", icon: "🏭", name: "Fabrika", desc: "Fabrikada 3 vardiya" },
        { id: "inst_Site", icon: "🏢", name: "Site", desc: "Site'de 3 vardiya" },
        { id: "inst_Havalimanı", icon: "✈️", name: "Havalimanı", desc: "Havalimanında 3 vardiya" },
        { id: "inst_Banka", icon: "🏦", name: "Banka", desc: "Bankada 3 vardiya" },
        { id: "inst_Belediye", icon: "🏛️", name: "Belediye", desc: "Belediyede 3 vardiya" },
        { id: "chapter_end", icon: "📕", name: "Bölüm Sonu", desc: "Hikâye bölümü kapandı" }
    ];

    const TUTORIAL_STEPS = [
        {
            title: "Hoş geldin, görevli",
            body: "Son Nöbet’te her vardiya 15 karardan oluşur. Adını gir, zorluğu seç ve Yeni Vardiya’ya bas."
        },
        {
            title: "Kurum ve vardiya",
            body: "AVM, hastane, fabrika, site veya havalimanı seç. Gündüz veya gece vardiyası riskleri değiştirir."
        },
        {
            title: "Karar ver",
            body: "Olayı oku, şıklardan birini seç. Puan, itibar ve stres değişir. Prosedüre yakın seçimler genelde daha güvenlidir."
        }
    ];

    let tutorialStep = 0;

    function $(id) {
        return document.getElementById(id);
    }

    function todayKey() {
        const d = new Date();
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }

    function loadJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function saveJSON(key, val) {
        try {
            localStorage.setItem(key, JSON.stringify(val));
        } catch (e) {}
    }

    /* —— Günlük hedef —— */
    function getDaily() {
        const d = loadJSON(DAILY_KEY, null);
        const key = todayKey();
        if (!d || d.date !== key) {
            const fresh = {
                date: key,
                targetAccuracy: 80,
                targetEvents: 15,
                done: false,
                progressAccuracy: 0
            };
            saveJSON(DAILY_KEY, fresh);
            return fresh;
        }
        return d;
    }

    function updateDailyOnShiftEnd(accuracy, eventCount) {
        const d = getDaily();
        d.progressAccuracy = accuracy;
        if (!d.done && accuracy >= d.targetAccuracy && eventCount >= 10) {
            d.done = true;
            unlockBadge("daily_done");
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("Günlük hedef tamamlandı! 📅");
            }
        }
        saveJSON(DAILY_KEY, d);
        renderDailyUI();
    }

    function renderDailyUI() {
        const el = $("dailyGoalBox");
        if (!el) return;
        const d = getDaily();
        if (d.done) {
            el.innerHTML = `<strong>Günlük hedef</strong><span class="dailyOk">Tamamlandı ✓</span>`;
            el.classList.add("done");
        } else {
            el.innerHTML = `<strong>Günlük hedef</strong><span>%${d.targetAccuracy}+ doğrulukla bir vardiya bitir</span>`;
            el.classList.remove("done");
        }
    }

    /* —— Rozetler —— */
    function getUnlockedBadges() {
        return loadJSON(BADGES_KEY, []);
    }

    function unlockBadge(id) {
        const list = getUnlockedBadges();
        if (list.includes(id)) return;
        list.push(id);
        saveJSON(BADGES_KEY, list);
        if (typeof SFX !== "undefined" && SFX.achievement) SFX.achievement();
        renderBadgesGrid();
    }

    function syncBadgesFromGame() {
        if (!window.game) return;
        (game.achievements || []).forEach((id) => unlockBadge(id));
        if ((game.lifetimeStats && game.lifetimeStats.shifts) >= 1) unlockBadge("first_shift");
        if (game.shiftType === "night") unlockBadge("night_owl");
        if (game.shiftType === "day") unlockBadge("day_shift");
        if (game.storyFlags && Object.keys(game.storyFlags).length) unlockBadge("story_link");
    }

    function renderBadgesGrid() {
        const grid = $("badgesGrid");
        if (!grid) return;
        const unlocked = new Set(getUnlockedBadges());
        if (window.game && Array.isArray(game.achievements)) {
            game.achievements.forEach((id) => unlocked.add(id));
        }
        grid.innerHTML = BADGE_DEFS.map((b) => {
            const on = unlocked.has(b.id);
            return `<div class="badgeCard ${on ? "on" : "off"}" title="${b.desc}">
                <span class="badgeIcon">${b.icon}</span>
                <strong>${b.name}</strong>
                <small>${on ? b.desc : "Kilitli"}</small>
            </div>`;
        }).join("");
    }

    /* —— Tutorial —— */
    function shouldShowTutorial() {
        return localStorage.getItem(TUTORIAL_KEY) !== "1";
    }

    function openTutorial(step) {
        tutorialStep = step || 0;
        const modal = $("tutorialModal");
        if (!modal) return;
        const s = TUTORIAL_STEPS[tutorialStep];
        if ($("tutorialTitle")) $("tutorialTitle").textContent = s.title;
        if ($("tutorialBody")) $("tutorialBody").textContent = s.body;
        if ($("tutorialStepLabel")) {
            $("tutorialStepLabel").textContent = `${tutorialStep + 1} / ${TUTORIAL_STEPS.length}`;
        }
        const nextBtn = $("tutorialNextBtn");
        if (nextBtn) {
            nextBtn.textContent =
                tutorialStep >= TUTORIAL_STEPS.length - 1 ? "Başla" : "Devam";
        }
        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
    }

    function closeTutorial(done) {
        const modal = $("tutorialModal");
        if (modal) {
            modal.classList.add("hidden");
            modal.setAttribute("aria-hidden", "true");
        }
        if (done) localStorage.setItem(TUTORIAL_KEY, "1");
    }

    function tutorialNext() {
        if (tutorialStep >= TUTORIAL_STEPS.length - 1) {
            closeTutorial(true);
            if (typeof SFX !== "undefined") SFX.click();
            return;
        }
        openTutorial(tutorialStep + 1);
        if (typeof SFX !== "undefined") SFX.click();
    }

    /* —— Erişilebilirlik —— */
    function loadA11y() {
        return loadJSON(A11Y_KEY, { largeText: false, highContrast: false });
    }

    function applyA11y(cfg) {
        document.documentElement.classList.toggle("a11y-large", !!cfg.largeText);
        document.documentElement.classList.toggle("a11y-contrast", !!cfg.highContrast);
        const lt = $("a11yLargeToggle");
        const hc = $("a11yContrastToggle");
        if (lt) lt.checked = !!cfg.largeText;
        if (hc) hc.checked = !!cfg.highContrast;
    }

    function saveA11yFromUI() {
        const cfg = {
            largeText: !!$("a11yLargeToggle")?.checked,
            highContrast: !!$("a11yContrastToggle")?.checked
        };
        saveJSON(A11Y_KEY, cfg);
        applyA11y(cfg);
    }

    /* —— PWA / offline —— */
    function updatePwaStatus() {
        const el = $("pwaStatus");
        if (!el) return;
        const online = navigator.onLine;
        let swReady = false;
        const finish = () => {
            const parts = [];
            const dot = online
                ? '<span class="pwaDot" aria-hidden="true">🟢</span> Çevrimiçi'
                : '<span class="pwaDot" aria-hidden="true">🔴</span> Çevrimdışı';
            parts.push(dot);
            if (swReady) {
                parts.push("önbellek hazır");
                unlockBadge("offline_ready");
            } else if ("serviceWorker" in navigator) {
                parts.push("önbellek kontrol ediliyor…");
            }
            el.innerHTML = parts.join(" · ");
            el.classList.toggle("offline", !online);
        };
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistration().then((reg) => {
                swReady = !!(reg && (reg.active || reg.installing || reg.waiting));
                finish();
            }).catch(finish);
        } else {
            finish();
        }
    }

    /* —— Paylaşım —— */
    function buildShareText(finalScore, accuracy) {
        const name = (window.game && game.playerName) || "Görevli";
        const inst = (window.game && game.institution) || "—";
        const rank = (window.game && game.rank) || "—";
        return (
            `Son Nöbet — Vardiya Raporu\n` +
            `${name} · ${inst}\n` +
            `Rütbe: ${rank}\n` +
            `Puan: ${finalScore} · Doğruluk: %${accuracy}\n` +
            `#SonNöbet`
        );
    }

    async function shareReport() {
        let finalScore = window.game ? game.score : 0;
        let accuracy = 0;
        if (window.__lastShiftReport) {
            finalScore = window.__lastShiftReport.finalScore ?? finalScore;
            accuracy = window.__lastShiftReport.accuracy ?? accuracy;
        } else if (window.game && game.eventCount) {
            accuracy = Math.round((game.correctDecisions / game.eventCount) * 100);
        }
        const text = buildShareText(finalScore, accuracy);
        try {
            if (navigator.share) {
                await navigator.share({ title: "Son Nöbet", text });
                return;
            }
        } catch (e) {
            /* user cancel */
            return;
        }
        try {
            await navigator.clipboard.writeText(text);
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("Rapor panoya kopyalandı.");
            } else {
                alert("Rapor panoya kopyalandı.");
            }
        } catch (e2) {
            prompt("Raporu kopyala:", text);
        }
    }

    /* —— Hikâye zinciri (hafif boss bayrakları) —— */
    const BOSS_HINTS = {
        AVM: "Seri: Sahipsiz paket izi — sonraki vardiyalarda tekrar edebilir.",
        Hastane: "Seri: Hasta yakını gerginliği — prosedür dosyasına işlendi.",
        Fabrika: "Seri: İş güvenliği açığı — saha denetimi sürüyor.",
        Site: "Seri: Gece giriş ihlalleri — kart ve kamera bağı kuruluyor.",
        Havalimanı: "Seri: Kısıtlı alan / bagaj halkası — birimler bilgilendirildi.",
        Banka: "Seri: Gişe / kasa hattı — şüpheli işlem dosyası açık.",
        Belediye: "Seri: Kamu hizmeti baskısı — şikayet ve belge zinciri açık."
    };

    function storyBeatOnEnd() {
        if (!window.game) return;
        const flags = game.storyFlags || {};
        const keys = Object.keys(flags);
        if (!keys.length) return;
        unlockBadge("story_link");
        const hint = BOSS_HINTS[game.institution];
        const box = $("storyBeatNote");
        if (box && hint) {
            box.textContent = hint;
            box.classList.remove("hidden");
        }
    }

    /* —— Zorluk ipucu —— */
    function renderDifficultyHint() {
        const el = $("difficultyHint");
        if (!el) return;
        const v = Number($("difficultySelect")?.value || 1);
        const map = {
            1: "Normal: dengeli süre ve ceza.",
            2: "Zor: hatalar daha pahalı, risk daha hızlı artar.",
            3: "Kritik: kısa süre, dar tolerans — yalnızca deneyimliler."
        };
        el.textContent = map[v] || map[1];
    }

    /* —— endShift köprüsü —— */
    function onShiftEnd(accuracy, finalScore) {
        updateDailyOnShiftEnd(accuracy, window.game ? game.eventCount : 0);
        syncBadgesFromGame();
        storyBeatOnEnd();

        const shareBtn = $("shareReportBtn");
        if (shareBtn) {
            shareBtn.classList.remove("hidden");
            shareBtn.onclick = () => shareReport();
        }
        const cardBtn = $("shareCardBtn");
        if (cardBtn) {
            cardBtn.classList.remove("hidden");
            cardBtn.onclick = () => {
                if (window.FeaturesV54) FeaturesV54.shareStoryCard();
            };
        }
        // store last score for share
        window.__lastShiftReport = { accuracy, finalScore };
    }

    function bind() {
        applyA11y(loadA11y());
        renderDailyUI();
        renderBadgesGrid();
        updatePwaStatus();
        renderDifficultyHint();

        window.addEventListener("online", updatePwaStatus);
        window.addEventListener("offline", updatePwaStatus);

        $("openBadgesBtn")?.addEventListener("click", () => {
            renderBadgesGrid();
            $("badgesModal")?.classList.remove("hidden");
        });
        $("tutorialNextBtn")?.addEventListener("click", tutorialNext);
        $("tutorialSkipBtn")?.addEventListener("click", () => closeTutorial(true));
        $("a11yLargeToggle")?.addEventListener("change", saveA11yFromUI);
        $("a11yContrastToggle")?.addEventListener("change", saveA11yFromUI);
        $("difficultySelect")?.addEventListener("change", renderDifficultyHint);

        document.querySelectorAll("[data-close-modal]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-close-modal");
                const m = $(id);
                if (m) {
                    m.classList.add("hidden");
                    m.setAttribute("aria-hidden", "true");
                }
            });
        });

        // Tutorial otomatik açılmıyor (menüyü engelliyordu)

        // Patch endShift once
        if (typeof window.endShift === "function" && !window.endShift.__featuresPatched) {
            const orig = window.endShift;
            window.endShift = function patchedEndShift() {
                orig.apply(this, arguments);
                try {
                    const acc =
                        game.eventCount === 0
                            ? 0
                            : Math.round((game.correctDecisions / game.eventCount) * 100);
                    onShiftEnd(acc, game.score);
                } catch (e) {
                    console.warn(e);
                }
            };
            window.endShift.__featuresPatched = true;
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }

    // Re-patch after script load if endShift defined later
    setTimeout(() => {
        if (typeof window.endShift === "function" && !window.endShift.__featuresPatched) {
            const orig = window.endShift;
            window.endShift = function () {
                orig.apply(this, arguments);
                try {
                    const acc =
                        game.eventCount === 0
                            ? 0
                            : Math.round((game.correctDecisions / game.eventCount) * 100);
                    onShiftEnd(acc, game.score);
                } catch (e) {}
            };
            window.endShift.__featuresPatched = true;
        }
    }, 0);

    return {
        unlockBadge,
        getDaily,
        shareReport,
        openTutorial,
        updatePwaStatus
    };
})();

window.Features = Features;

/* =========================================================
   v5.4 eklentiler — animasyon, brifing, seri, telsiz, haftalık,
   kurum rozeti, kayıt uyarısı, story card, bölüm sonu
   ========================================================= */
(function FeaturesV54() {
    const INST_KEY = "son_nobet_inst_counts_v1";
    const WEEKLY_KEY = "son_nobet_weekly_lb_v1";
    const MONTHLY_KEY = "son_nobet_monthly_lb_v1";
    const CHAPTER_KEY = "son_nobet_chapter_v1";

    const BRIEFINGS = {
        AVM: "Kalabalık, sahipsiz eşya ve mağaza alarmlarına hazır ol. Acele müdahaleden kaçın.",
        Hastane: "Hasta güvenliği öncelik. Kısıtlı alan ve ziyaretçi baskısında prosedürü bozma.",
        Fabrika: "İş güvenliği ve makine sahası. Yetkisiz giriş ve sevkiyat risklerini doğrula.",
        Site: "Giriş kontrolü, gürültü ve gece misafirleri. Kimlik ve yetkiyi esnetme.",
        Havalimanı: "Yüksek prosedür. Bagaj, kısıtlı alan ve kuyruk yönetiminde net kal.",
        Banka: "Gişe, kasa ve alarm prosedürü. Müşteri baskısında soğukkanlı kal.",
        Belediye: "Vatandaş yoğunluğu, belge ve kamu alanı. Yetki sınırını koru, prosedüre bağlı kal."
    };

    const RADIO_LINES = {
        good: ["Kontrol: Anlaşıldı, kayıt altına alıyorum.", "Kontrol: Prosedür uygun, devam.", "Kontrol: Destek hazır."],
        bad: ["Kontrol: Risk yükseldi, dikkat.", "Kontrol: Bu karar dosyaya işlenecek.", "Kontrol: Durumu yeniden değerlendir."],
        brief: ["Kontrol: Vardiya brifingi tamam.", "Kontrol: Kanallar açık, telsizinden ayrılma."]
    };

    function $(id) { return document.getElementById(id); }

    function loadJSON(key, fb) {
        try { return JSON.parse(localStorage.getItem(key) || "null") ?? fb; } catch (e) { return fb; }
    }
    function saveJSON(key, val) {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
    }

    function weekId() {
        const d = new Date();
        const onejan = new Date(d.getFullYear(), 0, 1);
        const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
        return `${d.getFullYear()}-W${week}`;
    }

    function monthId() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    }

    /* 1 — Uçan puan / flaş */
    function spawnFloat(text, good) {
        const host = $("eventArea") || document.body;
        const n = document.createElement("div");
        n.className = "fxFloat " + (good ? "good" : "bad");
        n.textContent = text;
        host.appendChild(n);
        requestAnimationFrame(() => n.classList.add("show"));
        setTimeout(() => n.remove(), 1200);
    }

    function flashScreen(good) {
        const layer = $("fxFlash");
        if (!layer) return;
        layer.classList.remove("good", "bad", "show");
        void layer.offsetWidth;
        layer.classList.add(good ? "good" : "bad", "show");
        setTimeout(() => layer.classList.remove("show"), 350);
    }

    /* 3 — Seri */
    function updateStreakUI() {
        const el = $("streakDisplay");
        if (!el || !window.game) return;
        const s = game.consecutiveGood || 0;
        el.textContent = s > 0 ? `Seri ${s}` : "Seri —";
        el.classList.toggle("hot", s >= 3);
        el.classList.toggle("hidden", false);
    }

    /* 4 — Telsiz TTS kısa kanal */
    function radioBlip(kind) {
        if (!window.game || !game.ttsEnabled) return;
        const pool = RADIO_LINES[kind] || RADIO_LINES.brief;
        const line = pool[Math.floor(Math.random() * pool.length)];
        try {
            if (!window.speechSynthesis) return;
            const u = new SpeechSynthesisUtterance(line);
            u.lang = "tr-TR";
            u.rate = 1.08;
            u.pitch = 0.85;
            window.speechSynthesis.speak(u);
        } catch (e) {}
    }

    /* 2 — Brifing */
    function showBriefing(inst, shiftType, onConfirm) {
        const modal = $("briefingModal");
        if (!modal) {
            if (typeof onConfirm === "function") onConfirm();
            return;
        }
        const title = $("briefingTitle");
        const body = $("briefingBody");
        const meta = $("briefingMeta");
        if (title) title.textContent = inst + " brifingi";
        if (meta) meta.textContent = shiftType === "day" ? "Gündüz vardiyası" : "Gece vardiyası";
        if (body) body.textContent = BRIEFINGS[inst] || "Prosedüre bağlı kal, acele etme.";
        modal.classList.remove("hidden");
        modal.style.display = "flex";
        modal.style.zIndex = "5000";
        modal.setAttribute("aria-hidden", "false");
        try { radioBlip("brief"); } catch (e) {}

        const go = $("briefingStartBtn");
        if (!go) {
            if (typeof onConfirm === "function") onConfirm();
            return;
        }
        go.onclick = function () {
            modal.classList.add("hidden");
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
            if (typeof onConfirm === "function") onConfirm();
        };
    }

    /* 5 — Haftalık liderlik */
    function pushWeekly(entry) {
        const id = weekId();
        let data = loadJSON(WEEKLY_KEY, { week: id, list: [] });
        if (data.week !== id) data = { week: id, list: [] };
        data.list.push(entry);
        data.list.sort((a, b) => b.score - a.score);
        data.list = data.list.slice(0, 10);
        saveJSON(WEEKLY_KEY, data);
        renderWeekly();
    }

    function renderWeekly() {
        const el = $("weeklyLeaderboardList");
        if (!el) return;
        const id = weekId();
        let data = loadJSON(WEEKLY_KEY, { week: id, list: [] });
        if (data.week !== id) data = { week: id, list: [] };
        const label = $("weeklyWeekLabel");
        if (label) label.textContent = id;
        if (!data.list.length) {
            el.innerHTML = `<div class="panelTableEmpty">Bu hafta henüz kayıt yok.</div>`;
            return;
        }
        el.innerHTML = data.list.map((r, i) =>
            `<div class="panelRow">
                <span class="panelRank">#${i + 1}</span>
                <span class="panelRowText">
                    <strong>${escape(r.name)}</strong>
                    <small>${escape(r.institution || "—")}</small>
                </span>
                <span class="panelValue">${r.score}</span>
            </div>`
        ).join("");
    }

    function pushMonthly(entry) {
        const id = monthId();
        let data = loadJSON(MONTHLY_KEY, { month: id, list: [] });
        if (data.month !== id) data = { month: id, list: [] };
        data.list.push(entry);
        data.list.sort((a, b) => b.score - a.score);
        data.list = data.list.slice(0, 15);
        saveJSON(MONTHLY_KEY, data);
        renderMonthly();
    }

    function renderMonthly() {
        const el = $("monthlyLeaderboardList");
        if (!el) return;
        const id = monthId();
        let data = loadJSON(MONTHLY_KEY, { month: id, list: [] });
        if (data.month !== id) data = { month: id, list: [] };
        const label = $("monthlyMonthLabel");
        if (label) label.textContent = id;
        if (!data.list.length) {
            el.innerHTML = `<div class="panelTableEmpty">Bu ay henüz kayıt yok.</div>`;
            return;
        }
        el.innerHTML = data.list.map((r, i) =>
            `<div class="panelRow">
                <span class="panelRank">#${i + 1}</span>
                <span class="panelRowText">
                    <strong>${escape(r.name)}</strong>
                    <small>${escape(r.institution || "—")}</small>
                </span>
                <span class="panelValue">${r.score}</span>
            </div>`
        ).join("");
    }

    function escape(s) {
        return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    }

    /* 7 — Kurum rozetleri */
    function trackInstitution(inst) {
        const map = loadJSON(INST_KEY, {});
        map[inst] = (map[inst] || 0) + 1;
        saveJSON(INST_KEY, map);
        if (map[inst] >= 3 && window.Features && Features.unlockBadge) {
            Features.unlockBadge("inst_" + inst);
        }
        const all = ["AVM", "Hastane", "Fabrika", "Site", "Havalimanı", "Banka"];
        if (all.every((k) => (map[k] || 0) >= 1) && window.Features) {
            Features.unlockBadge("all_institutions");
        }
    }

    /* 10 — Bölüm / chapter */
    function advanceChapter() {
        if (!window.game) return null;
        const flags = Object.keys(game.storyFlags || {});
        if (!flags.length) return null;
        const ch = loadJSON(CHAPTER_KEY, { stage: 0, closed: [] });
        const key = `${game.institution}:${flags.sort().join(",")}`;
        if (ch.closed.includes(key)) return null;
        ch.stage = (ch.stage || 0) + 1;
        ch.closed.push(key);
        saveJSON(CHAPTER_KEY, ch);
        if (window.Features) Features.unlockBadge("chapter_end");
        return {
            title: `Bölüm ${ch.stage} kapandı`,
            text: `${game.institution} hattındaki izler bu vardiyada birleşti. Dosya geçici olarak kapatıldı; yeni vardiyalar yeni halkalar açabilir.`
        };
    }

    /* 9 — Story card canvas */
    async function shareStoryCard() {
        const last = window.__lastShiftReport || {};
        const name = (window.game && game.playerName) || "Görevli";
        const inst = (window.game && game.institution) || "—";
        const rank = (window.game && game.rank) || "—";
        const score = last.finalScore ?? (window.game ? game.score : 0);
        const acc = last.accuracy ?? 0;

        const canvas = document.createElement("canvas");
        canvas.width = 720;
        canvas.height = 900;
        const ctx = canvas.getContext("2d");
        // bg
        const grd = ctx.createLinearGradient(0, 0, 0, 900);
        grd.addColorStop(0, "#0b1524");
        grd.addColorStop(1, "#070e1a");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 720, 900);
        ctx.strokeStyle = "#334a68";
        ctx.lineWidth = 4;
        ctx.strokeRect(24, 24, 672, 852);

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("SON NÖBET", 60, 100);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "18px sans-serif";
        ctx.fillText("Vardiya Raporu", 60, 132);

        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 40px sans-serif";
        ctx.fillText(name, 60, 220);
        ctx.font = "22px sans-serif";
        ctx.fillStyle = "#93c5fd";
        ctx.fillText(`${rank}  ·  ${inst}`, 60, 260);

        ctx.fillStyle = "#e2e8f0";
        ctx.font = "bold 56px sans-serif";
        ctx.fillText(String(score), 60, 380);
        ctx.font = "20px sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("TOPLAM PUAN", 60, 412);

        ctx.fillStyle = "#86efac";
        ctx.font = "bold 36px sans-serif";
        ctx.fillText(`%${acc}`, 60, 500);
        ctx.font = "18px sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("DOĞRULUK", 60, 530);

        ctx.fillStyle = "#64748b";
        ctx.font = "16px sans-serif";
        ctx.fillText("Telsizini açık tut. Kural defterini unutma.", 60, 820);

        const dataUrl = canvas.toDataURL("image/png");
        try {
            const res = await fetch(dataUrl);
            const blob = await res.blob();
            const file = new File([blob], "son-nobet-rapor.png", { type: "image/png" });
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({ files: [file], title: "Son Nöbet", text: "Vardiya raporum" });
                return;
            }
        } catch (e) {}
        // fallback download
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "son-nobet-rapor.png";
        a.click();
        if (typeof flashSaveStatus === "function") flashSaveStatus("Rapor kartı indirildi.");
    }

    /* Choice hook */
    function onChoice(choice) {
        const sign = (n) => (n > 0 ? `+${n}` : `${n}`);
        // Puan yazısı kaldırıldı
        flashScreen(!!choice.correct);
        updateStreakUI();
        radioBlip(choice.correct ? "good" : "bad");
        if (choice.correct && (window.game?.consecutiveGood || 0) >= 5) {
            spawnFloat("Seri bonus!", true);
        }
    }

    /* Patch selectChoice */
    function patchSelectChoice() {
        if (typeof window.selectChoice !== "function" || window.selectChoice.__v54) return;
        const orig = window.selectChoice;
        window.selectChoice = function (button, choice, event) {
            orig(button, choice, event);
            try { onChoice(choice); } catch (e) {}
        };
        window.selectChoice.__v54 = true;
    }

    /* Institution flow: script.js bindInstitutionButtons + FeaturesV54.showBriefing */

    /* endShift extras */
    function onEndExtra(acc, score) {
        if (window.game) {
            trackInstitution(game.institution);
            const entry = {
                name: game.playerName || "Görevli",
                institution: game.institution || "—",
                score: score || game.score || 0
            };
            pushWeekly(entry);
            pushMonthly(entry);
            const ep = advanceChapter();
            const box = $("chapterEpilog");
            if (box) {
                if (ep) {
                    box.classList.remove("hidden");
                    box.innerHTML = `<strong>${ep.title}</strong><p>${ep.text}</p>`;
                    if (window.Features) Features.unlockBadge("chapter_end");
                } else {
                    box.classList.add("hidden");
                }
            }
        }
        updateStreakUI();
        renderWeekly();
        if (typeof renderMonthly === "function") renderMonthly();
    }

    function bindV54() {
        // Badge defs extension via Features if possible
        patchSelectChoice();
        setTimeout(patchSelectChoice, 50);
        

        // streak element visible
        updateStreakUI();
        renderWeekly();
        if (typeof renderMonthly === "function") renderMonthly();

        $("shareCardBtn")?.addEventListener("click", () => shareStoryCard());
        function showLbTab(name) {
            document.querySelectorAll(".lbTab").forEach((b) => {
                const on = b.getAttribute("data-lb-tab") === name;
                b.classList.toggle("active", on);
                b.setAttribute("aria-selected", on ? "true" : "false");
            });
            document.querySelectorAll(".lbPane").forEach((p) => {
                const on = p.getAttribute("data-lb-pane") === name;
                p.classList.toggle("hidden", !on);
            });
            if (name === "weekly") renderWeekly();
            else if (name === "monthly") renderMonthly();
            else if (typeof renderLeaderboard === "function") renderLeaderboard();
        }

        document.querySelectorAll(".lbTab").forEach((btn) => {
            if (btn.__lbBound) return;
            btn.__lbBound = true;
            btn.addEventListener("click", () => {
                showLbTab(btn.getAttribute("data-lb-tab") || "all");
            });
        });

        $("openLeaderboardBtn")?.addEventListener("click", () => {
            try {
                if (typeof renderLeaderboard === "function") renderLeaderboard();
            } catch (e) {}
            renderWeekly();
            renderMonthly();
            showLbTab("all");
            const m = $("leaderboardModal");
            if (m) {
                m.classList.remove("hidden");
                m.style.display = "flex";
                m.setAttribute("aria-hidden", "false");
            }
        });

        // chain endShift
        const hook = () => {
            if (typeof window.endShift === "function" && !window.endShift.__v54) {
                const prev = window.endShift;
                window.endShift = function () {
                    prev.apply(this, arguments);
                    try {
                        const acc = game.eventCount ? Math.round((game.correctDecisions / game.eventCount) * 100) : 0;
                        onEndExtra(acc, game.score);
                    } catch (e) {}
                };
                window.endShift.__v54 = true;
            }
        };
        hook();
        setTimeout(hook, 100);

        // startShift streak reset UI
        if (typeof window.startShift === "function" && !window.startShift.__v54) {
            const ss = window.startShift;
            window.startShift = function () {
                ss.apply(this, arguments);
                setTimeout(updateStreakUI, 0);
            };
            window.startShift.__v54 = true;
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindV54);
    } else {
        bindV54();
    }

    // expose
    window.FeaturesV54 = {
        shareStoryCard,
        showBriefing,
        updateStreakUI,
        renderWeekly,
        renderMonthly
    };
})();

/* =========================================================
   v5.5 — hızlı yeniden, tema, ipucu, kurum kilidi, kritik olay
   ========================================================= */
(function FeaturesV55() {
    const HINT_KEY = "son_nobet_hint_v1";
    const SHIFTS_KEY = "son_nobet_lifetime_shifts_v1";

    const INST_ORDER = ["Site", "AVM", "Fabrika", "Banka", "Belediye", "Hastane", "Havalimanı"];
    const UNLOCK_KEY = "son_nobet_unlocked_inst_v2";
    /** Vardiya sonunda doğruluk eşiği — sonraki kurum açılsın */
    const UNLOCK_ACCURACY = 60;

    const UNLOCK_RULES = {
        Site: 0,
        AVM: 1,
        Fabrika: 2,
        Banka: 3,
        Belediye: 4,
        Hastane: 5,
        Havalimanı: 6
    };

    function $(id) { return document.getElementById(id); }
    function loadJSON(k, fb) {
        try { return JSON.parse(localStorage.getItem(k) || "null") ?? fb; } catch (e) { return fb; }
    }
    function saveJSON(k, v) {
        try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
    }
    function today() {
        const d = new Date();
        return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

    function getShiftCount() {
        if (window.game && game.lifetimeStats && typeof game.lifetimeStats.shifts === "number") {
            return game.lifetimeStats.shifts;
        }
        return loadJSON(SHIFTS_KEY, 0);
    }

    function bumpShiftCount() {
        const n = getShiftCount() + 1;
        saveJSON(SHIFTS_KEY, n);
        if (window.game && game.lifetimeStats) game.lifetimeStats.shifts = n;
        return n;
    }

    /* 7 — Kurum kilidi */
    function getUnlockedList() {
        try {
            const raw = localStorage.getItem(UNLOCK_KEY);
            if (raw) {
                const arr = JSON.parse(raw);
                if (Array.isArray(arr) && arr.length) return arr;
            }
        } catch (e) {}
        // İlk kurum her zaman açık
        return ["Site"];
    }

    function saveUnlockedList(list) {
        try {
            localStorage.setItem(UNLOCK_KEY, JSON.stringify(list));
        } catch (e) {}
    }

    function isUnlocked(inst) {
        return getUnlockedList().includes(inst);
    }

    /** Yeterli doğrulukla vardiya bitince sıradaki kurumu aç */
    function tryUnlockNextInstitution(inst, accuracy) {
        const order = INST_ORDER;
        const idx = order.indexOf(inst);
        if (idx < 0 || idx >= order.length - 1) return null;
        if ((Number(accuracy) || 0) < UNLOCK_ACCURACY) return null;
        const list = getUnlockedList();
        if (!list.includes(inst)) return null;
        const next = order[idx + 1];
        if (list.includes(next)) return null;
        list.push(next);
        saveUnlockedList(list);
        refreshInstitutionLocks();
        if (typeof flashSaveStatus === "function") {
            flashSaveStatus("Yeni kurum açıldı: " + next);
        }
        return next;
    }

    function refreshInstitutionLocks() {
        const unlocked = new Set(getUnlockedList());
        document.querySelectorAll("#institutionScreen .institutionBtn").forEach((btn) => {
            const inst = btn.getAttribute("data-institution");
            const open = unlocked.has(inst);
            btn.classList.toggle("locked", !open);
            btn.disabled = false;
            btn.removeAttribute("disabled");
            btn.setAttribute("aria-disabled", open ? "false" : "true");
            let lock = btn.querySelector(".lockHint");
            if (!open) {
                if (!lock) {
                    lock = document.createElement("span");
                    lock.className = "lockHint";
                    btn.appendChild(lock);
                }
                const idx = INST_ORDER.indexOf(inst);
                const prev = idx > 0 ? INST_ORDER[idx - 1] : null;
                lock.textContent = prev
                    ? (prev + " sonrası · %" + UNLOCK_ACCURACY + "+ doğruluk")
                    : "Kilitli";
            } else if (lock) {
                lock.remove();
            }
        });
    }

    /* 3 — Gece / gündüz teması */
    function applyShiftTheme(forceShift) {
        const body = document.body;
        const instScreen = document.getElementById("institutionScreen");
        const onInst = instScreen && !instScreen.classList.contains("hidden");
        const sel = document.getElementById("shiftTypeSelect");
        const fromSelect = sel && sel.value === "day" ? "day" : (sel && sel.value === "night" ? "night" : null);

        let shift = forceShift || null;
        if (!shift && onInst && fromSelect) shift = fromSelect;
        if (!shift && window.game && game.shiftType) shift = game.shiftType;
        if (!shift) shift = "main";

        const night = shift === "night";
        const day = shift === "day";

        body.classList.remove("theme-main", "theme-day", "theme-night");
        if (night) body.classList.add("theme-night");
        else if (day) body.classList.add("theme-day");
        else body.classList.add("theme-main");

        body.classList.toggle("theme-night", night);
        body.classList.toggle("theme-day", day);

        body.classList.remove(
            "inst-Site", "inst-AVM", "inst-Fabrika", "inst-Banka", "inst-Belediye", "inst-Hastane", "inst-Havalimanı"
        );
        const inst = (window.game && game.institution) || "";
        if (inst) {
            body.classList.add("inst-" + inst);
            body.setAttribute("data-institution", inst);
        } else {
            body.removeAttribute("data-institution");
        }
        body.setAttribute("data-shift", night ? "night" : day ? "day" : "main");

        // Kurum seçim ipucu
        const hint = document.getElementById("shiftThemeHint");
        if (hint) {
            if (day) {
                hint.textContent = "Gündüz: açık alan · kalabalık ve kuyruk riski";
                hint.classList.remove("hidden", "hint-night");
                hint.classList.add("hint-day");
            } else if (night) {
                hint.textContent = "Gece: loş alan · az personel · yüksek dikkat";
                hint.classList.remove("hidden", "hint-day");
                hint.classList.add("hint-night");
            } else {
                hint.classList.add("hidden");
            }
        }
    }


    /* 4 — İpucu: para ile (100 ₺), soru başına 1 kez */
    const HINT_COST = 100;

    function getHintState() {
        // Geriye uyumluluk — günlük limit artık kullanılmıyor
        const s = loadJSON(HINT_KEY, null);
        const t = today();
        if (!s || s.date !== t) {
            const fresh = { date: t, used: 0, max: 99 };
            saveJSON(HINT_KEY, fresh);
            return fresh;
        }
        return s;
    }

    function hintAlreadyUsedThisQuestion() {
        return !!(window.game && game._hintUsedForCurrent);
    }

    function resetHintForNewQuestion() {
        if (window.game) game._hintUsedForCurrent = false;
        // Önceki sorudan soluk kalan şıkları temizleme nextEvent'te yapılır
        updateHintBtn();
    }

    function getGame() {
        if (typeof game !== "undefined" && game) return game;
        if (typeof window !== "undefined" && window.game) return window.game;
        return null;
    }

    function canUseHint() {
        const g = getGame();
        if (!g) return false;
        if (g._hintUsedForCurrent) return false;
        const money = Number(g.money);
        return (Number.isFinite(money) ? money : 0) >= HINT_COST;
    }

    function useHint() {
        const g = getGame();
        if (!g) return;
        try { window.game = g; } catch (e) {}
        if (g._hintUsedForCurrent) {
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("Bu soruda ipucu zaten kullanıldı.", true);
            }
            return;
        }
        const moneyRaw = Number(g.money);
        const money = Number.isFinite(moneyRaw) ? moneyRaw : 0;
        if (money < HINT_COST) {
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("İpucu için " + HINT_COST + " ₺ gerekli. Paran: " + money + " ₺", true);
            }
            updateHintBtn();
            return;
        }

        const area = $("choices");
        if (!area) return;
        const buttons = [...area.querySelectorAll(".choice")];
        if (buttons.length < 2) return;

        // Doğru şıkkı dataset.correct === "1" ile ayır
        let wrong = buttons.filter((b) => String(b.dataset.correct) !== "1");
        // Hiç işaret yoksa metinden dene
        if (wrong.length === buttons.length) {
            const ev = g.shiftDeck && g.shiftDeck[g.eventCount - 1];
            if (ev && Array.isArray(ev.choices)) {
                wrong = [];
                buttons.forEach((b) => {
                    const txt = ((b.querySelector(".choiceText") || b).textContent || "").replace(/^\d+\s*/, "").trim();
                    const match = ev.choices.find((c) => txt.indexOf(String(c.text || "").slice(0, 18)) !== -1);
                    if (match && match.correct) b.dataset.correct = "1";
                    else {
                        b.dataset.correct = "0";
                        wrong.push(b);
                    }
                });
            }
        }

        let hidden = 0;
        for (const b of wrong) {
            if (String(b.dataset.correct) === "1") continue;
            b.classList.add("hintFaded");
            b.disabled = true;
            hidden++;
            if (hidden >= 2) break;
        }
        if (hidden === 0) {
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("Bu soruda ipucu uygulanamadı.", true);
            }
            return;
        }

        g.money = Math.max(0, money - HINT_COST);
        g._hintUsedForCurrent = true;
        if (typeof updateUI === "function") updateUI();
        updateHintBtn();
        if (typeof flashSaveStatus === "function") {
            flashSaveStatus("İpucu kullanıldı (−" + HINT_COST + " ₺).");
        }
        if (typeof SFX !== "undefined") SFX.click();
    }

    function updateHintBtn() {
        const btn = $("hintBtn");
        if (!btn) return;
        const screen = $("gameScreen");
        if (screen && screen.classList.contains("hidden")) return;

        const g = getGame();
        if (!g) {
            btn.disabled = true;
            btn.classList.add("disabled");
            btn.textContent = "💡 İpucu · " + HINT_COST + " ₺";
            return;
        }
        // window.game senkron
        try { window.game = g; } catch (e) {}

        const money = Number(g.money);
        const cash = Number.isFinite(money) ? money : 0;
        const used = !!g._hintUsedForCurrent;
        const canPay = cash >= HINT_COST;
        const can = !used && canPay;

        if (used) {
            btn.textContent = "💡 İpucu kullanıldı";
            btn.title = "Bu soruda ipucu kullanıldı";
        } else {
            btn.textContent = "💡 İpucu · " + HINT_COST + " ₺";
            btn.title = canPay
                ? ("2 yanlış şıkkı eleyin (−" + HINT_COST + " ₺)")
                : ("Yetersiz para (" + cash + " ₺ / " + HINT_COST + " ₺)");
        }
        btn.disabled = !can;
        btn.classList.toggle("disabled", !can);
        btn.setAttribute("aria-disabled", can ? "false" : "true");
    }

    /* 9 — Kritik olay */
    function markCriticalInDeck() {
        if (!window.game || !game.shiftDeck || game.shiftDeck.length < 3) return;
        game.shiftDeck.forEach((e) => { if (e) e.critical = false; });
        // avoid last exam-only slot if possible
        const idx = Math.floor(Math.random() * Math.max(1, game.shiftDeck.length - 1));
        if (game.shiftDeck[idx]) {
            game.shiftDeck[idx].critical = true;
        }
    }

    function decorateCriticalUI(event) {
        const badge = $("criticalBadge");
        if (!badge) return;
        if (event && event.critical) {
            badge.classList.remove("hidden");
        } else {
            badge.classList.add("hidden");
        }
    }

    function scaleCriticalChoice(choice, event) {
        if (!event || !event.critical || !choice) return choice;
        const c = Object.assign({}, choice);
        if (c.correct) {
            c.score = Math.round((c.score || 0) * 1.5) + 5;
            c.reputation = Math.round((c.reputation || 0) * 1.3);
        } else {
            c.score = Math.round((c.score || 0) * 1.4) - 5;
            c.stress = Math.round((c.stress || 0) * 1.3) + 3;
            c.reputation = Math.round((c.reputation || 0) * 1.2);
        }
        return c;
    }

    /* 1 — Hızlı yeniden dene */
    function retrySameInstitution() {
        if (!window.game || !game.institution) {
            show("institutionScreen");
            return;
        }
        const inst = game.institution;
        const st = game.shiftType || "night";
        if (typeof hasSave === "function" && hasSave()) {
            const ok = confirm("Yeni deste eski kaydın üzerine yazılabilir. Devam?");
            if (!ok) return;
        }
        game.institution = inst;
        game.shiftType = st;
        if (typeof startShift === "function") startShift();
    }

    function bindV55() {

        // Vardiya select → anında tema
        const stSel = $("shiftTypeSelect");
        if (stSel && !stSel.__themeBound) {
            stSel.__themeBound = true;
            stSel.addEventListener("change", () => {
                const v = stSel.value === "day" ? "day" : "night";
                if (window.game) game.shiftType = v;
                applyShiftTheme(v);
            });
        }
        // Kurum ekranı açılınca
        if (typeof window.show === "function" && !window.show.__themeShift) {
            const _show = window.show;
            window.show = function (id) {
                const r = _show.apply(this, arguments);
                try {
                    if (id === "institutionScreen") {
                        const st = document.getElementById("shiftTypeSelect");
                        const v = st && st.value === "day" ? "day" : "night";
                        applyShiftTheme(v);
                    } else if (id === "menuScreen") {
                        applyShiftTheme("main");
                    }
                } catch (e) {}
                return r;
            };
            window.show.__themeShift = true;
        }

        refreshInstitutionLocks();
        updateHintBtn();

        $("hintBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            useHint();
        });

        $("retrySameBtn")?.addEventListener("click", () => {
            if (typeof SFX !== "undefined") SFX.click();
            retrySameInstitution();
        });

        // Patch buildShiftDeck mark critical
        if (typeof window.buildShiftDeck === "function" && !window.buildShiftDeck.__v55) {
            const orig = window.buildShiftDeck;
            window.buildShiftDeck = function (institution) {
                const r = orig.apply(this, arguments);
                try { markCriticalInDeck(); } catch (e) {}
                return r;
            };
            window.buildShiftDeck.__v55 = true;
        }

        // Patch nextEvent for critical badge + dataset on choices
        if (typeof window.nextEvent === "function" && !window.nextEvent.__v55) {
            const origN = window.nextEvent;
            window.nextEvent = function () {
                if (window.game) game._hintUsedForCurrent = false;
                origN.apply(this, arguments);
                try {
                    const ev = game.shiftDeck && game.shiftDeck[game.eventCount - 1];
                    decorateCriticalUI(ev);
                    // mark choice buttons correct flag for hint
                    const ev2 = ev;
                    if (ev2 && ev2.choices) {
                        const nodes = document.querySelectorAll("#choices .choice");
                        nodes.forEach((btn) => {
                            const raw = (btn.querySelector(".choiceText") || btn).textContent || "";
                            const text = raw.replace(/^\s*\d+[.)]?\s*/, "").trim();
                            const match = ev2.choices.find((c) => text.indexOf((c.text || "").slice(0, 18)) !== -1);
                            if (match && match.correct) btn.dataset.correct = "1";
                            else btn.dataset.correct = "0";
                        });
                    }
                    updateHintBtn();
                } catch (e) {}
            };
            window.nextEvent.__v55 = true;
        }

        // Patch selectChoice for critical scaling
        if (typeof window.selectChoice === "function" && !window.selectChoice.__v55) {
            const origS = window.selectChoice;
            window.selectChoice = function (button, choice, event) {
                let ch = choice;
                try {
                    const ev = event || (game.shiftDeck && game.shiftDeck[game.eventCount - 1]);
                    ch = scaleCriticalChoice(choice, ev);
                } catch (e) {}
                return origS.call(this, button, ch, event);
            };
            window.selectChoice.__v55 = true;
        }

        // Theme on start
        if (typeof window.startShift === "function" && !window.startShift.__v55) {
            const origStart = window.startShift;
            window.startShift = function () {
                if (window.game) game._hintUsedForCurrent = false;
                const r = origStart.apply(this, arguments);
                try {
                    applyShiftTheme();
                    updateHintBtn();
                } catch (e) {}
                return r;
            };
            window.startShift.__v55 = true;
        }

        // endShift bump count + unlock refresh
        if (typeof window.endShift === "function" && !window.endShift.__v55) {
            const origE = window.endShift;
            window.endShift = function () {
                origE.apply(this, arguments);
                try {
                    bumpShiftCount();
                    const acc = (window.game && game.eventCount)
                        ? Math.round((game.correctDecisions / game.eventCount) * 100)
                        : 0;
                    tryUnlockNextInstitution(game.institution, acc);
                    refreshInstitutionLocks();
                    applyShiftTheme();
                } catch (e) {}
            };
            window.endShift.__v55 = true;
        }

        // Block locked institutions at click (extra)
        const grid = document.querySelector("#institutionScreen .institutionGrid");
        if (grid && !grid.__v55lock) {
            grid.__v55lock = true;
            grid.addEventListener("click", (e) => {
                const btn = e.target.closest(".institutionBtn");
                if (!btn) return;
                const inst = btn.getAttribute("data-institution");
                if (inst && !isUnlocked(inst)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    const idx = INST_ORDER.indexOf(inst);
                    const prev = idx > 0 ? INST_ORDER[idx - 1] : "önceki kurum";
                    const msg = inst + " kilitli. " + prev + " vardiyasını %" + UNLOCK_ACCURACY + "+ doğrulukla bitir.";
                    if (typeof flashSaveStatus === "function") {
                        flashSaveStatus(msg, true);
                    } else {
                        alert(msg);
                    }
                }
            }, true);
        }

        // Institution screen open → refresh locks
        const obs = new MutationObserver(() => {
            const inst = $("institutionScreen");
            if (inst && !inst.classList.contains("hidden")) refreshInstitutionLocks();
        });
        const root = $("app") || document.body;
        obs.observe(root, { attributes: true, subtree: true, attributeFilter: ["class"] });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(bindV55, 0));
    } else {
        setTimeout(bindV55, 0);
    }

    window.FeaturesV55 = {
        updateHintBtn,
        isUnlocked,
        tryUnlockNextInstitution,
        INST_ORDER,
        refreshInstitutionLocks,
        applyShiftTheme,
        useHint,
        retrySameInstitution,
        isUnlocked
    };
})();

/* =========================================================
   v5.10 — 10 özellik paketi
   1 zincir 2 debrief 3 destek 4 kurum itibarı 5 sesli brifing
   6 arşiv 7 süre/zorluk 8 gri şık 9 düello 10 a11y 2.0
   ========================================================= */
(function FeaturesV510() {
    const CHAIN_KEY = "son_nobet_chain_v1";
    const ARCHIVE_KEY = "son_nobet_archive_v1";
    const INST_REP_KEY = "son_nobet_inst_rep_v1";
    const A11Y2_KEY = "son_nobet_a11y2_v1";
    const VOICE_KEY = "son_nobet_voice_brief_v1";

    const CHAIN_DEFS = [
        { id: "c1", label: "1 vardiya bitir", check: (s) => s.shifts >= 1 },
        { id: "c2", label: "2 vardiya bitir", check: (s) => s.shifts >= 2 },
        { id: "c3", label: "2 farklı kurum", check: (s) => Object.keys(s.inst || {}).length >= 2 },
        { id: "c4", label: "%80+ doğruluk", check: (s) => s.highAcc >= 1 },
        { id: "c5", label: "3 vardiya toplam", check: (s) => s.shifts >= 3 },
        { id: "c6", label: "3 farklı kurum", check: (s) => Object.keys(s.inst || {}).length >= 3 }
    ];

    function $(id) { return document.getElementById(id); }
    function loadJSON(k, fb) {
        try { return JSON.parse(localStorage.getItem(k) || "null") ?? fb; } catch (e) { return fb; }
    }
    function saveJSON(k, v) {
        try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
    }
    function weekId() {
        const d = new Date();
        const onejan = new Date(d.getFullYear(), 0, 1);
        const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
        return d.getFullYear() + "-W" + week;
    }
    function escape(s) {
        return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    }

    /* —— 1 Haftalık görev zinciri —— */
    function getChain() {
        const id = weekId();
        let c = loadJSON(CHAIN_KEY, null);
        if (!c || c.week !== id) {
            c = { week: id, shifts: 0, nights: 0, days: 0, highAcc: 0, inst: {}, done: [], claimed: false };
            saveJSON(CHAIN_KEY, c);
        }
        return c;
    }

    function updateChainOnEnd(acc) {
        if (!window.game) return;
        const c = getChain();
        c.shifts++;
        if (game.shiftType === "night") c.nights++;
        if (game.shiftType === "day") c.days++;
        if (acc >= 80) c.highAcc++;
        const inst = game.institution || "—";
        c.inst[inst] = (c.inst[inst] || 0) + 1;
        c.done = CHAIN_DEFS.filter((d) => d.check(c)).map((d) => d.id);
        if (c.done.length >= CHAIN_DEFS.length && !c.claimed) {
            c.claimed = true;
            if (window.Features) Features.unlockBadge("daily_done");
            if (typeof flashSaveStatus === "function") {
                flashSaveStatus("Haftalık görev zinciri tamam! +50 puan kaydı.");
            }
            try {
                const g = window.game;
                if (g) g.score = (g.score || 0) + 50;
            } catch (e) {}
        }
        saveJSON(CHAIN_KEY, c);
        renderChain();
    }

    function renderChain() {
        const c = getChain();
        const list = $("chainList");
        if (list) {
            if ($("chainWeekLabel")) $("chainWeekLabel").textContent = c.week;
            list.innerHTML = CHAIN_DEFS.map((d) => {
                const ok = c.done.includes(d.id);
                return `<div class="panelRow chainRow ${ok ? "on" : ""}">
                    <span class="panelRank">${ok ? "✓" : "○"}</span>
                    <span class="panelRowText"><strong>${escape(d.label)}</strong></span>
                    <span class="panelValue">${ok ? "Tamam" : "Açık"}</span>
                </div>`;
            }).join("");
        }
        const note = $("chainBonusNote");
        if (note) {
            note.textContent = c.claimed
                ? "Bu haftanın zinciri tamamlandı. Ödül işlendi."
                : (c.done.length + " / " + CHAIN_DEFS.length + " görev");
        }
    }

    /* —— 2 Debrief —— */
    function buildDebrief() {
        const box = $("debriefBox");
        if (!box || !window.game) return;
        const hist = game.eventHistory || [];
        const buckets = {};
        hist.forEach((h) => {
            const key = (h.zone || h.title || "Genel").toString().slice(0, 28);
            if (!buckets[key]) buckets[key] = { ok: 0, bad: 0 };
            if (h.correct) buckets[key].ok++;
            else buckets[key].bad++;
        });
        // also use qstats
        try {
            const qs = JSON.parse(localStorage.getItem("son_nobet_qstats_v1") || "{}");
            Object.keys(qs).forEach((k) => {
                const s = qs[k];
                if (!s.seen) return;
                const rate = s.correct / s.seen;
                if (rate < 0.5 && s.seen >= 1) {
                    const short = k.slice(0, 28);
                    if (!buckets[short]) buckets[short] = { ok: s.correct, bad: s.wrong };
                }
            });
        } catch (e) {}

        const weak = Object.entries(buckets)
            .map(([k, v]) => ({ k, bad: v.bad, ok: v.ok, rate: v.ok / Math.max(1, v.ok + v.bad) }))
            .filter((x) => x.bad > 0)
            .sort((a, b) => a.rate - b.rate)
            .slice(0, 3);

        if (!weak.length) {
            box.classList.add("hidden");
            return;
        }
        box.classList.remove("hidden");
        box.innerHTML =
            "<strong>Debrief — güçlendir</strong>" +
            weak.map((w) => `<div class="debriefRow">· ${escape(w.k)} <small>(${w.ok} doğru / ${w.bad} hata)</small></div>`).join("");
    }

    /* —— 3 Destek jetonu —— */
    let supportUsed = false;
    function resetSupport() {
        supportUsed = false;
        const btn = $("supportTokenBtn");
        if (btn) {
            btn.classList.add("hidden");
            btn.disabled = true;
        }
    }
    function useSupport() {
        if (supportUsed || !window.game) return;
        supportUsed = true;
        game.stress = Math.max(0, (game.stress || 0) - 8);
        game.securityRisk = Math.max(0, (game.securityRisk || 0) - 6);
        game.score = Math.max(0, (game.score || 0) - 5);
        if (typeof updateUI === "function") updateUI();
        if (typeof flashSaveStatus === "function") {
            flashSaveStatus("Destek çağrıldı: stres/risk düştü, −5 puan.");
        }
        const btn = $("supportTokenBtn");
        if (btn) {
            btn.disabled = true;
            btn.textContent = "📡 Destek kullanıldı";
            btn.classList.add("disabled");
        }
        if (typeof SFX !== "undefined") SFX.radio();
    }

    /* —— 4 Kurum itibarı —— */
    function getInstRep() {
        return loadJSON(INST_REP_KEY, {});
    }
    function bumpInstRep(inst, delta) {
        const r = getInstRep();
        r[inst] = Math.max(0, Math.min(100, (r[inst] || 50) + delta));
        saveJSON(INST_REP_KEY, r);
        return r[inst];
    }
    function renderInstRepStrip() {
        const el = $("instRepStrip");
        if (!el) return;
        const r = getInstRep();
        const names = ["Site", "AVM", "Fabrika", "Banka", "Belediye", "Hastane", "Havalimanı"];
        el.innerHTML = names.map((n) => {
            const v = r[n] ?? 50;
            return `<div class="instRepItem"><span>${n}</span><strong>${v}</strong></div>`;
        }).join("");
    }
    function applyInstRepOnEnd(acc) {
        if (!window.game || !game.institution) return;
        let d = 0;
        if (acc >= 80) d = 6;
        else if (acc >= 60) d = 2;
        else if (acc < 40) d = -5;
        else d = -1;
        bumpInstRep(game.institution, d);
        renderInstRepStrip();
    }
    // risk adjust from rep at start
    function applyInstRepToShift() {
        if (!window.game || !game.institution) return;
        const v = getInstRep()[game.institution] ?? 50;
        if (v < 35) {
            game.securityRisk = Math.min(100, (game.securityRisk || 20) + 8);
            game.pressure = Math.min(100, (game.pressure || 0) + 5);
        } else if (v >= 80) {
            game.securityRisk = Math.max(0, (game.securityRisk || 20) - 4);
        }
    }

    /* —— 5 Sesli brifing —— */
    function voiceBriefing(inst, shiftType) {
        const cfg = loadJSON(VOICE_KEY, { on: false });
        const toggle = $("voiceBriefToggle");
        const on = toggle ? toggle.checked : cfg.on;
        if (!on) return;
        const lines = {
            AVM: "AVM brifingi. Kalabalık ve sahipsiz eşyaya dikkat. Prosedürü bozma.",
            Hastane: "Hastane brifingi. Hasta güvenliği öncelik. Kısıtlı alanlara dikkat.",
            Fabrika: "Fabrika brifingi. İş güvenliği ve makine sahası riskleri yüksek.",
            Site: "Site brifingi. Giriş kontrolü ve gece misafirlerine dikkat.",
            Havalimanı: "Havalimanı brifingi. Yüksek prosedür. Bagaj ve kısıtlı alan kritik.",
            Banka: "Banka brifingi. Gişe, kasa dairesi ve alarm prosedürüne bağlı kal.",
            Belediye: "Belediye brifingi. Vatandaş yoğunluğu, belge ve kamu alanında yetki sınırına dikkat."
        };
        const text = (lines[inst] || "Vardiya brifingi. Telsiz açık, prosedür hazır.") +
            (shiftType === "day" ? " Gündüz vardiyası." : " Gece vardiyası.");
        try {
            if (!window.speechSynthesis) return;
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = "tr-TR";
            u.rate = 1.05;
            window.speechSynthesis.speak(u);
        } catch (e) {}
    }

    /* —— 6 Arşiv —— */
    function pushArchive(entry) {
        /* Arşiv kaldırıldı — no-op */
    }
    function renderArchive() {
        /* Arşiv kaldırıldı */
    }

    /* —— 7 Süre zorluk — systems timer patch —— */
    function patchTimerDifficulty() {
        if (typeof window.startEventTimer !== "function" && typeof startEventTimer !== "function") {
            // systems uses function startEventTimer - global
        }
        // Patch via systems - override after load
        if (window.__timerDiffPatched) return;
        window.__timerDiffPatched = true;
        const tryPatch = () => {
            // systems.js function is global in classic script
            if (typeof startEventTimer !== "function" || startEventTimer.__diff) return;
            const orig = startEventTimer;
            window.startEventTimer = function (event) {
                if (event && event.timed && window.game) {
                    const d = game.playerDifficulty || 1;
                    const base = event.timeLimit || 20;
                    event = Object.assign({}, event, {
                        timeLimit: Math.max(8, base - (d - 1) * 4)
                    });
                }
                return orig.call(this, event);
            };
            // also assign bare if needed
            try { startEventTimer = window.startEventTimer; } catch (e) {}
            window.startEventTimer.__diff = true;
        };
        tryPatch();
        setTimeout(tryPatch, 100);
        setTimeout(tryPatch, 500);
    }

    /* —— 8 Gri şık (savunulabilir) —— */
    function markDefensibleChoices() {
        if (!window.game || !game.shiftDeck) return;
        game.shiftDeck.forEach((ev) => {
            if (!ev || !ev.choices || ev.choices.length < 3) return;
            if (ev.choices.some((c) => c.defensible)) return;
            // second-best: highest score among incorrect
            let best = null;
            ev.choices.forEach((c) => {
                if (c.correct) return;
                if (!best || (c.score || 0) > (best.score || 0)) best = c;
            });
            if (best) {
                best.defensible = true;
                best.score = Math.max(best.score || 0, 2);
                best.reputation = Math.max(best.reputation || 0, 1);
                best.stress = Math.min(best.stress || 5, 4);
                best.message = (best.message || "") + " (Savunulabilir ama en doğru değil.)";
            }
        });
    }

    /* —— 9 Yerel düello —— */
    const Duel = {
        active: false,
        turn: 0, // 0 p1, 1 p2
        q: 0,
        deck: [],
        scores: [0, 0],
        names: ["", ""],
        start() {
            const p1 = ($("duelP1")?.value || "").trim() || "Oyuncu 1";
            const p2 = ($("duelP2")?.value || "").trim() || "Oyuncu 2";
            this.names = [p1, p2];
            this.scores = [0, 0];
            this.turn = 0;
            this.q = 0;
            this.deck = this.buildDeck();
            this.active = true;
            $("duelResult")?.classList.add("hidden");
            $("duelStatus")?.classList.remove("hidden");
            this.showQ();
        },
        buildDeck() {
            const out = [];
            try {
                if (typeof senaryoSoruBankasi !== "undefined") {
                    const inst = Object.keys(senaryoSoruBankasi);
                    const pick = inst[Math.floor(Math.random() * inst.length)];
                    const pack = senaryoSoruBankasi[pick];
                    const sid = Object.keys(pack)[0];
                    const qs = (pack[sid].questions || []).slice();
                    for (let i = qs.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [qs[i], qs[j]] = [qs[j], qs[i]];
                    }
                    return qs.slice(0, 5);
                }
            } catch (e) {}
            return [];
        },
        showQ() {
            const st = $("duelStatus");
            const ch = $("duelChoices");
            if (!st || !ch) return;
            if (this.q >= this.deck.length) {
                this.finish();
                return;
            }
            const q = this.deck[this.q];
            st.innerHTML = `<strong>${escape(this.names[this.turn])}</strong> · Soru ${this.q + 1}/5<br><span class="duelStem">${escape(q.stem)}</span>`;
            const opts = (q.options || []).map((t, i) => ({ t, i }));
            for (let i = opts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [opts[i], opts[j]] = [opts[j], opts[i]];
            }
            ch.innerHTML = opts.map((o) =>
                `<button type="button" class="choice duelChoice" data-i="${o.i}"><span class="choiceText">${escape(o.t)}</span></button>`
            ).join("");
            ch.querySelectorAll(".duelChoice").forEach((btn) => {
                btn.addEventListener("click", () => {
                    const idx = Number(btn.getAttribute("data-i"));
                    if (idx === q.correctIndex) this.scores[this.turn]++;
                    this.turn = this.turn === 0 ? 1 : 0;
                    if (this.turn === 0) this.q++;
                    this.showQ();
                });
            });
        },
        finish() {
            this.active = false;
            const ch = $("duelChoices");
            if (ch) ch.innerHTML = "";
            const st = $("duelStatus");
            if (st) st.classList.add("hidden");
            const res = $("duelResult");
            if (!res) return;
            res.classList.remove("hidden");
            const a = this.scores[0], b = this.scores[1];
            let msg = "Berabere!";
            if (a > b) msg = this.names[0] + " kazandı!";
            if (b > a) msg = this.names[1] + " kazandı!";
            res.innerHTML = `<strong>${escape(msg)}</strong><p>${escape(this.names[0])}: ${a}/5 · ${escape(this.names[1])}: ${b}/5</p>`;
        }
    };

    /* —— 10 A11y 2.0 —— */
    function loadA11y2() {
        return loadJSON(A11Y2_KEY, { colorblind: false, vibrate: true });
    }
    function applyA11y2(cfg) {
        document.documentElement.classList.toggle("a11y-colorblind", !!cfg.colorblind);
        document.documentElement.classList.toggle("a11y-numbers", true);
        if ($("a11yColorToggle")) $("a11yColorToggle").checked = !!cfg.colorblind;
        if ($("a11yVibrateToggle")) $("a11yVibrateToggle").checked = !!cfg.vibrate;
    }
    function saveA11y2() {
        const cfg = {
            colorblind: !!$("a11yColorToggle")?.checked,
            vibrate: !!$("a11yVibrateToggle")?.checked
        };
        saveJSON(A11Y2_KEY, cfg);
        applyA11y2(cfg);
    }
    function vibrateFeedback(ok) {
        const cfg = loadA11y2();
        if (!cfg.vibrate) return;
        try {
            if (navigator.vibrate) navigator.vibrate(ok ? [30] : [40, 40, 40]);
        } catch (e) {}
    }

    /* —— hooks —— */
    function onShiftEnd(acc, score) {
        updateChainOnEnd(acc);
        applyInstRepOnEnd(acc);
        buildDebrief();
        pushArchive({
            name: (window.game && game.playerName) || "Görevli",
            inst: (window.game && game.institution) || "—",
            shift: (window.game && game.shiftType === "day") ? "Gündüz" : "Gece",
            acc,
            score: score || (window.game && game.score) || 0,
            at: new Date().toLocaleString("tr-TR")
        });
    }

    function bind() {
        applyA11y2(loadA11y2());
        renderChain();
        renderInstRepStrip();
        patchTimerDifficulty();
        resetSupport();

        $("supportTokenBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            useSupport();
        });
        $("openChainBtn")?.addEventListener("click", () => {
            renderChain();
            const m = $("chainModal");
            if (m) { m.classList.remove("hidden"); m.style.display = "flex"; }
        });
        $("openDuelBtn")?.addEventListener("click", () => {
            const m = $("duelModal");
            if (m) { m.classList.remove("hidden"); m.style.display = "flex"; }
        });
        $("duelStartBtn")?.addEventListener("click", () => Duel.start());
        $("a11yColorToggle")?.addEventListener("change", saveA11y2);
        const tt = $("timerToggle");
        if (tt) {
            try { tt.checked = localStorage.getItem("son_nobet_timer_on") !== "0"; } catch (e) {}
            tt.addEventListener("change", () => {
                try { localStorage.setItem("son_nobet_timer_on", tt.checked ? "1" : "0"); } catch (e) {}
            });
        }

        $("a11yVibrateToggle")?.addEventListener("change", saveA11y2);
        // İlk giriş: titreşim açık (kayıt yoksa)
        try {
            const a11 = loadA11y2();
            if ($("a11yVibrateToggle")) $("a11yVibrateToggle").checked = a11.vibrate !== false;
        } catch (e) {}
        // Sesli brifing: varsayılan kapalı
        try {
            const vcfg = loadJSON(VOICE_KEY, { on: false });
            if ($("voiceBriefToggle")) $("voiceBriefToggle").checked = !!vcfg.on;
        } catch (e) {}
        $("voiceBriefToggle")?.addEventListener("change", () => {
            saveJSON(VOICE_KEY, { on: !!$("voiceBriefToggle")?.checked });
        });

        // briefing voice + inst rep on start
        if (typeof window.startShift === "function" && !window.startShift.__v510) {
            const orig = window.startShift;
            window.startShift = function () {
                const r = orig.apply(this, arguments);
                try {
                    resetSupport();
                    applyInstRepToShift();
                    markDefensibleChoices();
                    patchTimerDifficulty();
                    setTimeout(() => {
                        voiceBriefing(game.institution, game.shiftType);
                    }, 600);
                } catch (e) {}
                return r;
            };
            window.startShift.__v510 = true;
        }

        // vibrate on choice
        if (typeof window.selectChoice === "function" && !window.selectChoice.__v510) {
            const o = window.selectChoice;
            window.selectChoice = function (button, choice, event) {
                try { vibrateFeedback(!!(choice && choice.correct)); } catch (e) {}
                return o.apply(this, arguments);
            };
            window.selectChoice.__v510 = true;
        }

        // endShift
        if (typeof window.endShift === "function" && !window.endShift.__v510) {
            const oe = window.endShift;
            window.endShift = function () {
                oe.apply(this, arguments);
                try {
                    const acc = game.eventCount ? Math.round((game.correctDecisions / game.eventCount) * 100) : 0;
                    onShiftEnd(acc, game.score);
                } catch (e) {}
            };
            window.endShift.__v510 = true;
        }

        // also track event history correctness if missing
        if (typeof window.applyChoice === "function" && !window.applyChoice.__v510hist) {
            const oa = window.applyChoice;
            window.applyChoice = function (choice, event) {
                try {
                    if (window.game && event) {
                        game.eventHistory = game.eventHistory || [];
                        game.eventHistory.push({
                            title: event.title,
                            zone: event.zone,
                            correct: !!(choice && choice.correct)
                        });
                    }
                } catch (e) {}
                return oa.apply(this, arguments);
            };
            window.applyChoice.__v510hist = true;
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => setTimeout(bind, 0));
    } else {
        setTimeout(bind, 0);
    }

    window.FeaturesV510 = { renderChain, renderArchive, useSupport, Duel };
})();

/* zorluk drawer — chip = oyun seçenekleri stili */
(function difficultyDrawerLabel() {
    const HINTS = {
        "1": "Normal: dengeli süre ve ceza.",
        "2": "Zor: daha yüksek risk, stres ve süre baskısı.",
        "3": "Kritik: dar tolerans, kısa süre, sert ceza."
    };
    const MAP = { "1": "Normal", "2": "Zor", "3": "Kritik" };

    function apply(val) {
        const sel = document.getElementById("difficultySelect");
        const lab = document.getElementById("difficultySummaryValue");
        const hint = document.getElementById("difficultyHint");
        if (sel) {
            sel.value = val;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (lab) lab.textContent = MAP[val] || "Normal";
        if (hint) hint.textContent = HINTS[val] || HINTS["1"];
        if (window.game) game.playerDifficulty = Number(val) || 1;
    }

    function bind() {
        const chips = document.querySelectorAll('input[name="diffChip"]');
        if (!chips.length) return;
        chips.forEach((c) => {
            if (c.__diffBound) return;
            c.__diffBound = true;
            c.addEventListener("change", () => {
                if (c.checked) apply(c.value);
            });
        });
        const checked = document.querySelector('input[name="diffChip"]:checked');
        apply(checked ? checked.value : "1");
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
    else bind();
})();


/* Vardiya drawer — zorluk menüsü gibi */
(function shiftDrawerChips() {
    const MAP = { day: "Gündüz", night: "Gece" };
    function apply(val) {
        const sel = document.getElementById("shiftTypeSelect");
        const lab = document.getElementById("shiftSummaryValue");
        if (sel) {
            sel.value = val;
            sel.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (lab) lab.textContent = MAP[val] || "Gündüz";
        if (window.game) game.shiftType = val;
        try {
            if (window.FeaturesV55 && FeaturesV55.applyShiftTheme) {
                FeaturesV55.applyShiftTheme(val);
            }
        } catch (e) {}
    }
    function bind() {
        document.querySelectorAll('input[name="shiftChip"]').forEach((c) => {
            if (c.__shiftBound) return;
            c.__shiftBound = true;
            c.addEventListener("change", () => { if (c.checked) apply(c.value); });
        });
        const checked = document.querySelector('input[name="shiftChip"]:checked');
        if (checked) {
            const lab = document.getElementById("shiftSummaryValue");
            if (lab) lab.textContent = MAP[checked.value] || "Gündüz";
        }
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
    else bind();
})();
