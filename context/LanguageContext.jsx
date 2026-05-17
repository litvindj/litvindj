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

export const LanguageProvider = ({ children, initialLang }) => {
  const [language, setLanguageState] = useState(initialLang || 'en');

  useEffect(() => {
    if (initialLang) {
      // URL явно задаёт язык — всегда используем его
      setLanguageState(initialLang);
      localStorage.setItem('dj-lang', initialLang);
      return;
    }
    // Корневая страница — используем сохранённый или определяем по устройству
    const saved = localStorage.getItem('dj-lang');
    if (saved && ['en', 'ru', 'pl'].includes(saved)) {
      setLanguageState(saved);
    } else {
      setLanguageState(detectLanguage());
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
