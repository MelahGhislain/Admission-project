import React from 'react'
import Button from '../Button'

const Graduated = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
        {/* ==================== Graduated? =====================*/}
        <p className="text-start text-neutral-700 text-sm mb-4">Graduated?<span className='text-red-500'>*</span></p>
        <div class="flex items-center mb-2">
            <input id="default-radio-1" type="radio" value="yes" name="graduated" class="w-4 h-4 " />
            <label for="default-radio-1" class="ml-2 text-sm font-medium  text-neutral-600">Yes</label>
        </div>
        <div class="flex items-center">
            <input  id="default-radio-2" type="radio" value="no" name="graduated" class="w-4 h-4 "/>
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-neutral-600">No</label>
        </div>

          <div className="mt-8 flex justify-between w-full">
            <Button text="BACK" />
            <Button text="NEXT" />
        </div>
    </form>
  )
}

export default Graduated
