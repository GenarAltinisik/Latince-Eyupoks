// js/flashcard.js - 3D Flashcard Engine for Latince Eyupoks

class FlashcardEngine {
  constructor() {
    this.deck = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.mode = 'lat-to-tr'; // 'lat-to-tr' or 'tr-to-lat'
    this.activeFilter = { term: 'all', category: 'all', lesson: 'all' };

    this.cardEl = document.getElementById('flashcard');
    this.cardInner = document.getElementById('flashcardInner');
    this.frontPrompt = document.getElementById('cardFrontPrompt');
    this.frontSub = document.getElementById('cardFrontSub');
    this.backPrompt = document.getElementById('cardBackPrompt');
    this.backSub = document.getElementById('cardBackSub');
    this.progressText = document.getElementById('cardProgressText');
    this.progressBar = document.getElementById('cardProgressBar');
    this.deckSelect = document.getElementById('flashcardDeckSelect');

    this.bindEvents();
  }

  init(vocabData) {
    this.allWords = vocabData || [];
    this.populateDeckSelect();
    this.applyFilter();
  }

  populateDeckSelect() {
    if (!this.deckSelect) return;
    this.deckSelect.innerHTML = `
      <option value="all">📚 Tüm Kelimeler (${this.allWords.length})</option>
      <option value="term_1">📘 1. Dönem Kelimeleri</option>
      <option value="term_2">📙 2. Dönem Kelimeleri</option>
      <optgroup label="Gramer Kategorileri">
        <option value="cat_noun_1">1. Çekim İsimler (-a, -ae)</option>
        <option value="cat_noun_2">2. Çekim İsimler (-us, -i / -um, -i)</option>
        <option value="cat_noun_3">3. Çekim İsimler (-is)</option>
        <option value="cat_noun_4">4. Çekim İsimler (-us, -us)</option>
        <option value="cat_noun_5">5. Çekim İsimler (-es, -ei)</option>
        <option value="cat_verb">Fiiller</option>
        <option value="cat_adjective">Sıfatlar</option>
        <option value="cat_adverb">Zarflar & Edatlar</option>
      </optgroup>
      <option value="favorites">⭐ Zorlandıklarım / Favoriler</option>
    `;
  }

  applyFilter() {
    const filterVal = this.deckSelect ? this.deckSelect.value : 'all';
    
    if (filterVal === 'favorites') {
      const favs = window.StorageManager ? window.StorageManager.getFavorites() : [];
      this.deck = this.allWords.filter(w => favs.includes(w.id));
    } else if (filterVal === 'term_1') {
      this.deck = this.allWords.filter(w => w.term === 1);
    } else if (filterVal === 'term_2') {
      this.deck = this.allWords.filter(w => w.term === 2);
    } else if (filterVal.startsWith('cat_')) {
      const cat = filterVal.replace('cat_', '');
      if (cat === 'adverb') {
        this.deck = this.allWords.filter(w => w.category === 'adverb' || w.category === 'preposition' || w.category === 'conjunction');
      } else {
        this.deck = this.allWords.filter(w => w.category === cat);
      }
    } else {
      this.deck = [...this.allWords];
    }

    // Shuffle deck for variety
    this.deck.sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.isFlipped = false;
    this.renderCurrentCard();
  }

  renderCurrentCard() {
    if (!this.deck || this.deck.length === 0) {
      if (this.frontPrompt) this.frontPrompt.textContent = 'Kart Bulunamadı';
      if (this.frontSub) this.frontSub.textContent = 'Lütfen farklı bir deste veya filtre seçin.';
      if (this.backPrompt) this.backPrompt.textContent = '-';
      if (this.backSub) this.backSub.textContent = '';
      if (this.progressText) this.progressText.textContent = '0 / 0';
      if (this.progressBar) this.progressBar.style.width = '0%';
      return;
    }

    const word = this.deck[this.currentIndex];
    this.isFlipped = false;
    if (this.cardInner) this.cardInner.classList.remove('is-flipped');

    const total = this.deck.length;
    const current = this.currentIndex + 1;
    if (this.progressText) this.progressText.textContent = `${current} / ${total}`;
    if (this.progressBar) this.progressBar.style.width = `${(current / total) * 100}%`;

    const termBadge = `Dönem ${word.term} • Hafta ${word.week}`;
    const grammarInfo = `${word.pos || ''} ${word.stem && word.stem !== '-' ? '(' + word.stem + ')' : ''}`.trim();

    if (this.mode === 'lat-to-tr') {
      if (this.frontPrompt) this.frontPrompt.textContent = word.lemma;
      if (this.frontSub) this.frontSub.textContent = `${termBadge} • ${grammarInfo}`;
      if (this.backPrompt) this.backPrompt.textContent = word.meaning_tr;
      if (this.backSub) this.backSub.textContent = `${word.lemma} • ${grammarInfo}`;
    } else {
      if (this.frontPrompt) this.frontPrompt.textContent = word.meaning_tr;
      if (this.frontSub) this.frontSub.textContent = `${termBadge} • ${grammarInfo}`;
      if (this.backPrompt) this.backPrompt.textContent = word.lemma;
      if (this.backSub) this.backSub.textContent = `${word.meaning_tr} • ${grammarInfo}`;
    }

    // Update favorite button on card
    const favBtn = document.getElementById('cardFavBtn');
    if (favBtn && window.StorageManager) {
      const isFav = window.StorageManager.isFavorite(word.id);
      favBtn.classList.toggle('active', isFav);
      favBtn.textContent = isFav ? '★' : '☆';
    }
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    if (this.cardInner) {
      this.cardInner.classList.toggle('is-flipped', this.isFlipped);
    }
  }

  next() {
    if (this.currentIndex < this.deck.length - 1) {
      this.currentIndex++;
      this.renderCurrentCard();
    } else {
      // Loop back or finish
      this.currentIndex = 0;
      this.renderCurrentCard();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCurrentCard();
    }
  }

  markKnown() {
    this.next();
  }

  markAgain() {
    if (this.deck.length > 0) {
      const currentWord = this.deck[this.currentIndex];
      // Insert card 3 positions ahead for spaced repetition
      const insertAt = Math.min(this.currentIndex + 3, this.deck.length);
      this.deck.splice(insertAt, 0, currentWord);
    }
    this.next();
  }

  toggleFavoriteCurrent() {
    if (this.deck.length === 0) return;
    const word = this.deck[this.currentIndex];
    if (window.StorageManager) {
      const isNow = window.StorageManager.toggleFavorite(word.id);
      const favBtn = document.getElementById('cardFavBtn');
      if (favBtn) {
        favBtn.classList.toggle('active', isNow);
        favBtn.textContent = isNow ? '★' : '☆';
      }
    }
  }

  speakCurrent() {
    if (this.deck.length === 0) return;
    const word = this.deck[this.currentIndex];
    if (window.ReadingEngine) {
      window.ReadingEngine.speakLatin(word.lemma);
    }
  }

  bindEvents() {
    if (this.cardEl) {
      this.cardEl.addEventListener('click', (e) => {
        if (e.target.closest('.card-action-icon')) return;
        this.flip();
      });
    }

    const flipBtn = document.getElementById('cardFlipBtn');
    if (flipBtn) flipBtn.addEventListener('click', () => this.flip());

    const nextBtn = document.getElementById('cardNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    const prevBtn = document.getElementById('cardPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

    const knownBtn = document.getElementById('cardKnownBtn');
    if (knownBtn) knownBtn.addEventListener('click', () => this.markKnown());

    const againBtn = document.getElementById('cardAgainBtn');
    if (againBtn) againBtn.addEventListener('click', () => this.markAgain());

    const favBtn = document.getElementById('cardFavBtn');
    if (favBtn) favBtn.addEventListener('click', () => this.toggleFavoriteCurrent());

    const audioBtn = document.getElementById('cardAudioBtn');
    if (audioBtn) audioBtn.addEventListener('click', () => this.speakCurrent());

    if (this.deckSelect) {
      this.deckSelect.addEventListener('change', () => this.applyFilter());
    }

    const modeBtn = document.getElementById('cardModeToggleBtn');
    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        this.mode = this.mode === 'lat-to-tr' ? 'tr-to-lat' : 'lat-to-tr';
        modeBtn.textContent = this.mode === 'lat-to-tr' ? 'Latince ➔ Türkçe' : 'Türkçe ➔ Latince';
        this.renderCurrentCard();
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      const flashcardView = document.getElementById('viewFlashcard');
      if (!flashcardView || !flashcardView.classList.contains('active')) return;
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT')) return;

      if (e.code === 'Space') {
        e.preventDefault();
        this.flip();
      } else if (e.key === '1' || e.code === 'ArrowRight') {
        this.markKnown();
      } else if (e.key === '2' || e.code === 'ArrowLeft') {
        this.markAgain();
      } else if (e.key.toLowerCase() === 'a') {
        this.speakCurrent();
      } else if (e.key.toLowerCase() === 'f') {
        this.toggleFavoriteCurrent();
      }
    });
  }
}

window.FlashcardEngine = FlashcardEngine;
