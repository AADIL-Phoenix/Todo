import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import { Routes, Route } from 'react-router-dom'
const APP = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    
    </div>

  )
}

export default APP