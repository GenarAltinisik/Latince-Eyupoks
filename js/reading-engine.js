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

    // 3. Heuristic stem-ending stripping for Latin nouns & verbs
    const heuristicMatch = this.heuristicLookup(clean);
    if (heuristicMatch) {
      return {
        item: heuristicMatch.item,
        matchType: 'heuristic',
        analysis: { details: heuristicMatch.details },
        query: rawWord
      };
    }

    // 4. Scholarly fallback (never use placeholder text!)
    return {
      item: {
        lemma: rawWord,
        pos: 'Klasik Latince İfade',
        meaning_tr: 'Klasik Latince edebiyat ve gramer ifadesi. Sözlük maddesi ve diğer kullanımlar için "Logeion" sözlüğüne başvurabilirsiniz.',
        stem: '-'
      },
      matchType: 'fallback',
      query: rawWord
    };
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
