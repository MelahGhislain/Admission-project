import React from 'react'
import Button from '../Button'

const Adress = () => {
  return (
    <form className='py-4 px-16 text-center w-full my-4'>
        {/* ==================== Adress =====================*/}
        <div>
            <p className="text-start text-neutral-700 text-sm"> Adress <span className='text-red-500'>*</span></p>
            
            <div className='flex flex-col items-start flex-1 w-full mb-2'>
                <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                <label htmlFor="fname" className='text-xs text-neutral-400'>Street Adress</label>
            </div>

            <div className='flex flex-col items-start flex-1 w-full mb-2'>
                <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                <label htmlFor="fname" className='text-xs text-neutral-400'>Street Adress Line 2</label>
            </div>

            <div className='flex w-full space-x-2 mb-2'>
                <div className='flex flex-col items-start flex-1 w-full'>
                    <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                    <label htmlFor="fname" className='text-xs text-neutral-400'>City</label>
                </div>
                <div className='flex flex-col items-start flex-1 w-full '>
                    <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                    <label htmlFor="fname" className='text-xs text-neutral-400'>State/Province</label>
                </div>
            </div>

            <div className='flex w-full space-x-2 mb-2'>
                <div className='flex flex-col items-start flex-1 w-full'>
                    <input type="text" className='w-full border py-2 rounded-none outline-none px-1'/>
                    <label htmlFor="fname" className='text-xs text-neutral-400'>Postal/Zip Code</label>
                </div>

                <div className='flex flex-col items-start flex-1 w-full '>
                    <select name="year" class="text-sm w-full border py-2 rounded-none outline-none px-1">
                        <option selected="" >Please Select </option>
                        <option value="US">Nigeria</option>
                        <option value="CA">Mali</option>
                    </select>
                    <label htmlFor="year" className='text-xs text-neutral-400'>Country</label>
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

export default Adress