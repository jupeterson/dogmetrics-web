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
import { AnchorsBar } from '@/components/product/AnchorsBar';
import { ProductBlock } from '@/components/product/ProductBlock';
import { IntegrationsGrid } from '@/components/product/IntegrationsGrid';
import { PedigreeIllustration } from '@/components/product/illustrations/PedigreeIllustration';
import { MatchingIllustration } from '@/components/product/illustrations/MatchingIllustration';
import { StatisticsIllustration } from '@/components/product/illustrations/StatisticsIllustration';
import { MatingListIllustration } from '@/components/product/illustrations/MatingListIllustration';
import { TrialsIllustration } from '@/components/product/illustrations/TrialsIllustration';
import { HealthIllustration } from '@/components/product/illustrations/HealthIllustration';
import { createT, isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = createT(locale);
  return { title: t('product.title') };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = createT(locale);
  return (
    <>
      <Nav locale={locale} active="product" />
      <PageHeader
        eyebrow={t('product.eyebrow')}
        headlineHtml={t('product.headline')}
        ledeHtml={t('product.lede')}
        className="product-hero"
      />
      <AnchorsBar locale={locale} />

      <ProductBlock
        id="pedigree"
        eyebrow={t('product.s1.eyebrow')}
        title={t('product.s1.title')}
        lede={t('product.s1.lede')}
        features={[t('product.s1.f1'), t('product.s1.f2'), t('product.s1.f3'), t('product.s1.f4')]}
        illustration={<PedigreeIllustration />}
      />
      <ProductBlock
        id="matching"
        reverse
        eyebrow={t('product.s2.eyebrow')}
        title={t('product.s2.title')}
        lede={t('product.s2.lede')}
        features={[t('product.s2.f1'), t('product.s2.f2'), t('product.s2.f3'), t('product.s2.f4')]}
        illustration={<MatchingIllustration />}
      />
      <ProductBlock
        id="statistics"
        eyebrow={t('product.s3.eyebrow')}
        title={t('product.s3.title')}
        lede={t('product.s3.lede')}
        features={[t('product.s3.f1'), t('product.s3.f2'), t('product.s3.f3'), t('product.s3.f4')]}
        illustration={<StatisticsIllustration />}
      />
      <ProductBlock
        id="lists"
        reverse
        eyebrow={t('product.s4.eyebrow')}
        title={t('product.s4.title')}
        lede={t('product.s4.lede')}
        features={[t('product.s4.f1'), t('product.s4.f2'), t('product.s4.f3'), t('product.s4.f4')]}
        illustration={<MatingListIllustration />}
      />
      <ProductBlock
        id="trials"
        eyebrow={t('product.s5.eyebrow')}
        title={t('product.s5.title')}
        lede={t('product.s5.lede')}
        features={[t('product.s5.f1'), t('product.s5.f2'), t('product.s5.f3'), t('product.s5.f4')]}
        illustration={<TrialsIllustration />}
      />
      <ProductBlock
        id="health"
        reverse
        eyebrow={t('product.s6.eyebrow')}
        title={t('product.s6.title')}
        lede={t('product.s6.lede')}
        features={[t('product.s6.f1'), t('product.s6.f2'), t('product.s6.f3'), t('product.s6.f4')]}
        illustration={<HealthIllustration />}
      />

      <section className="block" id="integrations">
        <Container>
          <div style={{ maxWidth: 680 }}>
            <Eyebrow>{t('product.s7.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('product.s7.title')} />
            <Lede html={t('product.s7.lede')} />
          </div>
          <IntegrationsGrid locale={locale} />
        </Container>
      </section>

      <Section style={{ background: 'var(--tan-pale)' }}>
        <Container style={{ textAlign: 'center' }}>
          <Heading level="h1" html={t('product.cta.title')} style={{ maxWidth: '18ch', margin: '0 auto 24px' }} />
          <Lede html={t('product.cta.lede')} style={{ margin: '0 auto 32px' }} />
          <Button href={`/${locale}#contact`} variant="primary">{t('nav.demo')}</Button>
        </Container>
      </Section>

      <Footer locale={locale} />
    </>
  );
}
