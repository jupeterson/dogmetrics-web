import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Lede } from '@/components/ui/Lede';
import { FeatList } from './FeatList';

type Props = {
  id: string;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  lede: string;
  features: string[];
  illustration: ReactNode;
};

export function ProductBlock({ id, reverse, eyebrow, title, lede, features, illustration }: Props) {
  return (
    <section className="block" id={id}>
      <Container>
        <div className={reverse ? 'block-grid reverse' : 'block-grid'}>
          {reverse ? <>{illustration}<div><Eyebrow>{eyebrow}</Eyebrow><Heading level="h2" html={title} /><Lede html={lede} /><FeatList items={features} /></div></> : <>
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Heading level="h2" html={title} />
              <Lede html={lede} />
              <FeatList items={features} />
            </div>
            {illustration}
          </>}
        </div>
      </Container>
    </section>
  );
}
