import { Illustration } from '../Illustration';

export function HealthIllustration() {
  return (
    <Illustration title="Health · breed-wide" meta="SKK synced">
      <div className="stat-grid">
        <div className="stat-box" style={{ background: '#E6EFDC' }}>
          <div className="n" style={{ color: 'var(--sage)' }}>78%</div>
          <div className="l">HD · A</div>
        </div>
        <div className="stat-box" style={{ background: '#F0E4CC' }}>
          <div className="n" style={{ color: 'var(--rust-soft)' }}>16%</div>
          <div className="l">HD · B</div>
        </div>
        <div className="stat-box" style={{ background: '#F0DED0' }}>
          <div className="n" style={{ color: 'var(--rust-deep)' }}>5%</div>
          <div className="l">HD · C</div>
        </div>
        <div className="stat-box" style={{ background: '#EFDAD2' }}>
          <div className="n" style={{ color: 'var(--rust-deep)' }}>1%</div>
          <div className="l">HD · D/E</div>
        </div>
      </div>
    </Illustration>
  );
}
