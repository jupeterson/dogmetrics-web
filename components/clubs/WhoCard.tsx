type Props = { num: string; title: string; body: string };

export function WhoCard({ num, title, body }: Props) {
  return (
    <div className="who-card">
      <div className="num">{num}</div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
