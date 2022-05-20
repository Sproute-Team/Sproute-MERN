import React from 'react'
import {FaSearch,} from 'react-icons/fa'
function ClientAdd() {
  return (
    <div className='flex p-5 justify-between'>
                    <div className='flex gap-4'>
                    <span className='font-bold text-sm  border-b-4 border-solid border-[#FA4B0C]'>Overview</span><i><FaSearch/></i>
                    <span className='font-bold text-sm'>List View</span><i><FaSearch/></i>
                    </div>
                    <div className='flex place-items-center justify-center'>
                        <button className='btn text-white text-lg font-bold rounded-xl place-items-center flex justify-center gap-2 bg-[#FA4B0C]'>Add Client<i><FaPlus className='text-[12px]'/></i></button>
                    </div>
    </div>
  )
}

export default ClientAdd