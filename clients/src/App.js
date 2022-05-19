import './App.css';
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
  );
}

export default App;
