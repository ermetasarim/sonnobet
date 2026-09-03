/* Son Nöbet — Admin giriş + soru portalı */
(function () {
    const BANK_KEY = "son_nobet_bank_override_v1";

    function $(id) { return document.getElementById(id); }

    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function getBaseBank() {
        if (typeof senaryoSoruBankasi !== "undefined" && senaryoSoruBankasi) {
            return senaryoSoruBankasi;
        }
        return {};
    }

    function loadOverride() {
        try {
            const raw = localStorage.getItem(BANK_KEY);
            if (!raw) return null;
            const data = JSON.parse(raw);
            if (data && typeof data === "object") return data;
        } catch (e) {}
        return null;
    }

    function applyBankToGame(bank) {
        try { window.senaryoSoruBankasi = bank; } catch (e) {}
    }

    function persistBank(bank) {
        try {
            localStorage.setItem(BANK_KEY, JSON.stringify(bank));
        } catch (e) {
            alert("Kayıt sığmadı. Tarayıcı depolama dolu olabilir.");
            return false;
        }
        applyBankToGame(bank);
        return true;
    }

    function bootBank() {
        const over = loadOverride();
        if (over) applyBankToGame(over);
        else applyBankToGame(getBaseBank());
    }

    function bank() {
        return (typeof senaryoSoruBankasi !== "undefined" && senaryoSoruBankasi)
            ? senaryoSoruBankasi
            : {};
    }

    const INST_META = {
        Site: { icon: "🏢" },
        AVM: { icon: "🏬" },
        Fabrika: { icon: "🏭" },
        Banka: { icon: "🏦" },
        Belediye: { icon: "🏛️" },
        Hastane: { icon: "🏥" },
        Havalimanı: { icon: "✈️" }
    };
    const INST_ORDER = ["Site", "AVM", "Fabrika", "Banka", "Belediye", "Hastane", "Havalimanı"];

    let curInst = "";
    let curSid = "";
    let editIndex = -1;

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
        if (!msg) { el.classList.add("hidden"); el.textContent = ""; return; }
        el.textContent = msg;
        el.classList.remove("hidden");
    }

    function setLoginVisible(on) {
        const login = $("adminRoot")?.querySelector(".adminAuthCard");
        const home = $("adminHomeScreen");
        if (login) login.classList.toggle("hidden", !on);
        if (home) home.classList.toggle("hidden", on);
    }

    function hideAllQViews() {
        ["adminQViewInst", "adminQViewScen", "adminQViewScenEdit", "adminQViewList", "adminQViewEdit"].forEach((id) => {
            $(id)?.classList.add("hidden");
        });
    }

    function showHomeTiles(on) {
        const grid = $("adminHomeScreen")?.querySelector(".adminHomeGrid");
        const title = $("adminHomeTitle");
        const back = $("adminHomeBack");
        if (grid) grid.classList.toggle("hidden", !on);
        if (title) title.classList.toggle("hidden", !on);
        if (back) back.classList.toggle("hidden", !on);
        if (on) {
            $("adminQPortal")?.classList.add("hidden");
            $("adminMPortal")?.classList.add("hidden");
        }
    }

    function setQView(name) {
        hideAllQViews();
        $("adminQPortal")?.classList.remove("hidden");
        if (name === "inst") $("adminQViewInst")?.classList.remove("hidden");
        if (name === "scen") $("adminQViewScen")?.classList.remove("hidden");
        if (name === "list") $("adminQViewList")?.classList.remove("hidden");
        if (name === "edit") $("adminQViewEdit")?.classList.remove("hidden");
        if (name === "scenEdit") $("adminQViewScenEdit")?.classList.remove("hidden");
    }

    function escapeHtml(s) {
        return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
    }
    function escapeAttr(s) { return escapeHtml(s).replace(/'/g, "&#39;"); }

    function renderInstitutions() {
        const grid = $("adminQInstGrid");
        if (!grid) return;
        const b = bank();
        const names = INST_ORDER.filter((n) => b[n]).concat(Object.keys(b).filter((n) => INST_ORDER.indexOf(n) === -1));
        grid.innerHTML = names.map((name) => {
            const meta = INST_META[name] || { icon: "📁" };
            const pack = b[name] || {};
            const scenN = Object.keys(pack).length;
            let qN = 0;
            Object.keys(pack).forEach((sid) => { qN += ((pack[sid] && pack[sid].questions) || []).length; });
            return `<button type="button" class="adminQTile" data-inst="${escapeAttr(name)}">
                <span class="adminQTileIcon">${meta.icon}</span>
                <strong>${escapeHtml(name)}</strong>
                <small>${scenN} senaryo · ${qN} soru</small>
            </button>`;
        }).join("");
        grid.querySelectorAll("[data-inst]").forEach((btn) => {
            btn.addEventListener("click", () => openScenarios(btn.getAttribute("data-inst")));
        });
    }

    function openQuestions() {
        showHomeTiles(false);
        renderInstitutions();
        setQView("inst");
    }

    let scenEditOldId = "";

    function slugifyId(s) {
        return String(s || "")
            .toLocaleLowerCase("tr")
            .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
            .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_|_$/g, "")
            .slice(0, 48) || ("senaryo_" + Date.now());
    }

    function openScenarios(inst) {
        curInst = inst;
        const pack = (bank()[inst] || {});
        const title = $("adminQScenTitle");
        if (title) title.textContent = inst + " · Senaryolar";
        const list = $("adminQScenList");
        if (list) {
            const ids = Object.keys(pack);
            if (!ids.length) list.innerHTML = `<p class="adminMuted">Bu kurumda senaryo yok.</p>`;
            else {
                const marks = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];
                list.innerHTML = ids.map((sid, i) => {
                    const s = pack[sid] || {};
                    const n = (s.questions || []).length;
                    const mark = marks[i] || ((i + 1) + ".");
                    return `<div class="adminQRow adminQScenRow">
                        <button type="button" class="adminQScenOpen" data-sid="${escapeAttr(sid)}">
                            <strong>${mark} - ${escapeHtml(s.title || sid)}</strong>
                            <small>Soru: ${n}</small>
                            <small>ID: ${escapeHtml(sid)}</small>
                        </button>
                        <button type="button" class="adminQMini" data-edit-sid="${escapeAttr(sid)}">Düzenle</button>
                    </div>`;
                }).join("");
                list.querySelectorAll("[data-sid]").forEach((btn) => {
                    btn.addEventListener("click", () => openQuestionList(btn.getAttribute("data-sid")));
                });
                list.querySelectorAll("[data-edit-sid]").forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openScenarioEditor(btn.getAttribute("data-edit-sid"));
                    });
                });
            }
        }
        setQView("scen");
    }

    function openScenarioEditor(sid) {
        const isNew = !sid;
        scenEditOldId = isNew ? "" : sid;
        const s = isNew ? { title: "", description: "", questions: [] } : (((bank()[curInst] || {})[sid]) || {});
        if ($("adminQScenEditTitle")) $("adminQScenEditTitle").textContent = isNew ? "Yeni Senaryo" : "Senaryo düzenle";
        if ($("adminQScenId")) {
            $("adminQScenId").value = sid || "";
            $("adminQScenId").disabled = false;
        }
        if ($("adminQScenName")) $("adminQScenName").value = s.title || "";
        if ($("adminQScenDesc")) $("adminQScenDesc").value = s.description || s.desc || "";
        $("adminQScenDelete")?.classList.toggle("hidden", isNew);
        setQView("scenEdit");
    }

    function saveScenarioEditor() {
        const title = ($("adminQScenName") && $("adminQScenName").value || "").trim();
        let sid = ($("adminQScenId") && $("adminQScenId").value || "").trim();
        const desc = ($("adminQScenDesc") && $("adminQScenDesc").value || "").trim();
        if (!title) { alert("Senaryo başlığı yazın."); return; }
        if (!sid) sid = slugifyId(title);
        sid = slugifyId(sid);
        const b = clone(bank());
        if (!b[curInst]) b[curInst] = {};
        const pack = b[curInst];
        const prev = scenEditOldId && pack[scenEditOldId] ? pack[scenEditOldId] : { questions: [] };
        if (scenEditOldId && scenEditOldId !== sid && pack[sid]) {
            alert("Bu senaryo ID zaten var.");
            return;
        }
        pack[sid] = {
            title: title,
            description: desc,
            questions: Array.isArray(prev.questions) ? prev.questions : []
        };
        if (scenEditOldId && scenEditOldId !== sid) delete pack[scenEditOldId];
        if (!persistBank(b)) return;
        openScenarios(curInst);
    }

    function deleteScenarioEditor() {
        if (!scenEditOldId) return;
        if (!confirm("Bu senaryo ve içindeki tüm sorular silinsin mi?")) return;
        const b = clone(bank());
        if (b[curInst] && b[curInst][scenEditOldId]) delete b[curInst][scenEditOldId];
        if (!persistBank(b)) return;
        openScenarios(curInst);
    }

    function diffLabel(d) {
        const x = String(d || "medium").toLowerCase();
        if (x === "easy" || x === "kolay") return "🟢 Kolay";
        if (x === "hard" || x === "zor") return "🔴 Zor";
        return "🟡 Orta";
    }

    function openQuestionList(sid) {
        curSid = sid;
        const scen = ((bank()[curInst] || {})[sid]) || {};
        const title = $("adminQListTitle");
        if (title) title.textContent = (scen.title || sid);
        const hint = $("adminQListHint");
        if (hint) hint.textContent = scen.description || scen.desc || "";
        renderQuestionList();
        setQView("list");
    }

    function renderQuestionList() {
        const list = $("adminQList");
        if (!list) return;
        const qs = ((((bank()[curInst] || {})[curSid]) || {}).questions) || [];
        if (!qs.length) {
            list.innerHTML = `<p class="adminMuted">Bu senaryoda soru yok. Yeni soru ekleyin.</p>`;
            return;
        }
        list.innerHTML = qs.map((q, i) => {
            const stem = String(q.stem || "Soru").slice(0, 110);
            return `<button type="button" class="adminQRow" data-qi="${i}">
                <span><strong>${i + 1}. ${escapeHtml(stem)}${stem.length >= 110 ? "…" : ""}</strong><small>${diffLabel(q.difficulty)}</small></span>
                <span class="adminQRowArrow">Düzenle</span>
            </button>`;
        }).join("");
        list.querySelectorAll("[data-qi]").forEach((btn) => {
            btn.addEventListener("click", () => openEditor(Number(btn.getAttribute("data-qi"))));
        });
    }

    function emptyQuestion() {
        return {
            stem: "",
            options: ["", "", "", ""],
            correctIndex: 0,
            difficulty: "medium",
            shift: "both",
            explainCorrect: "Doğru: Tebrikler, sıradaki soru geliyor.",
            explainWrong: [
                "Yanlış: Üzgünüz! Bu doğru bir tercih değil.",
                "Yanlış: Üzgünüz! Bu doğru bir tercih değil.",
                "Yanlış: Üzgünüz! Bu doğru bir tercih değil.",
                "Yanlış: Üzgünüz! Bu doğru bir tercih değil."
            ],
            institution: curInst,
            scenarioId: curSid
        };
    }

    function openEditor(index) {
        editIndex = index;
        const qs = ((((bank()[curInst] || {})[curSid]) || {}).questions) || [];
        const q = index < 0 ? emptyQuestion() : clone(qs[index] || emptyQuestion());
        const title = $("adminQEditTitle");
        if (title) title.textContent = index < 0 ? "Yeni Soru" : ("Soru " + (index + 1));
        if ($("adminQStem")) $("adminQStem").value = q.stem || "";
        const opts = q.options || ["", "", "", ""];
        for (let i = 0; i < 4; i++) {
            if ($("adminQOpt" + i)) $("adminQOpt" + i).value = opts[i] || "";
            if ($("adminQCorrect" + i)) $("adminQCorrect" + i).checked = Number(q.correctIndex) === i;
        }
        const diff = $("adminQDiff");
        if (diff) {
            const d = String(q.difficulty || "medium").toLowerCase();
            diff.value = (d === "easy" || d === "kolay") ? "easy" : (d === "hard" || d === "zor") ? "hard" : "medium";
        }
        $("adminQDelete")?.classList.toggle("hidden", index < 0);
        setQView("edit");
    }

    function saveEditor() {
        const stem = ($("adminQStem") && $("adminQStem").value || "").trim();
        const options = [0,1,2,3].map((i) => ($("adminQOpt" + i) && $("adminQOpt" + i).value || "").trim());
        let correct = 0;
        for (let i = 0; i < 4; i++) if ($("adminQCorrect" + i) && $("adminQCorrect" + i).checked) correct = i;
        const diff = ($("adminQDiff") && $("adminQDiff").value) || "medium";
        if (!stem) { alert("Soru metnini yazın."); return; }
        if (options.filter(Boolean).length < 2) { alert("En az 2 şık yazın."); return; }
        const b = clone(bank());
        if (!b[curInst]) b[curInst] = {};
        if (!b[curInst][curSid]) b[curInst][curSid] = { title: curSid, description: "", questions: [] };
        if (!Array.isArray(b[curInst][curSid].questions)) b[curInst][curSid].questions = [];
        const q = emptyQuestion();
        q.stem = stem; q.options = options; q.correctIndex = correct; q.difficulty = diff;
        if (editIndex < 0) b[curInst][curSid].questions.push(q);
        else b[curInst][curSid].questions[editIndex] = Object.assign({}, b[curInst][curSid].questions[editIndex] || {}, q);
        if (!persistBank(b)) return;
        openQuestionList(curSid);
    }

    function deleteEditor() {
        if (editIndex < 0) return;
        if (!confirm("Bu soru silinsin mi?")) return;
        const b = clone(bank());
        const qs = (((b[curInst] || {})[curSid] || {}).questions) || [];
        qs.splice(editIndex, 1);
        if (b[curInst] && b[curInst][curSid]) b[curInst][curSid].questions = qs;
        if (!persistBank(b)) return;
        openQuestionList(curSid);
    }

    async function openAdmin() {
        setLoginVisible(true);
        showError("");
        showAdminRoot();
        $("adminAuthEmail")?.focus();
    }

    async function submitLogin(e) {
        if (e) e.preventDefault();
        showError("");
        const em = ($("adminAuthEmail") && $("adminAuthEmail").value || "").trim().toLowerCase();
        const pw = ($("adminAuthPassword") && $("adminAuthPassword").value || "");
        if (!em || !em.includes("@")) { showError("Geçerli bir e-posta girin."); return; }
        if (pw.length < 6) { showError("Şifre en az 6 karakter olmalı."); return; }
        const btn = $("adminAuthSubmit");
        if (btn) { btn.disabled = true; btn.textContent = "Lütfen bekleyin…"; }
        try {
            if (!window.SNSupabase) { showError("Online servis yüklenemedi."); return; }
            await SNSupabase.init();
            const res = await SNSupabase.signIn(em, pw);
            if (!res || !res.ok) { showError((res && res.error) || "Giriş başarısız"); return; }
            if (typeof SNSupabase.refreshProfile === "function") await SNSupabase.refreshProfile();
            if (!SNSupabase.isAdmin || !SNSupabase.isAdmin()) {
                showError("Bu hesap admin değil. Supabase profiles.is_admin = true olmalı.");
                setLoginVisible(true);
                return;
            }
            if ($("adminAuthPassword")) $("adminAuthPassword").value = "";
            setLoginVisible(false);
            showHomeTiles(true);
        } catch (err) {
            showError(err && err.message ? err.message : "Beklenmeyen hata");
        } finally {
            if (btn) { btn.disabled = false; btn.textContent = "GİRİŞ YAP"; }
        }
    }


    const MEMBER_PAGE = 20;
    const MEMBER_LETTERS = ["Tümü","A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"];
    let memberRows = [];
    let memberPage = 0;
    let memberLetter = "Tümü";
    let memberEditId = null; // null = new

    function fmtDate(iso) {
        if (!iso) return "—";
        const d = new Date(iso);
        if (isNaN(d.getTime())) return "—";
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        return dd + "/" + mm + "/" + d.getFullYear();
    }

    function setMView(list) {
        $("adminMPortal")?.classList.remove("hidden");
        $("adminQPortal")?.classList.add("hidden");
        $("adminMViewList")?.classList.toggle("hidden", !list);
        $("adminMViewEdit")?.classList.toggle("hidden", list);
    }

    async function openMembers() {
        showHomeTiles(false);
        $("adminQPortal")?.classList.add("hidden");
        $("adminMPortal")?.classList.remove("hidden");
        await showMemberList();
    }

    async function showMemberList() {
        setMView(true);
        const box = $("adminMList");
        if (box) box.innerHTML = `<p class="adminMuted">Yükleniyor…</p>`;
        if (!window.SNSupabase || !SNSupabase.listProfiles) {
            if (box) box.innerHTML = `<p class="adminMuted">Supabase yok.</p>`;
            return;
        }
        const res = await SNSupabase.listProfiles();
        if (!res || !res.ok) {
            if (box) box.innerHTML = `<p class="adminMuted">Liste alınamadı: ${escapeHtml((res && res.error) || "")}</p>`;
            return;
        }
        memberRows = res.rows || [];
        memberPage = 0;
        renderMemberLetters();
        renderMemberPage();
    }

    function memberInitial(name) {
        const s = String(name || "").trim().toLocaleUpperCase("tr");
        return s ? s.charAt(0) : "#";
    }

    function filteredMembers() {
        if (memberLetter === "Tümü") return memberRows;
        return memberRows.filter((r) => memberInitial(r.display_name || r.email) === memberLetter);
    }

    function renderMemberLetters() {
        const el = $("adminMLetters");
        if (!el) return;
        const used = new Set(memberRows.map((r) => memberInitial(r.display_name || r.email)));
        el.innerHTML = MEMBER_LETTERS.map((L) => {
            const off = L !== "Tümü" && !used.has(L);
            const on = L === memberLetter;
            return `<button type="button" class="adminMLetter${on ? " on" : ""}${off ? " off" : ""}" data-letter="${L}" ${off ? "disabled" : ""}>${L}</button>`;
        }).join("");
        el.querySelectorAll("[data-letter]").forEach((btn) => {
            btn.addEventListener("click", () => {
                memberLetter = btn.getAttribute("data-letter") || "Tümü";
                memberPage = 0;
                renderMemberLetters();
                renderMemberPage();
            });
        });
    }

    function renderMemberPage() {
        const box = $("adminMList");
        const label = $("adminMPageLabel");
        const prev = $("adminMPrev");
        const next = $("adminMNext");
        const pager = $("adminMPager");
        const rows = filteredMembers();
        if (!box) return;
        if (!memberRows.length) {
            box.innerHTML = `<p class="adminMuted">Kayıtlı üye yok.</p>`;
            if (pager) pager.classList.add("hidden");
            return;
        }
        if (!rows.length) {
            box.innerHTML = `<p class="adminMuted">Bu harfte üye yok.</p>`;
        }
        const pages = Math.max(1, Math.ceil(rows.length / MEMBER_PAGE));
        if (memberPage >= pages) memberPage = pages - 1;
        const start = memberPage * MEMBER_PAGE;
        const slice = rows.slice(start, start + MEMBER_PAGE);
        box.innerHTML = slice.map((r, i) => {
            const n = start + i + 1;
            const role = r.is_admin ? "Admin" : "Üye";
            return `<button type="button" class="adminQRow" data-mid="${escapeAttr(r.id)}">
                <span>
                    <strong>${n}. ${escapeHtml(r.display_name || "—")}</strong>
                    <small>${escapeHtml(r.email || "—")} · ${role} · ${fmtDate(r.created_at)}</small>
                </span>
                <span class="adminQRowArrow">Düzenle</span>
            </button>`;
        }).join("");
        box.querySelectorAll("[data-mid]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-mid");
                const row = memberRows.find((x) => x.id === id);
                openMemberEditor(row || { id });
            });
        });
        if (pager) pager.classList.remove("hidden");
        if (label) label.textContent = (memberPage + 1) + " / " + pages;
        if (prev) prev.disabled = memberPage <= 0;
        if (next) next.disabled = memberPage >= pages - 1;
        const count = $("adminMCount");
        if (count) {
            const from = rows.length ? (start + 1) : 0;
            const to = start + slice.length;
            count.textContent = rows.length + " üye · A–Z · " + from + "–" + to + " gösteriliyor";
        }
    }

    function openMemberEditor(row) {
        memberEditId = row && row.id ? row.id : null;
        const title = $("adminMEditTitle");
        if (title) title.textContent = memberEditId ? "Üye düzenle" : "Yeni Üye";
        if ($("adminMName")) $("adminMName").value = (row && row.display_name) || "";
        if ($("adminMEmail")) $("adminMEmail").value = (row && row.email) || "";
        if ($("adminMPass")) $("adminMPass").value = "";
        const passWrap = $("adminMPassWrap");
        if (passWrap) passWrap.classList.toggle("hidden", !!memberEditId);
        if ($("adminMRole")) $("adminMRole").value = (row && row.is_admin) ? "admin" : "user";
        $("adminMDelete")?.classList.toggle("hidden", !memberEditId);
        setMView(false);
    }

    async function saveMember() {
        const name = ($("adminMName") && $("adminMName").value || "").trim();
        const email = ($("adminMEmail") && $("adminMEmail").value || "").trim().toLowerCase();
        const pass = ($("adminMPass") && $("adminMPass").value || "");
        const isAdmin = ($("adminMRole") && $("adminMRole").value) === "admin";
        if (name.length < 2) { alert("Kullanıcı adı en az 2 karakter."); return; }
        if (!email.includes("@")) { alert("Geçerli e-posta girin."); return; }
        const btn = $("adminMSave");
        if (btn) { btn.disabled = true; btn.textContent = "Kaydediliyor…"; }
        try {
            if (!window.SNSupabase) { alert("Supabase yok."); return; }
            if (!memberEditId) {
                if (pass.length < 6) { alert("Şifre en az 6 karakter."); return; }
                const res = await SNSupabase.createMember({ name, email, password: pass, isAdmin });
                if (!res || !res.ok) { alert((res && res.error) || "Eklenemedi"); return; }
            } else {
                const res = await SNSupabase.updateProfileRow(memberEditId, {
                    display_name: name,
                    email,
                    is_admin: isAdmin
                });
                if (!res || !res.ok) { alert((res && res.error) || "Güncellenemedi"); return; }
            }
            await showMemberList();
        } finally {
            if (btn) { btn.disabled = false; btn.textContent = "KAYDET"; }
        }
    }

    async function deleteMember() {
        if (!memberEditId) return;
        if (!confirm("Bu üye silinsin mi?")) return;
        const res = await SNSupabase.deleteProfileRow(memberEditId);
        if (!res || !res.ok) { alert((res && res.error) || "Silinemedi"); return; }
        await showMemberList();
    }

    function bind() {
        bootBank();
        $("openAdminBtn")?.addEventListener("click", (e) => { e.preventDefault(); openAdmin(); });
        $("adminAuthForm")?.addEventListener("submit", submitLogin);
        $("adminAuthBack")?.addEventListener("click", (e) => { e.preventDefault(); goMenu(); });
        $("adminHomeBack")?.addEventListener("click", (e) => { e.preventDefault(); goMenu(); });
        $("adminTileSorular")?.addEventListener("click", (e) => { e.preventDefault(); openQuestions(); });
        $("adminTileUyeler")?.addEventListener("click", (e) => { e.preventDefault(); openMembers(); });
        $("adminQBackHome")?.addEventListener("click", (e) => { e.preventDefault(); showHomeTiles(true); });
        $("adminQBackInst")?.addEventListener("click", (e) => { e.preventDefault(); renderInstitutions(); setQView("inst"); });
        $("adminQAddScen")?.addEventListener("click", (e) => { e.preventDefault(); openScenarioEditor(""); });
        $("adminQScenSave")?.addEventListener("click", (e) => { e.preventDefault(); saveScenarioEditor(); });
        $("adminQScenDelete")?.addEventListener("click", (e) => { e.preventDefault(); deleteScenarioEditor(); });
        $("adminQBackScenEdit")?.addEventListener("click", (e) => { e.preventDefault(); openScenarios(curInst); });
        $("adminQBackScen")?.addEventListener("click", (e) => { e.preventDefault(); openScenarios(curInst); });
        $("adminQBackEdit")?.addEventListener("click", (e) => { e.preventDefault(); openQuestionList(curSid); });
        $("adminQAdd")?.addEventListener("click", (e) => { e.preventDefault(); openEditor(-1); });
        $("adminQSave")?.addEventListener("click", (e) => { e.preventDefault(); saveEditor(); });
        $("adminQDelete")?.addEventListener("click", (e) => { e.preventDefault(); deleteEditor(); });
        $("adminMBackHome")?.addEventListener("click", (e) => { e.preventDefault(); showHomeTiles(true); });
        $("adminMBackList")?.addEventListener("click", (e) => { e.preventDefault(); showMemberList(); });
        $("adminMAdd")?.addEventListener("click", (e) => { e.preventDefault(); openMemberEditor(null); });
        $("adminMPrev")?.addEventListener("click", (e) => { e.preventDefault(); memberPage = Math.max(0, memberPage - 1); renderMemberPage(); });
        $("adminMNext")?.addEventListener("click", (e) => { e.preventDefault(); const pages = Math.max(1, Math.ceil(filteredMembers().length / MEMBER_PAGE)); memberPage = Math.min(pages - 1, memberPage + 1); renderMemberPage(); });
        $("adminMSave")?.addEventListener("click", (e) => { e.preventDefault(); saveMember(); });
        $("adminMDelete")?.addEventListener("click", (e) => { e.preventDefault(); deleteMember(); });
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

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
    else bind();

    window.updateAdminButtonVisibility = updateAdminButtonVisibility;
    window.AdminPanel = { open: openAdmin, updateAdminButtonVisibility, getBank: bank };
})();
