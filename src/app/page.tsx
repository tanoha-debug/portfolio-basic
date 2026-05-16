import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Hero from '@/components/Hero'
import SkillSection from '@/components/SkillSection'
import WorksSection from '@/components/WorksSection'

export default function Home() {
  return (
    <>
      <Hero />
      <WorksSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
