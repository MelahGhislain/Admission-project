import React from 'react'
import Intro from '../../components/Intro'
import Activity from './Activity'
import Education from './Education'
import PersonalInfo from './PersonalInfo'

const Home = () => {
  return (
    <section className=''>
        <div className='w-full min-h-screen bg-gray-500/50 flex justify-center items-center py-4'>
            <div className="bg-white rounded w-[80%] h-[90%]">
                <header className="text-3xl font-bold p-4">University Application Form</header>
                <div className='w-full p-1 bg-gray-500/20'></div>
                <div className='w-[70%] m-auto flex flex-col items-center  pt-16'>
                    {/* <Intro /> */}
                    {/* <PersonalInfo /> */}
                    {/* <Education /> */}
                    <Activity />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home