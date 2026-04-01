import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/newsletter';
import { SectionLabel } from '@/components/ui/section-label';
import { Divider } from '@/components/ui/divider';

export default function NewsletterPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col">
      <section className="pt-32 pb-16 bg-cedro-navy">
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionLabel>Clínica Cedro</SectionLabel>
          <h1 className="text-cedro-white mb-4">Newsletter.</h1>
          <Divider className="my-6" />
          <p className="text-lg text-cedro-sage max-w-[600px]">
            Reflexões que não cabem em um Reel. Clínica, fé, masculinidade e o que está sendo construído.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cedro-black">
        <div className="max-w-[1200px] mx-auto px-8">
          {sorted.length === 0 ? (
            <p className="text-cedro-sage">Nenhuma publicação ainda.</p>
          ) : (
            <div className="flex flex-col divide-y divide-cedro-sage/10">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`/newsletter/${post.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 py-12 hover:bg-cedro-navy/30 transition-colors px-2 -mx-2"
                >
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-cedro-red">
                          {post.category}
                        </span>
                        <span className="text-xs text-cedro-sage/60">{post.date}</span>
                      </div>
                      <h2 className="text-cedro-white text-[1.6rem] leading-tight mb-3 group-hover:text-cedro-red transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-cedro-sage text-[0.95rem] leading-relaxed max-w-[520px]">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-bold text-cedro-red uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                      Ler →
                    </span>
                  </div>
                  {post.coverImage && (
                    <div className="relative w-full aspect-[4/3] md:aspect-auto overflow-hidden bg-cedro-navy">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
