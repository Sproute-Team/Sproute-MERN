import React from 'react'
import HomeOrder from './components/Orders/HomeOrder';
import SideBar from './components/Orders/SideBar';
function RenderOrder() {
  return (
    <div className="App flex">
    <SideBar/>
    <HomeOrder/>
  </div>
  )
}

export default RenderOrder