
import './App.css';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import {BrowserRouter,Routes,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<SignUp/>}></Route>
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
