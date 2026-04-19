import { Illustration } from '../Illustration';

export function PedigreeIllustration() {
  return (
    <Illustration title="Pedigree · Hedda av Fjället S46782/2022" meta="5 gen">
      <div className="tree">
        <div className="col">
          <div className="node self">Hedda av&nbsp;Fjället</div>
        </div>
        <div className="col">
          <div className="node sire">♂ Thor vom&nbsp;Waldheim</div>
          <div className="node dam">♀ Selma av&nbsp;Nordanvind</div>
        </div>
        <div className="col">
          <div className="node">♂ Oskar Dalarna</div>
          <div className="node">♀ Inga vom Eichhof</div>
          <div className="node">♂ Bruno Nordanvind</div>
          <div className="node">♀ Freja av Fjället</div>
        </div>
      </div>
      <div
        style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid var(--line-soft)',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--stone)',
        }}
      >
        <span>COI (5 gen)</span>
        <span style={{ color: 'var(--rust)', fontWeight: 500 }}>2.4%</span>
      </div>
    </Illustration>
  );
}
