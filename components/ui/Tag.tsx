import type { CSSProperties, ReactNode } from 'react';

export function Tag({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  const cls = ['tag', className].filter(Boolean).join(' ');
  return <span className={cls} style={style}>{children}</span>;
}
