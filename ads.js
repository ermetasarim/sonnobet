/**
 * Son Nöbet — reklam kanalı
 * Web: AdSense görüntülü birim
 * Uygulama: AdMob ödüllü
 */
(function () {
    const ADMOB = {
        APP_ID: "ca-app-pub-2582945796090029~7170643036",
        REWARDED: "ca-app-pub-2582945796090029/2508131848",
        TEST_REWARDED_ANDROID: "ca-app-pub-3940256099942544/5224354917",
        USE_TEST: true
    };
    const AD_SECONDS = 8;
    const ADSENSE_SLOT = "8406986470";

    function fillAdSenseSlots() {
        const nodes = document.querySelectorAll("ins.adsbygoogle");
        if (!nodes.length) return;
        window.adsbygoogle = window.adsbygoogle || [];
        nodes.forEach(function (el) {
            if (el.getAttribute("data-adsbygoogle-status")) return;
            try {
                window.adsbygoogle.push({});
            } catch (e) {}
        });
    }

    let claimedThisShift = false;
    let shiftBaseline = { money: 0, score: 0 };
    let adBusy = false;

    function $(id) {
        return document.getElementById(id);
    }

    function ensureOverlay() {
        let el = $("adOverlay");
        if (el) return el;
        el = document.createElement("div");
        el.id = "adOverlay";
        el.className = "adOverlay hidden";
        el.setAttribute("role", "dialog");
        el.setAttribute("aria-modal", "true");
        el.innerHTML = `
            <div class="adOverlayCard">
                <span class="adOverlayBadge">REKLAM</span>
                <h3 id="adOverlayHeading">Reklam</h3>
                <p id="adOverlayDesc">Reklamı izleyin. Süre bitince ödülünüz tanımlanır.</p>
                <div class="adSlot" aria-label="Reklam"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2582945796090029" data-ad-slot="8406986470" data-ad-format="auto" data-full-width-responsive="true"></ins></div>
                <div class="adOverlayTimerWrap"><span id="adOverlayTimer">8</span> sn</div>
                <button id="adOverlayClose" class="ghostBtn" type="button" disabled>Bekleyin…</button>
            </div>`;
        document.body.appendChild(el);
        return el;
    }

    /**
     * Ortak ödüllü reklam.
     * @param {object} [opts]
     * @param {boolean} [opts.autoClose=true] - süre bitince otomatik kapat (soru tekrarı için)
     * @param {string} [opts.title]
     * @param {string} [opts.desc]
     * @returns {Promise<boolean>}
     */
    function rewardedUnitId() {
        return ADMOB.USE_TEST ? ADMOB.TEST_REWARDED_ANDROID : ADMOB.REWARDED;
    }

    function hasNativeAdMob() {
        try {
            return !!(window.Capacitor && (window.AdMob || (window.Capacitor.Plugins && window.Capacitor.Plugins.AdMob)));
        } catch (e) {
            return false;
        }
    }

    function showRewardedNative() {
        const AdMob = window.AdMob || (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.AdMob);
        const unitId = rewardedUnitId();
        return Promise.resolve()
            .then(function () {
                if (AdMob.prepareRewardVideoAd) {
                    return AdMob.prepareRewardVideoAd({ adId: unitId, isTesting: !!ADMOB.USE_TEST });
                }
            })
            .then(function () {
                if (AdMob.showRewardVideoAd) return AdMob.showRewardVideoAd();
                if (AdMob.showRewardedAd) return AdMob.showRewardedAd({ adId: unitId });
                throw new Error("AdMob eklentisi yok");
            })
            .then(function () { return true; });
    }

    function showRewarded(opts) {
        opts = opts || {};
        if (hasNativeAdMob()) {
            return showRewardedNative().catch(function () {
                return showRewardedWeb(opts);
            });
        }
        return showRewardedWeb(opts);
    }

    function showRewardedWeb(opts) {
        opts = opts || {};
        const autoClose = opts.autoClose !== false;
        return new Promise((resolve) => {
            if (adBusy) {
                resolve(false);
                return;
            }
            adBusy = true;
            const overlay = ensureOverlay();
            const timerEl = $("adOverlayTimer");
            const closeBtn = $("adOverlayClose");
            const heading = $("adOverlayHeading");
            const desc = $("adOverlayDesc");
            if (heading) heading.textContent = opts.title || "Reklam";
            if (desc) desc.textContent = opts.desc || "Reklamı izleyin. Süre bitince ödülünüz tanımlanır.";
            let left = AD_SECONDS;
            if (timerEl) timerEl.textContent = String(left);
            if (closeBtn) {
                closeBtn.disabled = true;
                closeBtn.textContent = "Bekleyin…";
            }
            overlay.classList.remove("hidden");
            overlay.setAttribute("aria-hidden", "false");
            fillAdSenseSlots();

            const finish = (ok) => {
                adBusy = false;
                overlay.classList.add("hidden");
                resolve(!!ok);
            };

            const tick = setInterval(() => {
                left -= 1;
                if (timerEl) timerEl.textContent = String(Math.max(0, left));
                if (left > 0) return;
                clearInterval(tick);
                if (autoClose) {
                    finish(true);
                    return;
                }
                if (closeBtn) {
                    closeBtn.disabled = false;
                    closeBtn.textContent = "Ödülü al";
                    const onClick = () => {
                        closeBtn.removeEventListener("click", onClick);
                        finish(true);
                    };
                    closeBtn.addEventListener("click", onClick);
                } else {
                    finish(true);
                }
            }, 1000);
        });
    }

    function moneyEarnedThisShift() {
        if (!window.game) return 0;
        return Math.max(0, (Number(game.money) || 0) - (shiftBaseline.money || 0));
    }

    function applyDoubleReward() {
        if (!window.game || claimedThisShift) return null;
        const earnedMoney = moneyEarnedThisShift();
        const bonusMoney = earnedMoney;
        const earnedScore = Math.max(0, Number(game.score) || 0);
        const bonusScore = earnedScore;

        game.money = (Number(game.money) || 0) + bonusMoney;
        game.score = (Number(game.score) || 0) + bonusScore;
        if (typeof game.lifetimeScore === "number") {
            game.lifetimeScore += bonusScore;
        }
        claimedThisShift = true;

        if (typeof updateUI === "function") {
            try { updateUI(); } catch (e) {}
        }

        const rt = $("reportText");
        if (rt && earnedMoney > 0) {
            rt.innerHTML = rt.innerHTML.replace(
                /(<strong>Kazanç:<\/strong>\s*)(\d+)/,
                `$1${game.money}`
            );
        }

        return { bonusMoney, bonusScore, totalMoney: game.money };
    }

    function onShiftEnd() {
        fillAdSenseSlots();
        claimedThisShift = false;
        const panel = $("adRewardPanel");
        const btn = $("watchAdBtn");
        const status = $("adRewardStatus");
        if (!panel || !btn) return;

        panel.classList.remove("hidden", "claimed");
        btn.disabled = false;
        btn.textContent = "▶ Reklam İzle · 2× Kazan";
        if (status) {
            const m = moneyEarnedThisShift();
            status.textContent =
                m > 0
                    ? `Reklam izleyerek bu vardiyadaki kazancınızı 2 katına çıkarabilirsiniz (+${m} ₺).`
                    : "Reklam izleyerek 2 katı kazanmak ister misiniz?";
        }
    }

    function onShiftStart() {
        claimedThisShift = false;
        adBusy = false;
        if (window.game) {
            shiftBaseline.money = Number(game.money) || 0;
            shiftBaseline.score = Number(game.score) || 0;
        }
        const panel = $("adRewardPanel");
        if (panel) panel.classList.add("hidden");
        const ov = $("adOverlay");
        if (ov) ov.classList.add("hidden");
    }

    function bindShiftEndButton() {
        const btn = $("watchAdBtn");
        if (!btn || btn._adBound) return;
        btn._adBound = true;
        btn.addEventListener("click", async () => {
            if (claimedThisShift || btn.disabled) return;
            btn.disabled = true;
            btn.textContent = "Reklam yükleniyor…";
            try {
                // Vardiya sonu: süre bitince "Ödülü al" onayı
                await showRewarded({
                    autoClose: false,
                    title: "2× kazanç reklamı",
                    desc: "Reklamı izleyin, vardiya kazancınız iki katına çıksın."
                });
                const result = applyDoubleReward();
                const status = $("adRewardStatus");
                const panel = $("adRewardPanel");
                if (panel) panel.classList.add("claimed");
                if (status) {
                    if (result && result.bonusMoney > 0) {
                        status.textContent =
                            `Ödül alındı: +${result.bonusMoney} ₺ (2× kazanç). Yeni bakiye: ${result.totalMoney} ₺`;
                    } else {
                        status.textContent = "Ödül alındı. Bu vardiyada ek kazanç yoktu.";
                    }
                }
                btn.textContent = "✓ 2× ödül alındı";
            } catch (e) {
                console.warn(e);
                btn.disabled = false;
                btn.textContent = "▶ Reklam İzle · 2× Kazan";
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            bindShiftEndButton();
            fillAdSenseSlots();
        });
    } else {
        bindShiftEndButton();
        fillAdSenseSlots();
    }

    window.AdReward = {
        onShiftEnd,
        onShiftStart,
        showRewarded,
        applyDoubleReward,
        fillAdSenseSlots,
        ADMOB
    };
})();
