import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

function Card({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white shadow-md py-6 px-4 ',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
