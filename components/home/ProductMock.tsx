import { createT, type Locale } from '@/lib/i18n';

const MATCH_ROWS: [string, string, string, string][] = [
  ['Thor vom Waldheim', '1.8%', 'A', '94'],
  ['Bruno av Nordanvind', '2.1%', 'A', '91'],
  ['Caesar Björnbacken', '2.4%', 'B', '87'],
  ['Igor av Ekskogen', '2.9%', 'A', '84'],
  ['Max Dalarna', '3.2%', 'B', '79'],
  ['Aiko vom Sternhof', '3.5%', 'A', '76'],
];

export function ProductMock({ locale }: { locale: Locale }) {
  const t = createT(locale);
  return (
    <div className="mock" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }} role="img" aria-label="Insight product preview">
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-url">{t('home.mock.url')}</span>
      </div>
      <div
        className="mock-body"
        style={{ gridTemplateColumns: '1.1fr 1fr', display: 'grid', gap: 24, padding: 28 }}
      >
        <div style={{ display: 'grid', gap: 20 }}>
          <div className="mock-head">
            <h4>{t('home.mock.title')}</h4>
            <span className="tag">{t('home.mock.tracked')}</span>
          </div>
          <div className="mock-stats">
            <div className="mock-stat"><div className="n">2.4%</div><div className="l">{t('home.mock.coi')}</div></div>
            <div className="mock-stat"><div className="n">184</div><div className="l">{t('home.mock.litters')}</div></div>
            <div className="mock-stat"><div className="n">68</div><div className="l">{t('home.mock.sires')}</div></div>
          </div>
          <div className="mock-chart">
            <div className="mock-chart-title">
              <span>{t('home.mock.regs')}</span>
              <span>+12.4%</span>
            </div>
            <svg className="mock-svg" viewBox="0 0 300 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--rust)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--rust)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 L25,62 L50,58 L75,48 L100,52 L125,42 L150,38 L175,44 L200,30 L225,34 L250,22 L275,26 L300,18 L300,90 L0,90 Z"
                fill="url(#hg)"
              />
              <path
                d="M0,70 L25,62 L50,58 L75,48 L100,52 L125,42 L150,38 L175,44 L200,30 L225,34 L250,22 L275,26 L300,18"
                stroke="var(--rust)"
                strokeWidth="1.5"
                fill="none"
              />
              <g fontFamily="monospace" fontSize="7" fill="var(--stone)">
                <text x="0" y="88">&apos;14</text>
                <text x="145" y="88">&apos;19</text>
                <text x="285" y="88">&apos;25</text>
              </g>
            </svg>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          <div className="mock-head" style={{ alignItems: 'center' }}>
            <h4 style={{ fontSize: 18 }}>{t('home.mock.match_title')}</h4>
            <span className="tag" style={{ background: 'var(--sage)', color: 'var(--bone)' }}>{t('home.mock.ai')}</span>
          </div>
          <div className="mock-table">
            <div
              className="mock-row"
              style={{ color: 'var(--stone)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <span>{t('home.mock.col.sire')}</span>
              <span>{t('home.mock.col.coi')}</span>
              <span>{t('home.mock.col.hd')}</span>
              <span>{t('home.mock.col.score')}</span>
            </div>
            {MATCH_ROWS.map(([name, coi, hd, score]) => (
              <div className="mock-row" key={name}>
                <span className="name">{name}</span>
                <span>{coi}</span>
                <span>{hd}</span>
                <span className="score">{score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
