import React from 'react'

function OrderNow() {
  return (
    <div className="bg-white ml-5 mt-5 w-[50vw] flex justify-between rounded-2xl">
            <div className="block pt-10 px-5">
                <span className="text-[#FA4B0C] text-xl font-bold">Order 1</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">as of 25th May 2022</p>
            </div>
            <div className="block pt-2">
                <span className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold">Kibagabaga,Rwanda</span>
                <div className="flex gap-2">
                <div className="pt-1 w-44 border-r-2 border-solid border-black text-xl font-bold"><span>PanCakes</span></div>
                <span className="text-[#FA4B0C] text-xl font-bold">2</span>
                </div>
                <div className='flex gap-2 pt-6'>
                <svg width="80" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-xl -translate-y-3">Table 1</span>
                <svg width="80" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                </div>
            </div>
            <div className='block pt-2 pr-5'>
            <span className="text-[#FA4B0C] text-xl font-bold">5000 Frw</span>
            <div className='flex gap-2 pt-6'>
                <svg  width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-xl -translate-y-3">Guest</span>
                <svg width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
            </div>
            <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">0780918379</p>
            </div>
        </div>
  )
}

export default OrderNow