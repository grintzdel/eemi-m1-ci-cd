import { HeroSection } from '@/modules/app/react/sections/hero.section'
import { MarqueeSection } from '@/modules/app/react/sections/marquee.section'
import { NewArrivalsSection } from '@/modules/app/react/sections/new-arrivals.section'
import React from 'react'

export default function HomePage(): React.JSX.Element {
  return (
    <React.Fragment>
      <HeroSection />
      <MarqueeSection />
      <NewArrivalsSection />
    </React.Fragment>
  )
}
