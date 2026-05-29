import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    orgname:{
        type:String,
    },
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
     requests:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]
});

const User = mongoose.model("User",userSchema);
export default User;