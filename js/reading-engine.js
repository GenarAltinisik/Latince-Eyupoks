// js/reading-engine.js - Interactive Latin Hypertext & Glossing Engine for Latince Eyupoks

const ReadingEngine = {
  vocabMap: new Map(),
  inflectedFormsMap: new Map(),

  init() {
    if (typeof EYUP_VOCABULARY !== 'undefined') {
      EYUP_VOCABULARY.forEach(item => {
        const cleanLemma = this.normalizeKey(item.lemma);
        this.vocabMap.set(cleanLemma, item);
        this.vocabMap.set(item.id, item);

        // Precompute inflections if InflectionEngine is available
        this.indexWordInflections(item);
      });
    }

    this.createPopoverElement();
    this.bindGlobalEvents();
  },

  adaptWordForInflection(item) {
    if (!item) return null;
    let pos_en = '';
    const cat = item.category || '';
    if (cat === 'noun_1') pos_en = 'Noun: 1st Declension';
    else if (cat === 'noun_2') pos_en = 'Noun: 2nd Declension';
    else if (cat === 'noun_3') pos_en = 'Noun: 3rd Declension';
    else if (cat === 'noun_4') pos_en = 'Noun: 4th Declension';
    else if (cat === 'noun_5') pos_en = 'Noun: 5th Declension';
    else if (cat === 'verb') {
      if (item.stem && (item.stem.includes('-ēre') || item.stem.includes('-ere'))) pos_en = 'Verb: 2nd Conjugation';
      else if (item.stem && item.stem.includes('-īre')) pos_en = 'Verb: 4th Conjugation';
      else if (item.stem && item.stem.includes('-ere')) pos_en = 'Verb: 3rd Conjugation';
      else pos_en = 'Verb: 1st Conjugation';
    }
    else if (cat === 'adjective') {
      if (item.stem && item.stem.includes('-is')) pos_en = 'Adjective: 3rd Class';
      else pos_en = 'Adjective: 1st/2nd Class';
    }
    else if (cat === 'pronoun') pos_en = 'Pronoun';
    else pos_en = item.pos || '';

    const hw = item.lemma + (item.stem && item.stem !== '-' ? `, ${item.stem}` : '') + (item.pos ? `, ${item.pos}` : '');

    return {
      id: item.id,
      lemma: item.lemma,
      headword: hw,
      pos_en: pos_en,
      pos_tr: item.pos || '',
      meaning_tr: item.meaning_tr,
      definition_en: item.meaning_tr,
      category: item.category
    };
  },

  indexWordInflections(item) {
    if (typeof InflectionEngine === 'undefined' || !InflectionEngine.getWordInflection) return;
    try {
      const adapted = this.adaptWordForInflection(item);
      const infl = InflectionEngine.getWordInflection(adapted);
      if (!infl) return;

      const caseNames = {
        nom: 'Nominativus (Yalın)',
        voc: 'Vocativus (Hitap)',
        gen: 'Genetivus (-in hali)',
        dat: 'Dativus (-e hali)',
        acc: 'Accusativus (-i hali)',
        abl: 'Ablativus (-den hali)'
      };

      // Index nouns & irregulars
      if (infl.forms) {
        Object.entries(infl.forms).forEach(([caseKey, nums]) => {
          if (!nums) return;
          const cLabel = caseNames[caseKey] || caseKey;
          if (nums.sg) {
            const clean = this.normalizeKey(nums.sg);
            if (!this.inflectedFormsMap.has(clean)) {
              this.inflectedFormsMap.set(clean, {
                item,
                details: `${cLabel} Singularis (Tekil)`,
                form: nums.sg
              });
            }
          }
          if (nums.pl) {
            const clean = this.normalizeKey(nums.pl);
            if (!this.inflectedFormsMap.has(clean)) {
              this.inflectedFormsMap.set(clean, {
                item,
                details: `${cLabel} Pluralis (Çoğul)`,
                form: nums.pl
              });
            }
          }
        });
      }

      // Index verbs if conjugation forms exist
      if (infl.voices) {
        const tenseNames = {
          pres: 'Praesens (Şimdiki/Geniş Zaman)',
          impf: 'Imperfectum (Geçmiş Sürekli Zaman)',
          fut: 'Futurum I (Gelecek Zaman)',
          perf: 'Perfectum (Geçmiş Belirli Zaman)',
          plup: 'Plusquamperfectum (Önceki Geçmiş)',
          futp: 'Futurum Exactum (Gelecek Bitmiş)'
        };
        const persons = ['1. Tekil', '2. Tekil', '3. Tekil', '1. Çoğul', '2. Çoğul', '3. Çoğul'];

        // Active voice
        if (infl.voices.act) {
          Object.entries(infl.voices.act).forEach(([tKey, personList]) => {
            if (!Array.isArray(personList)) return;
            const tLabel = tenseNames[tKey] || tKey;
            personList.forEach((formStr, pIdx) => {
              if (!formStr || formStr === '-') return;
              const cleanForm = formStr.split(/[\/\s]/)[0];
              const clean = this.normalizeKey(cleanForm);
              if (!this.inflectedFormsMap.has(clean)) {
                this.inflectedFormsMap.set(clean, {
                  item,
                  details: `${tLabel} • ${persons[pIdx] || ''} (Etken Çatı)`,
                  form: cleanForm
                });
              }
            });
          });
        }

        // Passive voice
        if (infl.voices.pass) {
          Object.entries(infl.voices.pass).forEach(([tKey, personList]) => {
            if (!Array.isArray(personList)) return;
            const tLabel = tenseNames[tKey] || tKey;
            personList.forEach((formStr, pIdx) => {
              if (!formStr || formStr === '-') return;
              const cleanForm = formStr.split(/[\/\s]/)[0];
              const clean = this.normalizeKey(cleanForm);
              if (!this.inflectedFormsMap.has(clean)) {
                this.inflectedFormsMap.set(clean, {
                  item,
                  details: `${tLabel} • ${persons[pIdx] || ''} (Edilgen Çatı)`,
                  form: cleanForm
                });
              }
            });
          });
        }
      }

      // Index adjectives
      if (infl.genders) {
        const caseLabels = {
          nom: 'Nominativus (Yalın)',
          voc: 'Vocativus (Hitap)',
          gen: 'Genetivus (-in hali)',
          dat: 'Dativus (-e hali)',
          acc: 'Accusativus (-i hali)',
          abl: 'Ablativus (-den hali)'
        };
        ['m', 'f', 'n'].forEach(g => {
          if (infl.genders[g]) {
            Object.entries(infl.genders[g]).forEach(([caseKey, nums]) => {
              if (!nums) return;
              const cLabel = caseLabels[caseKey] || caseKey;
              if (nums.sg) {
                const clean = this.normalizeKey(nums.sg);
                if (!this.inflectedFormsMap.has(clean)) {
                  this.inflectedFormsMap.set(clean, {
                    item,
                    details: `${cLabel} Singularis (${g.toUpperCase()})`,
                    form: nums.sg
                  });
                }
              }
              if (nums.pl) {
                const clean = this.normalizeKey(nums.pl);
                if (!this.inflectedFormsMap.has(clean)) {
                  this.inflectedFormsMap.set(clean, {
                    item,
                    details: `${cLabel} Pluralis (${g.toUpperCase()})`,
                    form: nums.pl
                  });
                }
              }
            });
          }
        });
      }
    } catch (e) {
      // Ignore inflection generation exceptions for edge items
    }
  },

  normalizeKey(str) {
    if (!str) return '';
    return str.toLowerCase()
      .replace(/[\(\)\s\.\,\-\*\:\;\?\!\"\'\`\’\‘]/g, '')
      .replace(/[āă]/g, 'a')
      .replace(/[ēĕ]/g, 'e')
      .replace(/[īĭ]/g, 'i')
      .replace(/[ōŏ]/g, 'o')
      .replace(/[ūŭ]/g, 'u')
      .replace(/[ȳ]/g, 'y');
  },

  createPopoverElement() {
    if (document.getElementById('wordPopover')) return;

    const popover = document.createElement('div');
    popover.id = 'wordPopover';
    popover.className = 'word-popover hidden';
    popover.innerHTML = `
      <div class="popover-header">
        <div class="popover-title-row">
          <h4 id="popoverLemma" class="popover-lemma"></h4>
          <span id="popoverPos" class="popover-pos"></span>
        </div>
        <button id="popoverCloseBtn" class="popover-close-btn" title="Kapat">✕</button>
      </div>
      <div class="popover-body">
        <p id="popoverMeaning" class="popover-meaning"></p>
        <div id="popoverGrammar" class="popover-grammar"></div>
      </div>
      <div class="popover-footer">
        <button id="popoverParadigmsBtn" class="pop-action-btn btn-paradigms" title="Tüm çekim tablosunu gör">
          <span>📜 Çekimler</span>
        </button>
        <button id="popoverAudioBtn" class="pop-action-btn btn-audio" title="Telaffuzu Dinle">
          <span>🔊 Dinle</span>
        </button>
        <button id="popoverFavBtn" class="pop-action-btn btn-fav" title="Zorlandıklarıma Ekle">
          <span>⭐ Favori</span>
        </button>
        <a id="popoverLogeionBtn" class="pop-action-btn btn-logeion" target="_blank" rel="noopener" title="Chicago Ünv. Logeion Sözlüğü">
          <span>🏛️ Logeion</span>
        </a>
      </div>
    `;
    document.body.appendChild(popover);
  },

  bindGlobalEvents() {
    // Click on Latin word token
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.lat-word');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        this.showPopoverForWord(target);
      } else if (!e.target.closest('#wordPopover')) {
        this.hidePopover();
      }
    });

    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.id === 'popoverCloseBtn' || e.target.closest('#popoverCloseBtn')) {
        this.hidePopover();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.hidePopover();
    });
  },

  // Transforms Latin text into clickable interactive spans
  renderInteractiveText(text) {
    if (!text) return '';
    return text.replace(/([\p{L}\u0100-\u017F]+)/gu, (match) => {
      const clean = this.normalizeKey(match);
      const isKnown = this.vocabMap.has(clean) || this.inflectedFormsMap.has(clean);
      return `<span class="lat-word ${isKnown ? 'has-entry' : ''}" data-word="${match}" role="button" tabindex="0">${match}</span>`;
    });
  },

  findWordInfo(rawWord) {
    const clean = this.normalizeKey(rawWord);
    
    // 1. Direct match in Eyüp Hoca vocabulary lemma
    if (this.vocabMap.has(clean)) {
      return { item: this.vocabMap.get(clean), matchType: 'exact', query: rawWord };
    }

    // 2. Match in precomputed inflected forms of Eyüp Hoca words
    if (this.inflectedFormsMap.has(clean)) {
      const match = this.inflectedFormsMap.get(clean);
      return {
        item: match.item,
        matchType: 'inflected',
        analysis: { details: match.details, form: match.form },
        query: rawWord
      };
    }

    // 3. Core irregulars and pronouns dictionary (instant exact identification)
    const coreLookup = this.lookupCoreGrammarWord(clean, rawWord);
    if (coreLookup) {
      return coreLookup;
    }

    // 4. Enclitic handling (-que, -ne, -ve)
    const encliticLookup = this.lookupEncliticWord(clean, rawWord);
    if (encliticLookup) {
      return encliticLookup;
    }

    // 5. Heuristic stem-ending stripping for Latin nouns & verbs
    const heuristicMatch = this.heuristicLookup(clean);
    if (heuristicMatch) {
      return {
        item: heuristicMatch.item,
        matchType: 'heuristic',
        analysis: { details: heuristicMatch.details },
        query: rawWord
      };
    }

    // 6. Scholarly fallback (never use placeholder text!)
    return {
      item: {
        lemma: rawWord,
        pos: 'Klasik Latince İfade',
        meaning_tr: 'Klasik Latince metin ifadesi. Detaylı sözlük maddesi ve antik kullanımlar için "Logeion" sözlüğüne başvurabilirsiniz.',
        stem: '-'
      },
      matchType: 'fallback',
      query: rawWord
    };
  },

  lookupCoreGrammarWord(clean, rawWord) {
    const table = {
      // Esse (olmak)
      'sum': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak', details: 'Praesens Indicativus 1. Tekil (Ben)' },
      'es': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak', details: 'Praesens Indicativus 2. Tekil (Sen) veya Emir (Ol!)' },
      'est': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak ( -dir/-dır)', details: 'Praesens Indicativus 3. Tekil (O)' },
      'sumus': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak', details: 'Praesens Indicativus 1. Çoğul (Biz)' },
      'estis': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak', details: 'Praesens Indicativus 2. Çoğul (Siz)' },
      'sunt': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olmak, var olmak ( -dirler)', details: 'Praesens Indicativus 3. Çoğul (Onlar)' },
      'eram': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idim (var idim)', details: 'Imperfectum 1. Tekil (Ben)' },
      'eras': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idin', details: 'Imperfectum 2. Tekil (Sen)' },
      'erat': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idi (vardı)', details: 'Imperfectum 3. Tekil (O)' },
      'eramus': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idik', details: 'Imperfectum 1. Çoğul (Biz)' },
      'eratis': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idiniz', details: 'Imperfectum 2. Çoğul (Siz)' },
      'erant': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'idiler (vardılar)', details: 'Imperfectum 3. Çoğul (Onlar)' },
      'ero': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacağım', details: 'Futurum 1. Tekil (Ben)' },
      'eris': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacaksın', details: 'Futurum 2. Tekil (Sen)' },
      'erit': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacak', details: 'Futurum 3. Tekil (O)' },
      'erimus': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacağız', details: 'Futurum 1. Çoğul (Biz)' },
      'eritis': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacaksınız', details: 'Futurum 2. Çoğul (Siz)' },
      'erunt': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olacaklar', details: 'Futurum 3. Çoğul (Onlar)' },
      'fui': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'oldum, bulundum', details: 'Perfectum 1. Tekil (Ben)' },
      'fuisti': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'oldun', details: 'Perfectum 2. Tekil (Sen)' },
      'fuit': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'oldu, var oldu', details: 'Perfectum 3. Tekil (O)' },
      'fuimus': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olduk', details: 'Perfectum 1. Çoğul (Biz)' },
      'fuistis': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'oldunuz', details: 'Perfectum 2. Çoğul (Siz)' },
      'fuerunt': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'oldular', details: 'Perfectum 3. Çoğul (Onlar)' },
      'esto': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'ol! (emir)', details: 'Imperativus Futuri 2./3. Tekil' },
      'estote': { lemma: 'sum, esse, fuī', pos: 'Düzensiz Fiil', meaning_tr: 'olunuz!', details: 'Imperativus Futuri 2. Çoğul' },

      // Possum (-ebilmek)
      'possum': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek, muktedir olmak, gücü yetmek', details: 'Praesens 1. Tekil (Yapabilirim)' },
      'potes': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek', details: 'Praesens 2. Tekil (Yapabilirsin)' },
      'potest': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek, mümkündür', details: 'Praesens 3. Tekil (Yapabilir)' },
      'possumus': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek', details: 'Praesens 1. Çoğul (Yapabiliriz)' },
      'potestis': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek', details: 'Praesens 2. Çoğul (Yapabilirsiniz)' },
      'possunt': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilmek', details: 'Praesens 3. Çoğul (Yapabilirler)' },
      'poteram': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebiliyordum', details: 'Imperfectum 1. Tekil' },
      'poterat': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebiliyordu', details: 'Imperfectum 3. Tekil' },
      'poterant': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebiliyorlardı', details: 'Imperfectum 3. Çoğul' },
      'potero': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebileceğim', details: 'Futurum 1. Tekil' },
      'poterit': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilecek', details: 'Futurum 3. Tekil' },
      'poterunt': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebilecekler', details: 'Futurum 3. Çoğul' },
      'potui': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebildim', details: 'Perfectum 1. Tekil' },
      'potuit': { lemma: 'possum, posse, potuī', pos: 'Düzensiz Fiil', meaning_tr: '-ebildi', details: 'Perfectum 3. Tekil' },

      // Şahıs ve Dönüşlü Zamirler
      'ego': { lemma: 'ego', pos: 'Şahıs Zamiri (1. Tekil)', meaning_tr: 'ben', details: 'Nominativus Singularis' },
      'me': { lemma: 'ego', pos: 'Şahıs Zamiri (1. Tekil)', meaning_tr: 'beni / benden / benimle', details: 'Accusativus veya Ablativus Singularis' },
      'mei': { lemma: 'ego', pos: 'Şahıs Zamiri (1. Tekil)', meaning_tr: 'benim', details: 'Genetivus Singularis' },
      'mihi': { lemma: 'ego', pos: 'Şahıs Zamiri (1. Tekil)', meaning_tr: 'bana / benim için', details: 'Dativus Singularis' },
      'tu': { lemma: 'tū', pos: 'Şahıs Zamiri (2. Tekil)', meaning_tr: 'sen', details: 'Nominativus / Vocativus Singularis' },
      'te': { lemma: 'tū', pos: 'Şahıs Zamiri (2. Tekil)', meaning_tr: 'seni / senden / seninle', details: 'Accusativus veya Ablativus Singularis' },
      'tui': { lemma: 'tū', pos: 'Şahıs Zamiri (2. Tekil)', meaning_tr: 'senin', details: 'Genetivus Singularis' },
      'tibi': { lemma: 'tū', pos: 'Şahıs Zamiri (2. Tekil)', meaning_tr: 'sana / senin için', details: 'Dativus Singularis' },
      'nos': { lemma: 'nōs', pos: 'Şahıs Zamiri (1. Çoğul)', meaning_tr: 'biz / bizi', details: 'Nominativus veya Accusativus Pluralis' },
      'nobis': { lemma: 'nōs', pos: 'Şahıs Zamiri (1. Çoğul)', meaning_tr: 'bize / bizden / bizimle', details: 'Dativus veya Ablativus Pluralis' },
      'nostrum': { lemma: 'nōs', pos: 'Şahıs Zamiri (1. Çoğul)', meaning_tr: 'bizim (içimizden)', details: 'Genetivus Partitivus' },
      'nostri': { lemma: 'nōs', pos: 'Şahıs Zamiri (1. Çoğul)', meaning_tr: 'bize karşı / bizim', details: 'Genetivus Obiectivus' },
      'vos': { lemma: 'vōs', pos: 'Şahıs Zamiri (2. Çoğul)', meaning_tr: 'siz / sizi', details: 'Nominativus veya Accusativus Pluralis' },
      'vobis': { lemma: 'vōs', pos: 'Şahıs Zamiri (2. Çoğul)', meaning_tr: 'size / sizden / sizinle', details: 'Dativus veya Ablativus Pluralis' },
      'vestrum': { lemma: 'vōs', pos: 'Şahıs Zamiri (2. Çoğul)', meaning_tr: 'sizin (içinizden)', details: 'Genetivus Partitivus' },
      'vestri': { lemma: 'vōs', pos: 'Şahıs Zamiri (2. Çoğul)', meaning_tr: 'size karşı / sizin', details: 'Genetivus Obiectivus' },
      'se': { lemma: 'suī, sibi, sē', pos: 'Dönüşlü Zamir (3. Şahıs)', meaning_tr: 'kendisini / kendisinden / kendisiyle', details: 'Accusativus veya Ablativus (Tekil/Çoğul)' },
      'sui': { lemma: 'suī, sibi, sē', pos: 'Dönüşlü Zamir (3. Şahıs)', meaning_tr: 'kendisinin / kendilerinin', details: 'Genetivus (Tekil/Çoğul)' },
      'sibi': { lemma: 'suī, sibi, sē', pos: 'Dönüşlü Zamir (3. Şahıs)', meaning_tr: 'kendisine / kendilerine', details: 'Dativus (Tekil/Çoğul)' },

      // İşaret Zamirleri
      'hic': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bu (eril)', details: 'Nominativus Sg. Masculinum' },
      'haec': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bu (dişil) / bunlar (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neutrum' },
      'hoc': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bu (nötr) / bundan (eril/nötr)', details: 'Nom./Acc. Sg. Neutrum veya Abl. Sg. Masc./Neut.' },
      'huius': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunun', details: 'Genetivus Singularis (m./f./n.)' },
      'huic': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'buna / bunun için', details: 'Dativus Singularis (m./f./n.)' },
      'hunc': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunu (eril)', details: 'Accusativus Sg. Masculinum' },
      'hanc': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunu (dişil)', details: 'Accusativus Sg. Femininum' },
      'hac': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bundan / bununla (dişil)', details: 'Ablativus Sg. Femininum' },
      'hi': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunlar (eril)', details: 'Nominativus Pluralis Masculinum' },
      'hae': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunlar (dişil)', details: 'Nominativus Pluralis Femininum' },
      'horum': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunların (eril/nötr)', details: 'Genetivus Pluralis Masculinum / Neutrum' },
      'harum': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunların (dişil)', details: 'Genetivus Pluralis Femininum' },
      'his': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunlara / bunlardan', details: 'Dativus veya Ablativus Pluralis (m./f./n.)' },
      'hos': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunları (eril)', details: 'Accusativus Pluralis Masculinum' },
      'has': { lemma: 'hic, haec, hoc', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bunları (dişil)', details: 'Accusativus Pluralis Femininum' },

      'ille': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şu, o (eril)', details: 'Nominativus Sg. Masculinum' },
      'illa': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şu, o (dişil) / şunlar (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'illud': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şu, o (nötr)', details: 'Nominativus / Accusativus Sg. Neutrum' },
      'illius': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunun, onun', details: 'Genetivus Singularis (m./f./n.)' },
      'illi': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şuna, ona / şunlar (eril)', details: 'Dativus Sg. veya Nom. Pl. Masc.' },
      'illum': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunu, onu (eril)', details: 'Accusativus Sg. Masculinum' },
      'illam': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunu, onu (dişil)', details: 'Accusativus Sg. Femininum' },
      'illo': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şundan, onunla (eril/nötr)', details: 'Ablativus Sg. Masc./Neut.' },
      'illae': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunlar (dişil)', details: 'Nominativus Pluralis Femininum' },
      'illorum': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunların (eril/nötr)', details: 'Genetivus Pluralis Masc./Neut.' },
      'illarum': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunların (dişil)', details: 'Genetivus Pluralis Femininum' },
      'illis': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunlara / şunlardan', details: 'Dativus veya Ablativus Pluralis (m./f./n.)' },
      'illos': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunları (eril)', details: 'Accusativus Pluralis Masculinum' },
      'illas': { lemma: 'ille, illa, illud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şunları (dişil)', details: 'Accusativus Pluralis Femininum' },

      'iste': { lemma: 'iste, ista, istud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'bu, şu (muhatabın yanındaki)', details: 'Nominativus Sg. Masculinum' },
      'ista': { lemma: 'iste, ista, istud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şu (dişil) / şunlar (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'istud': { lemma: 'iste, ista, istud', pos: 'İşaret Zamiri / Sıfatı', meaning_tr: 'şu (nötr)', details: 'Nominativus / Accusativus Sg. Neutrum' },

      'ipse': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisi (eril)', details: 'Nominativus Sg. Masculinum' },
      'ipsa': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisi (dişil) / kendileri (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'ipsum': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisini / kendisi (nötr)', details: 'Nom./Acc. Sg. Neut. veya Acc. Sg. Masc.' },
      'ipsius': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisinin', details: 'Genetivus Singularis (m./f./n.)' },
      'ipsi': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisine / kendileri (eril)', details: 'Dativus Sg. veya Nom. Pl. Masc.' },
      'ipso': { lemma: 'ipse, ipsa, ipsum', pos: 'Pekiştirme Zamiri', meaning_tr: 'bizzat kendisinden (eril/nötr)', details: 'Ablativus Sg. Masc./Neut.' },

      'idem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynı (eril / nötr)', details: 'Nominativus Sg. Masculinum veya Nom./Acc. Sg. Neut.' },
      'eadem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynı (dişil) / aynı şeyler (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'eiusdem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynısının', details: 'Genetivus Singularis (m./f./n.)' },
      'eidem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynısına', details: 'Dativus Singularis (m./f./n.)' },
      'eundem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynısını (eril)', details: 'Accusativus Sg. Masculinum' },
      'eandem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynısını (dişil)', details: 'Accusativus Sg. Femininum' },
      'eodem': { lemma: 'īdem, eadem, idem', pos: 'Özdeşlik Zamiri', meaning_tr: 'aynısından / aynıyla (eril/nötr)', details: 'Ablativus Sg. Masc./Neut.' },

      'is': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'o (eril)', details: 'Nominativus Sg. Masculinum' },
      'ea': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'o (dişil) / onlar (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'id': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'o, onu, bunu (nötr)', details: 'Nominativus / Accusativus Sg. Neutrum' },
      'eius': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onun', details: 'Genetivus Singularis (m./f./n.)' },
      'ei': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'ona / onlar (eril)', details: 'Dativus Sg. veya Nom. Pl. Masc.' },
      'eum': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onu (eril)', details: 'Accusativus Sg. Masculinum' },
      'eam': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onu (dişil)', details: 'Accusativus Sg. Femininum' },
      'eo': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'ondan / onunla (eril/nötr)', details: 'Ablativus Sg. Masc./Neut.' },
      'eae': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onlar (dişil)', details: 'Nominativus Pluralis Femininum' },
      'eorum': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onların (eril/nötr)', details: 'Genetivus Pluralis Masc./Neut.' },
      'earum': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onların (dişil)', details: 'Genetivus Pluralis Femininum' },
      'eis': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onlara / onlardan', details: 'Dativus veya Ablativus Pluralis' },
      'iis': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onlara / onlardan', details: 'Dativus veya Ablativus Pluralis' },
      'eos': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onları (eril)', details: 'Accusativus Pluralis Masculinum' },
      'eas': { lemma: 'is, ea, id', pos: 'Belirtme / 3. Şahıs Zamiri', meaning_tr: 'onları (dişil)', details: 'Accusativus Pluralis Femininum' },

      'qui': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri (Relative)', meaning_tr: 'ki o, olan (eril)', details: 'Nom. Sg. Masc. veya Nom. Pl. Masc.' },
      'quae': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri (Relative)', meaning_tr: 'ki o (dişil) / olan şeyler (nötr)', details: 'Nom. Sg. Fem. veya Nom./Acc. Pl. Neut.' },
      'quod': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri (Relative)', meaning_tr: 'ki o (nötr); çünkü', details: 'Nom./Acc. Sg. Neutrum veya Bağlaç' },
      'cuius': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kimin, neyin, ki onun', details: 'Genetivus Singularis (m./f./n.)' },
      'cui': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kime, neye, ki ona', details: 'Dativus Singularis (m./f./n.)' },
      'quem': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kimi, neyi, ki onu (eril)', details: 'Accusativus Sg. Masculinum' },
      'quam': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kimi, neyi, ki onu (dişil); ne kadar; -den daha', details: 'Accusativus Sg. Fem. veya Zarf' },
      'quo': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kimden, neyle, nereye', details: 'Ablativus Sg. Masc./Neut. veya Zarf' },
      'qua': { lemma: 'quī, quae, quod', pos: 'İlgi / Soru Zamiri', meaning_tr: 'kimden, neyle (dişil)', details: 'Ablativus Sg. Femininum' },
      'quorum': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri', meaning_tr: 'ki onların (eril/nötr)', details: 'Genetivus Pluralis Masc./Neut.' },
      'quarum': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri', meaning_tr: 'ki onların (dişil)', details: 'Genetivus Pluralis Femininum' },
      'quibus': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri', meaning_tr: 'ki onlara / onlardan', details: 'Dativus veya Ablativus Pluralis' },
      'quos': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri', meaning_tr: 'ki onları (eril)', details: 'Accusativus Pluralis Masculinum' },
      'quas': { lemma: 'quī, quae, quod', pos: 'İlgi Zamiri', meaning_tr: 'ki onları (dişil)', details: 'Accusativus Pluralis Femininum' },
      'quis': { lemma: 'quis, quid', pos: 'Soru Zamiri', meaning_tr: 'kim?', details: 'Nominativus Singularis (m./f.)' },
      'quid': { lemma: 'quis, quid', pos: 'Soru Zamiri', meaning_tr: 'ne? / niçin?', details: 'Nominativus veya Accusativus Sg. Neutrum' }
    };

    if (table[clean]) {
      const match = table[clean];
      return {
        item: {
          id: clean,
          lemma: match.lemma,
          pos: match.pos,
          meaning_tr: match.meaning_tr,
          stem: '-'
        },
        matchType: 'core',
        analysis: { details: match.details, form: rawWord },
        query: rawWord
      };
    }
    return null;
  },

  lookupEncliticWord(clean, rawWord) {
    // 1. -que (ve)
    const queExemptions = ['quoque', 'itaque', 'ubique', 'denique', 'utrimque', 'undique', 'neque'];
    if (clean.endsWith('que') && clean.length > 5 && !queExemptions.includes(clean)) {
      const stem = clean.slice(0, -3);
      const sub = this.findWordInfo(stem);
      if (sub && sub.matchType !== 'fallback') {
        return {
          item: sub.item,
          matchType: 'enclitic_que',
          analysis: {
            details: (sub.analysis && sub.analysis.details ? sub.analysis.details + ' + ' : '') + 'Bileşik Bağlaç (-que: "ve")',
            form: rawWord
          },
          query: rawWord
        };
      }
    }

    // 2. -ne (soru eki)
    const neExemptions = ['paene', 'bene', 'sine', 'omne', 'nomine', 'homine'];
    if (clean.endsWith('ne') && clean.length > 4 && !neExemptions.includes(clean)) {
      const stem = clean.slice(0, -2);
      const sub = this.findWordInfo(stem);
      if (sub && sub.matchType !== 'fallback') {
        return {
          item: sub.item,
          matchType: 'enclitic_ne',
          analysis: {
            details: (sub.analysis && sub.analysis.details ? sub.analysis.details + ' + ' : '') + 'Soru Eki (-ne: "mi/mı")',
            form: rawWord
          },
          query: rawWord
        };
      }
    }

    // 3. -ve (veya)
    if (clean.endsWith('ve') && clean.length > 5) {
      const stem = clean.slice(0, -2);
      const sub = this.findWordInfo(stem);
      if (sub && sub.matchType !== 'fallback') {
        return {
          item: sub.item,
          matchType: 'enclitic_ve',
          analysis: {
            details: (sub.analysis && sub.analysis.details ? sub.analysis.details + ' + ' : '') + 'Bağlaç (-ve: "veya")',
            form: rawWord
          },
          query: rawWord
        };
      }
    }

    return null;
  },

  heuristicLookup(clean) {
    // Suffix candidates ordered from longest to shortest
    const nounSuffixes = [
      { end: 'arum', details: 'Genetivus Pluralis (-arum)' },
      { end: 'orum', details: 'Genetivus Pluralis (-orum)' },
      { end: 'ibus', details: 'Dativus / Ablativus Pluralis (-ibus)' },
      { end: 'ebus', details: 'Dativus / Ablativus Pluralis (-ebus)' },
      { end: 'ubus', details: 'Dativus / Ablativus Pluralis (-ubus)' },
      { end: 'ium', details: 'Genetivus Pluralis (-ium)' },
      { end: 'uum', details: 'Genetivus Pluralis (-uum)' },
      { end: 'am', details: 'Accusativus Singularis (-am)' },
      { end: 'um', details: 'Accusativus Singularis (-um)' },
      { end: 'em', details: 'Accusativus Singularis (-em)' },
      { end: 'as', details: 'Accusativus Pluralis (-as)' },
      { end: 'os', details: 'Accusativus Pluralis (-os)' },
      { end: 'es', details: 'Nominativus / Accusativus Pluralis (-es)' },
      { end: 'is', details: 'Dativus / Ablativus Pluralis (-is)' },
      { end: 'ae', details: 'Genetivus / Dativus Sg. veya Nom. Pluralis (-ae)' },
      { end: 'ui', details: 'Dativus Singularis (-ui)' }
    ];

    for (const s of nounSuffixes) {
      if (clean.endsWith(s.end) && clean.length > s.end.length + 1) {
        const root = clean.slice(0, -s.end.length);
        for (const [vKey, vItem] of this.vocabMap.entries()) {
          if (vKey.startsWith(root) && Math.abs(vKey.length - root.length) <= 3) {
            return { item: vItem, details: `${s.details} [Kök: ${vItem.lemma}]` };
          }
        }
      }
    }

    // Verb suffixes (active & passive, present, imperfect, future, perfect)
    const verbSuffixes = [
      { end: 'bamus', details: 'Imperfectum 1. Çoğul (-bamus)' },
      { end: 'batis', details: 'Imperfectum 2. Çoğul (-batis)' },
      { end: 'bimus', details: 'Futurum 1. Çoğul (-bimus)' },
      { end: 'bitis', details: 'Futurum 2. Çoğul (-bitis)' },
      { end: 'bantur', details: 'Imperfectum Pasif 3. Çoğul (-bantur)' },
      { end: 'buntur', details: 'Futurum Pasif 3. Çoğul (-buntur)' },
      { end: 'batur', details: 'Imperfectum Pasif 3. Tekil (-batur)' },
      { end: 'bitur', details: 'Futurum Pasif 3. Tekil (-bitur)' },
      { end: 'bant', details: 'Imperfectum 3. Çoğul (-bant)' },
      { end: 'bunt', details: 'Futurum 3. Çoğul (-bunt)' },
      { end: 'bam', details: 'Imperfectum 1. Tekil (-bam)' },
      { end: 'bas', details: 'Imperfectum 2. Tekil (-bas)' },
      { end: 'bat', details: 'Imperfectum 3. Tekil (-bat)' },
      { end: 'bit', details: 'Futurum 3. Tekil (-bit)' },
      { end: 'bis', details: 'Futurum 2. Tekil (-bis)' },
      { end: 'bo', details: 'Futurum 1. Tekil (-bo)' },
      { end: 'ntur', details: 'Praesens Pasif 3. Çoğul (-ntur)' },
      { end: 'tur', details: 'Praesens Pasif 3. Tekil (-tur)' },
      { end: 'nt', details: 'Praesens 3. Çoğul (-nt)' },
      { end: 'mus', details: 'Praesens 1. Çoğul (-mus)' },
      { end: 'tis', details: 'Praesens 2. Çoğul (-tis)' },
      { end: 't', details: 'Praesens 3. Tekil (-t)' },
      { end: 's', details: 'Praesens 2. Tekil (-s)' }
    ];

    for (const v of verbSuffixes) {
      if (clean.endsWith(v.end) && clean.length > v.end.length + 1) {
        const root = clean.slice(0, -v.end.length);
        for (const [vKey, vItem] of this.vocabMap.entries()) {
          if (vItem.category === 'verb' && (vKey.startsWith(root) || root.startsWith(vKey.slice(0, 3)))) {
            return { item: vItem, details: `${v.details} [Fiil: ${vItem.lemma}]` };
          }
        }
      }
    }

    return null;
  },

  showPopoverForWord(wordSpan) {
    const rawWord = wordSpan.dataset.word || wordSpan.textContent.trim();
    const result = this.findWordInfo(rawWord);
    const item = result.item;

    const popover = document.getElementById('wordPopover');
    const lemmaEl = document.getElementById('popoverLemma');
    const posEl = document.getElementById('popoverPos');
    const meaningEl = document.getElementById('popoverMeaning');
    const grammarEl = document.getElementById('popoverGrammar');
    const paradigmsBtn = document.getElementById('popoverParadigmsBtn');
    const audioBtn = document.getElementById('popoverAudioBtn');
    const favBtn = document.getElementById('popoverFavBtn');
    const logeionBtn = document.getElementById('popoverLogeionBtn');

    lemmaEl.textContent = item.lemma + (item.stem && item.stem !== '-' ? `, ${item.stem}` : '');
    posEl.textContent = item.pos || '';

    // Context-aware note extraction from enclosing sentence card or reading passage notes
    let contextualNote = null;
    const cardEl = wordSpan.closest('.sentence-card, .reading-passage-block');
    if (cardEl) {
      const notesEl = cardEl.querySelector('.sentence-notes, .reading-passage-notes, .sentence-syntax');
      if (notesEl) {
        const text = notesEl.textContent;
        const cleanW = this.normalizeKey(rawWord);
        const tokens = text.split(/;|\n/);
        for (const tok of tokens) {
          const cleanTok = this.normalizeKey(tok);
          if (cleanTok.includes(cleanW) || (item.lemma && cleanTok.includes(this.normalizeKey(item.lemma)))) {
            contextualNote = tok.replace(/^[•\s\-\*]+/, '').trim();
            break;
          }
        }
      }
    }

    if (contextualNote && result.matchType === 'fallback') {
      posEl.textContent = 'Ders Notu Çözümlemesi';
      meaningEl.textContent = contextualNote;
    } else {
      meaningEl.textContent = item.meaning_tr || '';
    }

    // Grammar tags
    if (result.analysis && result.analysis.details) {
      let tagHtml = `<span class="grammar-tag">🔍 ${result.analysis.details}</span>`;
      if (contextualNote && !result.analysis.details.includes(contextualNote)) {
        tagHtml += `<span class="grammar-tag" style="margin-top: 4px; display: inline-block;">📌 Not: ${contextualNote}</span>`;
      }
      grammarEl.innerHTML = tagHtml;
      grammarEl.style.display = 'block';
    } else if (contextualNote) {
      grammarEl.innerHTML = `<span class="grammar-tag">📌 ${contextualNote}</span>`;
      grammarEl.style.display = 'block';
    } else {
      grammarEl.innerHTML = '';
      grammarEl.style.display = 'none';
    }

    // Paradigm button action
    paradigmsBtn.onclick = () => {
      this.hidePopover();
      if (window.App && window.App.showParadigmForWord) {
        window.App.showParadigmForWord(item.lemma, item.category);
      }
    };

    // Audio pronunciation
    audioBtn.onclick = () => {
      this.speakLatin(item.lemma || rawWord);
    };

    // Favorite toggle
    const wordKey = item.id || this.normalizeKey(item.lemma);
    const isFav = window.StorageManager ? window.StorageManager.isFavorite(wordKey) : false;
    this.updateFavButtonState(favBtn, isFav);

    favBtn.onclick = () => {
      if (window.StorageManager) {
        const nowFav = window.StorageManager.toggleFavorite(wordKey);
        this.updateFavButtonState(favBtn, nowFav);
      }
    };

    // Logeion link
    const cleanLemma = this.normalizeKey(item.lemma);
    logeionBtn.href = `https://logeion.uchicago.edu/${encodeURIComponent(cleanLemma)}`;

    // Position popover
    popover.classList.remove('hidden');

    if (window.innerWidth <= 640) {
      // Mobile Bottom-Sheet mode: clear inline styles and let CSS fixed bottom rules dock it cleanly
      popover.style.top = '';
      popover.style.left = '';
      popover.classList.remove('flipped-above');
      return;
    }

    const rect = wordSpan.getBoundingClientRect();
    const popRect = popover.getBoundingClientRect();

    let top = rect.bottom + window.scrollY + 8;
    let left = rect.left + window.scrollX + (rect.width / 2) - (popRect.width / 2);

    // Boundary check
    if (left < 10) left = 10;
    if (left + popRect.width > window.innerWidth - 10) {
      left = window.innerWidth - popRect.width - 10;
    }

    if (rect.bottom + popRect.height + 20 > window.innerHeight && rect.top > popRect.height + 20) {
      // Flip to above
      top = rect.top + window.scrollY - popRect.height - 8;
      popover.classList.add('flipped-above');
    } else {
      popover.classList.remove('flipped-above');
    }

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  },

  updateFavButtonState(btn, isFav) {
    if (isFav) {
      btn.classList.add('active');
      btn.innerHTML = '<span>★ Favorilerde</span>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<span>☆ Favori</span>';
    }
  },

  hidePopover() {
    const popover = document.getElementById('wordPopover');
    if (popover) {
      popover.classList.add('hidden');
    }
  },

  speakLatin(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT'; // Classical Italian pronunciation approximates Classical Latin phonology
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
};

window.ReadingEngine = ReadingEngine;
