import React, { useState } from 'react'
import { useContext } from 'react'
import Intro from '../../components/Intro'
import ParentInfo from './ParentInfo'
import Education from './Education'
import PersonalInfo from './PersonalInfo'
import AppContext from "../../AppContext/AppContext"
import Button from '../../components/Button'
import NavBar from '../../components/NavBar'

const Home = () => {

  const [toggle, setToggle] = useState(false)
  const {pageIndex } = useContext(AppContext)


  return (
    <section className=''>
      <NavBar onClick={()=> setToggle(true)}/>
      {toggle && <div className='w-full min-h-screen bg-gray-500/50 flex justify-center items-center py-4'>
          <div className="bg-white rounded w-[80%] h-[90%] py-4">
              <header className="text-3xl font-bold p-4">University Application Form</header>
              <div className='w-full p-1 bg-gray-500/20'></div>
              <div className='w-[70%] m-auto flex flex-col items-center pt-16'>
                  {pageIndex === 0? <Intro /> : null}
                  {pageIndex === 1? <PersonalInfo />  : null}
                  {pageIndex === 2? < ParentInfo/> : null}
                  {pageIndex === 3? <Education /> : null}
                  {pageIndex === 4? <Apply />: null}
                  
              </div>
          </div>
      </div>}
    </section>
  )
}

export const Apply = () => {
  return (
    <Button text="Apply" />
  )
}
export default Home

