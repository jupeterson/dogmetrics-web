export type KpiItem = { num: string; label: string };

export function KpiStrip({ items }: { items: KpiItem[] }) {
  return (
    <div className="kpi-strip">
      {items.map((k, i) => (
        <div key={i} className="kpi">
          <div className="kpi-num">{k.num}</div>
          <div className="kpi-label">{k.label}</div>
        </div>
      ))}
    </div>
  );
}
