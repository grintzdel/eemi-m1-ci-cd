import React from 'react'

type DividerProps = {
  className?: string
}

export const Divider: React.FC<DividerProps> = ({ className = '' }: DividerProps): React.JSX.Element => {
  return <div className={`color-black h-auto w-px bg-black opacity-10 ${className}`} />
}
