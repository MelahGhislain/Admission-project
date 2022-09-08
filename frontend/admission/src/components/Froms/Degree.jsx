import React, { useContext, useState } from 'react'
import Button from '../Button'
import AppContext from '../../AppContext/AppContext'
import axios from 'axios'


const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"
let value = {
  year: "",
  place: "",
  degree: ""
}

const Degree = () => {
  const [error, setError] = useState(false)
  const [form, setForm] = useState(value)
  const {setParentIndex } = useContext(AppContext)
  const {setEducationIndex } = useContext(AppContext)

  const handleChange = (e) =>{
    setForm(current => {return{ ...current ,[e.target.name]: e.target.value}})
  }

  const handleBack = () =>{
    setParentIndex(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(form.year.trim() === "" || form.place.trim() === "" || form.degree.trim() === ""){
      setError(true)
      return
    }
    const res = localStorage.getItem("student")
    const data = JSON.parse(res)
    console.log(data._id)
    axios.patch(`${BASE_URL}/student/update/${data._id}`, form).then(res=>{
      
      localStorage.setItem("student", JSON.stringify(res.data.data))
      setError(false)
      setEducationIndex(1)
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
        {/* <p className="text-start text-neutral-700 text-sm"> Nom et Profession <span className='text-red-500'>*</span></p> */}
        <div className='flex w-full flex-col md:flex-row md:space-x-2'>
          <div className='flex flex-col items-start flex-1 w-full'>
            <input type="number" name='year' onChange={handleChange} value={form.year} className='w-full border py-2 rounded-none outline-none px-1'/>
            <label htmlFor="year" className='text-xs text-neutral-400'>Annee D'obtention</label>
          </div>
          <div className='flex flex-col items-start flex-1 w-full '>
            <input type="text" name='place' onChange={handleChange} value={form.place} className='w-full border py-2 rounded-none outline-none px-1'/>
            <label htmlFor="place" className='text-xs text-neutral-400'>Lieu</label>
          </div>
          <div className='flex flex-col items-start flex-1 w-full '>
            <input type="text" name='degree' onChange={handleChange} value={form.degree} className='w-full border py-2 rounded-none outline-none px-1'/>
            <label htmlFor="degree" className='text-xs text-neutral-400'>Diplome</label>
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

export default Degree