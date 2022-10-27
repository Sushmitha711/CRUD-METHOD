
import './App.css';
import Home from './Pages/Home'
import Navbar from './Navbar/Navbar'
import Users from './Pages/User/Users';
import AddUsers from "./Pages/User/AddUsers";
import Edit from './Pages/User/Edit';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:id" element={<Users/>}/>
        <Route path="/AddUsers" element={<AddUsers/>}/> 
        <Route path="/Edit/:id" element={<Edit/>}/> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
