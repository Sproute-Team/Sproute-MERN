import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
// import { BrowserRouter, Routes,Route} from 'react-router-dom'
import RenderOrder from './Pages/RenderOrder';
import RenderOverview from './Pages/RenderOverview';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/orders" element={<RenderOrder/>}/>
          <Route path="/overview" element={<RenderOverview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
