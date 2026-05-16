import MotionFadeIn from './MotionFadeIn'
import SectionHeading from './SectionHeading'

const SKILLS = [
  {
    name: 'HTML5 / CSS3',
    description:
      'セマンティックなマークアップと、保守しやすい CSS 設計を心がけています。',
  },
  {
    name: 'WordPress',
    description:
      'オリジナルテーマの実装からブロックエディタ対応まで、運用しやすい構造で構築します。',
  },
  {
    name: 'JavaScript',
    description:
      'モダンなフロントエンド実装と、軽量なインタラクション制作が得意です。',
  },
  {
    name: 'Photoshop',
    description:
      '写真補正・合成・バナー制作など、グラフィックワーク全般に対応します。',
  },
  {
    name: 'Illustrator',
    description:
      'ロゴ・アイコン・ベクター素材の制作。シンプルで使いやすい形を意識しています。',
  },
  {
    name: 'XD',
    description:
      'プロトタイピングとデザインシステム構築。実装に渡しやすい設計を意識します。',
  },
]

function SkillIcon({ index }: { index: number }) {
  const variants = [
    <circle key="c" cx="14" cy="14" r="10" />,
    <rect key="r" x="4" y="4" width="20" height="20" rx="3" />,
    <path key="t" d="M14 4 L24 24 L4 24 Z" />,
    <path key="d" d="M14 4 L24 14 L14 24 L4 14 Z" />,
    <path key="p" d="M6 6 H22 V22 H6 Z M6 14 H22" />,
    <path key="x" d="M6 6 L22 22 M22 6 L6 22" />,
  ]
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden
    >
      {variants[index % variants.length]}
    </svg>
  )
}

export default function SkillSection() {
  return (
    <section
      id="skill"
      className="scroll-mt-24 bg-offwhite px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="SKILL" title="使用ツールとスキル" />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, idx) => (
            <MotionFadeIn key={skill.name} delay={idx * 0.04} as="li">
              <div className="h-full rounded-sm border border-lightgray bg-background p-6">
                <div className="mb-4 text-dusty">
                  <SkillIcon index={idx} />
                </div>
                <h3 className="mb-2 text-[15px] font-medium text-charcoal">
                  {skill.name}
                </h3>
                <p className="text-[13px] leading-[1.9] text-mediumgray">
                  {skill.description}
                </p>
              </div>
            </MotionFadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
