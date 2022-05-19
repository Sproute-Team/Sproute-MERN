
import './App.css';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Login/>
     <Route path="/signup" component={SignUp}/>
     <Route path="/login" component={Login}/>
    </div>
    </Router>
  );
}

export default App;
