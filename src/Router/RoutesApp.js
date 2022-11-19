import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../pages/About/About';
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { AuthContext } from '../context/UserContext';


const RoutesApp = () => {
  const { authenticate } = useContext(AuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={authenticate ? <Home /> : <Navigate to='/' />} />
        <Route path='/about' element={authenticate ? <About /> : <Navigate to='/' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp