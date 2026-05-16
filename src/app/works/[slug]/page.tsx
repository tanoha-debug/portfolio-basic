import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getWorkBySlug } from '@/lib/works'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const work = getWorkBySlug(slug)
    return {
      title: work.title,
      description: work.summary,
      openGraph: {
        title: `${work.title} — YOUR NAME`,
        description: work.summary,
        type: 'article',
        images: [{ url: work.mainVisual }],
      },
    }
  } catch {
    return { title: 'Not Found' }
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params

  let work
  try {
    work = getWorkBySlug(slug)
  } catch {
    notFound()
  }

  const details: { label: string; value: React.ReactNode }[] = [
    {
      label: 'URL',
      value: (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-dusty underline underline-offset-[4px] hover:text-dustydark"
        >
          {work.url}
        </a>
      ),
    },
    { label: '担当', value: work.role },
    { label: 'カテゴリー', value: work.category },
    { label: 'サイトの目的', value: work.purpose },
    { label: 'ターゲット', value: work.target },
    { label: 'クライアント', value: work.client },
    { label: '公開日', value: work.publishedAt },
  ]

  return (
    <article className="px-6 pt-28 pb-20 md:px-10 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 text-xs tracking-wider text-mediumgray">
          <Link
            href="/#works"
            className="hover:text-dusty transition-colors"
          >
            WORKS
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{work.title}</span>
        </nav>

        <header className="mb-10">
          <p className="mb-3 text-[11px] tracking-[0.3em] text-dusty">
            {work.category}
          </p>
          <h1 className="text-3xl font-medium leading-[1.25] text-charcoal md:text-4xl">
            {work.title}
          </h1>
          <p className="mt-4 text-[13px] text-mediumgray">{work.client}</p>
        </header>
      </div>

      <div className="mx-auto mb-12 max-w-5xl md:mb-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-dustylight">
          <Image
            src={work.mainVisual}
            alt={work.title}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="mb-12 text-[14px] leading-[2] text-charcoal md:text-[15px]">
          {work.summary}
        </p>

        <dl className="mb-16 grid grid-cols-1 gap-y-5 border-y border-lightgray py-8 sm:grid-cols-[140px_1fr] sm:gap-x-8">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="contents sm:grid sm:grid-cols-subgrid"
            >
              <dt className="text-[12px] tracking-[0.12em] text-mediumgray">
                {detail.label}
              </dt>
              <dd className="mb-3 text-[14px] text-charcoal sm:mb-0">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mdx-content">
          <MDXRemote source={work.content} />
        </div>

        <div className="mt-16 border-t border-lightgray pt-10 text-center">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-[13px] tracking-wider text-charcoal hover:text-dusty transition-colors"
          >
            <span aria-hidden>←</span>
            Works 一覧へ
          </Link>
        </div>
      </div>
    </article>
  )
}
