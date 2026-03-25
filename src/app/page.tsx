import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Tarifs from '@/components/Tarifs'
import Business from '@/components/Business'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/Whatsappbutton'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Tarifs />
      <Business />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}