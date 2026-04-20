import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/Whatsappbutton'
import { Analytics } from '@vercel/analytics/next'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fast Livraison Express — Livraison & Déménagement à Libreville',
  description:
    'Fast Express, votre partenaire logistique de confiance à Libreville. Livraison de colis, Déménagement et services aux entreprises. Commandez via WhatsApp.',
  keywords: [
    'livraison Libreville',
    'Déménagement Gabon',
    'Fast Express',
    'colis Libreville',
    'logistique Gabon',
    'livraison rapide Akanda',
    'livraison Owendo',
  ],
  openGraph: {
    title: 'Fast Livraison Express',
    description: 'Vos colis livrés rapidement partout à Libreville',
    type: 'website',
    locale: 'fr_GA',
  },
  themeColor: '#1a5c2a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar/><WhatsAppButton/>{children}<Footer/>
        <Analytics />
      </body>
    </html>
  )
}