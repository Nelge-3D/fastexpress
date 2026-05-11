import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}