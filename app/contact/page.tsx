import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import MapSection from '@/components/MapSection'
import PoweredBy from '@/components/PoweredBy'

export const metadata: Metadata = {
  title: 'Contact Us - Play Tech Electronics Repair Mumbai',
  description: 'Get in touch with Play Tech in Chembur East, Mumbai. Visit our repair center, call us, or send a message. Fast response guaranteed.',
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <PoweredBy />
    </>
  )
}