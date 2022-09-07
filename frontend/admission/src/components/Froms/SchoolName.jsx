import React from 'react'
import Button from '../Button'

const SchoolName = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
        {/* ==================== E-mail =====================*/}
          <div>
            <p className="text-start text-neutral-700 text-sm"> School Name <span className='text-red-500'>*</span></p>
            <div className='flex w-full space-x-2'>
              <div className='flex flex-col items-start flex-1 w-full'>
                <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                {/* <label htmlFor="fname" className='text-xs text-neutral-400'>email</label> */}
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

export default SchoolName