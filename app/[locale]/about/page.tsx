import { notFound } from 'next/navigation';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Lede } from '@/components/ui/Lede';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { TeamCard } from '@/components/about/TeamCard';
import { Value } from '@/components/about/Value';
import { createT, isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = createT(locale);
  return { title: t('about.title') };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = createT(locale);
  return (
    <>
      <Nav locale={locale} active="about" />
      <PageHeader
        eyebrow={t('about.eyebrow')}
        headlineHtml={t('about.headline')}
        ledeHtml={t('about.lede')}
      />

      <Section>
        <Container>
          <div className="story">
            <div>
              <Eyebrow>{t('about.story.eyebrow')}</Eyebrow>
              <Heading level="h2" html={t('about.story.title')} style={{ marginTop: 16 }} />
            </div>
            <div className="story-body">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        id="team"
        style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
      >
        <Container>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>{t('about.team.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('about.team.title')} />
          </div>
          <div className="team-grid">
            <TeamCard initial="A" name={t('about.t1.name')} role={t('about.t1.role')} bio={t('about.t1.bio')} />
            <TeamCard
              initial="J"
              name={t('about.t2.name')}
              role={t('about.t2.role')}
              bio={t('about.t2.bio')}
              avatarStyle={{ background: 'linear-gradient(135deg, var(--sage), var(--ink))' }}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>{t('about.values.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('about.values.title')} />
          </div>
          <div className="values">
            <Value title={t('about.v1.title')} body={t('about.v1.body')} />
            <Value title={t('about.v2.title')} body={t('about.v2.body')} />
            <Value title={t('about.v3.title')} body={t('about.v3.body')} />
          </div>
        </Container>
      </Section>

      <section className="contact-strip">
        <Container className="contact-strip-inner">
          <Heading level="h1" as="h2" html={t('about.contact.title')} />
          <div>
            <Lede html={t('about.contact.body')} style={{ margin: '0 0 24px' }} />
            <Button href={`/${locale}#contact`} variant="primary">{t('nav.demo')}</Button>
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </>
  );
}
