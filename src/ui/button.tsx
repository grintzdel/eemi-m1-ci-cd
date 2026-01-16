import Link from 'next/dist/client/link'
import React from 'react'

type ButtonProps = {
  href: string
  text: string
}

export const Button: React.FC<ButtonProps> = ({ href, text }: ButtonProps): React.JSX.Element => {
  return (
    <Link
      href={href}
      className="w-fit rounded-full border-2 border-black bg-black px-16.75 py-3.75 text-white capitalize transition-all duration-300 hover:bg-white hover:text-black"
    >
      {text}
    </Link>
  )
}
