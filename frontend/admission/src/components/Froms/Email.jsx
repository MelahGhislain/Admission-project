import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'
import { useEffect } from 'react'

const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"

const Email = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState({email:""})
  const {setPersonalIndex } = useContext(AppContext)
  
  // useEffect(()=>{
  //   console.log(store.email)
  //   setForm(current => {return {email: store.email}})
  // },[])

  const handleChange = (e) =>{
    setForm(current => {return {...current, [e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setPersonalIndex(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.email.trim() === "" ){
      setError(true)
      return
    }
    // if(store.email !== ""){
    //   setPersonalIndex(3)
    //   return
    // }
    const res = localStorage.getItem("student")
    const data = JSON.parse(res)
    console.log(data._id)
    axios.patch(`${BASE_URL}/student/update/${data._id}`, form).then(res=>{
      
      localStorage.setItem("student", JSON.stringify(res.data.data))
      // setStore(res.data.data)
      setError(false)
      setPersonalIndex(3)
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
              <p className="text-start text-neutral-700 text-sm"> E-mail <span className='text-red-500'>*</span></p>
              <div className='flex w-full space-x-2'>
                <div className='flex flex-col items-start flex-1 w-full'>
                  <input type="email" onChange={handleChange} name='email' value={form.email} className='w-full border py-2 rounded-none outline-none px-1' placeholder='example@gmail.com'/>
                  <label htmlFor="email" className='text-xs text-neutral-400'>email</label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between w-full">
              <Button text="BACK" onClick={handleBack} />
              <Button text="NEXT" type="submit"/>
          </div>
      </form>
      {error && <p className="text-xs text-red-500" >Please fill in the form</p>}
    </>
  )
}

export default Email