import React from 'react';
import './SignUp.css'
import Login from './LogIn';
import {Link} from 'react-router-dom';
import signup from './signup.png'
import logo from './logo.png'
const SignUp=()=>{
    return(
        <div className='container'>
           <div className='form'>
             <div className='logo'>
                <svg width="429" height="161" viewBox="0 0 429 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M428 0C416.446 51.0499 314.67 154.52 0 160V0H428Z" fill="white" stroke="white"/>
                </svg>
                <div className='logo-2'>
                    <img src={logo} alt='Our logo'/>
                <div className='name'>
                <h1>SPROUT</h1>
                <h1>Meals</h1>
                </div>
                </div>
                <div className='icon'>
                    <img src={signup} alt='signup'/>
                </div>
            </div>
        <form>
            <h1>Sign Up</h1>
            <div className="set">
            <label id="username">Username</label>
            <input type='text' placeholder="Username" required/>
            </div>
            <div className="set">
            <label id="email">Email</label>
            <input type='email' placeholder="Email Address" required />
            </div>
            <div className="set">
            <label id="password"> Password</label>
            <input type='password' placeholder="Password" required />
            </div>
            <div className="set">
            <label id="phone">Telephone</label>
            <input type='text' placeholder="Phone" required />
            </div>
            <div className="submit">
               <button type="submit">Sign Up</button>
            </div>
            <p>Already have an account?<Link to ='/login'>Log In</Link></p>
        </form>
        </div>
    </div>
    )
}
export default SignUp;