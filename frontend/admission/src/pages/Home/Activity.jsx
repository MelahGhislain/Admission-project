import React from 'react'
import ActivityInfo from '../../components/Froms/ActivityInfo'
import Header from '../../components/Header'

const Activity = () => {
  return (
    <>
        <Header>
            <p className='text-2xl text-neutral-700 font-bold text-start'>Activity Information</p>
        </Header>
        
        <ActivityInfo />
    
    </>
  )
}

export default Activity