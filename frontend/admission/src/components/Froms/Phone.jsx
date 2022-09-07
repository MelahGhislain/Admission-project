import React from 'react'
import Button from '../Button'

const Phone = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
        {/* ==================== Phone Number =====================*/}
        <div>
            <p className="text-start text-neutral-700 text-sm"> Phone Number <span className='text-red-500'>*</span></p>
            <div className='flex w-full space-x-2'>
              <div className='flex flex-col items-start  w-[20%]'>
                <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                <label htmlFor="fname" className='text-xs text-neutral-400'>Area Code</label>
              </div>
              <div className='flex flex-col items-start w-full '>
                <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                <label htmlFor="fname" className='text-xs text-neutral-400'>Phone Number</label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between w-full">
            <Button text="BACK" />
            <Button text="NEXT" />
        </div>
    </form>
  )
}

export default Phone