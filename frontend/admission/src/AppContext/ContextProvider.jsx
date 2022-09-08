import React, { useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [pageIndex, setPageIndex] = useState(0)
    const [personalIndex, setPersonalIndex] = useState(0)
    const [parentIndex, setParentIndex] = useState(0)
    const [educationIndex, setEducationIndex] = useState(0)
    
  return (
    <AppContext.Provider value={{pageIndex, setPageIndex, personalIndex, setPersonalIndex, parentIndex, setParentIndex, educationIndex, setEducationIndex}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider