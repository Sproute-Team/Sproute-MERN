import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import RenderOrder from './Pages/RenderOrder';
import RenderOverview from './Pages/RenderOverview';
import AllLanding from './LandingPages/AllLanding';
import RenderMenu from './Pages/RenderMenu';
import Clients from './Pages/Clients';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<AllLanding/>}/> */}
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/menu' element={<RenderMenu/>}/>
          <Route path='/client' element={<Clients/>}/>
          <Route path="/orders" element={<RenderOrder/>}/>
          <Route path="/overview" element={<RenderOverview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
