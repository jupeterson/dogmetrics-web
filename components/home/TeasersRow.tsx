import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { createT, type Locale } from '@/lib/i18n';

const ARTICLES = [
  { date: 'MAR 2026', key: 'home.journal.a1' },
  { date: 'FEB 2026', key: 'home.journal.a2' },
  { date: 'JAN 2026', key: 'home.journal.a3' },
];

export function TeasersRow({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <Section>
      <Container>
        <div className="two-col">
          <div className="teaser">
            <Eyebrow>{t('home.team.eyebrow')}</Eyebrow>
            <Heading level="h3" as="h2" html={t('home.team.title')} />
            <p style={{ color: 'var(--ink-soft)', maxWidth: '52ch', marginTop: 16 }}>
              {t('home.team.body')}
            </p>
            <p style={{ marginTop: 24 }}>
              <Link className="teaser-link" href={`/${locale}/about`}>{t('home.team.link')}</Link>
            </p>
          </div>
          <div className="teaser">
            <Eyebrow>{t('home.journal.eyebrow')}</Eyebrow>
            <Heading level="h3" as="h2" html={t('home.journal.title')} />
            <ul className="article-list">
              {ARTICLES.map((a) => (
                <li key={a.key}>
                  <Link href={`/${locale}/journal`}>
                    <span className="d">{a.date}</span>
                    <span className="t">{t(a.key)}</span>
                    <span className="arrow">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
