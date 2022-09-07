import React from 'react'
import Button from '../Button'

const Course = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
        {/* ==================== Course =====================*/}
          <div>
            <p className="text-start text-neutral-700 text-sm"> Course <span className='text-red-500'>*</span></p>
            <div className='flex w-full space-x-2'>
              <div className='flex flex-col items-start flex-1 w-full'>
                {/* <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/> */}
                <textarea name="school_adress" rows="2" className='w-full border py-2 rounded-none outline-none px-1'></textarea>
                
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

export default Course