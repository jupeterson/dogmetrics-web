import { Illustration } from '../Illustration';

const RESULTS: [string, string, string][] = [
  ['2025-10-12', 'EKL · Fält · Jämtland', '1:a pris'],
  ['2025-08-28', 'Utställning · Sundsvall', 'Excellent'],
  ['2025-06-04', 'Working test · Apport', 'Approved'],
  ['2024-11-09', 'UKL · Skog · Värmland', '2:a pris'],
  ['2024-09-15', 'Riksprovet · UKL', 'Approved'],
  ['2024-07-22', 'HD-röntgen', 'A'],
];

export function TrialsIllustration() {
  return (
    <Illustration title="Results · Hedda av Fjället" meta="17">
      <div className="results-list">
        {RESULTS.map(([date, name, score]) => (
          <div className="r-row" key={name}>
            <span className="d">{date}</span>
            <span className="n">{name}</span>
            <span className="s">{score}</span>
          </div>
        ))}
      </div>
    </Illustration>
  );
}
