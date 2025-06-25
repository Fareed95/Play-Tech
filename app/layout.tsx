import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ClickTrackerProvider from './context/ClickTrackerProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Play Tech - Electronics Repair Services Mumbai | Trusted Since 2010',
  description: 'Play Tech in Chembur East, Mumbai - Trusted electronics repair service since 2010. Expert Apple computer repairs, fast turnaround, competitive pricing. 4.7★ rating with 511+ reviews.',
  keywords: 'electronics repair mumbai, apple computer repair, play tech chembur, electronics service center, computer repair mumbai, mobile repair, laptop repair',
  authors: [{ name: 'Play Tech Electronics' }],
  creator: 'CRODLIN Technology',
  publisher: 'Play Tech Electronics',
  robots: 'index, follow',
  openGraph: {
    title: 'Play Tech - Electronics Repair Services Mumbai',
    description: 'Trusted electronics repair service since 2010. Expert repairs, fast turnaround, competitive pricing.',
    url: 'https://playtech-mumbai.com',
    siteName: 'Play Tech Electronics',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play Tech - Electronics Repair Services Mumbai',
    description: 'Trusted electronics repair service since 2010. Expert repairs, fast turnaround, competitive pricing.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClickTrackerProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        </ClickTrackerProvider>
      </body>
    </html>
  )
}