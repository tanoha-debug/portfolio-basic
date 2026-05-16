import Image from 'next/image'
import Link from 'next/link'
import type { WorkMeta } from '@/lib/works'

export default function WorkCard({ work }: { work: WorkMeta }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block"
      aria-label={`${work.title} の詳細を見る`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-dustylight">
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-[15px] font-medium text-charcoal group-hover:text-dusty transition-colors">
          {work.title}
        </h3>
        <p className="mt-1 text-[12px] tracking-wide text-mediumgray">
          {work.category}
        </p>
      </div>
    </Link>
  )
}
