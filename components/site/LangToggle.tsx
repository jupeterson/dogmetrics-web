import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type Props = { locale: Locale; path: string };

export function LangToggle({ locale, path }: Props) {
  const suffix = path.replace(/^\/(sv|en)/, '') || '';
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <Link className={locale === 'sv' ? 'is-active' : ''} href={`/sv${suffix}`}>SV</Link>
      <Link className={locale === 'en' ? 'is-active' : ''} href={`/en${suffix}`}>EN</Link>
    </div>
  );
}
