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
import { WhoCard } from '@/components/clubs/WhoCard';
import { Timeline } from '@/components/clubs/Timeline';
import { SvkCaseBlock } from '@/components/clubs/SvkCaseBlock';
import { createT, isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = createT(locale);
  return { title: t('clubs.title') };
}

export default async function ClubsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = createT(locale);
  return (
    <>
      <Nav locale={locale} active="clubs" />
      <PageHeader
        eyebrow={t('clubs.eyebrow')}
        headlineHtml={t('clubs.headline')}
        ledeHtml={t('clubs.lede')}
      />

      <Section>
        <Container>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>{t('clubs.who.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('clubs.who.title')} />
          </div>
          <div className="who-grid">
            <WhoCard num="01 / Board" title={t('clubs.who1.title')} body={t('clubs.who1.body')} />
            <WhoCard num="02 / Breeding committee" title={t('clubs.who2.title')} body={t('clubs.who2.body')} />
            <WhoCard num="03 / Members" title={t('clubs.who3.title')} body={t('clubs.who3.body')} />
          </div>
        </Container>
      </Section>

      <Section style={{ background: 'var(--tan-pale)' }}>
        <Container>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>{t('clubs.how.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('clubs.how.title')} />
          </div>
          <Timeline
            steps={[
              { week: t('clubs.w1'), title: t('clubs.w1t'), body: t('clubs.w1b') },
              { week: t('clubs.w2'), title: t('clubs.w2t'), body: t('clubs.w2b') },
              { week: t('clubs.w3'), title: t('clubs.w3t'), body: t('clubs.w3b') },
              { week: t('clubs.w4'), title: t('clubs.w4t'), body: t('clubs.w4b') },
              { week: t('clubs.w5'), title: t('clubs.w5t'), body: t('clubs.w5b') },
            ]}
          />
        </Container>
      </Section>

      <SvkCaseBlock locale={locale} />

      <Section>
        <Container style={{ maxWidth: 720, textAlign: 'center' }}>
          <Eyebrow>{t('clubs.pricing.eyebrow')}</Eyebrow>
          <Heading level="h2" html={t('clubs.pricing.title')} style={{ margin: '16px 0 20px' }} />
          <Lede html={t('clubs.pricing.body')} style={{ margin: '0 auto 32px' }} />
          <Button href={`/${locale}#contact`} variant="primary">{t('clubs.pricing.cta')}</Button>
        </Container>
      </Section>

      <Footer locale={locale} />
    </>
  );
}
