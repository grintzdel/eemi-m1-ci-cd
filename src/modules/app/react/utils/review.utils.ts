export type StarType = 'full' | 'half' | 'empty'

type GenerateStarsArrayParams = {
  rating: number
}

export const generateStarsArray = ({ rating }: GenerateStarsArrayParams): StarType[] => {
  const stars: StarType[] = []
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push('full')
    } else if (rating >= i + 0.5) {
      stars.push('half')
    } else {
      stars.push('empty')
    }
  }
  return stars
}

export const formatRating = (rating: number): string => {
  return `${rating}/5`
}
