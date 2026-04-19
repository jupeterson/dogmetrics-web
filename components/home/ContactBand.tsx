'use client';

import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Lede } from '@/components/ui/Lede';
import { createT, type Locale } from '@/lib/i18n';

export function ContactBand({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <section className="cta-band" id="contact" data-screen-label="06 Contact">
      <Container>
        <div className="cta-inner">
          <div>
            <Eyebrow>{t('home.cta.eyebrow')}</Eyebrow>
            <Heading level="h2" html={t('home.cta.title')} style={{ marginTop: 16 }} />
            <Lede html={t('home.cta.lede')} style={{ marginTop: 20 }} />
          </div>
          <form
            className="cta-form"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget.querySelector('input[type=email]') as HTMLInputElement).value = '';
              alert("Thanks — we'll be in touch.");
            }}
          >
            <label htmlFor="email">{t('home.cta.email_label')}</label>
            <div className="f-row">
              <input id="email" type="email" required placeholder={t('home.cta.email_ph')} />
              <button className="btn btn-primary" type="submit">{t('home.cta.button')}</button>
            </div>
            <label htmlFor="club" style={{ marginTop: 8 }}>{t('home.cta.club_label')}</label>
            <input id="club" type="text" placeholder={t('home.cta.club_ph')} />
            <p className="cta-note">{t('home.cta.note')}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
