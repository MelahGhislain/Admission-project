import React from 'react'
import Button from '../Button'

const DOB = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
    {/* ==================== Age =====================*/}
    <div>
            <p className="text-start text-neutral-700 text-sm"> Birth Date</p>
            <div className='flex w-full space-x-2 justify-start '>
              {/* Month */}
              <div className='flex flex-col items-start '>
                <select name="month" class="border py-2 rounded-none outline-none px-1">
                  <option selected=""></option>
                  <option selected="">January</option>
                  <option value="US">February</option>
                  <option value="CA">Apr</option>
                </select>
                <label htmlFor="month" className='text-xs text-neutral-400'>Month</label>
              </div>
              {/* Day */}
              <div className='flex flex-col items-start '>
                <select name="day" class="border py-2 rounded-none outline-none px-1">
                  <option selected=""></option>
                  <option selected="">1</option>
                  <option value="US">2</option>
                  <option value="CA">3</option>
                </select>
                <label htmlFor="day" className='text-xs text-neutral-400'>Day</label>
              </div>
              {/* Year */}
              <div className='flex flex-col items-start '>
                <select name="year" class="border py-2 rounded-none outline-none px-1">
                  <option selected=""></option>
                  <option selected="">2022</option>
                  <option value="US">2021</option>
                  <option value="CA">2020</option>
                </select>
                <label htmlFor="year" className='text-xs text-neutral-400'>Year</label>
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

export default DOB