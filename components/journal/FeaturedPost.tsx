import { Tag } from '@/components/ui/Tag';

type Props = { category: string; title: string; excerpt: string; meta: string; index: string; glyph: string };

export function FeaturedPost({ category, title, excerpt, meta, index, glyph }: Props) {
  return (
    <article className="feature-post">
      <div>
        <Tag>{category}</Tag>
        <h2>{title}</h2>
        <p className="excerpt">{excerpt}</p>
        <div className="meta">{meta}</div>
      </div>
      <div className="feature-img">
        <div className="pat" />
        <div className="n">{index}</div>
        <div className="g">{glyph}</div>
      </div>
    </article>
  );
}
