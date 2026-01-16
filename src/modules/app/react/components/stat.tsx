import React from 'react'

type StatSymbols = '+' | '-'

type StatProps = {
  value: string
  label: string
  symbol: StatSymbols
}

export const Stat: React.FC<StatProps> = ({ value, label, symbol }: StatProps): React.JSX.Element => {
  return (
    <div className="flex flex-col text-center md:text-left">
      <div className="flex flex-row justify-center text-2xl font-bold md:justify-start md:text-[40px]">
        <span>{value}</span>
        <span>{symbol}</span>
      </div>
      <p className="text-xs capitalize opacity-60 md:text-base">{label}</p>
    </div>
  )
}
