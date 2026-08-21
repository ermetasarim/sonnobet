/* SON NÖBET OLAY HAVUZU — +Banka */
var events = {
  "AVM": [
    {
      "title": "Şüpheli Hareket",
      "description": "Bir mağaza çalışanı, bir müşterinin ürünleri uzun süredir incelediğini bildiriyor.",
      "hint": "Henüz kesin bir suç belirtisi yok.",
      "choices": [
        {
          "text": "Hemen müdahale et",
          "score": -5,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Kameradan kişiyi takip et",
          "score": 15,
          "reputation": 5,
          "stress": 3,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "İhbarı görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Zemin Kat",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Bir mağaza çalışanı, bir müşterinin ürünleri uzun süredir incelediğini bildiriyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Çocuk Kayboldu",
      "description": "Bir aile 7 yaşındaki çocuklarını bulamadıklarını söylüyor.",
      "hint": "Önce son görülen yeri ve zamanı öğren.",
      "choices": [
        {
          "text": "Aileden ayrıntılı bilgi al ve ekiplere bildir",
          "score": 15,
          "reputation": 8,
          "stress": 4,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Bütün AVM'yi boşalt",
          "score": -10,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Ailenin kendi başına aramasını bekle",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Yemek Katı",
      "icon": "🧒",
      "camera": {
        "channels": [
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Bir aile 7 yaşındaki çocuklarını bulamadıklarını söylüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kavga İhbarı",
      "description": "Yemek katından yüksek sesli tartışma bildiriliyor.",
      "hint": "Durumun boyutunu anlamadan tek başına müdahale etme.",
      "choices": [
        {
          "text": "Tek başına koşarak müdahale et",
          "score": -5,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Konumu doğrula ve destek iste",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Telsizi kapat",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Otopark",
      "icon": "⚔️",
      "camera": {
        "channels": [
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Yemek katından yüksek sesli tartışma bildiriliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yangın Alarmı",
      "description": "B blokta yangın alarmı devreye giriyor.",
      "hint": "Alarmı otomatik olarak yanlış kabul etme.",
      "choices": [
        {
          "text": "Alarm bölgesini kontrol et ve prosedürü başlat",
          "score": 25,
          "reputation": 10,
          "stress": 8,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Alarmı kapat",
          "score": -25,
          "reputation": -20,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -30,
          "reputation": -20,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Teknik Koridor",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "B blokta yangın alarmı devreye giriyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Şüpheli Çanta",
      "description": "Bir bankın altında sahipsiz bir çanta bulundu.",
      "hint": "Merak edip çantayı açmak iyi fikir olmayabilir.",
      "choices": [
        {
          "text": "Çantayı aç",
          "score": -30,
          "reputation": -20,
          "stress": 20,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Alanı güvenli tut ve prosedüre göre bildir",
          "score": 25,
          "reputation": 12,
          "stress": 8,
          "money": 50,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Çantayı başka yere taşı",
          "score": -15,
          "reputation": -10,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Mağaza Caddesi",
      "icon": "🎒",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Bir bankın altında sahipsiz bir çanta bulundu.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Asansörde Mahsur Kalma",
      "description": "Bir kişi asansörde mahsur kaldığını bildiriyor.",
      "hint": "Teknik müdahaleyi yetkili ekibe bırak.",
      "choices": [
        {
          "text": "Kapıyı kendin açmaya çalış",
          "score": -15,
          "reputation": -10,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Kişiyle iletişim kurup teknik ekibi çağır",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "İhbarı önemseme",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Kasa Bölgesi",
      "icon": "🛗",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Bir kişi asansörde mahsur kaldığını bildiriyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kamera Arızası",
      "description": "Bir koridordaki kamera görüntü vermiyor.",
      "hint": "Kör nokta oluşması önemli.",
      "choices": [
        {
          "text": "Arızayı kayıt altına alıp amire bildir",
          "score": 15,
          "reputation": 7,
          "stress": 3,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Önemli değil deyip geç",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Kamerayı kendin sök",
          "score": -15,
          "reputation": -10,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Zemin Kat",
      "icon": "📷",
      "camera": {
        "channels": [
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Bir koridordaki kamera görüntü vermiyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Mağaza Kapısı",
      "description": "Kapanış sonrası bir mağazanın kapısının açık olduğu görülüyor.",
      "hint": "Önce durumu doğrula.",
      "choices": [
        {
          "text": "Mağaza sorumlusuna ulaş ve durumu kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kapıyı zorla kapat",
          "score": -10,
          "reputation": -8,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Yemek Katı",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Kapanış sonrası bir mağazanın kapısının açık olduğu görülüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kalabalık Artıyor",
      "description": "Etkinlik alanında beklenenden fazla kalabalık oluşuyor.",
      "hint": "Kalabalık yönetimi erken yapılırsa sorun büyümeden çözülebilir.",
      "choices": [
        {
          "text": "Alanı gözlemleyip destek talep et",
          "score": 20,
          "reputation": 8,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Herkesi bağırarak dağıt",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiç müdahale etme",
          "score": -15,
          "reputation": -10,
          "stress": 3,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Otopark",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Etkinlik alanında beklenenden fazla kalabalık oluşuyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Kapanış Kontrolü",
      "description": "AVM kapanışına yakın bir koridorda ışıklar hâlâ açık ve hareket sesi var.",
      "hint": "Kapanış kontrollerinde acele etme; önce doğrula.",
      "choices": [
        {
          "text": "Bölgeyi kontrol edip kapanış ekibiyle koordinasyon kur",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Işıkları kapatıp hemen git",
          "score": -10,
          "reputation": -8,
          "stress": 6,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Kontrolü atla",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Teknik Koridor",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "AVM kapanışına yakın bir koridorda ışıklar hâlâ açık ve hareket sesi var.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Hırsızlık Şüphesi",
      "description": "Kasa bölgesinde bir müşterinin ürünü çantasına koyduğu iddia ediliyor.",
      "hint": "Kanıt olmadan suçlama yapma; kamera ve prosedür önemli.",
      "choices": [
        {
          "text": "Kamera kaydını kontrol edip prosedüre göre ilerle",
          "score": 22,
          "reputation": 10,
          "stress": 5,
          "money": 35,
          "correct": true,
          "message": "Kanıt temelli ilerledin."
        },
        {
          "text": "Müşteriyi hemen yakala ve suçla",
          "score": -15,
          "reputation": -12,
          "stress": 14,
          "money": 0,
          "correct": false,
          "message": "Acele suçlama sorunu büyüttü."
        },
        {
          "text": "İhbarı yok say",
          "score": -12,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhbarı yok saymak risk bıraktı."
        }
      ],
      "zone": "Mağaza Caddesi",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Kasa bölgesinde bir müşterinin ürünü çantasına koyduğu iddia ediliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Acil Anons",
      "description": "Anons sisteminden belirsiz bir acil çağrı duyuluyor.",
      "hint": "Anonsu doğrula, panik yaratma.",
      "choices": [
        {
          "text": "Kaynağı doğrula ve ilgili birimleri bilgilendir",
          "score": 20,
          "reputation": 9,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Kontrollü doğrulama yaptın."
        },
        {
          "text": "Herkesi tahliye et diye bağır",
          "score": -12,
          "reputation": -10,
          "stress": 16,
          "money": 0,
          "correct": false,
          "message": "Panik yaratmak yanlıştı."
        },
        {
          "text": "Anonsu önemseme",
          "score": -18,
          "reputation": -14,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Acil anonsu yok saymak tehlikeliydi."
        }
      ],
      "zone": "Kasa Bölgesi",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Anons sisteminden belirsiz bir acil çağrı duyuluyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Personel Giriş Kartı",
      "description": "Bir personelin kartı okutmuyor ve tartışma çıkıyor.",
      "hint": "Kimlik doğrulaması yap, tartışmaya girme.",
      "choices": [
        {
          "text": "Kimlik ve yetkiyi sakin biçimde doğrula",
          "score": 18,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Sakin doğrulama işe yaradı."
        },
        {
          "text": "Kapıyı zorla açtır",
          "score": -8,
          "reputation": -6,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Kuralları esnetmek sorun yaratır."
        },
        {
          "text": "Tartışmaya dahil ol",
          "score": -12,
          "reputation": -10,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Tartışmaya girmek profesyonel değildi."
        }
      ],
      "zone": "Zemin Kat",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Bir personelin kartı okutmuyor ve tartışma çıkıyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Otopark Kavgası",
      "description": "Otoparkta iki sürücü arasında tartışma büyüyor.",
      "hint": "Destek iste, güvenli mesafe koru.",
      "choices": [
        {
          "text": "Konumu bildirip destekle birlikte yaklaş",
          "score": 22,
          "reputation": 10,
          "stress": 7,
          "money": 35,
          "correct": true,
          "message": "Destekli müdahale doğru oldu."
        },
        {
          "text": "Tek başına araya gir",
          "score": -10,
          "reputation": -6,
          "stress": 16,
          "money": 0,
          "correct": false,
          "message": "Tek başına araya girmek riskliydi."
        },
        {
          "text": "Görmezden gel",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Kavga görmezden gelinmemeliydi."
        }
      ],
      "zone": "Yemek Katı",
      "icon": "⚔️",
      "camera": {
        "channels": [
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Otoparkta iki sürücü arasında tartışma büyüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Teknik Oda Kapısı",
      "description": "Teknik odanın kapısı aralık duruyor.",
      "hint": "Yetkili personel var mı kontrol et.",
      "choices": [
        {
          "text": "Yetkiliyi doğrula ve durumu kaydet",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Yetki kontrolü yapıldı."
        },
        {
          "text": "Kapıyı kilitleyip git",
          "score": -5,
          "reputation": -4,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "Kayıtsız kapatmak yetersiz kaldı."
        },
        {
          "text": "İçeri tek başına gir",
          "score": -12,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz giriş prosedüre aykırı."
        }
      ],
      "zone": "Otopark",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-03",
            "label": "Otopark B1",
            "feed": "Teknik odanın kapısı aralık duruyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gölge Takip",
      "description": "Önceki vardiyalarda görülen şüpheli kişi yine aynı koridorda. Bu kez elinde bir çanta var.",
      "hint": "Bu bir seri olay olabilir. Acele etme, prosedür ve kayıt önemli.",
      "zone": "Zemin Kat",
      "icon": "🕵️",
      "story": true,
      "storyId": "shadow_1",
      "timed": true,
      "timeLimit": 25,
      "choices": [
        {
          "text": "Kameradan takip et, destek iste ve kayda al",
          "score": 30,
          "reputation": 12,
          "stress": 6,
          "money": 50,
          "correct": true,
          "message": "Seri şüpheli kayıt altına alındı.",
          "storyFlag": "shadow_tracked"
        },
        {
          "text": "Hemen müdahale et",
          "score": -5,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele müdahale iz kaybettirdi."
        },
        {
          "text": "Görmezden gel",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Seri tehdit büyüdü.",
          "storyFlag": "shadow_ignored"
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-04",
            "label": "Teknik Koridor",
            "feed": "Önceki vardiyalarda görülen şüpheli kişi yine aynı koridorda. Bu kez elinde bir çanta var.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-01",
            "label": "Zemin Ana Koridor",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-02",
            "label": "Yemek Katı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kapanış sonrası mağaza ışığı",
      "description": "Kapanış sonrası bir mağazada ışık ve hareket benzeri görüntü var.",
      "hint": "Doğrula, tek başına zorlama.",
      "zone": "Mağaza Caddesi",
      "icon": "🌙",
      "shiftType": "night",
      "choices": [
        {
          "text": "Kamera/kontrol ile doğrula, destekle kontrol et",
          "score": 17,
          "reputation": 8,
          "stress": 5,
          "money": 28,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Kapıyı kırarak gir",
          "score": -16,
          "reputation": -12,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Yoksay",
          "score": -12,
          "reputation": -8,
          "stress": 3,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Mağaza Caddesi",
            "feed": "Kapanış sonrası bir mağazada ışık ve hareket benzeri görüntü var.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yan alan",
            "feed": "Olağan trafik.",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ],
  "Hastane": [
    {
      "title": "Acil Serviste Tartışma",
      "description": "Hasta yakını ile personel arasında tartışma büyüyor.",
      "hint": "Öncelik ortamı sakinleştirmek.",
      "choices": [
        {
          "text": "Taraflardan birini hemen dışarı çıkar",
          "score": -5,
          "reputation": -5,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Durumu gözlemleyip gerektiğinde destek iste",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tartışmaya dahil ol",
          "score": -15,
          "reputation": -10,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Acil Servis",
      "icon": "⚔️",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Hasta yakını ile personel arasında tartışma büyüyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kayıp Hasta",
      "description": "Yakını, yaşlı bir hastanın odasında olmadığını bildiriyor.",
      "hint": "Bilgileri hızlıca toplamak önemli.",
      "choices": [
        {
          "text": "Hastanın son görüldüğü yeri öğren ve ekiplere haber ver",
          "score": 20,
          "reputation": 10,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kendi başına hastaneyi kapat",
          "score": -20,
          "reputation": -10,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Bir süre bekle",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Koridor B",
      "icon": "🧒",
      "camera": {
        "channels": [
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Yakını, yaşlı bir hastanın odasında olmadığını bildiriyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yetkisiz Giriş",
      "description": "Personel olmayan bir kişi kısıtlı alana girmeye çalışıyor.",
      "hint": "Kimlik ve yetki kontrolü yap.",
      "choices": [
        {
          "text": "Yetkisini doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Bağırarak uzaklaştır",
          "score": -5,
          "reputation": -5,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "İlaç Deposu",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Personel olmayan bir kişi kısıtlı alana girmeye çalışıyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Şüpheli Paket",
      "description": "Koridorda personelin tanımadığı bir paket bulunuyor.",
      "hint": "Pakete dokunmadan prosedürü uygula.",
      "choices": [
        {
          "text": "Paketi aç",
          "score": -30,
          "reputation": -20,
          "stress": 20,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Alanı kontrol altında tutup yetkililere bildir",
          "score": 25,
          "reputation": 12,
          "stress": 8,
          "money": 50,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Paketi depoya götür",
          "score": -20,
          "reputation": -15,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Ameliyathane Yakını",
      "icon": "🎒",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Koridorda personelin tanımadığı bir paket bulunuyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "İlaç Deposu",
      "description": "İlaç deposunun kapısında açık bir giriş görülüyor.",
      "hint": "Önce yetkili personeli doğrula.",
      "choices": [
        {
          "text": "Depoya tek başına gir",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Yetkili personelle durumu doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kapıyı açık bırak",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Giriş Holü",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "İlaç deposunun kapısında açık bir giriş görülüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Asansör Arızası",
      "description": "Hasta taşıyan asansörde teknik arıza bildiriliyor.",
      "hint": "Teknik ekiple koordinasyon önemli.",
      "choices": [
        {
          "text": "Teknik ekibi çağır ve içeridekilerle iletişim kur",
          "score": 20,
          "reputation": 10,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Asansörü kendin tamir et",
          "score": -20,
          "reputation": -10,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "İhbarı kapat",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Asansör Önü",
      "icon": "🛗",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Hasta taşıyan asansörde teknik arıza bildiriliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Acil Çıkış",
      "description": "Acil çıkış kapısının önünde malzeme birikmiş.",
      "hint": "Kaçış yollarının açık kalması önemli.",
      "choices": [
        {
          "text": "Durumu kayıt altına alıp ilgili birime bildir",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Malzemeleri kendin taşı",
          "score": 5,
          "reputation": 0,
          "stress": 10,
          "money": 10,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Önemli değil deyip geç",
          "score": -20,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Acil Servis",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Acil çıkış kapısının önünde malzeme birikmiş.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Ziyaretçi Kimliği",
      "description": "Bir ziyaretçi giriş prosedürüne uymak istemiyor.",
      "hint": "Kural herkes için aynı uygulanmalı.",
      "choices": [
        {
          "text": "Prosedürü sakin biçimde açıkla",
          "score": 15,
          "reputation": 7,
          "stress": 3,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tartışmaya gir",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Kuralları görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Koridor B",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Bir ziyaretçi giriş prosedürüne uymak istemiyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Koridoru",
      "description": "Gece vardiyasında koridorda hareket sesi duyuluyor.",
      "hint": "Önce kamera ve telsiz imkanlarını kullan.",
      "choices": [
        {
          "text": "Kameraları kontrol edip konumu doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına karanlık koridora koş",
          "score": -10,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Sesi tamamen görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "İlaç Deposu",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Gece vardiyasında koridorda hareket sesi duyuluyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Personel Kavgası",
      "description": "İki personel arasında fiziksel tartışma ihtimali bildiriliyor.",
      "hint": "Güvenli mesafeyi koru ve destek koordinasyonu yap.",
      "choices": [
        {
          "text": "Durumu doğrula ve destek iste",
          "score": 20,
          "reputation": 10,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına fiziksel müdahale et",
          "score": -10,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Olayı kayda alma",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Ameliyathane Yakını",
      "icon": "⚔️",
      "camera": {
        "channels": [
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "İki personel arasında fiziksel tartışma ihtimali bildiriliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kan Alma Birimi",
      "description": "Kan alma sırasında hasta yakını yüksek sesle personeli tehdit ediyor.",
      "hint": "Önce ortamı sakinleştir, gerekirse destek al.",
      "choices": [
        {
          "text": "Mesafeyi koruyup sakinleştir ve destek iste",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Sakin ve destekli yaklaşım doğru."
        },
        {
          "text": "Yakını zorla dışarı çıkar",
          "score": -8,
          "reputation": -6,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Zor kullanmak gerilimi artırdı."
        },
        {
          "text": "Hiç müdahale etme",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Tehdidi yok saymak riskliydi."
        }
      ],
      "zone": "Giriş Holü",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Kan alma sırasında hasta yakını yüksek sesle personeli tehdit ediyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Ameliyathane Koridoru",
      "description": "Ameliyathane koridorunda yetkisiz bir kişi dolaşıyor.",
      "hint": "Kimlik ve yetki kontrolü şart.",
      "choices": [
        {
          "text": "Kimliğini ve yetkisini kontrol et",
          "score": 22,
          "reputation": 10,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Yetki kontrolü yapıldı."
        },
        {
          "text": "Bağırarak uzaklaştır",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Sert müdahale gereksizdi."
        },
        {
          "text": "Görmezden gel",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Kısıtlı alanda ihmal kabul edilemez."
        }
      ],
      "zone": "Asansör Önü",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Ameliyathane koridorunda yetkisiz bir kişi dolaşıyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Nöbetçi Hemşire Yardımı",
      "description": "Hemşire, agresif bir hastayı sakinleştirmek için destek istiyor.",
      "hint": "Sağlık ekibiyle koordineli ol.",
      "choices": [
        {
          "text": "Ekiple koordineli destek ver",
          "score": 20,
          "reputation": 9,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Koordineli destek doğru."
        },
        {
          "text": "Hastaya tek başına fiziksel müdahale et",
          "score": -12,
          "reputation": -8,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Tek başına fiziksel müdahale riskli."
        },
        {
          "text": "Destek vermeyi reddet",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Yardım talebini reddetmek yanlıştı."
        }
      ],
      "zone": "Acil Servis",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Hemşire, agresif bir hastayı sakinleştirmek için destek istiyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yangın Merdiveni",
      "description": "Yangın merdiveni malzemelerle kapatılmış.",
      "hint": "Kaçış yolları her zaman açık olmalı.",
      "choices": [
        {
          "text": "Malzemeleri kaldırttırıp durumu raporla",
          "score": 22,
          "reputation": 10,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Kaçış yolu açıldı ve raporlandı."
        },
        {
          "text": "Sadece fotoğraf çekip geç",
          "score": -5,
          "reputation": -5,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Sadece kayıt yetmez, engel kalkmalı."
        },
        {
          "text": "Önemseme",
          "score": -22,
          "reputation": -16,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Yangın yolu engeli kritik ihmal."
        }
      ],
      "zone": "Koridor B",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Yangın merdiveni malzemelerle kapatılmış.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Ziyaretçi",
      "description": "Mesai dışı saatte ziyaretçi içeri alınmak istiyor.",
      "hint": "Ziyaret kurallarını uygula.",
      "choices": [
        {
          "text": "Kuralları açıkla ve prosedüre uy",
          "score": 18,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Kurallar doğru uygulandı."
        },
        {
          "text": "İstisnai olarak içeri al",
          "score": -10,
          "reputation": -8,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Kural istisnası risk doğurdu."
        },
        {
          "text": "Tartışmaya gir",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Tartışma durumu kötüleştirdi."
        }
      ],
      "zone": "İlaç Deposu",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-H3",
            "label": "İlaç Deposu Önü",
            "feed": "Mesai dışı saatte ziyaretçi içeri alınmak istiyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Ziyaretçisi",
      "description": "Daha önce uyarılan yetkisiz kişi, bu kez personel önlüğüyle koridorda görülüyor.",
      "hint": "Kimlik doğrulaması şart. İçeriden sızıntı ihtimali var.",
      "zone": "Koridor B",
      "icon": "🕵️",
      "story": true,
      "storyId": "infiltrator_1",
      "timed": true,
      "timeLimit": 22,
      "choices": [
        {
          "text": "Kimlik ve yetkiyi doğrula, güvenliğe bildir",
          "score": 28,
          "reputation": 12,
          "stress": 7,
          "money": 45,
          "correct": true,
          "message": "İç sızıntı girişimi engellendi.",
          "storyFlag": "infiltrator_caught"
        },
        {
          "text": "Önlük var diye geçir",
          "score": -20,
          "reputation": -15,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz kişi içeri sızdı.",
          "storyFlag": "infiltrator_passed"
        },
        {
          "text": "Tek başına fiziksel müdahale et",
          "score": -8,
          "reputation": -5,
          "stress": 16,
          "money": 0,
          "correct": false,
          "message": "Kontrolsüz müdahale riskliydi."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-H4",
            "label": "Asansör Holü",
            "feed": "Daha önce uyarılan yetkisiz kişi, bu kez personel önlüğüyle koridorda görülüyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-H1",
            "label": "Acil Giriş",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-H2",
            "label": "Koridor B",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece vardiya ziyaretçi saati",
      "description": "Ziyaret saati dışında bir grup hasta yakını içeri alınmak istiyor.",
      "hint": "Kurallar net; istisna kontrollü olur.",
      "zone": "Giriş Holü",
      "icon": "🌙",
      "shiftType": "night",
      "choices": [
        {
          "text": "Kuralı anlat, yetkili onay olmadan alma",
          "score": 16,
          "reputation": 8,
          "stress": 4,
          "money": 24,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Hepini içeri al",
          "score": -14,
          "reputation": -10,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Kapıda tartışmayı uzat",
          "score": -8,
          "reputation": -6,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Gerilim."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Giriş Holü",
            "feed": "Ziyaret saati dışında bir grup hasta yakını içeri alınmak istiyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yan alan",
            "feed": "Olağan trafik.",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ],
  "Fabrika": [
    {
      "title": "Yetkisiz Bölge",
      "description": "Bir çalışan yetkisi olmayan üretim alanında görülüyor.",
      "hint": "Kimlik ve görev bilgisini doğrula.",
      "choices": [
        {
          "text": "Yetkisini kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Hemen bağırarak çıkar",
          "score": -5,
          "reputation": -5,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Üretim Hattı",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Bir çalışan yetkisi olmayan üretim alanında görülüyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Makine Alarmı",
      "description": "Üretim hattındaki bir makineden alarm sesi geliyor.",
      "hint": "Teknik alarmı güvenlik olayı olarak ciddiye al.",
      "choices": [
        {
          "text": "Bölgeyi kontrol edip teknik ekibe bildir",
          "score": 25,
          "reputation": 10,
          "stress": 8,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Alarmı kapat",
          "score": -25,
          "reputation": -20,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -25,
          "reputation": -15,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Depo",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Üretim hattındaki bir makineden alarm sesi geliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kayıp Ekipman",
      "description": "Depoda bir ekipmanın yerinde olmadığı fark ediliyor.",
      "hint": "Önce kayıtları kontrol et.",
      "choices": [
        {
          "text": "Kayıtları ve kamera görüntülerini kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Hemen bir çalışanı suçla",
          "score": -15,
          "reputation": -12,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Olayı kapat",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Yakıt Alanı",
      "icon": "🧒",
      "camera": {
        "channels": [
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Depoda bir ekipmanın yerinde olmadığı fark ediliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yakıt Alanı",
      "description": "Yakıt alanında güvenlik prosedürüne aykırı bir durum görülüyor.",
      "hint": "Riskli bölgelere yaklaşırken prosedür önemli.",
      "choices": [
        {
          "text": "Alanı güvenli tutup yetkili ekibe haber ver",
          "score": 25,
          "reputation": 12,
          "stress": 8,
          "money": 50,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına müdahale et",
          "score": -15,
          "reputation": -10,
          "stress": 18,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Görmezden gel",
          "score": -30,
          "reputation": -20,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Giriş Kapısı",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Yakıt alanında güvenlik prosedürüne aykırı bir durum görülüyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Sevkiyatı",
      "description": "Gece gelen sevkiyat aracının evraklarında belirsizlik var.",
      "hint": "Evrakı doğrulamadan geçiş verme.",
      "choices": [
        {
          "text": "Evrakları ve yetkiyi doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Şoför ne diyorsa kabul et",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Aracı zorla geri gönder",
          "score": -5,
          "reputation": -5,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Kamera Odası",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Gece gelen sevkiyat aracının evraklarında belirsizlik var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "İş Kazası İhbarı",
      "description": "Üretim alanında bir çalışanın yaralandığı bildiriliyor.",
      "hint": "Güvenliği sağla ve ilgili ekipleri haberdar et.",
      "choices": [
        {
          "text": "Alanı güvenli tutup acil desteği haber ver",
          "score": 25,
          "reputation": 12,
          "stress": 10,
          "money": 50,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kazayı saklamaya çalış",
          "score": -30,
          "reputation": -25,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -25,
          "reputation": -20,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Çatı Erişimi",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Üretim alanında bir çalışanın yaralandığı bildiriliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kamera Kör Noktası",
      "description": "Üretim alanındaki önemli bir kameranın görüntüsü kesiliyor.",
      "hint": "Alternatif kontrol yöntemi oluştur.",
      "choices": [
        {
          "text": "Arızayı raporla ve bölgeyi daha sık kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kamerayı kendin tamir et",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Sorunu önemseme",
          "score": -20,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Üretim Hattı",
      "icon": "📷",
      "camera": {
        "channels": [
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Üretim alanındaki önemli bir kameranın görüntüsü kesiliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Depo Kapısı",
      "description": "Depo kapısının açık olduğu fark ediliyor.",
      "hint": "Önce yetkili personel olup olmadığını kontrol et.",
      "choices": [
        {
          "text": "Yetkiliyi doğrula ve durumu kaydet",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kapıyı kilitle ve git",
          "score": -5,
          "reputation": -5,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Görmezden gel",
          "score": -20,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Depo",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Depo kapısının açık olduğu fark ediliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Çalışan Giriş Kartı",
      "description": "Bir personel kartının başka biri tarafından kullanıldığı şüphesi var.",
      "hint": "Şüpheyi doğrulamadan suçlama yapma.",
      "choices": [
        {
          "text": "Kayıt ve kimlik bilgilerini kontrol et",
          "score": 25,
          "reputation": 10,
          "stress": 5,
          "money": 35,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kişiyi hemen suçla",
          "score": -10,
          "reputation": -10,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Kart kullanımını önemseme",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Yakıt Alanı",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Bir personel kartının başka biri tarafından kullanıldığı şüphesi var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Elektrik Kesintisi",
      "description": "Fabrikanın bir bölümünde elektrik kesiliyor.",
      "hint": "Karanlık alanlar ve acil çıkışlar öncelikli.",
      "choices": [
        {
          "text": "Bölgeyi kontrol edip ilgili ekipleri haberdar et",
          "score": 25,
          "reputation": 10,
          "stress": 8,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Elektrik panosuna kendin müdahale et",
          "score": -20,
          "reputation": -15,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Kesintiyi görmezden gel",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Giriş Kapısı",
      "icon": "⚡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Fabrikanın bir bölümünde elektrik kesiliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kimyasal Sızıntı İhbarı",
      "description": "Depo yakınında kimyasal koku ve sızıntı şüphesi bildiriliyor.",
      "hint": "Alana tek başına girme, prosedürü uygula.",
      "choices": [
        {
          "text": "Bölgeyi güvenli tutup uzman ekibe bildir",
          "score": 28,
          "reputation": 14,
          "stress": 10,
          "money": 55,
          "correct": true,
          "message": "Prosedüre uygun kimyasal müdahale."
        },
        {
          "text": "Sızıntıyı kendin kapatmaya çalış",
          "score": -20,
          "reputation": -15,
          "stress": 20,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz kimyasal müdahale tehlikeli."
        },
        {
          "text": "İhbarı kapat",
          "score": -30,
          "reputation": -22,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Kimyasal ihbarı yok saymak kritik hata."
        }
      ],
      "zone": "Kamera Odası",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Depo yakınında kimyasal koku ve sızıntı şüphesi bildiriliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Vardiya Değişimi",
      "description": "Vardiya değişiminde giriş-çıkışta karışıklık var.",
      "hint": "Kart ve kimlik kontrolünü aksatma.",
      "choices": [
        {
          "text": "Kart ve kimlik kontrolünü sıkılaştır",
          "score": 18,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Kontroller güçlendirildi."
        },
        {
          "text": "Kalabalığı serbest bırak",
          "score": -12,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Kontrolsüz geçiş risk yarattı."
        },
        {
          "text": "Tartışarak dağıt",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Sert yaklaşım gerilim üretti."
        }
      ],
      "zone": "Çatı Erişimi",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Vardiya değişiminde giriş-çıkışta karışıklık var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Forklift Uyarısı",
      "description": "Forklift sürücüsüz ve motoru çalışır halde görülüyor.",
      "hint": "İş güvenliği ihlali ciddiye alınmalı.",
      "choices": [
        {
          "text": "Alanı güvenli tutup ilgili birime bildir",
          "score": 24,
          "reputation": 12,
          "stress": 6,
          "money": 40,
          "correct": true,
          "message": "İş güvenliği doğru yönetildi."
        },
        {
          "text": "Forklifti kendin hareket ettir",
          "score": -15,
          "reputation": -10,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz araç kullanımı yanlış."
        },
        {
          "text": "Görmezden gel",
          "score": -22,
          "reputation": -16,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhmal ağır sonuç doğurabilirdi."
        }
      ],
      "zone": "Üretim Hattı",
      "icon": "🚗",
      "camera": {
        "channels": [
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Forklift sürücüsüz ve motoru çalışır halde görülüyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Çatı Erişimi",
      "description": "Çatı kapısının açık olduğu fark ediliyor.",
      "hint": "Yüksek riskli alanları kayıtsız bırakma.",
      "choices": [
        {
          "text": "Kapıyı kontrol edip yetkiliyi doğrula ve kaydet",
          "score": 20,
          "reputation": 9,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Çatı erişimi kontrol altına alındı."
        },
        {
          "text": "Kapıyı kapatıp unut",
          "score": -5,
          "reputation": -4,
          "stress": 3,
          "money": 0,
          "correct": false,
          "message": "Kayıtsız kapatmak yetersiz."
        },
        {
          "text": "Yok say",
          "score": -18,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Açık çatı kapısı ihmal edildi."
        }
      ],
      "zone": "Depo",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Çatı kapısının açık olduğu fark ediliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Alarm Testi",
      "description": "Gece saatinde alarm testinin plan dışı çalıştığı bildiriliyor.",
      "hint": "Test mi gerçek mi ayır; prosedürü başlat.",
      "choices": [
        {
          "text": "Alarmı doğrula ve kontrol odasıyla teyitleş",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Doğrulama doğru yapıldı."
        },
        {
          "text": "Alarmı kapat",
          "score": -25,
          "reputation": -18,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Onaysız kapatmak prosedür ihlali."
        },
        {
          "text": "Önemseme",
          "score": -20,
          "reputation": -14,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Alarmı yok saymak tehlikeli."
        }
      ],
      "zone": "Yakıt Alanı",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-F3",
            "label": "Yakıt Alanı",
            "feed": "Gece saatinde alarm testinin plan dışı çalıştığı bildiriliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Sevkiyat Anomalisi",
      "description": "Önceki vardiyalarda şüpheli bulunan sevkiyat rotası yine belgesiz araçla geliyor.",
      "hint": "Bu bir düzenli kaçak sevkiyat denemesi olabilir.",
      "zone": "Giriş Kapısı",
      "icon": "🕵️",
      "story": true,
      "storyId": "cargo_1",
      "timed": true,
      "timeLimit": 22,
      "choices": [
        {
          "text": "Evrakı reddet, amiri ve kamerayı devreye al",
          "score": 30,
          "reputation": 14,
          "stress": 8,
          "money": 55,
          "correct": true,
          "message": "Kaçak sevkiyat zinciri kesildi.",
          "storyFlag": "cargo_blocked"
        },
        {
          "text": "Şoföre güvenip geçir",
          "score": -25,
          "reputation": -18,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "Belgesiz araç içeri alındı.",
          "storyFlag": "cargo_passed"
        },
        {
          "text": "Aracı tek başına aramaya kalk",
          "score": -10,
          "reputation": -8,
          "stress": 14,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz arama prosedür dışı."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-F4",
            "label": "Giriş Kontrol",
            "feed": "Önceki vardiyalarda şüpheli bulunan sevkiyat rotası yine belgesiz araçla geliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-F1",
            "label": "Üretim Hattı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-F2",
            "label": "Depo Kapısı",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece yakıt alanı hareketi",
      "description": "Gece görüşünde yakıt alanı yakınında beklenmeyen hareket.",
      "hint": "Mesafe, bildirim, doğrulama.",
      "zone": "Yakıt Alanı",
      "icon": "⛽",
      "shiftType": "night",
      "choices": [
        {
          "text": "Güvenli mesafe + bildirim + kamera teyidi",
          "score": 18,
          "reputation": 9,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Tek başına alana dal",
          "score": -16,
          "reputation": -10,
          "stress": 14,
          "money": 0,
          "correct": false,
          "message": "Riskli."
        },
        {
          "text": "Kayıt düşmeden bırak",
          "score": -12,
          "reputation": -8,
          "stress": 3,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Yakıt Alanı",
            "feed": "Gece görüşünde yakıt alanı yakınında beklenmeyen hareket.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yan alan",
            "feed": "Olağan trafik.",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ],
  "Site": [
    {
      "title": "Apartman Girişi",
      "description": "Gece saatinde tanımadığın biri apartman girişinde bekliyor.",
      "hint": "Önce kişiyi gözlemle ve durumunu anlamaya çalış.",
      "choices": [
        {
          "text": "Kişinin kim olduğunu ve kimi beklediğini sor",
          "score": 15,
          "reputation": 6,
          "stress": 5,
          "money": 20,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Hemen fiziksel olarak uzaklaştır",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Hiç ilgilenme",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Site Girişi",
      "icon": "🪪",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Gece saatinde tanımadığın biri apartman girişinde bekliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gürültü Şikâyeti",
      "description": "Bir daireden yüksek sesli müzik şikâyeti geliyor.",
      "hint": "Küçük sorunları gereksiz yere büyütme.",
      "choices": [
        {
          "text": "Durumu sakin biçimde kontrol et",
          "score": 15,
          "reputation": 6,
          "stress": 3,
          "money": 15,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kapıyı sert şekilde yumrukla",
          "score": -10,
          "reputation": -10,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Şikâyeti tamamen yok say",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Otopark",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Bir daireden yüksek sesli müzik şikâyeti geliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Şüpheli Araç",
      "description": "Otoparkta uzun süredir duran bir araç dikkat çekiyor.",
      "hint": "Tek başına varsayım yapma.",
      "choices": [
        {
          "text": "Kamera ve araç kayıtlarını kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Aracın camını kontrol et",
          "score": -10,
          "reputation": -5,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Görmezden gel",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Çocuk Parkı",
      "icon": "🚗",
      "camera": {
        "channels": [
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Otoparkta uzun süredir duran bir araç dikkat çekiyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Sahipsiz Bisiklet",
      "description": "Otoparkta günlerdir duran sahipsiz bir bisiklet fark ediliyor.",
      "hint": "Önce kayıt ve kamera bilgisine bak.",
      "choices": [
        {
          "text": "Durumu kayıt altına al ve araştır",
          "score": 15,
          "reputation": 5,
          "stress": 3,
          "money": 15,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Bisikleti depoya götür",
          "score": -5,
          "reputation": -5,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Yok say",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Ortak Depo",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Otoparkta günlerdir duran sahipsiz bir bisiklet fark ediliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Çocuk Oyun Alanı",
      "description": "Çocuk oyun alanında bir çocuğun yalnız olduğu bildiriliyor.",
      "hint": "Önce çevredeki yetişkinleri ve bilgileri kontrol et.",
      "choices": [
        {
          "text": "Çocuğu güvenli alanda tutup ailesini araştır",
          "score": 20,
          "reputation": 10,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Çocuğu kendi başına eve götür",
          "score": -25,
          "reputation": -20,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Durumu önemseme",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Asansör",
      "icon": "🧒",
      "camera": {
        "channels": [
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Çocuk oyun alanında bir çocuğun yalnız olduğu bildiriliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yangın Alarmı",
      "description": "Site ortak alanında alarm duyuluyor.",
      "hint": "Alarmı doğrula ama prosedürü atlama.",
      "choices": [
        {
          "text": "Alarm bölgesini kontrol edip gerekli bildirimi yap",
          "score": 25,
          "reputation": 10,
          "stress": 8,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Alarmı kapat",
          "score": -25,
          "reputation": -20,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -25,
          "reputation": -20,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Jeneratör Odası",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Site ortak alanında alarm duyuluyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Misafiri",
      "description": "Bir kişi gece saatinde siteye girmek istiyor.",
      "hint": "Ziyaretçi prosedürünü doğrula.",
      "choices": [
        {
          "text": "Kimi ziyaret ettiğini doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Hiç soru sormadan içeri al",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        },
        {
          "text": "Hemen tartışmaya başla",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        }
      ],
      "zone": "Site Girişi",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Bir kişi gece saatinde siteye girmek istiyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Asansör İhbarı",
      "description": "Bir sakin asansörden garip sesler geldiğini bildiriyor.",
      "hint": "Teknik arızaya güvenlik gözüyle yaklaş.",
      "choices": [
        {
          "text": "Teknik ekibe bildir ve alanı kontrol et",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Asansörü açmaya çalış",
          "score": -20,
          "reputation": -15,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "İhbarı kapat",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Otopark",
      "icon": "🛗",
      "camera": {
        "channels": [
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Bir sakin asansörden garip sesler geldiğini bildiriyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kamera Arızası",
      "description": "Site giriş kamerasının görüntüsü kesiliyor.",
      "hint": "Giriş güvenliği için alternatif kontrol düşün.",
      "choices": [
        {
          "text": "Arızayı bildirip girişte ek kontrol uygula",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kamerayı kendin sök",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Çocuk Parkı",
      "icon": "📷",
      "camera": {
        "channels": [
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Site giriş kamerasının görüntüsü kesiliyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kapı Açık",
      "description": "Gece saatinde ortak depo kapısının açık olduğu görülüyor.",
      "hint": "Yetki durumunu doğrulamadan suçlama yapma.",
      "choices": [
        {
          "text": "Yetkiliyi doğrula ve durumu kayıt altına al",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kapıyı kırarak kapat",
          "score": -20,
          "reputation": -15,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Görmezden gel",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Ortak Depo",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Gece saatinde ortak depo kapısının açık olduğu görülüyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Asansörde Mahsur",
      "description": "Bir sakin asansörde mahsur kaldığını bildiriyor.",
      "hint": "Teknik ekibe bırak, iletişimde kal.",
      "choices": [
        {
          "text": "Kişiyle iletişim kurup teknik ekibi çağır",
          "score": 22,
          "reputation": 10,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Doğru koordinasyon sağlandı."
        },
        {
          "text": "Kapıyı zorla aç",
          "score": -15,
          "reputation": -12,
          "stress": 14,
          "money": 0,
          "correct": false,
          "message": "Zorla açmak tehlikeliydi."
        },
        {
          "text": "İhbarı kapat",
          "score": -18,
          "reputation": -14,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Mahsur ihbarı yok sayılamaz."
        }
      ],
      "zone": "Asansör",
      "icon": "🛗",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Bir sakin asansörde mahsur kaldığını bildiriyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Su Baskını",
      "description": "Bodrumda su sızıntısı ve birikme var.",
      "hint": "Elektrik riskini düşün, ilgili birimleri çağır.",
      "choices": [
        {
          "text": "Alanı güvenli tutup teknik ekibe bildir",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Su baskını kontrollü yönetildi."
        },
        {
          "text": "Su vanasını rastgele kapat",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz müdahale riskliydi."
        },
        {
          "text": "Yok say",
          "score": -18,
          "reputation": -14,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Su baskını ihmal edilemez."
        }
      ],
      "zone": "Jeneratör Odası",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Bodrumda su sızıntısı ve birikme var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Evcil Hayvan Şikâyeti",
      "description": "Gece boyunca yüksek sesle havlayan köpek şikâyeti geliyor.",
      "hint": "Komşuluk kurallarını sakin uygula.",
      "choices": [
        {
          "text": "Durumu nazikçe kontrol edip uyarı yap",
          "score": 15,
          "reputation": 6,
          "stress": 3,
          "money": 15,
          "correct": true,
          "message": "Sakin uyarı yeterli oldu."
        },
        {
          "text": "Kapıyı yumrukla",
          "score": -12,
          "reputation": -10,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Sert yaklaşım gereksizdi."
        },
        {
          "text": "Şikâyeti sil",
          "score": -10,
          "reputation": -8,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Şikâyet kayıt altına alınmalıydı."
        }
      ],
      "zone": "Site Girişi",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Gece boyunca yüksek sesle havlayan köpek şikâyeti geliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Ortak Alan İhlali",
      "description": "Ortak alanda izinsiz tadilat yapıldığı görülüyor.",
      "hint": "Yönetim bilgilendirilmeli, çatışma büyütülmemeli.",
      "choices": [
        {
          "text": "Durumu kaydedip yönetime bildir",
          "score": 18,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Doğru bildirim yapıldı."
        },
        {
          "text": "Tadilatı zorla durdur",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Fiziksel müdahale gereksizdi."
        },
        {
          "text": "Görmezden gel",
          "score": -12,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhlal kayda geçmeliydi."
        }
      ],
      "zone": "Otopark",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Ortak alanda izinsiz tadilat yapıldığı görülüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Jeneratör Odası",
      "description": "Jeneratör odası kapısı açık ve içeride ses var.",
      "hint": "Teknik alanlara tek başına dalma.",
      "choices": [
        {
          "text": "Yetkili teknik personeli doğrula",
          "score": 20,
          "reputation": 9,
          "stress": 4,
          "money": 28,
          "correct": true,
          "message": "Yetki doğrulandı."
        },
        {
          "text": "Tek başına içeri gir",
          "score": -12,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Tek başına giriş riskli."
        },
        {
          "text": "Kapıyı kapatıp git",
          "score": -6,
          "reputation": -5,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Kontrolsüz kapatmak yetersiz."
        }
      ],
      "zone": "Çocuk Parkı",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-S3",
            "label": "Çocuk Parkı",
            "feed": "Jeneratör odası kapısı açık ve içeride ses var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Tanımadığın Komşu",
      "description": "Gece boyunca farklı bloklarda görülen kişi, bu kez depo anahtarıyla dolaşıyor.",
      "hint": "Anahtar yetkisi ve kimlik doğrulanmalı.",
      "zone": "Ortak Depo",
      "icon": "🕵️",
      "story": true,
      "storyId": "keys_1",
      "timed": true,
      "timeLimit": 20,
      "choices": [
        {
          "text": "Kimlik ve anahtar yetkisini doğrula",
          "score": 26,
          "reputation": 12,
          "stress": 5,
          "money": 40,
          "correct": true,
          "message": "Yetkisiz anahtar kullanımı engellendi.",
          "storyFlag": "keys_secured"
        },
        {
          "text": "Site sakini sanıp bırak",
          "score": -18,
          "reputation": -14,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz kişi serbest kaldı.",
          "storyFlag": "keys_lost"
        },
        {
          "text": "Anahtarı zorla al",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Sert müdahale şikâyete yol açtı."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-S4",
            "label": "Ortak Depo",
            "feed": "Gece boyunca farklı bloklarda görülen kişi, bu kez depo anahtarıyla dolaşıyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-S1",
            "label": "Site Girişi",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-S2",
            "label": "Otopark",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece gürültü şikâyeti",
      "description": "Gece yarısı daireden yüksek gürültü şikâyeti geliyor.",
      "hint": "Sakin iletişim, kayıt, gerekirse destek.",
      "zone": "Blok Girişi",
      "icon": "🔊",
      "shiftType": "night",
      "choices": [
        {
          "text": "Kapıyı usulüne göre kontrol et, uyarı/kayıt, gerekirse destek",
          "score": 15,
          "reputation": 7,
          "stress": 5,
          "money": 22,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Kapıyı yumrukla",
          "score": -14,
          "reputation": -12,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Şikâyeti yok say",
          "score": -10,
          "reputation": -8,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Blok Girişi",
            "feed": "Gece yarısı daireden yüksek gürültü şikâyeti geliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yan alan",
            "feed": "Olağan trafik.",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ],
  "Havalimanı": [
    {
      "title": "Sahipsiz Bagaj",
      "description": "Terminalde bir bagajın yanında kimse görünmüyor.",
      "hint": "Bagaja dokunma; alanı güvenli tut.",
      "choices": [
        {
          "text": "Bagajı aç",
          "score": -30,
          "reputation": -20,
          "stress": 20,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Alanı güvenli tutup prosedüre göre bildir",
          "score": 30,
          "reputation": 15,
          "stress": 10,
          "money": 50,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Bagajı başka yere taşı",
          "score": -20,
          "reputation": -15,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Terminal A",
      "icon": "🎒",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Terminalde bir bagajın yanında kimse görünmüyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kimlik Kontrolü",
      "description": "Bir yolcu kimlik kontrolünden kaçınmaya çalışıyor.",
      "hint": "Prosedürü sakin ve tutarlı uygula.",
      "choices": [
        {
          "text": "Kimlik ve geçiş yetkisini doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kişiyi bağırarak uzaklaştır",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Geçmesine izin ver",
          "score": -25,
          "reputation": -20,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Bagaj Bandı",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Bir yolcu kimlik kontrolünden kaçınmaya çalışıyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Terminal Kavgası",
      "description": "İki yolcu arasında tartışma büyüyor.",
      "hint": "Durumu büyütmeden destek koordinasyonu yap.",
      "choices": [
        {
          "text": "Konumu doğrula ve destek çağır",
          "score": 20,
          "reputation": 8,
          "stress": 6,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına fiziksel müdahale et",
          "score": -10,
          "reputation": -8,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Görmezden gel",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Pasaport Kuyruğu",
      "icon": "⚔️",
      "camera": {
        "channels": [
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "İki yolcu arasında tartışma büyüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Giriş Kartı",
      "description": "Yetkili bölgeye girmek isteyen kişinin kartında sorun var.",
      "hint": "Kart sorununu doğrulamadan geçiş verme.",
      "choices": [
        {
          "text": "Kartı ve yetki durumunu doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 3,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kişinin sözüne güven",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Kartı çöpe at",
          "score": -25,
          "reputation": -20,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "Kısıtlı Alan",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Yetkili bölgeye girmek isteyen kişinin kartında sorun var.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Çocuk Kayboldu",
      "description": "Bir yolcu çocuğunu bulamadığını bildiriyor.",
      "hint": "Son görülen konumu ve zamanı hızla belirle.",
      "choices": [
        {
          "text": "Bilgileri alıp ilgili ekiplere bildir",
          "score": 25,
          "reputation": 12,
          "stress": 6,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Ailenin kendisinin aramasını bekle",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Terminali tamamen kapat",
          "score": -10,
          "reputation": -5,
          "stress": 20,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        }
      ],
      "zone": "VIP Salon",
      "icon": "🧒",
      "camera": {
        "channels": [
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Bir yolcu çocuğunu bulamadığını bildiriyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Güvenlik Kamerası",
      "description": "Bir kontrol noktasındaki kamera görüntüsü kesiliyor.",
      "hint": "Kör nokta oluşmasını gecikmeden bildir.",
      "choices": [
        {
          "text": "Arızayı bildir ve alternatif kontrol uygula",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Kamerayı kendin tamir et",
          "score": -15,
          "reputation": -10,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Sorunu önemseme",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Pist Yakını",
      "icon": "📷",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Bir kontrol noktasındaki kamera görüntüsü kesiliyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Şüpheli Davranış",
      "description": "Bir kişinin çevreyi sürekli gözlemlediği bildiriliyor.",
      "hint": "Şüphe tek başına müdahale için yeterli olmayabilir.",
      "choices": [
        {
          "text": "Kamera ve çevre gözlemiyle durumu doğrula",
          "score": 20,
          "reputation": 8,
          "stress": 4,
          "money": 25,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Hemen kişiyi suçla",
          "score": -15,
          "reputation": -12,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Tamamen görmezden gel",
          "score": -15,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Terminal A",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Bir kişinin çevreyi sürekli gözlemlediği bildiriliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Yetkisiz Kapı",
      "description": "Personel olmayan bir kişinin kısıtlı kapıya yöneldiği görülüyor.",
      "hint": "Konumu ve kişiyi güvenli biçimde doğrula.",
      "choices": [
        {
          "text": "Yetkisini kontrol et ve gerekli desteği çağır",
          "score": 25,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına fiziksel müdahale et",
          "score": -10,
          "reputation": -5,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Görmezden gel",
          "score": -25,
          "reputation": -18,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Bagaj Bandı",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Personel olmayan bir kişinin kısıtlı kapıya yöneldiği görülüyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Terminal Alarmı",
      "description": "Bir terminal bölümünde alarm devreye giriyor.",
      "hint": "Alarmı doğrula ve prosedürü uygula.",
      "choices": [
        {
          "text": "Alarm bölgesini kontrol edip ilgili ekipleri bilgilendir",
          "score": 25,
          "reputation": 12,
          "stress": 8,
          "money": 40,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Alarmı kapat",
          "score": -30,
          "reputation": -25,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bu karar prosedür veya güvenlik açısından zayıf kaldı."
        },
        {
          "text": "Alarmı görmezden gel",
          "score": -30,
          "reputation": -20,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Pasaport Kuyruğu",
      "icon": "🚨",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Bir terminal bölümünde alarm devreye giriyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece Terminali",
      "description": "Gece saatinde kapalı bir bölümden hareket sesi geliyor.",
      "hint": "Önce kamera ve telsiz imkanlarını kullan.",
      "choices": [
        {
          "text": "Kamera kontrolü yapıp destek iste",
          "score": 25,
          "reputation": 10,
          "stress": 5,
          "money": 35,
          "correct": true,
          "message": "Prosedüre uygun hareket ettin."
        },
        {
          "text": "Tek başına karanlık bölgeye gir",
          "score": -15,
          "reputation": -10,
          "stress": 18,
          "money": 0,
          "correct": false,
          "message": "Acele ve tek başına müdahale durumu zorlaştırdı."
        },
        {
          "text": "Sesi önemseme",
          "score": -20,
          "reputation": -15,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Durumu görmezden gelmek risk bıraktı."
        }
      ],
      "zone": "Kısıtlı Alan",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Gece saatinde kapalı bir bölümden hareket sesi geliyor.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Pasaport Kontrol Kuyruğu",
      "description": "Pasaport kuyruğunda taşma ve tartışma riski artıyor.",
      "hint": "Kalabalık yönetiminde erken destek iste.",
      "choices": [
        {
          "text": "Akışı gözlemleyip destek talep et",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Kalabalık yönetimi doğru."
        },
        {
          "text": "Herkesi bağırarak hizala",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Bağırmak gerilim yarattı."
        },
        {
          "text": "Müdahale etme",
          "score": -15,
          "reputation": -12,
          "stress": 3,
          "money": 0,
          "correct": false,
          "message": "Taşmayı izlemek yanlıştı."
        }
      ],
      "zone": "VIP Salon",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Pasaport kuyruğunda taşma ve tartışma riski artıyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "VIP Salon Girişi",
      "description": "VIP salona yetkisiz giriş denemesi var.",
      "hint": "Yetki kartı ve liste kontrolü yap.",
      "choices": [
        {
          "text": "Yetki ve listeyi doğrula",
          "score": 22,
          "reputation": 10,
          "stress": 4,
          "money": 35,
          "correct": true,
          "message": "Yetki kontrolü yapıldı."
        },
        {
          "text": "İstisna yapıp içeri al",
          "score": -15,
          "reputation": -12,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Yetkisiz girişe izin verildi."
        },
        {
          "text": "Tartışmaya gir",
          "score": -10,
          "reputation": -8,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Tartışma profesyonel değildi."
        }
      ],
      "zone": "Pist Yakını",
      "icon": "🪪",
      "camera": {
        "channels": [
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "VIP salona yetkisiz giriş denemesi var.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Pist Yakını Hareket",
      "description": "Pist yakını kısıtlı alanda hareket bildirimi geldi.",
      "hint": "Hemen ilgili birimlere bildir, tek başına yaklaşma.",
      "choices": [
        {
          "text": "Konumu teyit edip acil prosedürü başlat",
          "score": 28,
          "reputation": 14,
          "stress": 10,
          "money": 55,
          "correct": true,
          "message": "Kritik alan prosedürü uygulandı."
        },
        {
          "text": "Tek başına bölgeye koş",
          "score": -18,
          "reputation": -12,
          "stress": 18,
          "money": 0,
          "correct": false,
          "message": "Pist yakınına tek başına gitmek tehlikeli."
        },
        {
          "text": "Bildirimi ertele",
          "score": -25,
          "reputation": -18,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Erteleme kabul edilemez."
        }
      ],
      "zone": "Terminal A",
      "icon": "📡",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Pist yakını kısıtlı alanda hareket bildirimi geldi.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Sinyal zayıf — kör nokta riski.",
            "clarity": "low",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Kayıp Bagaj Bandı",
      "description": "Bagaj bandında sahipsiz valiz tur atıyor.",
      "hint": "Dokunmadan prosedürü uygula.",
      "choices": [
        {
          "text": "Alanı izole edip ilgili birime bildir",
          "score": 25,
          "reputation": 12,
          "stress": 7,
          "money": 45,
          "correct": true,
          "message": "Bagaj prosedürü doğru."
        },
        {
          "text": "Valizi kendin aç",
          "score": -25,
          "reputation": -20,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Valizi açmak ciddi ihlal."
        },
        {
          "text": "Valizi kenara çek",
          "score": -12,
          "reputation": -10,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Taşımak prosedüre aykırı."
        }
      ],
      "zone": "Bagaj Bandı",
      "icon": "🧒",
      "timed": true,
      "timeLimit": 20,
      "camera": {
        "channels": [
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Bagaj bandında sahipsiz valiz tur atıyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gümrük Bildirimi",
      "description": "Gümrük, şüpheli yolcu için destek istiyor.",
      "hint": "Gümrük ekibiyle koordineli ol.",
      "choices": [
        {
          "text": "Koordineli destek sağla",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 40,
          "correct": true,
          "message": "Gümrük ile koordinasyon sağlandı."
        },
        {
          "text": "Tek başına sorgula",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Yetki sınırını aştın."
        },
        {
          "text": "Destek vermeyi reddet",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Destek talebi reddedilmemeliydi."
        }
      ],
      "zone": "Pasaport Kuyruğu",
      "icon": "📡",
      "camera": {
        "channels": [
          {
            "id": "KAM-A3",
            "label": "Pasaport Kuyruğu",
            "feed": "Gümrük, şüpheli yolcu için destek istiyor.",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Tekrarlayan Sahipsiz Bagaj",
      "description": "Aynı tarifede, aynı noktada yine sahipsiz bagaj bildirimi var. Bu tesadüf gibi durmuyor.",
      "hint": "Seri bagaj olayında prosedür ve bildirim kritik.",
      "zone": "Bagaj Bandı",
      "icon": "🕵️",
      "story": true,
      "storyId": "bag_ring_1",
      "timed": true,
      "timeLimit": 25,
      "choices": [
        {
          "text": "Alanı izole et, birimleri bilgilendir, kaydı bağla",
          "score": 32,
          "reputation": 15,
          "stress": 9,
          "money": 60,
          "correct": true,
          "message": "Seri bagaj olayı birimlere bağlandı.",
          "storyFlag": "bag_linked"
        },
        {
          "text": "Bagajı kenara çek",
          "score": -15,
          "reputation": -12,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Bagajı taşımak prosedür ihlali."
        },
        {
          "text": "Rutin ihbar deyip kapat",
          "score": -28,
          "reputation": -20,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "Seri tehdit göz ardı edildi.",
          "storyFlag": "bag_ignored"
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-A4",
            "label": "Kısıtlı Alan",
            "feed": "Aynı tarifede, aynı noktada yine sahipsiz bagaj bildirimi var. Bu tesadüf gibi durmuyor.",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-A1",
            "label": "Terminal A",
            "feed": "Olağan trafik. Belirgin anomali yok.",
            "clarity": "clear",
            "relevant": false
          },
          {
            "id": "KAM-A2",
            "label": "Bagaj Bandı 3",
            "feed": "Boş koridor.",
            "clarity": "medium",
            "relevant": false
          }
        ]
      },
      "shiftType": "night"
    },
    {
      "title": "Gece bagaj bandı anomalisi",
      "description": "Gece seferleri arasında bagaj bandında sahipsiz valiz benzeri görüntü.",
      "hint": "Açma, yaklaşma mesafesi, bildir.",
      "zone": "Bagaj Bandı",
      "icon": "🧳",
      "shiftType": "night",
      "choices": [
        {
          "text": "Mesafe koru, alanı bildir, prosedürü uygula",
          "score": 20,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Valizi aç",
          "score": -20,
          "reputation": -14,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Kenara taşı",
          "score": -14,
          "reputation": -10,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-01",
            "label": "Bagaj Bandı",
            "feed": "Gece seferleri arasında bagaj bandında sahipsiz valiz benzeri görüntü.",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-02",
            "label": "Yan alan",
            "feed": "Olağan trafik.",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ],
  "Banka": [
    {
      "title": "Gişe Gerilimi",
      "description": "Müşteri gişede yüksek sesle tartışıyor.",
      "hint": "Prosedüre bağlı kal.",
      "zone": "Gişe Holü",
      "icon": "🏦",
      "shiftType": "day",
      "choices": [
        {
          "text": "Mesafeyi koru, sakinleştir, gerekirse destek iste",
          "score": 20,
          "reputation": 8,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Prosedüre uygun."
        },
        {
          "text": "Tek başına fiziksel müdahale et",
          "score": -12,
          "reputation": -10,
          "stress": 15,
          "money": 0,
          "correct": false,
          "message": "Riskli."
        },
        {
          "text": "Olayı yok say",
          "score": -15,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Gişe",
            "feed": "Tartışma",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Kasa Kapısı",
      "description": "Kasa dairesi kapısı beklenmedik şekilde açık.",
      "hint": "Prosedüre bağlı kal.",
      "zone": "Kasa Dairesi",
      "icon": "🔐",
      "shiftType": "night",
      "choices": [
        {
          "text": "İzole et ve bildir",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 35,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "İçeri tek başına gir",
          "score": -15,
          "reputation": -10,
          "stress": 14,
          "money": 0,
          "correct": false,
          "message": "Riskli."
        },
        {
          "text": "Kapatıp unut",
          "score": -12,
          "reputation": -8,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Kasa",
            "feed": "Kapı açık",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "ATM Şüphesi",
      "description": "ATM üzerinde yabancı aparat şüphesi var.",
      "hint": "Prosedüre bağlı kal.",
      "zone": "ATM Önü",
      "icon": "🏧",
      "shiftType": "day",
      "choices": [
        {
          "text": "Kullanımı durdur, bildir, kayıt tut",
          "score": 24,
          "reputation": 12,
          "stress": 5,
          "money": 40,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Aparatı söküp at",
          "score": -18,
          "reputation": -14,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Müşterilerin kullanmasına izin ver",
          "score": -20,
          "reputation": -15,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "ATM",
            "feed": "Aparat",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Sessiz Alarm",
      "description": "Sessiz soygun alarmı bilgisi geldi.",
      "hint": "Panik yaratma.",
      "timed": true,
      "timeLimit": 20,
      "zone": "Gişe Holü",
      "icon": "🚨",
      "shiftType": "both",
      "choices": [
        {
          "text": "Prosedürü uygula, panik yaratmadan birimleri bilgilendir",
          "score": 28,
          "reputation": 14,
          "stress": 10,
          "money": 50,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Bağırarak herkesi uyandır",
          "score": -10,
          "reputation": -8,
          "stress": 16,
          "money": 0,
          "correct": false,
          "message": "Panik."
        },
        {
          "text": "Alarmı kapat",
          "score": -25,
          "reputation": -20,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Ciddi hata."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Gişe",
            "feed": "Sessiz alarm",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Yetkisiz Geçiş",
      "description": "Personel girişi kartsız geçilmek isteniyor.",
      "hint": "Kimlik doğrula.",
      "zone": "Personel Girişi",
      "icon": "🪪",
      "shiftType": "night",
      "choices": [
        {
          "text": "Kimlik ve yetkiyi doğrula",
          "score": 18,
          "reputation": 8,
          "stress": 4,
          "money": 28,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Tanıdık diye geçir",
          "score": -14,
          "reputation": -12,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Tartışmaya gir",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Profesyonel değil."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Giriş",
            "feed": "Kartsız",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Sahte Para İhbarı",
      "description": "Gişeden sahte para şüphesi iletildi.",
      "hint": "Prosedür.",
      "zone": "Gişe Holü",
      "icon": "💵",
      "shiftType": "day",
      "choices": [
        {
          "text": "Prosedüre göre işlem ve bildirim",
          "score": 20,
          "reputation": 10,
          "stress": 5,
          "money": 32,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Parayı cebine koy",
          "score": -30,
          "reputation": -25,
          "stress": 5,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Müşteriyi açıkça suçla",
          "score": -12,
          "reputation": -10,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Erken suçlama."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Gişe",
            "feed": "Sahte para",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Arşiv Koridoru",
      "description": "Arşiv koridorunda mesai dışı hareket sesi.",
      "hint": "Önce doğrula.",
      "zone": "Arşiv Koridoru",
      "icon": "📂",
      "shiftType": "night",
      "choices": [
        {
          "text": "Kamera/telsiz ile doğrula, destek iste",
          "score": 22,
          "reputation": 10,
          "stress": 6,
          "money": 34,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Tek başına karanlık koridora gir",
          "score": -14,
          "reputation": -10,
          "stress": 16,
          "money": 0,
          "correct": false,
          "message": "Riskli."
        },
        {
          "text": "Sesi yok say",
          "score": -16,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Arşiv",
            "feed": "Hareket",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Yangın Paneli",
      "description": "Şube yangın paneli alarm veriyor.",
      "hint": "Doğrula.",
      "timed": true,
      "timeLimit": 18,
      "zone": "Müdürlük",
      "icon": "🚨",
      "shiftType": "both",
      "choices": [
        {
          "text": "Bölgeyi doğrula ve prosedürü başlat",
          "score": 25,
          "reputation": 12,
          "stress": 8,
          "money": 42,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Paneli sustur",
          "score": -22,
          "reputation": -18,
          "stress": 6,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Hiçbir şey yapma",
          "score": -25,
          "reputation": -18,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Müdürlük",
            "feed": "Yangın",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Kuyruk İtişi",
      "description": "Yoğun günde kuyrukta itiş başladı.",
      "hint": "Sakin yönlendir.",
      "zone": "Gişe Holü",
      "icon": "👥",
      "shiftType": "day",
      "choices": [
        {
          "text": "Sakin yönlendir, destek talep et",
          "score": 18,
          "reputation": 8,
          "stress": 6,
          "money": 28,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Herkesi bağırarak dağıt",
          "score": -10,
          "reputation": -8,
          "stress": 12,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "İlgilenme",
          "score": -14,
          "reputation": -10,
          "stress": 2,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Gişe",
            "feed": "İtiş",
            "clarity": "clear",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Kamera Arızası",
      "description": "Kasa dairesi kamerası görüntü vermiyor.",
      "hint": "Kör nokta.",
      "zone": "Kasa Dairesi",
      "icon": "📷",
      "shiftType": "night",
      "choices": [
        {
          "text": "Arızayı kaydet ve amire bildir",
          "score": 16,
          "reputation": 8,
          "stress": 3,
          "money": 24,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Önemli değil deyip geç",
          "score": -12,
          "reputation": -10,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Kamerayı sök",
          "score": -15,
          "reputation": -12,
          "stress": 8,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Kasa",
            "feed": "Arıza",
            "clarity": "low",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Gündüz Gişe Alarmı",
      "description": "Gündüz saatinde gişe camı alarmı çalıyor.",
      "hint": "Doğrula.",
      "timed": true,
      "timeLimit": 18,
      "zone": "Gişe Holü",
      "icon": "🚨",
      "shiftType": "day",
      "choices": [
        {
          "text": "Alarmı doğrula, alanı kontrol et, bildir",
          "score": 22,
          "reputation": 10,
          "stress": 7,
          "money": 36,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Alarmı kapat",
          "score": -20,
          "reputation": -16,
          "stress": 6,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Müşteriye kız",
          "score": -8,
          "reputation": -6,
          "stress": 10,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Gişe",
            "feed": "Cam alarm",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    },
    {
      "title": "Gece Nöbet Turu",
      "description": "Gece turunda müdürlük ışığı yanıyor.",
      "hint": "Kontrollü yaklaş.",
      "zone": "Müdürlük",
      "icon": "🌙",
      "shiftType": "night",
      "choices": [
        {
          "text": "Telsizle bildirip kontrollü kontrol et",
          "score": 20,
          "reputation": 9,
          "stress": 5,
          "money": 30,
          "correct": true,
          "message": "Doğru."
        },
        {
          "text": "Işığı söndürüp çık",
          "score": -10,
          "reputation": -8,
          "stress": 4,
          "money": 0,
          "correct": false,
          "message": "Yanlış."
        },
        {
          "text": "Kontrolü atla",
          "score": -14,
          "reputation": -12,
          "stress": 0,
          "money": 0,
          "correct": false,
          "message": "İhmal."
        }
      ],
      "camera": {
        "channels": [
          {
            "id": "KAM-B1",
            "label": "Müdürlük",
            "feed": "Işık",
            "clarity": "medium",
            "relevant": true
          },
          {
            "id": "KAM-B2",
            "label": "Yan",
            "feed": "Olağan",
            "clarity": "clear",
            "relevant": false
          }
        ]
      }
    }
  ]
};
