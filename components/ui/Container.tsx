import type { CSSProperties, ReactNode } from 'react';

export function Container({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return <div className={`container${className ? ' ' + className : ''}`} style={style}>{children}</div>;
}
