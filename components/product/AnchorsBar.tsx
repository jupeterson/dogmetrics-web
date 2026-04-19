import { Container } from '@/components/ui/Container';
import { createT, type Locale } from '@/lib/i18n';

const ANCHORS = [
  { href: '#pedigree', key: 'product.anchor.1' },
  { href: '#matching', key: 'product.anchor.2' },
  { href: '#statistics', key: 'product.anchor.3' },
  { href: '#lists', key: 'product.anchor.4' },
  { href: '#trials', key: 'product.anchor.5' },
  { href: '#health', key: 'product.anchor.6' },
  { href: '#integrations', key: 'product.anchor.7' },
];

export function AnchorsBar({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <div className="anchors">
      <Container>
        <div className="anchors-inner">
          {ANCHORS.map((a) => (
            <a key={a.href} href={a.href}>{t(a.key)}</a>
          ))}
        </div>
      </Container>
    </div>
  );
}
