import { describe, expect, it } from 'vitest'

import { calculateDiscountPercentage, formatPrice } from './price.utils'

describe('calculateDiscountPercentage', () => {
  it('should calculate 50% discount correctly', () => {
    const result = calculateDiscountPercentage({ originalPrice: 100, discountedPrice: 50 })
    expect(result).toBe(50)
  })

  it('should calculate 20% discount correctly', () => {
    const result = calculateDiscountPercentage({ originalPrice: 100, discountedPrice: 80 })
    expect(result).toBe(20)
  })

  it('should calculate 25% discount correctly', () => {
    const result = calculateDiscountPercentage({ originalPrice: 200, discountedPrice: 150 })
    expect(result).toBe(25)
  })

  it('should round to nearest integer', () => {
    const result = calculateDiscountPercentage({ originalPrice: 100, discountedPrice: 67 })
    expect(result).toBe(33)
  })

  it('should return 0 when prices are equal', () => {
    const result = calculateDiscountPercentage({ originalPrice: 100, discountedPrice: 100 })
    expect(result).toBe(0)
  })
})

describe('formatPrice', () => {
  it('should format price with dollar symbol', () => {
    const result = formatPrice({ price: 120, currency: '$' })
    expect(result).toBe('$120.00')
  })

  it('should format price with euro symbol', () => {
    const result = formatPrice({ price: 99.99, currency: '€' })
    expect(result).toBe('€99.99')
  })

  it('should format price with pound symbol', () => {
    const result = formatPrice({ price: 50, currency: '£' })
    expect(result).toBe('£50.00')
  })

  it('should format price with yen symbol', () => {
    const result = formatPrice({ price: 1000, currency: '¥' })
    expect(result).toBe('¥1000.00')
  })

  it('should format decimal prices correctly', () => {
    const result = formatPrice({ price: 19.5, currency: '$' })
    expect(result).toBe('$19.50')
  })
})
