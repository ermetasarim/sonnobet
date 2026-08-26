/**
 * Son Nöbet — Supabase (auth + liderlik)
 */
(function () {
    const SUPABASE_URL = "https://waewqptmwyvdgxftqszk.supabase.co";
    const SUPABASE_KEY = "sb_publishable_Imksxy0nZ7MK4KJMkExh4w_VE5W4Dbz";

    let client = null;
    let session = null;
    let profile = null; // { id, display_name, email }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (window.supabase && window.supabase.createClient) {
                resolve();
                return;
            }
            if (document.querySelector("script[data-supabase-js]")) {
                const t = setInterval(() => {
                    if (window.supabase && window.supabase.createClient) {
                        clearInterval(t);
                        resolve();
                    }
                }, 50);
                setTimeout(() => { clearInterval(t); reject(new Error("timeout")); }, 8000);
                return;
            }
            const s = document.createElement("script");
            s.src = src;
            s.async = true;
            s.dataset.supabaseJs = "1";
            s.onload = () => resolve();
            s.onerror = () => reject(new Error("supabase-js yüklenemedi"));
            document.head.appendChild(s);
        });
    }

    async function init() {
        if (client) return client;
        try {
            await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js");
            if (!window.supabase || !window.supabase.createClient) return null;
            client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
            const { data } = await client.auth.getSession();
            session = data && data.session ? data.session : null;
            if (session) await loadProfile();
            client.auth.onAuthStateChange(async (_ev, s) => {
                session = s;
                if (s) await loadProfile();
                else profile = null;
                try {
                    if (typeof window.onSNAuthChange === "function") window.onSNAuthChange(!!s, profile);
                } catch (e) {}
            });
            return client;
        } catch (e) {
            console.warn("Supabase init:", e);
            return null;
        }
    }

    async function loadProfile() {
        if (!client || !session || !session.user) {
            profile = null;
            return null;
        }
        const uid = session.user.id;
        const metaName = (session.user.user_metadata && (session.user.user_metadata.display_name || session.user.user_metadata.username)) || "";
        const email = session.user.email || "";
        let stored = "";
        try { stored = localStorage.getItem("son_nobet_display_name") || ""; } catch (e) {}
        let dbName = "";
        let dbEmail = "";
        let dbAdmin = false;
        try {
            const { data } = await client.from("profiles").select("id, display_name, email, is_admin").eq("id", uid).maybeSingle();
            if (data) {
                if (data.display_name) dbName = data.display_name;
                if (data.email) dbEmail = data.email;
                if (data.is_admin === true) dbAdmin = true;
            }
        } catch (e) {
            try {
                const { data } = await client.from("profiles").select("id, display_name").eq("id", uid).maybeSingle();
                if (data && data.display_name) dbName = data.display_name;
            } catch (e2) {}
        }
        const display = (metaName || dbName || stored || email.split("@")[0] || "Görevli").trim();
        // Bootstrap: listede tanımlı e-posta otomatik admin
        const bootAdmin = BOOTSTRAP_ADMIN_EMAILS.includes(String(email).toLowerCase());
        const isAdmin = dbAdmin || bootAdmin;
        profile = {
            id: uid,
            display_name: display,
            email: dbEmail || email,
            is_admin: isAdmin
        };
        try {
            if (display) localStorage.setItem("son_nobet_display_name", display);
        } catch (e) {}
        try {
            await client.from("profiles").upsert({
                id: uid,
                display_name: display,
                email: email || dbEmail || null,
                is_admin: isAdmin
            });
        } catch (e) {}
        return profile;
    }

    async function signUp(username, email, password) {
        const sb = await init();
        if (!sb) return { ok: false, error: "Bağlantı kurulamadı" };
        const name = String(username || "").trim().slice(0, 24);
        const em = String(email || "").trim().toLowerCase();
        const pw = String(password || "");
        if (name.length < 2) return { ok: false, error: "Kullanıcı adı en az 2 karakter olmalı" };
        if (!em || !em.includes("@")) return { ok: false, error: "Geçerli bir e-posta girin" };
        if (pw.length < 6) return { ok: false, error: "Şifre en az 6 karakter olmalı" };

        const { data, error } = await sb.auth.signUp({
            email: em,
            password: pw,
            options: { data: { display_name: name } }
        });
        if (error) return { ok: false, error: error.message || "Kayıt başarısız" };

        // E-posta onayı kapalıysa session hemen gelir
        session = data.session || null;
        if (session && session.user) {
            // Kayıt sırasında girilen kullanıcı adı her zaman geçerli olsun
            profile = {
                id: session.user.id,
                display_name: name,
                email: session.user.email || em
            };
            try {
                localStorage.setItem("son_nobet_display_name", name);
            } catch (e) {}
            try {
                await sb.from("profiles").upsert({
                    id: session.user.id,
                    display_name: name,
                    email: em,
                    is_admin: false
                });
            } catch (e) {}
            // loadProfile meta/DB ile birleştirsin ama boşsa name kalsın
            await loadProfile();
            if (!profile || !profile.display_name) {
                profile = { id: session.user.id, display_name: name, email: em };
            } else if (!profile.display_name || profile.display_name === em.split("@")[0]) {
                // DB boş veya sadece e-posta kökü döndüyse kayıt adını koru
                profile.display_name = name;
            }
        } else if (data.user) {
            return {
                ok: false,
                error: "E-posta onayı açık. Supabase → Authentication → Providers → Email → Confirm email KAPATIN; sonra tekrar deneyin."
            };
        }
        return { ok: true, profile };
    }

    async function signIn(email, password) {
        const sb = await init();
        if (!sb) return { ok: false, error: "Bağlantı kurulamadı" };
        const em = String(email || "").trim().toLowerCase();
        const pw = String(password || "");
        if (!em || pw.length < 6) return { ok: false, error: "E-posta ve şifre gerekli" };
        const { data, error } = await sb.auth.signInWithPassword({ email: em, password: pw });
        if (error) return { ok: false, error: error.message || "Giriş başarısız" };
        session = data.session || null;
        await loadProfile();
        return { ok: true, profile };
    }

    async function signOut() {
        const sb = await init();
        if (sb) await sb.auth.signOut();
        session = null;
        profile = null;
        try {
            sessionStorage.removeItem("son_nobet_admin_auth_v1");
            sessionStorage.removeItem("son_nobet_admin_authed");
        } catch (e) {}
        return { ok: true };
    }

    function isLoggedIn() {
        return !!(session && session.user);
    }

    const BOOTSTRAP_ADMIN_EMAILS = ["ermetasarim@gmail.com"];

    function isAdmin() {
        // Tek kaynak: profiles.is_admin (loadProfile bootstrap e-postaya is_admin yazar)
        try {
            if (!profile) return false;
            const flag = profile.is_admin;
            return flag === true || flag === "true" || flag === 1 || flag === "1" || flag === "t";
        } catch (e) {}
        return false;
    }

    async function refreshProfile() {
        await init();
        if (session) await loadProfile();
        return profile;
    }

    function getDisplayName() {
        if (profile && profile.display_name) return profile.display_name;
        if (session && session.user) {
            const m = session.user.user_metadata || {};
            if (m.display_name) return m.display_name;
            if (m.username) return m.username;
        }
        try {
            const s = localStorage.getItem("son_nobet_display_name");
            if (s) return s;
        } catch (e) {}
        if (session && session.user && session.user.email) {
            return session.user.email.split("@")[0];
        }
        return "";
    }

    function getUserId() {
        return session && session.user ? session.user.id : null;
    }

    async function submitScore(entry) {
        const sb = await init();
        if (!sb) return { ok: false, error: "client" };
        const row = {
            user_id: getUserId(),
            player_name: String(entry.name || getDisplayName() || "Görevli").slice(0, 32),
            institution: entry.institution || null,
            score: Math.max(0, Math.min(100000, Number(entry.score) || 0)),
            accuracy: Math.max(0, Math.min(100, Number(entry.accuracy) || 0)),
            money: Math.max(0, Number(entry.money) || 0),
            rank_title: entry.rank || entry.rank_title || null
        };
        const { data, error } = await sb.from("scores").insert(row).select("id").limit(1);
        if (error) {
            console.warn("submitScore:", error.message || error);
            return { ok: false, error };
        }
        return { ok: true, data };
    }


    async function clearAllScores() {
        const sb = await init();
        if (!sb) return { ok: false, error: "client" };

        // 1) Tercih: security definer RPC (RLS aşar)
        try {
            const { error: rpcErr } = await sb.rpc("clear_all_scores");
            if (!rpcErr) {
                return { ok: true, method: "rpc" };
            }
            console.warn("clear_all_scores rpc:", rpcErr.message || rpcErr);
        } catch (e) {
            console.warn("rpc missing", e);
        }

        // 2) Doğrudan delete
        let { data, error } = await sb.from("scores").delete().gte("score", 0).select("id");
        if (error) {
            ({ data, error } = await sb.from("scores").delete().gte("id", 0).select("id"));
        }
        if (error) {
            return {
                ok: false,
                error: (error.message || String(error)) +
                    " | SQL çalıştır: create function clear_all_scores + truncate"
            };
        }
        return { ok: true, count: (data && data.length) || 0, method: "delete" };
    }


    async function fetchTopScores(limit) {
        const sb = await init();
        if (!sb) return [];
        const n = Math.min(50, Math.max(5, limit || 20));
        const { data, error } = await sb
            .from("scores")
            .select("player_name, institution, score, accuracy, money, rank_title, created_at")
            .order("score", { ascending: false })
            .limit(n);
        if (error) {
            console.warn("fetchTopScores:", error.message || error);
            return [];
        }
        return (data || []).map((r) => ({
            name: r.player_name,
            institution: r.institution,
            score: r.score,
            accuracy: r.accuracy,
            money: r.money,
            rank: r.rank_title,
            at: r.created_at,
            online: true
        }));
    }

    window.SNSupabase = {
        init,
        signUp,
        signIn,
        signOut,
        isLoggedIn,
        getDisplayName,
        isAdmin,
        refreshProfile,
        getUserId,
        getProfile: () => profile,
        getSession: () => session,
        submitScore,
        fetchTopScores,
        clearAllScores
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => { init(); });
    } else {
        init();
    }
})();
