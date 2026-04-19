import type { CSSProperties, ReactNode } from 'react';

type Props = { html?: string; children?: ReactNode; style?: CSSProperties; className?: string };

export function Lede({ html, children, style, className }: Props) {
  const cls = ['lede', className].filter(Boolean).join(' ');
  if (html) return <p className={cls} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
  return <p className={cls} style={style}>{children}</p>;
}
