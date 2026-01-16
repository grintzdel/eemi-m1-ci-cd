import Image from 'next/image'
import React from 'react'

type BrandProps = {
  brandName: string
  logoUrl: string
}

export const Brand: React.FC<BrandProps> = ({ brandName, logoUrl }: BrandProps): React.JSX.Element => {
  return (
    <Image
      src={logoUrl}
      alt={brandName}
      width={165}
      height={35}
      className="h-auto max-h-8.75 w-full max-w-41.25 shrink-0 object-contain"
    />
  )
}
