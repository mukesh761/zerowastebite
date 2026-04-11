import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './authentication/Login'
import Signup from './authentication/Singup'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Donation from './pages/Donation'
import Chat from './pages/Chat'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = <Dashboard/> />
      <Route path='/inventory' element = <Inventory/> />
      <Route path='/donation' element = <Donation/> />
      <Route path='/chat' element = <Chat/> />

      <Route path='/login' element = <Login/> />
      <Route path='/signup' element = <Signup/> />
    </Routes>
  )
}

export default App