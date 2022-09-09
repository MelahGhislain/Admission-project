import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'

const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"

const Phone = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState({phone:""})
  const {setPageIndex } = useContext(AppContext)
  const {setPersonalIndex } = useContext(AppContext)

  const handleChange = (e) =>{
    setForm(current => {return {...current, [e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setPersonalIndex(4)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.phone.trim() === "" ){
      setError(true)
      return
    }
    
    const res = localStorage.getItem("student")
    const data = JSON.parse(res)
    console.log(data._id)
    axios.patch(`${BASE_URL}/student/update/${data._id}`, form).then(res=>{
      
      localStorage.setItem("student", JSON.stringify(res.data.data))
      setError(false)
      setPageIndex(2)
    }).catch(err=>{
      setError(true)
      console.log(err)
    })
    
  }

  return (
    <>
      <form className='py-4 px-0 md:px-16 text-center w-full my-4' onSubmit={handleSubmit}>
          {/* ==================== Phone Number =====================*/}
          <div className={`px-2 py-2 ${error && "bg-red-200/30"}`}>
              <p className="text-start text-neutral-700 text-sm"> Phone Number <span className='text-red-500'>*</span></p>
              <div className='flex w-full space-x-2'>
                <div className='flex flex-col items-start  w-[20%]'>
                  <input type="text" value="+237" className='w-full border py-2 rounded-none outline-none px-1'/>
                  <label htmlFor="" className='text-xs text-neutral-400'>Area Code</label>
                </div>
                <div className='flex flex-col items-start w-full '>
                  <input type="number" name='phone' value={form.phone} onChange={handleChange} className='w-full border py-2 rounded-none outline-none px-1'/>
                  <label htmlFor="phone" className='text-xs text-neutral-400'>Phone Number</label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between w-full">
              <Button text="BACK" onClick={handleBack}/>
              <Button text="NEXT" type="submit" />
          </div>
      </form>
      {error && <p className="text-xs text-red-500" >Please fill in the form</p>}
    </>
  )
}

export default Phone