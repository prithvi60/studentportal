import '../components/App.scss';
import Login from './Login';
import Registration from './Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Out from './Out';

// HERE FOR ROUTING WE HAVE TO DEFINE PATHS SO 
// THROUGH REACT-ROUTER WE CAN ROUTE AND GIVE THE PATH TO INDIVIDUAL COMPONENTS

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/out" element={<Out/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
