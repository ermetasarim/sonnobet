let game = {
    playerName: "",
    institution: "",
    score: 0,
    reputation: 50,
    stress: 0,
    money: 0,
    eventCount: 0,
    shiftHour: 22,
    rank: "Aday Güvenlik",
    correctDecisions: 0,
    wrongDecisions: 0,
    pressure: 0,
    consecutiveGood: 0,
    consecutiveBad: 0,
    unresolvedRisk: 0,
    flags: {},
    lastEventTitle: "",
    managementTrust: 50,
    publicTrust: 50,
    teamTrust: 50,
    securityRisk: 20,
    decisionProfile: {
        safety: 0,
        speed: 0,
        empathy: 0,
        procedure: 0
    },
    difficulty: 1,
    achievements: [],
    momentum: 0,
    eventHistory: [],
    soundEnabled: true,
    playerDifficulty: 1,
    consequences: {
        alarmIgnored: false,
        cameraBroken: false,
        visitorConflict: false,
        missingPerson: false,
        suspiciousPackage: false,
        staffConflict: false
    },
    // Kariyer / hikâye / ekip
    careerShift: 1,
    lifetimeScore: 0,
    storyFlags: {},
    storyStage: 0,
    handbookBonus: 0,
    team: {
        partner: true,
        trainee: true,
        partnerTrust: 60,
        traineeReady: true
    },
    // Geniş sistemler
    procedureMode: false,
    coopMode: false,
    weather: "clear",
    inventory: {
        flashlight: true,
        radio: true,
        vest: true,
        cameraAccess: true,
        medkit: false,
        masterKey: false
    },
    npcs: {},
    lifetimeStats: {
        shifts: 0,
        perfectShifts: 0,
        timedFails: 0,
        storyBeats: 0,
        bestScore: 0
    },
    endingsUnlocked: [],
    ttsEnabled: false
};

const SHIFT_LENGTH = 10;

const PACK_NAMES = ["Rutin Gece", "Yüksek Alarm", "Karma / Hikâye"];

const ranks = [
    { name: "Aday Güvenlik", required: 0 },
    { name: "Güvenlik Görevlisi", required: 50 },
    { name: "Kıdemli Güvenlik", required: 120 },
    { name: "Vardiya Amiri", required: 220 },
    { name: "Güvenlik Şefi", required: 350 }
];


/* =========================================================
   SES MOTORU (Web Audio — harici dosya gerekmez)
   ========================================================= */

const SFX = (() => {
    let ctx = null;
    let master = null;
    let musicNodes = [];
    let musicOn = true;
    let musicPlaying = false;
    let musicGain = null;
    let sfxGain = null;
    let musicAudio = null; // HTMLAudioElement — music.mp3

    function ensure() {
        if (!ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return null;
            ctx = new AC();
            master = ctx.createGain();
            master.gain.value = 0.9;
            master.connect(ctx.destination);
            sfxGain = ctx.createGain();
            sfxGain.gain.value = 0.55;
            sfxGain.connect(master);
            musicGain = ctx.createGain();
            musicGain.gain.value = 0.06;
            musicGain.connect(master);
        }
        if (ctx.state === "suspended") {
            ctx.resume().catch(() => {});
        }
        return ctx;
    }

    function tone(freq, duration, type, gain, delay, dest) {
        if (!game.soundEnabled && dest !== "music") return;
        const c = ensure();
        if (!c) return;
        const t0 = c.currentTime + (delay || 0);
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = type || "sine";
        osc.frequency.setValueAtTime(freq, t0);
        const peak = Math.max(0.0001, gain || 0.06);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(peak, t0 + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
        osc.connect(g);
        g.connect(dest === "music" ? musicGain : sfxGain);
        osc.start(t0);
        osc.stop(t0 + duration + 0.03);
    }

    function noiseBurst(duration, gain, freq) {
        if (!game.soundEnabled) return;
        const c = ensure();
        if (!c) return;
        const len = Math.floor(c.sampleRate * duration);
        const buffer = c.createBuffer(1, len, c.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < len; i++) {
            data[i] = (Math.random() * 2 - 1) * (1 - i / len);
        }
        const src = c.createBufferSource();
        const g = c.createGain();
        const filter = c.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = freq || 1400;
        filter.Q.value = 0.8;
        src.buffer = buffer;
        g.gain.value = gain || 0.04;
        src.connect(filter);
        filter.connect(g);
        g.connect(sfxGain);
        src.start();
    }

    function stopMusicInternal() {
        musicNodes.forEach(n => {
            try { n.stop(); } catch (e) {}
            try { n.disconnect(); } catch (e) {}
        });
        musicNodes = [];
        if (musicAudio) {
            try {
                musicAudio.pause();
                musicAudio.currentTime = 0;
            } catch (e) {}
        }
        musicPlaying = false;
    }

    function startMusic() {
        if (!musicOn) return;
        const c = ensure();
        if (c) c.resume().catch(() => {});

        // Eski prosedürel müzik varsa kapat — sadece music.mp3
        if (musicNodes.length) {
            musicNodes.forEach(n => {
                try { n.stop(); } catch (e) {}
                try { n.disconnect(); } catch (e) {}
            });
            musicNodes = [];
        }

        if (musicAudio && !musicAudio.paused) {
            musicPlaying = true;
            return;
        }

        try {
            if (!musicAudio) {
                musicAudio = new Audio("music.mp3");
                musicAudio.loop = true;
                musicAudio.preload = "auto";
                musicAudio.volume = 0.35;
            }
            const playPromise = musicAudio.play();
            if (playPromise && typeof playPromise.then === "function") {
                playPromise.then(() => {
                    musicPlaying = true;
                }).catch(() => {
                    // Autoplay engeli — ilk tıklamada tekrar denenecek
                    musicPlaying = false;
                });
            } else {
                musicPlaying = true;
            }
            if (!musicAudio.paused) musicPlaying = true;
        } catch (e) {
            musicPlaying = false;
            console.warn("music.mp3 çalınamadı:", e);
        }
    }

    return {
        unlock() {
            const c = ensure();
            if (c) c.resume().catch(() => {});
            if (musicOn) startMusic();
        },
        click() {
            tone(660, 0.05, "square", 0.035);
        },
        radio() {
            noiseBurst(0.12, 0.03, 1100);
            tone(880, 0.04, "sine", 0.025, 0.04);
        },
        good() {
            tone(523, 0.08, "sine", 0.05);
            tone(659, 0.1, "sine", 0.045, 0.07);
            tone(784, 0.12, "sine", 0.04, 0.14);
        },
        bad() {
            tone(180, 0.14, "sawtooth", 0.045);
            tone(140, 0.16, "sawtooth", 0.035, 0.1);
        },
        alarm() {
            tone(880, 0.08, "square", 0.04);
            tone(660, 0.08, "square", 0.04, 0.09);
            tone(880, 0.08, "square", 0.04, 0.18);
        },
        camera() {
            noiseBurst(0.06, 0.025, 2200);
            tone(1200, 0.04, "sine", 0.02);
        },
        tick() {
            tone(900, 0.025, "square", 0.02);
        },
        save() {
            tone(440, 0.05, "triangle", 0.03);
            tone(660, 0.07, "triangle", 0.025, 0.05);
        },
        whoosh() {
            noiseBurst(0.1, 0.02, 600);
        },
        shiftStart() {
            tone(392, 0.1, "triangle", 0.04);
            tone(523, 0.12, "triangle", 0.035, 0.1);
            tone(659, 0.14, "triangle", 0.03, 0.2);
            startMusic();
        },
        rankUp() {
            tone(523, 0.08, "square", 0.035);
            tone(659, 0.08, "square", 0.035, 0.08);
            tone(784, 0.08, "square", 0.035, 0.16);
            tone(1046, 0.14, "square", 0.03, 0.24);
        },
        endShift() {
            tone(440, 0.12, "triangle", 0.04);
            tone(349, 0.14, "triangle", 0.035, 0.12);
            tone(262, 0.2, "triangle", 0.03, 0.26);
        },
        achievement() {
            tone(660, 0.06, "sine", 0.035);
            tone(880, 0.08, "sine", 0.03, 0.06);
            tone(1320, 0.1, "sine", 0.025, 0.12);
        },
        toggle() {
            game.soundEnabled = !game.soundEnabled;
            if (game.soundEnabled) this.click();
            return game.soundEnabled;
        },
        toggleMusic() {
            musicOn = !musicOn;
            if (musicOn) {
                ensure();
                stopMusicInternal();
                startMusic();
            } else {
                stopMusicInternal();
            }
            return musicOn;
        },
        isMusicOn() { return musicOn; },
        startMusic,
        stopMusic: stopMusicInternal
    };
})();


/* =========================================================
   OYUNU BAŞLAT
   ========================================================= */

const $ = id => document.getElementById(id);

function clearRadio() {
    const r = $("radioMessage");
    if (!r) return;
    r.textContent = "";
    r.classList.add("hidden");
    r.setAttribute("aria-hidden", "true");
}



/* Sayfa açılınca müziği başlat; tarayıcı engellerse ilk tıklamada sürdür */

/* Dikey oynanış tercihi (destekleyen tarayıcılarda) */
(function lockPortrait() {
    try {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("portrait").catch(() => {});
        }
    } catch (e) {}
})();

(function bootMusic() {
    function tryStart() {
        if (typeof SFX !== "undefined") {
            SFX.unlock();
            SFX.startMusic();
        }
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", tryStart);
    } else {
        tryStart();
    }
    // Autoplay politikası: ilk jestte garantile
    const once = () => {
        tryStart();
        document.removeEventListener("pointerdown", once, true);
        document.removeEventListener("keydown", once, true);
        document.removeEventListener("touchstart", once, true);
    };
    document.addEventListener("pointerdown", once, true);
    document.addEventListener("keydown", once, true);
    document.addEventListener("touchstart", once, true);
})();

function show(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    $(id).classList.remove("hidden");
}


/* =========================================================
   BAŞLA BUTONU
   ========================================================= */

$("startBtn").addEventListener("click", () => {

    const name = ($("playerName").value || "").trim();

    if (!name) {
        alert("Önce adını gir.");
        return;
    }


    try { SFX.unlock(); } catch (e) {}
    try { SFX.click(); } catch (e) {}
    try { SFX.startMusic(); } catch (e) {}

    game.playerName = name;

    const diffEl = $("difficultySelect");
    game.playerDifficulty = diffEl ? Number(diffEl.value) || 1 : 1;

    show("institutionScreen");
});

const soundToggleBtn = $("soundToggleBtn");

if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
        const on = SFX.toggle();
        soundToggleBtn.textContent = on ? "Efekt: Açık" : "Efekt: Kapalı";
        soundToggleBtn.classList.toggle("muted", !on);
    });
}

const musicToggleBtn = $("musicToggleBtn");
if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
        SFX.unlock();
        const on = SFX.toggleMusic();
        musicToggleBtn.textContent = on ? "Müzik: Açık" : "Müzik: Kapalı";
        musicToggleBtn.classList.toggle("muted", !on);
    });
}

const continueBtn = $("continueBtn");
if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        resumeFromSave();
    });
}

const deleteSaveBtn = $("deleteSaveBtn");
if (deleteSaveBtn) {
    deleteSaveBtn.addEventListener("click", () => {
        if (!hasSave()) {
            flashSaveStatus("Silinecek kayıt yok.");
            return;
        }
        if (confirm("Kayıtlı vardiya silinsin mi?")) {
            deleteSave();
            SFX.click();
        }
    });
}

const exportSaveBtn = $("exportSaveBtn");
if (exportSaveBtn) {
    exportSaveBtn.addEventListener("click", () => {
        if (!hasSave() && !game.institution) {
            // anlık oyun yoksa ve kayıt yoksa
            if (!hasSave()) {
                flashSaveStatus("Aktarılacak kayıt yok.", true);
                return;
            }
        }
        // aktif oyun varsa önce kaydet
        if (game.institution) {
            saveShift(false);
        }
        exportSaveFile();
    });
}

const importSaveInput = $("importSaveInput");
if (importSaveInput) {
    importSaveInput.addEventListener("change", () => {
        const file = importSaveInput.files && importSaveInput.files[0];
        if (file) {
            importSaveFile(file);
            importSaveInput.value = "";
        }
    });
}

const manualSaveBtn = $("manualSaveBtn");
if (manualSaveBtn) {
    manualSaveBtn.addEventListener("click", () => {
        saveShift(true);
    });
}

updateContinueButton();


/* =========================================================
   KURUM SEÇİMİ
   ========================================================= */

function bindInstitutionButtons() {
    const grid = document.querySelector(".institutionGrid") || document.querySelector("#institutionScreen");
    if (!grid || grid.__boundInstitutions) return;
    grid.__boundInstitutions = true;

    grid.addEventListener("click", (e) => {
        const button = e.target.closest(".institutionBtn");
        if (!button) return;

        e.preventDefault();
        SFX.unlock();
        SFX.click();

        const inst = button.getAttribute("data-institution") || button.dataset.institution;
        if (!inst) {
            console.warn("Kurum data-institution eksik");
            return;
        }


        // Kayıt uyarısı
        if (typeof hasSave === "function" && hasSave()) {
            const ok = confirm("Kayıtlı bir vardiya var. Yeni vardiya başlarsa üzerine yazılabilir. Devam?");
            if (!ok) return;
        }

        game.institution = inst;
        const st = document.getElementById("shiftTypeSelect");
        game.shiftType = (st && st.value === "day") ? "day" : "night";

        const begin = () => {
            try {
                startShift();
                if (window.FeaturesV54 && FeaturesV54.updateStreakUI) FeaturesV54.updateStreakUI();
            } catch (err) {
                console.error("startShift hatası:", err);
                alert("Vardiya başlatılamadı. Sayfayı yenileyip tekrar dene.\n" + (err && err.message ? err.message : err));
            }
        };

        // Brifing modal (features) — yoksa direkt başla
        if (window.FeaturesV54 && typeof FeaturesV54.showBriefing === "function") {
            FeaturesV54.showBriefing(inst, game.shiftType, begin);
        } else {
            begin();
        }
    });
}

bindInstitutionButtons();


/* =========================================================
   VARDİYAYI BAŞLAT
   ========================================================= */

function startShift() {

    game.score = 0;
    game.reputation = 50;
    game.stress = 0;
    game.money = 0;

    game.eventCount = 0;
    game.shiftHour = (game.shiftType === "day") ? 9 : 22;

    game.correctDecisions = 0;
    game.wrongDecisions = 0;
    game.pressure = 0;
    game.consecutiveGood = 0;
    game.consecutiveBad = 0;
    game.unresolvedRisk = 0;
    game.flags = {};
    game.lastEventTitle = "";

    game.managementTrust = 50;
    game.publicTrust = 50;
    game.teamTrust = 50;
    game.securityRisk = 20;

    game.decisionProfile = {
        safety: 0,
        speed: 0,
        empathy: 0,
        procedure: 0
    };

    game.difficulty = 1;
    game.achievements = [];
    game.momentum = 0;
    game.eventHistory = [];
    game.shiftDeck = [];
    game.packId = 0;
    game.packName = "";
    // playerDifficulty menüden gelir, burada sıfırlanmaz

    if (game.playerDifficulty >= 2) {
        game.securityRisk = 25 + (game.playerDifficulty * 5);
        game.pressure = 5 * game.playerDifficulty;
    }

    game.consequences = {
        alarmIgnored: false,
        cameraBroken: false,
        visitorConflict: false,
        missingPerson: false,
        suspiciousPackage: false,
        staffConflict: false
    };

    // Kariyer modunda rütbe/para kısmen korunur
    if (!(window.GameHooks && GameHooks.preserveCareerOnStart && GameHooks.preserveCareerOnStart())) {
        game.rank = "Aday Güvenlik";
    }

    if (!game.inventory) {
        game.inventory = {
            flashlight: true, radio: true, vest: true,
            cameraAccess: true, medkit: false, masterKey: false
        };
    }
    if (!game.team) {
        game.team = { partner: true, trainee: true, partnerTrust: 60, traineeReady: true };
    }
    if (!game.lifetimeStats) {
        game.lifetimeStats = { shifts: 0, perfectShifts: 0, timedFails: 0, storyBeats: 0, bestScore: 0 };
    }
    if (!game.npcs) game.npcs = {};
    if (!game.storyFlags) game.storyFlags = {};

    // Her vardiya: kurum için rastgele 1 senaryo + 10 soru
    buildShiftDeck(game.institution);

    try {
        if (window.GameHooks && GameHooks.onStartShift) {
            GameHooks.onStartShift();
        }
    } catch (hookErr) {
        console.warn("GameHooks.onStartShift:", hookErr);
    }

    $("playerDisplay").textContent =
        game.playerName;

    $("institutionDisplay").textContent =
        game.institution;

    show("gameScreen");

    updateUI();

    $("eventArea").classList.remove("hidden");

    $("reportArea").classList.add("hidden");

    $("eventTitle").textContent =
        "Vardiya başladı";

    $("eventDescription").textContent =
        `${game.institution} görev noktasındasın. İlk olay için hazır ol.`;

    clearRadio();

    $("choices").innerHTML = "";

    hideChoiceFeedback();

    $("nextEventBtn").classList.remove("hidden");

    $("nextEventBtn").textContent =
        "İLK OLAY";

    SFX.shiftStart();
}


/* =========================================================
   SONRAKİ OLAY
   ========================================================= */

$("nextEventBtn").addEventListener(
    "click",
    nextEvent
);



/* =========================================================
   OLAYLAR ARASI SONUÇ SİSTEMİ
   ========================================================= */

function setFlag(name, value = true) {
    game.flags[name] = value;
}

function hasFlag(name) {
    return !!game.flags[name];
}

function getEventModifier(event) {

    let modifier = {
        score: 0,
        reputation: 0,
        stress: 0,
        money: 0,
        text: ""
    };

    const title = event.title;

    /*
     * Önceki kararların sonraki olaylara etkisi.
     */

    if (
        hasFlag("ignored_camera") &&
        title.includes("Kamera")
    ) {
        modifier.score -= 10;
        modifier.reputation -= 5;
        modifier.stress += 5;
        modifier.text =
            "Önceki kamera arızası nedeniyle bu olay daha riskli hale geldi.";
    }

    if (
        hasFlag("ignored_alarm") &&
        (
            title.includes("Alarm") ||
            title.includes("Yangın")
        )
    ) {
        modifier.score -= 15;
        modifier.reputation -= 8;
        modifier.stress += 8;
        modifier.text =
            "Önceki alarmın ihmal edilmesi nedeniyle durum ağırlaştı.";
    }

    if (
        hasFlag("ignored_access") &&
        (
            title.includes("Yetkisiz") ||
            title.includes("Kimlik") ||
            title.includes("Giriş")
        )
    ) {
        modifier.score -= 10;
        modifier.reputation -= 6;
        modifier.stress += 5;
        modifier.text =
            "Önceki giriş kontrolündeki açık yeni olayı etkiledi.";
    }

    if (
        hasFlag("unresolved_bag") &&
        (
            title.includes("Çanta") ||
            title.includes("Bagaj") ||
            title.includes("Paket")
        )
    ) {
        modifier.score -= 15;
        modifier.reputation -= 8;
        modifier.stress += 10;
        modifier.text =
            "Önceki sahipsiz eşya olayı hâlâ kapanmadı.";
    }

    if (
        hasFlag("ignored_noise") &&
        title.includes("Gürültü")
    ) {
        modifier.score -= 8;
        modifier.reputation -= 5;
        modifier.stress += 4;
        modifier.text =
            "Önceki şikâyetin büyümesi yeni olayı etkiledi.";
    }

    /*
     * Başarılı kararların küçük avantajları.
     */

    if (
        hasFlag("checked_camera") &&
        title.includes("Şüpheli")
    ) {
        modifier.score += 5;
        modifier.reputation += 3;
        modifier.text =
            "Önceki kamera kontrolü sana küçük bir avantaj sağladı.";
    }

    if (
        hasFlag("called_support") &&
        (
            title.includes("Kavga") ||
            title.includes("Tartışma") ||
            title.includes("Çalışan")
        )
    ) {
        modifier.score += 5;
        modifier.stress -= 3;
        modifier.text =
            "Önceki destek koordinasyonu bu olayda işini kolaylaştırdı.";
    }

    return modifier;
}

function updateFlagsAfterChoice(choice) {

    const text = choice.text.toLowerCase();

    /*
     * Risk bırakan kararlar.
     */

    if (
        text.includes("görmezden") ||
        text.includes("önemseme") ||
        text.includes("hiçbir şey yapma") ||
        text.includes("ihbarı kapat") ||
        text.includes("alarmı kapat")
    ) {

        if (
            game.lastEventTitle.includes("Kamera")
        ) {
            setFlag("ignored_camera");
        }

        if (
            game.lastEventTitle.includes("Alarm") ||
            game.lastEventTitle.includes("Yangın")
        ) {
            setFlag("ignored_alarm");
        }

        if (
            game.lastEventTitle.includes("Giriş") ||
            game.lastEventTitle.includes("Kimlik") ||
            game.lastEventTitle.includes("Yetkisiz")
        ) {
            setFlag("ignored_access");
        }

        if (
            game.lastEventTitle.includes("Çanta") ||
            game.lastEventTitle.includes("Bagaj") ||
            game.lastEventTitle.includes("Paket")
        ) {
            setFlag("unresolved_bag");
        }

        if (
            game.lastEventTitle.includes("Gürültü")
        ) {
            setFlag("ignored_noise");
        }
    }

    /*
     * İyi koordinasyon kararları.
     */

    if (
        text.includes("destek") ||
        text.includes("ekibe bildir") ||
        text.includes("ekipleri bildir") ||
        text.includes("ilgili ekip")
    ) {
        setFlag("called_support");
    }

    /*
     * Kamera kontrolü.
     */

    if (
        text.includes("kamer") &&
        (
            text.includes("kontrol") ||
            text.includes("görünt")
        )
    ) {
        setFlag("checked_camera");
    }

    /*
     * Risk çözülmüşse ilgili flag'i kaldır.
     */

    if (
        text.includes("alanı güvenli") ||
        text.includes("prosedüre göre bildir")
    ) {
        setFlag("unresolved_bag", false);
    }

    if (
        text.includes("alarm bölgesini kontrol")
    ) {
        setFlag("ignored_alarm", false);
    }
}


/* =========================================================
   DİNAMİK OLAY ZİNCİRLERİ
   ========================================================= */

function applyDynamicConsequences(event) {

    const title = event.title.toLowerCase();

    /*
     * Yüksek güvenlik riski yeni riskli olayları tetiklemeye
     * daha yatkın hale getirir.
     */
    if (game.securityRisk >= 70) {
        game.pressure += 3;
    }

    /*
     * Yönetim güveni düşükse hata maliyeti büyür.
     */
    if (game.managementTrust <= 30) {
        game.score -= 3;
        game.stress += 2;
    }

    /*
     * Ekip güveni düşükse destek çağırmak daha maliyetli hale gelir.
     */
    if (game.teamTrust <= 30) {
        game.pressure += 2;
    }

    /*
     * Önceki olayın türüne göre küçük zincir etkileri.
     */
    if (
        title.includes("kamera") &&
        game.consequences.cameraBroken
    ) {
        game.securityRisk += 5;
    }

    if (
        (
            title.includes("alarm") ||
            title.includes("yangın")
        ) &&
        game.consequences.alarmIgnored
    ) {
        game.managementTrust -= 5;
        game.securityRisk += 5;
    }

    game.managementTrust = Math.max(
        0, Math.min(100, game.managementTrust)
    );

    game.teamTrust = Math.max(
        0, Math.min(100, game.teamTrust)
    );

    game.securityRisk = Math.max(
        0, Math.min(100, game.securityRisk)
    );
}


function getEventWeight(event) {

    const title = event.title.toLowerCase();

    let weight = 1;

    /*
     * Kalıcı sonuçlara bağlı zincirler.
     */
    if (
        game.consequences.alarmIgnored &&
        (
            title.includes("alarm") ||
            title.includes("yangın") ||
            title.includes("elektrik")
        )
    ) {
        weight += 5;
    }

    if (
        game.consequences.cameraBroken &&
        (
            title.includes("kamera") ||
            title.includes("şüpheli") ||
            title.includes("giriş")
        )
    ) {
        weight += 5;
    }

    if (
        game.consequences.visitorConflict &&
        (
            title.includes("ziyaretçi") ||
            title.includes("kimlik") ||
            title.includes("giriş")
        )
    ) {
        weight += 4;
    }

    if (
        game.consequences.missingPerson &&
        (
            title.includes("çocuk") ||
            title.includes("kayıp") ||
            title.includes("hasta")
        )
    ) {
        weight += 4;
    }

    if (
        game.consequences.suspiciousPackage &&
        (
            title.includes("paket") ||
            title.includes("bagaj") ||
            title.includes("çanta")
        )
    ) {
        weight += 5;
    }

    if (
        game.consequences.staffConflict &&
        (
            title.includes("personel") ||
            title.includes("çalışan")
        )
    ) {
        weight += 4;
    }

    /*
     * Güvenlik riski yükseldikçe daha kritik olayların ağırlığı artar.
     */
    if (
        game.securityRisk >= 70 &&
        (
            title.includes("alarm") ||
            title.includes("yangın") ||
            title.includes("şüpheli") ||
            title.includes("kavga") ||
            title.includes("yetkisiz")
        )
    ) {
        weight += 4;
    }

    /*
     * Yüksek başarıda daha karmaşık olayların ortaya çıkma
     * ihtimali artıyor.
     */
    if (
        game.difficulty >= 3 &&
        (
            title.includes("personel") ||
            title.includes("ziyaretçi") ||
            title.includes("şüpheli") ||
            title.includes("alarm") ||
            title.includes("kayıp")
        )
    ) {
        weight += 2;
    }

    return weight;
}


function getDynamicEventText(event) {

    let description = event.description;
    let hint = event.hint;

    if (game.consequences.cameraBroken) {
        description +=
            " Önceki vardiya kararlarından dolayı kamera kapsamı şu anda tam değil.";
    }

    if (game.consequences.alarmIgnored) {
        description +=
            " Yönetim, önceki alarm olayından sonra daha dikkatli olmanı istiyor.";
    }

    if (game.consequences.visitorConflict) {
        description +=
            " Ziyaretçi prosedürleriyle ilgili önceki olay hâlâ konuşuluyor.";
    }

    if (game.consequences.missingPerson) {
        description +=
            " Önceki kayıp kişi olayından sonra ekipler daha hassas.";
    }

    if (game.consequences.suspiciousPackage) {
        description +=
            " Önceki şüpheli eşya ihbarı nedeniyle çevre kontrolü sıkılaştırıldı.";
    }

    if (game.consequences.staffConflict) {
        description +=
            " Personel arasındaki önceki gerilim nedeniyle ortam biraz gergin.";
    }

    if (game.securityRisk >= 70) {
        hint +=
            " Güvenlik riski kritik seviyede. Önceki kararların etkisi devam ediyor.";
    } else if (game.securityRisk >= 50) {
        hint +=
            " Risk yükseliyor. Hızlı karar vermeden önce çevreyi değerlendir.";
    }

    if (game.managementTrust <= 35) {
        hint +=
            " Yönetimin sana olan güveni azaldı; hataların daha ağır değerlendirilebilir.";
    }

    if (game.teamTrust <= 35) {
        hint +=
            " Ekip desteği zayıfladı; koordinasyon önemli.";
    }

    hint += getProfileHint();

    return {
        description,
        hint
    };
}


/* =========================================================
   RASTGELE KRİTİK GELİŞME
   ========================================================= */

function triggerCriticalDevelopment() {

    if (game.eventCount < 3) {
        return;
    }

    /*
     * Her olayda değil; baskı veya risk yükseldiğinde
     * bazen ekstra gelişme oluşur.
     */
    const chance =
        game.securityRisk >= 70
            ? 0.30
            : game.pressure >= 70
                ? 0.20
                : 0.08;

    if (Math.random() > chance) {
        return;
    }

    const developments = [];

    if (game.consequences.cameraBroken) {
        developments.push(
            "Kamera kör noktasıyla ilgili yeni bir ihbar geldi. Önceki kararın artık doğrudan karşına çıkıyor."
        );
    }

    if (game.consequences.alarmIgnored) {
        developments.push(
            "Yönetim önceki alarm olayını yeniden gündeme getirdi. Olayın kayıtları inceleniyor."
        );
    }

    if (game.consequences.suspiciousPackage) {
        developments.push(
            "Önceki şüpheli eşya olayının devamıyla ilgili yeni bilgi geldi."
        );
    }

    if (game.consequences.visitorConflict) {
        developments.push(
            "Önceki ziyaretçi olayına ilişkin yeni bir şikâyet ulaştı."
        );
    }

    if (game.consequences.staffConflict) {
        developments.push(
            "Ekip içindeki önceki gerilim yeniden gündeme geldi."
        );
    }

    if (developments.length === 0) {
        return;
    }

    const message =
        developments[
            Math.floor(
                Math.random() * developments.length
            )
        ];

    game.pressure += 4;
    game.stress += 3;

    clearRadio();
}


/* =========================================================
   KARAR PROFİLİ + ADAPTİF ZORLUK
   ========================================================= */

function updateDecisionProfile(choice) {

    const text =
        String(choice.text).toLowerCase();

    if (
        text.includes("hemen") ||
        text.includes("bekleme") ||
        text.includes("tek başına")
    ) {
        game.decisionProfile.speed += 1;
    }

    if (
        text.includes("kontrol") ||
        text.includes("doğrula") ||
        text.includes("prosedür") ||
        text.includes("bildir")
    ) {
        game.decisionProfile.procedure += 1;
    }

    if (
        text.includes("güvenli") ||
        text.includes("çevreyi") ||
        text.includes("mesafe") ||
        text.includes("izole")
    ) {
        game.decisionProfile.safety += 1;
    }

    if (
        text.includes("yardım") ||
        text.includes("sakin") ||
        text.includes("konuş") ||
        text.includes("destek")
    ) {
        game.decisionProfile.empathy += 1;
    }
}


function calculateDifficulty() {

    /*
     * Oyuncu çok başarılı gidiyorsa oyun biraz zorlaşır.
     * Çok fazla hata yapıyorsa baskıyı tamamen düşürmek yerine
     * olayların ağırlığını dengeler.
     */
    const successRate =
        game.eventCount > 0
            ? game.correctDecisions / game.eventCount
            : 0;

    let difficulty = 1;

    if (successRate >= 0.80) {
        difficulty = 3;
    } else if (successRate >= 0.60) {
        difficulty = 2;
    }

    if (game.pressure >= 75) {
        difficulty += 1;
    }

    game.difficulty =
        Math.max(1, Math.min(4, difficulty));

    return game.difficulty;
}


function addAdaptiveEventPressure() {

    const difficulty =
        calculateDifficulty();

    if (difficulty >= 3) {
        game.pressure += 2;
    }

    if (difficulty >= 4) {
        game.securityRisk += 2;
    }

    game.pressure =
        Math.max(0, Math.min(100, game.pressure));

    game.securityRisk =
        Math.max(0, Math.min(100, game.securityRisk));
}


function getProfileHint() {

    const profile =
        game.decisionProfile;

    if (
        profile.safety >= profile.speed &&
        profile.safety >= profile.procedure
    ) {
        return " Güvenliği önceliklendiren bir karar tarzın oluşuyor.";
    }

    if (
        profile.speed > profile.procedure &&
        profile.speed > profile.safety
    ) {
        return " Hızlı karar verme eğilimin güçleniyor; acele etme.";
    }

    if (
        profile.procedure >= profile.safety &&
        profile.procedure >= profile.speed
    ) {
        return " Prosedür odaklı ilerliyorsun.";
    }

    return "";
}


/* =========================================================
   5 HAMLELİ GELİŞTİRME PAKETİ
   HAMLE 1: BAŞARILAR / ROZETLER
   HAMLE 2: KAYITLI VARDİYA
   HAMLE 3: OLAY GEÇMİŞİ
   HAMLE 4: MOMENTUM / SERİ
   HAMLE 5: GELİŞMİŞ FİNAL SONUÇLARI
   ========================================================= */

function unlockAchievement(id, name) {

    if (!game.achievements.includes(id)) {
        game.achievements.push(id);

        SFX.achievement();

        clearRadio();
        if (window.Features && Features.unlockBadge) {
            try { Features.unlockBadge(id); } catch (e) {}
        }
    }
}


function checkAchievements() {

    if (
        game.correctDecisions >= 5
    ) {
        unlockAchievement(
            "steady_guard",
            "Soğukkanlı Güvenlik"
        );
    }

    if (
        game.correctDecisions >= 8 &&
        game.wrongDecisions === 0
    ) {
        unlockAchievement(
            "perfect_shift",
            "Kusursuz Vardiya"
        );
    }

    if (
        game.securityRisk <= 20 &&
        game.eventCount >= 6
    ) {
        unlockAchievement(
            "low_risk",
            "Düşük Risk Uzmanı"
        );
    }

    if (
        game.teamTrust >= 80
    ) {
        unlockAchievement(
            "team_player",
            "Ekip Oyuncusu"
        );
    }

    if (
        game.managementTrust >= 85
    ) {
        unlockAchievement(
            "management_favorite",
            "Yönetimin Güveni"
        );
    }
}


/* =========================================================
   KAYIT / YÜKLEME SİSTEMİ
   ========================================================= */

const SAVE_KEY = "security_game_save";

function buildSavePayload() {
    return {
        version: 2,
        savedAt: new Date().toISOString(),
        game: { ...game }
    };
}

function applySaveData(saved) {
    const data = saved.game ? saved.game : saved;

    if (!data || typeof data !== "object") {
        return false;
    }

    Object.assign(game, data);

    if (!game.consequences) {
        game.consequences = {
            alarmIgnored: false,
            cameraBroken: false,
            visitorConflict: false,
            missingPerson: false,
            suspiciousPackage: false,
            staffConflict: false
        };
    }

    if (!game.decisionProfile) {
        game.decisionProfile = {
            safety: 0,
            speed: 0,
            empathy: 0,
            procedure: 0
        };
    }

    if (!Array.isArray(game.achievements)) {
        game.achievements = [];
    }

    if (!Array.isArray(game.eventHistory)) {
        game.eventHistory = [];
    }

    return true;
}

function saveShift(showToast = false) {
    try {
        const payload = buildSavePayload();
        localStorage.setItem(SAVE_KEY, JSON.stringify(payload));

        if (showToast) {
            flashSaveStatus("Vardiya kaydedildi.");
            if (SFX.save) SFX.save();
            else SFX.click();
        }

        updateContinueButton();
        return true;
    } catch (error) {
        console.warn("Vardiya kaydedilemedi:", error);
        if (showToast) {
            flashSaveStatus("Kayıt başarısız.", true);
        }
        return false;
    }
}

function hasSave() {
    try {
        return !!localStorage.getItem(SAVE_KEY);
    } catch (e) {
        return false;
    }
}

function getSaveMeta() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return null;
        const saved = JSON.parse(raw);
        const g = saved.game || saved;
        return {
            name: g.playerName || "Bilinmiyor",
            institution: g.institution || "-",
            eventCount: g.eventCount || 0,
            rank: g.rank || "-",
            score: g.score || 0,
            savedAt: saved.savedAt || null
        };
    } catch (e) {
        return null;
    }
}

function loadShift() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return false;
        const saved = JSON.parse(raw);
        return applySaveData(saved);
    } catch (error) {
        console.warn("Vardiya yüklenemedi:", error);
        return false;
    }
}

function deleteSave() {
    try {
        localStorage.removeItem(SAVE_KEY);
        updateContinueButton();
        flashSaveStatus("Kayıt silindi.");
        return true;
    } catch (e) {
        return false;
    }
}

function exportSaveFile() {
    try {
        const payload = buildSavePayload();
        const blob = new Blob(
            [JSON.stringify(payload, null, 2)],
            { type: "application/json" }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
        a.href = url;
        a.download = `son-nobet-kayit-${stamp}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        flashSaveStatus("Kayıt dosyası indirildi.");
        SFX.click();
    } catch (e) {
        flashSaveStatus("Dışa aktarma başarısız.", true);
    }
}

function importSaveFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const saved = JSON.parse(reader.result);
            if (!applySaveData(saved)) {
                flashSaveStatus("Geçersiz kayıt dosyası.", true);
                return;
            }
            localStorage.setItem(SAVE_KEY, JSON.stringify(buildSavePayload()));
            flashSaveStatus("Kayıt yüklendi. Devam et'e bas.");
            updateContinueButton();
            SFX.good();
        } catch (e) {
            flashSaveStatus("Dosya okunamadı.", true);
        }
    };
    reader.onerror = () => flashSaveStatus("Dosya okunamadı.", true);
    reader.readAsText(file);
}

function flashSaveStatus(text, isError = false) {
    const el = $("saveStatus");
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("error", !!isError);
    el.classList.remove("hidden");
    clearTimeout(flashSaveStatus._t);
    flashSaveStatus._t = setTimeout(() => {
        el.classList.add("hidden");
    }, 2800);
}

function updateContinueButton() {
    const btn = $("continueBtn");
    const meta = $("saveMeta");
    const info = getSaveMeta();

    if (btn) {
        btn.disabled = !info;
        btn.classList.toggle("disabled", !info);
    }

    if (meta) {
        if (!info) {
            meta.textContent = "Kayıtlı vardiya yok.";
        } else {
            const when = info.savedAt
                ? new Date(info.savedAt).toLocaleString("tr-TR")
                : "";
            meta.textContent =
                `${info.name} · ${info.institution} · Olay ${info.eventCount}/${SHIFT_LENGTH} · ${info.rank}` +
                (when ? ` · ${when}` : "");
        }
    }
}

function resumeFromSave() {
    if (!loadShift()) {
        flashSaveStatus("Yüklenecek kayıt bulunamadı.", true);
        return;
    }

    if (!game.playerName || !game.institution) {
        flashSaveStatus("Kayıt eksik görünüyor.", true);
        return;
    }

    SFX.unlock();
    SFX.click();
    SFX.startMusic();

    $("playerDisplay").textContent = game.playerName;
    $("institutionDisplay").textContent = game.institution;

    show("gameScreen");
    $("eventArea").classList.remove("hidden");
    $("reportArea").classList.add("hidden");
    hideChoiceFeedback();

    $("eventTitle").textContent = "Kayıttan devam";
    $("eventDescription").textContent =
        `${game.institution} noktasında kaldığın yerden devam ediyorsun. Sonraki olay için hazır ol.`;
    clearRadio();

    $("choices").innerHTML = "";
    $("nextEventBtn").classList.remove("hidden");
    $("nextEventBtn").textContent =
        game.eventCount >= SHIFT_LENGTH ? "VARDİYAYI BİTİR" : "SONRAKİ OLAY";

    updateUI();
}


/* =========================================================
   HAMLE 3: OLAY GEÇMİŞİ
   ========================================================= */

function recordEvent(event) {

    game.eventHistory.push({
        title: event.title,
        hour: game.shiftHour,
        score: game.score,
        risk: game.securityRisk
    });

    /*
     * Liste gereksiz büyümesin.
     */
    if (
        game.eventHistory.length > 20
    ) {
        game.eventHistory.shift();
    }
}


function getRecentEventPressure() {

    if (
        game.eventHistory.length < 3
    ) {
        return 0;
    }

    const recent =
        game.eventHistory.slice(-3);

    let rising = 0;

    for (
        let i = 1;
        i < recent.length;
        i++
    ) {
        if (
            recent[i].risk >
            recent[i - 1].risk
        ) {
            rising++;
        }
    }

    return rising;
}


/* =========================================================
   HAMLE 4: MOMENTUM / KARAR SERİSİ
   ========================================================= */

function updateMomentum(choice) {

    if (choice.correct) {

        game.momentum += 1;

    } else {

        game.momentum -= 2;
    }

    game.momentum =
        Math.max(
            -5,
            Math.min(5, game.momentum)
        );

    /*
     * İyi seri küçük bir avantaj,
     * kötü seri küçük bir baskı yaratır.
     */
    if (
        game.momentum >= 3
    ) {
        game.score += 2;
        game.pressure -= 2;
    }

    if (
        game.momentum <= -3
    ) {
        game.score -= 3;
        game.pressure += 3;
    }
}


/* =========================================================
   HAMLE 5: GELİŞMİŞ FİNAL DEĞERLENDİRMESİ
   ========================================================= */

function getFinalOutcome() {

    const risk =
        game.securityRisk;

    const trust =
        (
            game.managementTrust +
            game.teamTrust +
            game.publicTrust
        ) / 3;

    if (
        risk <= 20 &&
        trust >= 80 &&
        game.correctDecisions >= 8
    ) {
        return {
            title: "Üst Düzey Başarı",
            text:
                "Vardiyayı olağanüstü bir dengeyle tamamladın. Güvenlik, ekip ve yönetim tarafında güçlü bir performans gösterdin."
        };
    }

    if (
        risk <= 35 &&
        trust >= 65
    ) {
        return {
            title: "Başarılı Vardiya",
            text:
                "Genel olarak güvenli ve dengeli kararlar verdin. Bazı sorunlar yaşansa da kontrolü korudun."
        };
    }

    if (
        risk >= 75 ||
        trust < 35
    ) {
        return {
            title: "Kritik Vardiya",
            text:
                "Vardiya boyunca oluşan riskler ve güven kaybı ciddi seviyeye ulaştı. Bazı kararların uzun vadeli etkileri oldu."
        };
    }

    return {
        title: "Karışık Sonuç",
        text:
            "Bazı kararların başarılı, bazıları ise riskliydi. Vardiya tamamen kontrolden çıkmadı ancak iyileştirilmesi gereken noktalar var."
    };
}


const achievementNames = {
    steady_guard: "Soğukkanlı Güvenlik",
    perfect_shift: "Kusursuz Vardiya",
    low_risk: "Düşük Risk Uzmanı",
    team_player: "Ekip Oyuncusu",
    management_favorite: "Yönetimin Güveni"
};

function renderAchievements() {

    if (
        !game.achievements ||
        game.achievements.length === 0
    ) {
        return "Henüz başarı açılmadı.";
    }

    return game.achievements
        .map(id => achievementNames[id] || id)
        .join(" • ");
}

function showChoiceFeedback(choice) {

    const box = $("feedbackBox");

    if (!box) {
        return;
    }

    const sign = (n) => (n > 0 ? `+${n}` : `${n}`);

    const parts = [];

    if (choice.score) parts.push(`Puan ${sign(choice.score)}`);
    if (choice.reputation) parts.push(`İtibar ${sign(choice.reputation)}`);
    if (choice.stress) parts.push(`Stres ${sign(choice.stress)}`);
    if (choice.money) parts.push(`Para ${sign(choice.money)} ₺`);

    const summary = parts.length
        ? parts.join(" · ")
        : "Etki sınırlı.";

    const headline = choice.message
        ? choice.message
        : (choice.correct ? "Doğru yaklaşım." : "Riskli karar.");

    box.classList.remove("hidden", "good", "bad");
    box.classList.add(choice.correct ? "good" : "bad");
    box.innerHTML =
        `<strong>${headline}</strong><br><span class="fxDelta">${summary}</span>`;
}

function hideChoiceFeedback() {

    const box = $("feedbackBox");

    if (!box) {
        return;
    }

    box.classList.add("hidden");
    box.textContent = "";
}



/* =========================================================
   VARDIYA PAKETİ / DESTE
   ========================================================= */

function shuffleChoices(choices) {
    return shuffleArray((choices || []).map((c, i) => Object.assign({}, c, { _origIndex: i })));
}

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function uniqueByTitle(list) {
    const seen = new Set();
    const out = [];
    list.forEach(ev => {
        if (!ev || !ev.title || seen.has(ev.title)) return;
        seen.add(ev.title);
        out.push(ev);
    });
    return out;
}


/* =========================================================
   SENARYO PAKETİ UI
   ========================================================= */

function getScenarioListForInstitution(inst) {
    if (typeof senaryoSoruBankasi === "undefined" || !senaryoSoruBankasi[inst]) {
        return [];
    }
    return Object.keys(senaryoSoruBankasi[inst]).map(id => ({
        id,
        title: senaryoSoruBankasi[inst][id].title || id
    }));
}

function refreshScenarioSelect(inst) {
    // Senaryo artık kurum içinden otomatik seçilir; UI yok.
}

function questionToEvent(question, index, scenarioTitle, shiftType) {
    const diff = question.difficulty || "medium";
    const mult = diff === "hard" ? 1.35 : diff === "easy" ? 0.85 : 1;
    const expC = question.explainCorrect || "Doğru karar. Prosedüre uygun yaklaşım.";
    const expW = question.explainWrong || [];

    const choices = (question.options || []).map((text, i) => {
        const ok = i === question.correctIndex;
        let score = ok ? 18 : -10;
        let reputation = ok ? 6 : -6;
        let stress = ok ? 2 : 7;
        let money = ok ? 30 : 0;
        score = Math.round(score * mult);
        reputation = Math.round(reputation * mult);
        if (!ok) stress = Math.round(stress * (diff === "hard" ? 1.2 : 1));

        let message = ok ? expC : (expW[i] || "Bu yaklaşım riskli veya prosedüre aykırı.");
        // Nüans: her doğru cevapta aynı cümle olmasın
        if (ok && question.explainCorrect) message = expC;

        return {
            text,
            score,
            reputation,
            stress,
            money,
            correct: ok,
            message,
            difficulty: diff
        };
    });

    const shuffled = shuffleChoices(choices);
    const diffLabel = diff === "hard" ? " · Zor" : diff === "easy" ? " · Temel" : "";

    return {
        title: `Soru ${index + 1}/10 · ${scenarioTitle}${diffLabel}`,
        description: question.stem,
        hint: "",
        zone: scenarioTitle,
        icon: diff === "hard" ? "⚠️" : "📋",
        shiftType: question.shift || shiftType || "both",
        difficulty: diff,
        exam: true,
        scenarioQuestion: true,
        questionKey: (question.scenarioId || scenarioTitle) + "::" + index,
        choices: shuffled,
        camera: {
            channels: [
                {
                    id: "KAM-S1",
                    label: "Senaryo izleme",
                    feed: String(question.stem || "").slice(0, 100),
                    clarity: "clear",
                    relevant: true
                },
                {
                    id: "KAM-S2",
                    label: "Yan alan",
                    feed: "Kontrol noktası sakin.",
                    clarity: "medium",
                    relevant: false
                }
            ]
        }
    };
}

function buildDeckFromScenarioBank(institution) {
    if (typeof senaryoSoruBankasi === "undefined" || !senaryoSoruBankasi[institution]) {
        return null;
    }
    const pack = senaryoSoruBankasi[institution];
    const ids = Object.keys(pack);
    if (!ids.length) return null;

    // Kurum içinden rastgele senaryo (oyuncu seçmez)
    const scenarioId = ids[Math.floor(Math.random() * ids.length)];

    const scenario = pack[scenarioId];
    game.scenarioId = scenarioId;
    game.scenarioTitle = scenario.title || scenarioId;

    const shiftType = game.shiftType === "day" ? "day" : "night";
    let pool = (scenario.questions || []).slice();

    // Gece/gündüz: uyumlu sorular önce, both her zaman dahil
    const preferred = pool.filter(q => !q.shift || q.shift === "both" || q.shift === shiftType);
    const other = pool.filter(q => q.shift && q.shift !== "both" && q.shift !== shiftType);
    pool = preferred.concat(other);

    // Her girişte farklı sıra (tekrar hissini azalt)
    pool = shuffleArray(pool);

    // 10 soru doldur
    while (pool.length < SHIFT_LENGTH && (scenario.questions || []).length) {
        pool = pool.concat(shuffleArray((scenario.questions || []).slice()));
    }
    const questions = pool.slice(0, SHIFT_LENGTH);

    const deck = questions.map((q, i) => questionToEvent(q, i, game.scenarioTitle, shiftType));
    return deck;
}

function buildShiftDeck(institution) {
    const shiftType = game.shiftType === "day" ? "day" : "night";
    game.shiftType = shiftType;

    // 1) Senaryo soru bankası (10 soru / 4 şık)
    const bankDeck = buildDeckFromScenarioBank(institution);
    if (bankDeck && bankDeck.length) {
        game.shiftDeck = bankDeck.slice(0, SHIFT_LENGTH);
        game.packId = -1;
        game.packName = "Senaryo eğitimi";

        const packEl = document.getElementById("packDisplay");
        if (packEl) packEl.textContent = game.packName;

        const stEl = document.getElementById("shiftTypeDisplay");
        if (stEl) stEl.textContent = shiftType === "day" ? "Gündüz" : "Gece";

        const scEl = document.getElementById("scenarioDisplay");
        if (scEl) scEl.textContent = game.scenarioTitle || "—";

        clearRadio();
        return game.shiftDeck;
    }

    // 2) Yedek: eski olay havuzu + paket sistemi
    let pool = [];
    let examEvent = null;

    if (typeof eventPools !== "undefined" && eventPools[institution]) {
        const pack = eventPools[institution];
        pool = (pack[shiftType] || pack.night || []).slice();
        examEvent = pack.exam ? JSON.parse(JSON.stringify(pack.exam)) : null;
    } else if (typeof events !== "undefined" && events[institution]) {
        pool = events[institution].slice();
    }

    if (window.GameHooks && GameHooks.augmentPool) {
        try { pool = GameHooks.augmentPool(pool); } catch (e) {}
    }

    pool = pool.filter(ev => {
        if (!ev.shiftType || ev.shiftType === "both") return true;
        return ev.shiftType === shiftType;
    });

    const packId = Math.floor(Math.random() * 3);
    game.packId = packId;
    game.packName = PACK_NAMES[packId] || ("Paket " + (packId + 1));

    let selected = uniqueByTitle(pool.filter(e => !e.exam));
    selected = shuffleArray(selected).slice(0, Math.max(0, SHIFT_LENGTH - 1));

    if (!examEvent) {
        examEvent = {
            title: "Bilgi Kontrolü",
            description: "Eğitim kontrol sorusu. Şüpheli durumda ilk öncelik nedir?",
            hint: "Güvenlik ve bildirim.",
            zone: "Eğitim",
            icon: "📋",
            exam: true,
            choices: [
                { text: "Güvenli yaklaşım, doğrulama ve bildirim", score: 20, reputation: 8, stress: 2, money: 30, correct: true, message: "Doğru." },
                { text: "Aceleyle müdahale et", score: -12, reputation: -8, stress: 10, money: 0, correct: false, message: "Yanlış." },
                { text: "Yoksay", score: -14, reputation: -10, stress: 2, money: 0, correct: false, message: "Yanlış." },
                { text: "Tek başına her şeyi çöz", score: -10, reputation: -6, stress: 8, money: 0, correct: false, message: "Yanlış." }
            ]
        };
    }
    examEvent.shiftType = shiftType;
    examEvent.exam = true;
    if (examEvent.choices && examEvent.choices.length) {
        examEvent.choices = shuffleChoices(examEvent.choices);
    }

    game.shiftDeck = selected.concat([examEvent]).slice(0, SHIFT_LENGTH);
    game.scenarioTitle = game.packName;

    const packEl = document.getElementById("packDisplay");
    if (packEl) packEl.textContent = game.packName;
    const stEl = document.getElementById("shiftTypeDisplay");
    if (stEl) stEl.textContent = shiftType === "day" ? "Gündüz" : "Gece";
    const scEl = document.getElementById("scenarioDisplay");
    if (scEl) scEl.textContent = game.scenarioTitle || "—";

    return game.shiftDeck;
}

function nextEvent() {

    if (game.eventCount >= SHIFT_LENGTH) {
        endShift();
        return;
    }

    hideChoiceFeedback();

    if (typeof events === "undefined" || !events) {
        $("eventTitle").textContent = "Olay dosyası yok";
        $("eventDescription").textContent =
            "olaylar.js yüklenemedi. index.html içinde script sırasını kontrol et.";
        clearRadio();
        return;
    }

    if (!game.shiftDeck || !game.shiftDeck.length) {
        buildShiftDeck(game.institution);
    }

    if (!game.shiftDeck || game.shiftDeck.length === 0) {
        $("eventTitle").textContent = "Olay bulunamadı";
        $("eventDescription").textContent =
            "Bu kurum için olay havuzu bulunamadı: " + game.institution;
        return;
    }

    SFX.radio();
    if (SFX.whoosh) SFX.whoosh();

    /*
     * Desteden sırayla çek (paket başta karıldığı için her vardiya farklı sıra).
     */
    const event = game.shiftDeck[game.eventCount];

    if (!event) {
        endShift();
        return;
    }

    game.eventCount++;
    game.shiftHour++;

    if (game.shiftHour >= 24) {
        game.shiftHour = 0;
    }

    game.lastEventTitle = event.title;

    recordEvent(event);

    let dynamicText =
        getDynamicEventText(event);

    let description =
        dynamicText.description;

    let hint =
        dynamicText.hint;

    if (game.pressure >= 65) {
        hint +=
            " Bu vardiyada baskı yükseldi; acele karar verme.";
    }

    const recentPressure =
        getRecentEventPressure();

    if (recentPressure >= 2) {
        hint +=
            " Son olaylarda risk artıyor; önceki kararlarını göz önünde bulundur.";
    }

    $("eventTitle").textContent = event.title;
    $("eventDescription").textContent = description;
    clearRadio();

    if (window.GameHooks && GameHooks.onEventPresented) {
        GameHooks.onEventPresented(event);
    }

    $("choices").innerHTML = "";

    /*
     * Seçenekleri her olayda rastgele karıştır.
     */
    const shuffledChoices = [...event.choices];

    for (
        let i = shuffledChoices.length - 1;
        i > 0;
        i--
    ) {
        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffledChoices[i],
            shuffledChoices[randomIndex]
        ] = [
            shuffledChoices[randomIndex],
            shuffledChoices[i]
        ];
    }

    shuffledChoices.forEach((choice, index) => {

        const button =
            document.createElement("button");

        button.className = "choice";
        button.dataset.choiceIndex = String(index);
        button.dataset.correct = choice.correct ? "1" : "0";
        if (event && event.critical) {
            button.classList.add("choiceCritical");
        }

        const key = document.createElement("span");
        key.className = "keyHint";
        key.textContent = String(index + 1);

        const label = document.createElement("span");
        label.className = "choiceText";
        label.textContent = choice.text;

        button.appendChild(key);
        button.appendChild(label);

        button.addEventListener(
            "click",
            () => {
                selectChoice(button, choice, event);
            }
        );

        $("choices").appendChild(button);
    });

    $("nextEventBtn")
        .classList
        .add("hidden");

    triggerCriticalDevelopment();

    updateUI();
}


/* =========================================================
   SEÇİM UYGULA (tık / klavye)
   ========================================================= */

function trackQuestionStat(event, choice) {
    try {
        const key = "son_nobet_qstats_v1";
        const raw = localStorage.getItem(key);
        const stats = raw ? JSON.parse(raw) : {};
        const id = (event && event.questionKey) || (event && event.title) || "unknown";
        if (!stats[id]) stats[id] = { seen: 0, correct: 0, wrong: 0 };
        stats[id].seen++;
        if (choice && choice.correct) stats[id].correct++;
        else stats[id].wrong++;
        localStorage.setItem(key, JSON.stringify(stats));
    } catch (e) {}
}

function selectChoice(button, choice, event) {
    if (button.disabled) {
        return;
    }

    trackQuestionStat(event, choice);
    applyChoice(choice, event);

    document.querySelectorAll(".choice").forEach(btn => {
        btn.disabled = true;
    });

    button.classList.add(
        choice.correct ? "selected" : "wrong"
    );

    showChoiceFeedback(choice);

    if (choice.correct) {
        SFX.good();
    } else {
        SFX.bad();
    }

    $("nextEventBtn").classList.remove("hidden");
    $("nextEventBtn").textContent =
        game.eventCount >= SHIFT_LENGTH
            ? "VARDİYAYI BİTİR"
            : "SONRAKİ OLAY";
}


/* =========================================================
   KARAR UYGULA
   ========================================================= */

function applyChoice(choice, event = null) {

    updateDecisionProfile(choice);
    updateMomentum(choice);

    if (choice.storyFlag) {
        game.storyFlags[choice.storyFlag] = true;
        game.storyStage = Math.max(game.storyStage || 0, 1);
    }
    if (window.GameHooks && GameHooks.onApplyChoice) {
        GameHooks.onApplyChoice(choice, event);
    }

    /*
     * Yeni sistem:
     * Artık her karar sadece "doğru/yanlış" olarak çalışmıyor.
     * Oyuncu puan, itibar, stres ve gizli baskı arasında
     * denge kurmak zorunda.
     */

    let scoreDelta = choice.score;
    let repDelta = choice.reputation;
    let stressDelta = choice.stress;
    let moneyDelta = choice.money;

    if (game.playerDifficulty >= 2) {
        if (!choice.correct) {
            scoreDelta = Math.round(scoreDelta * (1 + 0.25 * game.playerDifficulty));
            repDelta = Math.round(repDelta * (1 + 0.2 * game.playerDifficulty));
            stressDelta = Math.round(stressDelta * (1 + 0.2 * game.playerDifficulty));
        } else {
            stressDelta = Math.max(0, stressDelta - 1);
        }
    } else if (choice.correct) {
        /* Normal: küçük nefes payı */
        stressDelta = Math.max(0, stressDelta - 1);
        if (game.securityRisk > 0) game.securityRisk = Math.max(0, game.securityRisk - 1);
    }

    if (game.playerDifficulty >= 3 && !choice.correct) {
        game.pressure += 3;
        game.securityRisk += 2;
    }

    game.score += scoreDelta;
    game.reputation += repDelta;
    game.stress += stressDelta;
    game.money += moneyDelta;

    /*
     * Gizli karar dengesi:
     * Aynı seçim farklı kurum içi sonuçlar doğurabilir.
     */
    if (choice.correct) {
        game.managementTrust += 3;
        game.teamTrust += 2;
        game.securityRisk -= 4;
    } else {
        game.managementTrust -= 4;
        game.publicTrust -= 3;
        game.teamTrust -= 2;
        game.securityRisk += 7;
    }

    /*
     * Hızlı ama riskli kararlar güvenlik riskini artırabilir.
     */
    const choiceText =
        String(choice.text).toLowerCase();

    if (
        choiceText.includes("hemen") ||
        choiceText.includes("tek başına") ||
        choiceText.includes("görmezden") ||
        choiceText.includes("hiçbir şey")
    ) {
        game.securityRisk += 3;
    }

    if (
        choiceText.includes("bildir") ||
        choiceText.includes("doğrula") ||
        choiceText.includes("kontrol")
    ) {
        game.teamTrust += 2;
        game.managementTrust += 2;
    }

    game.managementTrust = Math.max(
        0, Math.min(100, game.managementTrust)
    );
    game.publicTrust = Math.max(
        0, Math.min(100, game.publicTrust)
    );
    game.teamTrust = Math.max(
        0, Math.min(100, game.teamTrust)
    );
    game.securityRisk = Math.max(
        0, Math.min(100, game.securityRisk)
    );

    /*
     * Kararın içeriğine göre kalıcı sonuç bayrakları.
     * Burada sadece olay havuzundaki mevcut seçeneklerden
     * anlamlı sonuçlar üretiliyor.
     */
    const eventTitle =
        event && event.title
            ? event.title.toLowerCase()
            : "";

    if (
        !choice.correct &&
        (
            choiceText.includes("alarmı kapat") ||
            choiceText.includes("alarmı görmezden")
        )
    ) {
        game.consequences.alarmIgnored = true;
    }

    if (
        !choice.correct &&
        (
            choiceText.includes("kamerayı") ||
            choiceText.includes("kamera")
        )
    ) {
        game.consequences.cameraBroken = true;
    }

    if (
        !choice.correct &&
        (
            eventTitle.includes("ziyaretçi") ||
            eventTitle.includes("kimlik") ||
            eventTitle.includes("giriş")
        )
    ) {
        game.consequences.visitorConflict = true;
    }

    if (
        !choice.correct &&
        (
            eventTitle.includes("çocuk") ||
            eventTitle.includes("kayıp") ||
            eventTitle.includes("hasta")
        )
    ) {
        game.consequences.missingPerson = true;
    }

    if (
        !choice.correct &&
        (
            eventTitle.includes("paket") ||
            eventTitle.includes("bagaj") ||
            eventTitle.includes("çanta")
        )
    ) {
        game.consequences.suspiciousPackage = true;
    }

    if (
        !choice.correct &&
        (
            eventTitle.includes("personel") ||
            eventTitle.includes("çalışan")
        )
    ) {
        game.consequences.staffConflict = true;
    }

    if (choice.correct) {

        game.correctDecisions++;
        game.consecutiveGood++;
        game.consecutiveBad = 0;

        /*
         * Kusursuz seri de bedelsiz değil:
         * fazla özgüven baskıyı artırabiliyor.
         */
        if (game.consecutiveGood >= 3) {
            game.pressure += 4;
        }

    } else {

        game.wrongDecisions++;
        game.consecutiveBad++;
        game.consecutiveGood = 0;

        game.pressure += 7;

        /*
         * Bazı hatalar sonraki olaylara taşınan risk bırakır.
         */
        if (choice.score <= -10 || choice.reputation <= -10) {
            game.unresolvedRisk++;
        }
    }

    /*
     * Stres yükseldikçe kararların maliyeti artıyor.
     * Bu, oyunun sonlarına doğru baskıyı hissettiriyor.
     */
    if (game.stress >= 50) {
        game.pressure += 2;
    }

    if (game.stress >= 75) {
        game.score -= 5;
        clearRadio();
    } else if (game.unresolvedRisk >= 2) {
        game.score -= 5;
        clearRadio();
    } else if (choice.correct) {
        clearRadio();
    } else {
        clearRadio();
    }

    /*
     * Baskı 100'ü aşmasın.
     */
    game.pressure = Math.max(
        0,
        Math.min(100, game.pressure)
    );

    game.reputation = Math.max(
        0,
        Math.min(100, game.reputation)
    );

    game.stress = Math.max(
        0,
        Math.min(100, game.stress)
    );

    /*
     * Üst üste kötü kararlar.
     */
    if (game.consecutiveBad >= 3) {

        game.stress += 5;
        game.reputation -= 3;
        game.pressure += 5;

        clearRadio();
    }

    /*
     * Çok yüksek baskı, final performansını etkiler.
     */
    if (game.pressure >= 80) {
        game.score -= 5;
    }

    if (event) {
        applyDynamicConsequences(event);
    }

    addAdaptiveEventPressure();

    checkAchievements();
    saveShift();

    checkRank();
    updateUI();
}


/* =========================================================
   RÜTBE KONTROLÜ
   ========================================================= */

function checkRank() {

    let newRank =
        ranks[0];


    for (const rank of ranks) {

        if (
            game.score >=
            rank.required
        ) {

            newRank = rank;
        }
    }


    if (
        newRank.name !==
        game.rank
    ) {

        game.rank =
            newRank.name;

        SFX.rankUp();

        clearRadio();
    }
}


/* =========================================================
   ARAYÜZÜ GÜNCELLE
   ========================================================= */

let _uiCache = { score: null, reputation: null, stress: null, money: null };

function flashStat(key) {
    const el = document.querySelector(`.stats [data-stat="${key}"]`);
    if (!el) return;
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
}

function updateUI() {

    if (_uiCache.score !== null && _uiCache.score !== game.score) flashStat("score");
    if (_uiCache.reputation !== null && _uiCache.reputation !== game.reputation) flashStat("reputation");
    if (_uiCache.stress !== null && _uiCache.stress !== game.stress) flashStat("stress");
    if (_uiCache.money !== null && _uiCache.money !== game.money) flashStat("money");

    _uiCache = {
        score: game.score,
        reputation: game.reputation,
        stress: game.stress,
        money: game.money
    };

    $("score").textContent =
        game.score;

    $("reputation").textContent =
        game.reputation;

    $("stress").textContent =
        game.stress;

    $("money").textContent =
        `${game.money} ₺`;

    $("rankDisplay").textContent =
        game.rank;

    $("shiftTime").textContent =
        `${String(game.shiftHour).padStart(2, "0")}:00`;

    $("eventNumber").textContent =
        `${game.eventCount}/${SHIFT_LENGTH}`;

    const mom = $("momentumDisplay");
    if (mom) {
        const m = game.momentum || 0;
        mom.textContent = m > 0 ? `+${m}` : `${m}`;
        mom.style.color = m >= 3 ? "#4ade80" : m <= -3 ? "#f87171" : "white";
    }

    const repEl = $("repMeter");
    const stressEl = $("stressMeter");
    const riskEl = $("riskMeter");
    const progressEl = $("shiftProgress");

    if (repEl) {
        repEl.style.width = `${Math.max(0, Math.min(100, game.reputation))}%`;
    }
    if (stressEl) {
        stressEl.style.width = `${Math.max(0, Math.min(100, game.stress))}%`;
    }
    if (riskEl) {
        riskEl.style.width = `${Math.max(0, Math.min(100, game.securityRisk))}%`;
    }
    if (progressEl) {
        progressEl.style.width = `${(game.eventCount / SHIFT_LENGTH) * 100}%`;
    }

    const repVal = $("repMeterVal");
    const stressVal = $("stressMeterVal");
    const riskVal = $("riskMeterVal");

    if (repVal) repVal.textContent = game.reputation;
    if (stressVal) stressVal.textContent = game.stress;
    if (riskVal) riskVal.textContent = game.securityRisk;

    document.body.classList.toggle(
        "stress-high",
        game.stress >= 70 || game.securityRisk >= 75
    );
}


/* =========================================================
   VARDİYA SONU
   ========================================================= */

function endShift() {

    SFX.endShift();


    if (window.GameHooks && GameHooks.onEndShift) {
        GameHooks.onEndShift();
    }

    if (window.AdReward && typeof AdReward.onShiftEnd === "function") {
        try { AdReward.onShiftEnd(); } catch (e) { console.warn(e); }
    }

    $("nextEventBtn")
        .classList
        .add("hidden");

    $("choices").innerHTML = "";

    $("eventArea")
        .classList
        .add("hidden");

    $("reportArea")
        .classList
        .remove("hidden");


    /*
     * Doğruluk oranı.
     */

    const accuracy =
        game.eventCount === 0
            ? 0
            : Math.round(
                (
                    game.correctDecisions /
                    game.eventCount
                ) * 100
            );


    /*
     * Nihai puan.
     *
     * Burada artık sadece doğru cevap
     * sayısına bakılmıyor.
     */

    let finalScore =
        game.score;


    /*
     * Fazla hata cezası.
     */

    if (
        game.wrongDecisions >= 5
    ) {

        finalScore -= 30;

    } else if (
        game.wrongDecisions >= 3
    ) {

        finalScore -= 15;
    }


    /*
     * Düşük itibar cezası.
     */

    if (
        game.reputation < 30
    ) {

        finalScore -= 20;
    }


    /*
     * Yüksek stres cezası.
     */

    if (
        game.stress >= 80
    ) {

        finalScore -= 20;

    } else if (
        game.stress >= 60
    ) {

        finalScore -= 10;
    }


    /*
     * Gizli performans göstergeleri.
     */
    const hiddenAverage =
        Math.round(
            (
                game.managementTrust +
                game.publicTrust +
                game.teamTrust
            ) / 3
        );

    if (hiddenAverage >= 80) {
        finalScore += 20;
    } else if (hiddenAverage >= 65) {
        finalScore += 10;
    } else if (hiddenAverage < 40) {
        finalScore -= 20;
    }

    if (game.securityRisk >= 80) {
        finalScore -= 30;
    } else if (game.securityRisk >= 60) {
        finalScore -= 15;
    } else if (game.securityRisk <= 20) {
        finalScore += 10;
    }

    /*
     * Gizli baskı ve kapanmamış riskler.
     */
    if (game.pressure >= 80) {
        finalScore -= 20;
    } else if (game.pressure >= 60) {
        finalScore -= 10;
    }

    if (game.unresolvedRisk >= 3) {
        finalScore -= 20;
    } else if (game.unresolvedRisk >= 2) {
        finalScore -= 10;
    }

    /*
     * Karar doğruluğu.
     */

    if (
        accuracy >= 90
    ) {

        finalScore += 20;

    } else if (
        accuracy >= 70
    ) {

        finalScore += 10;

    } else if (
        accuracy < 50
    ) {

        finalScore -= 20;
    }


    /*
     * Sonuç belirle.
     * Artık yalnızca toplam puan değil, güven ve risk dengesi de önemli.
     */
    if (
        game.securityRisk >= 80 ||
        game.managementTrust <= 20
    ) {
        finalScore -= 25;
    }

    if (
        game.teamTrust >= 80 &&
        game.securityRisk <= 35
    ) {
        finalScore += 15;
    }

    if (game.momentum >= 3) {
        finalScore += 10;
    } else if (game.momentum <= -3) {
        finalScore -= 10;
    }

    /*
     * Sonuç belirle.
     */

    let evaluation;
    let resultClass;


    if (
        finalScore >= 150 &&
        accuracy >= 80 &&
        game.reputation >= 60 &&
        game.stress < 60
    ) {

        evaluation =
            "Mükemmel vardiya.";

        resultClass =
            "excellent";

    } else if (
        finalScore >= 90 &&
        accuracy >= 60 &&
        game.reputation >= 45
    ) {

        evaluation =
            "Başarılı vardiya.";

        resultClass =
            "good";

    } else if (
        finalScore >= 30 &&
        accuracy >= 40
    ) {

        evaluation =
            "Ortalama vardiya.";

        resultClass =
            "average";

    } else {

        evaluation =
            "Vardiya performansın yetersiz.";

        resultClass =
            "bad";
    }


    /*
     * Rapor.
     */

    $("reportText").innerHTML = `

        <div class="${resultClass}">

            <h2>${evaluation}</h2>

            <p>
                <strong>Görevli:</strong>
                ${game.playerName}
            </p>

            <p>
                <strong>Kurum:</strong>
                ${game.institution}
            </p>

            <p>
                <strong>Rütbe:</strong>
                ${game.rank}
            </p>

            <hr>

            <p>
                <strong>Toplam Puan:</strong>
                ${finalScore}
            </p>

            <p>
                <strong>İtibar:</strong>
                ${game.reputation} / 100
            </p>

            <p>
                <strong>Stres:</strong>
                ${game.stress} / 100
            </p>

            <p>
                <strong>Kazanç:</strong>
                ${game.money} ₺
            </p>

            <hr>

            <p>
                <strong>Doğru Kararlar:</strong>
                ${game.correctDecisions}
            </p>

            <p>
                <strong>Riskli Kararlar:</strong>
                ${game.wrongDecisions}
            </p>

            <p>
                <strong>Başarı Oranı:</strong>
                %${accuracy}
            </p>

            <p>
                <strong>Vardiya Baskısı:</strong>
                ${game.pressure} / 100
            </p>

            <p>
                <strong>Kapanmamış Risk:</strong>
                ${game.unresolvedRisk}
            </p>

            <hr>

            <p>
                <strong>Yönetim Güveni:</strong>
                ${game.managementTrust} / 100
            </p>

            <p>
                <strong>Ekip Güveni:</strong>
                ${game.teamTrust} / 100
            </p>

            <p>
                <strong>Halk Güveni:</strong>
                ${game.publicTrust} / 100
            </p>

            <p>
                <strong>Güvenlik Riski:</strong>
                ${game.securityRisk} / 100
            </p>

            <p>
                <strong>Dinamik Zorluk:</strong>
                ${game.difficulty} / 4
            </p>

            <p>
                <strong>Karar Profili:</strong>
                Güvenlik ${game.decisionProfile.safety} |
                Hız ${game.decisionProfile.speed} |
                Prosedür ${game.decisionProfile.procedure} |
                Empati ${game.decisionProfile.empathy}
            </p>

            <hr>

            <div class="outcomeBox">
                <h3>${finalOutcome.title}</h3>
                <p>${finalOutcome.text}</p>
            </div>

            <p>
                <strong>Momentum:</strong>
                ${game.momentum}
            </p>

            <p>
                <strong>Başarılar:</strong>
                ${renderAchievements()}
            </p>

        </div>
    `;
}


/* =========================================================
   YENİDEN BAŞLAT
   ========================================================= */

$("restartBtn").addEventListener(
    "click",
    () => {

        SFX.click();

        $("eventArea")
            .classList
            .remove("hidden");

        $("reportArea")
            .classList
            .add("hidden");

        hideChoiceFeedback();

        show("institutionScreen");
    }
);


const backToMenuBtn = $("backToMenuBtn");
if (backToMenuBtn) {
    backToMenuBtn.addEventListener("click", () => {
        SFX.click();
        show("menuScreen");
        updateContinueButton();
    });
}

const menuFromReportBtn = $("menuFromReportBtn");
if (menuFromReportBtn) {
    menuFromReportBtn.addEventListener("click", () => {
        SFX.click();
        $("eventArea").classList.remove("hidden");
        $("reportArea").classList.add("hidden");
        hideChoiceFeedback();
        show("menuScreen");
        updateContinueButton();
    });
}


/* =========================================================
   KLAVYE KISAYOLLARI
   ========================================================= */

document.addEventListener("keydown", (e) => {
    const gameVisible = $("gameScreen") &&
        !$("gameScreen").classList.contains("hidden");

    if (!gameVisible) {
        if (e.key === "Enter") {
            const menuVisible = $("menuScreen") &&
                !$("menuScreen").classList.contains("hidden");
            if (menuVisible && document.activeElement === $("playerName")) {
                // input Enter → başlat
                $("startBtn").click();
            }
        }
        return;
    }

    const reportVisible = $("reportArea") &&
        !$("reportArea").classList.contains("hidden");
    if (reportVisible) {
        return;
    }

    const nextBtn = $("nextEventBtn");
    const nextVisible = nextBtn && !nextBtn.classList.contains("hidden");

    if ((e.key === "Enter" || e.key === " ") && nextVisible) {
        e.preventDefault();
        nextBtn.click();
        return;
    }

    if (["1", "2", "3"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        const buttons = [...document.querySelectorAll("#choices .choice")];
        const btn = buttons[idx];
        if (btn && !btn.disabled) {
            e.preventDefault();
            btn.click();
        }
    }
});


// Enter ile isim alanından başlatmayı kolaylaştır
const playerNameInput = $("playerName");
if (playerNameInput) {
    playerNameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            $("startBtn").click();
        }
    });
}