import React from 'react';
import './LogIn.css';
import login from'./login.jpg';
import logo from './logo.png';

const LogIn=()=> {
  return (
    <div className='container'>
         <div className='form'>
          <div className='logo'>
            <svg width="429" height="161" viewBox="0 0 429 161" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M428 0C416.446 51.0499 314.67 154.52 0 160V0H428Z" fill="white" stroke="white"/>
            </svg>
            <div className='logo-2'>
            <img src={logo} alt='logo'/>
            <div className='name'>
            <h1>SPROUT</h1>
            <h1>Meals</h1>
            </div>
            </div>
            <div className='icon'>
            <img src={login} alt="welcome"/>
            </div>
          </div>
        <form>
            <h1>Log In</h1>
            <div className="set">
            <label id="email">Email</label>
            <input type='email' placeholder="Email Address" required/>
            </div>

            <div className="set">
            <label id="password">Password</label>
            <input type='password' placeholder="Password" required />
            </div>

            <div className="submit">
               <button>Log In</button>
            </div>
            
            <p>Don't have an account?<a href="SignUp.js">Sign Up</a></p>
            <p id="reserved">All rights reserved 2022</p>
        </form>
        </div>
        
    </div>
  )
}

export default LogIn