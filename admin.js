/* Son Nöbet — Admin giriş (ana hesap ekranı ile aynı sistem) */
(function () {
    function $(id) { return document.getElementById(id); }

    function showAdminRoot() {
        if (typeof show === "function") show("adminRoot");
        else {
            document.querySelectorAll(".screen").forEach((s) => s.classList.add("hidden"));
            $("adminRoot")?.classList.remove("hidden");
        }
    }

    function goMenu() {
        if (typeof show === "function") show("menuScreen");
        else {
            $("adminRoot")?.classList.add("hidden");
            $("menuScreen")?.classList.remove("hidden");
        }
    }

    function showError(msg) {
        const el = $("adminAuthError");
        if (!el) return;
        if (!msg) {
            el.classList.add("hidden");
            el.textContent = "";
            return;
        }
        el.textContent = msg;
        el.classList.remove("hidden");
    }

    function setHome(on) {
        const login = $("adminRoot")?.querySelector(".adminAuthCard");
        const home = $("adminHomeScreen");
        if (login) login.classList.toggle("hidden", !!on);
        if (home) home.classList.toggle("hidden", !on);
    }

    async function openAdmin() {
        setHome(false);
        showError("");
        showAdminRoot();
        const email = $("adminAuthEmail");
        if (email) email.focus();
    }

    async function submitLogin(e) {
        if (e) e.preventDefault();
        showError("");
        const em = ($("adminAuthEmail") && $("adminAuthEmail").value || "").trim().toLowerCase();
        const pw = ($("adminAuthPassword") && $("adminAuthPassword").value || "");
        if (!em || !em.includes("@")) {
            showError("Geçerli bir e-posta girin.");
            return;
        }
        if (pw.length < 6) {
            showError("Şifre en az 6 karakter olmalı.");
            return;
        }
        const btn = $("adminAuthSubmit");
        if (btn) { btn.disabled = true; btn.textContent = "Lütfen bekleyin…"; }
        try {
            if (!window.SNSupabase) {
                showError("Online servis yüklenemedi.");
                return;
            }
            await SNSupabase.init();
            const res = await SNSupabase.signIn(em, pw);
            if (!res || !res.ok) {
                showError((res && res.error) || "Giriş başarısız");
                return;
            }
            if (typeof SNSupabase.refreshProfile === "function") {
                await SNSupabase.refreshProfile();
            }
            if (!SNSupabase.isAdmin || !SNSupabase.isAdmin()) {
                showError("Bu hesap admin değil. Supabase profiles.is_admin = true olmalı.");
                setHome(false);
                return;
            }
            if ($("adminAuthPassword")) $("adminAuthPassword").value = "";
            setHome(true);
        } catch (err) {
            showError(err && err.message ? err.message : "Beklenmeyen hata");
        } finally {
            if (btn) { btn.disabled = false; btn.textContent = "GİRİŞ YAP"; }
        }
    }

    function bind() {
        $("openAdminBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            openAdmin();
        });
        $("adminAuthForm")?.addEventListener("submit", submitLogin);
        $("adminAuthBack")?.addEventListener("click", (e) => {
            e.preventDefault();
            goMenu();
        });
        $("adminHomeBack")?.addEventListener("click", (e) => {
            e.preventDefault();
            goMenu();
        });
    }

    function updateAdminButtonVisibility() {
        const btn = $("openAdminBtn");
        if (!btn) return;
        btn.classList.remove("hidden");
        btn.removeAttribute("hidden");
        btn.style.display = "";
        btn.disabled = false;
        btn.setAttribute("aria-hidden", "false");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }

    window.updateAdminButtonVisibility = updateAdminButtonVisibility;
    window.AdminPanel = {
        open: openAdmin,
        updateAdminButtonVisibility
    };
})();
