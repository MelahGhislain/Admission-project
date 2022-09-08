import React from 'react'
import { useContext } from 'react'
import AppContext from '../../AppContext/AppContext'
import Adress from '../../components/Froms/Adress'
import Cycle from '../../components/Froms/Cycle'
import DOB from '../../components/Froms/DOB'
import Email from '../../components/Froms/Email'
import Fname from '../../components/Froms/Fname'
import Sex from '../../components/Froms/Sex'
import Phone from '../../components/Froms/Phone'
import Header from '../../components/Header'

const PersonalInfo = () => {

  const {personalIndex} = useContext(AppContext)
  return (
    <>
        <Header>
            <p className='text-xl md:text-2xl text-neutral-700 font-bold text-start'>Personal Information</p>
        </Header>
        {personalIndex === 0? <Fname />: null}
        {personalIndex === 1? <Cycle />: null}
        {personalIndex === 2? <Email />: null}
        {personalIndex === 3? <Sex />: null}
        {personalIndex === 4? <DOB />: null}
        {personalIndex === 5? <Phone />: null}
        
        {/* <Adress /> */}
        
    </>
  )
}

export default PersonalInfo