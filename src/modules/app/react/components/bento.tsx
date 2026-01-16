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
    <div className={`relative overflow-hidden rounded-[20px] bg-white ${className}`}>
      <Image src={imageSource} alt={title} fill className="object-cover" />
      <span className="absolute px-9 py-6.25 text-4xl font-bold">{title}</span>
    </div>
  )
}

type BentoProps = {
  items: BentoItemData[]
}

export const Bento: React.FC<BentoProps> = ({ items }: BentoProps): React.JSX.Element => {
  const gridPositions = ['col-span-1', 'col-span-2', 'col-span-2', 'col-span-1']

  return (
    <div className="grid grid-cols-3 gap-5">
      {items.map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          imageSource={item.imageSource}
          className={`min-h-72 ${gridPositions[index] || ''}`}
        />
      ))}
    </div>
  )
}
