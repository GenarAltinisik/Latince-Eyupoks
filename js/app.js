// js/app.js - Latince Eyupoks Master Application Controller
// İstanbul Üniversitesi Klasik Filoloji - Latince Gramer 1 & 2 (Doç. Dr. Eyüp Çoraklı)

const App = {
  currentView: 'lessons',
  activeTerm: 'all', // 'all', 1, 2
  currentLessonId: null,
  currentSlideIndex: 0,
  slideViewMode: 'card', // 'card' or 'list'
  caseOrder: 'NVGDAcAb',
  
  // Cache
  vocabList: [],
  curriculumList: [],

  init() {
    // 1. Initialize Storage & Theme
    const savedTheme = window.StorageManager ? window.StorageManager.getTheme() : 'parchment';
    this.setTheme(savedTheme);

    const savedTerm = window.StorageManager ? window.StorageManager.getActiveTerm() : 'all';
    this.activeTerm = savedTerm;

    const savedCaseOrder = window.StorageManager ? window.StorageManager.getCaseOrder() : 'NVGDAcAb';
    this.caseOrder = savedCaseOrder;

    // 2. Load Datasets
    if (typeof EYUP_VOCABULARY !== 'undefined') {
      this.vocabList = EYUP_VOCABULARY;
    }
    if (typeof EYUP_CURRICULUM !== 'undefined') {
      this.curriculumList = EYUP_CURRICULUM;
    }

    // 3. Initialize Engines
    if (window.ReadingEngine) {
      window.ReadingEngine.init();
    }

    this.flashcardEngine = new FlashcardEngine();
    this.flashcardEngine.init(this.vocabList);

    this.quizEngine = new QuizEngine();
    this.quizEngine.init(this.vocabList);

    // 4. Bind UI & Navigation Events
    this.bindNavigation();
    this.bindHeaderControls();
    this.bindCurriculumEvents();
    this.bindDictionaryEvents();
    this.bindParadigmEvents();
    this.bindFavoritesEvents();
    this.bindKeyboardShortcuts();

    // 5. Initial Render
    this.updateTermFilterButtons();
    this.renderCurriculumSidebar();
    
    // Select first lesson by default
    if (this.curriculumList.length > 0) {
      this.loadLesson(this.curriculumList[0].id);
    }

    this.renderDictionary();
    this.renderParadigmsView();
    this.renderFavorites();

    // Listen for storage changes
    window.addEventListener('eyupoks_favorites_changed', () => {
      this.renderFavorites();
      this.renderDictionary(true); // Soft update
    });

    console.log('Latince Eyupoks initialized successfully with', this.curriculumList.length, 'lessons and', this.vocabList.length, 'authoritative vocabulary entries.');
  },

  // ==========================================================================
  // 1. THEME & HEADER CONTROLS
  // ==========================================================================
  setTheme(theme) {
    if (window.StorageManager) window.StorageManager.setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.getElementById('themeToggleIcon');
    if (themeIcon) {
      if (theme === 'dark') themeIcon.textContent = '🌙';
      else if (theme === 'light') themeIcon.textContent = '☀️';
      else themeIcon.textContent = '📜';
    }
  },

  cycleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'parchment';
    const themes = ['parchment', 'dark', 'light'];
    const nextIdx = (themes.indexOf(current) + 1) % themes.length;
    this.setTheme(themes[nextIdx]);
  },

  setTermFilter(termVal) {
    this.activeTerm = termVal;
    if (window.StorageManager) window.StorageManager.setActiveTerm(termVal);
    this.updateTermFilterButtons();

    // Refresh active views
    this.renderCurriculumSidebar();
    this.renderDictionary();
    if (this.flashcardEngine) this.flashcardEngine.applyFilter();
    if (this.quizEngine) this.quizEngine.startQuiz();
  },

  updateTermFilterButtons() {
    document.querySelectorAll('.term-filter-btn').forEach(btn => {
      const btnTerm = btn.dataset.term;
      btn.classList.toggle('active', btnTerm === String(this.activeTerm));
    });
  },

  bindHeaderControls() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.cycleTheme());
    }

    document.querySelectorAll('.term-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.term;
        this.setTermFilter(val);
      });
    });
  },

  // ==========================================================================
  // 2. VIEW NAVIGATION
  // ==========================================================================
  bindNavigation() {
    // Desktop tabs & Mobile bottom nav items
    const navButtons = document.querySelectorAll('[data-target-view]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = btn.dataset.targetView;
        this.switchView(targetView);
      });
    });
  },

  switchView(viewName) {
    this.currentView = viewName;

    // Update active tab buttons
    document.querySelectorAll('[data-target-view]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.targetView === viewName);
    });

    // Hide all views, activate selected view
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view${this.capitalize(viewName)}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Contextual refresh
    if (viewName === 'dictionary') {
      this.renderDictionary();
    } else if (viewName === 'flashcard') {
      if (this.flashcardEngine) this.flashcardEngine.renderCurrentCard();
    } else if (viewName === 'favorites') {
      this.renderFavorites();
    } else if (viewName === 'paradigms') {
      this.renderParadigmsView();
    }
  },

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // ==========================================================================
  // 3. CURRICULUM / LESSON ENGINE
  // ==========================================================================
  bindCurriculumEvents() {
    // Search within curriculum sidebar
    const searchInput = document.getElementById('curriculumSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.renderCurriculumSidebar(searchInput.value.trim().toLowerCase());
      });
    }

    // Slide navigation controls
    const prevBtn = document.getElementById('btnPrevSlide');
    const nextBtn = document.getElementById('btnNextSlide');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

    // Slide view mode toggle (Card vs List)
    const modeCardBtn = document.getElementById('btnModeCard');
    const modeListBtn = document.getElementById('btnModeList');
    if (modeCardBtn) {
      modeCardBtn.addEventListener('click', () => {
        this.slideViewMode = 'card';
        modeCardBtn.classList.add('active');
        if (modeListBtn) modeListBtn.classList.remove('active');
        this.renderSlideViewer();
      });
    }
    if (modeListBtn) {
      modeListBtn.addEventListener('click', () => {
        this.slideViewMode = 'list';
        modeListBtn.classList.add('active');
        if (modeCardBtn) modeCardBtn.classList.remove('active');
        this.renderSlideViewer();
      });
    }
  },

  renderCurriculumSidebar(searchQuery = '') {
    const listEl = document.getElementById('curriculumLessonList');
    if (!listEl) return;

    let filtered = this.curriculumList;

    // Filter by active term
    if (this.activeTerm === '1') {
      filtered = filtered.filter(l => l.term === 1);
    } else if (this.activeTerm === '2') {
      filtered = filtered.filter(l => l.term === 2);
    }

    // Filter by query
    if (searchQuery) {
      filtered = filtered.filter(l => {
        const titleMatch = l.title.toLowerCase().includes(searchQuery);
        const vocabMatch = l.vocab && l.vocab.some(v => v.toLowerCase().includes(searchQuery));
        return titleMatch || vocabMatch;
      });
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); text-align: center; font-size: 0.85rem;">Ders bulunamadı.</div>`;
      return;
    }

    listEl.innerHTML = filtered.map(lesson => {
      const isActive = lesson.id === this.currentLessonId;
      const vocabCountBadge = lesson.vocabCount > 0 ? `<span class="tag-badge pos-tag">${lesson.vocabCount} Kelime</span>` : '';
      return `
        <div class="curriculum-item ${isActive ? 'active' : ''}" data-lesson-id="${lesson.id}" role="button" tabindex="0">
          <div class="curriculum-item-top">
            <span>Dönem ${lesson.term} • Hafta ${lesson.week}</span>
            <span>Ders ${lesson.lecture}</span>
          </div>
          <div class="curriculum-item-title">${lesson.title.replace(/^Dönem \d+ • Hafta \d+ \(Ders \d+\)\s*(- )?/, '') || lesson.file}</div>
          <div class="curriculum-item-meta">
            <span>📊 ${lesson.slideCount} Slayt</span>
            ${vocabCountBadge}
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers
    listEl.querySelectorAll('.curriculum-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.lessonId;
        this.loadLesson(id);
      });
    });
  },

  loadLesson(lessonId) {
    const lesson = this.curriculumList.find(l => l.id === lessonId);
    if (!lesson) return;

    this.currentLessonId = lessonId;
    this.currentSlideIndex = 0;

    // Update active highlight in sidebar
    document.querySelectorAll('.curriculum-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lessonId === lessonId);
    });

    // Render Banner
    const bannerTitle = document.getElementById('lessonBannerTitle');
    const bannerBadges = document.getElementById('lessonBannerBadges');
    if (bannerTitle) {
      bannerTitle.textContent = lesson.title;
    }
    if (bannerBadges) {
      bannerBadges.innerHTML = `
        <span class="meta-badge term-badge">📘 ${lesson.term}. Dönem</span>
        <span class="meta-badge">📅 Hafta ${lesson.week} • Ders ${lesson.lecture}</span>
        <span class="meta-badge">📄 ${lesson.slideCount} Slayt</span>
        <span class="meta-badge vocab-badge">📚 ${lesson.vocabCount} Ders Kelimesi</span>
        <span class="meta-badge">📁 ${lesson.file}</span>
      `;
    }

    // Render Lesson Vocabulary Chips Panel
    this.renderLessonVocabPanel(lesson);

    // Render Slides
    this.renderSlideViewer();
  },

  renderLessonVocabPanel(lesson) {
    const vocabPanel = document.getElementById('lessonVocabPanel');
    if (!vocabPanel) return;

    if (!lesson.vocab || lesson.vocab.length === 0) {
      vocabPanel.style.display = 'none';
      return;
    }

    vocabPanel.style.display = 'block';
    const chipsContainer = document.getElementById('lessonVocabChips');
    if (!chipsContainer) return;

    chipsContainer.innerHTML = lesson.vocab.map(vId => {
      const vObj = this.vocabList.find(w => w.id === vId || w.lemma === vId);
      const label = vObj ? `${vObj.lemma} (${vObj.meaning_tr})` : vId;
      return `<button class="vocab-chip" data-vocab-id="${vId}" title="Sözlük & Çekim Gör">${label}</button>`;
    }).join('');

    chipsContainer.querySelectorAll('.vocab-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const vId = chip.dataset.vocabId;
        const vObj = this.vocabList.find(w => w.id === vId || w.lemma === vId);
        if (vObj) {
          this.showParadigmForWord(vObj.lemma, vObj.category);
        }
      });
    });
  },

  renderSlideViewer() {
    const lesson = this.curriculumList.find(l => l.id === this.currentLessonId);
    if (!lesson || !lesson.slides || lesson.slides.length === 0) return;

    const displayArea = document.getElementById('slidesDisplayArea');
    const counterBadge = document.getElementById('slideCounterBadge');
    const prevBtn = document.getElementById('btnPrevSlide');
    const nextBtn = document.getElementById('btnNextSlide');

    const totalSlides = lesson.slides.length;

    if (this.slideViewMode === 'card') {
      // Single Card Mode
      if (counterBadge) counterBadge.textContent = `Slayt ${this.currentSlideIndex + 1} / ${totalSlides}`;
      if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
      if (nextBtn) nextBtn.disabled = this.currentSlideIndex === totalSlides - 1;

      const slide = lesson.slides[this.currentSlideIndex];
      displayArea.innerHTML = this.renderSlideHtml(slide, this.currentSlideIndex + 1, totalSlides);
    } else {
      // Continuous List Mode
      if (counterBadge) counterBadge.textContent = `Tüm Slaytlar (${totalSlides})`;
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;

      displayArea.innerHTML = lesson.slides.map((slide, idx) => {
        return this.renderSlideHtml(slide, idx + 1, totalSlides);
      }).join('');
    }
  },

  renderSlideHtml(slide, slideNum, totalSlides) {
    const rawContent = slide.content || '';
    const formattedContent = this.formatSlideContent(rawContent);

    return `
      <div class="slide-card">
        <div class="slide-card-header">
          <span class="slide-number-pill">Slayt ${slideNum} / ${totalSlides}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${slide.header || ''}</span>
        </div>
        <div class="slide-card-body">
          ${formattedContent}
        </div>
      </div>
    `;
  },

  formatSlideContent(text) {
    if (!text) return '';
    const lines = text.split(/\r?\n/);
    let html = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        html += '<br>';
        continue;
      }

      // Check for translation arrow '⤗'
      if (line.startsWith('⤗')) {
        const trPart = line.replace(/^⤗\s*/, '');
        html += `<div class="latin-translation-line">↳ <em>${trPart}</em></div>`;
      } 
      // Latin quote block / Latin sentence candidate
      else if (/^[A-Z][a-zāēīōū]+\s+[a-zāēīōū]+/i.test(line) && (line.includes(' est ') || line.includes(' sunt ') || line.endsWith('.') || line.endsWith('!') || line.endsWith('?'))) {
        const interactiveLine = window.ReadingEngine ? window.ReadingEngine.renderInteractiveText(line) : line;
        html += `<div class="latin-quote-block">${interactiveLine}</div>`;
      } 
      // Main headers
      else if (/^(LINGUA LATINA|LATİNCENİN DÖNEMLERİ|LATİN ALFABESİ|CASUS|NUMERUS|GENUS|\d+\.\s*GRUP\s*İSİMLER|DÜZENSİZ FİİLLER|ÖRNEK CÜMLELER|OKUMA PARÇASI)/i.test(line)) {
        html += `<h4 style="font-family: var(--font-serif); color: var(--primary); font-size: 1.22rem; margin: 0.85rem 0 0.35rem 0; border-bottom: 1.5px solid var(--border-color); padding-bottom: 0.25rem;">${line}</h4>`;
      } 
      // Normal text with interactive Latin tokens
      else {
        const interactive = window.ReadingEngine ? window.ReadingEngine.renderInteractiveText(line) : line;
        html += `<p style="margin-bottom: 0.4rem;">${interactive}</p>`;
      }
    }

    return html;
  },

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderSlideViewer();
    }
  },

  nextSlide() {
    const lesson = this.curriculumList.find(l => l.id === this.currentLessonId);
    if (lesson && this.currentSlideIndex < lesson.slides.length - 1) {
      this.currentSlideIndex++;
      this.renderSlideViewer();
    }
  },

  // ==========================================================================
  // 4. DICTIONARY ENGINE
  // ==========================================================================
  bindDictionaryEvents() {
    const searchInput = document.getElementById('dictSearchInput');
    const clearBtn = document.getElementById('clearDictSearchBtn');
    const categoryFilter = document.getElementById('dictCategoryFilter');
    const termFilter = document.getElementById('dictTermFilter');

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        if (clearBtn) clearBtn.style.display = searchInput.value ? 'block' : 'none';
        this.renderDictionary();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        this.renderDictionary();
        searchInput.focus();
      });
    }

    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => this.renderDictionary());
    }

    if (termFilter) {
      termFilter.addEventListener('change', () => this.renderDictionary());
    }

    // Category pills click
    document.querySelectorAll('.dict-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.dict-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (categoryFilter) {
          categoryFilter.value = pill.dataset.category;
        }
        this.renderDictionary();
      });
    });
  },

  renderDictionary(softUpdate = false) {
    const grid = document.getElementById('dictWordsGrid');
    const statsEl = document.getElementById('dictResultsCount');
    if (!grid) return;

    const searchInput = document.getElementById('dictSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const catSelect = document.getElementById('dictCategoryFilter');
    const selectedCat = catSelect ? catSelect.value : 'all';
    const termSelect = document.getElementById('dictTermFilter');
    const selectedTerm = termSelect ? termSelect.value : (this.activeTerm !== 'all' ? String(this.activeTerm) : 'all');

    let filtered = this.vocabList.filter(item => {
      // 1. Term check
      if (selectedTerm !== 'all') {
        if (String(item.term) !== selectedTerm) return false;
      }

      // 2. Category check
      if (selectedCat !== 'all') {
        if (selectedCat === 'adverb') {
          if (item.category !== 'adverb' && item.category !== 'preposition' && item.category !== 'conjunction') return false;
        } else if (item.category !== selectedCat) {
          return false;
        }
      }

      // 3. Query check
      if (query) {
        const lemmaMatch = item.lemma.toLowerCase().includes(query);
        const meaningMatch = item.meaning_tr && item.meaning_tr.toLowerCase().includes(query);
        const stemMatch = item.stem && item.stem.toLowerCase().includes(query);
        if (!lemmaMatch && !meaningMatch && !stemMatch) return false;
      }

      return true;
    });

    if (statsEl) {
      statsEl.innerHTML = `Toplam <strong>${this.vocabList.length}</strong> kelimeden <strong>${filtered.length}</strong> tanesi listeleniyor.`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
          <h4 style="color: var(--text-main); margin-bottom: 0.35rem;">Eşleşen Kelime Bulunamadı</h4>
          <p style="color: var(--text-muted); font-size: 0.88rem;">Farklı bir arama terimi veya kategori filtresi deneyebilirsiniz.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const isFav = window.StorageManager ? window.StorageManager.isFavorite(item.id) : false;
      const headword = item.lemma + (item.stem && item.stem !== '-' ? `, ${item.stem}` : '');
      const lessonRef = item.lessons && item.lessons.length > 0 ? item.lessons[0].replace('T', 'Dönem ').replace('_W', ' • H.').replace('_L', ' Ders ') : `Dönem ${item.term} • Hafta ${item.week}`;

      return `
        <div class="word-card" data-word-id="${item.id}">
          <div class="word-card-top">
            <span class="word-rank-badge">D.${item.term} H.${item.week}</span>
            <div class="word-card-actions">
              <button class="btn-icon-sm btn-word-audio" data-lemma="${item.lemma}" title="Telaffuzu Dinle">🔊</button>
              <button class="btn-icon-sm btn-word-fav ${isFav ? 'starred' : ''}" data-word-id="${item.id}" title="${isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}">
                ${isFav ? '★' : '☆'}
              </button>
            </div>
          </div>
          
          <h3 class="word-headword">${headword}</h3>
          
          <div class="word-meta">
            <span class="tag-badge pos-tag">${item.pos || 'Kelime'}</span>
            <span class="tag-badge">${this.getCategoryLabel(item.category)}</span>
            <span class="tag-badge">${lessonRef}</span>
          </div>

          <div class="word-translations">
            <div class="translation-box">
              <span class="translation-header">Türkçe Anlamı</span>
              <span class="tr-text"><strong>${item.meaning_tr}</strong></span>
            </div>
          </div>

          <div style="margin-top: 0.85rem; padding-top: 0.65rem; border-top: 1px dashed var(--border-color); display: flex; justify-content: space-between; align-items: center;">
            <button class="btn-secondary-sm btn-show-paradigm" data-lemma="${item.lemma}" data-category="${item.category}">
              📜 Çekim Tablosu
            </button>
            <a href="https://logeion.uchicago.edu/${encodeURIComponent(item.lemma)}" target="_blank" rel="noopener" class="btn-secondary-sm" style="font-size: 0.72rem;">
              🏛️ Logeion
            </a>
          </div>
        </div>
      `;
    }).join('');

    // Attach card action handlers
    grid.querySelectorAll('.btn-word-audio').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.ReadingEngine) window.ReadingEngine.speakLatin(btn.dataset.lemma);
      });
    });

    grid.querySelectorAll('.btn-word-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wordId = btn.dataset.wordId;
        if (window.StorageManager) {
          const nowFav = window.StorageManager.toggleFavorite(wordId);
          btn.classList.toggle('starred', nowFav);
          btn.textContent = nowFav ? '★' : '☆';
        }
      });
    });

    grid.querySelectorAll('.btn-show-paradigm').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showParadigmForWord(btn.dataset.lemma, btn.dataset.category);
      });
    });
  },

  getCategoryLabel(cat) {
    const labels = {
      noun_1: '1. Çekim İsim',
      noun_2: '2. Çekim İsim',
      noun_3: '3. Çekim İsim',
      noun_4: '4. Çekim İsim',
      noun_5: '5. Çekim İsim',
      verb: 'Fiil',
      adjective: 'Sıfat',
      adverb: 'Zarf',
      preposition: 'Edat',
      conjunction: 'Bağlaç',
      pronoun: 'Zamir'
    };
    return labels[cat] || cat;
  },

  // ==========================================================================
  // 5. PARADIGMS EXPLORER ENGINE
  // ==========================================================================
  bindParadigmEvents() {
    // Search lookup
    const lookupInput = document.getElementById('paradigmLookupInput');
    const lookupBtn = document.getElementById('btnLookupParadigm');
    if (lookupBtn && lookupInput) {
      lookupBtn.addEventListener('click', () => {
        const query = lookupInput.value.trim();
        if (query) this.lookupCustomWordParadigm(query);
      });
      lookupInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const query = lookupInput.value.trim();
          if (query) this.lookupCustomWordParadigm(query);
        }
      });
    }

    // Category tabs
    document.querySelectorAll('.paradigm-cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.paradigm-cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        this.renderReferenceParadigms(cat);
      });
    });

    // Case order toggle in paradigms
    document.querySelectorAll('.case-order-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.case-order-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.caseOrder = btn.dataset.order;
        if (window.StorageManager) window.StorageManager.setCaseOrder(this.caseOrder);
        this.renderParadigmsView();
      });
    });

    // Modal close
    const modalClose = document.getElementById('paradigmModalClose');
    const modalBackdrop = document.getElementById('paradigmModal');
    if (modalClose) modalClose.addEventListener('click', () => this.closeParadigmModal());
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) this.closeParadigmModal();
      });
    }
  },

  renderParadigmsView() {
    const activeTab = document.querySelector('.paradigm-cat-tab.active');
    const cat = activeTab ? activeTab.dataset.cat : 'nouns';
    this.renderReferenceParadigms(cat);
  },

  renderReferenceParadigms(categoryKey) {
    const container = document.getElementById('paradigmContentArea');
    if (!container) return;

    if (typeof InflectionEngine !== 'undefined' && InflectionEngine.renderReferenceCategoryHtml) {
      container.innerHTML = InflectionEngine.renderReferenceCategoryHtml(categoryKey, this.caseOrder);
    } else {
      container.innerHTML = `<p style="padding: 1rem; color: var(--text-muted);">Çekim motoru yükleniyor...</p>`;
    }
  },

  lookupCustomWordParadigm(wordStr) {
    const clean = wordStr.toLowerCase().trim();
    // 1. Check in vocabulary list
    const found = this.vocabList.find(w => w.lemma.toLowerCase() === clean || w.id === clean);
    if (found) {
      this.showParadigmForWord(found.lemma, found.category);
      return;
    }

    // 2. Fallback: generate paradigm dynamically
    this.showParadigmForWord(clean, 'unknown');
  },

  showParadigmForWord(lemma, category) {
    const item = this.vocabList.find(w => w.lemma.toLowerCase() === lemma.toLowerCase());
    const adapted = item ? window.ReadingEngine.adaptWordForInflection(item) : {
      lemma: lemma,
      headword: lemma,
      pos_en: category === 'verb' ? 'Verb: 1st Conjugation' : 'Noun: 1st Declension',
      pos_tr: 'Latince Sözcük',
      meaning_tr: item ? item.meaning_tr : 'Çekim Tablosu',
      definition_en: item ? item.meaning_tr : ''
    };

    const modal = document.getElementById('paradigmModal');
    const modalTitle = document.getElementById('paradigmModalTitle');
    const modalBody = document.getElementById('paradigmModalBody');

    if (modalTitle) {
      modalTitle.textContent = `${adapted.headword} • Çekim Tablosu`;
    }

    if (modalBody && typeof InflectionEngine !== 'undefined' && InflectionEngine.renderWordInflectionHtml) {
      modalBody.innerHTML = InflectionEngine.renderWordInflectionHtml(adapted, this.caseOrder);
    }

    if (modal) {
      modal.classList.remove('hidden');
    }
  },

  closeParadigmModal() {
    const modal = document.getElementById('paradigmModal');
    if (modal) modal.classList.add('hidden');
  },

  // ==========================================================================
  // 6. FAVORITES ENGINE
  // ==========================================================================
  bindFavoritesEvents() {
    const startDeckBtn = document.getElementById('btnStartFavDeck');
    const startQuizBtn = document.getElementById('btnStartFavQuiz');
    const clearFavsBtn = document.getElementById('btnClearAllFavs');

    if (startDeckBtn) {
      startDeckBtn.addEventListener('click', () => {
        this.switchView('flashcard');
        const deckSelect = document.getElementById('flashcardDeckSelect');
        if (deckSelect) {
          deckSelect.value = 'favorites';
          if (this.flashcardEngine) this.flashcardEngine.applyFilter();
        }
      });
    }

    if (startQuizBtn) {
      startQuizBtn.addEventListener('click', () => {
        this.switchView('quiz');
        if (this.quizEngine) this.quizEngine.startQuiz();
      });
    }

    if (clearFavsBtn) {
      clearFavsBtn.addEventListener('click', () => {
        if (confirm('Tüm favori kelimelerinizi temizlemek istediğinizden emin misiniz?')) {
          localStorage.setItem('eyupoks_favorites', JSON.stringify([]));
          window.dispatchEvent(new CustomEvent('eyupoks_favorites_changed'));
        }
      });
    }
  },

  renderFavorites() {
    const favsContainer = document.getElementById('favoritesWordsGrid');
    const favCountBadge = document.getElementById('favCountBadge');
    if (!favsContainer) return;

    const favIds = window.StorageManager ? window.StorageManager.getFavorites() : [];
    if (favCountBadge) favCountBadge.textContent = favIds.length;

    const favWords = this.vocabList.filter(w => favIds.includes(w.id));

    if (favWords.length === 0) {
      favsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">⭐</span>
          <h4 style="color: var(--text-main); margin-bottom: 0.35rem;">Henüz Favori Kelimeniz Yok</h4>
          <p style="color: var(--text-muted); font-size: 0.88rem;">Ders notlarını okurken veya sözlükte gezinirken kelimelerin yanındaki yıldız (⭐) butonuna tıklayarak buraya ekleyebilirsiniz.</p>
        </div>
      `;
      return;
    }

    favsContainer.innerHTML = favWords.map(item => {
      const headword = item.lemma + (item.stem && item.stem !== '-' ? `, ${item.stem}` : '');
      return `
        <div class="word-card">
          <div class="word-card-top">
            <span class="word-rank-badge">D.${item.term} H.${item.week}</span>
            <button class="btn-icon-sm btn-word-fav starred" data-word-id="${item.id}" title="Favorilerden Çıkar">★</button>
          </div>
          <h3 class="word-headword">${headword}</h3>
          <div class="word-meta">
            <span class="tag-badge pos-tag">${item.pos || ''}</span>
            <span class="tag-badge">${this.getCategoryLabel(item.category)}</span>
          </div>
          <div class="word-translations">
            <div class="translation-box">
              <span class="tr-text"><strong>${item.meaning_tr}</strong></span>
            </div>
          </div>
          <div style="margin-top: 0.75rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color); display: flex; gap: 0.5rem;">
            <button class="btn-secondary-sm btn-show-paradigm" data-lemma="${item.lemma}" data-category="${item.category}">📜 Çekimler</button>
            <button class="btn-secondary-sm btn-word-audio" data-lemma="${item.lemma}">🔊 Dinle</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach card event listeners
    favsContainer.querySelectorAll('.btn-word-audio').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.ReadingEngine) window.ReadingEngine.speakLatin(btn.dataset.lemma);
      });
    });

    favsContainer.querySelectorAll('.btn-word-fav').forEach(btn => {
      btn.addEventListener('click', () => {
        const wordId = btn.dataset.wordId;
        if (window.StorageManager) {
          window.StorageManager.toggleFavorite(wordId);
        }
      });
    });

    favsContainer.querySelectorAll('.btn-show-paradigm').forEach(btn => {
      btn.addEventListener('click', () => {
        this.showParadigmForWord(btn.dataset.lemma, btn.dataset.category);
      });
    });
  },

  // ==========================================================================
  // 7. KEYBOARD SHORTCUTS
  // ==========================================================================
  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

      // In Lessons view: Arrow navigation for slides
      if (this.currentView === 'lessons' && this.slideViewMode === 'card') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      }

      // Close paradigm modal on Escape
      if (e.key === 'Escape') {
        this.closeParadigmModal();
      }
    });
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.App = App;
  App.init();
});
