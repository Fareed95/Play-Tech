import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import PoweredBy from '@/components/PoweredBy'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <PoweredBy />
    </>
  )
}