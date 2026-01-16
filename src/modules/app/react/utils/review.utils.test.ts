import { describe, expect, it } from 'vitest'

import { formatRating, generateStarsArray } from './review.utils'

describe('generateStarsArray', () => {
  it('should return 5 full stars for rating 5', () => {
    const result = generateStarsArray({ rating: 5 })
    expect(result).toEqual(['full', 'full', 'full', 'full', 'full'])
  })

  it('should return 5 empty stars for rating 0', () => {
    const result = generateStarsArray({ rating: 0 })
    expect(result).toEqual(['empty', 'empty', 'empty', 'empty', 'empty'])
  })

  it('should return 4 full stars and 1 half star for rating 4.5', () => {
    const result = generateStarsArray({ rating: 4.5 })
    expect(result).toEqual(['full', 'full', 'full', 'full', 'half'])
  })

  it('should return 3 full stars and 2 empty stars for rating 3', () => {
    const result = generateStarsArray({ rating: 3 })
    expect(result).toEqual(['full', 'full', 'full', 'empty', 'empty'])
  })

  it('should return 2 full stars, 1 half star and 2 empty stars for rating 2.5', () => {
    const result = generateStarsArray({ rating: 2.5 })
    expect(result).toEqual(['full', 'full', 'half', 'empty', 'empty'])
  })

  it('should return 1 half star and 4 empty stars for rating 0.5', () => {
    const result = generateStarsArray({ rating: 0.5 })
    expect(result).toEqual(['half', 'empty', 'empty', 'empty', 'empty'])
  })

  it('should return array of length 5', () => {
    const result = generateStarsArray({ rating: 3.5 })
    expect(result).toHaveLength(5)
  })
})

describe('formatRating', () => {
  it('should format rating 5 as "5/5"', () => {
    const result = formatRating(5)
    expect(result).toBe('5/5')
  })

  it('should format rating 4.5 as "4.5/5"', () => {
    const result = formatRating(4.5)
    expect(result).toBe('4.5/5')
  })

  it('should format rating 0 as "0/5"', () => {
    const result = formatRating(0)
    expect(result).toBe('0/5')
  })

  it('should format rating 3.5 as "3.5/5"', () => {
    const result = formatRating(3.5)
    expect(result).toBe('3.5/5')
  })
})
