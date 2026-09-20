# 🏛️ Latince Eyüpoks

> **İstanbul Üniversitesi Edebiyat Fakültesi Klasik Filoloji (Latin Dili ve Edebiyatı / Eski Yunan Dili ve Edebiyatı)**  
> **Doç. Dr. Eyüp Çoraklı — Latince Gramer 1 & Latince Gramer 2 İnteraktif Eğitim Portalı**  
> *Geliştirici:* **Genar Altınışık**

**Canlı Web Uygulaması:** [https://genaraltinisik.github.io/Latince-Eyupoks/](https://genaraltinisik.github.io/Latince-Eyupoks/)  
*(Kardeş Proje: [Latince Ekinoks — Gramer 3](https://genaraltinisik.github.io/Latince-Ekinoks/))*

---

## 📖 Proje Hakkında

**Latince Eyüpoks**, İstanbul Üniversitesi Klasik Filoloji bölümünde Doç. Dr. Eyüp Çoraklı tarafından yürütülen 1. Sınıf *Latince Gramer 1* (Güz Dönemi) ve *Latince Gramer 2* (Bahar Dönemi) derslerinin tüm müfredatını, sunum slaytlarını, örnek cümlelerini ve ders kelimelerini dijital ortamda bir araya getiren kapsamlı bir eğitim platformudur.

### 🌟 Temel Farklar ve Yenilikler
1. **Ders Notu Kelime Dağarcığı:** Klasik Dickinson 1000 kelime sıklık listesi yerine, doğrudan Eyüp Hoca'nın 28 haftalık (46 ders sunumu, 944 slayt) ders notlarında bizzat öğrettiği ve kullandığı otoriter Latince sözcükler yer alır.
2. **Tüm Dönemin Ders Anlatımları Entegre:** 46 sunumun tamamı haftalık müfredat sıralamasıyla (Hafta 1 - 14, Ders 1 & 2) platformun içine entegre edilmiştir. İster slayt slayt ilerleyebilir, ister kesintisiz dijital ders kitabı modunda okunabilir.
3. **Hiper-Bağlantılı Metin Motoru (Hypertext Glossing):** Ders anlatımlarındaki veya okuma parçalarındaki **herhangi bir Latince kelimeye tıklandığında** sistem:
   - Kelimenin sözlük kökünü (lemma), cinsini ve Türkçe karşılığını gösterir.
   - Morfolojik çözümlemesini sunar (casus, numerus, tempus, persona).
   - Tek tıkla kelimenin tam çekim tablosuna (`inflection-engine.js`) yönlendirir.
   - İtalyanca/Klasik Latince fonetiğiyle sesli telaffuzunu çalar.
   - Chicago Üniversitesi *Logeion* sözlüğündeki detaylı maddesine bağlar.

---

## 🚀 Özellikler

### 1. 📖 Dersler & Müfredat (`#viewLessons`)
- 1. Dönem (*Gramer 1*) ve 2. Dönem (*Gramer 2*) derslerine göre filtrelenebilir sol gezinti paneli.
- Konu, hafta veya kelime bazlı müfredat içi arama.
- Her derste öğretilen kelimelerin etiketlendiği hızlı erişim paneli.
- "Tek Slayt" (sunum modu) ve "Tüm Slaytlar" (okuma modu) seçenekleri.

### 2. 📚 Otoriter Sözlük (`#viewDictionary`)
- Doç. Dr. Eyüp Çoraklı'nın notlarından çıkarılan 195 temel ders kelimesi.
- Mert İnan & Emin Çomoğlu'nun resmi çevirileriyle tam uyumlu Türkçe anlamlar.
- Gramer kategorisine (1-5. Çekim İsimler, Fiiller, Sıfatlar, Zarflar, Zamirler) ve döneme göre anlık filtreleme.

### 3. 🗂️ 3D Alıştırma Kartları (`#viewFlashcard`)
- 3D derinlik hissi veren iki yönlü çevrilebilir kartlar.
- Çift yön desteği (Latince ➔ Türkçe veya Türkçe ➔ Latince).
- Spaced Repetition (Aralıklı Tekrar) mantığı: "Biliyorum" ve "Tekrar Et" kuyrukları.
- Klavye kısayolları: `Boşluk` (Çevir), `1` (Tekrar), `2` (Biliyorum), `A` (Sesli Dinle), `F` (Favori).

### 4. 📜 İnteraktif Çekim Motoru (`#viewParadigms`)
- **Serbest Sözcük Çekimleyici:** Arama kutusuna yazılan herhangi bir Latince sözcüğü anında tüm halleriyle çekimler.
- **Eyüp Hoca Hal Sıralaması:** Bölüm metodolojisine tam uyumlu `N - V - G - D - Ac - Ab` (*Nominativus, Vocativus, Genetivus, Dativus, Accusativus, Ablativus*) varsayılan sıralaması.
- Model çekimler: İsimler (1-5. Çekim), Sıfatlar (1-3. Sınıf), Fiiller (1-4. Çekim), Düzensiz Fiiller (*sum, possum, volo, fero, eo*), Zamirler (*ego, tu, is, hic, ille, qui*).

### 5. 📝 Çoktan Seçmeli Test (`#viewQuiz`)
- Aynı gramer kategorisinden akıllı çeldiricilerle oluşturulan 4 seçenekli sınavlar.
- Yanlış yanıtlanan kelimeleri otomatik olarak favorilere ekleyerek tekrar etme imkânı.

### 6. ⭐ Favoriler & Zorlanılan Kelimeler (`#viewFavorites`)
- Tek tıkla favori kelimelerden oluşan özel kart destesi veya sınav başlatma.

### 7. 🎨 Temalar & Uyumluluk
- **Parşömen (Parchment):** Klasik filoloji ve el yazması estetiği.
- **Gece (Dark Academia):** Gece çalışmaları için koyu mavi/gri tonları.
- **Açık (Light):** Temiz, yüksek kontrastlı modern görünüm.
- Masaüstü, tablet ve mobil cihazlar için optimize edilmiş responsive arayüz.

---

## 🛠️ Mimari & Teknolojiler

- **%100 İstemci Taraflı (Static Client-Side):** Node.js veya veritabanı sunucusu gerektirmez; doğrudan GitHub Pages üzerinden çalışır.
- **HTML5, Modern CSS3 & Vanilla JavaScript (ES6+):** Sıfır harici bağımlılık, ultra hızlı yükleme süresi.
- **Web Speech API:** Klasik Latince telaffuz desteği.
- **LocalStorage:** Tema, aktif dönem filtresi, favoriler ve sınav skorları tarayıcıda kalıcı olarak saklanır.

---

## 📄 Lisans & Telif Hakları

Bu proje eğitim ve akademik fayda amacıyla geliştirilmiştir. Ders notları ve içerik Doç. Dr. Eyüp Çoraklı'ya aittir.
Arayüz tasarımı ve yazılım mimarisi Genar Altınışık tarafından geliştirilmiştir.
