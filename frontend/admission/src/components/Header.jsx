import React from 'react'

const Header = ({children}) => {
  return (
    <div className='bg-teal-300 py-4 px-16 text-center w-full my-2'>
        {children}
    </div>
  )
}

export default Header