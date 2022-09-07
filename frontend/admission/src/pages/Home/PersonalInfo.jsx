import React from 'react'
import Adress from '../../components/Froms/Adress'
import DOB from '../../components/Froms/DOB'
import Email from '../../components/Froms/Email'
import Fname from '../../components/Froms/Fname'
import Phone from '../../components/Froms/Phone'
import Header from '../../components/Header'

const PersonalInfo = () => {
  return (
    <>
        <Header>
            <p className='text-2xl text-neutral-700 font-bold'>Personal Information</p>
        </Header>
        {/* <Fname /> */}
        {/* <DOB /> */}
        {/* <Email /> */}
        {/* <Phone /> */}
        <Adress />
        
    </>
  )
}

export default PersonalInfo