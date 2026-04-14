import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  receiverId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  conversationId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Convo'
  },
  message: String,
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);