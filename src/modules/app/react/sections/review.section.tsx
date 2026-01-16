import React from 'react'

import { Review } from '../components/review'
import { Slider } from '../components/slider'

type ReviewData = {
  name: string
  comment: string
  rating: number
}

const reviews: ReviewData[] = [
  {
    name: 'Sarah M',
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: 'Alex K',
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    rating: 5,
  },
  {
    name: 'James L',
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    name: 'Mooe',
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    name: 'Sarah M',
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: 'Alex K',
    comment:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    rating: 5,
  },
  {
    name: 'James L',
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    name: 'Mooe',
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
]

export const ReviewSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="flex flex-col gap-6 py-12 md:gap-10 md:py-25">
      <h3 className="px-4 text-2xl font-bold uppercase md:px-25 md:text-[48px]">OUR HAPPY CUSTOMERS</h3>
      <Slider>
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} comment={review.comment} rating={review.rating} />
        ))}
      </Slider>
    </section>
  )
}
