export function FeatList({ items }: { items: string[] }) {
  return (
    <ul className="feat-list">
      {items.map((html, i) => (
        <li key={i}>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </li>
      ))}
    </ul>
  );
}
