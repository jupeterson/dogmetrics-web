import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { createT, type Locale } from '@/lib/i18n';

export function IntroBlock({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <Section>
      <Container>
        <div className="intro">
          <aside className="intro-aside">
            <Eyebrow>{t('home.intro.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('home.intro.title')} />
          </aside>
          <div className="intro-body">
            <p dangerouslySetInnerHTML={{ __html: t('home.intro.p1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('home.intro.p2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('home.intro.p3') }} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
