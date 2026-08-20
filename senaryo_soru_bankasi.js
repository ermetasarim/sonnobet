/* Son Nöbet — soru bankası v5.12 (+Banka)
   Gerekçe, zorluk, gece/gündüz. correctIndex: 0=A..3=D */
var senaryoSoruBankasi = {
  "AVM": {
    "supheli_paket": {
      "title": "Şüpheli paket / terör algısı",
      "questions": [
        {
          "stem": "AVM yemek katında sahibi belirsiz bir sırt çantası fark ettin. Etraf kalabalık ve bazı müşteriler çekim yapıyor. Bu durumda ilk ve en doğru yaklaşım hangisidir?",
          "options": [
            "Güvenli mesafe bırakmak, alanı kontrol altına almaya çalışmak ve ilgili birimleri bilgilendirmek",
            "Çantayı hemen açıp tehlikeli bir şey olup olmadığını kontrol etmek",
            "Çantayı alıp en yakın depolama alanına kilitlemek",
            "Paketi müşteri alanından uzaklaştırıp depoda kilitlemek ve sonra bildirmek"
          ],
          "correctIndex": 0,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: İçerik bilinmeden taşımak veya açmak hem güvenlik hem delil açısından tehlikelidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Şüpheli görünen bir paketi yerinden oynatmak veya taşımak neden riskli kabul edilir?",
          "options": [
            "Çünkü paket her zaman boştur ve zaman kaybıdır",
            "Çünkü paket içeriği ve risk bilinmeden müdahale, hem güvenlik hem delil açısından sorun yaratabilir",
            "Çünkü yalnızca polis paket taşıyabilir, güvenlik hiç dokunamaz",
            "Çünkü paket taşınırsa kamera kaydı bozulur"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: İçerik bilinmeden taşımak veya açmak hem güvenlik hem delil açısından tehlikelidir.",
            "Yanlış: İçerik bilinmeden taşımak veya açmak hem güvenlik hem delil açısından tehlikelidir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Paket ihbarı sonrası müşteriler panikleyip koşmaya başlarsa görevlinin öncelikli hedefi ne olmalıdır?",
          "options": [
            "Paketi müşteri alanından uzaklaştırıp depoda kilitlemek ve sonra bildirmek",
            "Tüm kapıları kilitleyip kimseyi dışarı bırakmamak",
            "Panik yayılımını azaltacak şekilde sakin, net yönlendirme yapmak ve güvenli akışı korumak",
            "Paketi müşteri alanından uzaklaştırıp depoda kilitlemek ve sonra bildirmek"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "both",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Mağaza müdürü 'Bu çantayı hemen kaldırın, müşteri kaçmasın' diyerek baskı yapıyor. En doğru tutum nedir?",
          "options": [
            "Müdürün talimatına uyup çantayı hemen kaldırmak",
            "Tartışmayı uzatıp müdürü müşterilerin önünde uyarmak",
            "Çantayı müdüre teslim edip sorumluluktan çıkmak",
            "Baskıya rağmen güvenlik prosedürünü koruyup çantayı açmadan/gelişigüzel taşımadan ilgili süreci işletmek"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: İçerik bilinmeden taşımak veya açmak hem güvenlik hem delil açısından tehlikelidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "İhbar sonunda asılsız çıksa bile olay kaydı tutulması neden önemlidir?",
          "options": [
            "Süreç, kararlar ve bildirimler sonradan incelenebilsin diye kurumsal iz bırakır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Asılsız ihbarlar hiç raporlanmamalıdır",
            "Kayıt yalnızca yaralanma olursa gerekir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Süreç, kararlar ve bildirimler sonradan incelenebilsin diye kurumsal iz bırakır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Süreç, kararlar ve bildirimler sonradan incelenebilsin diye kurumsal iz bırakır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Kalabalık bir koridorda şüpheli paket senaryosunda asıl öncelik sırası hangisine daha yakındır?",
          "options": [
            "Önce kasa cirosunu korumak, sonra güvenlik",
            "Önce can güvenliği ve kontrollü alan yönetimi, sonra operasyonel detaylar",
            "Önce görüntü almak, sonra müdahale",
            "Önce asansörleri kapatmak"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Telsizle bildirim yaparken hangi üslup daha doğrudur?",
          "options": [
            "Uzun ve ayrıntılı sohbet ederek her ihtimali tartışmak",
            "Şüpheliyi etiketleyen kesin suçlamalarla konuşmak",
            "Konum, gözlem ve ihtiyaç duyulan desteği kısa ve net aktarmak",
            "Telsizi kapatıp işi bitirince anlatmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Konum, gözlem ve ihtiyaç duyulan desteği kısa ve net aktarmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Konum, gözlem ve ihtiyaç duyulan desteği kısa ve net aktarmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Şüpheli paket bölgesinde alan kontrolü / yumuşak izolasyon ne anlama gelir?",
          "options": [
            "İnsanları zorla tek odaya kilitlemek",
            "Tüm AVM'yi tahliye etmeden önce müzik açmak",
            "Sadece uyarı levhası koyup uzaklaşmak",
            "Gereksiz yaklaşımı azaltıp güvenli mesafeyi ve yönlendirmeyi sağlamak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Sosyal medyada 'AVM'de bomba var' şeklinde yayılan kontrolsüz bilgiye nasıl yaklaşılmalıdır?",
          "options": [
            "Doğrulanmamış bilgi güvenlik kararının tek dayanağı yapılmamalı, resmi süreç izlenmelidir",
            "Hemen doğru kabul edilip herkese duyurulmalıdır",
            "Paylaşan müşterilerin telefonuna el konulmalıdır",
            "Görmezden gelinip hiç bildirilmemelidir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Doğrulanmamış bilgi güvenlik kararının tek dayanağı yapılmamalı, resmi süreç izlenmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Doğrulanmamış bilgi güvenlik kararının tek dayanağı yapılmamalı, resmi süreç izlenmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Olay yerine üşüşen meraklı kişilere karşı doğru yaklaşım nedir?",
          "options": [
            "Onları içeri alıp tanık diye tutmak",
            "Tartışmaya girmeden güvenli mesafede kalmalarını sağlamak",
            "Hepsini aynı anda sorgulamak",
            "Kameraya poz verdirmek"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Tartışmaya girmeden güvenli mesafede kalmalarını sağlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Tartışmaya girmeden güvenli mesafede kalmalarını sağlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "'Muhtemelen boş çanta' düşüncesi prosedürü değiştirir mi?",
          "options": [
            "Evet, boşsa açılabilir",
            "Evet, boşsa çöpe atılabilir",
            "Hayır; risk netleşmeden temel güvenlik yaklaşımı korunur",
            "Sadece gece vardiyasında değiştirir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Kalabalıkta yanlış kişiyi 'şüpheli' diye hedeflemek neden tehlikelidir?",
          "options": [
            "Çünkü o kişi her zaman suçludur",
            "Çünkü kamera kaydı bozulur",
            "Çünkü telsiz çekmez",
            "Çünkü haksız müdahale, panik ve hukuki/operasyonel sorun doğurabilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Çünkü haksız müdahale, panik ve hukuki/operasyonel sorun doğurabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Çünkü haksız müdahale, panik ve hukuki/operasyonel sorun doğurabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Yönetici baskısı prosedürü bozduğunda sorumluluk açısından en doğru çerçeve hangisidir?",
          "options": [
            "Güvenlik kararı yine güvenlik mantığı ve kayıtlı süreçle ilerlemelidir",
            "Yönetici söylediyse prosedür geçersizdir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenlik kararı yine güvenlik mantığı ve kayıtlı süreçle ilerlemelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenlik kararı yine güvenlik mantığı ve kayıtlı süreçle ilerlemelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Olay sakinleştikten sonra yapılması gereken temel iş nedir?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Gözlem, alınan önlemler ve bildirimleri anlaşılır şekilde kayıt altına almak",
            "Kayıtları silerek 'olmamış gibi' kapatmak",
            "Sadece sözlü olarak bir arkadaşa anlatmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Gözlem, alınan önlemler ve bildirimleri anlaşılır şekilde kayıt altına almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gözlem, alınan önlemler ve bildirimleri anlaşılır şekilde kayıt altına almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        },
        {
          "stem": "Bu senaryoda en doğru genel ilke hangisidir?",
          "options": [
            "Acele edip tek başına sonucu zorlamak",
            "Merak edip paketi incelemek",
            "Doğrulamak, güvenli mesafeyi korumak ve ilgili birimleri bilgilendirmek",
            "Panik çıksın diye yüksek sesle alarm vermek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Doğrulamak, güvenli mesafeyi korumak ve ilgili birimleri bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Doğrulamak, güvenli mesafeyi korumak ve ilgili birimleri bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "supheli_paket"
        }
      ]
    },
    "hirsizlik": {
      "title": "Mağaza hırsızlığı ve kovalamaca",
      "questions": [
        {
          "stem": "Mağaza çıkış alarmı çaldığında güvenlik görevlisinin ilk mantıklı adımı hangisidir?",
          "options": [
            "Hemen koşup ilk şüpheli görüneni tutmak",
            "Alarmı kapatıp olay yokmuş gibi davranmak",
            "Kalabalığa 'hırsız var' diye bağırmak",
            "Durumu gözlemlemek, personelle kısa koordinasyon kurmak ve prosedüre uygun ilerlemek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Durumu gözlemlemek, personelle kısa koordinasyon kurmak ve prosedüre uygun ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Durumu gözlemlemek, personelle kısa koordinasyon kurmak ve prosedüre uygun ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Yoğun koridorda kontrolsüz kovalamaca neden tercih edilmez?",
          "options": [
            "Çünkü üçüncü kişilere zarar, yanlış kişiye müdahale ve kontrol kaybı riski artar",
            "Çünkü her zaman yasal olarak yasaktır",
            "Çünkü kamera hiç kayıt yapmaz",
            "Çünkü mağaza personeli tek başına yeterlidir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Çünkü üçüncü kişilere zarar, yanlış kişiye müdahale ve kontrol kaybı riski artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Çünkü üçüncü kişilere zarar, yanlış kişiye müdahale ve kontrol kaybı riski artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Yanlış müşteriye 'hırsız' muamelesi yapmanın olası sonucu nedir?",
          "options": [
            "Hiçbir sonuç doğmaz",
            "Haksız müdahale, şikâyet ve olayın büyümesi riski oluşur",
            "Sadece mağaza puan kaybeder",
            "Görevli otomatik ödül alır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Haksız müdahale, şikâyet ve olayın büyümesi riski oluşur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Haksız müdahale, şikâyet ve olayın büyümesi riski oluşur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Mağaza personeli bağırarak birini işaret ediyorsa güvenlik nasıl davranmalıdır?",
          "options": [
            "Hiç düşünmeden işaret edilen herkesi fiziksel olarak durdurmalıdır",
            "Personelle tartışmaya girmelidir",
            "Personelin yönlendirmesini dikkate alıp sakin ve kontrollü şekilde doğrulamalıdır",
            "Olay yerinden uzaklaşmalıdır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Personelin yönlendirmesini dikkate alıp sakin ve kontrollü şekilde doğrulamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Personelin yönlendirmesini dikkate alıp sakin ve kontrollü şekilde doğrulamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Olayın sonradan incelenebilmesi için hangisi daha değerlidir?",
          "options": [
            "Sadece sözlü anlatım",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Hiç kayıt tutmamak",
            "Net gözlem notu, varsa kamera yönlendirmesi ve tutarlı rapor"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Net gözlem notu, varsa kamera yönlendirmesi ve tutarlı rapor. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net gözlem notu, varsa kamera yönlendirmesi ve tutarlı rapor. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Fiziksel güç kullanımı bu tür olayda nasıl konumlandırılmalıdır?",
          "options": [
            "Gerektiğinde ve orantılı biçimde, son çare mantığıyla düşünülmelidir",
            "Her alarmda ilk seçenek olmalıdır",
            "Hiçbir koşulda düşünülmemelidir",
            "Sadece müdür isterse kullanılmalıdır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Gerektiğinde ve orantılı biçimde, son çare mantığıyla düşünülmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Gerektiğinde ve orantılı biçimde, son çare mantığıyla düşünülmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Kamera kaydının varlığı görevliye ne sağlar?",
          "options": [
            "Kayıt varsa müdahale gerekmez",
            "Olayın belgelenmesi ve sonradan değerlendirme imkânı güçlenir",
            "Kayıt silinmelidir",
            "Sadece gece işe yarar"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Olayın belgelenmesi ve sonradan değerlendirme imkânı güçlenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Olayın belgelenmesi ve sonradan değerlendirme imkânı güçlenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Müşteriler 'bırakın gitsin' diye baskı yaparsa ne yapılmalıdır?",
          "options": [
            "Kalabalığın isteğine uyulmalıdır",
            "Kalabalıkla tartışılmalıdır",
            "Prosedür ve güvenlik ihtiyacı korunarak sakin ilerlenmelidir",
            "Hemen olay yerinden çıkılmalıdır"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedür ve güvenlik ihtiyacı korunarak sakin ilerlenmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedür ve güvenlik ihtiyacı korunarak sakin ilerlenmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Şüpheli çanta/ürün kontrolü gerektiğinde doğru çerçeve nedir?",
          "options": [
            "Her çanta rastgele açılabilir",
            "Kontrol hiç yapılmaz",
            "Kontrolü müşterinin yakını yapar",
            "Yetki ve kurum prosedürü çerçevesinde, keyfî zorbalık olmadan ilerlenir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Olay büyüyüp kontrol zorlaşırsa en doğru adım nedir?",
          "options": [
            "Destek istemek ve alanı daha güvenli yönetmeye çalışmak",
            "Tek başına ısrar etmek",
            "Canlı yayın açmak",
            "Tüm mağazayı kapatıp çıkmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek istemek ve alanı daha güvenli yönetmeye çalışmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Destek istemek ve alanı daha güvenli yönetmeye çalışmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Müdahale dilinde hangisi daha doğrudur?",
          "options": [
            "Hakaret ve aşağılama",
            "Kısa, net ve sakin anlatım",
            "Alaycı üslup",
            "Sessizce iterek ilerleme"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Kısa, net ve sakin anlatım. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kısa, net ve sakin anlatım. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Mağaza polisi/ilgili birimi çağırma konusunda güvenlik ne yapmalıdır?",
          "options": [
            "Her durumda engellemelidir",
            "Çağrıyı geciktirmelidir",
            "Kurum prosedürüne göre doğru yönlendirmeyi sağlamalıdır",
            "Sadece müdür isterse izin vermelidir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kurum prosedürüne göre doğru yönlendirmeyi sağlamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurum prosedürüne göre doğru yönlendirmeyi sağlamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Yanlış suçlama ortaya çıkarsa ne yapılmalıdır?",
          "options": [
            "Olay unutulmalıdır",
            "Kayıtlar silinmelidir",
            "Müşteriye baskı yapılmalıdır",
            "Durum kayıt altına alınmalı ve süreç şeffaf şekilde raporlanmalıdır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Durum kayıt altına alınmalı ve süreç şeffaf şekilde raporlanmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Durum kayıt altına alınmalı ve süreç şeffaf şekilde raporlanmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Hırsızlık şüphesi olayında asıl öncelik hangisidir?",
          "options": [
            "İnsanların güvenliği ve kontrollü süreç ürün kaybından önce gelir",
            "Ürünün değeri her şeyden önce gelir",
            "Sadece video kaydı yeterlidir",
            "Ceza kesmek önceliklidir"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: İnsanların güvenliği ve kontrollü süreç ürün kaybından önce gelir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: İnsanların güvenliği ve kontrollü süreç ürün kaybından önce gelir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "hirsizlik"
        },
        {
          "stem": "Bu senaryoda en sık görülen kritik hata hangisidir?",
          "options": [
            "Gözlem yapmak",
            "Acele edip kişiyi netleştirmeden hedeflemek",
            "Destek istemek",
            "Rapor tutmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Acele edip kişiyi netleştirmeden hedeflemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Acele edip kişiyi netleştirmeden hedeflemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
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
          "stem": "Kayıp çocuk bildiriminde ilk toplanması gereken en kritik bilgiler nelerdir?",
          "options": [
            "Sadece çocuğun sevdiği oyuncak",
            "Ailenin gelir durumu",
            "Fiziksel tanım, kıyafet ve en son görüldüğü yer/zaman",
            "Yalnızca çocuğun okul numarası"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Aile panik hâldeyse güvenlik nasıl konumlanmalıdır?",
          "options": [
            "Aileyi farklı yönlere dağıtmalıdır",
            "Aileyi dışarı göndermelidir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Aileyi güvenli bir noktada tutup koordinasyonu oradan yürütmelidir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Aileyi güvenli bir noktada tutup koordinasyonu oradan yürütmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Aileyi güvenli bir noktada tutup koordinasyonu oradan yürütmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Tek başına tüm AVM'yi rastgele koşarak aramak neden zayıf bir yöntemdir?",
          "options": [
            "Çünkü koordinasyonsuz arama hem yorucu hem de kaçırılan noktalara yol açar",
            "Çünkü yasaktır",
            "Çünkü çocuk her zaman aynı yerde bulunur",
            "Çünkü kamera yeterlidir ve arama gerekmez"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Çünkü koordinasyonsuz arama hem yorucu hem de kaçırılan noktalara yol açar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Çünkü koordinasyonsuz arama hem yorucu hem de kaçırılan noktalara yol açar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Duyuru yapılacaksa nasıl yaklaşılmalıdır?",
          "options": [
            "Rastgele ve abartılı şekilde",
            "Kurum prosedürüne uygun, panik yaratmayan net bilgilendirme ile",
            "Hiçbir duyuru yapılmamalıdır",
            "Şaka yollu duyuru yapılmalıdır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kurum prosedürüne uygun, panik yaratmayan net bilgilendirme ile. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurum prosedürüne uygun, panik yaratmayan net bilgilendirme ile. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Çocuk bulunduğunda hemen ilk isteyen kişiye teslim etmek doğru mudur?",
          "options": [
            "Evet, kim isterse teslim edilir",
            "Sadece yaşlılara teslim edilir",
            "Hayır; kimlik/eşleştirme ve güvenli teslim süreci gerekir",
            "Çocuk tek başına bırakılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Kalabalık ortamda bulunan çocuk için ne önceliklidir?",
          "options": [
            "Hemen ortalığa çıkarıp herkese göstermek",
            "Çocuğu otoparka götürmek",
            "Çocuğu depoya kilitlemek",
            "Çocuğu güvenli ve kontrollü bir noktada tutmak"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Telsiz trafiğinde kayıp çocuk olayında ne yapılmalıdır?",
          "options": [
            "Gerekli tanım ve konum bilgisi net aktarılmalıdır",
            "Telsiz kapatılmalıdır",
            "Uzun sohbet edilmelidir",
            "Sadece emoji ile haber verilmelidir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "'Ben ailesiyim' diyen kişiye karşı doğru tutum nedir?",
          "options": [
            "Hemen çocuğu teslim etmek",
            "İddiayı doğrulamadan teslim etmemek",
            "Kişiyle tartışmayı uzatmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: İddiayı doğrulamadan teslim etmemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: İddiayı doğrulamadan teslim etmemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Olay kapanınca kayıt tutmak gerekli midir?",
          "options": [
            "Hayır, çocuk bulunduysa gerekmez",
            "Sadece yaralanma olursa tutulur",
            "Evet; süreç ve sonuç anlaşılır şekilde yazılmalıdır",
            "Kayıt silinmelidir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet; süreç ve sonuç anlaşılır şekilde yazılmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet; süreç ve sonuç anlaşılır şekilde yazılmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Panikleyen ebeveyne karşı üslup nasıl olmalıdır?",
          "options": [
            "Suçlayıcı ve sert",
            "Alaycı",
            "Tamamen sessiz",
            "Sakin, net ve yönlendirici"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sakin, net ve yönlendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin, net ve yönlendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Güvenli bekleme noktası seçerken neye dikkat edilir?",
          "options": [
            "Kontrol edilebilir, görünür ve güvenli bir nokta",
            "Rastgele en kalabalık köşe",
            "Kapalı depo",
            "Otopark en alt kat"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Kontrol edilebilir, görünür ve güvenli bir nokta. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kontrol edilebilir, görünür ve güvenli bir nokta. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Diğer güvenlik/ekip arkadaşlarıyla ilişki nasıl olmalıdır?",
          "options": [
            "Herkes kendi başına aramalıdır",
            "Görev bölüşümü ve bilgi paylaşımı yapılmalıdır",
            "Kimseye haber verilmemelidir",
            "Sadece müdür arama yapmalıdır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Görev bölüşümü ve bilgi paylaşımı yapılmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Görev bölüşümü ve bilgi paylaşımı yapılmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Çocuğun görselinin gelişigüzel paylaşımı konusunda ne söylenebilir?",
          "options": [
            "Her zaman serbesttir",
            "Zorunludur",
            "Kurum kuralı ve mahremiyet dikkate alınarak dikkatli olunmalıdır",
            "Sadece komşulara gösterilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kurum kuralı ve mahremiyet dikkate alınarak dikkatli olunmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurum kuralı ve mahremiyet dikkate alınarak dikkatli olunmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Bu olayda en doğru öncelik hangisidir?",
          "options": [
            "Hızlı ama dağınık koşu",
            "Önce video kaydı",
            "Önce ceza kesmek",
            "Doğru bilgi, güvenli alan ve koordinasyon"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Doğru bilgi, güvenli alan ve koordinasyon. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Doğru bilgi, güvenli alan ve koordinasyon. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        },
        {
          "stem": "Kayıp çocuk senaryosunun özeti hangisidir?",
          "options": [
            "Bilgi topla, güvenli noktayı koru, ekiplerle koordine ol",
            "Tek başına her yeri rastgele ara",
            "Aileyi yalnız bırak",
            "Anonsu geciktirip önce kendi başına tüm katları aramak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "kayip_cocuk"
        }
      ]
    },
    "asansor": {
      "title": "Asansör arızası / mahsur kalanlar",
      "questions": [
        {
          "stem": "Asansörde mahsur kalan yolcular olduğunu öğrenince ilk iş ne olmalıdır?",
          "options": [
            "Kapıyı zorlayarak açmaya çalışmak",
            "Durumu netleştirip ilgili teknik/yetkili süreci başlatmak ve sakin iletişim kurmak",
            "Binanın elektriğini kesmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Durumu netleştirip ilgili teknik/yetkili süreci başlatmak ve sakin iletişim kurmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Durumu netleştirip ilgili teknik/yetkili süreci başlatmak ve sakin iletişim kurmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kabinde panik yükseliyorsa güvenlik ne yapmalıdır?",
          "options": [
            "Daha yüksek sesle bağırmak",
            "İletişimi tamamen kesmek",
            "Kısa, sakin ve anlaşılır şekilde bilgilendirmek",
            "Şaka yaparak sakinleştirmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Kısa, sakin ve anlaşılır şekilde bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kısa, sakin ve anlaşılır şekilde bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Teknik ekip çağrısı hakkında doğru olan nedir?",
          "options": [
            "Teknik ekip beklemeden kapı her zaman zorlanır",
            "Teknik ekip hiç çağrılmaz",
            "Sadece müşteri çağırır",
            "Prosedüre uygun şekilde yetkili destek devreye alınır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Prosedüre uygun şekilde yetkili destek devreye alınır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre uygun şekilde yetkili destek devreye alınır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Asansör kapısını bilmeden zorlamak neden sakıncalıdır?",
          "options": [
            "Çünkü mekanik risk ve yaralanma ihtimali artabilir",
            "Çünkü boya bozulur",
            "Çünkü yasalar sadece bunu ister",
            "Çünkü kamera kapanır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Çünkü mekanik risk ve yaralanma ihtimali artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Çünkü mekanik risk ve yaralanma ihtimali artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kat önünde izdiham oluşursa ne yapılmalıdır?",
          "options": [
            "İnsanları iterek uzaklaştırmak",
            "Güvenli mesafede tutup gereksiz yığılmayı azaltmak",
            "Herkesi kabine doldurmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli mesafede tutup gereksiz yığılmayı azaltmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli mesafede tutup gereksiz yığılmayı azaltmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "İçeride nefes darlığı veya ciddi sağlık şikâyeti bildirilirse öncelik nasıl değişir?",
          "options": [
            "Hiç değişmez",
            "Sadece teknik ekip beklenir",
            "Acil sağlık desteği ihtiyacı yükselir ve buna göre hızlanır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "both",
          "explainCorrect": "Doğru: Acil sağlık desteği ihtiyacı yükselir ve buna göre hızlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Acil sağlık desteği ihtiyacı yükselir ve buna göre hızlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Olay sonrası dokümantasyon neden gerekir?",
          "options": [
            "Gereksizdir",
            "Sadece sigorta için değil, hiç tutulmaz",
            "Kayıt silinmelidir",
            "Süreç ve alınan önlemler sonradan incelenebilsin diye"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Süreç ve alınan önlemler sonradan incelenebilsin diye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Süreç ve alınan önlemler sonradan incelenebilsin diye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Mahsur kalanlara yanlış veya abartılı bilgi vermek neye yol açabilir?",
          "options": [
            "Panik ve güvensizliğin artmasına",
            "Daha hızlı kurtarmaya",
            "Teknik arızanın kendiliğinden düzelmesine",
            "Hiçbir şeye"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Panik ve güvensizliğin artmasına. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Panik ve güvensizliğin artmasına. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Diğer asansör trafiği nasıl yönetilmelidir?",
          "options": [
            "Rastgele tüm asansörler kapatılmalıdır",
            "Güvenli yönlendirme ile akış kontrol edilmelidir",
            "Herkes aynı arızalı asansöre yönlendirilmelidir",
            "Yönlendirme yapılmamalıdır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli yönlendirme ile akış kontrol edilmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli yönlendirme ile akış kontrol edilmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kabinde çocuk veya yaşlı varsa yaklaşım nasıl olmalıdır?",
          "options": [
            "Hiç fark etmez",
            "Önce onlar dışarı atılmalıdır",
            "Daha dikkatli iletişim ve öncelikli izleme gerekir",
            "Sadece yetişkinlerle konuşulur"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Yönetici 'hemen açın' dediğinde doğru yanıt çerçevesi nedir?",
          "options": [
            "Ne pahasına olursa olsun zorla açmak",
            "Yöneticile tartışmayı müşteri önünde büyütmek",
            "Olay yerini terk etmek",
            "Güvenli ve yetkili yönteme bağlı kalmak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli ve yetkili yönteme bağlı kalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli ve yetkili yönteme bağlı kalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Telsiz kullanımında neye dikkat edilir?",
          "options": [
            "Konum ve durumun net aktarımı",
            "Gereksiz sohbet",
            "Telsizi kapatmak",
            "Müzik açmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Konum ve durumun net aktarımı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Konum ve durumun net aktarımı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kurtarma tamamlandıktan sonra ne yapılmalıdır?",
          "options": [
            "Hiç rapor yazmadan geçmek",
            "Olayı anlaşılır biçimde kayıt altına almak",
            "Kayıtları silmek",
            "Sadece şaka konusu yapmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Olayı anlaşılır biçimde kayıt altına almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Olayı anlaşılır biçimde kayıt altına almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "Bu senaryoda öncelik sırası hangisidir?",
          "options": [
            "Hız için risk almak",
            "Video kaydı",
            "Güvenli kurtarma ve sakin yönetim",
            "Ceza kesmek"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli kurtarma ve sakin yönetim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli kurtarma ve sakin yönetim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        },
        {
          "stem": "En doğru genel yaklaşım hangisidir?",
          "options": [
            "Kapıyı zorlamak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tek başına her şeyi çözmeye çalışmak",
            "Bildirmek, sakinleştirmek ve yetkili teknik süreci işletmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Bildirmek, sakinleştirmek ve yetkili teknik süreci işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Yetki dışına çıkmak veya destek almamak süreci zayıflatır.",
            "Doğru: Bildirmek, sakinleştirmek ve yetkili teknik süreci işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "asansor"
        }
      ]
    },
    "otopark_tartisma": {
      "title": "Otoparkta tartışma / araç hasarı",
      "questions": [
        {
          "stem": "İki sürücü otoparkta yüksek sesle tartışıyorsa ilk yaklaşım nasıl olmalıdır?",
          "options": [
            "Güvenli mesafe ile sakin ve net müdahale etmek",
            "Hemen bir taraftan yana konuşmak",
            "Hemen fiziksel müdahale edip tarafları ayırmaya çalışmak, destek beklemeden",
            "Kalabalığı daha da toplamak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenli mesafe ile sakin ve net müdahale etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli mesafe ile sakin ve net müdahale etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Tartışma kavgaya dönerse ne yapılmalıdır?",
          "options": [
            "Tek başına araya dalıp ayırmak",
            "Destek isteyerek kişileri güvenli biçimde ayrıştırmaya çalışmak",
            "Telefonla sadece video çekmek",
            "Tartışmaya katılmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Destek isteyerek kişileri güvenli biçimde ayrıştırmaya çalışmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek isteyerek kişileri güvenli biçimde ayrıştırmaya çalışmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Hasar iddiası olduğunda güvenlik açısından anlamlı olan nedir?",
          "options": [
            "Hiç kayıt tutmamak",
            "Hemen ceza kesmek",
            "Olayı ve tarafların beyanını anlaşılır şekilde not etmek",
            "Araçları zorla çekmek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Olayı ve tarafların beyanını anlaşılır şekilde not etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Olayı ve tarafların beyanını anlaşılır şekilde not etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Etraftaki izleyici kalabalık büyürse ne yapılmalıdır?",
          "options": [
            "Kalabalığı kışkırtmak",
            "Herkesi tartışmaya davet etmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Gereksiz yığılmayı azaltacak şekilde yönlendirmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Gereksiz yığılmayı azaltacak şekilde yönlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gereksiz yığılmayı azaltacak şekilde yönlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Silah veya ciddi şiddet belirtisi varsa öncelik nedir?",
          "options": [
            "Mesafeyi koruyup acil destek sürecini işletmek",
            "Daha da yaklaşmak",
            "Olayı şaka saymak",
            "Hemen yalnız müdahale"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
          "explainWrong": [
            "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Taraf tutmak neden yanlıştır?",
          "options": [
            "Çünkü olay hep bir tarafın suçudur",
            "Çünkü tarafsızlık bozulur ve gerilim artabilir",
            "Çünkü yasa taraf tutmayı ister",
            "Çünkü kamera bozulur"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Çünkü tarafsızlık bozulur ve gerilim artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Çünkü tarafsızlık bozulur ve gerilim artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Kamera kaydı bu olayda ne işe yarar?",
          "options": [
            "Hiçbir işe yaramaz",
            "Kayıt silinmelidir",
            "Sonradan değerlendirme ve rapor için destek sağlar",
            "Sadece gece işe yarar"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sonradan değerlendirme ve rapor için destek sağlar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sonradan değerlendirme ve rapor için destek sağlar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Tartışma trafiği tıkıyorsa güvenlik ne yapmalıdır?",
          "options": [
            "Hemen fiziksel müdahale edip tarafları ayırmaya çalışmak, destek beklemeden",
            "Tüm otoparkı sebepsiz kapatmak",
            "Hemen fiziksel müdahale edip tarafları ayırmaya çalışmak, destek beklemeden",
            "Güvenli şekilde araç/yaya akışını yönlendirmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli şekilde araç/yaya akışını yönlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli şekilde araç/yaya akışını yönlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Sürücülerden birinde alkol şüphesi varsa yaklaşım nasıl olmalıdır?",
          "options": [
            "Daha dikkatli, kontrollü ve destekli ilerlemek",
            "Daha yakın ve gevşek durmak",
            "Kişinin araç kullanmasına yardım etmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Daha dikkatli, kontrollü ve destekli ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Daha dikkatli, kontrollü ve destekli ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "İletişim dili nasıl olmalıdır?",
          "options": [
            "Hakaret içeren",
            "Net, sakin ve anlaşılır",
            "Alaycı",
            "Tehditkâr"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Net, sakin ve anlaşılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net, sakin ve anlaşılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Destek istemek zayıflık mıdır?",
          "options": [
            "Evet, yalnız çözülmelidir",
            "Sadece gece istenir",
            "Hayır; kontrolü kaybetmemek için doğru adımdır",
            "Yalnızca müdür isterse istenir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır; kontrolü kaybetmemek için doğru adımdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır; kontrolü kaybetmemek için doğru adımdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Olay sakinleşince ne yapılmalıdır?",
          "options": [
            "Unutup geçmek",
            "Kayıtları silmek",
            "Taraflardan birini cezalandırmak için uydurma yazmak",
            "Gerekli raporu net şekilde tamamlamak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Gerekli raporu net şekilde tamamlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gerekli raporu net şekilde tamamlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Bu senaryoda asıl öncelik nedir?",
          "options": [
            "İnsanların güvenliği ve olayın kontrolü",
            "Araç boyası",
            "Video içeriği",
            "Ceza tutarı"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: İnsanların güvenliği ve olayın kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: İnsanların güvenliği ve olayın kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "En sık kritik hata hangisidir?",
          "options": [
            "Mesafeyi korumak",
            "Aceleyle fiziksel müdahaleye girmek",
            "Destek istemek",
            "Kayıt tutmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Aceleyle fiziksel müdahaleye girmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Aceleyle fiziksel müdahaleye girmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        },
        {
          "stem": "Doğru genel yaklaşım hangisidir?",
          "options": [
            "Taraf seçip tartışmayı büyütmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Güvenli mesafe, sakin dil, destek ve kayıt",
            "Kalabalığı kışkırtmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli mesafe, sakin dil, destek ve kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli mesafe, sakin dil, destek ve kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "AVM",
          "scenarioId": "otopark_tartisma"
        }
      ]
    }
  },
  "Hastane": {
    "yakin_saldiri": {
      "title": "Hasta yakını saldırması",
      "questions": [
        {
          "stem": "Acil serviste bir hasta yakını personele yükseliyor. Güvenlik için en doğru öncelik nedir?",
          "options": [
            "Tartışmayı kazanmak",
            "Önce video kaydı almak",
            "Hemen herkese ceza kesmek",
            "Personelin ve hastaların güvenliğini korumak"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Sözlü agresyon aşamasında ilk tutum hangisi olmalıdır?",
          "options": [
            "Güvenli mesafe koyup sakin ve net dil kullanmak",
            "Aynı şekilde hakaretle karşılık vermek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kapıyı kilitleyip alanı terk etmek"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli mesafe koyup sakin ve net dil kullanmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli mesafe koyup sakin ve net dil kullanmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Fiziksel müdahale riski belirginleştiğinde ne yapılmalıdır?",
          "options": [
            "Tek başına kapışmaya girmek",
            "Destek çağırarak kontrollü şekilde ilerlemek",
            "Sadece telefonla çekim yapmak",
            "Personeli yalnız bırakmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Destek çağırarak kontrollü şekilde ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek çağırarak kontrollü şekilde ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Diğer yakınlar olaya dahil olmaya başlarsa doğru yaklaşım nedir?",
          "options": [
            "Tartışmayı büyütmek",
            "Herkesi aynı anda zorla dışarı atmak",
            "Kişileri ayrıştırıp alanı sakinleştirmeye çalışmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Bu tür olayda tutanak/rapor neden önemlidir?",
          "options": [
            "Hiç önemli değildir",
            "Sadece doktor isterse yazılır",
            "Rapor silinmelidir",
            "Yaşananlar, alınan önlemler ve tanık süreci sonradan net görülsün diye"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Yaşananlar, alınan önlemler ve tanık süreci sonradan net görülsün diye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yaşananlar, alınan önlemler ve tanık süreci sonradan net görülsün diye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Hekim 'şu kişiyi hemen çıkarın' dediğinde güvenlik nasıl davranmalıdır?",
          "options": [
            "Güvenli ve orantılı yöntemle, destekle süreci yürütmek",
            "Kontrolsüz şiddetle müdahale etmek",
            "Hekime müşteri önünde bağırarak karşı çıkmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli ve orantılı yöntemle, destekle süreci yürütmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli ve orantılı yöntemle, destekle süreci yürütmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Kamera açısı olayın bir kısmını görmüyorsa ne değişir?",
          "options": [
            "Müdahale hiç yapılmaz",
            "Daha dikkatli gözlem ve destek ihtiyacı artar",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tek başına daha sert müdahale edilir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Daha dikkatli gözlem ve destek ihtiyacı artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Daha dikkatli gözlem ve destek ihtiyacı artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Fiziksel güç bu senaryoda nasıl ele alınmalıdır?",
          "options": [
            "İlk ve tek çözüm olarak",
            "Hiçbir şekilde düşünülmeden",
            "Son çare ve orantılı olma ilkesiyle",
            "Sadece yönetici izniyle her zaman"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Son çare ve orantılı olma ilkesiyle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Son çare ve orantılı olma ilkesiyle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Hasta güvenliği bu olayda neden ayrıca düşünülmelidir?",
          "options": [
            "Hasta olaydan etkilenmez",
            "Sadece personel önemlidir",
            "Sadece yakınlar önemlidir",
            "Gerilim ve alan kapanması tedavi sürecini de riske atabilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Telsiz bildiriminde neye dikkat edilmelidir?",
          "options": [
            "Konum, risk düzeyi ve ihtiyaç duyulan desteğin net aktarımı",
            "Uzun sohbet",
            "Telsizi kapalı tutmak",
            "Olay bitince anlatmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Konum, risk düzeyi ve ihtiyaç duyulan desteğin net aktarımı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Konum, risk düzeyi ve ihtiyaç duyulan desteğin net aktarımı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Olay kontrol altına alındıktan sonra ne yapılmalıdır?",
          "options": [
            "Hiçbir kayıt tutmadan dağılmak",
            "Raporu tamamlayıp gerekiyorsa ilgili birimleri bilgilendirmek",
            "Kayıtları gizlemek",
            "Sadece sözlü anlatımla yetinmek"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Raporu tamamlayıp gerekiyorsa ilgili birimleri bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporu tamamlayıp gerekiyorsa ilgili birimleri bilgilendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Taraf tutmak neden yanlışır?",
          "options": [
            "Çünkü her zaman bir taraf haklıdır",
            "Çünkü yasa taraf tutmayı zorunlu kılar",
            "Çünkü güvenlik işlevi tarafsız alan kontrolüne dayanır",
            "Çünkü kamera bozulur"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Çünkü güvenlik işlevi tarafsız alan kontrolüne dayanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Çünkü güvenlik işlevi tarafsız alan kontrolüne dayanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Alkol veya madde etkisi şüphesi varsa yaklaşım nasıl olmalıdır?",
          "options": [
            "Daha yakın mesafede durmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kişiyle şakalaşmak",
            "Risk artabileceği için daha kontrollü ve destekli ilerlemek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Risk artabileceği için daha kontrollü ve destekli ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Risk artabileceği için daha kontrollü ve destekli ilerlemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "Bu senaryonun doğru özeti hangisidir?",
          "options": [
            "Mesafe koy, destek al, sakin kal, kayıt tut",
            "Tek başına fiziksel çözüm ara",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Hakaretle karşılık ver"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Mesafe koy, destek al, sakin kal, kayıt tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Mesafe koy, destek al, sakin kal, kayıt tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        },
        {
          "stem": "En kritik hata hangisidir?",
          "options": [
            "Destek istemek",
            "Yalnız ve acele fiziksel müdahaleye girmek",
            "Sakin dil kullanmak",
            "Rapor yazmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Yalnız ve acele fiziksel müdahaleye girmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yalnız ve acele fiziksel müdahaleye girmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yakin_saldiri"
        }
      ]
    },
    "yetkisiz_alan": {
      "title": "Yetkisiz alan ihlali (ilaç deposu)",
      "questions": [
        {
          "stem": "Üzerinde önlük olan biri ilaç deposuna girmek istiyor. Önlük tek başına yeterli midir?",
          "options": [
            "Evet, önlük her yere yetki verir",
            "Sadece gündüz yeterlidir",
            "Hayır; kimlik ve yetki doğrulanmalıdır",
            "Sadece gece yeterlidir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır; kimlik ve yetki doğrulanmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır; kimlik ve yetki doğrulanmalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Şüphe varsa en doğru adım nedir?",
          "options": [
            "Kişiyi içeri almak",
            "Kişiyle uzun tartışmaya girmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Prosedüre göre üst birimi/ilgili kontrolü devreye almak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedüre göre üst birimi/ilgili kontrolü devreye almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre üst birimi/ilgili kontrolü devreye almak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "'Acil ilaç lazım' iddiası kontrolü ortadan kaldırır mı?",
          "options": [
            "Hayır; acil durumlar da tanımlı süreçle yürür",
            "Evet, acil her iddia kontrolden muaftır",
            "Sadece doktor değilse muaf olur",
            "Sadece güvenlik karar verir ve kayıt tutmaz"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır; acil durumlar da tanımlı süreçle yürür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır; acil durumlar da tanımlı süreçle yürür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Yetkisiz giriş denemesinde kayıt tutmak gerekli midir?",
          "options": [
            "Hayır",
            "Evet, sonradan izlenebilirlik için önemlidir",
            "Sadece hırsızlık olursa",
            "Kayıt silinmelidir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Personel 'ben tanıyorum, geçir' derse ne yapılmalıdır?",
          "options": [
            "Tanıdık diye prosedürü bozmak",
            "Personelle tartışmayı büyütmek",
            "Prosedürün hâlâ geçerli olduğunu korumak",
            "Kapıyı açık bırakmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedürün hâlâ geçerli olduğunu korumak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedürün hâlâ geçerli olduğunu korumak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kişi zorla girmeye çalışırsa doğru tepki nedir?",
          "options": [
            "İzlemek",
            "Yol vermek",
            "Sadece video çekmek",
            "Geçişi durdurup destek istemek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Geçişi durdurup destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Geçişi durdurup destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Depo kapısı açık ve kontrolsüz bulunursa ne yapılmalıdır?",
          "options": [
            "Kapıyı güvenceye alıp durumu bildirmek",
            "Öyle bırakmak",
            "İçeri girip ilaç saymak",
            "Olayı gizlemek"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kapıyı güvenceye alıp durumu bildirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kapıyı güvenceye alıp durumu bildirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kimlik gösteremeyen kişiye yaklaşım nasıl olmalıdır?",
          "options": [
            "İçeri almak",
            "Yetki netleşmeden geçiş vermemek",
            "Uzun süre kapıda tartışmak",
            "Rüşvet teklifini dinlemek"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Telsiz ile bildirim bu olayda neden işe yarar?",
          "options": [
            "Hiç işe yaramaz",
            "Sadece sohbet içindir",
            "Destek ve üst bilgilendirme hızlı sağlanır",
            "Telsiz kapalı tutulmalıdır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Destek ve üst bilgilendirme hızlı sağlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek ve üst bilgilendirme hızlı sağlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Bu senaryonun temel ilkesi nedir?",
          "options": [
            "Görünüş yetki demektir",
            "Herkes serbestçe girebilir",
            "Kimse hiçbir şekilde giremez",
            "Yetki doğrulanmadan kısıtlı alan açılmaz"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Yetki doğrulanmadan kısıtlı alan açılmaz. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yetki doğrulanmadan kısıtlı alan açılmaz. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Olay kapanınca ne yapılmalıdır?",
          "options": [
            "Raporlamak",
            "Unutmak",
            "Kayıt silmek",
            "Sadece sözlü anlatmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Raporlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Hasta yakını 'ben ilaç alacağım' diyorsa doğru çerçeve nedir?",
          "options": [
            "Depoyu açmak",
            "İlacın yetkili sağlık süreciyle verildiğini hatırlatmak",
            "Tartışmayı uzatmak",
            "İlacı kendin vermek"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kamera kontrolü bu olayda ne sağlar?",
          "options": [
            "Hiçbir şey",
            "Kayıt silinmelidir",
            "Giriş-çıkış ve zaman çizelgesini destekler",
            "Sadece gece gerekir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Giriş-çıkış ve zaman çizelgesini destekler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Giriş-çıkış ve zaman çizelgesini destekler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Baskı altında prosedürü bozmanın sonucu ne olabilir?",
          "options": [
            "Hiçbir sonuç doğmaz",
            "Ödül alınır",
            "Otomatik terfi gelir",
            "Güvenlik açığı ve sorumluluk sorunu oluşabilir"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenlik açığı ve sorumluluk sorunu oluşabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenlik açığı ve sorumluluk sorunu oluşabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "En kritik hata hangisidir?",
          "options": [
            "Önlük veya karta bakıp yetkiyi varsaymak",
            "Liste kontrolü yapmak",
            "Bildirim yapmak",
            "Kayıt tutmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Önlük veya karta bakıp yetkiyi varsaymak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Önlük veya karta bakıp yetkiyi varsaymak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "yetkisiz_alan"
        }
      ]
    },
    "ambulans_yol": {
      "title": "Acil girişte ambulans / kalabalık tıkanması",
      "questions": [
        {
          "stem": "Ambulans girişi kalabalık yüzünden tıkanmışsa öncelik nedir?",
          "options": [
            "İzleyicilerin rahatı",
            "Hasta ulaşım yolunu açmak",
            "Otopark ücretini toplamak",
            "Video çekmek"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Yolu kapatan kişilere karşı doğru tutum nedir?",
          "options": [
            "Sertçe itmek",
            "Küfür ederek uzaklaştırmak",
            "Net ve sakin yönlendirme ile yolu açmak",
            "Daha fazla kişiyi çağırmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Net ve sakin yönlendirme ile yolu açmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net ve sakin yönlendirme ile yolu açmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Tek başına yetişilemiyorsa ne yapılmalıdır?",
          "options": [
            "Pes etmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kapıyı kilitleyip çıkmak",
            "Destek istemek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Araç sahipleri direnirse nasıl ilerlenir?",
          "options": [
            "Kuralı net anlatıp güvenli yönlendirme yapmak",
            "Uzun tartışmaya girmek",
            "Cam kırmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kuralı net anlatıp güvenli yönlendirme yapmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kuralı net anlatıp güvenli yönlendirme yapmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Gerekirse olay kaydı tutulmalı mıdır?",
          "options": [
            "Hayır asla",
            "Evet, özellikle engelleme ve risk varsa",
            "Sadece yaralanma olursa",
            "Kayıt silinmelidir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet, özellikle engelleme ve risk varsa. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet, özellikle engelleme ve risk varsa. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Personel de yolu kapatıyorsa ne yapılır?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Hemen ceza kesilir",
            "Uyarılıp düzeltilir",
            "Tartışma büyütülür"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Uyarılıp düzeltilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uyarılıp düzeltilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Panik yükselirse güvenlik ne yapmalıdır?",
          "options": [
            "Panik dilini büyütmek",
            "Alanı terk etmek",
            "Sadece film çekmek",
            "Sakin kontrol ve net yönlendirme"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sakin kontrol ve net yönlendirme. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin kontrol ve net yönlendirme. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Telsiz mesajı nasıl olmalıdır?",
          "options": [
            "Konum ve tıkanıklık net söylenmeli",
            "Kapalı tutulmalı",
            "Uzun sohbet edilmeli",
            "Müzik açılmalı"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Konum ve tıkanıklık net söylenmeli. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Konum ve tıkanıklık net söylenmeli. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Yanlış yönlendirme neden tehlikelidir?",
          "options": [
            "Zararsızdır",
            "Ambulans gecikmesi hayati risk yaratabilir",
            "Sadece trafik cezası doğurur",
            "Ödül getirir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Ambulans gecikmesi hayati risk yaratabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Ambulans gecikmesi hayati risk yaratabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Bu olayda meraklı izleyiciler hangi sıradadır?",
          "options": [
            "Hasta yolundan önce gelir",
            "Hiç dikkate alınmaz",
            "Hasta ulaşımından sonra gelir",
            "Önce onlara yer açılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hasta ulaşımından sonra gelir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hasta ulaşımından sonra gelir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Olay bitince ne yapılmalıdır?",
          "options": [
            "Unutmak",
            "Kayıt silmek",
            "Gizlemek",
            "Gerekli kısa raporu tamamlamak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Gerekli kısa raporu tamamlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gerekli kısa raporu tamamlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Fiziksel itme ne zaman düşünülür?",
          "options": [
            "Başka yol kalmadığında ve orantılı biçimde",
            "İlk seçenek olarak",
            "Her zaman",
            "Hiçbir zaman tartışılmaz"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Başka yol kalmadığında ve orantılı biçimde. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Başka yol kalmadığında ve orantılı biçimde. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Güvenli koridor oluşturmak neden önemlidir?",
          "options": [
            "Gereksizdir",
            "Acil geçişin kesintisiz sürmesini sağlar",
            "Sadece görüntü içindir",
            "Yasaklıdır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Acil geçişin kesintisiz sürmesini sağlar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Acil geçişin kesintisiz sürmesini sağlar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "Doğru özet hangisidir?",
          "options": [
            "İzle ve bekle",
            "Tartışmayı uzat",
            "Yolu aç, koordine et, sakin tut",
            "Alanı terk et"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Yolu aç, koordine et, sakin tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yolu aç, koordine et, sakin tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        },
        {
          "stem": "En kritik hata hangisidir?",
          "options": [
            "Yol açmak",
            "Destek istemek",
            "Net uyarı vermek",
            "İzleyiciyi hasta yolundan önde tutmak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: İzleyiciyi hasta yolundan önde tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: İzleyiciyi hasta yolundan önde tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "ambulans_yol"
        }
      ]
    },
    "kayip_hasta": {
      "title": "Hasta kayıp / demanslı birey",
      "questions": [
        {
          "stem": "Servisten çıkan demanslı hasta bildirimde ilk adım nedir?",
          "options": [
            "Tanım ve son görüldüğü yeri netleştirmek",
            "Panik ilan etmek",
            "Tüm kapıları rastgele kilitlemek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Koordinasyonsuz tek başına uzak arama neden zayıftır?",
          "options": [
            "Yasaktır",
            "Bilgi paylaşımı olmadan noktalar kaçabilir",
            "Her zaman yasaktır",
            "Kamera yeterlidir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Bilgi paylaşımı olmadan noktalar kaçabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bilgi paylaşımı olmadan noktalar kaçabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Hasta bulunduğunda doğru yaklaşım nedir?",
          "options": [
            "Zorla sürüklemek",
            "Bağırarak uyarmak",
            "Sakin dil ile güvenli eşlik etmek",
            "Olduğu yerde bırakmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Yanlış kişiye teslim riski nasıl azaltılır?",
          "options": [
            "Kim isterse teslim",
            "Sadece yaşlılara teslim",
            "Hastayı yalnız bırakma",
            "Kimlik ve yetkili süreçle eşleştirme"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kimlik ve yetkili süreçle eşleştirme. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik ve yetkili süreçle eşleştirme. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Bildirim kimlere yapılmalıdır?",
          "options": [
            "İlgili birim ve prosedürdeki kişilere",
            "Hiç kimseye",
            "Sadece komşuya",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: İlgili birim ve prosedürdeki kişilere. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: İlgili birim ve prosedürdeki kişilere. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Çıkış kapıları neden önemlidir?",
          "options": [
            "Önemsizdir",
            "Hasta dışarı çıkma riski artabilir",
            "Sadece depo önemlidir",
            "Sadece asansör önemlidir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hasta dışarı çıkma riski artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hasta dışarı çıkma riski artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Kayıt tutulmalı mıdır?",
          "options": [
            "Hayır",
            "Sadece bulunamazsa",
            "Evet",
            "Silinmelidir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Personel 'ben bakarım' derse ne yapılır?",
          "options": [
            "Tüm koordinasyon bırakılır",
            "Tartışma büyütülür",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Görev net paylaştırılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Görev net paylaştırılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Görev net paylaştırılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Hasta agresifleşirse ne yapılır?",
          "options": [
            "Destek alarak sakin yöntem",
            "Sert karşılık",
            "Terk etmek",
            "Film çekmek"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Aile panikleyince üslup nasıl olmalıdır?",
          "options": [
            "Suçlayıcı",
            "Sakin bilgilendirici",
            "Kapı dışarı",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sakin bilgilendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Sakin bilgilendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Asansör ve çıkış kontrolü mantıklı mıdır?",
          "options": [
            "Hayır",
            "Yasaktır",
            "Evet, risk azaltır",
            "Sadece sonra yapılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet, risk azaltır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet, risk azaltır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Telsiz dili nasıl olmalıdır?",
          "options": [
            "Aşağılayıcı",
            "Şakacı",
            "Kapalı",
            "Saygılı ve net"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Saygılı ve net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Saygılı ve net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Raporlanır",
            "Unutulur",
            "Silinir",
            "Gizlenir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Öncelik nedir?",
          "options": [
            "Utandırmak",
            "Güvenli biçimde bulmak ve teslim etmek",
            "Video",
            "Ceza"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli biçimde bulmak ve teslim etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli biçimde bulmak ve teslim etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        },
        {
          "stem": "Temel ilke hangisidir?",
          "options": [
            "Tek başına koşmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Bilgi, koordinasyon ve güvenli eşlik",
            "Zor kullanmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Bilgi, koordinasyon ve güvenli eşlik. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bilgi, koordinasyon ve güvenli eşlik. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "kayip_hasta"
        }
      ]
    },
    "gece_ziyaretci": {
      "title": "Gece vardiyasında agresif ziyaretçi",
      "questions": [
        {
          "stem": "Ziyaret saati dışında grup içeri alınmak istiyor. Temel yaklaşım nedir?",
          "options": [
            "Herkesi serbest bırakmak",
            "Kimseyi hiçbir şekilde dinlememek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kurumu kuralına göre hareket etmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kurumu kuralına göre hareket etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurumu kuralına göre hareket etmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "'Acil göreceğim' iddiası kontrolü kaldırır mı?",
          "options": [
            "Hayır; yetkili süreç gerekir",
            "Evet",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Sadece gece kaldırır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır; yetkili süreç gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır; yetkili süreç gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Kalabalık dayatınca ne yapılmalıdır?",
          "options": [
            "Yol vermek",
            "Destek alıp kuralı net uygulamak",
            "Kapıyı terk etmek",
            "Film çekmek"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek alıp kuralı net uygulamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek alıp kuralı net uygulamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Uzun tartışma neden risklidir?",
          "options": [
            "Her zaman yasaktır",
            "Zorunludur",
            "Gerilimi ve kontrol kaybını artırabilir",
            "Ödül getirir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Gerilimi ve kontrol kaybını artırabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gerilimi ve kontrol kaybını artırabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Kayıt gerekli midir?",
          "options": [
            "Hayır",
            "Sadece kavga olursa",
            "Silinmelidir",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Personel 'bırak girsin' derse ne olur?",
          "options": [
            "Yine doğrulama gerekir",
            "Prosedür bozulur",
            "Tartışma şarttır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Yine doğrulama gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Yine doğrulama gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Tehdit artarsa ne yapılmalıdır?",
          "options": [
            "Yalnız kalmak",
            "Destek ve güvenlik sürecini işletmek",
            "Küfür etmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek ve güvenlik sürecini işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek ve güvenlik sürecini işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Telsiz kullanılmalı mıdır?",
          "options": [
            "Hayır",
            "Sadece sohbet için",
            "Evet, durum bildirilmelidir",
            "Müzik için"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet, durum bildirilmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet, durum bildirilmelidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Hasta güvenliği nasıl etkilenir?",
          "options": [
            "Etkilenmez",
            "Sadece otoparkı etkiler",
            "Sadece kafeteryayı etkiler",
            "Gürültü ve izdiham tedavi alanını bozabilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "İstisna ne zaman düşünülür?",
          "options": [
            "Yetkili, tanımlı ve kayıtlı olduğunda",
            "Keyfi olarak",
            "Herkese",
            "Asla hiçbir tıbbi durumda"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Yetkili, tanımlı ve kayıtlı olduğunda. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Yetkili, tanımlı ve kayıtlı olduğunda. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Raporlanır",
            "Silinir",
            "Gizlenir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Sakin dil işe yarar mı?",
          "options": [
            "Hayır",
            "Zayıflıktır",
            "Evet, gerilimi düşürebilir",
            "Yasaktır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet, gerilimi düşürebilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet, gerilimi düşürebilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Kapıyı kilitleyip kaçmak çözüm müdür?",
          "options": [
            "Evet idealdir",
            "Zorunludur",
            "Ödüldür",
            "Genelde sorunu çözmez, riski kaydırır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Genelde sorunu çözmez, riski kaydırır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Genelde sorunu çözmez, riski kaydırır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Doğru özet hangisidir?",
          "options": [
            "Kuralı uygula, destek al, kayıt tut",
            "Herkesi geçir",
            "Tartışmayı uzat",
            "Terk et"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kuralı uygula, destek al, kayıt tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kuralı uygula, destek al, kayıt tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Net anlatmak",
            "Baskıyla prosedürü bozmak",
            "Destek istemek",
            "Kayıt tutmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Baskıyla prosedürü bozmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Baskıyla prosedürü bozmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Hastane",
          "scenarioId": "gece_ziyaretci"
        }
      ]
    }
  },
  "Fabrika": {
    "is_kazasi": {
      "title": "İş kazası (hat / sıkışma)",
      "questions": [
        {
          "stem": "Üretim hattında bir çalışan yaralandı. İlk öncelik nedir?",
          "options": [
            "Üretimi aynen sürdürmek",
            "Önce fotoğraf çekmek",
            "İkincil kazayı önleyip yardım yolunu açmak",
            "Tartışmaya girmek"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: İkincil kazayı önleyip yardım yolunu açmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: İkincil kazayı önleyip yardım yolunu açmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Makineyi bilmeden hareket ettirmek neden tehlikelidir?",
          "options": [
            "Sadece boya bozulur",
            "Yasalar bunu ister",
            "Kamera bozulur",
            "Yeni yaralanma ve daha büyük arıza riski doğabilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Yeni yaralanma ve daha büyük arıza riski doğabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yeni yaralanma ve daha büyük arıza riski doğabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Meraklı çalışanlar etrafı sararsa ne yapılmalıdır?",
          "options": [
            "Güvenli alanı koruyup gereksiz kişileri uzak tutmak",
            "Daha fazla kişi çağırmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Herkesi içeri almak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli alanı koruyup gereksiz kişileri uzak tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli alanı koruyup gereksiz kişileri uzak tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Vardiya amiri maliyet gerekçesiyle hattın durmamasını isterse ne önceliklidir?",
          "options": [
            "Maliyet",
            "Can güvenliği",
            "Hiçbiri",
            "Sadece tartışma"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Can güvenliği. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Can güvenliği. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "İlk yardım ekibine karşı tutum nasıl olmalıdır?",
          "options": [
            "Yollarını kapatmak",
            "Geciktirmek",
            "Geçişlerini açmak ve kolaylaştırmak",
            "Onların yerine her müdahaleyi üstlenmek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Geçişlerini açmak ve kolaylaştırmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Geçişlerini açmak ve kolaylaştırmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Kayıt neden tutulur?",
          "options": [
            "Gereksizdir",
            "Silinmek için",
            "Sadece sigorta memuru isterse",
            "Olayın anlaşılması ve sonraki inceleme için"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Olayın anlaşılması ve sonraki inceleme için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Olayın anlaşılması ve sonraki inceleme için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Olay alanı ve olası deliller nasıl yönetilir?",
          "options": [
            "Mümkün olduğunca korunur",
            "Bilinçli olarak bozulur",
            "Hemen yıkanır keyfi olarak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Mümkün olduğunca korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Mümkün olduğunca korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Telsiz bildirimi nasıl olmalıdır?",
          "options": [
            "Kapalı",
            "Acil durum net ve konumlu bildirilmeli",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Acil durum net ve konumlu bildirilmeli. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Acil durum net ve konumlu bildirilmeli. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Video çeken meraklılar için öncelik nedir?",
          "options": [
            "Onları teşvik etmek",
            "Telefonlara el koymak her durumda",
            "Alan güvenliğini öncelemek",
            "Önemsememek"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "both",
          "explainCorrect": "Doğru: Alan güvenliğini öncelemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Alan güvenliğini öncelemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Yaralıyı yanlış taşımak neye yol açabilir?",
          "options": [
            "Hiçbir şeye",
            "Hızlı iyileşmeye",
            "Ödüle",
            "Zararın artmasına"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Zararın artmasına. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Zararın artmasına. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Olay kontrol altına alınınca ne yapılır?",
          "options": [
            "Rapor süreci işletilir",
            "Unutulur",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Rapor süreci işletilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Rapor süreci işletilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Tek başına kaldırma ne zaman yanlıştır?",
          "options": [
            "Her zaman doğrudur",
            "Uygun teknik/destek yoksa yapılmamalıdır",
            "Zorunludur",
            "Yasak değildir diye hep yapılır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Uygun teknik/destek yoksa yapılmamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uygun teknik/destek yoksa yapılmamalıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Acil stop / durdurma zinciri hakkında doğru olan nedir?",
          "options": [
            "Önemsizdir",
            "Keyfidir",
            "Prosedüre uygun işletilir",
            "Yoktur"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Prosedüre uygun işletilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre uygun işletilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Doğru özet hangisidir?",
          "options": [
            "Üretim devam",
            "Video önce",
            "Tartışma",
            "Güvenli alan, yardım yolu, kayıt"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli alan, yardım yolu, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli alan, yardım yolu, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "İkincil kaza riskini yok saymak",
            "Alan kontrolü",
            "Bildirim",
            "Yol açmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: İkincil kaza riskini yok saymak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: İkincil kaza riskini yok saymak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "is_kazasi"
        }
      ]
    },
    "kimyasal": {
      "title": "Kimyasal sızıntı şüphesi",
      "questions": [
        {
          "stem": "Keskin koku ve alarm şüphesi varsa ilk doğru çerçeve nedir?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Doğrulamak ve prosedürü işletmek",
            "Pencereleri rastgele açıp içeri dalmak",
            "Tek başına müdahale"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Doğrulamak ve prosedürü işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Doğrulamak ve prosedürü işletmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Tahliye kararı nasıl verilmelidir?",
          "options": [
            "Keyfi bağırarak",
            "Asla tahliye olmaz",
            "Tanımlı prosedür ve yetkili süreçle",
            "Her kokuda aynı anda tüm şehir tahliye"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Tanımlı prosedür ve yetkili süreçle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Tanımlı prosedür ve yetkili süreçle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Uygun koruma olmadan yaklaşmak neden yanlıştır?",
          "options": [
            "Cesaret gösterir",
            "Zorunludur",
            "Ödül getirir",
            "Maruziyet riskini artırır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Maruziyet riskini artırır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Maruziyet riskini artırır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Bildirim kime yapılır?",
          "options": [
            "İlgili birimlere prosedüre göre",
            "Hiç kimseye",
            "Sadece arkadaşa",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: İlgili birimlere prosedüre göre. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: İlgili birimlere prosedüre göre. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Kalabalık alana üşüşürse ne yapılır?",
          "options": [
            "İçeri alınır",
            "Uzaklaştırılır",
            "Tartıştırılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Uzaklaştırılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uzaklaştırılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Amir 'abartıyorsun' derse güvenlik neyi korur?",
          "options": [
            "Prosedürü bozar",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Güvenlik yaklaşımını korur",
            "Hakaret eder"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenlik yaklaşımını korur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenlik yaklaşımını korur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır gizli",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Rüzgâr/akış yönü neden önemlidir?",
          "options": [
            "Maruziyet ve yönlendirmeyi etkiler",
            "Önemsizdir",
            "Yoktur",
            "Şakadır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Maruziyet ve yönlendirmeyi etkiler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Maruziyet ve yönlendirmeyi etkiler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Ateş/elektrik kaynağı yaklaşımı nasıl olmalıdır?",
          "options": [
            "Önemsiz",
            "Prosedüre göre kontrol edilir",
            "Tahmini bırakılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Prosedüre göre kontrol edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre kontrol edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Yanlış bilgilendirme neye yol açar?",
          "options": [
            "Zararsızdır",
            "Serbesttir",
            "Panik veya yanlış tahliyeye",
            "Gereklidir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Panik veya yanlış tahliyeye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Panik veya yanlış tahliyeye. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Telsiz mesajı nasıl olmalıdır?",
          "options": [
            "Kapalı",
            "Sohbet",
            "Müzik",
            "Net konum ve durum"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Net konum ve durum. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net konum ve durum. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Raporlanır",
            "Unutulur",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Yetkisiz kişisel müdahale doğru mudur?",
          "options": [
            "Evet idealdir",
            "Hayır, yetki ve prosedür gerekir",
            "Zorunludur",
            "Ödüldür"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Doğru özet hangisidir?",
          "options": [
            "İçeri dalmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Mesafe, bildirim, prosedür",
            "Tartışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Mesafe, bildirim, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Mesafe, bildirim, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Alan kontrolü",
            "Kayıt",
            "Kişisel kahramanlıkla yaklaşmak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kişisel kahramanlıkla yaklaşmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kişisel kahramanlıkla yaklaşmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "kimyasal"
        }
      ]
    },
    "sevkiyat": {
      "title": "Yetkisiz sevkiyat aracı",
      "questions": [
        {
          "stem": "Evrakı eksik kamyon geçiş isterse ne yapılır?",
          "options": [
            "Durdurulur",
            "Geçirilir",
            "Tartışılır",
            "Rüşvet konuşulur"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Durdurulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Durdurulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "'Yük acil' baskısı kontrolü kaldırır mı?",
          "options": [
            "Evet",
            "Hayır",
            "Bağırmak kaldırır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Şoför agresifleşirse ne yapılır?",
          "options": [
            "Kapışılır",
            "Geçirilir",
            "Mesafe korunup destek istenir",
            "Sadece film çekilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Mesafe korunup destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Mesafe korunup destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "'Tanıyorum' diyen personel yeterli midir?",
          "options": [
            "Hayır, evrak/yetki gerekir",
            "Evet",
            "Tartışma şart",
            "Geçiş verilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır, evrak/yetki gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır, evrak/yetki gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Plaka uyuşmazlığı ne anlama gelir?",
          "options": [
            "Önemsiz",
            "Kontrol gerektiren uyumsuzluk",
            "Serbest geçiş",
            "Ödül"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kontrol gerektiren uyumsuzluk. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kontrol gerektiren uyumsuzluk. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Telsiz gerekir mi?",
          "options": [
            "Hayır",
            "Sohbet için",
            "Evet",
            "Müzik için"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Kamera notu işe yarar mı?",
          "options": [
            "Hayır",
            "Silinmeli",
            "Satılmalı",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Kuyruk uzayınca ne yapılır?",
          "options": [
            "Güvenli tempolu kontrole devam edilir",
            "Kontrol atlanır",
            "Herkes reddedilir",
            "Tartışılır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli tempolu kontrole devam edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli tempolu kontrole devam edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Raporlanır",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Yetki listesi kullanılmalı mıdır?",
          "options": [
            "Gereksiz",
            "Yasak",
            "Evet",
            "Sonra"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Hız güvenlikten önce",
            "İkisi de yok",
            "Rastgele",
            "Güvenlik kontrolden ödün vermeden yürür"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenlik kontrolden ödün vermeden yürür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenlik kontrolden ödün vermeden yürür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Fiziksel engel ne zaman düşünülür?",
          "options": [
            "Gerektiğinde orantılı",
            "İlk yol",
            "Asla",
            "Hep"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Gerektiğinde orantılı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Gerektiğinde orantılı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Geçir",
            "Evrak, yetki, kayıt",
            "Kapış",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evrak, yetki, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evrak, yetki, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Evrak bakmak",
            "Bildirim",
            "Baskıyla kontrol atlamak",
            "Kayıt"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Baskıyla kontrol atlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Baskıyla kontrol atlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "sevkiyat"
        }
      ]
    },
    "yangin": {
      "title": "Yangın alarmı / duman",
      "questions": [
        {
          "stem": "Yangın alarmı çaldığında ilk doğru çerçeve nedir?",
          "options": [
            "Alarmı susturmak",
            "Önce yangını kendin söndürmeye çalışmak, tahliyeyi ertelemek",
            "Rastgele dışarı koşmak",
            "Durumu doğrulayıp prosedürü işletmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "'Arızadır' iddiası alarmı kapatmak için yeterli midir?",
          "options": [
            "Hayır, doğrulama gerekir",
            "Evet",
            "Unutulur",
            "Şaka yapılır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır, doğrulama gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır, doğrulama gerekir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Duman görülürse ne yapılır?",
          "options": [
            "Gizlenir",
            "Bildirilip yönlendirme yapılır",
            "Önce video çekilir",
            "İçeri dalınır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Tahliye nasıl yürütülür?",
          "options": [
            "Keyfi",
            "Asla",
            "Prosedüre göre",
            "Her alarmda aynı tek tip"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Prosedüre göre. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Asansör kullanımı hakkında genel güvenlik yaklaşımı nedir?",
          "options": [
            "Teşvik edilir",
            "Zorunludur",
            "Önemsizdir",
            "Prosedüre göre çoğu yangın senaryosunda kaçınılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedüre göre çoğu yangın senaryosunda kaçınılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre çoğu yangın senaryosunda kaçınılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Evet",
            "Hayır",
            "Silinir",
            "Saklanır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Telsiz nasıl kullanılır?",
          "options": [
            "Kapalı",
            "Net",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Panik kalabalıkta ne yapılır?",
          "options": [
            "Büyütülür",
            "Küfür edilir",
            "Sakin yönlendirilir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin yönlendirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin yönlendirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Yangın tüpü bilmeden rastgele kullanılmalı mıdır?",
          "options": [
            "Evet",
            "Herkes zorunlu kullanır",
            "Her zaman yasaktır",
            "Hayır, yetkinlik ve prosedür önemlidir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Önce can güvenliği ve alarm/bildirim süreci; alan tahliyesi ve uzman ekipler prosedüre göre yönetilir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Üretim baskısı can güvenliğinin önüne geçer mi?",
          "options": [
            "Hayır",
            "Evet",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tartışılır"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Raporlanır",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Yanlış bilgi neye yol açar?",
          "options": [
            "Zararsız",
            "Serbest",
            "Zararlı kararlara",
            "Gerekli"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Zararlı kararlara. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Zararlı kararlara. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Toplanma alanı neden önemlidir?",
          "options": [
            "Önemsiz",
            "Yok",
            "Rastgele",
            "Kontrollü sayım ve yönlendirme için"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kontrollü sayım ve yönlendirme için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kontrollü sayım ve yönlendirme için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Doğrula, bildir, yönlendir",
            "Sustur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tek kahraman"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Doğrula, bildir, yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Doğrula, bildir, yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Alarmı doğrulamadan kapatmak",
            "Yönlendirme",
            "Kayıt"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Alarmı doğrulamadan kapatmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Alarmı doğrulamadan kapatmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "yangin"
        }
      ]
    },
    "gece_hirsizlik": {
      "title": "Gece vardiyasında hırsızlık girişimi",
      "questions": [
        {
          "stem": "Depo yakınında şüpheli hareket görünce ilk doğru adım nedir?",
          "options": [
            "Tek başına dalmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Gözlemleyip destek istemek",
            "Uzaktan bağırmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Can güvenliği ve de-eskalasyon önceliklidir; yetkisiz güç kullanımı veya olayı görmezden gelmek riski büyütür.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Kamera kör noktadaysa ne yapılır?",
          "options": [
            "Önemsenmez",
            "Unutulur",
            "Şaka yapılır",
            "Daha dikkatli saha teyidi planlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Daha dikkatli saha teyidi planlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Daha dikkatli saha teyidi planlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Delil olabilecek alanı bozmak doğru mudur?",
          "options": [
            "Hayır",
            "Evet",
            "Zorunlu",
            "Ödül"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Bildirim yapılmalı mıdır?",
          "options": [
            "Hayır",
            "Evet",
            "Belki sonra",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Fiziksel yakalama ilk seçenek midir?",
          "options": [
            "Evet",
            "Zorunlu",
            "Hayır, riskli ve son çaredir",
            "Hiç düşünülmez"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır, riskli ve son çaredir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, riskli ve son çaredir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Telsiz disiplini neden önemli?",
          "options": [
            "Konum ve destek netleşir",
            "Gereksiz",
            "Sohbet için",
            "Kapalı kalmalı"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Konum ve destek netleşir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Konum ve destek netleşir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Işıkları rastgele yakıp söndürmek doğru mudur?",
          "options": [
            "Her zaman iyi",
            "Prosedüre göre karar verilir",
            "Zorunlu",
            "Yasak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Prosedüre göre karar verilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre karar verilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Şüpheli kaçarsa ne bilinmelidir?",
          "options": [
            "Hep koşulmalı",
            "Unutulmalı",
            "Uzun kovalamaca riskleri",
            "Silah şart"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Uzun kovalamaca riskleri. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uzun kovalamaca riskleri. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "İçeriden yardım şüphesi varsa ne yapılır?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Herkes suçlanır",
            "Şaka yapılır",
            "Not edilip bildirilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Not edilip bildirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Not edilip bildirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Raporlanır",
            "Unutulur",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Alan kilitleri kontrol edilmeli midir?",
          "options": [
            "Önemsiz",
            "Evet",
            "Kırılmalı",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Tek kahraman",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Gözlem, destek, kayıt",
            "Tartış"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Gözlem, destek, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gözlem, destek, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Destek",
            "Gözlem",
            "Bildirim",
            "Yalnız ve acele dalmak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Yalnız ve acele dalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yalnız ve acele dalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Güvenli prosedür",
            "Hızlı şiddet",
            "İhmal",
            "Gizleme"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenli prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Fabrika",
          "scenarioId": "gece_hirsizlik"
        }
      ]
    }
  },
  "Site": {
    "gurultu_kapi": {
      "title": "Gece gürültü ve kapı krizi",
      "questions": [
        {
          "stem": "Komşu gürültü şikâyeti gelince ilk doğru adım nedir?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Usulüne uygun kontrol ve iletişim",
            "Kapıyı kırmak",
            "Bağırmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Usulüne uygun kontrol ve iletişim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Usulüne uygun kontrol ve iletişim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "İçeriden 'yardım edin' sesi duyulursa ne yapılır?",
          "options": [
            "Tek başına kapıyı kırmak",
            "Unutmak",
            "Destek alıp durumu değerlendirmek",
            "Film çekmek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Destek alıp durumu değerlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek alıp durumu değerlendirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Koridora dökülen komşulara yaklaşım nasıl olmalıdır?",
          "options": [
            "Tartışmayı büyütmek",
            "Tartıştırmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Sakin dağıtmak"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Sakin dağıtmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin dağıtmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Zorla giriş hakkında doğru olan nedir?",
          "options": [
            "Yetki ve sınırlar bilinerek hareket edilir",
            "Keyfidir",
            "Her zaman serbesttir",
            "Hiçbir durumda düşünülmez"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Telsiz kullanılmalı mıdır?",
          "options": [
            "Hayır",
            "Evet",
            "Sohbet için",
            "Müzik için"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Evet",
            "Saklanır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Taraf tutmak doğru mudur?",
          "options": [
            "Evet",
            "Şart",
            "Serbest",
            "Hayır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Tehdit artarsa ne yapılır?",
          "options": [
            "Destek istemek",
            "Yalnız kalmak",
            "Küfür etmek",
            "Terk etmek"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Destek istemek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Kamera zayıfsa ne değişir?",
          "options": [
            "Müdahale yapılmaz",
            "Daha dikkatli olunur",
            "Tek başına kapı kırılır",
            "Unutulur"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Daha dikkatli olunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Daha dikkatli olunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Raporlanır",
            "Silinir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Yönetici 'kırın' derse ne olur?",
          "options": [
            "Körü körüne uyulur",
            "Küfürle reddedilir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Usul ve yetkiye bakılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Usul ve yetkiye bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Usul ve yetkiye bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Sakin dil işe yarar mı?",
          "options": [
            "Evet",
            "Hayır",
            "Zayıflıktır",
            "Yasaktır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Tek kahraman",
            "Destek, usul, kayıt",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kapı kır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek, usul, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek, usul, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Mesafe",
            "Yetkisiz zorla giriş",
            "Kayıt"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Yetkisiz zorla giriş. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yetkisiz zorla giriş. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Acele şiddet",
            "İhmal",
            "Taraf tutmak",
            "Güvenli ve kayıtlı süreç"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli ve kayıtlı süreç. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli ve kayıtlı süreç. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "gurultu_kapi"
        }
      ]
    },
    "sahte_kurye": {
      "title": "Sahte kurye / dolandırıcılık",
      "questions": [
        {
          "stem": "'Paket var' diyerek içeri girmek isteyen kişiye ilk tutum nedir?",
          "options": [
            "Kimlik ve amacı doğrulamak",
            "Serbest bırakmak",
            "Herkesi reddetmek",
            "Tartışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Üniforma tek başına yeterli midir?",
          "options": [
            "Evet",
            "Hayır",
            "Bazen",
            "Her zaman"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Acele baskısı kontrolü kaldırır mı?",
          "options": [
            "Evet",
            "Bağırmak kaldırır",
            "Hayır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Şüphe artarsa ne yapılır?",
          "options": [
            "Durdurulup bildirilir",
            "İçeri alınır",
            "Dövülür",
            "Film çekilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Durdurulup bildirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Durdurulup bildirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Telsiz gerekir mi?",
          "options": [
            "Hayır",
            "Evet",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Kamera kontrolü işe yarar mı?",
          "options": [
            "Hayır",
            "Silinmeli",
            "Evet",
            "Satılmalı"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "'Beni tanıyorlar' iddiası yeterli midir?",
          "options": [
            "Evet",
            "Geçiş verilir",
            "Tartışılır",
            "Hayır, yine doğrulanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır, yine doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, yine doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Raporlanır",
            "Unutulur",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Birden fazla kişi gelmesi riski etkiler mi?",
          "options": [
            "Hayır",
            "Evet, risk artabilir",
            "Serbest",
            "Ödül"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet, risk artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet, risk artabilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Kapı kontrolü nasıl olmalıdır?",
          "options": [
            "Açık bırakılır",
            "Kırılır",
            "Prosedüre uyulur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedüre uyulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre uyulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Geçir",
            "Kapış",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Kimlik, amaç, kayıt"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kimlik, amaç, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik, amaç, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Görünüşe güvenmek",
            "Doğrulama",
            "Bildirim",
            "Kayıt"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Görünüşe güvenmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Görünüşe güvenmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Herkesi al",
            "Doğrulamadan geçiş yok",
            "Kimseyi alma körü",
            "Tartış"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Doğrulamadan geçiş yok. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Doğrulamadan geçiş yok. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        },
        {
          "stem": "Acil kargo iddiası muafiyet midir?",
          "options": [
            "Evet",
            "Bağırmak yeter",
            "Hayır, yine kontrol edilir",
            "Geçirmek yeter"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır, yine kontrol edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Hayır, yine kontrol edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "sahte_kurye"
        }
      ]
    },
    "otopark_hirsiz": {
      "title": "Otoparkta araç hırsızlığı girişimi",
      "questions": [
        {
          "stem": "Şüpheli gezinme fark edilince ne yapılır?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Hemen fiziksel müdahale",
            "Sadece film",
            "Gözlemlenip uygun şekilde yaklaşılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Gözlemlenip uygun şekilde yaklaşılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gözlemlenip uygun şekilde yaklaşılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Araç camıyla uğraşan biri görülürse ne yapılır?",
          "options": [
            "Bildirilip usulüne uygun müdahale planlanır",
            "Sessizce sadece izlenir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Dövülür"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Bildirilip usulüne uygun müdahale planlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Bildirilip usulüne uygun müdahale planlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Destek istemek doğru mudur?",
          "options": [
            "Zayıflıktır",
            "Doğrudur",
            "Yasaktır",
            "Geç kalınır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Doğrudur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Doğrudur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Plaka/özellik notu işe yarar mı?",
          "options": [
            "Gereksiz",
            "Silinmeli",
            "Evet",
            "Saklanmalı gizli"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Kamera zayıfsa ne olur?",
          "options": [
            "Boş verilir",
            "Unutulur",
            "Şaka yapılır",
            "Saha daha dikkatli yönetilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Saha daha dikkatli yönetilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Saha daha dikkatli yönetilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Kaçış olursa ne bilinmelidir?",
          "options": [
            "Kovalamaca riskleri",
            "Hep koşulmalı",
            "Unutulmalı",
            "Silah şart"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kovalamaca riskleri. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kovalamaca riskleri. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Telsiz nasıl kullanılır?",
          "options": [
            "Kapalı",
            "Net",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Araç sahibi gelirse üslup nasıl olmalıdır?",
          "options": [
            "Suçlayıcı",
            "Kapı dışarı",
            "Bilgilendirici",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Bilgilendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bilgilendirici. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Silinir",
            "Raporlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Birden fazla şüpheli varsa ne değişir?",
          "options": [
            "Destek ihtiyacı artar",
            "Tek dalınır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Film çekilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek ihtiyacı artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Destek ihtiyacı artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Tek kahraman",
            "Gözlem, destek, kayıt",
            "İhmal",
            "Şiddet önce"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Gözlem, destek, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gözlem, destek, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Gözlem",
            "Yalnız acele fiziksel müdahale",
            "Not"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Yalnız acele fiziksel müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yalnız acele fiziksel müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Aydınlatma neden önemlidir?",
          "options": [
            "Önemsiz",
            "Yok",
            "Şaka",
            "Görüş ve caydırıcılığı etkiler"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Görüş ve caydırıcılığı etkiler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Görüş ve caydırıcılığı etkiler. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Güvenli müdahale",
            "İhmal",
            "Gizleme",
            "Taraf"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Güvenli müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        },
        {
          "stem": "Delil nasıl yönetilir?",
          "options": [
            "Bozulur",
            "Korunur",
            "Çalınır",
            "Silinir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "otopark_hirsiz"
        }
      ]
    },
    "asansor": {
      "title": "Asansörde mahsur + panik",
      "questions": [
        {
          "stem": "Asansör mahsurunda ilk iş nedir?",
          "options": [
            "Kapıyı zorlamak",
            "Elektriği rastgele kesmek",
            "Bildirip sakinleştirmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Bildirip sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bildirip sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Yaşlı sakin panikliyorsa ne yapılır?",
          "options": [
            "Bağırılır",
            "Terk edilir",
            "Şaka yapılır",
            "Sakin konuşulur"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin konuşulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin konuşulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Teknik ekip çağrılmalı mıdır?",
          "options": [
            "Evet",
            "Beklenmez hiç",
            "Engellenir",
            "Geciktirilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kapıyı zorlamak riskli midir?",
          "options": [
            "Hayır",
            "Evet",
            "Zorunlu",
            "Ödül"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Evet",
            "Saklanır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Sağlık şikâyeti olursa ne olur?",
          "options": [
            "Önemsiz",
            "Beklenir",
            "Tartışılır",
            "Acil destek önceliği artar"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Acil destek önceliği artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Acil destek önceliği artar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Kat önü kalabalıklaşırsa ne yapılır?",
          "options": [
            "Bilgilendirilip dağıtılır",
            "İtilir",
            "Hepsi içeri alınır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Bilgilendirilip dağıtılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Bilgilendirilip dağıtılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Telsiz nasıl kullanılır?",
          "options": [
            "Kapalı",
            "Net",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Yönetici 'hemen aç' derse ne yapılır?",
          "options": [
            "Zorla açılır",
            "Küfür edilir",
            "Güvenli yöntem korunur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli yöntem korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli yöntem korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Silinir",
            "Raporlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Yanlış bilgi vermek neye yol açar?",
          "options": [
            "Zararlıdır",
            "İyidir",
            "Serbesttir",
            "Gereklidir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Zararlıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Zararlıdır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Zorla aç",
            "Bildir, sakinleştir, teknik süreci işlet",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tek çöz"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Bildir, sakinleştir, teknik süreci işlet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bildir, sakinleştir, teknik süreci işlet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Sakin dil",
            "Bildirim",
            "Zorla müdahale",
            "Kayıt"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Zorla müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Zorla müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Hızlı zorlama",
            "İhmal",
            "Gizleme",
            "Güvenli kurtarma"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Güvenli kurtarma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli kurtarma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        },
        {
          "stem": "Çocuk varsa ne değişir?",
          "options": [
            "Daha dikkatli iletişim gerekir",
            "Hiçbir şey",
            "Dışarı atılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "asansor"
        }
      ]
    },
    "yonetici_kavga": {
      "title": "Yönetici-sakin kavgası",
      "questions": [
        {
          "stem": "Taraf tutmak doğru mudur?",
          "options": [
            "Evet",
            "Hayır",
            "Şart",
            "Serbest"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "İlk adım nedir?",
          "options": [
            "Bağırmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Ayırıp sakinleştirmek",
            "Film çekmek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Ayırıp sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Ayırıp sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Fiziksel risk artarsa ne yapılır?",
          "options": [
            "İzlenir",
            "Katılınır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Destek istenir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Evet",
            "Hayır",
            "Silinir",
            "Saklanır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Kalabalık büyürse ne yapılır?",
          "options": [
            "Büyütülür",
            "Dağıtılır",
            "Tartıştırılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Dağıtılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Dağıtılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Hakarete aynı dille cevap doğru mudur?",
          "options": [
            "Evet",
            "Bazen",
            "Hayır",
            "Hep"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Telsiz gerekir mi?",
          "options": [
            "Hayır",
            "Sohbet",
            "Müzik",
            "Gerekirse evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Gerekirse evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gerekirse evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Yönetici 'atın şunu' derse ne olur?",
          "options": [
            "Usule bakılır",
            "Kör şiddet",
            "Küfürle red",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Usule bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Usule bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Raporlanır",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Kamera notu işe yarar mı?",
          "options": [
            "Hayır",
            "Silinmeli",
            "Evet",
            "Satılmalı"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Taraf tut",
            "İhmal",
            "Şiddet önce",
            "Tarafsız sakin müdahale"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Tarafsız sakin müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Tarafsız sakin müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Taraf olup tartışmayı büyütmek",
            "Mesafe",
            "Destek",
            "Kayıt"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Taraf olup tartışmayı büyütmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Taraf olup tartışmayı büyütmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Güç gösterisi",
            "Güvenlik ve tarafsızlık",
            "Gizleme",
            "Taraf"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenlik ve tarafsızlık. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenlik ve tarafsızlık. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Alkol şüphesi varsa ne yapılır?",
          "options": [
            "Yakın durulur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Daha dikkatli olunur",
            "Şakalaşılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Daha dikkatli olunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Daha dikkatli olunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        },
        {
          "stem": "Tanıklar için ne yapılabilir?",
          "options": [
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Tartıştırılır",
            "Kovulur",
            "Gerekirse not alınır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Gerekirse not alınır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Gerekirse not alınır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Site",
          "scenarioId": "yonetici_kavga"
        }
      ]
    }
  },
  "Havalimanı": {
    "yetkisiz_alan": {
      "title": "Kısıtlı alana yetkisiz giriş",
      "questions": [
        {
          "stem": "Kartı olmayan kişi kontrollü alana girmek isterse ne yapılır?",
          "options": [
            "Durdurulur",
            "Geçirilir",
            "Tartışılır",
            "Rüşvet konuşulur"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
          "explainWrong": [
            "Doğru: Kimlik/yetki doğrulanmadan geçiş serbest bırakılmaz; nazik ama net kontrol uygulanır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "'Uçağım kalkıyor' demek kontrolü kaldırır mı?",
          "options": [
            "Evet",
            "Hayır",
            "Bağırmak kaldırır",
            "Geçirmek kaldırır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Personel 'tanıyorum' derse ne olur?",
          "options": [
            "Yeterli sayılır",
            "Geçiş verilir",
            "Yetki yine doğrulanır",
            "Tartışılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Yetki yine doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yetki yine doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kuyruk baskısı kontrolü bozmalı mıdır?",
          "options": [
            "Hayır",
            "Evet",
            "Hep red",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Telsiz gerekir mi?",
          "options": [
            "Hayır",
            "Evet",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Zorla geçmeye çalışırsa ne yapılır?",
          "options": [
            "İzlenir",
            "Yol verilir",
            "Durdurulup destek istenir",
            "Film çekilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Durdurulup destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Durdurulup destek istenir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Silinir",
            "Raporlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Durdur, doğrula, bildir",
            "Geçir",
            "Kapış",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Durdur, doğrula, bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Durdur, doğrula, bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Kimlik bakmak",
            "Hız için kontrolü esnetmek",
            "Bildirim",
            "Kayıt"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hız için kontrolü esnetmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hız için kontrolü esnetmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "İstisna keyfidir",
            "İhmal",
            "Yüksek güvenlikte prosedür esnetilmez",
            "Gizleme"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Yüksek güvenlikte prosedür esnetilmez. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Yüksek güvenlikte prosedür esnetilmez. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Eşlik yoksa ne yapılır?",
          "options": [
            "Serbest",
            "Hep alınır",
            "Hep reddedilir körü",
            "Kurala bakılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kurala bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurala bakılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Kamera notu işe yarar mı?",
          "options": [
            "Evet",
            "Hayır",
            "Silinmeli",
            "Satılmalı"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "Sakin dil işe yarar mı?",
          "options": [
            "Hayır",
            "Evet",
            "Zayıflık",
            "Yasak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        },
        {
          "stem": "İçeriden usulsüz istek gelirse ne yapılır?",
          "options": [
            "Uyulur",
            "Tartışılır",
            "Prosedür korunur",
            "Geçirilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Prosedür korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedür korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "yetkisiz_alan"
        }
      ]
    },
    "sahipsiz_bagaj": {
      "title": "Sahipsiz bagaj",
      "questions": [
        {
          "stem": "Sahipsiz valiz görünce ilk adım nedir?",
          "options": [
            "Açmak",
            "Taşımak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Mesafe bırakıp bildirmek"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sahipsiz eşyada önce güvenli mesafe, alan kontrolü ve ilgili birime bildirim gelir; içerik bilinmeden müdahale risklidir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Valizi açmak doğru mudur?",
          "options": [
            "Hayır",
            "Evet",
            "Zorunlu",
            "Ödül"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Valizi taşımak riskli midir?",
          "options": [
            "Hayır",
            "Evet",
            "Zorunlu",
            "Serbest"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Panik başlarsa ne yapılır?",
          "options": [
            "Büyütülür",
            "Bağırılır",
            "Sakin alan yönetimi yapılır",
            "Film çekilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Sakin alan yönetimi yapılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Sakin alan yönetimi yapılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Saklanır",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "'Benim valizim' iddiası hemen yeterli midir?",
          "options": [
            "Hayır, doğrulanır",
            "Evet",
            "Tartışılır",
            "Açılır"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır, doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır, doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Telsiz nasıl kullanılır?",
          "options": [
            "Kapalı",
            "Net konum",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Net konum. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Net konum. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Kalabalık yaklaşırsa ne yapılır?",
          "options": [
            "Bırakılır",
            "İçeri doldurulur",
            "Uzak tutulur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Uzak tutulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uzak tutulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Silinir",
            "Raporlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Mesafe, bildir, prosedür",
            "Aç",
            "Taşı",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Mesafe, bildir, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Mesafe, bildir, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Açmak veya taşımak",
            "Mesafe",
            "Kayıt"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Açmak veya taşımak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Açmak veya taşımak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Merak",
            "İhmal",
            "Şüpheli terkte prosedür",
            "Gizleme"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Şüpheli terkte prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Şüpheli terkte prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Asılsız çıkarsa kayıt silinir mi?",
          "options": [
            "Evet",
            "Saklanır gizli",
            "Unutulur",
            "Hayır, süreç kayıtlı kalır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hayır, süreç kayıtlı kalır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, süreç kayıtlı kalır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "'Kaldırın' baskısı neyi bozmamalıdır?",
          "options": [
            "Prosedürü",
            "Hiçbir şeyi",
            "Tartışmayı",
            "Taşımayı"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedürü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Prosedürü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        },
        {
          "stem": "Kamera teyidi işe yarar mı?",
          "options": [
            "Hayır",
            "Evet",
            "Silinmeli",
            "Satılmalı"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "sahipsiz_bagaj"
        }
      ]
    },
    "kuyruk_kavga": {
      "title": "Pasaport kuyruğunda kavga",
      "questions": [
        {
          "stem": "İki yolcu tartışınca ilk adım nedir?",
          "options": [
            "Taraf olmak",
            "Hemen fiziksel müdahale edip tarafları ayırmaya çalışmak, destek beklemeden",
            "Ayırıp sakinleştirmek",
            "Film çekmek"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Ayırıp sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Ayırıp sakinleştirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Kalabalık bulaşırsa ne yapılır?",
          "options": [
            "Büyütülür",
            "Herkes itilir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Koridor kontrolü sağlanır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Koridor kontrolü sağlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Koridor kontrolü sağlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Destek istemek doğru mudur?",
          "options": [
            "Gerekebilir",
            "Zayıflık",
            "Yasak",
            "Geç"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Gerekebilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Gerekebilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Evet",
            "Silinir",
            "Saklanır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Hakarete cevap nasıl olmalıdır?",
          "options": [
            "Aynı dil",
            "Küfür",
            "Profesyonel kalmak",
            "Terk"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Profesyonel kalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Profesyonel kalmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Telsiz gerekir mi?",
          "options": [
            "Hayır",
            "Sohbet",
            "Müzik",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Fiziksel riskte ne yapılır?",
          "options": [
            "Destek ve orantı",
            "Tek dövüş",
            "İzle",
            "Film"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Destek ve orantı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Destek ve orantı. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Kuyruk düzeni yeniden kurulmalı mıdır?",
          "options": [
            "Önemsiz",
            "Evet",
            "Bozulmalı",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Raporlanır",
            "Silinir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Taraf",
            "İhmal",
            "Şiddet önce",
            "Güvenli ayrıştırma"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenli ayrıştırma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli ayrıştırma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Taraf tutmak",
            "Mesafe",
            "Destek",
            "Kayıt"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Taraf tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Taraf tutmak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Ceza gösterisi",
            "Tarafsız güvenlik",
            "Gizleme",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Tarafsız güvenlik. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Tarafsız güvenlik. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Çocuk/yaşlı varsa ne olur?",
          "options": [
            "Önemsiz",
            "Dışarı atılır",
            "Daha öncelikli korunur",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hızlı ama kontrollü arama, birim bilgilendirme ve panik yaratmayan yönlendirme esastır.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Personel paniklerse ne yapılır?",
          "options": [
            "Büyütülür",
            "Terk edilir",
            "Bağırılır",
            "Sakin koordine edilir"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin koordine edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Sakin koordine edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        },
        {
          "stem": "Kamera notu işe yarar mı?",
          "options": [
            "Evet",
            "Hayır",
            "Silinmeli",
            "Satılmalı"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "kuyruk_kavga"
        }
      ]
    },
    "terk_arac": {
      "title": "Şüpheli terk edilmiş araç (ön saha)",
      "questions": [
        {
          "stem": "Terk edilmiş gibi duran araçta ilk adım nedir?",
          "options": [
            "Araça binmek",
            "Mesafe bırakıp bildirmek",
            "Keyfi çekici çağırmak",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Mesafe bırakıp bildirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Mesafe bırakıp bildirmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Kapıyı açmak doğru mudur?",
          "options": [
            "Evet",
            "Zorunlu",
            "Hayır, risklidir",
            "Ödül"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır, risklidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, risklidir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Kalabalık yaklaşırsa ne yapılır?",
          "options": [
            "Bırakılır",
            "İçeri alınır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Uzak tutulur"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Uzak tutulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Uzak tutulur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Telsiz nasıl kullanılır?",
          "options": [
            "Konum net",
            "Kapalı",
            "Sohbet",
            "Müzik"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Konum net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Konum net. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Evet",
            "Silinir",
            "Saklanır"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "'Benim arabam' iddiası hemen yeterli midir?",
          "options": [
            "Evet",
            "Tartışılır",
            "Hayır, doğrulanır",
            "Açılır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır, doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, doğrulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Trafik etkilenirse ne yapılır?",
          "options": [
            "Önemsenmez",
            "Her yer keyfi kapatılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Güvenli yönlendirme yapılır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Güvenli yönlendirme yapılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli yönlendirme yapılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Raporlanır",
            "Unutulur",
            "Gizlenir",
            "Silinir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Aç",
            "Mesafe, bildir, prosedür",
            "Taşı",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Mesafe, bildir, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Mesafe, bildir, prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Bildirim",
            "Mesafe",
            "Merakla müdahale",
            "Kayıt"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Merakla müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Merakla müdahale. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Acele dokunma",
            "İhmal",
            "Gizleme",
            "Şüpheli terkte güvenlik mesafesi"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Şüpheli terkte güvenlik mesafesi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Şüpheli terkte güvenlik mesafesi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "'Çekin' baskısı prosedürü bozar mı?",
          "options": [
            "Yetkili süreç korunur",
            "Bozmalı",
            "Tartışılır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "both",
          "explainCorrect": "Doğru: Yetkili süreç korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Yetkili süreç korunur. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Plaka notu işe yarar mı?",
          "options": [
            "Hayır",
            "Evet",
            "Silinmeli",
            "Satılmalı"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Panik yayılırsa ne yapılır?",
          "options": [
            "Büyütülür",
            "Bağırılır",
            "Sakin alan yönetimi",
            "Film çekilir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin alan yönetimi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Panik ve etiketsiz suçlama kontrolü bozar; net ve sakin iletişim gerekir.",
            "Doğru: Sakin alan yönetimi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        },
        {
          "stem": "Cam kırmak doğru mudur?",
          "options": [
            "Evet",
            "Zorunlu",
            "Ödül",
            "Hayır"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "terk_arac"
        }
      ]
    },
    "personel_usulsuzluk": {
      "title": "İçeriden personel usulsüzlüğü",
      "questions": [
        {
          "stem": "Prosedüre aykırı 'geçir' isteği gelirse ne yapılır?",
          "options": [
            "Prosedür uygulanır",
            "Uyulur",
            "Tartışılır",
            "Geçirilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Prosedür uygulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Prosedür uygulanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Üst baskıda doğru tutum nedir?",
          "options": [
            "Prosedürü bozmak",
            "Kayıtlı süreçle doğru uygulamayı sürdürmek",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak",
            "Hakaret"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Kayıtlı süreçle doğru uygulamayı sürdürmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kayıtlı süreçle doğru uygulamayı sürdürmek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Kayıt tutulur mu?",
          "options": [
            "Hayır",
            "Silinir",
            "Evet",
            "Saklanır"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Üst birime bildirim gerekebilir mi?",
          "options": [
            "Gereksiz",
            "Yasak",
            "Geç",
            "Evet"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Evet. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "'Herkes yapıyor' mazeret midir?",
          "options": [
            "Hayır",
            "Evet",
            "Serbest",
            "Ödül"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Hayır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Yolcu mağdur olmasın diye prosedür bozulur mu?",
          "options": [
            "Evet",
            "Hayır; doğru alternatif yönlendirilir",
            "Küfür edilir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Hayır; doğru alternatif yönlendirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır; doğru alternatif yönlendirilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Olay sonrası ne yapılır?",
          "options": [
            "Unutulur",
            "Gizlenir",
            "Raporlanır",
            "Silinir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Raporlanır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Özet hangisidir?",
          "options": [
            "Rica prosedürden üstündür",
            "İhmal",
            "Gizleme",
            "Prosedür kişisel ricadan üstündür"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedür kişisel ricadan üstündür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedür kişisel ricadan üstündür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Temel hata hangisidir?",
          "options": [
            "Tanıdık diye kontrol atlamak",
            "Kimlik bakmak",
            "Bildirim",
            "Kayıt"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Tanıdık diye kontrol atlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Tanıdık diye kontrol atlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Doğru ilke nedir?",
          "options": [
            "Torpil",
            "Eşit prosedür",
            "Keyfi red",
            "Şiddet"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Eşit prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Eşit prosedür. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Şikâyet tehdidi prosedürü bozar mı?",
          "options": [
            "Evet bozar",
            "Küfür edilir",
            "Hayır, usule devam edilir",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Hayır, usule devam edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Hayır, usule devam edilir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Kamera süreci neden önemlidir?",
          "options": [
            "Önemsiz",
            "Silinmeli",
            "Satılmalı",
            "Şeffaflık ve kayıt için"
          ],
          "correctIndex": 3,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Şeffaflık ve kayıt için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Şeffaflık ve kayıt için. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "İkinci personel ısrar ederse ne yapılır?",
          "options": [
            "Prosedür hatırlatılır",
            "İkisine de uyulur",
            "Kapışılır",
            "Geçirilir"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Prosedür hatırlatılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Prosedür hatırlatılır. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Gerçek tıbbi acil iddiası nasıl ele alınır?",
          "options": [
            "Kaosla",
            "Tanımlı acil protokolle",
            "Her iddia aynıdır",
            "Durumu büyütmemek için yalnızca kendi inisiyatifinle çözmeye çalışmak"
          ],
          "correctIndex": 1,
          "difficulty": "easy",
          "shift": "day",
          "explainCorrect": "Doğru: Tanımlı acil protokolle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Tanımlı acil protokolle. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        },
        {
          "stem": "Usulsüz geçişe izin vermenin sonucu ne olabilir?",
          "options": [
            "Hiçbir şey olmaz",
            "Ödül gelir",
            "Kurum güvenliği zayıflar",
            "Serbesttir"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kurum güvenliği zayıflar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kurum güvenliği zayıflar. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Havalimanı",
          "scenarioId": "personel_usulsuzluk"
        }
      ]
    }
  },
  "Banka": {
    "soygun_alarm": {
      "title": "Soygun alarmı / gişe güvenliği",
      "questions": [
        {
          "stem": "Gişe önünde maskeli bir kişi sıra beklemeden vezneye yöneliyor. İlk yaklaşım?",
          "options": [
            "Mesafeyi koru, destek iste, prosedüre göre yönlendir",
            "Tek başına yakala",
            "Görmezden gel",
            "Müşterileri bağırarak dağıt"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Mesafeyi koru, destek iste, prosedüre göre yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Mesafeyi koru, destek iste, prosedüre göre yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Kasa dairesi kapısı mesai dışında aralık. Ne yaparsın?",
          "options": [
            "Hemen içeri dal",
            "Bölgeyi izole et, amir ve ilgili birime bildir",
            "Kapıyı çekip git",
            "Sosyal medyada sor"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "night",
          "explainCorrect": "Doğru: Bölgeyi izole et, amir ve ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bölgeyi izole et, amir ve ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "ATM önünde sahipsiz çanta. Doğru adım?",
          "options": [
            "Çantayı aç",
            "Taşıyıp depoya koy",
            "Güvenli mesafe, alan kontrolü, bildirim",
            "Çöpe at"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli mesafe, alan kontrolü, bildirim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli mesafe, alan kontrolü, bildirim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Müşteri yüksek sesle gişe memuruna hakaret ediyor. Öncelik?",
          "options": [
            "Fiziksel müdahale",
            "Sadece izle",
            "Kameraya alıp paylaş",
            "De-eskalasyon, mesafe, gerekirse destek"
          ],
          "correctIndex": 3,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: De-eskalasyon, mesafe, gerekirse destek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: De-eskalasyon, mesafe, gerekirse destek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Alarm paneli arıza kodu veriyor. Ne yapmamalısın?",
          "options": [
            "Kodu kaydetmeden paneli sıfırlamak",
            "Amire bildirmek",
            "Bölgeyi kontrol etmek",
            "Kayıt tutmak"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Kodu kaydetmeden paneli sıfırlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kodu kaydetmeden paneli sıfırlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Şüpheli sahte para ihbarı. Doğru çerçeve?",
          "options": [
            "Parayı cebe at",
            "Prosedüre göre işlem, birim bilgilendirme, kayıt",
            "Müşteriyi suçla",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedüre göre işlem, birim bilgilendirme, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre işlem, birim bilgilendirme, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Personel girişi kartsız geçiş denemesi. Ne yaparsın?",
          "options": [
            "Geçir",
            "Tartış",
            "Kimlik/yetki doğrula, usulsüzse reddet ve bildir",
            "Kapıyı kilitleyip çık"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kimlik/yetki doğrula, usulsüzse reddet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrula, usulsüzse reddet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Soygun alarmı (sessiz) tetiklendi. İlk refleks?",
          "options": [
            "Bağırarak koş",
            "Herkesi dışarı at",
            "Panikle kaç",
            "Prosedür: güvenli konum, birimlere bildirim, panik yaratma"
          ],
          "correctIndex": 3,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedür: güvenli konum, birimlere bildirim, panik yaratma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedür: güvenli konum, birimlere bildirim, panik yaratma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Gişe önünde maskeli bir kişi sıra beklemeden vezneye yöneliyor. İlk yaklaşım? (Saha notu)",
          "options": [
            "Mesafeyi koru, destek iste, prosedüre göre yönlendir",
            "Tek başına yakala",
            "Görmezden gel",
            "Müşterileri bağırarak dağıt"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Mesafeyi koru, destek iste, prosedüre göre yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Mesafeyi koru, destek iste, prosedüre göre yönlendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Kasa dairesi kapısı mesai dışında aralık. Ne yaparsın? (Vardiya kontrolü)",
          "options": [
            "Hemen içeri dal",
            "Bölgeyi izole et, amir ve ilgili birime bildir",
            "Kapıyı çekip git",
            "Sosyal medyada sor"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "night",
          "explainCorrect": "Doğru: Bölgeyi izole et, amir ve ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bölgeyi izole et, amir ve ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "ATM önünde sahipsiz çanta. Doğru adım? (Saha notu)",
          "options": [
            "Çantayı aç",
            "Taşıyıp depoya koy",
            "Güvenli mesafe, alan kontrolü, bildirim",
            "Çöpe at"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Güvenli mesafe, alan kontrolü, bildirim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Güvenli mesafe, alan kontrolü, bildirim. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Müşteri yüksek sesle gişe memuruna hakaret ediyor. Öncelik? (Vardiya kontrolü)",
          "options": [
            "Fiziksel müdahale",
            "Sadece izle",
            "Kameraya alıp paylaş",
            "De-eskalasyon, mesafe, gerekirse destek"
          ],
          "correctIndex": 3,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: De-eskalasyon, mesafe, gerekirse destek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: De-eskalasyon, mesafe, gerekirse destek. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Alarm paneli arıza kodu veriyor. Ne yapmamalısın? (Saha notu)",
          "options": [
            "Kodu kaydetmeden paneli sıfırlamak",
            "Amire bildirmek",
            "Bölgeyi kontrol etmek",
            "Kayıt tutmak"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Kodu kaydetmeden paneli sıfırlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Kodu kaydetmeden paneli sıfırlamak. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Şüpheli sahte para ihbarı. Doğru çerçeve? (Vardiya kontrolü)",
          "options": [
            "Parayı cebe at",
            "Prosedüre göre işlem, birim bilgilendirme, kayıt",
            "Müşteriyi suçla",
            "Yok say"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedüre göre işlem, birim bilgilendirme, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre göre işlem, birim bilgilendirme, kayıt. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        },
        {
          "stem": "Personel girişi kartsız geçiş denemesi. Ne yaparsın? (Saha notu)",
          "options": [
            "Geçir",
            "Tartış",
            "Kimlik/yetki doğrula, usulsüzse reddet ve bildir",
            "Kapıyı kilitleyip çık"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kimlik/yetki doğrula, usulsüzse reddet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kimlik/yetki doğrula, usulsüzse reddet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "soygun_alarm"
        }
      ]
    },
    "kasa_gece": {
      "title": "Kasa dairesi ve gece kontrol",
      "questions": [
        {
          "stem": "Gece kasa sayımı sırasında yetkisiz kişi koridorda. Yaklaşım?",
          "options": [
            "Doğrula, mesafeyi koru, destek iste",
            "Tek başına sorgula",
            "Görmezden gel",
            "Işıkları kapat"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Doğrula, mesafeyi koru, destek iste. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Doğrula, mesafeyi koru, destek iste. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Müdür “alarmı kapat, müşteri korkmasın” diyor. Ne yaparsın?",
          "options": [
            "Hemen kapat",
            "Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma",
            "Tartışmayı uzat",
            "Kayıt sil"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Gişe camı çatlak bulundu. İşlem?",
          "options": [
            "Yoksay",
            "Müşteriye şaka yap",
            "Kayıt altına al, ilgili birime bildir, alanı güvenli tut",
            "Camı kendin sök"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kayıt altına al, ilgili birime bildir, alanı güvenli tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kayıt altına al, ilgili birime bildir, alanı güvenli tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Kalabalık kuyrukta itiş başladı. Öncelik?",
          "options": [
            "Bağır",
            "Herkesi dışarı at",
            "Film çek",
            "Sakin yönlendirme ve destek talebi"
          ],
          "correctIndex": 3,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin yönlendirme ve destek talebi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin yönlendirme ve destek talebi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Kamera kör noktası fark edildi. Doğru davranış?",
          "options": [
            "Arızayı kaydet ve bildir",
            "Önemseme",
            "Kamerayı sök",
            "Yalan söyle"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Arızayı kaydet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Arızayı kaydet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Şüpheli torba ile kasa dairesine yönelen personel iddiası. Ne yaparsın?",
          "options": [
            "Suçla",
            "Prosedüre uygun kimlik/yetki ve süreç kontrolü",
            "Yok say",
            "Kaçır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Prosedüre uygun kimlik/yetki ve süreç kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre uygun kimlik/yetki ve süreç kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Yangın alarmı şube içinde. İlk adım?",
          "options": [
            "Alarmı kapat",
            "Kaç",
            "Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir",
            "Müşterileri kilitle"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "ATM skimmer şüphesi. Doğru yaklaşım?",
          "options": [
            "Cihazı sök at",
            "Müşteriye dokundur",
            "Fotoğraf sat",
            "Alanı kontrol et, kullanımı durdur, ilgili birime bildir"
          ],
          "correctIndex": 3,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Alanı kontrol et, kullanımı durdur, ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Alanı kontrol et, kullanımı durdur, ilgili birime bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Gece kasa sayımı sırasında yetkisiz kişi koridorda. Yaklaşım? (Saha notu)",
          "options": [
            "Doğrula, mesafeyi koru, destek iste",
            "Tek başına sorgula",
            "Görmezden gel",
            "Işıkları kapat"
          ],
          "correctIndex": 0,
          "difficulty": "hard",
          "shift": "night",
          "explainCorrect": "Doğru: Doğrula, mesafeyi koru, destek iste. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Doğrula, mesafeyi koru, destek iste. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Müdür “alarmı kapat, müşteri korkmasın” diyor. Ne yaparsın? (Vardiya kontrolü)",
          "options": [
            "Hemen kapat",
            "Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma",
            "Tartışmayı uzat",
            "Kayıt sil"
          ],
          "correctIndex": 1,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedürü koru, doğrulama bitmeden alarmı keyfi kapatma. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Gişe camı çatlak bulundu. İşlem? (Saha notu)",
          "options": [
            "Yoksay",
            "Müşteriye şaka yap",
            "Kayıt altına al, ilgili birime bildir, alanı güvenli tut",
            "Camı kendin sök"
          ],
          "correctIndex": 2,
          "difficulty": "easy",
          "shift": "both",
          "explainCorrect": "Doğru: Kayıt altına al, ilgili birime bildir, alanı güvenli tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Kayıt altına al, ilgili birime bildir, alanı güvenli tut. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Kalabalık kuyrukta itiş başladı. Öncelik? (Vardiya kontrolü)",
          "options": [
            "Bağır",
            "Herkesi dışarı at",
            "Film çek",
            "Sakin yönlendirme ve destek talebi"
          ],
          "correctIndex": 3,
          "difficulty": "medium",
          "shift": "day",
          "explainCorrect": "Doğru: Sakin yönlendirme ve destek talebi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Sakin yönlendirme ve destek talebi. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Kamera kör noktası fark edildi. Doğru davranış? (Saha notu)",
          "options": [
            "Arızayı kaydet ve bildir",
            "Önemseme",
            "Kamerayı sök",
            "Yalan söyle"
          ],
          "correctIndex": 0,
          "difficulty": "easy",
          "shift": "night",
          "explainCorrect": "Doğru: Arızayı kaydet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Doğru: Arızayı kaydet ve bildir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Şüpheli torba ile kasa dairesine yönelen personel iddiası. Ne yaparsın? (Vardiya kontrolü)",
          "options": [
            "Suçla",
            "Prosedüre uygun kimlik/yetki ve süreç kontrolü",
            "Yok say",
            "Kaçır"
          ],
          "correctIndex": 1,
          "difficulty": "medium",
          "shift": "both",
          "explainCorrect": "Doğru: Prosedüre uygun kimlik/yetki ve süreç kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Prosedüre uygun kimlik/yetki ve süreç kontrolü. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        },
        {
          "stem": "Yangın alarmı şube içinde. İlk adım? (Saha notu)",
          "options": [
            "Alarmı kapat",
            "Kaç",
            "Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir",
            "Müşterileri kilitle"
          ],
          "correctIndex": 2,
          "difficulty": "hard",
          "shift": "day",
          "explainCorrect": "Doğru: Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
          "explainWrong": [
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir.",
            "Doğru: Bölgeyi doğrula, prosedürü işlet, ilgili ekipleri bilgilendir. Bu yaklaşım can güvenliği ve kurum prosedürüyle uyumludur.",
            "Yanlış: Bu seçenek prosedüre aykırı veya riski artırır; önce güvenlik ve doğru bildirim gelir."
          ],
          "institution": "Banka",
          "scenarioId": "kasa_gece"
        }
      ]
    }
  }
};
