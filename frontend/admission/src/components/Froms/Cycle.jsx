import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"

const Cycle = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState({cycle:""})
  const {setPersonalIndex } = useContext(AppContext)

  // useEffect(()=>{
  //   setForm(current => {return {cycle: store.cycle}})
  // },[])

  const handleChange = (e) =>{
    setForm(current => {return {...current, [e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setPersonalIndex(0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.cycle.trim() === "" ){
      setError(true)
      return
    }
    // if(store.cycle !== ""){
    //   setPersonalIndex(2)
    //   return
    // }
    const res = localStorage.getItem("student")
    const data = JSON.parse(res)
    console.log(data._id)
    axios.patch(`${BASE_URL}/student/update/${data._id}`, form).then(res=>{
      
      localStorage.setItem("student", JSON.stringify(res.data.data))
      // setStore(res.data.data)
      setError(false)
      setPersonalIndex(2)
    }).catch(err=>{
      setError(true)
      console.log(err)
    })
    
  }

  return (
    <>
      <form className='py-4 px-0 md:px-16 text-center w-full my-4' onSubmit={handleSubmit}>
          {/* ==================== E-mail =====================*/}
            <div className={`px-2 py-2 ${error && "bg-red-200/30"}`}>
              <p className="text-start text-neutral-700 text-sm"> Choisissez-un-Cycle <span className='text-red-500'>*</span></p>
              <div className='flex w-full space-x-2'>
                <div className='flex flex-col items-start flex-1 w-full'>
                  <input name="cycle" type="text" value={form.cycle} onChange={handleChange} className='w-full border py-2 rounded-none outline-none px-1' />
                  <label htmlFor="cycle" className='text-xs text-neutral-400'>cycle</label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between w-full">
              <Button text="BACK" onClick={handleBack} />
              <Button type="submit" text="NEXT" />
          </div>
      </form>
      {error && <p className="text-xs text-red-500" >Please fill in the form</p>}
    </>
  )
}

export default Cycle