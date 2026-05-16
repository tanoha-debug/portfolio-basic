import MotionFadeIn from './MotionFadeIn'

type Props = {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <MotionFadeIn className="mb-12 md:mb-16">
      <p className="mb-3 text-[11px] tracking-[0.3em] text-dusty">{eyebrow}</p>
      <h2 className="text-2xl font-medium text-charcoal md:text-3xl">
        {title}
      </h2>
    </MotionFadeIn>
  )
}
