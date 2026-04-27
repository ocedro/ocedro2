import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/newsletter';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  const description = post.content.split('\n\n')[0]?.slice(0, 160) || `${post.category} — ${post.title}`;
  const ogImage = post.coverImage || '/og-newsletter.png';

  return {
    title: post.title,
    description,
    alternates: {
      canonical: `/newsletter/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: `https://ocedro.com.br/newsletter/${post.slug}`,
      siteName: 'Clínica Cedro',
      title: post.title,
      description,
      authors: ['Leandro Carone'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-16 bg-cedro-navy">
        <div className="max-w-[800px] mx-auto px-8">
          <Link
            href="/newsletter"
            className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-cedro-sage hover:text-cedro-red transition-colors mb-8 inline-block"
          >
            ← Newsletter
          </Link>
          <SectionLabel>{post.category}</SectionLabel>
          <h1 className="text-cedro-white mb-4">{post.title}</h1>
          <p className="text-sm text-cedro-sage/70">{post.date}</p>
        </div>
      </section>

      {post.coverImage && (
        <div className="relative w-full max-h-[480px] overflow-hidden bg-cedro-black">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1200}
            height={480}
            className="w-full object-cover"
            priority
          />
        </div>
      )}

      <section className="py-20 bg-cedro-black">
        <div className="max-w-[720px] mx-auto px-8">
          <Divider className="mb-12" />
          <div className="flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-cedro-light text-[1.05rem] leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
          <Divider className="mt-16 mb-10" />
          <Link
            href="/newsletter"
            className="font-sans text-sm font-bold text-cedro-red uppercase tracking-wider hover:translate-x-1 transition-transform inline-block"
          >
            ← Ver todas as publicações
          </Link>
        </div>
      </section>
    </div>
  );
}
