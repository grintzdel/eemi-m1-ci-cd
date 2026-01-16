'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

type SliderControlsProps = {
  onPrevious: () => void
  onNext: () => void
}

const SliderControls: React.FC<SliderControlsProps> = ({
  onPrevious,
  onNext,
}: SliderControlsProps): React.JSX.Element => {
  return (
    <div className="flex flex-row gap-4.5">
      <button onClick={onPrevious} className="cursor-pointer">
        <Image src="/icon-arrow.svg" alt="Previous" height={24} width={24} />
      </button>
      <button onClick={onNext} className="cursor-pointer">
        <Image src="/icon-arrow.svg" alt="Next" height={24} width={24} className="rotate-180" />
      </button>
    </div>
  )
}

type SliderProps = {
  children: React.ReactNode
  scrollAmount?: number
}

export const Slider: React.FC<SliderProps> = ({ children, scrollAmount = 420 }: SliderProps): React.JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isResettingRef = useRef(false)

  const getHalfWidth = (): number => {
    if (!carouselRef.current) return 0
    return carouselRef.current.scrollWidth / 2
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = getHalfWidth()
    }
  }, [])

  const handleScrollEnd = (): void => {
    if (!carouselRef.current || isResettingRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    const halfWidth = getHalfWidth()

    if (scrollLeft <= 50) {
      isResettingRef.current = true
      carouselRef.current.scrollLeft = halfWidth + scrollLeft
      isResettingRef.current = false
    } else if (scrollLeft + clientWidth >= scrollWidth - 50) {
      isResettingRef.current = true
      carouselRef.current.scrollLeft = scrollLeft - halfWidth
      isResettingRef.current = false
    }
  }

  const scroll = (direction: 'left' | 'right'): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })

      setTimeout(handleScrollEnd, 500)
    }
  }

  const SliderView = (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 mask-[linear-gradient(to_right,black,transparent)] backdrop-blur-sm md:w-25" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 mask-[linear-gradient(to_left,black,transparent)] backdrop-blur-sm md:w-25" />
      <div ref={carouselRef} className="scrollbar-hide flex flex-row gap-3 overflow-x-scroll py-2 md:gap-5">
        {children}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex justify-end px-4 md:px-25">
        <SliderControls onPrevious={() => scroll('left')} onNext={() => scroll('right')} />
      </div>
      {SliderView}
    </div>
  )
}
