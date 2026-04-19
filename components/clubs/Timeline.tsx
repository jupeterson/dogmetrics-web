export type TimelineStep = { week: string; title: string; body: string };

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="timeline">
      {steps.map((s, i) => (
        <div className="tl-row" key={i}>
          <span className="w">{s.week}</span>
          <div className="b">
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
