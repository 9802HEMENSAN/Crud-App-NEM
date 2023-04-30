import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Create from './Components/create';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>

    </div>
  );
}

export default App;
