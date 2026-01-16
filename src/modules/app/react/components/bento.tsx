import Image from 'next/image'
import React from 'react'

type BentoItemData = {
  title: string
  imageSource: string
}

type BentoItemProps = BentoItemData & {
  className?: string
}

const BentoItem: React.FC<BentoItemProps> = ({
  title,
  imageSource,
  className = '',
}: BentoItemProps): React.JSX.Element => {
  return (
    <div className={`relative overflow-hidden rounded-[12px] bg-white md:rounded-[20px] ${className}`}>
      <Image src={imageSource} alt={title} fill className="object-cover" />
      <span className="absolute px-4 py-4 text-xl font-bold md:px-9 md:py-6.25 md:text-4xl">{title}</span>
    </div>
  )
}

type BentoProps = {
  items: BentoItemData[]
}

export const Bento: React.FC<BentoProps> = ({ items }: BentoProps): React.JSX.Element => {
  const gridPositionsMobile = ['col-span-1', 'col-span-1', 'col-span-1', 'col-span-1']
  const gridPositionsDesktop = ['md:col-span-1', 'md:col-span-2', 'md:col-span-2', 'md:col-span-1']

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {items.map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          imageSource={item.imageSource}
          className={`min-h-40 md:min-h-72 ${gridPositionsMobile[index] || ''} ${gridPositionsDesktop[index] || ''}`}
        />
      ))}
    </div>
  )
}
