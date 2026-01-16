import { Brand } from '@/modules/app/react/components/brand'
import React from 'react'

const brands = [
  { logoUrl: '/logo-marquee-versace.svg', brandName: 'Versace' },
  { logoUrl: '/logo-marquee-zara.svg', brandName: 'Zara' },
  { logoUrl: '/logo-marquee-gucci.svg', brandName: 'Gucci' },
  { logoUrl: '/logo-marquee-prada.svg', brandName: 'Prada' },
  { logoUrl: '/logo-marquee-calvin-klein.svg', brandName: 'Calvin Klein' },
]

const BrandList: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex shrink-0 gap-8 pr-8 md:gap-24 md:pr-24">
      {brands.map((brand) => (
        <Brand key={brand.brandName} {...brand} />
      ))}
    </div>
  )
}

export const MarqueeSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="overflow-hidden bg-black py-6 md:py-11">
      <div className="animate-marquee flex">
        <BrandList />
        <BrandList />
      </div>
    </section>
  )
}
