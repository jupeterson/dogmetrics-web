import { Container } from '@/components/ui/Container';
import { createT, type Locale } from '@/lib/i18n';

export function ClientsBand({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="clients">
      <Container>
        <div className="clients-inner">
          <h5>{t('home.clients.head')}</h5>
          <div className="clients-list">
            <span className="client">
              <span className="client-badge">SVK</span>
              <span>{t('home.clients.vorsteh')}</span>
            </span>
            <span className="client" style={{ opacity: 0.4 }}>
              <span className="client-badge" style={{ background: 'var(--line)' }}>·</span>
              <span>{t('home.clients.pilot')}</span>
            </span>
            <span className="client" style={{ opacity: 0.4 }}>
              <span className="client-badge" style={{ background: 'var(--line)' }}>·</span>
              <span>{t('home.clients.pilot')}</span>
            </span>
            <span className="client" style={{ opacity: 0.3 }}>
              <span className="client-badge" style={{ background: 'var(--line)' }}>+</span>
              <span>{t('home.clients.next')}</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
