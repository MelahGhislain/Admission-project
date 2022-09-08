import React, { useContext } from 'react'
import AppContext from '../../AppContext/AppContext'
import Degree from '../../components/Froms/Degree'
import Handicap from '../../components/Froms/Handicap'
import Secondary from '../../components/Froms/Secondary'
import Header from '../../components/Header'

const Education = () => {

  const {educationIndex} = useContext(AppContext)

  return (
    <>
        <Header>
            <p className='text-2xl text-neutral-700 font-bold text-start'>Information Diplome</p>
        </Header>
        
        {educationIndex === 0? <Degree /> : null}
        {educationIndex === 1? <Secondary /> : null}
        {educationIndex === 2? <Handicap /> : null}
    
    </>
  )
}


export default Education


