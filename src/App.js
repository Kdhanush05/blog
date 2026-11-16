import React from 'react';
import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Signup from './components/singup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Blog from './components/blog';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blog />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
