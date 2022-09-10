
import './App.css';
import Home from './Pages/Home'
import Navbar from './Navbar/Navbar'
import Users from './Pages/User/Users';
import AddUsers from "./Pages/User/AddUsers";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:id" element={<Users/>}/>
        <Route path="/Add-Users" element={<AddUsers/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
