import { getAllWorks } from '@/lib/works'
import MotionFadeIn from './MotionFadeIn'
import SectionHeading from './SectionHeading'
import WorkCard from './WorkCard'

export default function WorksSection() {
  const works = getAllWorks()

  return (
    <section id="works" className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="WORKS" title="制作実績" />
        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, idx) => (
            <MotionFadeIn key={work.slug} delay={idx * 0.05} as="li">
              <WorkCard work={work} />
            </MotionFadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
