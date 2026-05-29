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

let users={}
let socketIdToUserId={}

io.on('connection',(socket)=>{
    console.log('connected to socket io',socket.id)
    socket.on('adduser',async({userId})=>{
        console.log('adding user to socket io',userId)
        users[userId]=socket.id
        socketIdToUserId[socket.id]=userId
        console.log(users)
    })
    socket.on('request',async ({item})=>{
        console.log('request received in socket',item)
        let user=await userModel.findOne({_id:item.userId})
        
 const targetSocketId = users[user._id]
        if (targetSocketId) {
          io.to(targetSocketId).emit('requestreceived', {
            message: 'You received a new request',
            item,
            by: socketIdToUserId[socket.id],
          })
        }
       })
       socket.on('gotrequest',async({data})=>{
        console.log('gotrequest received in socket',data)
        let user=await userModel.findOne({_id:data.item.userId}).populate('requests')
        user.requests.push(data?.item);
        console.log(user);
        await user.save();

       })
})

export {io,app,httpServer}