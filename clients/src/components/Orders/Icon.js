import {React,useState} from 'react'
import {FaChartPie,FaAd,FaUserAlt,FaShoppingBasket } from 'react-icons/fa'
import {Link } from 'react-router-dom'
// import RenderOverview from '../../RenderOverview'
function Icon() {
  const [showactive,setShowActive] = useState(false);
  return (
      <>
    <Link to='/overview' className=' active:bg-red-500 '>
    <div className={`flex text-white ${showactive && 'border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700'} hover:cursor-pointer gap-4 mt-2 p-4 px-10`} onClick={()=>setShowActive(true)} >
        <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>
    </div>
    </Link>
    <Link to='/orders'>
    <div className={`flex text-white ${showactive && 'border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700'} hover:cursor-pointer gap-4 mt-2 p-4 px-10`} onClick={()=>setShowActive(true)}>
    <FaShoppingBasket className='text-xl'/><span className='text-[14px]'>Orders</span>
    </div>
    </Link>
    <div className={`flex text-white ${showactive && 'border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700'} hover:cursor-pointer gap-4 mt-2 p-4 px-10`}>
    <FaUserAlt className='text-xl'/><span className='text-[14px]'>Users</span>
    </div>
    <Link to='/menu'>
    <div className={`flex text-white ${showactive && 'border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700'} hover:cursor-pointer gap-4 mt-2 p-4 px-10`}>
    <FaAd className='text-xl'/><span className='text-[14px]'>Menu</span>
    </div>
    </Link>
    <div className={`flex text-white ${showactive && 'border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700'} hover:cursor-pointer gap-4 mt-2 p-4 px-10`}>
    <FaChartPie className='text-xl'/><span className='text-[14px]'>Overview</span>
    </div>
    </>
  )
}

export default Icon