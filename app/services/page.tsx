import { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import PoweredBy from '@/components/PoweredBy'

export const metadata: Metadata = {
  title: 'Our Services - Play Tech Electronics Repair Mumbai',
  description: 'Complete electronics repair services including Apple computers, laptops, mobiles, tablets, and more. Expert technicians, modern tools, competitive pricing.',
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <PoweredBy />
    </>
  )
}