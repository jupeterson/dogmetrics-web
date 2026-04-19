import type { CSSProperties } from 'react';
import { createT, type Locale } from '@/lib/i18n';

export function HeroStrip({ locale, style }: { locale: Locale; style?: CSSProperties }) {
  const t = createT(locale);
  return (
    <div className="hero-strip" style={style}>
      <span dangerouslySetInnerHTML={{ __html: t('home.strip.left') }} />
      <span className="mid" dangerouslySetInnerHTML={{ __html: t('home.strip.mid') }} />
      <span className="right" dangerouslySetInnerHTML={{ __html: t('home.strip.right') }} />
    </div>
  );
}
