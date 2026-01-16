import React from 'react'

import { Product } from '../components/product'
import { CurrencySymbols } from '../utils/price.utils'

type ProductData = {
  id: number
  name: string
  rating: number
  price: number
  discountPrice?: number
  currency: CurrencySymbols
  imageUrl: string
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'T-shirt With Tape Details',
    rating: 4.5,
    price: 120,
    currency: '$',
    imageUrl: '/image-product-1.png',
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    rating: 3.5,
    price: 260,
    discountPrice: 240,
    currency: '$',
    imageUrl: '/image-product-2.png',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    rating: 4.5,
    price: 180,
    currency: '$',
    imageUrl: '/image-product-3.png',
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    rating: 4,
    price: 160,
    discountPrice: 130,
    currency: '$',
    imageUrl: '/image-product-4.png',
  },
]

export const NewArrivalsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="container mx-auto flex flex-col justify-center gap-13.75 py-25">
      <h2 className="text-center text-5xl font-bold text-black uppercase">New Arrivals</h2>
      <div className="flex flex-col justify-between gap-5 md:flex-row">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            rating={product.rating}
            price={product.price}
            discountPrice={product.discountPrice}
            currency={product.currency}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}
