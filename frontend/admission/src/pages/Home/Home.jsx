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
  const [display, setDisplay] = useState(false)
  const {pageIndex, setPageIndex, setPersonalIndex, setParentIndex, setEducationIndex } = useContext(AppContext)

  const handleApply =()=>{
    setToggle(false)
    setDisplay(true)
    setPageIndex(0)
    setPersonalIndex(0)
    setParentIndex(0)
    setEducationIndex(0)
  }
  if(display){
    setTimeout(()=>{
      setDisplay(false)
    }, 3000)
  }

  return (
    <section className='relative'>
      <NavBar onClick={()=> setToggle(true)}/>
      {toggle && 
      <div className='relative'>
        <div className='w-full min-h-screen bg-gray-500/50' onClick={()=>setToggle(false)}></div>
        {/* <div className='w-full min-h-screen bg-gray-500/50 flex justify-center items-center py-4'> */}
            <div className="absolute top-4 left-[10%] bg-white rounded w-[90%] md:w-[80%]  h-max py-4">
                <header className="text-xl md:text-3xl font-bold p-4">University Application Form</header>
                <div className='w-full p-1 bg-gray-500/20'></div>
                <div className='w-[70%] m-auto flex flex-col items-center pt-16'>
                    {pageIndex === 0? <Intro /> : null}
                    {pageIndex === 1? <PersonalInfo />  : null}
                    {pageIndex === 2? < ParentInfo/> : null}
                    {pageIndex === 3? <Education /> : null}
                    {pageIndex === 4? <Apply onClick={handleApply}/>: null}
                    
                </div>
            </div>
        {/* </div> */}
      </div>
      }
      {display && <div className="absolute right-[40%] text-white bg-green-600/70 rounded py-2 px-4">
        Application submitted sucessfully
      </div>}
    </section>
  )
}

export const Apply = ({onClick}) => {
  return (
    <Button text="Apply" onClick={onClick}/>
  )
}
export default Home

