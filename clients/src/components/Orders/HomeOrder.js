import React from 'react'
import CreateNew from './CreateNew'
// import {FaSearch,FaBell } from 'react-icons/fa'
import Delivered from './Delivered'
import Header from './Header'
import Menu from './Menu'
import OrderNow from './OrderNow'
function HomeOrder() {
  return (
    <div className="w-[85vw] bg-[#F7F8FC] h-screen">
        <Header/>
        <Menu/>
        <div className='flex'>
        <div className="overflow-y-scroll mt-2 w-[80vw] h-[75vh]">
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        <OrderNow/>
        </div>
        <div className='flex flex-col overflow-y-scroll mt-2 w-[50vw] h-[75vh]'>
        <Delivered/>
        <CreateNew/>
        </div>
        </div>
    </div>
  )
}

export default HomeOrder