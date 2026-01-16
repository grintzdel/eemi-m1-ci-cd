import Link from 'next/dist/client/link'
import React from 'react'

type ButtonVariant = 'primary' | 'outline' | 'secondary'

type ButtonProps = {
  href: string
  text: string
  variant?: ButtonVariant
  fullWidth?: boolean
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'border-2 border-black bg-black text-white hover:bg-white hover:text-black',
  outline: 'border border-black/10 bg-transparent text-black',
  secondary: 'border border-white bg-white text-black hover:bg-transparent hover:text-white',
}

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  variant = 'primary',
  fullWidth = false,
  className = '',
}: ButtonProps): React.JSX.Element => {
  return (
    <Link
      href={href}
      className={`${fullWidth ? 'w-full text-center' : 'w-fit'} rounded-full px-8 py-3 text-sm capitalize transition-all duration-300 md:px-16.75 md:py-3.75 md:text-base ${variantStyles[variant]} ${className}`}
    >
      {text}
    </Link>
  )
}
