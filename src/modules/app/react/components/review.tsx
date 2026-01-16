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
    <div className="flex min-w-[400px] flex-col gap-4 rounded-[20px] border border-black/10 bg-white px-8 py-7">
      <div className="flex flex-row gap-1">
        {stars.map((starType, index) => (
          <Star key={index} type={starType} index={index} />
        ))}
      </div>
      <div className="flex flex-row items-center gap-1">
        <h5 className="text-xl font-bold">{name}.</h5>
        <Image src="/icon-check.svg" alt="Verified review" height={24} width={24} />
      </div>
      <p className="text-black/60">&#34;{comment}&#34;</p>
    </div>
  )
}
