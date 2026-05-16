import MotionFadeIn from './MotionFadeIn'
import SectionHeading from './SectionHeading'

const LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'xxxxxx@example.com', href: 'mailto:xxxxxx@example.com' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-offwhite px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="CONTACT" title="お問い合わせ" />

        <MotionFadeIn>
          <p className="mb-10 text-[14px] leading-[2] text-mediumgray md:text-[15px]">
            お仕事のご相談やご質問は、SNS のダイレクトメッセージ
            <br className="hidden md:inline" />
            またはメールにてお気軽にお声がけください。
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.08}>
          <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
            {LINKS.map((link) => {
              const isExternal = link.href.startsWith('http')
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-[14px] tracking-wide text-charcoal underline underline-offset-[6px] decoration-lightgray hover:text-dusty hover:decoration-dusty transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </MotionFadeIn>
      </div>
    </section>
  )
}
