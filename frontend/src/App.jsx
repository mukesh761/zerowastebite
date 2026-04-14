import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './authentication/Login'
import Signup from './authentication/Singup'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Donation from './pages/Donation'
import Chat from './pages/Chat'
import { userContext } from "./context/User.context";
import { useContext ,useEffect } from 'react'
import Profile from './pages/Profile'
import { socketContext } from './context/socket.io.context'

const App = () => {
 const {islogin ,setislogin}=useContext(userContext)
  useEffect(() => {
    const loggedIn=(localStorage.getItem("islogin"));
    setislogin(loggedIn)

  }, [islogin])

  const {socket}=useContext(socketContext)
  useEffect(() => {
    if (socket && islogin) {
      socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
      });
      socket.emit('adduser', { userId: JSON.parse(localStorage.getItem('user'))?._id });
    }
  }, [socket]);

  return (
    <Routes>
      <Route path='/' element ={islogin?<Dashboard/>: <Login/>}/>
      <Route path='/inventory' element = {islogin?<Inventory/>:<Login/>}/>
      <Route path='/donation' element = {islogin?<Donation/>:<Login/>} />
      <Route path='/chat' element = {islogin?<Chat/>:<Login/>} />
      <Route path='/profile' element = {islogin?<Profile/>:<Login/>} />

      <Route path='/login' element = {islogin?<Dashboard/>:<Login/>} />
      <Route path='/signup' element = {islogin?<Dashboard/>:<Signup/>} />
    </Routes>
  )
}

export default App