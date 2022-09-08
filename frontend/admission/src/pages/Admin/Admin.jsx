import React from 'react'
import { useContext } from 'react'
import AppContext from '../../AppContext/AppContext'
import AdminNav from './AdminNav'
import Dashboard from './Dashboard'

const Admin = () => {
  const {studentLength} = useContext(AppContext)
  return (
    <div>
      <AdminNav />
      <div className='flex w-full  min-h-screen'>
        <aside className='w-[20%] min-h-full p-2'>
          <ul >
            <li className="bg-green-600/70 px-4 py-1 mb-2 text-white">Dashboard</li>
            <li className=" text-neutral-600 px-4 py-1 mb-2">Charts</li>
            <li className=" text-neutral-600 px-4 py-1 mb-2">Persons</li>
            <li className=" text-neutral-600 px-4 py-1 mb-2">Admitted</li>
            <li className=" text-neutral-600 px-4 py-1 mb-2">Others</li>
          </ul>
        </aside>
        <section className='w-[80%] bg-neutral-400/10 min-h-full'>
          <div className='py-2 px-2 text-xl font-bold'>
            <h2>Students ({studentLength})</h2>
          </div>
          <Dashboard />
        </section>
      </div>
    </div>
  )
}

export default Admin