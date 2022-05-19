import React from 'react'
import { FaChartPie, FaUber } from 'react-icons/fa'
import {Link } from 'react-router-dom'
// import RenderOverview from '../../RenderOverview'
function Icon() {
  return (
      <>
    <Link to='/overview'>
    <div className={`flex text-[#FA4B0C] border-l-[6px] border-solid border-[#FA4B0C] hover:cursor-pointer gap-4 bg-slate-700 mt-2 p-4 px-10`}>
        <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>
    </div>
    </Link>
    <Link to='/orders'>
    <div className='flex text-[#FA4B0C]  border-l-[6px] border-solid border-[#FA4B0C] hover:cursor-pointer gap-4 bg-slate-700 mt-2 p-4 px-10'>
        <FaUber className='text-xl'/><span className='text-[14px]'>Orders</span>
    </div>
    </Link>
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
    <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>
    </div>
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
    <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>
    </div>
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
    <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>

    </div>
    </>
  )
}

export default Icon