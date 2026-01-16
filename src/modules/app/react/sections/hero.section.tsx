import { Stat } from '@/modules/app/react/components/stat'
import { Button } from '@/ui/button'
import { Divider } from '@/ui/divider'
import Image from 'next/image'
import React from 'react'

const Stats: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-start md:gap-8">
      <Stat value="200" label="International Brands" symbol="+" />
      <Divider className="hidden md:block" />
      <Stat value="2,000" label="High-Quality Products" symbol="+" />
      <Divider className="hidden md:block" />
      <Stat value="30,000" label="Happy Customers" symbol="+" />
    </div>
  )
}

export const HeroSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="flex flex-col lg:flex-row lg:gap-3">
        <div className="flex flex-col gap-6 p-6 md:gap-12 md:p-12 lg:p-25">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-3xl font-bold uppercase md:text-5xl lg:text-[64px]">
              Find clothes that matches your style
            </h1>
            <p className="text-sm opacity-60 md:text-base">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </p>
            <Button href="/" text="Shop Now" fullWidth className="md:w-fit" />
          </div>
          <Stats />
        </div>
        <Image
          src="/image-hero-section.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto w-full object-cover lg:max-w-[50%]"
        />
      </div>
    </section>
  )
}
