import Link from 'next/link';
import { Logo } from './Logo';
import { LangToggle } from './LangToggle';
import { createT, type Locale } from '@/lib/i18n';

export type ActiveKey = 'home' | 'product' | 'clubs' | 'blog' | 'about';

const PAGES: { key: ActiveKey; href: string; labelKey: string }[] = [
  { key: 'home', href: '', labelKey: 'nav.home' },
  { key: 'product', href: '/product', labelKey: 'nav.product' },
  { key: 'clubs', href: '/for-breed-clubs', labelKey: 'nav.clubs' },
  { key: 'blog', href: '/journal', labelKey: 'nav.blog' },
  { key: 'about', href: '/about', labelKey: 'nav.about' },
];

type Props = { locale: Locale; active: ActiveKey };

export function Nav({ locale, active }: Props) {
  const t = createT(locale);
  const currentPath = `/${locale}${PAGES.find((p) => p.key === active)?.href ?? ''}`;
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Logo locale={locale} />
        <ul className="nav-links" role="list">
          {PAGES.map((p) => (
            <li key={p.key}>
              <Link href={`/${locale}${p.href}`} className={p.key === active ? 'is-active' : ''}>
                {t(p.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <LangToggle locale={locale} path={currentPath} />
          <a className="btn btn-ghost nav-live" href="https://insight.vorsteh.se/" target="_blank" rel="noopener">
            {t('nav.live')}
          </a>
          <Link className="btn btn-primary" href={`/${locale}#contact`}>{t('nav.demo')}</Link>
        </div>
      </div>
    </nav>
  );
}
