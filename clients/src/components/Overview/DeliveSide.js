import React from 'react'

function DeliveSide() {
  return (
    <div className='bg-white w-[20vw] rounded-r-xl h-[65vh]'>
            <div className='w-full cursor-pointer p-2 flex flex-col justify-center text-center rounded-t-xl border-2 border-solid border-slate-100'>
                <span className="text-[18px] font-bold font-sans">Delivered</span>
                <span className='text-[12px] font-bold text-[rgba(0,0,0,0.5)]'>Per/hr</span>
                <span className="text-xl font-medium text-[rgba(0,0,0,0.7)] font-sans ">3453</span>
            </div>
            <div className='w-full cursor-pointer p-2 flex flex-col justify-center text-center  border-2 border-solid border-slate-100'>
                <span className="text-[18px] font-bold font-sans">Registered</span>
                <span className='text-[12px] font-bold text-[rgba(0,0,0,0.5)]'>Per/hr</span>
                <span className="text-xl font-medium text-[rgba(0,0,0,0.7)] font-sans ">3453</span>
            </div>
            <div className='w-full cursor-pointer p-2 flex flex-col justify-center text-center  border-2 border-solid border-slate-100'>
                <span className="text-[18px] font-bold font-sans">Rejected</span>
                <span className='text-[12px] font-bold text-[rgba(0,0,0,0.5)]'>Per/hr</span>
                <span className="text-xl font-medium text-[rgba(0,0,0,0.7)] font-sans">3453</span>
            </div>
            <div className='w-full cursor-pointer p-2 flex flex-col justify-center text-center  border-2 border-solid border-slate-100'>
                <span className="text-[18px] font-bold font-sans">Booked</span>
                <span className='text-[12px] font-bold text-[rgba(0,0,0,0.5)]'>Per/hr</span>
                <span className="text-xl font-medium text-[rgba(0,0,0,0.7)] font-sans">3453</span>
            </div>
            <div className='w-full cursor-pointer p-2 flex flex-col justify-center text-center  border-2 border-solid border-slate-100'>
                <span className="text-[18px] font-bold font-sans">Donated</span>
                <span className='text-[12px] font-bold text-[rgba(0,0,0,0.5)]'>Per/hr</span>
                <span className="text-xl font-medium text-[rgba(0,0,0,0.7)] font-sans">3453</span>
            </div>
            
        </div>
  )
}

export default DeliveSide