import './App.css';
import SideBar from './components/menu/sidebar';
import Header from './components/menu/Header';
import Menu from './components/menu/addMenu';
import MenuItems from './components/menu/menuItems';

function App() {
  return (
    <div className="App">
    <div className='side_menu'>
    <SideBar/>
    
    <div className='header_side_menu'>
    <Header/>
    <div className='menu_menuItems'>
    <Menu/>
    <div className='items-menu'>
    <MenuItems/>
    </div>
    </div>
    
    </div>
    </div>
    
    
    </div>
  );
}

export default App;
