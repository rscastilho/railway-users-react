import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About/About';
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default RoutesApp