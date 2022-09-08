import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import AppContext from '../../AppContext/AppContext'


const BASE_URL = process.env.BASE_URL || "http://localhost:5050/api/v1"

const Dashboard = () => {
    const [students, setStudents] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    const {setStudentLength} = useContext(AppContext)

    const handleDelete = (id)=>{
        axios.delete(`${BASE_URL}/student/${id}` ).then(res=>{
            console.log(res.data.data)
            // localStorage.setItem("student", JSON.stringify(res.data.data))
            setIsDeleted(!isDeleted)
          }).catch(err=>{
            
            console.log(err)
          })
    }
    useEffect(()=>{
        axios.get(`${BASE_URL}/student`, ).then(res=>{
            console.log(res.data.data)
            // localStorage.setItem("student", JSON.stringify(res.data.data))
            setStudents(res.data.data)
            setStudentLength(res.data.data.length)

          }).catch(err=>{
            
            console.log(err)
          })
    },[isDeleted])
  return (
    
<div class="table w-full p-2">
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="border-r p-2">
                        <input type="checkbox"/>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Name
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Phone
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Address
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50 text-center">
                    <td class="p-2 border-r">
                        
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1"/>
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1"/>
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1"/>
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1"/>
                    </td>
                    <td class="p-2">
                        <button  class="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin w-full">Add</button>
                    </td>
                    
                    
                </tr>
                {students && students.map(student=>(
                   <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">
                            <input type="checkbox"/>
                        </td>
                        
                        <td class="p-2 border-r text-left">{student.full_name}</td>
                        <td class="p-2 border-r text-left">{student.email}</td>
                        <td class="p-2 border-r text-left">{student.phone}</td>
                        <td class="p-2 border-r text-left">{student.adress}</td>
                        <td>
                            <button  class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                            <button onClick={()=>handleDelete(student._id)} class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                        </td>
                    </tr> 
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard