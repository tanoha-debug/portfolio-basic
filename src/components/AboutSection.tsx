import Image from 'next/image'
import MotionFadeIn from './MotionFadeIn'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="ABOUT" title="自己紹介" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-14 md:items-start">
          <MotionFadeIn>
            <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-dustylight md:w-full">
              <Image
                src="/images/profile.svg"
                alt="プロフィール画像"
                fill
                sizes="(min-width: 768px) 260px, 192px"
                className="object-cover"
              />
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.08}>
            <div className="space-y-6 text-[14px] leading-[2] text-charcoal md:text-[15px]">
              <p>
                はじめまして、Web デザイナーの YOUR NAME と申します。コーポレートサイト・オウンドメディア・LP・バナーなど、Web まわりのデザインと実装をお手伝いしています。素材を活かしたシンプルな構成と、読み手のリズムを大切にしたタイポグラフィを得意としています。
              </p>
              <p>
                普段はクライアントワークを中心に、ヒアリングからデザイン・実装・公開後の運用サポートまで一貫して関わるスタイルです。「丁寧に、けれど軽やかに」をモットーに、長く付き合えるサイトづくりを目指しています。お気軽にご相談ください。
              </p>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  )
}
