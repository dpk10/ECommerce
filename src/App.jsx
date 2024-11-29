import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProtectedRoutes from './services/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          {/* Protected Routes */}
          <Route path='/' element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>}/>
          </Route>
          </Routes>
        
      </Router>
      {/* <Register/>
      <Login/> */}

      
    </>
  )
}

export default App
