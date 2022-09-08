import React, { useContext } from 'react'
import Button from './Button'
import Header from './Header'
import AppContext from '../AppContext/AppContext'

const Intro = () => {
  const {setPageIndex } = useContext(AppContext)
  const handleClick = () =>{
    setPageIndex(1)
  }
  return (
    <>
        <Header>
            <p className='text-xl md:text-2xl text-neutral-700 font-bold'>Application for University</p>
            <p className='text-xs md:text-sm text-neutral-600'>Please fill out the application form carefully</p>
        </Header>
        <div className="mt-8">
            <Button text="START" onClick={handleClick}/>
        </div>
    </>
  )
}

export default Intro