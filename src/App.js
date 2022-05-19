import './App.css';
import Landing from './Landing'
import GetStarted from './Getstarted';
import signup from './server';
import getAllUsers from './getAllusers';

function App() {
  signup()
  getAllUsers()
  return (
    <div className="App">
      <Landing />
      <GetStarted />
    </div>
  );
}

export default App;
