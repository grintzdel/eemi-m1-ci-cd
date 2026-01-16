import React from 'react'

import { Bento } from '../components/bento'

type BentoItemData = {
  title: string
  imageSource: string
}

const bentoItems: BentoItemData[] = [
  { title: 'Casual', imageSource: '/image-bento-1.png' },
  { title: 'Formal', imageSource: '/image-bento-2.png' },
  { title: 'Party', imageSource: '/image-bento-3.png' },
  { title: 'Gym', imageSource: '/image-bento-4.png' },
]

export const BrowseSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="flex justify-center px-4 md:px-25">
      <div className="flex w-full flex-col justify-center gap-6 rounded-[20px] bg-[#F0F0F0] px-4 py-6 md:gap-16 md:rounded-[40px] md:px-16 md:py-17.5">
        <h3 className="text-center text-xl font-bold uppercase md:text-[48px]">Browse By Dress Style</h3>
        <Bento items={bentoItems} />
      </div>
    </section>
  )
}
