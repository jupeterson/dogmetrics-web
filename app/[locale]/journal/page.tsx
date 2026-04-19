import { notFound } from 'next/navigation';
import { Nav } from '@/components/site/Nav';
import { Footer } from '@/components/site/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeaturedPost } from '@/components/journal/FeaturedPost';
import { PostRow } from '@/components/journal/PostRow';
import { FilterBar } from '@/components/journal/FilterBar';
import { createT, isLocale } from '@/lib/i18n';

const POSTS = [
  { date: 'FEB 28, 2026', title: "Why coefficient of inbreeding isn't enough anymore", category: 'Data', read: '8 min' },
  { date: 'FEB 14, 2026', title: 'Reading the SKK health registry, properly', category: 'Data', read: '11 min' },
  { date: 'JAN 30, 2026', title: "A day with SVK's breeding committee, in the field and the spreadsheet", category: 'Field notes', read: '9 min' },
  { date: 'JAN 12, 2026', title: 'Effective population size: the Ne you should actually be tracking', category: 'Data', read: '14 min' },
  { date: 'DEC 18, 2025', title: 'We joined Vendel Seed — and why that makes Insight more stubborn, not less', category: 'Company', read: '4 min' },
  { date: 'NOV 22, 2025', title: 'Notes from the Continental pointing-dog championships', category: 'Field notes', read: '6 min' },
  { date: 'OCT 08, 2025', title: 'Building a pedigree graph that fits in your pocket', category: 'Product', read: '10 min' },
  { date: 'SEP 14, 2025', title: 'What the Riksprov protocol teaches you about data modelling', category: 'Data', read: '13 min' },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = createT(locale);
  return { title: t('blog.title') };
}

export default async function JournalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = createT(locale);
  return (
    <>
      <Nav locale={locale} active="blog" />
      <PageHeader
        eyebrow={t('blog.eyebrow')}
        headlineHtml={t('blog.headline')}
        ledeHtml={t('blog.lede')}
      />
      <Section>
        <Container>
          <div style={{ marginBottom: 20 }}>
            <Eyebrow>{t('blog.featured')}</Eyebrow>
          </div>
          <FeaturedPost
            category="Product"
            title="How SVK migrated 14 years of mating lists in six weeks"
            excerpt="A detailed walkthrough of the data archaeology, the edge cases, and the committee decisions that got Svenska Vorstehklubben from fourteen years of spreadsheets to live pedigree data in under two months."
            meta="MAR 2026 · 12 min read · Markus Ek"
            index="01 / Feature"
            glyph="ƒ"
          />
          <div>
            <h3 className="h3" style={{ margin: '80px 0 0' }}>{t('blog.all')}</h3>
            <FilterBar locale={locale} />
            <div className="post-list">
              {POSTS.map((p) => (
                <PostRow key={p.title} {...p} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Footer locale={locale} />
    </>
  );
}
