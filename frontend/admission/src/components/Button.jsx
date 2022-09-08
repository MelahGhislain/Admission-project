import React from 'react'

const Button = ({text, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className='text-sm bg-teal-300 px-4 py-2 text-neutral-600'>{text}</button>
  )
}

export default Button