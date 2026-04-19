type Props = { date: string; title: string; category: string; read: string; href?: string };

export function PostRow({ date, title, category, read, href = '#' }: Props) {
  return (
    <a className="post" href={href}>
      <span className="d">{date}</span>
      <span className="t">{title}</span>
      <span className="c">{category}</span>
      <span className="r">{read}</span>
    </a>
  );
}
