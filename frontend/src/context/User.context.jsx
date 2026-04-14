import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
const backend = import.meta.env.VITE_BACKEND

const userContext= createContext()

const UserProvider=({children})=>{
    const [islogin, setislogin] = useState(false)
    const [user, setuser] = useState(null)
    const navigate=useNavigate()
    const signOut=async()=>{
        try {
            const response=await axios.get(`${backend}/user/logout`,{withCredentials:true})
            localStorage.removeItem('user')
            localStorage.removeItem('islogin')

            navigate('/login')
        } catch (error) {
         console.log('error in singout ', error )   
        }
    }
    
    return(

    <userContext.Provider value={{islogin,setislogin, user,setuser,signOut}}>
        {children}
    </userContext.Provider>
    )
}

export {UserProvider, userContext}
