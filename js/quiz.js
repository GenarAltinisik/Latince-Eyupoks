// js/quiz.js - Multiple Choice Quiz Engine for Latince Eyupoks

class QuizEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.activeFilter = 'all';

    this.container = document.getElementById('quizContainer');
    this.questionText = document.getElementById('quizQuestionText');
    this.grammarBadge = document.getElementById('quizGrammarBadge');
    this.optionsContainer = document.getElementById('quizOptionsContainer');
    this.feedbackEl = document.getElementById('quizFeedback');
    this.nextBtn = document.getElementById('quizNextBtn');
    this.scoreText = document.getElementById('quizScoreText');
    this.filterSelect = document.getElementById('quizFilterSelect');

    this.bindEvents();
  }

  init(vocabData) {
    this.allWords = vocabData || [];
    this.populateFilterSelect();
    this.startQuiz();
  }

  populateFilterSelect() {
    if (!this.filterSelect) return;
    this.filterSelect.innerHTML = `
      <option value="all">📝 Genel Sınav (Tüm Kelimeler)</option>
      <option value="term_1">📘 1. Dönem Sınavı</option>
      <option value="term_2">📙 2. Dönem Sınavı</option>
      <option value="cat_noun_1">1. Çekim İsimler</option>
      <option value="cat_noun_2">2. Çekim İsimler</option>
      <option value="cat_noun_3">3. Çekim İsimler</option>
      <option value="cat_verb">Fiiller</option>
      <option value="cat_adjective">Sıfatlar</option>
    `;
  }

  startQuiz() {
    const filterVal = this.filterSelect ? this.filterSelect.value : 'all';
    let pool = [];

    if (filterVal === 'term_1') {
      pool = this.allWords.filter(w => w.term === 1);
    } else if (filterVal === 'term_2') {
      pool = this.allWords.filter(w => w.term === 2);
    } else if (filterVal.startsWith('cat_')) {
      const cat = filterVal.replace('cat_', '');
      pool = this.allWords.filter(w => w.category === cat);
    } else {
      pool = [...this.allWords];
    }

    if (pool.length < 4) pool = [...this.allWords];

    // Pick 15 random questions
    pool.sort(() => Math.random() - 0.5);
    const selected = pool.slice(0, Math.min(15, pool.length));

    this.questions = selected.map(correctWord => {
      // Find 3 distractors from the same category or pool
      let distractors = pool.filter(w => w.id !== correctWord.id && w.category === correctWord.category);
      if (distractors.length < 3) {
        distractors = pool.filter(w => w.id !== correctWord.id);
      }
      distractors.sort(() => Math.random() - 0.5);
      const chosenDistractors = distractors.slice(0, 3);

      const options = [correctWord, ...chosenDistractors].sort(() => Math.random() - 0.5);
      return {
        word: correctWord,
        options: options,
        userSelected: null,
        isCorrect: false
      };
    });

    this.currentIndex = 0;
    this.score = 0;
    this.answered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    this.answered = false;
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const currentNum = this.currentIndex + 1;

    if (this.scoreText) {
      this.scoreText.textContent = `Soru ${currentNum} / ${total} • Puan: ${this.score}`;
    }

    if (this.questionText) {
      this.questionText.textContent = q.word.lemma;
    }

    if (this.grammarBadge) {
      this.grammarBadge.textContent = `${q.word.pos || ''} ${q.word.stem && q.word.stem !== '-' ? '(' + q.word.stem + ')' : ''} • Dönem ${q.word.term}`.trim();
    }

    if (this.feedbackEl) {
      this.feedbackEl.className = 'quiz-feedback hidden';
      this.feedbackEl.textContent = '';
    }

    if (this.nextBtn) {
      this.nextBtn.style.display = 'none';
      this.nextBtn.textContent = currentNum === total ? 'Sonuçları Gör 🏁' : 'Sonraki Soru ➔';
    }

    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + idx)}</span> <span class="opt-text">${opt.meaning_tr}</span>`;
        btn.addEventListener('click', () => this.handleAnswer(opt, btn));
        this.optionsContainer.appendChild(btn);
      });
    }
  }

  handleAnswer(selectedWord, btnEl) {
    if (this.answered) return;
    this.answered = true;

    const q = this.questions[this.currentIndex];
    q.userSelected = selectedWord;
    const isCorrect = selectedWord.id === q.word.id;
    q.isCorrect = isCorrect;

    if (isCorrect) {
      this.score += 10;
      btnEl.classList.add('correct');
      if (this.feedbackEl) {
        this.feedbackEl.className = 'quiz-feedback correct';
        this.feedbackEl.innerHTML = `<strong>Doğru! 🎉</strong> <em>${q.word.lemma}</em>: ${q.word.meaning_tr}`;
      }
    } else {
      btnEl.classList.add('wrong');
      // Highlight correct button
      const allBtns = this.optionsContainer.querySelectorAll('.quiz-opt-btn');
      q.options.forEach((opt, idx) => {
        if (opt.id === q.word.id && allBtns[idx]) {
          allBtns[idx].classList.add('correct');
        }
      });

      if (this.feedbackEl) {
        this.feedbackEl.className = 'quiz-feedback wrong';
        this.feedbackEl.innerHTML = `<strong>Yanlış!</strong> Doğru cevap: <strong>${q.word.meaning_tr}</strong> (${q.word.lemma})`;
      }

      // Add to favorites / needs review automatically
      if (window.StorageManager) {
        window.StorageManager.toggleFavorite(q.word.id);
      }
    }

    if (this.nextBtn) {
      this.nextBtn.style.display = 'inline-block';
    }
  }

  nextQuestion() {
    this.currentIndex++;
    this.renderQuestion();
  }

  renderSummary() {
    const totalQ = this.questions.length;
    const correctCount = this.questions.filter(q => q.isCorrect).length;
    const pct = Math.round((correctCount / totalQ) * 100);

    if (this.container) {
      this.container.innerHTML = `
        <div class="quiz-summary-card">
          <div class="summary-icon">${pct >= 70 ? '🏆' : '📚'}</div>
          <h3>Sınav Tamamlandı!</h3>
          <p class="summary-score-large">${correctCount} / ${totalQ} Doğru (%${pct})</p>
          <p class="summary-msg">${pct >= 80 ? 'Harika filolojik başarı! Eyüp Hoca kelimelerine çok iyi hâkimsiniz.' : 'Güzel çaba! Yanlış yaptığınız kelimeler otomatik olarak Zorlandıklarım / Favoriler bölümüne eklendi.'}</p>
          <div class="summary-actions">
            <button id="quizRestartBtn" class="btn-primary">Tekrar Çöz 🔄</button>
          </div>
        </div>
      `;

      const restartBtn = document.getElementById('quizRestartBtn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          location.reload();
        });
      }
    }
  }

  bindEvents() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextQuestion());
    }

    if (this.filterSelect) {
      this.filterSelect.addEventListener('change', () => this.startQuiz());
    }
  }
}

window.QuizEngine = QuizEngine;
