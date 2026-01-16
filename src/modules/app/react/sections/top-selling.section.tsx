import { Product } from '@/modules/app/react/components/product'
import { CurrencySymbols } from '@/modules/app/react/utils/price.utils'
import { Button } from '@/ui/button'
import React from 'react'

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
    name: 'Vertical Striped Shirt',
    rating: 5.0,
    price: 212,
    discountPrice: 232,
    currency: '$',
    imageUrl: '/image-product-5.png',
  },
  {
    id: 2,
    name: 'Courage Grapgic T-shirt',
    rating: 4.0,
    price: 145,
    currency: '$',
    imageUrl: '/image-product-6.png',
  },
  {
    id: 3,
    name: 'Loose Fit Bermuada Shorts',
    rating: 3.0,
    price: 80,
    currency: '$',
    imageUrl: '/image-product-7.png',
  },
  {
    id: 4,
    name: 'Faded Skinny Jeans',
    rating: 4.5,
    price: 210,
    currency: '$',
    imageUrl: '/image-product-8.png',
  },
]
export const TopSellingSection: React.FC = (): React.JSX.Element => {
  return (
    <section className="container mx-auto flex flex-col justify-center gap-13.75 py-25">
      <h2 className="text-center text-5xl font-bold text-black uppercase">Top Selling</h2>
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
      <div className="flex flex-row justify-center">
        <Button text="View All" href="/" variant="outline" />
      </div>
    </section>
  )
}
