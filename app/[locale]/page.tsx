import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { Container } from '@/components/ui/Container';
import { KpiStrip } from '@/components/ui/KpiStrip';
import { Hero } from '@/components/home/Hero';
import { ClientsBand } from '@/components/home/ClientsBand';
import { IntroBlock } from '@/components/home/IntroBlock';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { SvkCase } from '@/components/home/SvkCase';
import { TeasersRow } from '@/components/home/TeasersRow';
import { ContactBand } from '@/components/home/ContactBand';
import { createT, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = createT(locale);
  return { title: t('home.title') };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = createT(locale);
  return (
    <>
      <Nav locale={locale} active="home" />
      <Hero locale={locale} />
      <ClientsBand locale={locale} />
      <IntroBlock locale={locale} />
      <section>
        <Container>
          <KpiStrip
            items={[
              { num: '2,471', label: t('home.kpi.1') },
              { num: '14', label: t('home.kpi.2') },
              { num: '< 80ms', label: t('home.kpi.3') },
              { num: '1 of 1', label: t('home.kpi.4') },
            ]}
          />
        </Container>
      </section>
      <FeaturesGrid locale={locale} />
      <SvkCase locale={locale} />
      <TeasersRow locale={locale} />
      <ContactBand locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
