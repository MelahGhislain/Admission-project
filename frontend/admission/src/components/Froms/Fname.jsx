import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'
import { useEffect } from 'react'


const BASE_URL = process.env.REACT_APP_BASE_URL 
let value = {
  first_name: "",
  last_name: ""
}

const Fname = () => {
  const [error, setError] = useState(false)
  const [form, setForm] = useState(value)
  const {setPageIndex,setPersonalIndex } = useContext(AppContext)

  const handleChange = (e) =>{
    setForm(current => {return{ ...current ,[e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setPageIndex(0)
  }

  // useEffect(()=>{
  //   // console.log(store)

  //   if(store.full_name){
  //     const data = store.full_name.split(" ")
  //     const first_name = data[0]
  //     const last_name = data[1]
  //     setForm(current => {return {first_name, last_name}})
  //   }
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.first_name.trim() === "" || form.last_name.trim() === ""){
      setError(true)
      return
    }
    // if(store.full_name !== ""){
    //   setPersonalIndex(1)
    //   return
    // }
    console.log(BASE_URL)
    axios.post(`${BASE_URL}/student/create`, form).then(res=>{
      // console.log(res.data.data)
      localStorage.setItem("student", JSON.stringify(res.data.data))
      // setStore(res.data.data)
      setError(false)
      setPersonalIndex(1)
    }).catch(err=>{
      setError(true)
      console.log(err)
    })
    
  }

  return (
    <>
      <form className='py-4 px-0 md:px-16 text-center w-full my-4 ' onSubmit={handleSubmit}>
      {/* ==================== Full Name =====================*/}
      <div className={`px-2 py-2 ${error && "bg-red-200/30"}`}>
        <p className="text-start text-neutral-700 text-sm"> Nom et Prenom <span className='text-red-500'>*</span></p>
        
        <div className='flex w-full flex-col md:flex-row md:space-x-2 '>
          <div className='flex flex-col items-start flex-1 w-full'>
            <input type="text" name='first_name' onChange={handleChange} value={form.first_name} className='w-full border py-2 rounded-none outline-none px-1'/>
            <label htmlFor="first_name" className='text-xs text-neutral-400'>Nom</label>
          </div>
          <div className='flex flex-col items-start flex-1 w-full '>
            <input type="text" name='last_name' onChange={handleChange} value={form.last_name} className='w-full border py-2 rounded-none outline-none px-1'/>
            <label htmlFor="last_name" className='text-xs text-neutral-400'>Prenom</label>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between w-full">
          <Button text="BACK" onClick={handleBack}/>
          <Button type="submit" text="NEXT" />
      </div>
    </form>
    {error && <p className="text-xs text-red-500" >Please fill in the form</p>}
    </>

  )
}

export default Fname