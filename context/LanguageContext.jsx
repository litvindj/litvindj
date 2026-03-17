'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

// Определяем язык устройства
function detectLanguage() {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language || navigator.languages?.[0] || 'en';
  const code = lang.toLowerCase().slice(0, 2);
  if (code === 'pl') return 'pl';
  if (code === 'ru' || code === 'uk' || code === 'be') return 'ru';
  return 'en';
}

export const LanguageProvider = ({ children, initialLang = 'en' }) => {
  // Всегда стартуем с 'en' на сервере (SSR), потом переключаем на клиенте
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    // Если передан явный язык (из URL /ru, /pl) — используем его
    if (initialLang !== 'en') {
      setLanguageState(initialLang);
      return;
    }
    // Иначе — определяем язык устройства
    const saved = localStorage.getItem('dj-lang');
    if (saved && ['en', 'ru', 'pl'].includes(saved)) {
      setLanguageState(saved);
    } else {
      const detected = detectLanguage();
      setLanguageState(detected);
    }
  }, [initialLang]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('dj-lang', lang);
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    if (!current) current = translations['en'];
    for (const key of keys) {
      if (current[key] === undefined) {
        let fallback = translations['en'];
        for (const k of keys) { fallback = fallback ? fallback[k] : undefined; }
        if (fallback) return fallback;
        return path;
      }
      current = current[key];
    }
    return current;
  };

  const getData = (section) => {
    const data = translations[language]?.[section];
    if (!data) return translations['en'][section] || {};
    return data;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
