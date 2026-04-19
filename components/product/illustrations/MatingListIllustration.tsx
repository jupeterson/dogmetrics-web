import { Illustration } from '../Illustration';

const ROWS: [string, string, string][] = [
  ['2026-03-14', 'Ester av Björkåsen · S44112/2020', '♀'],
  ['2026-03-11', 'Ivan Skogsbackens · S51208/2019', '♂'],
  ['2026-03-09', 'Linda av Ekskogen · S47392/2021', '♀'],
  ['2026-03-02', 'Rex vom Sternhof · S49014/2018', '♂'],
  ['2026-02-26', 'Molly Dalarna · S52701/2022', '♀'],
  ['2026-02-21', 'Conrad Nordanvind · S48321/2019', '♂'],
];

export function MatingListIllustration() {
  return (
    <Illustration title="Avelslista · Strävhårig Vorsteh" meta="Live">
      <div className="results-list">
        {ROWS.map(([date, name, sex]) => (
          <div className="r-row" key={name}>
            <span className="d">{date}</span>
            <span className="n">{name}</span>
            <span className="s">{sex}</span>
          </div>
        ))}
      </div>
    </Illustration>
  );
}
