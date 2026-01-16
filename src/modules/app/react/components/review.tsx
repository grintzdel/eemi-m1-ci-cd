import Image from 'next/image'
import React from 'react'

import { generateStarsArray } from '@/modules/app/react/utils/review.utils'

import { Star } from './star'

type ReviewProps = {
  name: string
  comment: string
  rating: number
}

export const Review: React.FC<ReviewProps> = ({ name, comment, rating }: ReviewProps): React.JSX.Element => {
  const stars = generateStarsArray({ rating })

  return (
    <div className="flex min-w-[280px] flex-col gap-3 rounded-[12px] border border-black/10 bg-white px-4 py-4 md:min-w-[400px] md:gap-4 md:rounded-[20px] md:px-8 md:py-7">
      <div className="flex flex-row gap-1">
        {stars.map((starType, index) => (
          <Star key={index} type={starType} index={index} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-1">
        <h5 className="text-base font-bold md:text-xl">{name}.</h5>
        <Image src="/icon-check.svg" alt="Verified review" height={20} width={20} className="md:h-6 md:w-6" />
      </div>
      <p className="text-sm text-black/60 md:text-base">&#34;{comment}&#34;</p>
    </div>
  )
}
