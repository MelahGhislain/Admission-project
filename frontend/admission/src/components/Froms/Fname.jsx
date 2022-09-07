import React from 'react'
import Button from '../Button'

const Fname = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
    {/* ==================== Full Name =====================*/}
     <div>
       <p className="text-start text-neutral-700 text-sm"> Full Name <span className='text-red-500'>*</span></p>
       <div className='flex w-full space-x-2'>
         <div className='flex flex-col items-start flex-1 w-full'>
           <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
           <label htmlFor="fname" className='text-xs text-neutral-400'>First Name</label>
         </div>
         <div className='flex flex-col items-start flex-1 w-full '>
           <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
           <label htmlFor="fname" className='text-xs text-neutral-400'>Last Name</label>
         </div>
       </div>
     </div>

    <div className="mt-8 flex justify-between w-full">
        <Button text="PREV" />
        <Button text="NEXT" />
    </div>
   </form>
  )
}

export default Fname