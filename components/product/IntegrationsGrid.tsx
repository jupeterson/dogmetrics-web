import { createT, type Locale } from '@/lib/i18n';

export function IntegrationsGrid({ locale }: { locale: Locale }) {
  const t = createT(locale);
  const importStyle = { background: 'var(--tan-soft)', color: 'var(--rust-deep)' };
  return (
    <div className="integrations">
      <div className="integ">
        <span className="tag">{t('product.tag.live')}</span>
        <span className="name">{t('product.i1.name')}</span>
        <span className="desc">{t('product.i1.desc')}</span>
      </div>
      <div className="integ">
        <span className="tag">{t('product.tag.live')}</span>
        <span className="name">{t('product.i2.name')}</span>
        <span className="desc">{t('product.i2.desc')}</span>
      </div>
      <div className="integ">
        <span className="tag" style={importStyle}>{t('product.tag.import')}</span>
        <span className="name">{t('product.i3.name')}</span>
        <span className="desc">{t('product.i3.desc')}</span>
      </div>
      <div className="integ">
        <span className="tag" style={importStyle}>{t('product.tag.export')}</span>
        <span className="name">{t('product.i4.name')}</span>
        <span className="desc">{t('product.i4.desc')}</span>
      </div>
    </div>
  );
}
