import React from 'react'
import Course from '../../components/Froms/Course'
import Graduated from '../../components/Froms/Graduated'
import SATScore from '../../components/Froms/SATScore'
import SchoolAdress from '../../components/Froms/SchoolAdress'
import SchoolName from '../../components/Froms/SchoolName'
import TestDate from '../../components/Froms/TestDate'
import YearGraduated from '../../components/Froms/YearGraduated'
import Header from '../../components/Header'

const Education = () => {
  return (
    <>
        {/* <Header>
            <p className='text-sm text-neutral-600 text-start'>Education Background</p>
            <p className='text-sm text-neutral-600 text-start'>List your previous schools, beginning with the most recent</p>
        </Header> */}


        {/* <Higher /> */}
        {/* <Secondary /> */}
        <Primary />
    </>
  )
}

const Higher = () => {
  return (
    <>
    <Header>
        <p className='text-2xl text-neutral-700 font-bold text-start'>College</p>
    </Header>
    
    {/* <SchoolName /> */}
    {/* <SchoolAdress /> */}
    {/* <YearGraduated /> */}
    {/* <Graduated /> */}
    <Course />
    
</>
  )
}

const Secondary = () => {
  return (
    <>
    <Header>
        <p className='text-2xl text-neutral-700 font-bold text-start'>Secondary</p>
    </Header>
    
    {/* <SchoolName /> */}
    {/* <SchoolAdress /> */}
    {/* <YearGraduated /> */}
    {/* <Graduated /> */}
    <Course />
    
</>
  )
}

const Primary = () => {
  return (
    <>
    <Header>
        <p className='text-2xl text-neutral-700 font-bold text-start'>Primary</p>
    </Header>
    
    {/* <SchoolName /> */}
    {/* <SchoolAdress /> */}
    {/* <YearGraduated /> */}
    {/* <SATScore /> */}
    <TestDate />
    
</>
  )
}
export default Education


