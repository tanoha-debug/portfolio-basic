import MotionFadeIn from './MotionFadeIn'

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center px-6 pt-28 pb-20 md:px-10 md:pt-32">
      <div className="mx-auto w-full max-w-5xl">
        <MotionFadeIn>
          <p className="mb-6 text-[11px] tracking-[0.3em] text-dusty">
            PORTFOLIO
          </p>
        </MotionFadeIn>
        <MotionFadeIn delay={0.08}>
          <h1 className="mb-8 text-4xl font-medium leading-[1.15] text-charcoal md:text-6xl">
            YOUR NAME
          </h1>
        </MotionFadeIn>
        <MotionFadeIn delay={0.16}>
          <p className="max-w-xl text-sm leading-[2] text-mediumgray md:text-[15px]">
            Web デザイナーとして、ブランドの世界観を丁寧に翻訳することを大切にしています。
            <br />
            シンプルな構成と、ほんの少しの余白で。
            <br />
            日々の仕事や、これまで関わってきた制作物を紹介します。
          </p>
        </MotionFadeIn>
      </div>
    </section>
  )
}
