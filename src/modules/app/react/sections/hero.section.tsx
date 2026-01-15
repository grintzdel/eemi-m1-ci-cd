import { Stat } from '@/modules/app/react/components/stat'
import { Button } from '@/ui/button'
import { Divider } from '@/ui/divider'
import Image from 'next/image'
import React from 'react'

const Stats: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Stat value="200" label="International Brands" symbol="+" />
      <Divider />
      <Stat value="2,000" label="High-Quality Products" symbol="+" />
      <Divider />
      <Stat value="30,000" label="Happy Customers" symbol="+" />
    </div>
  )
}

export const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="md:h-vh h-dvh bg-[#F2F0F1]">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-12 p-25">
          <div className="flex flex-col gap-8">
            <h1 className="text-[64px] font-bold uppercase">Find clothes that matches your style</h1>
            <p className="opacity-60">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>
            <Button href="/" text="Shop Now" />
          </div>
          <Stats />
        </div>
        <Image
          src="/image-hero-section.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  )
}
