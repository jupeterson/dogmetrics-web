import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  html?: string;
  as?: 'span' | 'div';
  style?: CSSProperties;
  className?: string;
};

export function Eyebrow({ children, html, as: Tag = 'span', style, className }: Props) {
  const cls = ['eyebrow', className].filter(Boolean).join(' ');
  if (html) return <Tag className={cls} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
  return <Tag className={cls} style={style}>{children}</Tag>;
}
