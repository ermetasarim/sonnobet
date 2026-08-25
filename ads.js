/* =========================================================
   SON NÖBET — Ödüllü Reklam (Canlı)
   Test modu kapalı. Birim ID'lerini doldur.
   - Web + Capacitor: AD_CONFIG.admobRewardedUnitId
   - Özel ağ: AD_CONFIG.customShow = async () => boolean
   ========================================================= */

const AD_CONFIG = {
    enabled: true,
    /** "admob" | "custom" — test yok */
    provider: "admob",
    /** Vardiya sonu teklif */
    offerOnShiftEnd: true,
    oncePerShift: true,
    rewards: {
        moneyMultiplier: 2,
        scoreBonus: 25,
        stressRelief: 8
    },
    /**
     * AdMob ödüllü birim ID (zorunlu — canlı).
     * Örnek: "ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY"
     * Google AdMob konsolundan alır.
     */
    admobRewardedUnitId: "",
    /**
     * Capacitor / Cordova eklentisi varsa kullanılır.
     * Yoksa customShow veya hata mesajı.
     */
    /** @type {null | (() => Promise<boolean>)} */
    customShow: null,
    /**
     * Geliştirici: birim yokken kısa simülasyon (varsayılan kapalı).
     * Canlıda false bırak.
     */
    allowDevFallback: false,
    devFallbackSec: 3
};

const AdReward = (() => {
    let rewardedThisShift = false;
    let busy = false;
    let sdkReady = false;

    function canOffer() {
        if (!AD_CONFIG.enabled) return false;
        if (AD_CONFIG.oncePerShift && rewardedThisShift) return false;
        return true;
    }

    function resetShift() {
        rewardedThisShift = false;
        busy = false;
        const panel = document.getElementById("adRewardPanel");
        if (panel) {
            panel.classList.remove("hidden", "claimed");
            const status = document.getElementById("adRewardStatus");
            if (status) {
                status.textContent = unitConfigured()
                    ? "İsteğe bağlı: Reklam izle, vardiya ödülünü katla."
                    : "Reklam birimi tanımlı değil (ads.js → admobRewardedUnitId).";
            }
            const btn = document.getElementById("watchAdBtn");
            if (btn) {
                btn.disabled = !unitConfigured() && !AD_CONFIG.allowDevFallback && !AD_CONFIG.customShow;
                btn.textContent = "▶ Reklam İzle · 2× Ödeme";
            }
        }
    }

    function unitConfigured() {
        return !!(AD_CONFIG.admobRewardedUnitId && String(AD_CONFIG.admobRewardedUnitId).trim());
    }

    function setStatus(text) {
        const status = document.getElementById("adRewardStatus");
        if (status) status.textContent = text;
    }

    function applyReward() {
        const r = AD_CONFIG.rewards || {};
        const beforeMoney = game.money || 0;
        const mult = r.moneyMultiplier || 2;
        game.money = Math.round(beforeMoney * mult);
        game.score = (game.score || 0) + (r.scoreBonus || 0);
        game.stress = Math.max(0, (game.stress || 0) - (r.stressRelief || 0));
        rewardedThisShift = true;

        if (typeof updateUI === "function") updateUI();
        if (typeof SFX !== "undefined") {
            if (SFX.achievement) SFX.achievement();
            else if (SFX.good) SFX.good();
        }

        const gained = game.money - beforeMoney;
        setStatus(
            `Ödül alındı: +${gained} ₺ · +${r.scoreBonus || 0} puan · stres −${r.stressRelief || 0}`
        );

        const btn = document.getElementById("watchAdBtn");
        if (btn) {
            btn.disabled = true;
            btn.textContent = "Ödül alındı ✓";
        }
        const panel = document.getElementById("adRewardPanel");
        if (panel) panel.classList.add("claimed");

        const report = document.getElementById("reportText");
        if (report && report.innerHTML && !report.innerHTML.includes("Reklam ödülü")) {
            report.innerHTML +=
                `<p class="adRewardNote">Reklam ödülü uygulandı: x${mult} ödeme.</p>`;
        }

        if (typeof saveShift === "function") {
            try { saveShift(false); } catch (e) {}
        }
    }

    /** Capacitor Community AdMob veya benzeri */
    function showAdMobNative() {
        return new Promise((resolve) => {
            const unit = AD_CONFIG.admobRewardedUnitId;
            try {
                const admob = window.admob || window.AdMob || (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.AdMob);
                if (!admob) {
                    resolve(false);
                    return;
                }
                // community.admob API (yaklaşık)
                if (typeof admob.prepareRewardVideoAd === "function") {
                    admob.prepareRewardVideoAd({ adId: unit }).then(() =>
                        admob.showRewardVideoAd()
                    ).then(() => resolve(true)).catch(() => resolve(false));
                    return;
                }
                if (typeof admob.showRewardedAd === "function") {
                    admob.showRewardedAd({ adId: unit })
                        .then((res) => resolve(!!(res && (res.rewarded || res.completed))))
                        .catch(() => resolve(false));
                    return;
                }
                // Cordova old style
                if (window.admob && window.admob.rewardvideo) {
                    document.addEventListener("admob.rewardvideo.complete", function once() {
                        document.removeEventListener("admob.rewardvideo.complete", once);
                        resolve(true);
                    });
                    window.admob.rewardvideo.show();
                    return;
                }
                resolve(false);
            } catch (e) {
                console.warn("AdMob:", e);
                resolve(false);
            }
        });
    }

    function showDevFallback() {
        return new Promise((resolve) => {
            const overlay = document.getElementById("adOverlay");
            const timerEl = document.getElementById("adOverlayTimer");
            const skip = document.getElementById("adOverlayClose");
            if (!overlay) {
                setTimeout(() => resolve(true), 600);
                return;
            }
            let left = AD_CONFIG.devFallbackSec || 3;
            overlay.classList.remove("hidden");
            const badge = overlay.querySelector(".adOverlayBadge");
            if (badge) badge.textContent = "GELİŞTİRİCİ";
            if (timerEl) timerEl.textContent = left;
            if (skip) {
                skip.disabled = true;
                skip.textContent = "Ödül için bekleyin…";
            }
            const tick = setInterval(() => {
                left -= 1;
                if (timerEl) timerEl.textContent = String(Math.max(0, left));
                if (left <= 0) {
                    clearInterval(tick);
                    if (skip) {
                        skip.disabled = false;
                        skip.textContent = "Kapat ve ödülü al";
                    }
                }
            }, 1000);
            function finish(ok) {
                clearInterval(tick);
                overlay.classList.add("hidden");
                if (skip) skip.onclick = null;
                resolve(ok);
            }
            if (skip) {
                skip.onclick = () => {
                    if (skip.disabled) return;
                    finish(true);
                };
            }
        });
    }

    async function showRewarded() {
        if (busy) return false;
        if (!canOffer()) {
            setStatus("Bu vardiya için ödül zaten alındı veya reklam kapalı.");
            return false;
        }

        busy = true;
        setStatus("Reklam yükleniyor…");

        try {
            let completed = false;

            if (AD_CONFIG.provider === "custom" && typeof AD_CONFIG.customShow === "function") {
                completed = !!(await AD_CONFIG.customShow());
            } else if (AD_CONFIG.provider === "admob") {
                if (!unitConfigured()) {
                    setStatus("admobRewardedUnitId boş. AdMob birim ID gir.");
                    if (AD_CONFIG.allowDevFallback) {
                        setStatus("Geliştirici yedek reklam…");
                        completed = await showDevFallback();
                    }
                } else {
                    completed = await showAdMobNative();
                    if (!completed && AD_CONFIG.allowDevFallback) {
                        setStatus("Yerel AdMob yok — geliştirici yedek…");
                        completed = await showDevFallback();
                    } else if (!completed) {
                        setStatus(
                            "AdMob SDK bulunamadı. Capacitor AdMob eklentisi veya customShow gerekli."
                        );
                    }
                }
            }

            if (completed) {
                applyReward();
                busy = false;
                return true;
            }

            busy = false;
            return false;
        } catch (err) {
            console.warn("Rewarded ad error:", err);
            setStatus("Reklam hatası. Sonra tekrar dene.");
            busy = false;
            return false;
        }
    }

    function bindUI() {
        const btn = document.getElementById("watchAdBtn");
        if (btn) {
            btn.addEventListener("click", () => {
                showRewarded();
            });
        }
        const panel = document.getElementById("adRewardPanel");
        if (panel && !AD_CONFIG.enabled) {
            panel.classList.add("hidden");
        }
        // Overlay metnini canlıya çevir
        const badge = document.querySelector("#adOverlay .adOverlayBadge");
        if (badge && !AD_CONFIG.allowDevFallback) badge.textContent = "REKLAM";
        const tip = document.querySelector("#adOverlay small");
        if (tip) tip.textContent = "Ödüllü reklam — tamamlanınca ödül tanımlanır.";
    }

    function onShiftEnd() {
        resetShift();
        const panel = document.getElementById("adRewardPanel");
        if (!panel) return;
        if (AD_CONFIG.enabled && AD_CONFIG.offerOnShiftEnd && canOffer()) {
            panel.classList.remove("hidden");
        } else {
            panel.classList.add("hidden");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindUI);
    } else {
        bindUI();
    }

    return {
        showRewarded,
        onShiftEnd,
        resetShift,
        canOffer,
        config: AD_CONFIG
    };
})();

window.AdReward = AdReward;
window.AD_CONFIG = AD_CONFIG;
