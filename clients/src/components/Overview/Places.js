import React from 'react'
import '../../App.css'
function Places() {
  return (
    <div className=' bg-white border-2 p-4 pr-5 pl-5 w-[25vw] h-44 rounded-xl border-solid border-[#fa4b0c75]'>
                <span className='font-bold text-xl'>Restaurants</span>
                <div className='flex justify-between text-[12px] '>
                <span>Today</span>
                <span className="text-[#FA4B0C] font-bold">View All</span>
                </div>
                <div className='flex justify-between mt-4 '>
                <span className='font-bold '>SunDowner</span>
                <span className="text-[#FA4B0C] text-[14px]  font-bold">250</span>
                </div>
                <div className='flex justify-between mt-2'>
                <span className='font-bold '>Gate N10</span>
                <span className="text-[#FA4B0C] text-[14px]  font-bold">300</span>
                </div>
            </div>
  )
}

export default Places