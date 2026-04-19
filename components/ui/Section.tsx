import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tight?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export function Section({ children, tight, id, className, style }: Props) {
  const cls = [tight ? 'section-tight' : 'section', className].filter(Boolean).join(' ');
  return <section id={id} className={cls} style={style}>{children}</section>;
}
