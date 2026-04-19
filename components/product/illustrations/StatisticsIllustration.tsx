import { Illustration } from '../Illustration';

export function StatisticsIllustration() {
  return (
    <Illustration title="Breed indicators" meta="2014–2025">
      <div className="stat-grid">
        <div className="stat-box"><div className="n">2.4%</div><div className="l">Mean COI</div></div>
        <div className="stat-box"><div className="n">184</div><div className="l">Litters / yr</div></div>
        <div className="stat-box"><div className="n">Ne 62</div><div className="l">Eff. population</div></div>
        <div className="stat-box"><div className="n">78%</div><div className="l">HD status A</div></div>
      </div>
      <div style={{ marginTop: 16, padding: 14, border: '1px solid var(--line)', borderRadius: 8 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--stone)',
          }}
        >
          <span>Inbreeding trend</span>
          <span>-0.3% YoY</span>
        </div>
        <svg viewBox="0 0 300 60" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
          <path
            d="M0,10 L25,14 L50,12 L75,18 L100,16 L125,22 L150,24 L175,28 L200,30 L225,34 L250,38 L275,42 L300,46"
            stroke="var(--rust)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </Illustration>
  );
}
