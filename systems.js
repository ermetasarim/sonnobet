/* =========================================================
   SON NÖBET — GENİŞ SİSTEMLER
   Kariyer, ekip, harita, süre, hikâye, el kitabı, liderlik,
   senaryo, PWA, kamera, hava, envanter, NPC, kooperatif,
   prosedür, TTS, soruşturma finali, ending, istatistik, mod
   ========================================================= */

const LEADERBOARD_KEY = "security_game_leaderboard";
const CUSTOM_EVENTS_KEY = "security_game_custom_events";
const CAREER_KEY = "security_game_career";
const STATS_KEY = "security_game_lifetime_stats";

let activeTimer = null;
let timerSeconds = 0;
let careerContinue = false;
let currentEventRef = null;
let selectedCameraIndex = 0;
let cameraBonusUsed = false;

const INSTITUTION_ZONES = {
    Site: ["Site Girişi", "Otopark", "Çocuk Parkı", "Ortak Depo", "Asansör", "Jeneratör Odası"],
    AVM: ["Zemin Kat", "Yemek Katı", "Otopark", "Teknik Koridor", "Mağaza Caddesi", "Kasa Bölgesi"],
    Fabrika: ["Üretim Hattı", "Depo", "Yakıt Alanı", "Giriş Kapısı", "Kamera Odası", "Çatı Erişimi"],
    Banka: ["Gişe Holü", "Kasa Dairesi", "ATM Önü", "Arşiv Koridoru", "Müdürlük", "Personel Girişi"],
    Belediye: ["Gişe Holü", "Başkanlık Koridoru", "Arşiv", "Toplantı Salonu", "Bahçe / Meydan", "Personel Girişi"],
    Hastane: ["Acil Servis", "Koridor B", "İlaç Deposu", "Ameliyathane Yakını", "Giriş Holü", "Asansör Önü"],
    "Havalimanı": ["Terminal A", "Bagaj Bandı", "Pasaport Kuyruğu", "Kısıtlı Alan", "VIP Salon", "Pist Yakını"]
};

const WEATHERS = [
    { id: "clear", label: "Açık", risk: 0 },
    { id: "rain", label: "Yağmur", risk: 4 },
    { id: "storm", label: "Fırtına / elektrik riski", risk: 8 },
    { id: "crowded", label: "Yoğun gün", risk: 6 }
];

const HANDBOOK = [
    { id: "bag", title: "Sahipsiz Çanta / Paket", body: "1) Mesafeyi koru. 2) Açma/taşıma. 3) İzole et. 4) Bildir. 5) Kayıt tut." },
    { id: "fire", title: "Yangın Alarmı", body: "Alarmı kapatma. Bölgeyi doğrula. Gerçekse tahliye prosedürü. Arızada amire kayıt." },
    { id: "crowd", title: "Kalabalık / Kavga", body: "Tek başına fiziksel müdahale son çare. Konum doğrula, destek iste, mesafe koru." },
    { id: "id", title: "Kimlik ve Yetki", body: "Kart veya önlük yetki değildir. Liste ve kimlik doğrula. Şüphede üst birim." },
    { id: "medical", title: "Hassas Alan", body: "Hasta güvenliği öncelik. Kısıtlı alana refakatsiz giriş yok. Tehditte koordinasyon." },
    { id: "cam", title: "Kamera Kullanımı", body: "Önce ilgili kanalı izle. Kör noktada saha teyidi şart. Arızayı kaydet, yok sayma." }
];

function el(id) { return document.getElementById(id); }

function escapeHtml(s) {
    return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function speakRadio(text) {
    if (!game.ttsEnabled) return;
    try {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(String(text).replace(/^\s*/i, ""));
        u.lang = "tr-TR";
        u.rate = 1.05;
        u.pitch = 0.9;
        window.speechSynthesis.speak(u);
    } catch (e) {}
}

function pickWeather() {
    const roll = Math.random();
    if (roll > 0.82) return WEATHERS[3];
    if (roll > 0.64) return WEATHERS[2];
    if (roll > 0.40) return WEATHERS[1];
    return WEATHERS[0];
}

function applyWeatherToGame(w) {
    game.weather = w.id;
    game.securityRisk = Math.min(100, (game.securityRisk || 20) + w.risk);
    const weatherEl = el("weatherBadge");
    if (weatherEl) weatherEl.textContent = `Hava: ${w.label}`;
}

function loadCareerMeta() {
    try { return JSON.parse(localStorage.getItem(CAREER_KEY) || "null"); } catch (e) { return null; }
}

function saveCareerMeta() {
    try {
        localStorage.setItem(CAREER_KEY, JSON.stringify({
            careerShift: game.careerShift,
            lifetimeScore: game.lifetimeScore,
            storyFlags: game.storyFlags,
            storyStage: game.storyStage,
            playerName: game.playerName,
            rank: game.rank,
            money: game.money,
            reputation: Math.max(35, Math.min(70, game.reputation)),
            team: game.team,
            inventory: game.inventory,
            npcs: game.npcs,
            endingsUnlocked: game.endingsUnlocked,
            lifetimeStats: game.lifetimeStats
        }));
    } catch (e) {}
}

function loadCustomEvents() {
    try { return JSON.parse(localStorage.getItem(CUSTOM_EVENTS_KEY) || "[]"); } catch (e) { return []; }
}

function saveCustomEvents(list) {
    localStorage.setItem(CUSTOM_EVENTS_KEY, JSON.stringify(list));
}

function getLeaderboard() {
    try { return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]"); } catch (e) { return []; }
}

function pushLeaderboard(entry) {
    const list = getLeaderboard();
    list.push(entry);
    list.sort((a, b) => b.score - a.score);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(list.slice(0, 10)));
    renderLeaderboard();
    // Online liderlik (Supabase)
    try {
        if (window.SNSupabase && typeof SNSupabase.submitScore === "function") {
            const acc = entry.accuracy != null ? entry.accuracy : (
                (typeof game !== "undefined" && game.correctDecisions + game.wrongDecisions > 0)
                    ? Math.round((game.correctDecisions / (game.correctDecisions + game.wrongDecisions)) * 100)
                    : 0
            );
            SNSupabase.submitScore({
                name: entry.name,
                institution: entry.institution,
                score: entry.score,
                accuracy: acc,
                money: (typeof game !== "undefined" ? game.money : 0) || 0,
                rank: (typeof game !== "undefined" ? game.rank : "") || ""
            }).then((r) => {
                if (r && r.ok) renderLeaderboard(true);
            }).catch(() => {});
        }
    } catch (e) { console.warn(e); }
}

function renderLeaderboard(preferOnline) {
    const listEl = el("leaderboardList");
    if (!listEl) return;

    const paint = (list, online) => {
        if (!list || !list.length) {
            listEl.innerHTML = `<div class="panelTableEmpty">Henüz kayıt yok.</div>`;
            return;
        }
        listEl.innerHTML = list.map((row, i) =>
            `<div class="panelRow">
                <span class="panelRank">#${i + 1}</span>
                <span class="panelRowText">
                    <strong>${escapeHtml(row.name)}</strong>
                    <small>${escapeHtml(row.institution || "—")}${online ? " · Online" : " · V" + (row.shift || 1)}</small>
                </span>
                <span class="panelValue">${row.score}</span>
            </div>`
        ).join("");
    };

    // Önce yerel
    paint(getLeaderboard(), false);

    // Online varsa üzerine yaz
    try {
        if (window.SNSupabase && typeof SNSupabase.fetchTopScores === "function") {
            listEl.dataset.loading = "1";
            SNSupabase.fetchTopScores(20).then((rows) => {
                listEl.dataset.loading = "0";
                if (rows && rows.length) paint(rows, true);
            }).catch(() => { listEl.dataset.loading = "0"; });
        }
    } catch (e) {}
}

function renderMap(activeZone) {
    const map = el("zoneMap");
    if (!map) return;
    const zones = INSTITUTION_ZONES[game.institution] || ["Genel Alan"];
    map.innerHTML = zones.map(z =>
        `<div class="zoneCell ${z === activeZone ? "active" : ""}">${escapeHtml(z)}</div>`
    ).join("");
}

function renderTeam() {
    const teamEl = el("teamPanel");
    if (!teamEl || !game.team) return;
    teamEl.innerHTML = `
        <div class="teamMember"><span>🛡️</span><div><strong>Partner</strong><small>Güven ${game.team.partnerTrust}/100</small></div></div>
        <div class="teamMember"><span>🎓</span><div><strong>Stajyer</strong><small>${game.team.traineeReady ? "Hazır" : "Meşgul"}</small></div></div>
        <div class="teamMember"><span>📡</span><div><strong>Kontrol</strong><small>${game.coopMode ? "Koop açık" : "Standart"}</small></div></div>
    `;
}

function renderInventory() {
    const invEl = el("inventoryPanel");
    if (!invEl || !game.inventory) return;
    const inv = game.inventory;
    const items = [
        ["flashlight", "🔦 Fener", inv.flashlight],
        ["radio", "📻 Telsiz", inv.radio],
        ["vest", "🦺 Yelek", inv.vest],
        ["cameraAccess", "📷 Kamera", inv.cameraAccess],
        ["medkit", "🩹 Çanta", inv.medkit],
        ["masterKey", "🔑 Anahtar", inv.masterKey]
    ];
    invEl.innerHTML = items.map(([id, label, on]) =>
        `<span class="invItem ${on ? "on" : "off"}" title="${id}">${label}</span>`
    ).join("");
}

function renderCareerBadge() {
    const badgeEl = el("careerBadge");
    if (badgeEl) {
        badgeEl.textContent = `V${game.careerShift || 1}`;
        badgeEl.classList.add("hidden");
        badgeEl.setAttribute("hidden", "");
        badgeEl.setAttribute("aria-hidden", "true");
    }
}

function detectSceneType(event, channel) {
    const blob = `${event?.title || ""} ${event?.description || ""} ${channel?.feed || ""} ${channel?.label || ""}`.toLowerCase();
    if (/çanta|paket|bagaj|valiz/.test(blob)) return "bag";
    if (/yangın|alarm|duman/.test(blob)) return "alarm";
    if (/kavga|tartış|kalabalık/.test(blob)) return "crowd";
    if (/çocuk|kayıp/.test(blob)) return "child";
    if (/araç|otopark|forklift|sevkiyat/.test(blob)) return "vehicle";
    if (/kamera|kör|sinyal zayıf/.test(blob)) return "static";
    if (/asansör/.test(blob)) return "elevator";
    if (channel && channel.relevant === false) return "empty";
    return "person";
}

function buildCameraSceneSVG(scene, relevant) {
    // Gece görüşü / CCTV tarzı vektör sahne
    const accent = relevant ? "#4ade80" : "#166534";
    const dim = relevant ? 0.95 : 0.55;

    const bg = `
      <defs>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b1a12"/>
          <stop offset="100%" stop-color="#030806"/>
        </linearGradient>
        <radialGradient id="lamp" cx="50%" cy="10%" r="60%">
          <stop offset="0%" stop-color="#14532d" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill="url(#floor)"/>
      <rect width="400" height="220" fill="url(#lamp)"/>
      <path d="M0 150 L400 150" stroke="#14532d" stroke-width="1" opacity="0.5"/>
      <path d="M120 40 L120 150 M280 40 L280 150" stroke="#14532d" stroke-width="2" opacity="0.35"/>
      <path d="M0 40 L400 40" stroke="#166534" stroke-width="8" opacity="0.25"/>
    `;

    const person = `
      <g opacity="${dim}" transform="translate(200,118)">
        <circle cx="0" cy="-36" r="12" fill="${accent}"/>
        <path d="M0 -22 L0 18" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>
        <path d="M0 -8 L-18 8 M0 -8 L18 8" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
        <path d="M0 18 L-12 42 M0 18 L12 42" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
      </g>`;

    const bag = `
      <g opacity="${dim}" transform="translate(210,145)">
        <rect x="-18" y="-8" width="36" height="28" rx="4" fill="${accent}"/>
        <path d="M-10 -8 L-10 -16 L10 -16 L10 -8" stroke="${accent}" stroke-width="3" fill="none"/>
        <circle cx="-22" cy="0" r="3" fill="${accent}" opacity="0.7"/>
      </g>
      <g opacity="0.7" transform="translate(140,120) scale(0.7)">${person.replace(/translate\(200,118\)/, "")}</g>`;

    const crowd = `
      <g transform="translate(150,120) scale(0.85)">${person.replace(/translate\(200,118\)/, "")}</g>
      <g transform="translate(210,118)">${person.replace(/translate\(200,118\)/, "")}</g>
      <g transform="translate(270,122) scale(0.9)">${person.replace(/translate\(200,118\)/, "")}</g>
      <path d="M160 90 Q200 70 240 95" stroke="${accent}" stroke-width="2" fill="none" opacity="0.5"/>`;

    const child = `
      <g opacity="${dim}" transform="translate(200,130) scale(0.7)">
        <circle cx="0" cy="-28" r="10" fill="${accent}"/>
        <path d="M0 -16 L0 14" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>
        <path d="M0 -6 L-12 6 M0 -6 L12 6" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
        <path d="M0 14 L-8 32 M0 14 L8 32" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g opacity="0.45" transform="translate(300,115) scale(0.5)">${person.replace(/translate\(200,118\)/, "")}</g>`;

    const vehicle = `
      <g opacity="${dim}" transform="translate(200,140)">
        <rect x="-50" y="-18" width="100" height="36" rx="8" fill="${accent}"/>
        <rect x="10" y="-30" width="40" height="16" rx="4" fill="${accent}" opacity="0.85"/>
        <circle cx="-28" cy="20" r="10" fill="#052e16" stroke="${accent}" stroke-width="3"/>
        <circle cx="28" cy="20" r="10" fill="#052e16" stroke="${accent}" stroke-width="3"/>
      </g>`;

    const alarm = `
      <g opacity="${dim}">
        <circle cx="200" cy="70" r="16" fill="none" stroke="#f87171" stroke-width="3">
          <animate attributeName="r" values="14;22;14" dur="1.2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
        </circle>
        <path d="M200 55 L200 75 M190 80 L210 80" stroke="#f87171" stroke-width="3"/>
        ${person}
      </g>`;

    const elevator = `
      <rect x="150" y="50" width="100" height="120" fill="#04140c" stroke="${accent}" stroke-width="3"/>
      <path d="M200 50 L200 170" stroke="${accent}" stroke-width="2" opacity="0.6"/>
      <g transform="translate(200,130) scale(0.75)">${person.replace(/translate\(200,118\)/, "")}</g>`;

    const empty = `
      <path d="M40 160 Q120 140 200 155 Q280 170 360 150" stroke="#14532d" stroke-width="2" fill="none" opacity="0.4"/>
      <circle cx="320" cy="90" r="3" fill="${accent}" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
      </circle>`;

    const staticNoise = `
      <g opacity="0.35">
        ${Array.from({ length: 18 }, (_, i) =>
            `<rect x="${(i * 37) % 400}" y="${(i * 53) % 200}" width="${4 + (i % 5)}" height="${2 + (i % 3)}" fill="${accent}"/>`
        ).join("")}
      </g>
      <text x="200" y="110" text-anchor="middle" fill="${accent}" font-size="14" font-family="monospace">NO SIGNAL</text>`;

    const scenes = { person, bag, crowd, child, vehicle, alarm, elevator, empty, static: staticNoise };
    const content = scenes[scene] || person;

    return `<svg class="camScene" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${bg}${content}</svg>`;
}

function renderCamera(event) {
    const monitor = el("cameraMonitor");
    const channelsEl = el("cameraChannels");
    const feedEl = el("cameraFeedText");
    const metaEl = el("cameraMeta");
    if (!monitor || !event) return;

    if (!game.inventory?.cameraAccess || game.consequences?.cameraBroken) {
        monitor.classList.add("offline");
        if (feedEl) {
            feedEl.innerHTML = `
              <div class="camOffline">
                <div class="camOfflineIcon">📷</div>
                <p>${game.consequences?.cameraBroken
                    ? "KAMERA SİSTEMİ ARIZALI — saha teyidi zorunlu"
                    : "Kamera erişimi yok (envanter)"}</p>
              </div>`;
        }
        if (channelsEl) channelsEl.innerHTML = "";
        if (metaEl) metaEl.textContent = "OFFLINE";
        return;
    }

    monitor.classList.remove("offline");
    const channels = event.camera?.channels || [
        { id: "KAM-00", label: event.zone || "Genel", feed: event.description, clarity: "medium", relevant: true }
    ];
    selectedCameraIndex = Math.min(selectedCameraIndex, channels.length - 1);

    if (channelsEl) {
        channelsEl.innerHTML = channels.map((ch, i) =>
            `<button type="button" class="camCh ${i === selectedCameraIndex ? "active" : ""}" data-cam="${i}">${escapeHtml(ch.id)}</button>`
        ).join("");
        channelsEl.querySelectorAll(".camCh").forEach(btn => {
            btn.addEventListener("click", () => {
                selectedCameraIndex = Number(btn.dataset.cam);
                cameraBonusUsed = true;
                renderCamera(event);
                if (typeof SFX !== "undefined") {
                    if (SFX.camera) SFX.camera();
                    else SFX.click();
                }
                const ch = channels[selectedCameraIndex];
                if (ch?.relevant && el("radioMessage")) {
                    el("radioMessage").textContent = `${ch.id} ilgili kanal olabilir. Görüntüyü not et.`;
                    speakRadio(el("radioMessage").textContent);
                }
            });
        });
    }

    const ch = channels[selectedCameraIndex];
    monitor.classList.toggle("clarity-low", ch.clarity === "low");
    monitor.classList.toggle("clarity-medium", ch.clarity === "medium");
    monitor.classList.toggle("clarity-clear", ch.clarity === "clear");

    const scene = detectSceneType(event, ch);
    const svg = buildCameraSceneSVG(scene, !!ch.relevant);

    if (feedEl) {
        feedEl.innerHTML = `
          <div class="scanlines"></div>
          <div class="camNoise"></div>
          <div class="feedVisual">${svg}</div>
          <div class="feedHud">
            <div class="feedRec">● REC</div>
            <div class="feedStamp">${escapeHtml(ch.id)} · ${new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</div>
          </div>
          <p class="feedCaption">${escapeHtml(ch.feed)}</p>
        `;
    }
    if (metaEl) metaEl.textContent = `${ch.id} · ${ch.label} · ${String(ch.clarity || "medium").toUpperCase()}`;
}

function renderCoopHint(event) {
    const coopEl = el("coopHint");
    if (!coopEl) return;
    if (!game.coopMode) {
        coopEl.classList.add("hidden");
        return;
    }
    coopEl.classList.remove("hidden");
    const tips = [];
    if (event.timed) tips.push("Kontrol: Süre dar — destek birimini şimdiden hazırla.");
    if (event.camera?.channels?.some(c => c.relevant)) tips.push("Kontrol: İlgili kamerayı açtın mı?");
    if (String(event.title).match(/çanta|paket|bagaj|yangın|alarm/i)) tips.push("Kontrol: Prosedür kartını hatırlatıyorum.");
    if (!tips.length) tips.push("Kontrol: Gözlemliyorum. Acele karar önerme.");
    coopEl.textContent = tips[Math.floor(Math.random() * tips.length)];
}

function rememberNpc(event, choice) {
    if (!game.npcs) game.npcs = {};
    const title = event?.title || "";
    const key = title.slice(0, 24);
    if (!game.npcs[key]) {
        game.npcs[key] = { seen: 1, lastChoice: choice?.text || "", hostile: !choice?.correct };
    } else {
        game.npcs[key].seen += 1;
        game.npcs[key].lastChoice = choice?.text || "";
        if (!choice?.correct) game.npcs[key].hostile = true;
    }
}

function npcFlavor(event) {
    if (!game.npcs) return "";
    const hit = Object.entries(game.npcs).find(([k]) => event.title.includes(k.slice(0, 10)) || k.includes(event.title.slice(0, 10)));
    if (!hit) return "";
    const [name, data] = hit;
    if (data.seen >= 2) {
        return ` Bu profili daha önce not etmiştin (${data.seen}x).`;
    }
    return "";
}

function stopEventTimer() {
    if (activeTimer) clearInterval(activeTimer);
    activeTimer = null;
    const box = el("timerBox");
    if (box) box.classList.add("hidden");
}

function startEventTimer(event) {
    try {
        if (localStorage.getItem("son_nobet_timer_on") === "0") {
            stopEventTimer();
            const box = el("timerBox");
            if (box) box.classList.add("hidden");
            return;
        }
        const tt = el("timerToggle");
        if (tt && !tt.checked) {
            stopEventTimer();
            const box = el("timerBox");
            if (box) box.classList.add("hidden");
            return;
        }
    } catch (e) {}

    stopEventTimer();
    if (!event.timed) return;
    const limit = event.timeLimit || 20;
    // Zorluk: Normal 0, Zor -4sn, Kritik -8sn (+hava)
    const diffCut = Math.max(0, ((game.playerDifficulty || 1) - 1) * 4);
    timerSeconds = Math.max(8, limit - diffCut - (game.weather === "storm" ? 2 : 0));
    const box = el("timerBox");
    const label = el("timerValue");
    if (box) box.classList.remove("hidden");
    if (label) label.textContent = timerSeconds;
    activeTimer = setInterval(() => {
        timerSeconds -= 1;
        if (label) label.textContent = String(Math.max(0, timerSeconds));
        if (box) box.classList.toggle("urgent", timerSeconds <= 5);
        if (timerSeconds <= 5 && timerSeconds > 0 && typeof SFX !== "undefined" && SFX.tick) {
            SFX.tick();
        }
        if (timerSeconds <= 0) {
            if (typeof SFX !== "undefined" && SFX.alarm) SFX.alarm();

            stopEventTimer();
            game.lifetimeStats = game.lifetimeStats || {};
            game.lifetimeStats.timedFails = (game.lifetimeStats.timedFails || 0) + 1;
            autoFailTimedEvent(event);
        }
    }, 1000);
}

function autoFailTimedEvent(event) {
    const buttons = [...document.querySelectorAll("#choices .choice")];
    if (!buttons.length || buttons[0].disabled) return;
    let worst = event.choices[0];
    event.choices.forEach(ch => { if ((ch.score || 0) < (worst.score || 0)) worst = ch; });
    const btn = buttons.find(b => b.querySelector(".choiceText")?.textContent === worst.text) || buttons[buttons.length - 1];
    if (el("radioMessage")) {
        el("radioMessage").textContent = "Süre doldu.";
        el("radioMessage").classList.remove("hidden");
    }
    // Senaryo sorularında reklam ile tekrar hakkı
    if (event && event.scenarioQuestion && typeof offerRetryOrContinue === "function") {
        offerRetryOrContinue(event, worst, btn, "timeout");
        try { if (typeof SFX !== "undefined" && SFX.bad) SFX.bad(); } catch (e) {}
        return;
    }
    if (typeof selectChoice === "function") selectChoice(btn, worst, event);
    else btn.click();
}

function openModal(id) {
    const node = el(id);
    if (!node) {
        console.warn("Modal bulunamadı:", id);
        return;
    }
    node.classList.remove("hidden");
    node.style.display = "flex";
    node.style.zIndex = "5000";
    node.setAttribute("aria-hidden", "false");
    // Kartı görünür tut
    const card = node.querySelector(".modalCard");
    if (card) {
        card.style.display = "block";
        card.style.visibility = "visible";
    }
}
function closeModal(id) {
    const node = el(id);
    if (!node) return;
    node.classList.add("hidden");
    node.style.display = "none";
    node.setAttribute("aria-hidden", "true");
}

function renderHandbook() {
    const listEl = el("handbookList");
    if (!listEl) return;
    listEl.innerHTML = HANDBOOK.map(h =>
        `<article class="handCard"><h4>${escapeHtml(h.title)}</h4><p>${escapeHtml(h.body)}</p>
         <button type="button" class="miniSaveBtn handReadBtn" data-id="${h.id}">Okudum (+ipucu)</button></article>`
    ).join("");
    listEl.querySelectorAll(".handReadBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            game.handbookBonus = Math.min(3, (game.handbookBonus || 0) + 1);
            if (typeof SFX !== "undefined") SFX.click();
            if (typeof flashSaveStatus === "function") flashSaveStatus("Prosedür notu işlendi.");
            btn.disabled = true;
            btn.textContent = "İşlendi";
        });
    });
}

function getEnding() {
    const flags = game.storyFlags || {};
    const risk = game.securityRisk || 0;
    const acc = game.eventCount ? game.correctDecisions / game.eventCount : 0;
    if (flags.shadow_tracked || flags.infiltrator_caught || flags.cargo_blocked || flags.keys_secured || flags.bag_linked) {
        if (acc >= 0.8 && risk < 40) return { id: "hero", title: "Kahraman Gece", text: "Seri riskleri çözdün ve kurumu ayakta tuttun. Yönetim seni örnek gösteriyor." };
        return { id: "detective", title: "Sessiz Dedektif", text: "Hikâye izlerini doğru bağladın. Skandal büyümeden dosya kapandı." };
    }
    if (flags.shadow_ignored || flags.infiltrator_passed || flags.cargo_passed || flags.keys_lost || flags.bag_ignored) {
        return { id: "scandal", title: "Skandal Vardiya", text: "Göz ardı edilen izler büyüdü. Soruşturma masasında zor anlar seni bekliyor." };
    }
    if (risk >= 75 || (game.managementTrust || 50) < 30) {
        return { id: "fired", title: "İhraç Riski", text: "Güven eridi. Kariyerin sarsıldı; yeniden inşa uzun sürecek." };
    }
    if (acc >= 0.9 && (game.stress || 0) < 40) {
        return { id: "chief", title: "Şef Adayı", text: "Soğukkanlı ve prosedüre bağlı performans. Üst rütbe kapıda." };
    }
    if ((game.team?.partnerTrust || 0) >= 85) {
        return { id: "team", title: "Ekip Yıldızı", text: "Saha ve kontrol seni seviyor. Yalnız kahraman değil, sistem oyuncususun." };
    }
    return { id: "mixed", title: "Gri Dosya", text: "Ne tam kahramanlık ne felaket. Dosya açık kaldı; sonraki vardiyalar belirleyici olacak." };
}

function renderInvestigation(ending) {
    // Soruşturma Kurulu kaldırıldı
    const invBox = el("investigationBox");
    if (invBox) {
        invBox.classList.add("hidden");
        invBox.innerHTML = "";
    }
}

function renderStatsPanel() {
    const statsEl = el("statsPanelList");
    if (!statsEl) return;
    const g = (typeof game !== "undefined" && game) ? game : {};
    const st = g.lifetimeStats || {};
    const endings = g.endingsUnlocked || [];
    const rows = [
        ["Toplam vardiya", st.shifts || 0],
        ["Mükemmel vardiya", st.perfectShifts || 0],
        ["Süre aşımı", st.timedFails || 0],
        ["Hikâye adımı", st.storyBeats || 0],
        ["En iyi skor", st.bestScore || 0],
        ["Açılan sonlar", endings.length ? endings.join(", ") : "—"],
        ["NPC notu", Object.keys(g.npcs || {}).length]
    ];
    statsEl.innerHTML = rows.map(([label, val]) =>
        `<div class="panelRow">
            <span class="panelRowText"><strong>${escapeHtml(String(label))}</strong></span>
            <span class="panelValue">${escapeHtml(String(val))}</span>
        </div>`
    ).join("");
}

function applyCareerMetaToGame(meta) {
    if (!meta || typeof meta !== "object") return false;
    Object.assign(game, {
        playerName: meta.playerName || game.playerName,
        careerShift: meta.careerShift || 1,
        lifetimeScore: meta.lifetimeScore || 0,
        storyFlags: meta.storyFlags || {},
        storyStage: meta.storyStage || 0,
        rank: meta.rank || game.rank || "Aday Güvenlik",
        money: typeof meta.money === "number" ? meta.money : (game.money || 0),
        reputation: meta.reputation || 50,
        team: meta.team || game.team,
        inventory: meta.inventory || game.inventory,
        npcs: meta.npcs || {},
        endingsUnlocked: meta.endingsUnlocked || [],
        lifetimeStats: meta.lifetimeStats || game.lifetimeStats
    });
    if (el("playerName") && meta.playerName) el("playerName").value = meta.playerName;
    return true;
}

function refreshCareerMenuUI() {
    const meta = loadCareerMeta();
    const careerBtn = el("careerContinueBtn");
    const status = el("careerMenuStatus");
    const resetBtn = el("resetCareerBtn");
    if (meta && meta.playerName) {
        if (careerBtn) {
            careerBtn.disabled = false;
            careerBtn.classList.remove("hidden");
            const lab = el("careerContinueLabel");
            const txt = "KARİYERE DEVAM (V" + (meta.careerShift || 1) + ")";
            if (lab) lab.textContent = txt;
            else careerBtn.textContent = txt;
        }
        if (status) {
            status.classList.remove("hidden");
            status.textContent = "Kayıtlı kariyer: " + (meta.rank || "—") + " · V" + (meta.careerShift || 1) + " · " + (meta.playerName || "");
        }
        if (resetBtn) resetBtn.classList.remove("hidden");
    } else {
        if (careerBtn) {
            careerBtn.disabled = true;
            const lab = el("careerContinueLabel");
            if (lab) lab.textContent = "KARİYERE DEVAM";
            else careerBtn.textContent = "KARİYERE DEVAM";
        }
        if (status) {
            status.textContent = "Kayıtlı kariyer yok — BAŞLA ile yeni kariyer.";
            status.classList.remove("hidden");
        }
        if (resetBtn) resetBtn.classList.add("hidden");
    }
}

window.GameHooks = {
    preserveCareerOnStart() {
        return !!careerContinue;
    },

    setCareerContinue(v) {
        careerContinue = !!v;
    },

    /** Menü BAŞLA: kayıt varsa kariyeri yükle ve devam bayrağı aç */
    prepareStartFromMenu() {
        const meta = loadCareerMeta();
        if (meta && meta.playerName) {
            applyCareerMetaToGame(meta);
            careerContinue = true;
            return true;
        }
        careerContinue = false;
        return false;
    },

    resetCareer() {
        try { localStorage.removeItem(CAREER_KEY); } catch (e) {}
        careerContinue = false;
        if (window.game) {
            game.careerShift = 1;
            game.rank = "Aday Güvenlik";
            game.lifetimeScore = 0;
            game.storyFlags = {};
            game.storyStage = 0;
            game.endingsUnlocked = [];
        }
        refreshCareerMenuUI();
    },

    refreshCareerMenuUI,

    onStartShift() {
        stopEventTimer();
        cameraBonusUsed = false;
        selectedCameraIndex = 0;
        currentEventRef = null;

        if (!careerContinue) {
            // yeni kariyer başlangıcında hava seç
        }
        const w = pickWeather();
        applyWeatherToGame(w);

        if (game.procedureMode) {
            game.pressure = Math.min(100, (game.pressure || 0) + 5);
        }

        careerContinue = false;
        renderTeam();
        renderInventory();
        renderCareerBadge();
        renderMap(null);
        if (el("eventIcon")) el("eventIcon").textContent = "📡";
        if (el("procedureBadge")) {
            el("procedureBadge").classList.toggle("hidden", !game.procedureMode);
        }
        if (el("coopBadge")) {
            el("coopBadge").classList.toggle("hidden", !game.coopMode);
        }
    },

    augmentPool(pool) {
        const custom = loadCustomEvents().filter(e => !e.institution || e.institution === game.institution);
        return pool.concat(custom);
    },

    onEventPresented(event) {
        stopEventTimer();
        currentEventRef = event;
        selectedCameraIndex = 0;
        cameraBonusUsed = false;
        renderMap(event.zone || null);
        renderTeam();
        renderInventory();
        renderCareerBadge();
        renderCamera(event);
        renderCoopHint(event);

        if (el("eventIcon")) el("eventIcon").textContent = event.icon || "📡";
        if (el("eventZoneLabel")) {
            const z = event.zone || (window.game && (game.scenarioDesc || game.scenarioTitle)) || "";
            el("eventZoneLabel").textContent = z ? `Senaryo: ${z}` : "";
        }
        if (el("shiftTypeDisplay") && typeof formatShiftDisplay === "function") {
            el("shiftTypeDisplay").textContent = formatShiftDisplay(event.shiftType || game.shiftType || "day");
        }

        if (el("radioMessage")) {
            el("radioMessage").textContent = "";
            el("radioMessage").classList.add("hidden");
        }
        // İpucu yok — oyuncu kendi kararını verir
        if (game.ttsEnabled && event.description) {
            speakRadio(event.description);
        }

        if (event.story && el("storyTag")) {
            el("storyTag").classList.remove("hidden");
        } else if (el("storyTag")) {
            el("storyTag").classList.add("hidden");
        }

        // Envanter kilidi: fener yoksa gece tek başına seçenekleri zorlaştır — bilgilendirme
        if (!game.inventory?.flashlight && /gece|karanlık/i.test(event.title + event.description)) {
            if (el("radioMessage")) el("radioMessage").textContent += " Fenerin yok; karanlık alan riskli.";
        }

        startEventTimer(event);
    },

    onApplyChoice(choice, event) {
        stopEventTimer();
        rememberNpc(event, choice);

        if (game.team) {
            const t = String(choice.text || "").toLowerCase();
            if (t.includes("destek") || t.includes("bildir") || t.includes("koordin")) {
                game.team.partnerTrust = Math.min(100, game.team.partnerTrust + 3);
            }
            if (t.includes("tek başına")) {
                game.team.partnerTrust = Math.max(0, game.team.partnerTrust - 4);
                game.team.traineeReady = false;
            }
            if (choice.correct && game.team.partnerTrust >= 70) {
                game.stress = Math.max(0, game.stress - 1);
            }
        }

        // Kamera bonusu
        if (choice.correct && cameraBonusUsed) {
            game.score += 2;
            game.managementTrust = Math.min(100, (game.managementTrust || 50) + 1);
        }

        // Prosedür modu cezası/ödülü
        if (game.procedureMode) {
            if (choice.correct) game.score += 3;
            else {
                game.score -= 4;
                game.reputation = Math.max(0, game.reputation - 2);
            }
        }

        // Hikâye
        if (choice.storyFlag) {
            game.lifetimeStats = game.lifetimeStats || {};
            game.lifetimeStats.storyBeats = (game.lifetimeStats.storyBeats || 0) + 1;
            if (el("radioMessage")) {
                el("radioMessage").textContent = "Bu karar uzun vadeli dosyaya işlendi.";
                speakRadio(el("radioMessage").textContent);
            }
        }

        // Rastgele ekipman ödülü
        if (choice.correct && Math.random() < 0.12) {
            if (!game.inventory.medkit) {
                game.inventory.medkit = true;
                if (typeof flashSaveStatus === "function") flashSaveStatus("Envanter: İlk yardım çantası bulundu.");
            } else if (!game.inventory.masterKey) {
                game.inventory.masterKey = true;
                if (typeof flashSaveStatus === "function") flashSaveStatus("Envanter: Yetkili anahtar teslim edildi.");
            }
        }

        renderTeam();
        renderInventory();
        if (typeof saveShift === "function") saveShift(false);
        saveCareerMeta();
    },

    onEndShift() {
        stopEventTimer();
        game.lifetimeScore = (game.lifetimeScore || 0) + (game.score || 0);
        game.lifetimeStats = game.lifetimeStats || {};
        game.lifetimeStats.shifts = (game.lifetimeStats.shifts || 0) + 1;
        if ((game.wrongDecisions || 0) === 0 && (game.correctDecisions || 0) >= 8) {
            game.lifetimeStats.perfectShifts = (game.lifetimeStats.perfectShifts || 0) + 1;
        }
        game.lifetimeStats.bestScore = Math.max(game.lifetimeStats.bestScore || 0, game.score || 0);

        const ending = getEnding();
        if (!game.endingsUnlocked) game.endingsUnlocked = [];
        if (!game.endingsUnlocked.includes(ending.id)) game.endingsUnlocked.push(ending.id);

        saveCareerMeta();
        try { refreshCareerMenuUI(); } catch (e) {}
        pushLeaderboard({
            name: game.playerName || "Görevli",
            institution: game.institution || "-",
            score: game.score || 0,
            shift: game.careerShift || 1,
            at: new Date().toISOString()
        });

        renderInvestigation(ending);

        try {
            if (window.Features && typeof Features.shareReport === "function") {
                /* features.js endShift patch handles daily/badges */
            }
        } catch (e) {}

        const cont = el("continueCareerBtn");
        if (cont) {
            cont.classList.remove("hidden");
            cont.onclick = () => {
                careerContinue = true;
                game.careerShift = (game.careerShift || 1) + 1;
                game.money = Math.max(0, game.money);
                game.reputation = Math.max(30, Math.min(75, 40 + Math.round(game.reputation * 0.3)));
                game.stress = Math.min(25, Math.round(game.stress * 0.3));
                game.securityRisk = Math.min(40, 15 + Math.round((game.securityRisk || 0) * 0.25));
                game.storyStage = (game.storyStage || 0) + (Object.keys(game.storyFlags || {}).length ? 1 : 0);
                saveCareerMeta();
                if (typeof SFX !== "undefined") SFX.click();
                el("eventArea")?.classList.remove("hidden");
                el("reportArea")?.classList.add("hidden");
                el("investigationBox")?.classList.add("hidden");
                if (typeof hideChoiceFeedback === "function") hideChoiceFeedback();
                const kept = {
                    rank: game.rank, money: game.money, reputation: game.reputation,
                    storyFlags: { ...game.storyFlags }, storyStage: game.storyStage,
                    team: { ...game.team }, inventory: { ...game.inventory },
                    npcs: { ...game.npcs }, careerShift: game.careerShift,
                    lifetimeScore: game.lifetimeScore, lifetimeStats: { ...game.lifetimeStats },
                    endingsUnlocked: [...(game.endingsUnlocked || [])],
                    procedureMode: game.procedureMode, coopMode: game.coopMode, ttsEnabled: game.ttsEnabled
                };
                if (typeof startShift === "function") startShift();
                Object.assign(game, kept);
                if (el("rankDisplay")) el("rankDisplay").textContent = game.rank;
                if (typeof updateUI === "function") updateUI();
                renderCareerBadge();
                renderTeam();
                renderInventory();
                if (el("radioMessage")) {
                    el("radioMessage").textContent = `Kariyer vardiyası ${game.careerShift} başladı.`;
                    speakRadio(el("radioMessage").textContent);
                }
            };
        }
    }
};

function bindSystemsUI() {
    renderLeaderboard();
    renderHandbook();
    renderStatsPanel();

    // Mode toggles on menu
    const proc = el("procedureModeToggle");
    if (proc) {
        proc.addEventListener("change", () => {
            game.procedureMode = proc.checked;
        });
    }
    const coop = el("coopModeToggle");
    if (coop) {
        coop.addEventListener("change", () => {
            game.coopMode = coop.checked;
        });
    }
    const tts = el("ttsToggle");
    if (tts) {
        tts.addEventListener("change", () => {
            game.ttsEnabled = tts.checked;
            if (game.ttsEnabled) speakRadio("Sesli okuma açık.");
        });
    }

    function wire(id, fn) {
        const node = el(id);
        if (!node) {
            console.warn("Buton yok:", id);
            return;
        }
        node.addEventListener("click", (e) => {
            e.preventDefault();
            fn();
        });
    }

    wire("openLeaderboardBtn", () => {
        renderLeaderboard();
        openModal("leaderboardModal");
    });
    wire("openStatsBtn", () => {
        renderStatsPanel();
        openModal("statsModal");
    });

    document.querySelectorAll("[data-close-modal]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal(btn.getAttribute("data-close-modal"));
        });
    });

    // Backdrop tıklayınca kapat
    ["leaderboardModal", "statsModal"].forEach(id => {
        const modal = el(id);
        if (!modal) return;
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal(id);
        });
    });

    // Scenario editor + export pack



    // Career continue + menu status
    refreshCareerMenuUI();
    const careerBtn = el("careerContinueBtn");
    if (careerBtn && !careerBtn.__careerBound) {
        careerBtn.__careerBound = true;
        careerBtn.addEventListener("click", () => {
            const meta = loadCareerMeta();
            if (!meta) {
                if (typeof flashSaveStatus === "function") flashSaveStatus("Kayıtlı kariyer yok.", true);
                return;
            }
            careerContinue = true;
            applyCareerMetaToGame(meta);
            if (typeof SFX !== "undefined") SFX.click();
            if (typeof show === "function") show("institutionScreen");
        });
    }
    const resetBtn = el("resetCareerBtn");
    if (resetBtn && !resetBtn.__careerBound) {
        resetBtn.__careerBound = true;
        resetBtn.addEventListener("click", () => {
            if (!loadCareerMeta()) return;
            if (!confirm("Kariyer sıfırlansın mı? Rütbe ve vardiya ilerlemesi silinir.")) return;
            window.GameHooks.resetCareer();
            if (typeof SFX !== "undefined") SFX.click();
            if (typeof flashSaveStatus === "function") flashSaveStatus("Kariyer sıfırlandı.");
        });
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
}

window.openModal = openModal;
window.closeModal = closeModal;
window.renderHandbook = renderHandbook;
window.renderLeaderboard = renderLeaderboard;
window.renderStatsPanel = renderStatsPanel;

function ensureSystemsButtons() {
    const pairs = [
        ["openLeaderboardBtn", () => { renderLeaderboard(); openModal("leaderboardModal"); }],
        ["openStatsBtn", () => { renderStatsPanel(); openModal("statsModal"); }]
    ];
    pairs.forEach(([id, fn]) => {
        const node = el(id);
        if (!node || node.__systemsBound) return;
        node.__systemsBound = true;
        node.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            try { fn(); } catch (err) { console.error(id, err); alert("Panel açılamadı: " + err.message); }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { bindSystemsUI(); ensureSystemsButtons(); });
} else {
    bindSystemsUI();
    ensureSystemsButtons();
}
// Geç yükleme güvencesi
setTimeout(ensureSystemsButtons, 100);
setTimeout(ensureSystemsButtons, 500);

