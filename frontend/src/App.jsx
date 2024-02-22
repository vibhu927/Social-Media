// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
// import { Dashboard } from './pages/Dashboard';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>}/>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="home" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
