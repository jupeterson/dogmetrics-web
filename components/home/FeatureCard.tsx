type Props = {
  num: string;
  title: string;
  body: string;
  label: string;
  vizNum: string;
};

export function FeatureCard({ num, title, body, label, vizNum }: Props) {
  return (
    <div className="feature-card">
      <div className="feature-num">{num}</div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: body }} />
      <div className="viz">
        <span>{label}</span>
        <span className="num">{vizNum}</span>
      </div>
    </div>
  );
}
