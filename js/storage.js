// js/storage.js - LocalStorage & User State Management for Latince Eyupoks

const STORAGE_KEYS = {
  THEME: 'eyupoks_theme',
  FAVORITES: 'eyupoks_favorites',
  PROGRESS: 'eyupoks_progress',
  QUIZ_SCORES: 'eyupoks_quiz_scores',
  ACTIVE_TERM: 'eyupoks_active_term',
  CASE_ORDER: 'eyupoks_case_order'
};

const StorageManager = {
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'parchment';
  },

  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  getActiveTerm() {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_TERM) || 'all';
  },

  setActiveTerm(term) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TERM, term);
  },

  getCaseOrder() {
    return localStorage.getItem(STORAGE_KEYS.CASE_ORDER) || 'NVGDAcAb';
  },

  setCaseOrder(order) {
    localStorage.setItem(STORAGE_KEYS.CASE_ORDER, order);
  },

  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load favorites', e);
      return [];
    }
  },

  isFavorite(wordId) {
    const favs = this.getFavorites();
    return favs.includes(wordId);
  },

  toggleFavorite(wordId) {
    let favs = this.getFavorites();
    const idx = favs.indexOf(wordId);
    let isFavNow = false;
    if (idx !== -1) {
      favs.splice(idx, 1);
      isFavNow = false;
    } else {
      favs.push(wordId);
      isFavNow = true;
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
    window.dispatchEvent(new CustomEvent('eyupoks_favorites_changed', { detail: { wordId, isFavNow, count: favs.length } }));
    return isFavNow;
  },

  getQuizScores() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  saveQuizScore(lessonKey, score, total) {
    const scores = this.getQuizScores();
    scores[lessonKey] = {
      score,
      total,
      pct: Math.round((score / total) * 100),
      date: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(scores));
  }
};

window.StorageManager = StorageManager;
