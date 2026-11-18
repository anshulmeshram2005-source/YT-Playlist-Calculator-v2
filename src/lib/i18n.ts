// src/lib/i18n.ts
// Centralized internationalization configuration and utilities

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export const DEFAULT_LANGUAGE = 'en';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', dir: 'ltr' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'fil', name: 'Filipino', nativeName: 'Filipino', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
  { code: 'pt-BR', name: 'Portuguese (Brazil)', nativeName: 'Português', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', dir: 'ltr' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', dir: 'rtl' },
];

export const RTL_LANGUAGES = new Set(['ar', 'he']);

const LANGUAGE_ALIASES: Record<string, string> = {
  'tl': 'fil',
  'fil-ph': 'fil',
  'zh': 'zh-CN',
  'zh-cn': 'zh-CN',
  'zh-hans': 'zh-CN',
  'zh-sg': 'zh-CN',
  'zh-tw': 'zh-TW',
  'zh-hant': 'zh-TW',
  'zh-hk': 'zh-TW',
  'zh-mo': 'zh-TW',
  'pt': 'pt-BR',
  'pt-pt': 'pt-BR',
  'iw': 'he',
  'in': 'id',
};

export function isRtl(lang: string | null | undefined): boolean {
  if (!lang) return false;
  const normalized = normalizeLanguage(lang);
  return RTL_LANGUAGES.has(normalized);
}

export function getLanguageInfo(lang: string): LanguageInfo {
  const normalized = normalizeLanguage(lang);
  return SUPPORTED_LANGUAGES.find((l) => l.code === normalized) || SUPPORTED_LANGUAGES[0];
}

export function isValidLanguage(lang: string): boolean {
  const normalized = normalizeLanguage(lang);
  return SUPPORTED_LANGUAGES.some((l) => l.code === normalized);
}

export function normalizeLanguage(lang: string | null | undefined): string {
  if (!lang) return DEFAULT_LANGUAGE;
  const clean = lang.trim().toLowerCase();

  // Direct alias match
  if (LANGUAGE_ALIASES[clean]) {
    return LANGUAGE_ALIASES[clean];
  }

  // Exact match in supported list
  const match = SUPPORTED_LANGUAGES.find(
    (l) => l.code.toLowerCase() === clean
  );
  if (match) return match.code;

  // Prefix matching (e.g. "es-419" -> "es", "fr-CA" -> "fr")
  const prefix = clean.split(/[-_]/)[0];
  if (LANGUAGE_ALIASES[prefix]) {
    return LANGUAGE_ALIASES[prefix];
  }

  const prefixMatch = SUPPORTED_LANGUAGES.find(
    (l) => l.code.split(/[-_]/)[0].toLowerCase() === prefix
  );
  return prefixMatch ? prefixMatch.code : DEFAULT_LANGUAGE;
}

