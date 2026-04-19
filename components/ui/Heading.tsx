import type { CSSProperties } from 'react';

type Level = 'display' | 'h1' | 'h2' | 'h3';
type Props = {
  level: Level;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  html: string;
  style?: CSSProperties;
  className?: string;
};

export function Heading({ level, as, html, style, className }: Props) {
  const Tag = as ?? (level === 'display' ? 'h1' : level);
  const cls = [level, className].filter(Boolean).join(' ');
  return <Tag className={cls} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}
