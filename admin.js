/* =========================================================
   SON NÖBET — Admin Panel
   Senaryo / soru bankası düzenleme (localStorage)
   ========================================================= */

const ADMIN_BANK_KEY = "son_nobet_admin_bank_v1";
/** Admin panel şifresi — istediğiniz gibi değiştirin */
const ADMIN_PASSWORD = "sonnobet";
const ADMIN_AUTH_KEY = "son_nobet_admin_auth_v1";

const AdminPanel = (() => {
    const INST_META = [
        { id: "Site", icon: "🏢", desc: "Giriş · gürültü · gece misafiri" },
        { id: "AVM", icon: "🏬", desc: "Kalabalık · kayıp · mağaza" },
        { id: "Fabrika", icon: "🏭", desc: "Makine · sevkiyat · iş güvenliği" },
        { id: "Banka", icon: "🏦", desc: "Gişe · kasa · alarm" },
        { id: "Belediye", icon: "🏛️", desc: "Vatandaş · belge · kamu alanı" },
        { id: "Hastane", icon: "🏥", desc: "Acil · ziyaretçi · kısıtlı alan" },
        { id: "Havalimanı", icon: "✈️", desc: "Bagaj · terminal · yüksek prosedür" }
    ];

    let currentInst = null;
    let currentScenarioId = null;
    let dirty = false;
    /** Çalışma kopyası: kurum → senaryoId → { title, questions } */
    let draft = null;

    function $(id) {
        return document.getElementById(id);
    }

    function escapeHtml(s) {
        return String(s ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function getBaseBank() {
        if (typeof senaryoSoruBankasi === "undefined" || !senaryoSoruBankasi) {
            return {};
        }
        return senaryoSoruBankasi;
    }

    function loadOverrides() {
        try {
            const raw = localStorage.getItem(ADMIN_BANK_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            return {};
        }
    }

    function saveOverrides(data) {
        try {
            localStorage.setItem(ADMIN_BANK_KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.warn("Admin kaydetme hatası:", e);
            return false;
        }
    }

    function applyOverridesToRuntime() {
        const base = getBaseBank();
        if (!base || typeof base !== "object") return;
        const ov = loadOverrides();
        if (!ov || typeof ov !== "object") return;
        Object.keys(ov).forEach((inst) => {
            if (!base[inst]) base[inst] = {};
            const pack = ov[inst];
            if (!pack || typeof pack !== "object" || Array.isArray(pack)) return;
            Object.keys(pack).forEach((sid) => {
                const sc = pack[sid];
                if (!sc || typeof sc !== "object") return;
                // bozuk kayıtları atla (en azından title veya questions olmalı)
                if (!Array.isArray(sc.questions) && !sc.title) return;
                base[inst][sid] = deepClone(sc);
            });
        });
    }

    function getMergedBank() {
        const base = deepClone(getBaseBank());
        const ov = loadOverrides();
        Object.keys(ov).forEach((inst) => {
            if (!base[inst]) base[inst] = {};
            Object.keys(ov[inst] || {}).forEach((sid) => {
                base[inst][sid] = deepClone(ov[inst][sid]);
            });
        });
        return base;
    }

    function ensureDraftFromMerged() {
        draft = getMergedBank();
        dirty = false;
    }

    function markDirty() {
        dirty = true;
        const hint = $("adminDirtyHint");
        if (hint) {
            hint.textContent = "Kaydedilmemiş değişiklikler var";
            hint.classList.remove("hidden");
        }
    }

    function clearDirty() {
        dirty = false;
        const hint = $("adminDirtyHint");
        if (hint) {
            hint.classList.add("hidden");
            hint.textContent = "";
        }
    }

    function flash(msg, isError) {
        const el = $("adminFlash");
        if (!el) {
            if (typeof flashSaveStatus === "function") flashSaveStatus(msg);
            else alert(msg);
            return;
        }
        el.textContent = msg;
        el.classList.toggle("error", !!isError);
        el.classList.remove("hidden");
        clearTimeout(el._t);
        el._t = setTimeout(() => el.classList.add("hidden"), 2800);
    }

    function showAdminScreen(id) {
        ["adminLoginScreen", "adminInstScreen", "adminScenarioScreen", "adminQuestionScreen"].forEach((sid) => {
            const n = $(sid);
            if (n) n.classList.add("hidden");
        });
        const target = $(id);
        if (target) target.classList.remove("hidden");
    }

    function isAuthed() {
        try {
            return sessionStorage.getItem(ADMIN_AUTH_KEY) === "1";
        } catch (e) {
            return false;
        }
    }

    function setAuthed(on) {
        try {
            if (on) sessionStorage.setItem(ADMIN_AUTH_KEY, "1");
            else sessionStorage.removeItem(ADMIN_AUTH_KEY);
        } catch (e) {}
    }

    function showLogin() {
        showAdminScreen("adminLoginScreen");
        const err = $("adminLoginError");
        if (err) {
            err.classList.add("hidden");
            err.textContent = "";
        }
        const inp = $("adminPasswordInput");
        if (inp) {
            inp.value = "";
            setTimeout(() => inp.focus(), 50);
        }
    }

    function tryLogin() {
        const inp = $("adminPasswordInput");
        const pass = (inp && inp.value) || "";
        const err = $("adminLoginError");
        if (pass === ADMIN_PASSWORD) {
            setAuthed(true);
            if (err) err.classList.add("hidden");
            enterAdminWorkspace();
            if (typeof SFX !== "undefined" && SFX.click) SFX.click();
            return;
        }
        if (err) {
            err.textContent = "Şifre hatalı.";
            err.classList.remove("hidden");
        }
        if (inp) {
            inp.value = "";
            inp.focus();
        }
        if (typeof SFX !== "undefined" && SFX.bad) SFX.bad();
    }

    function enterAdminWorkspace() {
        ensureDraftFromMerged();
        clearDirty();
        currentInst = null;
        currentScenarioId = null;
        renderInstitutionGrid();
        showAdminScreen("adminInstScreen");
    }

    function openAdmin() {
        if (typeof show === "function") show("adminRoot");
        else {
            document.querySelectorAll(".screen").forEach((s) => s.classList.add("hidden"));
            $("adminRoot")?.classList.remove("hidden");
        }
        if (isAuthed()) {
            enterAdminWorkspace();
        } else {
            showLogin();
        }
        if (typeof SFX !== "undefined" && SFX.click) SFX.click();
    }

    function closeAdminToMenu() {
        if (dirty) {
            const ok = confirm("Kaydedilmemiş değişiklikler var. Menüye dönmek istiyor musun?");
            if (!ok) return;
        }
        if (typeof show === "function") show("menuScreen");
        else {
            $("adminRoot")?.classList.add("hidden");
            $("menuScreen")?.classList.remove("hidden");
        }
        if (typeof SFX !== "undefined" && SFX.click) SFX.click();
    }

    function renderInstitutionGrid() {
        const grid = $("adminInstGrid");
        if (!grid) return;
        const bank = draft || getMergedBank();
        grid.innerHTML = INST_META.map((m) => {
            const count = bank[m.id] ? Object.keys(bank[m.id]).length : 0;
            return `<button type="button" class="adminInstBtn" data-inst="${escapeHtml(m.id)}">
                <span class="instIcon">${m.icon}</span>
                <strong>${escapeHtml(m.id)}</strong>
                <small>${escapeHtml(m.desc)}</small>
                <span class="adminInstCount">${count} senaryo</span>
            </button>`;
        }).join("");
        grid.querySelectorAll(".adminInstBtn").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentInst = btn.getAttribute("data-inst");
                currentScenarioId = null;
                renderScenarioList();
                showAdminScreen("adminScenarioScreen");
                if (typeof SFX !== "undefined" && SFX.click) SFX.click();
            });
        });
    }

    function renderScenarioList() {
        const title = $("adminScenarioTitle");
        if (title) title.textContent = currentInst + " · Senaryolar";
        const list = $("adminScenarioList");
        if (!list || !currentInst) return;
        if (!draft[currentInst]) draft[currentInst] = {};
        const pack = draft[currentInst];
        const ids = Object.keys(pack);
        if (!ids.length) {
            list.innerHTML = `<div class="panelTableEmpty">Bu kurumda senaryo yok. Yeni senaryo ekleyin.</div>`;
            return;
        }
        list.innerHTML = ids
            .map((sid) => {
                const sc = pack[sid];
                const qn = (sc.questions || []).length;
                return `<button type="button" class="adminScenarioRow" data-sid="${escapeHtml(sid)}">
                    <span class="panelRowText">
                        <strong>${escapeHtml(sc.title || sid)}</strong>
                        <small>${escapeHtml(sid)} · ${qn} soru</small>
                    </span>
                    <span class="panelValue">Düzenle →</span>
                </button>`;
            })
            .join("");
        list.querySelectorAll(".adminScenarioRow").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentScenarioId = btn.getAttribute("data-sid");
                renderQuestionEditor();
                showAdminScreen("adminQuestionScreen");
                if (typeof SFX !== "undefined" && SFX.click) SFX.click();
            });
        });
    }

    function addScenario() {
        if (!currentInst) return;
        if (!draft[currentInst]) draft[currentInst] = {};
        let base = "yeni_senaryo";
        let id = base;
        let n = 1;
        while (draft[currentInst][id]) {
            id = base + "_" + n;
            n++;
        }
        draft[currentInst][id] = {
            title: "Yeni senaryo",
            questions: [
                {
                    stem: "Yeni soru metni",
                    options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D"],
                    correctIndex: 0,
                    difficulty: "medium",
                    shift: "both",
                    explainCorrect: "Doğru: Prosedüre uygun yaklaşım.",
                    explainWrong: [
                        "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                        "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                        "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                        "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
                    ],
                    institution: currentInst,
                    scenarioId: id
                }
            ]
        };
        markDirty();
        currentScenarioId = id;
        renderScenarioList();
        renderQuestionEditor();
        showAdminScreen("adminQuestionScreen");
        flash("Yeni senaryo eklendi");
    }

    function getCurrentScenario() {
        if (!currentInst || !currentScenarioId) return null;
        return draft[currentInst]?.[currentScenarioId] || null;
    }

    function renderQuestionEditor() {
        const sc = getCurrentScenario();
        const head = $("adminQuestionHead");
        const body = $("adminQuestionBody");
        if (!sc || !body) return;
        if (head) {
            head.innerHTML = `<strong>${escapeHtml(sc.title || currentScenarioId)}</strong>
                <small>${escapeHtml(currentInst)} / ${escapeHtml(currentScenarioId)}</small>`;
        }

        const questions = sc.questions || [];
        let html = `
            <div class="adminField">
                <label class="fieldLabel">Senaryo başlığı</label>
                <input type="text" id="adminScTitle" maxlength="80" value="${escapeHtml(sc.title || "")}">
            </div>
            <div class="adminField">
                <label class="fieldLabel">Senaryo ID (dosya anahtarı)</label>
                <input type="text" id="adminScId" maxlength="48" value="${escapeHtml(currentScenarioId || "")}" placeholder="ornek_senaryo_id" spellcheck="false" autocomplete="off">
                <small class="adminMuted">Küçük harf, rakam ve alt çizgi önerilir. Kaydedince anahtar güncellenir.</small>
            </div>
            <p class="adminMuted adminQCount">${questions.length} soru</p>
        `;

        questions.forEach((q, qi) => {
            const opts = q.options || ["", "", "", ""];
            while (opts.length < 4) opts.push("");
            const ci = typeof q.correctIndex === "number" ? q.correctIndex : 0;
            const diff = q.difficulty || "medium";
            const shift = q.shift || "both";
            html += `
            <article class="adminQCard" data-qi="${qi}">
                <div class="adminQCardHead">
                    <strong>Soru ${qi + 1}</strong>
                    <button type="button" class="ghostBtn adminQDelete" data-qi="${qi}">Sil</button>
                </div>
                <label class="fieldLabel">Soru metni (stem)</label>
                <textarea class="adminStem" data-qi="${qi}" rows="3">${escapeHtml(q.stem || "")}</textarea>
                <label class="fieldLabel">Şıklar (doğru olanı işaretle)</label>
                <div class="adminOpts">
                    ${[0, 1, 2, 3]
                        .map(
                            (oi) => `
                        <label class="adminOptRow">
                            <input type="radio" name="correct_${qi}" value="${oi}" ${ci === oi ? "checked" : ""}>
                            <input type="text" class="adminOptText" data-qi="${qi}" data-oi="${oi}" maxlength="200" value="${escapeHtml(opts[oi] || "")}">
                        </label>`
                        )
                        .join("")}
                </div>
                <div class="adminQMeta">
                    <label>Zorluk
                        <select class="adminDiff" data-qi="${qi}">
                            <option value="easy" ${diff === "easy" ? "selected" : ""}>Kolay</option>
                            <option value="medium" ${diff === "medium" ? "selected" : ""}>Orta</option>
                            <option value="hard" ${diff === "hard" ? "selected" : ""}>Zor</option>
                        </select>
                    </label>
                    <label>Vardiya
                        <select class="adminShift" data-qi="${qi}">
                            <option value="both" ${shift === "both" ? "selected" : ""}>Her ikisi</option>
                            <option value="day" ${shift === "day" ? "selected" : ""}>Gündüz</option>
                            <option value="night" ${shift === "night" ? "selected" : ""}>Gece</option>
                        </select>
                    </label>
                </div>
                <label class="fieldLabel">Doğru açıklama</label>
                <input type="text" class="adminExplainOk" data-qi="${qi}" maxlength="240" value="${escapeHtml(q.explainCorrect || "")}">
            </article>`;
        });

        html += `
            <button type="button" id="adminAddQuestionBtn" class="secondaryBtn">+ Soru ekle</button>
        `;
        body.innerHTML = html;

        $("adminScTitle")?.addEventListener("input", () => {
            const sc2 = getCurrentScenario();
            if (sc2) {
                sc2.title = $("adminScTitle").value.trim() || sc2.title;
                markDirty();
            }
        });

        $("adminScId")?.addEventListener("change", () => {
            applyScenarioIdFromInput(true);
        });
        $("adminScId")?.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                applyScenarioIdFromInput(true);
            }
        });

        body.querySelectorAll(".adminStem").forEach((ta) => {
            ta.addEventListener("input", () => {
                const qi = Number(ta.getAttribute("data-qi"));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    sc2.questions[qi].stem = ta.value;
                    markDirty();
                }
            });
        });

        body.querySelectorAll(".adminOptText").forEach((inp) => {
            inp.addEventListener("input", () => {
                const qi = Number(inp.getAttribute("data-qi"));
                const oi = Number(inp.getAttribute("data-oi"));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    if (!Array.isArray(sc2.questions[qi].options)) sc2.questions[qi].options = ["", "", "", ""];
                    sc2.questions[qi].options[oi] = inp.value;
                    markDirty();
                }
            });
        });

        body.querySelectorAll('input[type="radio"][name^="correct_"]').forEach((r) => {
            r.addEventListener("change", () => {
                if (!r.checked) return;
                const qi = Number(r.name.replace("correct_", ""));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    sc2.questions[qi].correctIndex = Number(r.value);
                    markDirty();
                }
            });
        });

        body.querySelectorAll(".adminDiff").forEach((sel) => {
            sel.addEventListener("change", () => {
                const qi = Number(sel.getAttribute("data-qi"));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    sc2.questions[qi].difficulty = sel.value;
                    markDirty();
                }
            });
        });

        body.querySelectorAll(".adminShift").forEach((sel) => {
            sel.addEventListener("change", () => {
                const qi = Number(sel.getAttribute("data-qi"));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    sc2.questions[qi].shift = sel.value;
                    markDirty();
                }
            });
        });

        body.querySelectorAll(".adminExplainOk").forEach((inp) => {
            inp.addEventListener("input", () => {
                const qi = Number(inp.getAttribute("data-qi"));
                const sc2 = getCurrentScenario();
                if (sc2?.questions?.[qi]) {
                    sc2.questions[qi].explainCorrect = inp.value;
                    markDirty();
                }
            });
        });

        body.querySelectorAll(".adminQDelete").forEach((btn) => {
            btn.addEventListener("click", () => {
                const qi = Number(btn.getAttribute("data-qi"));
                const sc2 = getCurrentScenario();
                if (!sc2?.questions) return;
                if (sc2.questions.length <= 1) {
                    flash("En az bir soru kalmalı", true);
                    return;
                }
                if (!confirm(`Soru ${qi + 1} silinsin mi?`)) return;
                sc2.questions.splice(qi, 1);
                markDirty();
                renderQuestionEditor();
            });
        });

        $("adminAddQuestionBtn")?.addEventListener("click", () => {
            const sc2 = getCurrentScenario();
            if (!sc2) return;
            if (!sc2.questions) sc2.questions = [];
            sc2.questions.push({
                stem: "Yeni soru metni",
                options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D"],
                correctIndex: 0,
                difficulty: "medium",
                shift: "both",
                explainCorrect: "Doğru: Prosedüre uygun yaklaşım.",
                explainWrong: [
                    "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                    "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                    "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
                    "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
                ],
                institution: currentInst,
                scenarioId: currentScenarioId
            });
            markDirty();
            renderQuestionEditor();
            flash("Soru eklendi");
        });
    }

    function sanitizeScenarioId(raw) {
        let id = String(raw || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/[^a-z0-9_\-]/g, "")
            .replace(/_+/g, "_")
            .replace(/^[_\-]+|[_\-]+$/g, "");
        if (!id) id = "senaryo";
        if (/^[0-9]/.test(id)) id = "s_" + id;
        return id.slice(0, 48);
    }

    /** Senaryo ID alanından anahtarı güncelle */
    function applyScenarioIdFromInput(reRender) {
        if (!currentInst || !currentScenarioId) return false;
        const inp = $("adminScId");
        if (!inp) return false;
        const next = sanitizeScenarioId(inp.value);
        if (!next) {
            flash("Geçersiz senaryo ID", true);
            inp.value = currentScenarioId;
            return false;
        }
        if (next === currentScenarioId) {
            inp.value = currentScenarioId;
            return true;
        }
        if (!draft[currentInst]) draft[currentInst] = {};
        if (draft[currentInst][next]) {
            flash("Bu ID zaten var: " + next, true);
            inp.value = currentScenarioId;
            return false;
        }
        const sc = draft[currentInst][currentScenarioId];
        if (!sc) return false;
        draft[currentInst][next] = sc;
        delete draft[currentInst][currentScenarioId];
        currentScenarioId = next;
        (sc.questions || []).forEach((q) => {
            if (q && typeof q === "object") {
                q.scenarioId = next;
                q.institution = currentInst;
            }
        });
        inp.value = next;
        markDirty();
        const head = $("adminQuestionHead");
        if (head) {
            head.innerHTML = `<strong>${escapeHtml(sc.title || next)}</strong>
                <small>${escapeHtml(currentInst)} / ${escapeHtml(next)}</small>`;
        }
        if (reRender) {
            // Liste metni güncellensin diye gerek yok; ID header güncellendi
        }
        flash("Senaryo ID güncellendi: " + next);
        return true;
    }

    function syncEditorToDraft() {
        applyScenarioIdFromInput(false);
        const sc = getCurrentScenario();
        if (!sc) return;
        const titleEl = $("adminScTitle");
        if (titleEl) sc.title = titleEl.value.trim() || sc.title;
        (sc.questions || []).forEach((q, qi) => {
            const stem = document.querySelector(`.adminStem[data-qi="${qi}"]`);
            if (stem) q.stem = stem.value;
            q.options = q.options || ["", "", "", ""];
            for (let oi = 0; oi < 4; oi++) {
                const ot = document.querySelector(`.adminOptText[data-qi="${qi}"][data-oi="${oi}"]`);
                if (ot) q.options[oi] = ot.value;
            }
            const radio = document.querySelector(`input[name="correct_${qi}"]:checked`);
            if (radio) q.correctIndex = Number(radio.value);
            const diff = document.querySelector(`.adminDiff[data-qi="${qi}"]`);
            if (diff) q.difficulty = diff.value;
            const shift = document.querySelector(`.adminShift[data-qi="${qi}"]`);
            if (shift) q.shift = shift.value;
            const exp = document.querySelector(`.adminExplainOk[data-qi="${qi}"]`);
            if (exp) q.explainCorrect = exp.value;
            q.institution = currentInst;
            q.scenarioId = currentScenarioId;
        });
    }

    function saveAllChanges() {
        if (currentScenarioId) syncEditorToDraft();
        if (!draft) {
            flash("Kaydedilecek veri yok", true);
            return;
        }
        const ok = saveOverrides(draft);
        if (!ok) {
            flash("Kayıt başarısız (depolama dolu olabilir)", true);
            return;
        }
        applyOverridesToRuntime();
        clearDirty();
        flash("Değişiklikler kaydedildi. Sonraki vardiyalarda geçerli.");
        if (typeof SFX !== "undefined" && SFX.save) SFX.save();
        else if (typeof SFX !== "undefined" && SFX.click) SFX.click();
    }

    function resetInstitutionToDefault() {
        if (!currentInst) return;
        if (!confirm(currentInst + " için admin değişiklikleri silinsin ve orijinale dönülsün mü?")) return;
        const ov = loadOverrides();
        delete ov[currentInst];
        saveOverrides(ov);
        const base = deepClone(getBaseBank());
        draft[currentInst] = deepClone(base[currentInst] || {});
        try {
            if (typeof senaryoSoruBankasi !== "undefined" && window.__sonNobetBankBackup) {
                senaryoSoruBankasi[currentInst] = deepClone(window.__sonNobetBankBackup[currentInst] || {});
            }
        } catch (e) {}
        clearDirty();
        renderScenarioList();
        flash(currentInst + " orijinale alındı");
    }

    function deleteCurrentScenario() {
        if (!currentInst || !currentScenarioId) return;
        if (!confirm("Bu senaryo silinsin mi?")) return;
        delete draft[currentInst][currentScenarioId];
        markDirty();
        currentScenarioId = null;
        renderScenarioList();
        showAdminScreen("adminScenarioScreen");
        flash("Senaryo silindi (kaydetmeyi unutma)");
    }

    function bind() {
        try {
            if (typeof senaryoSoruBankasi !== "undefined" && !window.__sonNobetBankBackup) {
                window.__sonNobetBankBackup = deepClone(senaryoSoruBankasi);
            }
        } catch (e) {}

        applyOverridesToRuntime();

        $("openAdminBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            openAdmin();
        });

        $("adminLoginBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            tryLogin();
        });

        $("adminLoginCancelBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            closeAdminToMenu();
        });

        $("adminPasswordInput")?.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                tryLogin();
            }
        });

        $("adminBackToMenuBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            closeAdminToMenu();
        });

        $("adminBackToInstBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            if (dirty && currentScenarioId) syncEditorToDraft();
            currentScenarioId = null;
            renderInstitutionGrid();
            showAdminScreen("adminInstScreen");
            if (typeof SFX !== "undefined" && SFX.click) SFX.click();
        });

        $("adminBackToScenariosBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentScenarioId) syncEditorToDraft();
            currentScenarioId = null;
            renderScenarioList();
            showAdminScreen("adminScenarioScreen");
            if (typeof SFX !== "undefined" && SFX.click) SFX.click();
        });

        $("adminAddScenarioBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            addScenario();
        });

        $("adminSaveBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            saveAllChanges();
        });

        $("adminSaveBtn2")?.addEventListener("click", (e) => {
            e.preventDefault();
            saveAllChanges();
        });

        $("adminSaveBtn3")?.addEventListener("click", (e) => {
            e.preventDefault();
            saveAllChanges();
        });

        $("adminDeleteScenarioBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            deleteCurrentScenario();
        });

        $("adminResetInstBtn")?.addEventListener("click", (e) => {
            e.preventDefault();
            resetInstitutionToDefault();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }

    try {
        applyOverridesToRuntime();
    } catch (e) {}

    return {
        open: openAdmin,
        applyOverrides: applyOverridesToRuntime,
        loadOverrides
    };
})();

window.AdminPanel = AdminPanel;
