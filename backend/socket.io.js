import express from 'express'
import { Socket,Server } from 'socket.io'
import {createServer} from 'http'
import userModel from './schema/userSchema.js'
import dotenv from "dotenv";
dotenv.config();
const app=express()
const httpServer= createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND, 
    methods: ["GET", "POST"],
    credentials: true,
  },
})

io.on('connection',(socket)=>{
    let users={}
    socket.on('adduser',({userId})=>{
        users[userId]=socket.id
    })
   console.log('user connected',socket.id)
   socket.on('request',async ({item})=>{

    let user=await userModel.findOne({_id:item.userId})
    console.log('request received',item,user)
    console.log(users[item.userId])

    socket.to(users[item.userId]).emit('requestreceived',{item,user})
   })
})

export {io,app,httpServer}