import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Tours from './pages/Tours';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tour from './pages/Tour';
import { useState } from 'react';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tours" element={<Tours />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="tours/:id" element={<Tour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;