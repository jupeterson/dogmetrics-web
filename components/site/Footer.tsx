import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from '@/components/ui/Container';
import { createT, type Locale } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const year = new Date().getFullYear();
  const metaLeft = t('footer.meta_left').replace('{year}', String(year));
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Logo locale={locale} style={{ marginBottom: 18 }} />
            <p style={{ maxWidth: '34ch', color: 'var(--ink-soft)', fontSize: 14, margin: '14px 0 0' }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><Link href={`/${locale}/product`}>{t('footer.insight')}</Link></li>
              <li><Link href={`/${locale}/product#features`}>{t('footer.features')}</Link></li>
              <li><a href="https://insight.vorsteh.se/" target="_blank" rel="noopener">{t('footer.livelink')}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t('footer.customers')}</h4>
            <ul>
              <li><Link href={`/${locale}/for-breed-clubs`}>{t('footer.for_clubs')}</Link></li>
              <li><Link href={`/${locale}/for-breed-clubs#svk`}>{t('footer.svk_case')}</Link></li>
              <li><Link href={`/${locale}/journal`}>{t('footer.journal')}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link href={`/${locale}/about`}>{t('footer.about')}</Link></li>
              <li><Link href={`/${locale}/about#team`}>{t('footer.team')}</Link></li>
              <li><a href="mailto:hello@dogmetrics.se">hello@dogmetrics.se</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span dangerouslySetInnerHTML={{ __html: metaLeft }} />
          <span>{t('footer.meta_right')}</span>
        </div>
      </Container>
    </footer>
  );
}
