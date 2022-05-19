import React from 'react'
// import SideBar from '../components/menu/sidebar';
import Header from '../components/menu/Header';
import Menu from '../components/menu/addMenu';
import MenuItems from '../components/menu/menuItems';
import SideBar from '../components/Orders/SideBar';

function RenderMenu() {
  return (
    <div className="RenderMenu">
    <div className='side_menu'><SideBar/>
    <div className='header_side_menu'><Header/>
    <div className='menu_menuItems'><Menu/>
    <div className='items-menu'><MenuItems/></div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RenderMenu