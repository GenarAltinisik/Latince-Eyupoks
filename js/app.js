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
  // 3. AUTHORITATIVE FASICULE TEXTBOOK ENGINE
  // ==========================================================================
  bindCurriculumEvents() {
    // Search within curriculum sidebar
    const searchInput = document.getElementById('curriculumSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.renderCurriculumSidebar(searchInput.value.trim().toLowerCase());
      });
    }

    this.bindMobileDrawer();
  },

  bindMobileDrawer() {
    const toggleBtn = document.getElementById('mobileSidebarToggleBtn');
    const closeBtn = document.getElementById('sidebarCloseBtn');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.openMobileSidebar();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }

    // Close drawer on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileSidebar();
      }
    });
  },

  openMobileSidebar() {
    const sidebar = document.getElementById('curriculumSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('mobile-open');
    document.body.style.overflow = 'hidden';
  },

  closeMobileSidebar() {
    const sidebar = document.getElementById('curriculumSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('mobile-open');
    document.body.style.overflow = '';
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
        const titleMatch = l.title && l.title.toLowerCase().includes(searchQuery);
        const schedMatch = l.academicSchedule && l.academicSchedule.toLowerCase().includes(searchQuery);
        const topicMatch = l.topics && l.topics.some(t => t.toLowerCase().includes(searchQuery));
        const vocabMatch = l.vocab && l.vocab.some(v => v.toLowerCase().includes(searchQuery));
        return titleMatch || schedMatch || topicMatch || vocabMatch;
      });
    }

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding: 1.25rem; color: var(--text-muted); text-align: center; font-size: 0.85rem;">Fasikül bulunamadı.</div>`;
      return;
    }

    listEl.innerHTML = filtered.map(lesson => {
      const isActive = lesson.id === this.currentLessonId;
      const vocabCountBadge = lesson.vocab && lesson.vocab.length > 0 
        ? `<span class="curriculum-meta-chip pos-chip">📚 ${lesson.vocab.length} Kelime</span>` 
        : '';

      return `
        <div class="curriculum-item ${isActive ? 'active' : ''}" data-lesson-id="${lesson.id}" role="button" tabindex="0">
          <div class="curriculum-item-top">
            <span class="curriculum-schedule-pill">📅 ${lesson.academicSchedule || `Dönem ${lesson.term} • Hafta ${lesson.week}`}</span>
          </div>
          <div class="curriculum-item-title">${lesson.title}</div>
          ${lesson.subtitle ? `<div class="curriculum-item-sub">${lesson.subtitle}</div>` : ''}
          <div class="curriculum-item-meta">
            <span class="curriculum-meta-chip">${lesson.difficulty || 'Temel'}</span>
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

    // Update active highlight in sidebar
    document.querySelectorAll('.curriculum-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lessonId === lessonId);
    });

    // Update mobile toggle button text
    const mobileTitleEl = document.getElementById('mobileCurrentLessonTitle');
    if (mobileTitleEl) {
      const sched = lesson.academicSchedule || `Dönem ${lesson.term} • Hafta ${lesson.week}`;
      mobileTitleEl.textContent = `${sched}: ${lesson.title}`;
    }

    // Close mobile drawer if open
    this.closeMobileSidebar();

    // Render the authoritative digital textbook fasicule
    this.renderFasicule(lesson);

    // If on mobile, smooth scroll to top of lesson
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  renderFasicule(lesson) {
    const readerEl = document.getElementById('fasiculeReader');
    if (!readerEl) return;

    // Find previous and next lessons in current order
    const currentIndex = this.curriculumList.findIndex(l => l.id === lesson.id);
    const prevLesson = currentIndex > 0 ? this.curriculumList[currentIndex - 1] : null;
    const nextLesson = currentIndex < this.curriculumList.length - 1 ? this.curriculumList[currentIndex + 1] : null;

    // Prepare vocab objects
    const lessonVocabWords = (lesson.vocab || []).map(vId => {
      const vObj = this.vocabList.find(w => w.id === vId || w.lemma === vId);
      return vObj || { id: vId, lemma: vId, meaning_tr: '', pos: '', category: '' };
    });

    // Sections HTML
    const sectionsHtml = (lesson.sections || []).map((sec) => {
      let calloutHtml = '';
      if (sec.calloutText) {
        const type = sec.calloutType || 'info';
        let icon = '💡';
        if (type === 'rule') icon = '📜';
        else if (type === 'warning') icon = '⚠️';

        calloutHtml = `
          <div class="fasicule-callout callout-${type}">
            <div class="callout-header">
              <span class="callout-icon">${icon}</span>
              <strong class="callout-title">${sec.calloutTitle || 'Gramer Notu'}</strong>
            </div>
            <div class="callout-text">${sec.calloutText}</div>
          </div>
        `;
      }

      return `
        <article class="fasicule-section-card">
          <h3 class="fasicule-section-title">${sec.title}</h3>
          <div class="fasicule-section-prose">
            ${sec.html}
          </div>
          ${calloutHtml}
          ${sec.tableHtml || ''}
        </article>
      `;
    }).join('');

    // Sentence analysis HTML
    let sentencesHtml = '';
    if (lesson.sentences && lesson.sentences.length > 0) {
      sentencesHtml = `
        <section class="fasicule-sentences-section">
          <div class="sentences-section-header">
            <h3 class="fasicule-section-title" style="margin-bottom: 0.35rem;">🔍 Örnek Cümleler ve Sentaks Çözümlemeleri</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
              Cümlelerdeki her bir Latince kelimeye tıklayarak morfolojik çekim ve sözlük bilgilerine erişebilirsiniz.
            </p>
          </div>
          <div class="sentence-cards-list">
            ${lesson.sentences.map((sent, sIdx) => {
              const interactiveLatin = window.ReadingEngine ? window.ReadingEngine.renderInteractiveText(sent.latin) : sent.latin;
              const isTrToLat = sent.direction === 'tr_to_lat';
              const authorBadge = sent.author ? `<span class="sentence-author-badge" title="Müellif / Kaynak">🏛️ ${sent.author}</span>` : '';

              if (isTrToLat) {
                return `
                  <div class="sentence-analysis-card tr-to-lat-card">
                    <div class="sentence-card-top">
                      <span class="sentence-card-number">Alıştırma ${sIdx + 1}</span>
                      <span class="sentence-dir-badge">🇹🇷 ➔ 🏛️ Türkçeden Latinceye</span>
                      ${authorBadge}
                    </div>
                    <div class="sentence-stimulus-text"><strong style="color: var(--accent);">🇹🇷 Türkçe:</strong> ${sent.tr}</div>
                    <div class="sentence-latin-text" style="margin-top: 0.35rem;"><strong style="color: var(--primary);">🏛️ Latince:</strong> ${interactiveLatin}</div>
                    ${(sent.analysis || sent.notes) ? `
                      <div class="sentence-syntax-notes">
                        <span class="syntax-badge">Gramer & Sentaks</span>
                        <span class="syntax-detail">${sent.analysis || sent.notes}</span>
                      </div>
                    ` : ''}
                  </div>
                `;
              }

              return `
                <div class="sentence-analysis-card">
                  <div class="sentence-card-top">
                    <span class="sentence-card-number">Örnek ${sIdx + 1}</span>
                    ${authorBadge}
                  </div>
                  <div class="sentence-latin-text">${interactiveLatin}</div>
                  <div class="sentence-turkish-text">↳ <em>${sent.tr}</em></div>
                  ${(sent.analysis || sent.notes) ? `
                    <div class="sentence-syntax-notes">
                      <span class="syntax-badge">Gramer & Sentaks</span>
                      <span class="syntax-detail">${sent.analysis || sent.notes}</span>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </section>
      `;
    }

    // Vocabulary palette chips
    let vocabChipsHtml = '';
    if (lessonVocabWords.length > 0) {
      vocabChipsHtml = `
        <section class="fasicule-vocab-section">
          <div class="vocab-section-header">
            <h4>📖 Bu Fasikülde Öğrenilen Temel Sözcükler (${lessonVocabWords.length})</h4>
            <span class="vocab-hint">Sözcüğe tıklayarak 6 hal veya fiil çekim tablosuna ulaşabilirsiniz</span>
          </div>
          <div class="fasicule-vocab-chips">
            ${lessonVocabWords.map(w => {
              return `
                <button class="fasicule-word-chip" data-vocab-id="${w.id || w.lemma}">
                  <span class="chip-lemma">${w.lemma}</span>
                  ${w.pos ? `<span class="chip-pos">${w.pos}</span>` : ''}
                  ${w.meaning_tr ? `<span class="chip-meaning">${w.meaning_tr}</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>
        </section>
      `;
    }

    // Topics list
    const topicsHtml = (lesson.topics || []).map(t => `<span class="topic-tag">🏷️ ${t}</span>`).join('');

    // Full Fasicule Reader Assembly
    readerEl.innerHTML = `
      <div class="fasicule-container">
        
        <!-- Fasicule Top Academic Header -->
        <header class="fasicule-hero">
          <div class="fasicule-academic-badge">
            <span>📘 ${lesson.academicSchedule}</span>
          </div>

          <div class="fasicule-meta-pills">
            <span class="meta-pill pill-code">🏛️ ${lesson.courseCode || 'Latince Gramer ' + lesson.term}</span>
            <span class="meta-pill pill-level">🎯 ${lesson.difficulty || 'Temel'}</span>
            <span class="meta-pill pill-vocab">📚 ${lessonVocabWords.length} Sözcük</span>
            <span class="meta-pill pill-slides">📄 ${lesson.slideCount || 0} Slaytlık Kapsam</span>
          </div>

          <h1 class="fasicule-main-title">${lesson.title}</h1>
          ${lesson.subtitle ? `<h2 class="fasicule-subtitle">${lesson.subtitle}</h2>` : ''}

          <!-- Quick Interactive Action Bar -->
          <div class="fasicule-action-bar">
            <button id="btnFasiculeQuiz" class="fasicule-action-btn btn-quiz">
              <span>📝 Bu Fasikülün Testini Çöz (${lessonVocabWords.length} Kelime)</span>
            </button>
            <button id="btnFasiculeFlashcards" class="fasicule-action-btn btn-flashcards">
              <span>🗂️ Kelime Kartlarını Çalış</span>
            </button>
          </div>
        </header>

        <!-- Fasicule Summary & Target Topics -->
        <section class="fasicule-summary-box">
          <h4 class="summary-box-title">📌 Fasikül Özeti ve Öğrenme Hedefleri</h4>
          <p class="summary-box-desc">${lesson.summary || ''}</p>
          ${topicsHtml ? `<div class="fasicule-topics-list">${topicsHtml}</div>` : ''}
        </section>

        <!-- Vocabulary Palette -->
        ${vocabChipsHtml}

        <!-- Stream of Textbook Content Sections -->
        <div class="fasicule-content-stream">
          ${sectionsHtml}
        </div>

        <!-- Sentence Analysis Section -->
        ${sentencesHtml}

        <!-- Bottom Navigation & Completion -->
        <footer class="fasicule-footer-nav">
          <div class="footer-nav-col">
            ${prevLesson ? `
              <button class="footer-nav-btn prev-btn" data-nav-id="${prevLesson.id}">
                <span class="nav-dir">◀ ÖNCEKİ FASİKÜL</span>
                <span class="nav-label">${prevLesson.academicSchedule}</span>
              </button>
            ` : '<div style="flex: 1;"></div>'}
          </div>

          <div class="footer-nav-center">
            <button id="btnScrollToTop" class="footer-scroll-top-btn" title="Sayfa Başına Çık">
              ⬆️ Başa Dön
            </button>
          </div>

          <div class="footer-nav-col" style="text-align: right;">
            ${nextLesson ? `
              <button class="footer-nav-btn next-btn" data-nav-id="${nextLesson.id}">
                <span class="nav-dir">SONRAKİ FASİKÜL ▶</span>
                <span class="nav-label">${nextLesson.academicSchedule}</span>
              </button>
            ` : '<div style="flex: 1;"></div>'}
          </div>
        </footer>

      </div>
    `;

    // Wire up events
    // 1. Quiz Button
    const quizBtn = document.getElementById('btnFasiculeQuiz');
    if (quizBtn) {
      quizBtn.addEventListener('click', () => {
        this.switchView('quiz');
        if (this.quizEngine && lessonVocabWords.length > 0) {
          this.quizEngine.startCustomQuiz(lessonVocabWords, lesson.academicSchedule);
        }
      });
    }

    // 2. Flashcards Button
    const fcBtn = document.getElementById('btnFasiculeFlashcards');
    if (fcBtn) {
      fcBtn.addEventListener('click', () => {
        this.switchView('flashcard');
        if (this.flashcardEngine && lessonVocabWords.length > 0) {
          this.flashcardEngine.setCustomDeck(lessonVocabWords, lesson.academicSchedule);
        }
      });
    }

    // 3. Vocab chip clicks
    readerEl.querySelectorAll('.fasicule-word-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const vId = chip.dataset.vocabId;
        const vObj = this.vocabList.find(w => w.id === vId || w.lemma === vId);
        if (vObj) {
          this.showParadigmForWord(vObj.lemma, vObj.category);
        }
      });
    });

    // 4. Footer navigation buttons
    readerEl.querySelectorAll('.footer-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.navId;
        if (targetId) {
          this.loadLesson(targetId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // 5. Scroll to top
    const scrollTopBtn = document.getElementById('btnScrollToTop');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Scroll reader area to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const query = (searchInput && searchInput.value) ? searchInput.value.trim().toLowerCase() : '';
    const catSelect = document.getElementById('dictCategoryFilter');
    const selectedCat = (catSelect && catSelect.value) ? catSelect.value : 'all';
    const termSelect = document.getElementById('dictTermFilter');
    const selectedTerm = (termSelect && termSelect.value) ? termSelect.value : (this.activeTerm !== 'all' ? String(this.activeTerm) : 'all');

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
      const itemWeek = (item.week && String(item.week) !== 'undefined')
        ? item.week
        : (item.lessons && item.lessons.length > 0 && item.lessons[0].match(/W(\d+)/) ? item.lessons[0].match(/W(\d+)/)[1] : 1);
      const lessonRef = item.lessons && item.lessons.length > 0 ? item.lessons[0].replace('T', 'Dönem ').replace('_W', ' • H.').replace('_L', ' Ders ') : `Dönem ${item.term || 1} • Hafta ${itemWeek}`;

      return `
        <div class="word-card" data-word-id="${item.id}">
          <div class="word-card-top">
            <span class="word-rank-badge">D.${item.term || 1} H.${itemWeek}</span>
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
    if (!wordStr || !wordStr.trim()) return;
    const raw = wordStr.trim();
    const clean = window.ReadingEngine ? window.ReadingEngine.normalizeKey(raw) : raw.toLowerCase();

    // 1. Direct match in vocabulary list by lemma or ID
    let found = this.vocabList.find(w => {
      const vKey = window.ReadingEngine ? window.ReadingEngine.normalizeKey(w.lemma) : w.lemma.toLowerCase();
      return vKey === clean || w.id === clean;
    });

    // 2. Resolve inflected form to lemma if user entered an inflected word (e.g. laudat -> laudo)
    if (!found && window.ReadingEngine && window.ReadingEngine.inflectedFormsMap) {
      const infl = window.ReadingEngine.inflectedFormsMap.get(clean);
      if (infl && infl.item) {
        found = infl.item;
      }
    }

    // 3. Heuristic resolution for regular inflected endings
    if (!found && window.ReadingEngine && window.ReadingEngine.heuristicLookup) {
      const hMatch = window.ReadingEngine.heuristicLookup(clean);
      if (hMatch && hMatch.item) {
        found = hMatch.item;
      }
    }

    if (found) {
      this.showParadigmForWord(found.lemma, found.category);
      return;
    }

    // Word not found in Latin dictionary: reject and do NOT hallucinate fake paradigms
    this.showParadigmForWord(raw, 'unknown');
  },

  showParadigmForWord(lemma, category) {
    if (!lemma) return;
    const clean = window.ReadingEngine ? window.ReadingEngine.normalizeKey(lemma) : lemma.toLowerCase().trim();

    let item = this.vocabList.find(w => {
      const vKey = window.ReadingEngine ? window.ReadingEngine.normalizeKey(w.lemma) : w.lemma.toLowerCase();
      return vKey === clean || w.id === clean;
    });

    if (!item && window.ReadingEngine && window.ReadingEngine.inflectedFormsMap) {
      const infl = window.ReadingEngine.inflectedFormsMap.get(clean);
      if (infl && infl.item) item = infl.item;
    }

    const modal = document.getElementById('paradigmModal');
    const modalTitle = document.getElementById('paradigmModalTitle');
    const modalBody = document.getElementById('paradigmModalBody');

    // If word is unrecognized, do NOT hallucinate fake declensions!
    if (!item) {
      if (modalTitle) {
        modalTitle.textContent = `${lemma} • Sözlükte Bulunamadı`;
      }
      if (modalBody) {
        modalBody.innerHTML = `
          <div class="unknown-word-alert" style="padding: 2.5rem 1.5rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="color: var(--accent); margin-bottom: 0.75rem; font-size: 1.3rem;">“${lemma}” sözlükte bulunamadı</h3>
            <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 1.5rem auto; line-height: 1.6; font-size: 0.95rem;">
              Aradığınız sözcük veya girdiğiniz ifade Eyüp Hoca ders müfredatı sözlüğünde yer almamaktadır.
              Lütfen geçerli bir Latince sözcük veya çekimli bir biçim giriniz (örneğin: <em>rosa, servus, bellum, rēx, laudō, amō</em>).
            </p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <a href="https://logeion.uchicago.edu/${encodeURIComponent(clean)}" target="_blank" rel="noopener" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 500;">
                <span>🏛️ Logeion Sözlüğünde Ara</span>
              </a>
              <button class="btn btn-primary" onclick="document.getElementById('paradigmModal').classList.add('hidden')" style="padding: 0.6rem 1.2rem; border-radius: 6px;">
                <span>Tamam</span>
              </button>
            </div>
          </div>
        `;
      }
      if (modal) {
        modal.classList.remove('hidden');
      }
      return;
    }

    const adapted = window.ReadingEngine ? window.ReadingEngine.adaptWordForInflection(item) : {
      lemma: item.lemma,
      headword: item.lemma,
      pos_en: item.category === 'verb' ? 'Verb: 1st Conjugation' : 'Noun: 1st Declension',
      pos_tr: item.pos_tr || 'Latince Sözcük',
      meaning_tr: item.meaning_tr,
      definition_en: item.meaning_tr
    };

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
      const itemWeek = (item.week && String(item.week) !== 'undefined')
        ? item.week
        : (item.lessons && item.lessons.length > 0 && item.lessons[0].match(/W(\d+)/) ? item.lessons[0].match(/W(\d+)/)[1] : 1);
      return `
        <div class="word-card">
          <div class="word-card-top">
            <span class="word-rank-badge">D.${item.term || 1} H.${itemWeek}</span>
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
