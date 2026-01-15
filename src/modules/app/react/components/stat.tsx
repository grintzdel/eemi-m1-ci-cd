import React from 'react'

type StatSymbols = '+' | '-'

type StatProps = {
  value: string
  label: string
  symbol: StatSymbols
}

export const Stat: React.FC<StatProps> = ({ value, label, symbol }: StatProps): React.JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-[40px] font-bold">
        <span>{value}</span>
        <span>{symbol}</span>
      </div>
      <p className="capitalize opacity-60">{label}</p>
    </div>
  )
}
