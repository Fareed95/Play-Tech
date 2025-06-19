import { Metadata } from 'next'
import AboutHero from '@/components/AboutHero'
import OurStory from '@/components/OurStory'
import TeamSection from '@/components/TeamSection'
import ToolsEquipment from '@/components/ToolsEquipment'
import PoweredBy from '@/components/PoweredBy'

export const metadata: Metadata = {
  title: 'About Us - Play Tech Electronics Repair Mumbai',
  description: 'Learn about Play Tech - Mumbai\'s trusted electronics repair service since 2010. Meet our skilled technicians and discover our modern repair tools.',
}

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <TeamSection />
      <ToolsEquipment />
      <PoweredBy />
    </>
  )
}