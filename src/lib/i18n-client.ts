// src/lib/i18n-client.ts
// Universal client-side internationalization system for YT Playlist Cal

import { SUPPORTED_LANGUAGES, normalizeLanguage, isRtl } from './i18n';

declare global {
  interface Window {
    i18n: {
      getLanguage: () => string;
      setLanguage: (lang: string) => Promise<void>;
      t: (key: string, params?: Record<string, any>) => string;
      applyLanguage: (lang: string) => Promise<void>;
      isRtl: (lang: string) => boolean;
      SUPPORTED_LANGUAGES: typeof SUPPORTED_LANGUAGES;
    };
    __i18nCache?: Record<string, any>;
  }
}

const cache: Record<string, any> = window.__i18nCache || {};
window.__i18nCache = cache;

let currentLang = 'en';

function getStoredLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  try {
    const urlParam = new URLSearchParams(window.location.search).get('lang');
    if (urlParam) return normalizeLanguage(urlParam);
    const stored = localStorage.getItem('yt_lang');
    if (stored) return normalizeLanguage(stored);
    const cookieMatch = document.cookie.match(/(?:^|;\s*)yt_lang=([^;]+)/);
    if (cookieMatch) return normalizeLanguage(decodeURIComponent(cookieMatch[1]));
    const docLang = document.documentElement.getAttribute('lang');
    if (docLang) return normalizeLanguage(docLang);
  } catch (err) {
    console.error('Error reading stored language:', err);
  }
  return 'en';
}

currentLang = getStoredLanguage();

export async function fetchLocale(lang: string): Promise<any> {
  const code = normalizeLanguage(lang);
  if (cache[code]) return cache[code];

  try {
    const res = await fetch(`/locales/${code}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cache[code] = data;
    return data;
  } catch (err) {
    console.warn(`Failed to load translations for ${code}, falling back to English.`, err);
    if (code !== 'en') {
      return fetchLocale('en');
    }
    return {};
  }
}

export function t(key: string, params?: Record<string, any>): string {
  const currentData = cache[currentLang] || cache['en'] || {};
  const enData = cache['en'] || {};

  function resolve(obj: any, path: string): any {
    if (!obj) return undefined;
    const parts = path.split('.');
    let cur = obj;
    for (const part of parts) {
      if (cur === undefined || cur === null) return undefined;
      cur = cur[part];
    }
    return cur;
  }

  let value = resolve(currentData, key);
  if (value === undefined && currentLang !== 'en') {
    value = resolve(enData, key);
  }

  if (value === undefined || value === null) {
    return key;
  }

  if (typeof value !== 'string') {
    return String(value);
  }

  if (params) {
    let interpolated = value;
    for (const [k, v] of Object.entries(params)) {
      interpolated = interpolated.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
    return interpolated;
  }

  return value;
}

export async function applyLanguage(lang: string): Promise<void> {
  const normalized = normalizeLanguage(lang);
  currentLang = normalized;

  // Ensure translation data is loaded
  await fetchLocale(normalized);
  if (!cache['en']) {
    await fetchLocale('en');
  }

  const rtl = isRtl(normalized);
  const html = document.documentElement;

  html.setAttribute('lang', normalized);
  html.setAttribute('dir', rtl ? 'rtl' : 'ltr');

  try {
    localStorage.setItem('yt_lang', normalized);
    document.cookie = `yt_lang=${normalized};path=/;max-age=31536000;SameSite=Lax`;
  } catch (err) {
    // Storage quota or private browsing mode
  }

  // Update DOM elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const translated = t(key);
    if (translated && translated !== key) {
      // If translated string contains HTML markup (e.g. <span>, <strong>, <br>)
      if (/<[a-z][\s\S]*>/i.test(translated)) {
        el.innerHTML = translated;
      } else {
        el.textContent = translated;
      }
    }
  });

  // Explicit HTML translations
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (!key) return;
    const translated = t(key);
    if (translated && translated !== key) {
      el.innerHTML = translated;
    }
  });

  // Placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const translated = t(key);
    if (translated && translated !== key) {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = translated;
    }
  });

  // Aria-label translations
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (!key) return;
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('aria-label', translated);
    }
  });

  // Title attribute translations
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (!key) return;
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('title', translated);
    }
  });

  // Update page meta title & description dynamically if configured
  const pageMetaKey = document.body.getAttribute('data-page-meta');
  if (pageMetaKey) {
    const pageTitle = t(`meta.${pageMetaKey}.title`);
    const pageDesc = t(`meta.${pageMetaKey}.desc`);
    if (pageTitle && pageTitle !== `meta.${pageMetaKey}.title`) {
      document.title = pageTitle;
    }
    if (pageDesc && pageDesc !== `meta.${pageMetaKey}.desc`) {
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) metaDescEl.setAttribute('content', pageDesc);
    }
  }

  // Update Language Selector button display text and checkmarks
  updateLanguageSelectorUi(normalized);

  // Dispatch custom event for dynamic components (calculator, demonstrations, etc.)
  window.dispatchEvent(
    new CustomEvent('yt:languagechange', {
      detail: { lang: normalized, t, isRtl: rtl },
    })
  );
}

function updateLanguageSelectorUi(activeCode: string) {
  const activeLang = SUPPORTED_LANGUAGES.find((l) => l.code === activeCode) || SUPPORTED_LANGUAGES[0];

  // Update all language button labels
  document.querySelectorAll('[data-language-current-label]').forEach((el) => {
    el.textContent = activeLang.nativeName;
  });

  document.querySelectorAll('[data-language-current-code]').forEach((el) => {
    el.textContent = activeLang.code.toUpperCase();
  });

  // Update checkmarks in dropdown
  document.querySelectorAll('[data-lang-option]').forEach((option) => {
    const code = option.getAttribute('data-lang-option');
    const checkmark = option.querySelector('[data-lang-check]');
    const isSelected = code === activeCode;

    option.setAttribute('aria-selected', String(isSelected));
    option.classList.toggle('bg-surface-2', isSelected);
    if (checkmark) {
      checkmark.classList.toggle('hidden', !isSelected);
    }
  });
}

export async function setLanguage(lang: string): Promise<void> {
  await applyLanguage(lang);
}

export function getLanguage(): string {
  return currentLang;
}

// Global window exposure
if (typeof window !== 'undefined') {
  window.i18n = {
    getLanguage,
    setLanguage,
    t,
    applyLanguage,
    isRtl,
    SUPPORTED_LANGUAGES,
  };

  // Immediate init
  const initLang = getStoredLanguage();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyLanguage(initLang);
    });
  } else {
    applyLanguage(initLang);
  }
}

