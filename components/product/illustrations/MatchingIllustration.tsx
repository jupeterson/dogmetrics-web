import { Illustration } from '../Illustration';

const RANKINGS: [string, number][] = [
  ['Thor vom Waldheim', 94],
  ['Bruno av Nordanvind', 91],
  ['Caesar Björnbacken', 87],
  ['Igor av Ekskogen', 84],
  ['Max Dalarna', 79],
  ['Aiko vom Sternhof', 76],
  ['Nils av Hedlandet', 72],
];

export function MatchingIllustration() {
  return (
    <Illustration title="Matching · Hedda av Fjället" meta="68 · ranked">
      <div>
        {RANKINGS.map(([name, score]) => (
          <div className="rank-row" key={name}>
            <span>{name}</span>
            <span className="rank-bar"><span style={{ width: `${score}%` }} /></span>
            <span className="rank-score">{score}</span>
          </div>
        ))}
      </div>
    </Illustration>
  );
}
