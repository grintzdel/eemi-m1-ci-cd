export type CurrencySymbols = '$' | '€' | '£' | '¥'

type CalculateDiscountPercentageParams = {
  originalPrice: number
  discountedPrice: number
}

export const calculateDiscountPercentage = ({
  originalPrice,
  discountedPrice,
}: CalculateDiscountPercentageParams): number => {
  return Math.round((1 - discountedPrice / originalPrice) * 100)
}

type FormatPriceParams = {
  price: number
  currency: CurrencySymbols
}

export const formatPrice = ({ price, currency }: FormatPriceParams): string => {
  return `${currency}${price.toFixed(2)}`
}
