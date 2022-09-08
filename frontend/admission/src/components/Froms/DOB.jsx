import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'


const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"
let value = {
  dob: "",
  place_of_birth: ""
}

const   DOB = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState(value)
  const {setPersonalIndex } = useContext(AppContext)

  const handleChange = (e) =>{
    setForm(current => {return{ ...current ,[e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setPersonalIndex(3)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.dob.trim() === "" || form.place_of_birth.trim() === ""){
      setError(true)
      return
    }
    const res = localStorage.getItem("student")
    const data = JSON.parse(res)
    console.log(data._id)
    axios.patch(`${BASE_URL}/student/update/${data._id}`, form).then(res=>{
      
      localStorage.setItem("student", JSON.stringify(res.data.data))
      setError(false)
      setPersonalIndex(5)
    }).catch(err=>{
      setError(true)
      console.log(err)
    })
    
  }
  return (
    <>
      <form className='py-4 px-16 text-center w-full my-4' onSubmit={handleSubmit}>
      {/* ==================== Age =====================*/}
          <div className={`px-2 py-2 ${error && "bg-red-200/30"}`}>
              <p className="text-start text-neutral-700 text-sm"> Date et Lieu de Naissance</p>
              <div className='flex w-full space-x-2'>
                <div className='flex w-full space-x-2 justify-start '>
                  <div className='flex flex-col items-start flex-1 w-full'>
                    <input type="date" name='dob' value={form.dob} onChange={handleChange} className='w-full border py-2 rounded-none outline-none px-1'/>
                    <label htmlFor="dob" className='text-xs text-neutral-400'>Date de Naissance</label>
                  </div>
                </div>

                <div className='flex flex-col items-start flex-auto w-full'>
                  <input type="text" name='place_of_birth'value={form.place_of_birth} onChange={handleChange} className='w-full border py-2 rounded-none outline-none px-1'/>
                  <label htmlFor="place_of_birth" className='text-xs text-neutral-400'>Lieu de Naissance</label>
                </div>
              </div>
            </div>


      <div className="mt-8 flex justify-between w-full">
          <Button text="BACK" onClick={handleBack} />
          <Button text="NEXT" type="submit" />
      </div>
    </form>
    {error && <p className="text-xs text-red-500" >Please fill in the form</p>}
    </>
  )
}

export default DOB