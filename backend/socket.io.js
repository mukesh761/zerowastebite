import express from 'express'
import { Socket,Server } from 'socket.io'
import {createServer} from 'http'
const app=express()
const httpServer= createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})
let users={}
io.on('connection',(socket)=>{
   console.log('user connected',socket.id)
})

export {io,app,httpServer}