import React from 'react'

export interface DropdownOptions {
  label: string
  onClick: () => void
}

interface Props {
  children: React.ReactNode
  options: DropdownOptions[]
}

function Dropdown({ children, options = [] }: Props) {
  return (
    <div className="dropdown h-3">
      <label tabIndex={0} className="cursor-pointer h-2">
        {children}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 top-5 shadow bg-base-100 rounded-box w-fit whitespace-nowrap min-w-[100px]"
      >
        {options.map(({ label, onClick }) => (
          <li key={label}>
            <button className="py-1" onClick={onClick}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
