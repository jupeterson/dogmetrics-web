import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Lede } from '@/components/ui/Lede';
import { createT, type Locale } from '@/lib/i18n';

export function SvkCase({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="case" id="svk" data-screen-label="03 SVK case">
      <Container>
        <Eyebrow>{t('home.case.eyebrow')}</Eyebrow>
        <Heading level="h2" html={t('home.case.title')} />
        <Lede html={t('home.case.lede')} style={{ maxWidth: '58ch' }} />

        <div className="case-grid">
          <div>
            <p className="case-quote">{t('home.case.quote')}</p>
            <div className="case-attr">{t('home.case.attr')}</div>
            <div style={{ marginTop: 40 }}>
              <Link className="case-link" href={`/${locale}/for-breed-clubs#svk`}>
                {t('home.case.link')}
              </Link>
            </div>
          </div>
          <div className="case-stats">
            <div className="case-stat"><div className="n">7</div><div className="l">{t('home.case.s1')}</div></div>
            <div className="case-stat"><div className="n">2.4k</div><div className="l">{t('home.case.s2')}</div></div>
            <div className="case-stat"><div className="n">14y</div><div className="l">{t('home.case.s3')}</div></div>
            <div className="case-stat"><div className="n">6wk</div><div className="l">{t('home.case.s4')}</div></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
