/* Son Nöbet — soru bankası v5.16
   Her kurum: 5 senaryo x 10 soru. Şıklar benzer uzunlukta.
   Vardiyada rastgele 1 senaryo, 10 soru (SHIFT_LENGTH=10).
   correctIndex 0-3; oyun içinde şıklar karıştırılır.
*/
var senaryoSoruBankasi = 
{
  "AVM": {
    "supheli_paket": {
      "title": "Şüpheli paket",
      "questions": [
        {
          "stem": "Yemek katında sahibi belirsiz sırt çantası var; kalabalık. İlk adım?",
          "options": [
            "Güvenli mesafe koruyup alanı sınırlamak ve ilgili birimi bilgilendirmek",
            "Çantayı herkesin önünde açıp kontrol etmek",
            "Çantayı depoya kilitleyip tura devam etmek",
            "Bomba anonsu yapıp panik boşaltması başlatmak"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Şüpheli paketi taşımak neden riskli?",
          "options": [
            "Paket her zaman boştur",
            "İçerik bilinmeden taşımak güvenlik ve delil riski yaratır",
            "Sadece polis taşıyabilir, başka kural yok",
            "Kamera kaydı bozulur"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Müdür çantayı hemen kaldırmanı istiyor. Ne yaparsın?",
          "options": [
            "Hemen kaldırırsın",
            "Müdürü müşteri önünde azarlarısın",
            "Prosedürü koruyup rastgele taşımadan süreci işletirsin",
            "Çantayı müdüre verir sorumluluktan çıkarsın"
          ],
          "correctIndex": 2,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Canlı yayın yapanlar var. Ne yaparsın?",
          "options": [
            "Telefonlara el koyarsın",
            "Mesafeyi bozmadan alanı terk etmelerini ister ve bildirirsin",
            "Yayını teşvik edersin",
            "Sadece çantaya bakarsın"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Ekipler yolda. Önceliğin?",
          "options": [
            "Çantayı tek başına incelersin",
            "Mağazaları kapatırsın",
            "Alanı izler, yaklaşımı engeller, ekibe yol tarif edersin",
            "Tüm çıkışları kilitlersin"
          ],
          "correctIndex": 2,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Sahibi geldiğini iddia eden biri var. Ne yaparsın?",
          "options": [
            "Hemen teslim edersin",
            "Doğrulama olmadan vermez, süreci ekiplerle yürütürsün",
            "Gözaltına alırsın",
            "Birlikte açarsınız"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Anons dili nasıl olmalı?",
          "options": [
            "Detaylı tehdit anlatırsın",
            "Panik yaratmadan talimata uygun sakin yönlendirme",
            "Hiç anons yok",
            "Sadece sosyal medya"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Stajyer koşarak geliyor. Ne dersin?",
          "options": [
            "Birlikte açın",
            "Mesafeyi koru, talimat bekle",
            "Nöbetçi bırak",
            "Video çek"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Ekiplere ne aktarırsın?",
          "options": [
            "Uzun spekülasyon",
            "Konum, saat, gözlem, alınan önlem",
            "Sadece şüpheli şey var",
            "Müşteri listesi"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Olay kapanınca?",
          "options": [
            "Sosyal medyada paylaş",
            "Rapor ve kamera referansını tamamla",
            "Kayıtsız tura çık",
            "Paketi sakla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        }
      ]
    },
    "hirsizlik": {
      "title": "Mağaza hırsızlığı şüphesi",
      "questions": [
        {
          "stem": "Net görüntü yok; mağaza suçluyor. İlk yaklaşım?",
          "options": [
            "Fiziksel engelleme",
            "Sakin iletişim, beyan ve doğrulama süreci",
            "Teşhir",
            "Yok saymak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Çanta açmayı reddediyor. Ne yapmamalısın?",
          "options": [
            "Zorla arama yapmamak",
            "Zorla çantayı açmak",
            "Sakin tutmak",
            "Tutanak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Delil için kritik olan?",
          "options": [
            "Yüksek sesli iddia",
            "Kamera ve tutarlı kayıt",
            "Sosyal medya",
            "Giyim tarzı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Kaçmaya çalışırsa?",
          "options": [
            "Orantısız güç",
            "İzle, destek çağır, çıkışları bilgilendir",
            "Tehdit",
            "Linç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Mağaza dava tehdidi. Sınırın?",
          "options": [
            "Her müdahale",
            "Yetki çerçevesinde destek",
            "Görmezden gel",
            "Tek başına yasak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Raporda ne olmalı?",
          "options": [
            "Sadece hırsız vardı",
            "Saat, konum, taraflar, aksiyon",
            "Hakaret",
            "Kesin suç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Kameraya bakalım diyor. Ne yaparsın?",
          "options": [
            "Tek başına izle karar ver",
            "Yetkili süreçte inceleme",
            "Sil",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Kalabalık çevreliyor. Öncelik?",
          "options": [
            "Tartışmayı büyüt",
            "Sakinleştir, uzaklaştır",
            "Telefon kır",
            "Mağaza kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Değer düşükse?",
          "options": [
            "İşlem yok",
            "Yetki ve delil kuralları yine geçerli",
            "Zorla arama serbest",
            "Gözaltı zorunlu"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Bir daha girmesin talebi?",
          "options": [
            "Ömür boyu yasak ilan",
            "Yönetim prosedürüne göre",
            "Kimlik paylaş",
            "Özel şirket kur"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        }
      ]
    },
    "kayip_cocuk": {
      "title": "Kayıp çocuk",
      "questions": [
        {
          "stem": "İlk kritik bilgi?",
          "options": [
            "Son yer, yaş, kıyafet, refakat",
            "Telefon markası",
            "Ciro",
            "Plaka listesi"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Çocuk bulundu; ebeveyn yok. Ne yaparsın?",
          "options": [
            "Yalnız bırakıp ara",
            "Güvenli noktada kal, ekip, prosedürle teslim",
            "Arabayla götür",
            "Hikâye paylaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Ebeveyn istiyor; çocuk korkuyor. Ne yaparsın?",
          "options": [
            "Zorla ver",
            "Kimlik/veli doğrulaması, şüphede destek",
            "Dışarı çıkar",
            "Kalabalıkta tartış"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Anons nasıl?",
          "options": [
            "Ad ve adres detay",
            "Talimata uygun ifşasız bilgilendirme",
            "Anons yok",
            "Bir mağazaya söyle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Çıkışlarda?",
          "options": [
            "Süresiz kapat",
            "Prosedüre uygun bilgilendirme ve gözlem",
            "Herkesi ara",
            "Umursama"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Yanlış çocuk sandın?",
          "options": [
            "Suçla",
            "Özür dile, doğru ara",
            "Alıkoy",
            "Gizle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Zaman neden kritik?",
          "options": [
            "Işık kapanır",
            "Erken dakikalar bulunma ve güvenliği etkiler",
            "Sadece gece",
            "Kamera silinir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Ebeveyn panik. İletişim?",
          "options": [
            "Bağır",
            "Kısa net sorularla yönet",
            "Görmezden gel",
            "Kapı dışarı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Teslim kaydı neden önemli?",
          "options": [
            "İsraf",
            "Zaman ve tarafları belgelemek",
            "Okul notu",
            "Sosyal medya"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Sonra ekiple ne konuşursun?",
          "options": [
            "Çay saati",
            "Bildirim, anons, çıkış, iyileştirme",
            "Ciro",
            "Trend"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        }
      ]
    },
    "yangin_alarm": {
      "title": "Yangın alarmı",
      "questions": [
        {
          "stem": "Alarm; duman yok. İlk adım?",
          "options": [
            "Sustur yanlış alarm de",
            "Doğrulama ve talimata uygun yönlendirme",
            "Asansör doldur",
            "Kapı kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Dumanlı koridor. Öncelik?",
          "options": [
            "Can ve tahliye, sonra mal",
            "Vitrin kurtar",
            "Selfie",
            "Kasa say"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Asansör yangında?",
          "options": [
            "Genelde kullanılmaz; merdiven",
            "Herkes binsin",
            "Sadece güvenlik",
            "Söndürür"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Engelli müşteri?",
          "options": [
            "Bırak",
            "Güvenli destek ve planlı yardım",
            "Asansöre zorla",
            "Depoya kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Panel sıfır; koku var?",
          "options": [
            "Normal say",
            "Bildir, kontrol et, talimat bekle",
            "Panel sök",
            "Sprey"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Panik koşu?",
          "options": [
            "Daha hızlı koş",
            "Sakin net yönlendirme",
            "Çıkış kapat",
            "Işık kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "İtfaiyeye ne?",
          "options": [
            "Konum ve erişim",
            "Uzun spekülasyon",
            "Çay",
            "Bilgi yok"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Tüp bilmeden?",
          "options": [
            "Oyuncak",
            "Yanlış tip/kullanım riski; eğitim önemli",
            "Hiç işe yaramaz",
            "Sadece müdür"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Sonra?",
          "options": [
            "Gizle",
            "Rapor ve değerlendirme",
            "Kayıt sil",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        },
        {
          "stem": "Acil çıkış tıkalı?",
          "options": [
            "Yığ",
            "Açık tut, bildir",
            "Depo yap",
            "Tabela sök"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "yangin_alarm"
        }
      ]
    },
    "agresif_musteri": {
      "title": "Agresif müşteri",
      "questions": [
        {
          "stem": "Bağırıp tehdit ediyor. Öncelik?",
          "options": [
            "Yere indir",
            "Mesafe, sakinleştirme, personel güvenliği, destek",
            "Teşhir",
            "Uzaklaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Aynı şekilde karşılık?",
          "options": [
            "Gerilimi yükseltir",
            "Müşteri hep haklı",
            "Güvenlik konuşamaz",
            "Kamera yok"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Elinde sert cisim?",
          "options": [
            "Atıl",
            "Mesafe, destek, ortamı boşalt",
            "Kışkırt",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Özür dilese de?",
          "options": [
            "Kayıtsız",
            "Kayıt ve gerekirse yönetim",
            "Telefon al",
            "İşten attır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Tek başına iteklemek?",
          "options": [
            "Kontrol kaybı riski",
            "Kapıya gitmek yasak",
            "Hiç çıkmasın",
            "Kamera yok"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Tutuklayın diyor?",
          "options": [
            "Polis gibi davran",
            "Yetkin ölçüsünde güvenlik",
            "Hiçbir şey",
            "Bağırarak payla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Çocuklar var?",
          "options": [
            "Görmezden gel",
            "Güvenli alana yönlendir",
            "Alet et",
            "Telefon al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "İşinden ederim tehdidi?",
          "options": [
            "Karşı tehdit",
            "Profesyonel kal, prosedür",
            "İşi bırak",
            "Her şeyi kabul"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Fiziksel temas kaçınılmazsa?",
          "options": [
            "En az kuvvet",
            "En sert müdahale",
            "Asla temas",
            "Sadece bağır"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        },
        {
          "stem": "Rapor dili?",
          "options": [
            "Hakaret",
            "Gözleme dayalı nötr anlatım",
            "Emoji",
            "Sadece müdür sözü"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "AVM",
          "scenarioId": "agresif_musteri"
        }
      ]
    }
  },
  "Hastane": {
    "yakin_saldiri": {
      "title": "Hasta yakını gerilimi",
      "questions": [
        {
          "stem": "Hemşireye tehdit. Öncelik?",
          "options": [
            "Yere indir",
            "Mesafe, personeli koru, destek",
            "Teşhir",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Camları kırarım diyor?",
          "options": [
            "Birlikte kır",
            "Sınır koy, protokol",
            "Kapı açık bırak",
            "Zorla odaya sok"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Temas riski artınca?",
          "options": [
            "Orantısız güç",
            "Mesafe/ekip; en az kuvvet",
            "Kışkırt",
            "Yalnız bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Sonra kayıt?",
          "options": [
            "Gerekmez",
            "Tutanak/rapor",
            "Sosyal medya",
            "Yakının istediği"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Ben de güvenlikçiyim diyor?",
          "options": [
            "Serbest bırak",
            "Ziyaret kurallarını uygula",
            "Kimlik sorma",
            "Herkesi dışarıda tut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Diğer hastalar korkuyor?",
          "options": [
            "Dahil et",
            "Alanı sakinleştir",
            "Boşaltmayı unut",
            "Işık kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Canlı yayın?",
          "options": [
            "Telefon al",
            "Mahremiyet uyarısı",
            "Teşvik et",
            "Tartış"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Hekim müdahale etme diyor; tehdit sürüyor?",
          "options": [
            "Asla müdahale yok",
            "Personel güvenliği riskinde protokol",
            "Hekimi tehdit et",
            "Not al git"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Adli boyut?",
          "options": [
            "Mahkeme kararı ver",
            "Belgele, yetkiliye aktar",
            "Delil sakla",
            "Kaçır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Rapor dili?",
          "options": [
            "Delinin biri",
            "Nötr gözlem",
            "Tahmin",
            "Hakaret"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        }
      ]
    },
    "acil_alan": {
      "title": "Acil servis yoğunluğu",
      "questions": [
        {
          "stem": "Ambulans geliyor; giriş tıkalı?",
          "options": [
            "Yolu aç",
            "Otopark tartış",
            "Beklet",
            "Çekim"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Triaj karışık?",
          "options": [
            "Triaj kararı ver",
            "Düzen ve personel koruma",
            "Tedavi et",
            "İlaç dağıt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Silahlı yaralanma ihbarı?",
          "options": [
            "Kalabalık topla",
            "Alan güvenliği ve koordinasyon",
            "Tek başına soruştur",
            "Kapı açık bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Personeli itiyor?",
          "options": [
            "Görmezden gel",
            "Koruyup süreç işlet",
            "Tedavi et",
            "Personeli suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Kayıp eşya?",
          "options": [
            "Dolap boşalt",
            "Kayıt ve prosedür",
            "Çantana koy",
            "İhbar sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Çıkış kilitli?",
          "options": [
            "Kilitli bırak",
            "Kullanılabilirliğini kontrol et",
            "Depo yap",
            "Tabela çevir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Medya girmek istiyor?",
          "options": [
            "Serbest",
            "Onay ve mahremiyet",
            "Oda gezdir",
            "Yayına çık"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Sadece güvenlik konuşsun?",
          "options": [
            "Teşhis koy",
            "Yetkin ölçüsünde bilgi",
            "İlaç öner",
            "Uydur"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Kanlı zemin?",
          "options": [
            "Üzerinden koş",
            "İşaretle, süreç destekle",
            "Bezle yok et",
            "Paylaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        },
        {
          "stem": "Devirde ne aktarılır?",
          "options": [
            "Hiç",
            "Kritik riskler ve önlemler",
            "Yemek",
            "Şikâyet listesi"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "acil_alan"
        }
      ]
    },
    "mahreemiyet": {
      "title": "Hasta mahremiyeti",
      "questions": [
        {
          "stem": "Dosya okumaya çalışıyor?",
          "options": [
            "Birlikte oku",
            "Yetkisiz erişimi engelle",
            "Ver",
            "Çöpe at"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Adımı söylemeyin dedi; anons?",
          "options": [
            "Tam ad anons",
            "İfşadan kaçın, talimata uy",
            "Sosyal medya",
            "Komşuya ara"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Yüksek sesle hasta konuşuluyor?",
          "options": [
            "Katıl",
            "Mahremiyet uyarısı",
            "Kaydet yay",
            "Görmezden gel"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Basın fotoğraf?",
          "options": [
            "İzin ver",
            "Onay yoksa engelle",
            "Objektifi tut",
            "Hastayı çıkar"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Yanlış yatak yönlendirdin?",
          "options": [
            "Sessiz git",
            "Düzelt",
            "Devam et",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Ekran açık bilgi?",
          "options": [
            "Ekran görüntüsü",
            "Yetkiliye bildir",
            "Ezberle anlat",
            "Kır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Yanlış odaya girdi?",
          "options": [
            "Bırak",
            "Nazikçe çıkar yönlendir",
            "Kilitle",
            "Aşağıla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "İhlal kaydı neden?",
          "options": [
            "Abart",
            "Doğru aktar belgele",
            "Dedikodu",
            "Gereksiz"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Personel detay anlatıyor?",
          "options": [
            "İlet",
            "Girme ve uyar",
            "Arkadaşa at",
            "Yorum yap"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        },
        {
          "stem": "Ziyaret dışı ısrar?",
          "options": [
            "Serbest",
            "Kural; istisna yetkiliye",
            "Rüşvet",
            "Kapı sök"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "mahreemiyet"
        }
      ]
    },
    "kayip_hasta": {
      "title": "Kayıp / kaçan hasta",
      "questions": [
        {
          "stem": "Demans kayıp; ilk bilgi?",
          "options": [
            "Son yer, kıyafet, risk",
            "Oda uydur",
            "Ciro",
            "Yemek listesi"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Çıkışa ilerliyor?",
          "options": [
            "Yere indir",
            "Güvenli engelleme ve destek",
            "Kapı açık",
            "Takip etme"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Direniyor?",
          "options": [
            "Cezalandır",
            "Güvenli dönüş ve sağlık ekibi",
            "Dışarı bırak",
            "Telefon al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Diğer hastalar rahatsız?",
          "options": [
            "Duyura duyura ara",
            "Sakin kontrollü ara",
            "Katı tahliye",
            "İptal"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Asansör mahsur gibi?",
          "options": [
            "Zorla aç",
            "Teknik/sağlık prosedürü",
            "Sars",
            "Terk et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Bildirim gecikmesi?",
          "options": [
            "Kâğıt işi",
            "Risk artar",
            "Sorun değil",
            "Sadece gece"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Yakın tek başına arıyor?",
          "options": [
            "Serbest",
            "Koordineli arama",
            "Kilitle",
            "Dışarı at"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Bulunduktan sonra rapor?",
          "options": [
            "Gerekmez",
            "Zaman çizelgesi ve önlemler",
            "Sözlü",
            "Sosyal medya"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Kaçış riski bilinen?",
          "options": [
            "Önlem yok",
            "Risk bildirimi ve izleme",
            "Yetkisiz bağla",
            "Kapı sök"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Yanlış kişi?",
          "options": [
            "Israr",
            "Özür, doğru ara",
            "Alıkoy",
            "Gizle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        }
      ]
    },
    "yangin_hastane": {
      "title": "Hastanede yangın alarmı",
      "questions": [
        {
          "stem": "Servis alarmı?",
          "options": [
            "Panik anons",
            "Doğrulama ve tahliye talimatı",
            "Asansör doldur",
            "Unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Yatalak hasta?",
          "options": [
            "En sona bırak",
            "Planlı tahliye desteği",
            "Yalnız bırak",
            "Sürükle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Oksijen alanı?",
          "options": [
            "Ateş/yanlış müdahale riski",
            "Tüp devir",
            "Isıt",
            "Sakla"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Merdiven tıkalı?",
          "options": [
            "Görmezden gel",
            "Akışı yönlendir",
            "Kapat",
            "Asansöre yönlendir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Hata kodu; duman yok?",
          "options": [
            "Normal say",
            "Bildirim ve kontrol",
            "Panel sök",
            "Kod sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "İtfaiye?",
          "options": [
            "Konum erişim",
            "Spekülasyon",
            "Hasta listesi oku",
            "Hiçbir şey"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Mahremiyet tahliyede?",
          "options": [
            "Bağırarak söyle",
            "İfşadan kaçın",
            "Fotoğraf",
            "İsim as"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Yangın kapısı açık?",
          "options": [
            "Açık bırak",
            "Uygun kapat",
            "Sök",
            "Çıkışı kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Değerlendirme?",
          "options": [
            "Gereksiz",
            "Aksayanı düzelt",
            "Sadece ceza",
            "Sadece ödül"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        },
        {
          "stem": "Personel içeri giriyor?",
          "options": [
            "İzle",
            "Koordinasyonla yönet/uyar",
            "İt",
            "Kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Hastane",
          "scenarioId": "yangin_hastane"
        }
      ]
    }
  },
  "Fabrika": {
    "is_kazasi": {
      "title": "İş kazası",
      "questions": [
        {
          "stem": "İşçi düştü bilinç açık?",
          "options": [
            "Ayağa kaldır",
            "Alanı güvenli kıl, yardım çağır",
            "Makine açık bırak",
            "Yayınla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Makine riskli çalışıyor?",
          "options": [
            "El sok",
            "Acil durdurma prosedürü",
            "Hızlandır",
            "İzle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Kanama; tıbbi sınır?",
          "options": [
            "Ameliyat",
            "İlk yardım ölçüsünde + destek",
            "İlaç yaz",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Olay yeri neden korunur?",
          "options": [
            "Merak",
            "İnceleme ve tekrar riski",
            "Fotoğraf",
            "Gereksiz"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Tanıklar?",
          "options": [
            "Spekülasyon yay",
            "Kısa bilgi, resmi süreç",
            "Bağırarak sustur",
            "İşten attır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Amir üretimi durdurma diyor; tehlike var?",
          "options": [
            "Yok say",
            "Can güvenliğini önceleyerek durdur",
            "Tehdit et",
            "Sabote et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Rapor zamanı?",
          "options": [
            "Haftalar sonra",
            "Prosedüre uygun süre",
            "Sohbet",
            "Yazılmaz"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Ben iyiyim diyor?",
          "options": [
            "Kayıtsız",
            "Değerlendirme ve kayıt",
            "Zorla hastane",
            "Cezalandır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Temizlik ne zaman?",
          "options": [
            "Hemen sil",
            "İnceleme sonrası",
            "Delil gizle",
            "Yapma"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Önlemek için not?",
          "options": [
            "Sadece isim",
            "Kök neden ve önlem",
            "Hava",
            "Şaka"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        }
      ]
    },
    "yetkisiz_giris": {
      "title": "Yetkisiz giriş",
      "questions": [
        {
          "stem": "Kart yok ustayım diyor?",
          "options": [
            "Geçir",
            "Doğrulama olmadan sokma",
            "Herkesi al",
            "Depoya kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Turnike arızalı?",
          "options": [
            "Kontrolsüz geçir",
            "Kontrollü alternatif",
            "Sök",
            "Açık unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Eski çalışan?",
          "options": [
            "Serbest",
            "Güncel yetki yoksa alma",
            "Kart basma",
            "Sosyal medya"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Araç izinsiz saha?",
          "options": [
            "Görmezden gel",
            "Durdur kayıt/izin",
            "Çiz",
            "Üretimi durdur"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "İçeride yetkisiz?",
          "options": [
            "Linç",
            "Tespit eşlik prosedür",
            "Döv",
            "Alarm boşa"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Kask takmıyor?",
          "options": [
            "Kasksız gezdir",
            "KKD kuralı uygula",
            "Zorla giydir",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Gece ayak sesi?",
          "options": [
            "Bağır",
            "Kontrollü kontrol destek",
            "Işık kapat",
            "Bakma"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Giriş kaydı neden?",
          "options": [
            "Bürokrasi",
            "İzlenebilirlik",
            "Ceza",
            "Süs"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Tedarikçi acil?",
          "options": [
            "Kuralı boz",
            "İzin sürecini işlet",
            "Malı bırak",
            "Bekletmeden al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        },
        {
          "stem": "Kart paylaşımı?",
          "options": [
            "Görmezden gel",
            "Bildir belgele",
            "Kır",
            "Sen de paylaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yetkisiz_giris"
        }
      ]
    },
    "kimyasal": {
      "title": "Kimyasal sızıntı şüphesi",
      "questions": [
        {
          "stem": "Koku ve sızıntı?",
          "options": [
            "Elle dokun",
            "Alanı sınırla, bildir",
            "Paçavrayla sil",
            "Vantilatör aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Etiket yok; ne yapma?",
          "options": [
            "Tat",
            "Temastan kaçın",
            "İşaretle",
            "Bildir"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Baş dönmesi?",
          "options": [
            "İçeri sok",
            "Temiz hava + tıbbi destek",
            "Su ver işe döndür",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Kanalizasyona akış?",
          "options": [
            "Önemsiz",
            "Çevre riski bildir",
            "Sadece koku",
            "Sadece renk"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "KKD yok?",
          "options": [
            "Kahraman ol",
            "Yaklaşma",
            "Bez maske yeter",
            "Göz kapa"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Yanlış söndürücü?",
          "options": [
            "Hep işe yarar",
            "Tepkimeyi kötüleştirebilir",
            "Pahalı",
            "Risk yok"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Meraklı çalışan?",
          "options": [
            "İçeri al",
            "Sınır dışı",
            "Birlikte sil",
            "Fotoğraf"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Anons dili?",
          "options": [
            "Panik abartı",
            "Net sakin",
            "Bilgi yok",
            "Şaka"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Temizlik ekibi sileriz?",
          "options": [
            "İzin ver",
            "Netleşmeden izin verme",
            "Kilitle",
            "Gizle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Kapanışta ne olmalı?",
          "options": [
            "Rapor",
            "Sadece söz",
            "Sosyal medya",
            "Suçlu uydur"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        }
      ]
    },
    "yangin_fabrika": {
      "title": "Fabrika yangın alarmı",
      "questions": [
        {
          "stem": "Alarm; üretim devam?",
          "options": [
            "Sürdür",
            "Duruş/tahliye doğrulama",
            "Alarm kapat",
            "Kapı kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Yanıcı stokta duman?",
          "options": [
            "Stok kurtar",
            "Can ve tahliye",
            "Selfie",
            "Tek başına taşı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Pano dumanı?",
          "options": [
            "Su sık",
            "Elektrik riski uygun yöntem",
            "Elle aç",
            "Kablo çek"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Toplanma dolu?",
          "options": [
            "İçeri sok",
            "Sayım düzen",
            "Dağıt",
            "Terk et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Kapı takozlu?",
          "options": [
            "Bırak",
            "Kapatılmasını sağla",
            "Sök",
            "Büyüt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "İtfaiye yolu tıkalı?",
          "options": [
            "Bırak",
            "Aç",
            "Daha kapat",
            "Geri çevir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Telefonumu alacağım?",
          "options": [
            "İzin ver",
            "Riskli dönüşe izin verme",
            "Birlikte gir",
            "Sen al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Alarm sustu?",
          "options": [
            "Bitti say",
            "Doğrulama bitmeden normalleştirme",
            "Kır",
            "Sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Gece yalnız?",
          "options": [
            "Kahraman söndür",
            "Bildirim güvenli çekilme",
            "Uyu",
            "Kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        },
        {
          "stem": "Tatbikat mı gerçek mi?",
          "options": [
            "Hep tatbikat de",
            "Gerçek gibi uygula",
            "Hiçbir şey",
            "Gül"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin_fabrika"
        }
      ]
    },
    "sevkiyat": {
      "title": "Sevkiyat ve yükleme",
      "questions": [
        {
          "stem": "Belge eksik şoför?",
          "options": [
            "Belgesiz al",
            "Belgeyi tamamlat",
            "Yok say",
            "Tehdit"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Forklift kör nokta?",
          "options": [
            "Görmezden gel",
            "Uyarı ile önle",
            "Hızlandır",
            "İt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Dengesiz yük?",
          "options": [
            "Risk yok",
            "Durdur düzelt",
            "Görüntü bozuk",
            "Gecikme"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Sigara sahada?",
          "options": [
            "İzin",
            "Yanıcı kural uygula",
            "Birlikte iç",
            "İzle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Gece aydınlatma zayıf?",
          "options": [
            "Devam",
            "Güvenli ışık yoksa sürdürme",
            "Flaş yeter",
            "Göz kıs"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Yetkisiz rampada?",
          "options": [
            "Serbest",
            "Uzaklaştır sınırla",
            "Kilitle",
            "Teslim et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "İrsaliye uyuşmuyor?",
          "options": [
            "Göz yum",
            "Durdur bildir",
            "Fazlayı al",
            "Eksiği gizle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Acil sipariş korna?",
          "options": [
            "Kural esnet",
            "Güvenli prosedür koru",
            "Kornaya cevap",
            "Yol kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Alan dağınık?",
          "options": [
            "Bırak",
            "Düzen bildir",
            "Daha yığ",
            "Işık kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Rampa düşme riski?",
          "options": [
            "Uyarı ve önlem",
            "Kenara otur",
            "Yağla",
            "Korkuluk sök"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        }
      ]
    }
  },
  "Site": {
    "gece_misafir": {
      "title": "Gece misafir / giriş",
      "questions": [
        {
          "stem": "01:00 tanımadık misafir?",
          "options": [
            "Sorgusuz al",
            "Bildirim/onay kimlik",
            "Sonsuza kilitle",
            "Hiç konuşma"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Sakin kod veriyor?",
          "options": [
            "Risk yok",
            "Kontrolsüz giriş riski",
            "Zaman kaybı",
            "Kod herkese açık"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Misafir tartışıyor?",
          "options": [
            "Bağır",
            "Sakin net kural destek",
            "İtele",
            "Kapı açık unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Parti şikâyeti?",
          "options": [
            "Baskın",
            "Kayıt uyarı süreç",
            "Katıl",
            "Bakma"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Kamera arızalı?",
          "options": [
            "Kontrol bırak",
            "Manuel kayıt",
            "Herkesi çevir",
            "Kapı açık"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Çocuk tek kapıda?",
          "options": [
            "İçeri sal",
            "Güvenli beklet veli",
            "Uzaklaştır",
            "Fotoğraf"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Kurye ısrar?",
          "options": [
            "Kapı açık",
            "Teslimat kuralı",
            "Paket aç",
            "Dolaştır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "İşine karışma diyor?",
          "options": [
            "Kural bırak",
            "Görevi hatırlat uygula",
            "Tartış",
            "İstifa"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Defter neden?",
          "options": [
            "Süs",
            "İzlenebilirlik",
            "Gereksiz",
            "Sadece gündüz"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        },
        {
          "stem": "Şüpheli araç?",
          "options": [
            "Yok say",
            "Gözlem plaka bildirim",
            "Lastik indir",
            "Cam kır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gece_misafir"
        }
      ]
    },
    "hirsizlik_site": {
      "title": "Site hırsızlık şüphesi",
      "questions": [
        {
          "stem": "Bodrum eksik?",
          "options": [
            "Herkesi suçla",
            "Kayıt kamera kontrol",
            "Kapı sök",
            "İhbar sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Çantayla çıkıyor?",
          "options": [
            "Zorla ara",
            "Sakin gözlem süreç",
            "Çanta çek",
            "Unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Şu daireyi bas diyor?",
          "options": [
            "Baskın",
            "Yetkisiz giriş yok",
            "Kapı kır",
            "Yay"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Kilit kırık?",
          "options": [
            "Bırak",
            "Koruyup bildir",
            "Cebine at",
            "Boşalt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Kamera isteniyor?",
          "options": [
            "WhatsApp at",
            "Yetkili paylaşım",
            "Sil",
            "Sat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "İspat yok rapor?",
          "options": [
            "Yazılmaz",
            "İddia işlem sonuç",
            "Suçlu ilan",
            "Sözlü"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Cam kırığı?",
          "options": [
            "Süpür unut",
            "Kayıt kamera süreç",
            "Suçlu uydur",
            "Tüm arabaları ara"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Çocuk gördüm diyor?",
          "options": [
            "Sorguya çek",
            "Not al aktar",
            "Teşhir",
            "At"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Yönetici baskı?",
          "options": [
            "Usulsüz işlem",
            "Prosedür koru",
            "Aşağıla",
            "Bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        },
        {
          "stem": "Önleyici tur?",
          "options": [
            "Telefon",
            "Kilit ışık iz çıkış",
            "Çiçek",
            "Sohbet"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "hirsizlik_site"
        }
      ]
    },
    "asansor": {
      "title": "Asansör arızası",
      "questions": [
        {
          "stem": "Mahsur ihbarı?",
          "options": [
            "Zorla aç",
            "İletişim teknik prosedür",
            "Sars",
            "Beklet"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Panik içeride?",
          "options": [
            "Korkut",
            "Sakin net bilgi",
            "Sessiz kal",
            "Telefon kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Çocuk yalnız?",
          "options": [
            "Sık iletişim",
            "Tekmele",
            "Azarla",
            "Bekleme"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Teknik yolda sen?",
          "options": [
            "Daireye gir",
            "Alan güvenli bilgi aktar",
            "Panel sök",
            "Kat değiştir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kapı aralık boşluk?",
          "options": [
            "Sıkış",
            "Düşme riski bekle",
            "Atla",
            "Daha aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Bakıma alınmalı?",
          "options": [
            "Açık bırak",
            "Kullanım dışı bırak",
            "Tabela gizle",
            "Bir kata indir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Ben tamir ederim?",
          "options": [
            "İzin ver",
            "Yetkisiz müdahale engelle",
            "Alet ver",
            "Dene"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Yangında asansör?",
          "options": [
            "Serbest",
            "Genelde kullanılmaz",
            "Tek çıkış",
            "Söndürür"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kayıt?",
          "options": [
            "Gerekmez",
            "Saat kat kişi sonuç",
            "Şaka",
            "Fotoğraf"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Sık arıza?",
          "options": [
            "Yok say",
            "Yazılı ilet",
            "Kır",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        }
      ]
    },
    "gurultu": {
      "title": "Gürültü ve komşu şikâyeti",
      "questions": [
        {
          "stem": "Gece müzik?",
          "options": [
            "Tekmele",
            "Nazik uyarı",
            "Polis uydur",
            "Sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Devam ediyorsa?",
          "options": [
            "Fiziksel",
            "Kayıt tekrar süreç",
            "Elektrik kes",
            "Sen aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "İki komşu bağırıyor?",
          "options": [
            "Taraf ol",
            "Ayır kayıt",
            "Kavga ettir",
            "Görmezden gel"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "İsim gizli?",
          "options": [
            "Kapıya as",
            "Mahremiyetle yürüt",
            "Herkese söyle",
            "Reddet"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "İnşaat gürültüsü?",
          "options": [
            "Bakma",
            "Saat kural bildir",
            "Bas",
            "Alet al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Havlayan hayvan?",
          "options": [
            "Zarar ver",
            "Uyarı kayıt",
            "Hayvan al",
            "Kapı aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Filme alınıyorsun?",
          "options": [
            "Telefon kır",
            "Profesyonel kal",
            "Kaç",
            "Tartış"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Rapor gerekir mi?",
          "options": [
            "Hayır",
            "Tekrarda kayıt faydalı",
            "Söz",
            "Tehdit"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Erken tadilat?",
          "options": [
            "Her saat serbest",
            "Site saatleri uygula",
            "Asla yok",
            "Sadece pazar"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        },
        {
          "stem": "Toplu şikâyet?",
          "options": [
            "Hedef göster",
            "Objektif kayıt paylaş",
            "Dağıt",
            "Kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "gurultu"
        }
      ]
    },
    "otopark": {
      "title": "Otopark ihlali",
      "questions": [
        {
          "stem": "Yangın hücresi önü?",
          "options": [
            "Bırak",
            "Uyarı kaldırt",
            "Çiz",
            "Lastik indir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Engelli yer izinsiz?",
          "options": [
            "Görmezden gel",
            "Uyarı prosedür",
            "Cam kır",
            "Zorla taşı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Çift sıra tıkıyor?",
          "options": [
            "Risk yok",
            "Müdahale gecikmesi",
            "Görüntü",
            "Ceza"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Plaka okunmuyor?",
          "options": [
            "Uydur",
            "Not fotoğraf takip",
            "Boy",
            "İlan et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Yer tartışması?",
          "options": [
            "Taraf seç",
            "Plan ile sakinleştir",
            "Cezalandır",
            "Sat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Gece şüpheli araç?",
          "options": [
            "Yok say",
            "Gözlem bildirim",
            "Cam kır",
            "Kaçır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Kapı açık unutulmuş?",
          "options": [
            "Açık bırak",
            "Kapat kayıt",
            "Sök",
            "Kod ver"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Bisiklet yolu kesik?",
          "options": [
            "İzin",
            "Uyarı kaldırt",
            "Bisiklet at",
            "Yol kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Çekici kimden?",
          "options": [
            "Keyfi sen",
            "Yetki zinciri",
            "Her şikâyetçi",
            "Hiç kimse"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        },
        {
          "stem": "Otopark kaza?",
          "options": [
            "Kışkırt",
            "Güvenli alan tutanak",
            "Zorla ayır",
            "Kayıt sil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Site",
          "scenarioId": "otopark"
        }
      ]
    }
  },
  "Havalimanı": {
    "guvenlik_kapisi": {
      "title": "Güvenlik kontrol noktası",
      "questions": [
        {
          "stem": "Geçmek istemiyor?",
          "options": [
            "Zorla it",
            "Kural açıkla alternatif",
            "İzin ver",
            "Büyüt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Cihaz alarm?",
          "options": [
            "Yok say",
            "İkincil kontrol",
            "Serbest bırak",
            "Kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Agresif kuyruk?",
          "options": [
            "Kontrol gevşet",
            "Standardı koru sakinleştir",
            "Sıra iptal",
            "Kapı kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Yasak madde şüphesi?",
          "options": [
            "Cebine at",
            "Yetkiliye devret",
            "Yok say",
            "İade et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Çocuk tarandı ebeveyn panik?",
          "options": [
            "Uzaklaştır",
            "Sakin bilgilendir",
            "Dışarı at",
            "Atla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Tanıdık personel kontrolsüz?",
          "options": [
            "Doğru",
            "Yanlış aynı standart",
            "Bazen",
            "Gece doğru"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Laptop çıkmadı?",
          "options": [
            "Geçir",
            "Tekrar kontrol",
            "Al",
            "Kır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Şaka bomba?",
          "options": [
            "Gül",
            "Prosedür işlet",
            "Yok say",
            "Şaka devam"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Unattended bag kuyrukta?",
          "options": [
            "Aç",
            "Mesafe bildirim",
            "Taşı",
            "Çöp"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        },
        {
          "stem": "Filme alınıyor?",
          "options": [
            "Telefon kır",
            "Görev sürdür uyar",
            "Kaç",
            "Tartış"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "guvenlik_kapisi"
        }
      ]
    },
    "bagaj": {
      "title": "Bagaj ve kayıp eşya",
      "questions": [
        {
          "stem": "Sahipsiz valiz?",
          "options": [
            "Aç",
            "Bildirim güvenli işlem",
            "Eve götür",
            "Başkasına ver"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Yanlış valiz aldı?",
          "options": [
            "Görmezden gel",
            "Durdur doğrula",
            "Sert çek",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Sıvı sızıntı?",
          "options": [
            "Risk yok",
            "Temastan kaçın bildir",
            "Leke",
            "Koku"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Kayıp bagaj masası?",
          "options": [
            "Bagaj bul",
            "Düzen gözlem",
            "Sat",
            "Dağıt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Etiket kopuk?",
          "options": [
            "Rastgele ver",
            "Tanımlama prosedürü",
            "Uydur",
            "Aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Bantı durdurmak istiyor?",
          "options": [
            "Keyfi durdur",
            "Yetkili süreç",
            "Evrak oku",
            "Yırt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Şüpheli kargo?",
          "options": [
            "Karıştır",
            "Alan koru devret",
            "Gizle",
            "İmha"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Hırsızlık iddiası?",
          "options": [
            "Suçlu ilan",
            "Kayıt kamera süreç",
            "Sil",
            "Öde"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Gece bagaj alanı?",
          "options": [
            "Uyu",
            "Devriye yetkisiz giriş",
            "Işık kapat",
            "Kapı açık"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        },
        {
          "stem": "Bulunan eşya defteri?",
          "options": [
            "Süs",
            "İade izlenebilirlik",
            "Gereksiz",
            "Gündüz"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "bagaj"
        }
      ]
    },
    "supheli_yolcu": {
      "title": "Şüpheli yolcu davranışı",
      "questions": [
        {
          "stem": "Bagaj bırakıp uzaklaşıyor?",
          "options": [
            "Yok say",
            "Gözlem bildirim",
            "Tek başına sorgu",
            "Teşhir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Dokunmayın bağırıyor?",
          "options": [
            "Zorla tut",
            "Mesafeli iletişim destek",
            "Kalabalık topla",
            "Kaç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Sahte belge şüphesi?",
          "options": [
            "Yırt",
            "Yetkiliye sevk",
            "Serbest bırak",
            "Sakla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Başkasının çantasını karıştırıyor?",
          "options": [
            "İzle",
            "Müdahale et süreç",
            "Sen karıştır",
            "Görmezden gel"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "İhbar net değil?",
          "options": [
            "Sil",
            "Tarama takviye",
            "Herkesi ara",
            "Terminal kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Kaçıyor gibi?",
          "options": [
            "Ateş aç",
            "Güvenli takip ekip",
            "Linç",
            "Bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Sadece kıyafet profili?",
          "options": [
            "Evet",
            "Hayır davranış temelli",
            "Sadece yaş",
            "Sadece dil"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Çocuk agresif yabancıyla?",
          "options": [
            "Yok say",
            "Koruma süreci",
            "Çocuğu al",
            "Döv"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Abartılı bildirim zararı?",
          "options": [
            "Zararsız",
            "Yanlış yönlendirme",
            "Komik",
            "Hızlı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        },
        {
          "stem": "Brifing neden?",
          "options": [
            "Sohbet",
            "Öğrenme koordinasyon",
            "Gereksiz",
            "Ceza"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "supheli_yolcu"
        }
      ]
    },
    "kalabalik": {
      "title": "Terminal kalabalığı",
      "questions": [
        {
          "stem": "Kapı değişti izdiham?",
          "options": [
            "Sıkıştır",
            "Yönlendir akış",
            "Kapı kapat",
            "Anons abart"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Bantta düşen?",
          "options": [
            "Hızlandır",
            "Durdur yardım",
            "Üstünden atla",
            "Gül"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Protesto?",
          "options": [
            "Taraf ol",
            "Güvenli alan koordinasyon",
            "Şiddet",
            "Katıl"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Acil çıkış tıkalı?",
          "options": [
            "Bırak",
            "Aç uyar",
            "Çal",
            "Gizle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Anons anlaşılmıyor?",
          "options": [
            "Bağır",
            "Net yönlendirme",
            "Kes",
            "Yanlış bilgi"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Kayıp yaşlı?",
          "options": [
            "Terk et",
            "Güvenli beklet yönlendir",
            "Kapıya bırak",
            "Paylaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Yangın alarmı kalabalık?",
          "options": [
            "Selfie",
            "Sakin tahliye",
            "Asansör doldur",
            "Kilitle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Kavga?",
          "options": [
            "İzle",
            "Ayır alan aç destek",
            "Kavga et",
            "Bahis"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "Medya çekiyor?",
          "options": [
            "Keyfi engel",
            "Kurala göre yönet",
            "Yayına çık",
            "Kamera kır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        },
        {
          "stem": "En iyi araç?",
          "options": [
            "Bağır",
            "Erken yönlendirme işaret",
            "Karanlık",
            "Kapalı kapı"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kalabalik"
        }
      ]
    },
    "pist_yani": {
      "title": "Yetkisiz alan / apron riski",
      "questions": [
        {
          "stem": "Önlüksüz kişi aralık kapı?",
          "options": [
            "Selam",
            "Durdur yetki kontrol",
            "Gez",
            "Daha aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Araç hız aşıyor?",
          "options": [
            "Alkış",
            "Bildirim",
            "Yarış",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Yerde cisim FOD?",
          "options": [
            "Tekmele",
            "Bildirim temizlik",
            "Cebine at",
            "Görmezden gel"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Yanlış ışık?",
          "options": [
            "Tek başına düzelt",
            "Acil bildir",
            "Kır",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Sigara yakıt yanı?",
          "options": [
            "İzin",
            "Durdur bildir",
            "Birlikte iç",
            "Fotoğraf"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Drone?",
          "options": [
            "Taş at",
            "Bildirim gözlem",
            "Yok say",
            "Çal"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Kart unutulmuş açık kapı?",
          "options": [
            "Açık bırak",
            "Kapat kayıt",
            "Taklit",
            "Herkesi al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Yabancı dil kayıp?",
          "options": [
            "Terk",
            "Yardım yönlendir",
            "Bağır",
            "Dışarı bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Gece şüpheli ses?",
          "options": [
            "Karanlığa dal",
            "Destek kontrollü",
            "Ses çıkarma",
            "Kaç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        },
        {
          "stem": "Brifingde ne?",
          "options": [
            "Dedikodu",
            "Risk olay kural",
            "Yemek",
            "Hiç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Havalimanı",
          "scenarioId": "pist_yani"
        }
      ]
    }
  },
  "Banka": {
    "soygun_alarm": {
      "title": "Soygun / alarm",
      "questions": [
        {
          "stem": "Sessiz alarm?",
          "options": [
            "Bağır soygun var",
            "Gizli bildirim prosedür",
            "Herkesi rehine say",
            "Kasa aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Maskeli gişe?",
          "options": [
            "Atıl",
            "Can güvenliği gözlem prosedür",
            "Para uzat",
            "Yayın"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Müşteri panik?",
          "options": [
            "Para say",
            "İnsanları güvenli tut",
            "İçeri tık",
            "Işık kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Kaçtı?",
          "options": [
            "Silahlı takip",
            "Gözlem yön bildirim",
            "Linç",
            "Unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Tatbikat mı gerçek?",
          "options": [
            "Gül dağıl",
            "Gerçek gibi",
            "Alarm kapat",
            "Kasa aç"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Parayı verin bitsin?",
          "options": [
            "Tartış",
            "Can güvenliği destek",
            "Personeli it",
            "Cebine at"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Delil sonrası?",
          "options": [
            "Temizle",
            "Koruyup kayıt",
            "Sil",
            "Sosyal medya"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Basın?",
          "options": [
            "Detay anlat",
            "Yetkiliye yönlendir",
            "Kapı aç",
            "Yalan"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Sık sahte alarm?",
          "options": [
            "İptal et",
            "Teknik bildirim",
            "Pil çıkar",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Gece yalnız alarm?",
          "options": [
            "İçeri dal",
            "Destek güvenli kontrol",
            "Uyu",
            "Kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        }
      ]
    },
    "supheli_musteri": {
      "title": "Şüpheli müşteri davranışı",
      "questions": [
        {
          "stem": "Kasaya bakıp not alıyor?",
          "options": [
            "Suçla",
            "Gözlem bildirim",
            "Defter al",
            "Kov"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Sahte para şüphesi?",
          "options": [
            "Cebine at",
            "Ayır bildir",
            "İade unut",
            "Yırt"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Personeli tehdit?",
          "options": [
            "Görmezden gel",
            "Koruyup süreç",
            "Karşılık ver",
            "Döv"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Kimlik reddi?",
          "options": [
            "Zorla işlem",
            "Kural uygula durdur",
            "Kimliksiz yap",
            "Tartış"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Sıra kavgası?",
          "options": [
            "Taraf ol",
            "Sakinleştir düzen",
            "Sıra iptal",
            "Kapı kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "ATM düzenek?",
          "options": [
            "Dokun",
            "Alan koru bildir",
            "Sök",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Müdürüm var diye esnet?",
          "options": [
            "Esnet",
            "Kural koru onay bekle",
            "Geçir",
            "Hakaret"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Çocuk yalnız?",
          "options": [
            "Dışarı at",
            "Güvenli gözlem",
            "Para ver",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Şüpheli paket gişe yanı?",
          "options": [
            "Aç",
            "Mesafe bildirim",
            "Taşı",
            "Çöp"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        },
        {
          "stem": "Rapor içeriği?",
          "options": [
            "Tahmin",
            "Gözlem saat aksiyon",
            "Hakaret",
            "Sadece isim"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "supheli_musteri"
        }
      ]
    },
    "kasa_bolgesi": {
      "title": "Kasa ve restricted alan",
      "questions": [
        {
          "stem": "Kapı aralık?",
          "options": [
            "İçeri bak",
            "Kapat bildir",
            "Açık bırak",
            "Gir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Yetkisiz koridor?",
          "options": [
            "Selam",
            "Yetki kontrol",
            "Birlikte gir",
            "Açık bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Çift kişi kuralı çiğneniyor?",
          "options": [
            "Görmezden gel",
            "Hatırlat bildir",
            "Zorla",
            "Anahtar al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Anahtar masada?",
          "options": [
            "Cebine at",
            "Güvene al teslim",
            "Kopyala",
            "Yere bırak"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Temizlikçi restricted?",
          "options": [
            "Serbest",
            "Eşlik/izin",
            "Bağırarak kov",
            "Yardım et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Kamera bulanık?",
          "options": [
            "Bırak",
            "Arıza kaydı",
            "Sök",
            "Keyfi çevir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Sayım tartışması?",
          "options": [
            "Sayıma karış",
            "Alan güvenliği",
            "Kilitle",
            "Paraya dokun"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Acilde personel içeride?",
          "options": [
            "Sadece bekle",
            "Tahliye desteği",
            "Açık bırak",
            "Anahtar yay"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "Fotoğraf çekiyor?",
          "options": [
            "İzin ver",
            "Durdur kural",
            "Telefon kır",
            "Poz ver"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        },
        {
          "stem": "İhlal raporu neden?",
          "options": [
            "Süs",
            "Denetim risk",
            "Gereksiz",
            "Ceza"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_bolgesi"
        }
      ]
    },
    "atm": {
      "title": "ATM sahası",
      "questions": [
        {
          "stem": "Skimming şüphesi?",
          "options": [
            "Sök",
            "Kullanımı durdur bildir",
            "Sakla",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Omuz sörfü?",
          "options": [
            "Görmezden gel",
            "Uyarı mesafe",
            "PIN oku",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Kart yutuldu?",
          "options": [
            "Kasadan çıkar",
            "Banka süreci",
            "Kır",
            "Cebine at"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Gece agresif dilenci?",
          "options": [
            "Zorla ver",
            "Mesafe destek",
            "Döv",
            "ATM kapat"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Sahte ekran?",
          "options": [
            "Kullan",
            "Uyarı bildir",
            "Sök",
            "Şifre dene"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "İki kişi bir kart?",
          "options": [
            "Risk yok",
            "Ayrı kontrol",
            "Yavaşlık",
            "Kuyruk"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Kapak açık?",
          "options": [
            "Kapat unut",
            "Bildirim alan koru",
            "İçine bak",
            "Para al"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Eksik para iddiası?",
          "options": [
            "Kasadan öde",
            "Kayıt itiraz süreci",
            "Kov",
            "Tekmele"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Çocuk kart sokuyor?",
          "options": [
            "İzin",
            "Durdur ebeveyn",
            "Kart al",
            "Yardım et"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        },
        {
          "stem": "Aydınlatma bozuk?",
          "options": [
            "Bırak",
            "Arıza kaydı",
            "Ampul çal",
            "Karanlıkta bekle"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "atm"
        }
      ]
    },
    "siber_fiziksel": {
      "title": "Dolandırıcılık ve içeriden risk",
      "questions": [
        {
          "stem": "Yüksek sesle bilgi okuyor?",
          "options": [
            "Dinle",
            "Mahremiyet uyarısı",
            "Yay",
            "Görmezden gel"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Denetçiyim diyor?",
          "options": [
            "İnan",
            "Kimlik randevu doğrula",
            "Gezdir",
            "Anahtar ver"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "USB bulundu?",
          "options": [
            "Tak",
            "BT’ye teslim",
            "Evde dene",
            "Çöp"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Linkten param gitti?",
          "options": [
            "Teknik çöz",
            "Yönlendir birim",
            "Para vaat et",
            "Suçla"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "İçeriden şüpheli paket?",
          "options": [
            "Yok say",
            "Kontrol prosedür",
            "Keyfi aç",
            "Döv"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Şifre yapışık?",
          "options": [
            "Fotoğraf",
            "Kaldırt bildir",
            "Kullan",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Eski personel eşyam kaldı?",
          "options": [
            "İçeri sal",
            "Eşlikli onaylı",
            "Kart ver",
            "Depo gezdir"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Telefonla kod isteyen?",
          "options": [
            "Söyle",
            "Doğrulama yok bilgi yok",
            "Sohbet",
            "Parola paylaş"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Kayıp kart?",
          "options": [
            "Bekle",
            "İptal bildirim",
            "Keyfi bas",
            "Unut"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        },
        {
          "stem": "Farkındalık eğitimi?",
          "options": [
            "Süs",
            "Riski azaltır",
            "Gereksiz",
            "Sadece stajyer"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği, yetki sınırı ve prosedüre uygun bildirim/koordinasyon esastır.",
          "explainWrong": [
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır.",
            "Yanlış: Bu yaklaşım riski artırır veya yetki/prosedür dışındadır."
          ],
          "institution": "Banka",
          "scenarioId": "siber_fiziksel"
        }
      ]
    }
  }

  ,"Belediye": {
    "vatandas_yogunlugu": {
      "title": "Vatandaş yoğunluğu",
      "questions": [
        {"stem":"Gişede yüksek sesli tartışma var. İlk adım?","options":["Mesafeyi koru, sakinleştir, gerekirse destek iste","Tek başına fiziksel müdahale et","Olayı yok say","Herkesi bağırarak dağıt"],"correctIndex":0,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Can güvenliği ve prosedür.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Sahipsiz evrak dosyası bulundu. Ne yaparsın?","options":["Açıp oku","Kayıt altına al, ilgili birime teslim et","Çöpe at","Masaya bırak unut"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Kayıt ve teslim.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Yetkisiz kişi başkanlık koridoruna girmek istiyor.","options":["Tanıdık diye geçir","Kimlik ve randevu doğrula","Kapıyı açık bırak","Tartışmaya gir"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Yetki doğrulama.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Meydanda izinsiz toplanma ihtimali.","options":["Tek başına dağıt","Üst birimi bilgilendir, alanı izle","Görmezden gel","Sosyal medyada paylaş"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Bildirim ve gözlem.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Yangın paneli alarm veriyor.","options":["Paneli sustur","Bölgeyi doğrula ve prosedürü başlat","Hiçbir şey yapma","Vatandaşları bağırarak uyar"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Doğrulama ve prosedür.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Kamera arızası bildirildi.","options":["Önemli değil deyip geç","Arızayı kaydet ve amire bildir","Kamerayı sök","Kör noktayı unut"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Kayıt ve bildirim.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Gece mesai dışı ışık yanıyor.","options":["Işığı söndürüp çık","Telsizle bildirip kontrollü kontrol et","Kontrolü atla","Tek başına karanlığa gir"],"correctIndex":1,"difficulty":"medium","shift":"night","explainCorrect":"Doğru: Kontrollü yaklaşım.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Vatandaş belge için sırayı zorluyor.","options":["Sakin yönlendir, destek talep et","Fiziksel engelle","Yok say","Kapıyı kilitle"],"correctIndex":0,"difficulty":"medium","shift":"day","explainCorrect":"Doğru: Sakin yönetim.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Şüpheli paket giriş holünde.","options":["Paketi aç","Alanı güvenli tut, bildir","Başka yere taşı","Görmezden gel"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Mesafe ve bildirim.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"},
        {"stem":"Olay kapanınca öncelik?","options":["Sosyal medyada paylaş","Rapor ve kamera referansını tamamla","Kayıtsız tura çık","Dosyayı sakla"],"correctIndex":1,"difficulty":"medium","shift":"both","explainCorrect":"Doğru: Raporlama.","explainWrong":["Yanlış.","Yanlış.","Yanlış.","Yanlış."],"institution":"Belediye","scenarioId":"vatandas_yogunlugu"}
      ]
    }
  }

};
