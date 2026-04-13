import { createContext } from "react"
const backend = import.meta.env.VITE_BACKEND

const socketContext=createContext()

const SocketProvider=({children})=>{
    const socket= io(backend, {
        withCredentials: true,
    })
    return (
        <socketContext.Provider value={{socket}}>
            {children}
        </socketContext.Provider>
    )
}

export {socketContext,SocketProvider,socket}