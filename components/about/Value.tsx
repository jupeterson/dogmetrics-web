type Props = { title: string; body: string };

export function Value({ title, body }: Props) {
  return (
    <div className="value">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
