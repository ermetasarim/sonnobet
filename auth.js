/* =========================================================
   SON NÖBET — Kimlik (Google + Misafir)
   Client ID sonradan doldurulur: AUTH_CONFIG.googleClientId
   ========================================================= */

const AUTH_CONFIG = {
    /** Google Cloud OAuth Web Client ID — siz ekleyeceksiniz */
    googleClientId: "616221357756-uljtn9u8hvddi1jkgelg7pi4mh434mqt.apps.googleusercontent.com",
    /** Misafir: sadece bu kurum */
    guestInstitution: "AVM",
    /** Misafir: en fazla 1 tamamlanan vardiya */
    guestMaxShifts: 1,
    storageKey: "son_nobet_auth_v1",
    guestShiftKey: "son_nobet_guest_shift_v1"
};

const Auth = (() => {
    let user = null; // { uid, name, email, picture, provider: "google"|"guest" }
    let gisReady = false;

    function $(id) {
        return document.getElementById(id);
    }

    function loadUser() {
        try {
            const raw = localStorage.getItem(AUTH_CONFIG.storageKey);
            if (!raw) return null;
            const u = JSON.parse(raw);
            if (u && u.uid && u.provider === "google") return u;
            return null;
        } catch (e) {
            return null;
        }
    }

    function saveUser(u) {
        user = u;
        try {
            if (u && u.provider === "google") {
                localStorage.setItem(AUTH_CONFIG.storageKey, JSON.stringify(u));
            } else {
                localStorage.removeItem(AUTH_CONFIG.storageKey);
            }
        } catch (e) {}
        renderAuthUI();
        try {
            if (window.FeaturesV55 && FeaturesV55.refreshInstitutionLocks) {
                FeaturesV55.refreshInstitutionLocks();
            }
        } catch (e) {}
        document.dispatchEvent(new CustomEvent("sonnobet-auth", { detail: user }));
    }

    function isGoogle() {
        return !!(user && user.provider === "google" && user.uid);
    }

    function isGuest() {
        return !isGoogle();
    }

    function isFullAccess() {
        return isGoogle();
    }

    function getGuestShiftsUsed() {
        try {
            return Number(localStorage.getItem(AUTH_CONFIG.guestShiftKey) || 0) || 0;
        } catch (e) {
            return 0;
        }
    }

    function markGuestShiftDone() {
        if (isGoogle()) return;
        try {
            const n = getGuestShiftsUsed() + 1;
            localStorage.setItem(AUTH_CONFIG.guestShiftKey, String(n));
        } catch (e) {}
        renderAuthUI();
    }

    function guestCanPlay() {
        if (isGoogle()) return true;
        return getGuestShiftsUsed() < AUTH_CONFIG.guestMaxShifts;
    }

    function canOpenInstitution(inst) {
        if (isGoogle()) return true;
        return inst === AUTH_CONFIG.guestInstitution;
    }

    function getDisplayName() {
        if (user && user.name) return user.name;
        const pe = $("playerName");
        return (pe && pe.value.trim()) || "";
    }

    function parseJwtPayload(token) {
        try {
            const part = token.split(".")[1];
            const json = atob(part.replace(/-/g, "+").replace(/_/g, "/"));
            return JSON.parse(json);
        } catch (e) {
            return null;
        }
    }

    function onGoogleCredential(response) {
        if (!response || !response.credential) {
            flash("Google girişi başarısız.");
            return;
        }
        const payload = parseJwtPayload(response.credential);
        if (!payload || !payload.sub) {
            flash("Google bilgisi okunamadı.");
            return;
        }
        const u = {
            uid: payload.sub,
            name: payload.name || payload.email || "Görevli",
            email: payload.email || "",
            picture: payload.picture || "",
            provider: "google"
        };
        saveUser(u);
        const pe = $("playerName");
        if (pe) {
            pe.value = u.name.slice(0, 24);
            pe.readOnly = true;
        }
        if (window.game) game.playerName = u.name.slice(0, 24);
        flash("Google ile giriş yapıldı. Tam sürüm açık.");
    }

    function signOut() {
        saveUser(null);
        const pe = $("playerName");
        if (pe) {
            pe.readOnly = false;
            if (!pe.value) pe.placeholder = "Adını gir";
        }
        flash("Çıkış yapıldı. Misafir modundasınız.");
    }

    function continueAsGuest() {
        if (!guestCanPlay()) {
            flash("Misafir hakkınız bitti. Tam sürüm için Google ile giriş yapın.");
            return false;
        }
        // misafir kalıcı hesap değil
        user = { uid: "guest", name: "", provider: "guest" };
        const pe = $("playerName");
        if (pe) pe.readOnly = false;
        renderAuthUI();
        return true;
    }

    function flash(msg) {
        if (typeof flashSaveStatus === "function") {
            flashSaveStatus(msg);
        } else {
            const el = $("authStatus");
            if (el) {
                el.textContent = msg;
                el.classList.remove("hidden");
            }
        }
    }

    function renderAuthUI() {
        const box = $("authBox");
        const status = $("authStatus");
        const btnGoogle = $("googleSignInBtn");
        const btnOut = $("googleSignOutBtn");
        const btnGuest = $("guestContinueBtn");
        const pe = $("playerName");
        const hint = $("authHint");

        if (isGoogle()) {
            if (status) {
                status.textContent = "Bağlı: " + (user.name || "Google");
                status.classList.remove("hidden");
            }
            if (btnGoogle) btnGoogle.classList.add("hidden");
            if (btnOut) btnOut.classList.remove("hidden");
            if (btnGuest) btnGuest.classList.add("hidden");
            if (hint) {
                hint.textContent = "Tam sürüm · tüm kurumlar ve sınırsız vardiya";
            }
            if (pe && user.name) {
                pe.value = user.name.slice(0, 24);
                pe.readOnly = true;
            }
        } else {
            if (status) {
                const used = getGuestShiftsUsed();
                if (used >= AUTH_CONFIG.guestMaxShifts) {
                    status.textContent = "Misafir hakkınız doldu · Google ile giriş gerekli";
                } else {
                    status.textContent = "Misafir · sadece AVM · " + (AUTH_CONFIG.guestMaxShifts - used) + " vardiya hakkı";
                }
                status.classList.remove("hidden");
            }
            if (btnGoogle) btnGoogle.classList.remove("hidden");
            if (btnOut) btnOut.classList.add("hidden");
            if (btnGuest) btnGuest.classList.remove("hidden");
            if (hint) {
                hint.textContent = "Tam sürüm için Google · veya AVM’de 1 vardiya dene";
            }
            if (pe) pe.readOnly = false;
        }

        // Client ID yoksa Google butonu bilgilendirici
        if (btnGoogle) {
            const hasId = !!(AUTH_CONFIG.googleClientId && AUTH_CONFIG.googleClientId.trim());
            if (!hasId) {
                btnGoogle.title = "Client ID henüz eklenmedi (auth.js)";
            }
        }
    }

    function initGis() {
        const clientId = (AUTH_CONFIG.googleClientId || "").trim();
        if (!clientId) {
            gisReady = false;
            return;
        }
        if (typeof google === "undefined" || !google.accounts || !google.accounts.id) {
            setTimeout(initGis, 400);
            return;
        }
        try {
            google.accounts.id.initialize({
                client_id: clientId,
                callback: onGoogleCredential,
                auto_select: false,
                cancel_on_tap_outside: true
            });
            gisReady = true;
            const btn = $("googleSignInBtn");
            if (btn && !btn.__gisBound) {
                btn.__gisBound = true;
                btn.addEventListener("click", () => {
                    try {
                        google.accounts.id.prompt((notification) => {
                            if (notification && notification.isNotDisplayed && notification.isNotDisplayed()) {
                                // One Tap yoksa token client / renderButton alternatifi
                                const host = $("googleBtnHost");
                                if (host && !host.__rendered) {
                                    host.innerHTML = "";
                                    google.accounts.id.renderButton(host, {
                                        theme: "outline",
                                        size: "large",
                                        width: host.offsetWidth || 320,
                                        text: "continue_with",
                                        locale: "tr"
                                    });
                                    host.__rendered = true;
                                    host.classList.remove("hidden");
                                }
                            }
                        });
                    } catch (e) {
                        console.warn(e);
                        flash("Google girişi başlatılamadı.");
                    }
                });
            }
        } catch (e) {
            console.warn("GIS init:", e);
        }
    }

    function bind() {
        user = loadUser();
        if (user && user.provider === "google") {
            const pe = $("playerName");
            if (pe && user.name) {
                pe.value = user.name.slice(0, 24);
                pe.readOnly = true;
            }
            if (window.game) game.playerName = user.name.slice(0, 24);
        }

        $("googleSignOutBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            signOut();
        });

        $("guestContinueBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            continueAsGuest();
            // isim yoksa yine uyarı startBtn'de
            const pe = $("playerName");
            if (pe && !pe.value.trim()) pe.focus();
        });

        renderAuthUI();
        initGis();
        setTimeout(initGis, 800);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }

    return {
        config: AUTH_CONFIG,
        isGoogle,
        isGuest,
        isFullAccess,
        guestCanPlay,
        canOpenInstitution,
        markGuestShiftDone,
        getGuestShiftsUsed,
        getDisplayName,
        getUser: () => user,
        signOut,
        continueAsGuest,
        renderAuthUI,
        setClientId(id) {
            AUTH_CONFIG.googleClientId = id || "";
            initGis();
            renderAuthUI();
        }
    };
})();

window.Auth = Auth;
window.AUTH_CONFIG = AUTH_CONFIG;
