import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { FeatureCard } from './FeatureCard';
import { createT, type Locale } from '@/lib/i18n';

const FEATURES = [
  { num: '01 / Pedigree', keyBase: 'home.f1', vizNum: '5+' },
  { num: '02 / Matching', keyBase: 'home.f2', vizNum: '68' },
  { num: '03 / Statistics', keyBase: 'home.f3', vizNum: '24' },
  { num: '04 / Mating lists', keyBase: 'home.f4', vizNum: '↗' },
  { num: '05 / Trial results', keyBase: 'home.f5', vizNum: '12k+' },
  { num: '06 / Health registry', keyBase: 'home.f6', vizNum: '✓' },
];

export function FeaturesGrid({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <Section id="features">
      <Container>
        <div className="features-head">
          <Eyebrow>{t('home.features.eyebrow')}</Eyebrow>
          <Heading level="h2" html={t('home.features.title')} />
        </div>
        <div className="grid-3">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.keyBase}
              num={f.num}
              title={t(`${f.keyBase}.title`)}
              body={t(`${f.keyBase}.body`)}
              label={t(`${f.keyBase}.label`)}
              vizNum={f.vizNum}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
          <Button href={`/${locale}/product`} variant="rust">{t('home.features.cta')}</Button>
        </div>
      </Container>
    </Section>
  );
}
