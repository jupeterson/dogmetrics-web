import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Locale } from '@/lib/i18n';
import { asset } from '@/lib/paths';

export function Logo({ locale, style }: { locale: Locale; style?: CSSProperties }) {
  return (
    <Link className="logo" href={`/${locale}`} aria-label="DogMetrics home" style={style}>
      <span className="logo-mark">
        <img src={asset('/dogmetrics-mark.png')} alt="" />
      </span>
      <span className="logo-word">Dog<em>Metrics</em></span>
    </Link>
  );
}
