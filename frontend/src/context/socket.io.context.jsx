import { createContext, useEffect } from "react"
const backend = import.meta.env.VITE_BACKEND
import {io} from 'socket.io-client'

const socketContext=createContext()

const SocketProvider=({children})=>{
    const socket= io(backend, {
        withCredentials: true,
    })
    useEffect(()=>{
        if(socket){
            socket.on('requestreceived',(data)=>{
                console.log('Request received:', data);
            });
        }
    }, [socket])
    return (
        <socketContext.Provider value={{socket}}>
            {children}
        </socketContext.Provider>
    )
}


export {socketContext,SocketProvider}