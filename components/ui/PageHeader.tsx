import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { Heading } from './Heading';
import { Lede } from './Lede';

type Props = { eyebrow: string; headlineHtml: string; ledeHtml: string; className?: string };

export function PageHeader({ eyebrow, headlineHtml, ledeHtml, className }: Props) {
  const cls = ['page-header', className].filter(Boolean).join(' ');
  return (
    <header className={cls}>
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading level="h1" html={headlineHtml} />
        <Lede html={ledeHtml} />
      </Container>
    </header>
  );
}
