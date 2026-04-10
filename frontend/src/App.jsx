import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './authentication/Login'
import Signup from './authentication/Singup'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = <Inventory/> />
      <Route path='/login' element = <Login/> />
      <Route path='/signup' element = <Signup/> />
    </Routes>
  )
}

export default App