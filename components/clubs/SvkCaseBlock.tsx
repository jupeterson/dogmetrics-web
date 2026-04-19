import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { createT, type Locale } from '@/lib/i18n';

export function SvkCaseBlock({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="svk-block" id="svk">
      <Container>
        <Eyebrow>{t('clubs.svk.eyebrow')}</Eyebrow>
        <Heading level="h2" html={t('clubs.svk.title')} />
        <p className="deck" dangerouslySetInnerHTML={{ __html: t('clubs.svk.deck') }} />
        <div className="svk-grid">
          <div>
            <h4>{t('clubs.svk.challenge')}</h4>
            <p dangerouslySetInnerHTML={{ __html: t('clubs.svk.challenge_body') }} />
          </div>
          <div>
            <h4>{t('clubs.svk.approach')}</h4>
            <p dangerouslySetInnerHTML={{ __html: t('clubs.svk.approach_body') }} />
          </div>
          <div>
            <h4>{t('clubs.svk.outcome')}</h4>
            <p dangerouslySetInnerHTML={{ __html: t('clubs.svk.outcome_body') }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
