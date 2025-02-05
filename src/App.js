import React from 'react'
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Login from './Component/Login'
import Sign from './Component/Sign'
import Dashboard from './Component/Dashboard'
import "./App.css"
const App = () => {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/login'/> }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </Router>
  )
}

export default App
