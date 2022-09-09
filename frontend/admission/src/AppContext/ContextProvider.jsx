import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [pageIndex, setPageIndex] = useState(0)
    const [personalIndex, setPersonalIndex] = useState(0)
    const [parentIndex, setParentIndex] = useState(0)
    const [educationIndex, setEducationIndex] = useState(0)
    const [studentLength, setStudentLength] = useState(0)
    // const [store, setStore] = useState({})
    // useEffect(()=>{
    //   const res = localStorage.getItem("student")
    //   if(!res){
    //     console.log("if ======")
    //     localStorage.setItem("student",JSON.stringify({}))
    //     setStore({})
    //   }else{
    //     console.log("========= else =========")
    //     console.log(res)
    //     const data = JSON.parse(res)
    //     setStore(data)
    //   }
    // },[])
  return (
    <AppContext.Provider value={{ pageIndex, setPageIndex, personalIndex, setPersonalIndex, parentIndex, setParentIndex, educationIndex, setEducationIndex, studentLength, setStudentLength}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider