'use client'

import Link from 'next/dist/client/link'
import Image from 'next/image'
import React, { useState } from 'react'

const SignUpBanner: React.FC = (): React.JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 bg-black px-25 py-2.25">
      <div></div>
      <div className="flex flex-col justify-center gap-1 text-center text-sm text-white md:flex-row">
        <p>Sign up and get 20% off to your first order.</p>
        <Link href={'/'} className="font-bold capitalize underline">
          Sign Up Now
        </Link>
      </div>
      <button onClick={() => setIsVisible(false)} className="cursor-pointer justify-self-end" aria-label="Close banner">
        <Image src="/icon-cross.svg" alt="Close" width={14} height={14} />
      </button>
    </div>
  )
}

export const Header: React.FC = (): React.JSX.Element => {
  return (
    <header>
      <SignUpBanner />
      <h1>Hello from the header</h1>
    </header>
  )
}
