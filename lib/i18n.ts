import en from '@/messages/en.json';
import sv from '@/messages/sv.json';

export type Locale = 'sv' | 'en';
export const LOCALES: Locale[] = ['sv', 'en'];
export const DEFAULT_LOCALE: Locale = 'sv';

const DICTS: Record<Locale, Record<string, string>> = { en, sv };

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function getDict(locale: Locale) {
  return DICTS[locale];
}

export function createT(locale: Locale) {
  const dict = DICTS[locale];
  return function t(key: string): string {
    return dict[key] ?? key;
  };
}

export function localizePath(locale: Locale, path: string): string {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean === '/' ? '' : clean}`;
}
