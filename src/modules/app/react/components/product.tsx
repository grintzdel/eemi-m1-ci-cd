import Image from 'next/image'
import React from 'react'

import { Star } from '@/modules/app/react/components/star'
import { calculateDiscountPercentage, CurrencySymbols, formatPrice } from '@/modules/app/react/utils/price.utils'
import { formatRating, generateStarsArray } from '@/modules/app/react/utils/review.utils'

type ReviewStarsProps = {
  rating: number
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ rating }: ReviewStarsProps): React.JSX.Element => {
  const stars = generateStarsArray({ rating })

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-row gap-1">
        {stars.map((starType, index) => (
          <Star key={index} type={starType} index={index} />
        ))}
      </div>
      <span className="text-sm text-gray-600">{formatRating(rating)}</span>
    </div>
  )
}

type DiscountBadgeProps = {
  discountPercentage: number
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ discountPercentage }: DiscountBadgeProps): React.JSX.Element => {
  return (
    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">-{discountPercentage}%</span>
  )
}

type ProductProps = {
  name: string
  rating: number
  price: number
  discountPrice?: number
  currency: CurrencySymbols
  imageUrl: string
}

export const Product: React.FC<ProductProps> = ({
  name,
  rating,
  price,
  discountPrice,
  currency,
  imageUrl,
}: ProductProps): React.JSX.Element => {
  const hasDiscount = discountPrice !== undefined && discountPrice < price
  const displayPrice = hasDiscount ? discountPrice : price
  const discountPercentage = hasDiscount
    ? calculateDiscountPercentage({ originalPrice: price, discountedPrice: discountPrice })
    : 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center rounded-[20px] bg-[#F0EEED] p-4">
        <Image
          alt={name}
          src={imageUrl}
          width={225}
          height={225}
          className="mx-auto h-56.25 w-56.25 max-w-56.25 object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <ReviewStars rating={rating} />
        <div className="flex flex-row items-center gap-2.5">
          <span className="text-xl font-bold">{formatPrice({ price: displayPrice, currency })}</span>
          {hasDiscount && (
            <>
              <span className="text-xl text-gray-400 line-through">{formatPrice({ price, currency })}</span>
              <DiscountBadge discountPercentage={discountPercentage} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
