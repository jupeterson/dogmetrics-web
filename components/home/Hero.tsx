import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Lede } from '@/components/ui/Lede';
import { HeroStrip } from './HeroStrip';
import { ProductMock } from './ProductMock';
import { createT, type Locale } from '@/lib/i18n';

export function Hero({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <header className="hero" data-screen-label="01 Hero">
      <Container>
        <HeroStrip locale={locale} style={{ marginTop: 0, marginBottom: 'clamp(40px, 5vw, 72px)' }} />

        <div className="hero-grid">
          <div>
            <h1 className="display" dangerouslySetInnerHTML={{ __html: t('home.hero.headline') }} />
          </div>
          <div className="hero-meta">
            <Lede html={t('home.hero.lede')} />
            <div className="hero-cta">
              <Button href={`/${locale}#contact`} variant="primary">{t('home.hero.demo')}</Button>
              <Button href="https://insight.vorsteh.se/" variant="ghost" external>{t('home.hero.live')}</Button>
            </div>
          </div>
        </div>

        <ProductMock locale={locale} />
      </Container>
    </header>
  );
}
