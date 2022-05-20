import sprout from './sprout.svg';
import search from './search.svg';
import notification from './notification.svg';
import bar from './bar.svg';
import user from './user.svg';
import './navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="sprout">
                <img src= {sprout}  alt="logo" />
            </div>
            <div className="icons">
                <a href="#">
                    <img src= {search}  alt="search" />
                </a>                
                <a href="#">
                    <img src= {notification}  alt="notification" />
                </a>                
                <a href="#">
                <img src= {bar}  alt="bar" id="bar" />
                </a>                
               <span id="user">Umukundwa Denise</span>
               <a href="#">
               <img id="userIcon" src= {user}  alt="user" />
                </a>               
            </div>
        </div>
     );
}
 
export default Navbar;