import React from 'react'
import Button from './Button'
import Header from './Header'

const Intro = () => {
  return (
    <>
        <Header>
            <p className='text-2xl text-neutral-700 font-bold'>Application for University</p>
            <p className='text-sm text-neutral-600'>Please fill out the application form carefully</p>
        </Header>
        <div className="mt-8">
            <Button text="START" />
        </div>
    </>
  )
}

export default Intro