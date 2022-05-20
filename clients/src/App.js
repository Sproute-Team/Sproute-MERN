import './App.css';
<<<<<<< HEAD
import Sidebar from './sidebar.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
=======
import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import RenderOrder from './Pages/RenderOrder';
import RenderOverview from './Pages/RenderOverview';
import AllLanding from './LandingPages/AllLanding';
import RenderMenu from './Pages/RenderMenu';
<<<<<<< HEAD
import Clients from './Pages/Clients';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import './App.css';
import RenderAll from './RegisterClient/RenderAll';
=======
>>>>>>> parent of 7eb01eb (remastering the pages)
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AllLanding/>}/>
<<<<<<< HEAD
          <Route path='/registerClient' element={<RenderAll/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
=======
>>>>>>> parent of 7eb01eb (remastering the pages)
          <Route path='/menu' element={<RenderMenu/>}/>
          <Route path="/orders" element={<RenderOrder/>}/>
          <Route path="/overview" element={<RenderOverview/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 24ee33cfd156e3e75114e6ab11a60f37c093b0c6
  );
}

export default App;
