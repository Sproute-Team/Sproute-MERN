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
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AllLanding/>}/>
          <Route path='/menu' element={<RenderMenu/>}/>
          <Route path="/orders" element={<RenderOrder/>}/>
          <Route path="/overview" element={<RenderOverview/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 24ee33cfd156e3e75114e6ab11a60f37c093b0c6
  );
}

export default App;
