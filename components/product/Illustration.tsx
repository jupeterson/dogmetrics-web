import type { ReactNode } from 'react';

type Props = { title: string; meta: string; children: ReactNode };

export function Illustration({ title, meta, children }: Props) {
  return (
    <div className="illus">
      <div className="illus-head">
        <span>{title}</span>
        <span>{meta}</span>
      </div>
      {children}
    </div>
  );
}
