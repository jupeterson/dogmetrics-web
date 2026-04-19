'use client';

import { useState } from 'react';
import { createT, type Locale } from '@/lib/i18n';

const FILTERS: { key: string; labelKey: string }[] = [
  { key: 'all', labelKey: 'blog.filter.all' },
  { key: 'product', labelKey: 'blog.filter.product' },
  { key: 'data', labelKey: 'blog.filter.data' },
  { key: 'field', labelKey: 'blog.filter.field' },
  { key: 'company', labelKey: 'blog.filter.company' },
];

export function FilterBar({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const [active, setActive] = useState('all');
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={active === f.key ? 'is-active' : ''}
          onClick={() => setActive(f.key)}
          type="button"
        >
          {t(f.labelKey)}
        </button>
      ))}
    </div>
  );
}
