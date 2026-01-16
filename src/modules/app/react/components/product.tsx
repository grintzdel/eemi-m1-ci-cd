import Image from 'next/image'
import React from 'react'

import { calculateDiscountPercentage, CurrencySymbols, formatPrice } from '../utils/price.utils'
import { formatRating, generateStarsArray, StarType } from '../utils/review.utils'

type FullStarProps = {
  index: number
}

const FullStar: React.FC<FullStarProps> = ({ index }: FullStarProps): React.JSX.Element => {
  return (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-yellow-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.225 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z" />
    </svg>
  )
}

type HalfStarProps = {
  index: number
}

const HalfStar: React.FC<HalfStarProps> = ({ index }: HalfStarProps): React.JSX.Element => {
  return (
    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
      <defs>
        <linearGradient id={`halfGradient-${index}`}>
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#D1D5DB" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#halfGradient-${index})`}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.225 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
      />
    </svg>
  )
}

type EmptyStarProps = {
  index: number
}

const EmptyStar: React.FC<EmptyStarProps> = ({ index }: EmptyStarProps): React.JSX.Element => {
  return (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.225 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z" />
    </svg>
  )
}

type StarProps = {
  type: StarType
  index: number
}

const Star: React.FC<StarProps> = ({ type, index }: StarProps): React.JSX.Element => {
  if (type === 'full') return <FullStar index={index} />
  if (type === 'half') return <HalfStar index={index} />
  return <EmptyStar index={index} />
}

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
