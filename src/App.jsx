import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProtectedRoutes from './services/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn=window.localStorage.getItem("loggedIn"); // check if logged in
  const userType=window.localStorage.getItem("usertype");

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} userType={userType}/>
          <Routes>
            {/* Unauthorised routes */}
            {!isLoggedIn && (
              <>
               <Route path='register' element={<Register/>}/>
               <Route path='login' element={<Login/>}/>
               <Route path='/home' element={<Login/>}/>

              </>
            )}
         
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes/>}>
          <Route path='register' element={<Navigate to={"/"}/>}/>
          <Route path='login' element={<Navigate to={"/"}/>}/>
          <Route path='/' element={<Navigate to={"/home"}/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/product' element={<Product/>}/> */}

          </Route>
          </Routes>
        
      </Router>
      {/* <Register/>
      <Login/> */}

      
    </>
  )
}

export default App
