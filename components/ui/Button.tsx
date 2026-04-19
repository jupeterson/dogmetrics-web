import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'rust';
type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
  style?: CSSProperties;
};

function isExternal(href: string, flag?: boolean) {
  if (flag) return true;
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function Button({ href, variant = 'primary', children, external, className, style }: Props) {
  const cls = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');
  if (isExternal(href, external)) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener" style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} style={style}>
      {children}
    </Link>
  );
}
